// App principal: monta as abas, o card de teoria, o quiz e o painel de varredura de pastas.
// Depende de window.QUIZ_AULAS (data/aulaN.js), QuizEngine, ProgressStore, FolderWatcher e
// window.QUIZ_RESOURCES / QUIZ_TOPIC_RESOURCE_MAP / QUIZ_TOPIC_LABELS (resources.js).
(function () {
  var state = {
    aulas: (window.QUIZ_AULAS || []).slice(),
    activeAulaId: null,
    session: null, // { queue, index, results, answered, selected, inputValue, optionsForCurrent }
    scanning: false
  };

  function el(id) {
    return document.getElementById(id);
  }

  function escapeHtml(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function getActiveAula() {
    return state.aulas.filter(function (a) {
      return a.id === state.activeAulaId;
    })[0];
  }

  function allTopicsForAula(aula) {
    var topics = aula.questions.map(function (q) {
      return q.topic;
    });
    (aula.passages || []).forEach(function (p) {
      p.questions.forEach(function (q) {
        topics.push(q.topic);
      });
    });
    var seen = [];
    topics.forEach(function (t) {
      if (seen.indexOf(t) === -1) seen.push(t);
    });
    return seen;
  }

  // { topic: [aulaId, ...] } — usado só uma vez no boot pra migrar o histórico antigo (guardado
  // sem separar por aula) com segurança: um tópico só migra se pertencer a uma única aula.
  function buildTopicOwnerMap() {
    var map = {};
    state.aulas.forEach(function (aula) {
      allTopicsForAula(aula).forEach(function (topic) {
        if (!map[topic]) map[topic] = [];
        if (map[topic].indexOf(aula.id) === -1) map[topic].push(aula.id);
      });
    });
    return map;
  }

  // ---------- Abas ----------

  function renderTabs() {
    var html = state.aulas
      .map(function (aula) {
        var active = aula.id === state.activeAulaId;
        var cls = active
          ? "bg-indigo-600 text-white shadow-sm"
          : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200";
        return (
          '<button data-aula="' + aula.id + '" class="rounded-lg px-4 py-2 text-sm font-medium transition ' +
          cls + '">' + escapeHtml(aula.label) +
          '<span class="ml-1.5 text-xs opacity-70">' + escapeHtml(aula.dateLabel || "") + "</span></button>"
        );
      })
      .join("");
    el("tabs").innerHTML = html;
    Array.prototype.forEach.call(el("tabs").querySelectorAll("button"), function (btn) {
      btn.addEventListener("click", function () {
        selectAula(btn.getAttribute("data-aula"));
      });
    });
  }

  function selectAula(id) {
    state.activeAulaId = id;
    state.session = null;
    renderTabs();
    renderTheory();
    renderQuizPanel();
    renderPerformancePanel();
  }

  // ---------- Teoria ----------

  function renderTheory() {
    var aula = getActiveAula();
    var t = aula.theory;
    var examples = t.examples
      .map(function (ex) {
        return (
          '<li class="py-1"><span class="font-medium text-slate-800">' + escapeHtml(ex.en) +
          '</span><span class="text-slate-400"> — </span><span class="text-slate-500">' + escapeHtml(ex.pt) + "</span></li>"
        );
      })
      .join("");
    var tips = t.tips
      .map(function (tip) {
        return '<li class="py-0.5">💡 ' + escapeHtml(tip) + "</li>";
      })
      .join("");

    el("theory-panel").innerHTML =
      '<details class="group rounded-xl border border-slate-200 bg-white shadow-sm" open>' +
      '<summary class="cursor-pointer list-none px-4 py-3 font-semibold text-slate-900 flex items-center justify-between">' +
      "<span>📖 " + escapeHtml(t.title) + "</span>" +
      '<span class="text-slate-400 text-sm group-open:hidden">mostrar</span>' +
      '<span class="text-slate-400 text-sm hidden group-open:inline">ocultar</span>' +
      "</summary>" +
      '<div class="px-4 pb-4 pt-1 text-sm">' +
      '<p class="text-slate-600">' + escapeHtml(t.explanation) + "</p>" +
      '<ul class="mt-3 divide-y divide-slate-100 text-sm">' + examples + "</ul>" +
      '<ul class="mt-3 space-y-1 rounded-lg bg-amber-50 p-3 text-sm text-amber-800">' + tips + "</ul>" +
      "</div></details>";
  }

  // ---------- Quiz ----------

  function startQuiz(aula) {
    var queue = QuizEngine.buildPlayQueue(aula);
    state.session = {
      queue: queue,
      index: 0,
      results: [],
      answered: false,
      selected: null,
      inputValue: "",
      optionsForCurrent: null,
      parts: null,
      lastParts: null
    };
    prepareCurrentOptions();
    renderQuizPanel();
  }

  // Uma pergunta é de múltipla escolha sempre que tiver "options" e não for explicitamente do
  // tipo "fill" — assim, esquecer o campo "type" numa aula nova não quebra a tela (cai em mc).
  function isMultipleChoice(q) {
    return q.type !== "fill" && !QuizEngine.isMultiPart(q) && Array.isArray(q.options) && q.options.length > 0;
  }

  // Prepara o estado da pergunta atual: opções embaralhadas (mc), lista de "direitas" embaralhada
  // (match) e um espaço vazio por linha nas perguntas de várias partes (match e multi).
  function prepareCurrentOptions() {
    var session = state.session;
    var item = session.queue[session.index];
    var q = item && item.question;
    session.optionsForCurrent = null;
    session.parts = null;
    session.lastParts = null;
    if (!q) return;
    if (q.type === "match") {
      session.parts = q.pairs.map(function () { return ""; });
      session.optionsForCurrent = QuizEngine.shuffle(q.pairs.map(function (pair) { return pair.right; }));
    } else if (q.type === "multi") {
      session.parts = q.blanks.map(function () { return ""; });
    } else if (isMultipleChoice(q)) {
      session.optionsForCurrent = QuizEngine.shuffle(q.options);
    }
  }

  // Só libera o botão "Verificar" quando há algo respondido (nas de várias partes, todas as linhas).
  function canSubmit(q, session) {
    if (QuizEngine.isMultiPart(q)) {
      return session.parts.every(function (part) {
        return String(part).trim() !== "";
      });
    }
    return q.type === "fill" ? !!session.inputValue.trim() : !!session.selected;
  }

  function checkCurrentAnswer() {
    var session = state.session;
    var item = session.queue[session.index];
    var q = item.question;
    if (!canSubmit(q, session)) return;
    var userAnswer = QuizEngine.isMultiPart(q)
      ? session.parts.slice()
      : q.type === "fill" ? session.inputValue.trim() : session.selected;
    var result = QuizEngine.checkAnswer(q, userAnswer);
    session.answered = true;
    session.lastCorrect = result.correct;
    session.lastParts = result.parts || null;
    session.lastUserAnswer = userAnswer;
    session.results.push({ topic: q.topic, correct: result.correct });
    ProgressStore.recordAnswer(state.activeAulaId, q.topic, result.correct);
    renderQuizPanel();
    renderPerformancePanel();
  }

  function nextQuestion() {
    var session = state.session;
    session.index += 1;
    session.answered = false;
    session.selected = null;
    session.inputValue = "";
    if (session.index < session.queue.length) prepareCurrentOptions();
    renderQuizPanel();
  }

  function renderQuizPanel() {
    var aula = getActiveAula();
    var session = state.session;

    if (!session) {
      // O banco da aula costuma ser maior que uma rodada: a tela avisa quantas perguntas
      // vêm agora (sorteadas) e quantas existem no total.
      var totalQ = aula.questions.length;
      var roundQ = Math.min(totalQ, QuizEngine.ROUND.standalone);
      var roundLabel = roundQ + " de " + totalQ + " questões" +
        (aula.passages.length ? " + 1 texto de leitura" : "");

      el("quiz-panel").innerHTML =
        '<div class="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm">' +
        '<p class="mb-1 text-slate-600">Rodada de ' + roundLabel + ".</p>" +
        '<p class="mb-3 text-xs text-slate-400">Cada rodada sorteia perguntas diferentes do banco da aula.</p>' +
        '<button id="start-quiz-btn" class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">▶ Começar exercícios</button>' +
        "</div>";
      el("start-quiz-btn").addEventListener("click", function () {
        startQuiz(aula);
      });
      return;
    }

    if (session.index >= session.queue.length) {
      renderSummary(aula, session);
      return;
    }

    renderQuestion(aula, session);
  }

  // Perguntas de várias partes (match e multi): cada linha ganha a cor de acerto/erro depois de
  // corrigida e, se errou, mostra a resposta esperada logo abaixo.
  function partClass(session, i) {
    if (!session.answered || !session.lastParts) {
      return "border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";
    }
    return session.lastParts[i]
      ? "border-emerald-400 bg-emerald-50 text-emerald-800"
      : "border-rose-400 bg-rose-50 text-rose-800";
  }

  function partExpectedHtml(session, i, expected) {
    if (!session.answered || !session.lastParts || session.lastParts[i]) return "";
    return '<span class="w-full text-xs text-rose-800">Resposta esperada: <span class="font-medium">' + escapeHtml(expected) + "</span></span>";
  }

  // "match": uma linha por par, com um menu para escolher a metade que combina.
  function renderMatchArea(q, session) {
    return (
      '<div class="divide-y divide-slate-100">' +
      q.pairs
        .map(function (pair, i) {
          var options =
            '<option value="">Escolha…</option>' +
            session.optionsForCurrent
              .map(function (opt) {
                return '<option value="' + escapeHtml(opt) + '"' + (opt === session.parts[i] ? " selected" : "") + ">" + escapeHtml(opt) + "</option>";
              })
              .join("");
          return (
            '<div class="flex flex-wrap items-center gap-x-3 gap-y-1 py-2">' +
            '<span class="w-full text-sm font-medium text-slate-800 sm:w-2/5">' + escapeHtml(pair.left) + "</span>" +
            '<select data-idx="' + i + '" ' + (session.answered ? "disabled" : "") +
            ' class="answer-input match-select min-w-0 flex-1 rounded-lg border px-3 py-2 text-sm ' + partClass(session, i) + '">' +
            options + "</select>" +
            partExpectedHtml(session, i, pair.right) +
            "</div>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  // "multi": uma lacuna por linha (tabela de formas verbais, diálogo com lacunas numeradas...).
  function renderMultiArea(q, session) {
    return (
      '<div class="divide-y divide-slate-100">' +
      q.blanks
        .map(function (blank, i) {
          return (
            '<div class="flex flex-wrap items-center gap-x-3 gap-y-1 py-2">' +
            '<span class="w-full text-sm font-medium text-slate-800 sm:w-2/5">' + escapeHtml(blank.label) + "</span>" +
            '<input type="text" autocomplete="off" data-idx="' + i + '" ' + (session.answered ? "disabled" : "") +
            ' class="answer-input multi-input min-w-0 flex-1 rounded-lg border px-3 py-2 text-sm ' + partClass(session, i) + '" ' +
            'placeholder="Digite..." value="' + escapeHtml(session.parts[i]) + '" />' +
            partExpectedHtml(session, i, blank.accept[0]) +
            "</div>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function renderQuestion(aula, session) {
    var item = session.queue[session.index];
    var q = item.question;
    var pct = Math.round((session.index / session.queue.length) * 100);

    var passageHtml = "";
    if (item.passage) {
      passageHtml =
        '<div class="mb-4 rounded-lg bg-slate-50 border border-slate-200 p-3 text-sm text-slate-700">' +
        '<p class="mb-1 font-semibold text-slate-500">📖 ' + escapeHtml(item.passage.title) + "</p>" +
        "<p>" + escapeHtml(item.passage.text) + "</p></div>";
    }

    var mcQuestion = isMultipleChoice(q);
    var answerAreaHtml = "";
    if (q.type === "match") {
      answerAreaHtml = renderMatchArea(q, session);
    } else if (q.type === "multi") {
      answerAreaHtml = renderMultiArea(q, session);
    } else if (mcQuestion) {
      answerAreaHtml = session.optionsForCurrent
        .map(function (opt) {
          var stateCls = "border border-slate-200 bg-white hover:border-indigo-300 hover:bg-indigo-50";
          if (session.answered) {
            if (opt === q.answer) stateCls = "border border-emerald-400 bg-emerald-50 text-emerald-800";
            else if (opt === session.selected) stateCls = "border border-rose-400 bg-rose-50 text-rose-800";
            else stateCls = "border border-slate-200 bg-white opacity-60";
          } else if (opt === session.selected) {
            stateCls = "border border-indigo-500 bg-indigo-50";
          }
          return (
            '<button data-opt="' + escapeHtml(opt) + '" class="option-btn w-full rounded-lg px-4 py-2.5 text-left text-sm transition ' +
            stateCls + '">' + escapeHtml(opt) + "</button>"
          );
        })
        .join('<div class="h-2"></div>');
    } else {
      answerAreaHtml =
        '<input id="fill-input" type="text" autocomplete="off" ' +
        (session.answered ? "disabled" : "") +
        ' class="answer-input w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100" ' +
        'placeholder="Digite sua resposta..." value="' + escapeHtml(session.inputValue) + '" />';
    }

    var feedbackHtml = "";
    if (session.answered) {
      var boxCls = session.lastCorrect ? "bg-emerald-50 border-emerald-300 text-emerald-800" : "bg-rose-50 border-rose-300 text-rose-800";
      var icon = session.lastCorrect ? "✅ Certo!" : "❌ Não foi essa.";
      var yourAnswerLine =
        q.type === "fill"
          ? '<p class="mt-1 text-sm">Sua resposta: <span class="font-medium">' + escapeHtml(session.lastUserAnswer) + "</span>" +
            (session.lastCorrect ? "" : ' · Resposta esperada: <span class="font-medium">' + escapeHtml(q.accept && q.accept.length ? q.accept[0] : q.answer) + "</span>") +
            "</p>"
          : "";
      feedbackHtml =
        '<div class="mt-4 rounded-lg border p-3 text-sm ' + boxCls + '">' +
        '<p class="font-semibold">' + icon + "</p>" +
        yourAnswerLine +
        '<p class="mt-1 text-slate-700">' + escapeHtml(q.explanation) + "</p>" +
        "</div>";
    }

    var footerBtn = session.answered
      ? '<button id="next-btn" class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">' +
        (session.index + 1 >= session.queue.length ? "Ver resultado 🏁" : "Próxima →") + "</button>"
      : '<button id="check-btn" class="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40" ' +
        (canSubmit(q, session) ? "" : "disabled") +
        ">Verificar resposta</button>";

    el("quiz-panel").innerHTML =
      '<div class="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">' +
      '<div class="mb-3 flex items-center justify-between text-xs text-slate-400">' +
      "<span>Questão " + (session.index + 1) + " de " + session.queue.length + "</span>" +
      '<span class="rounded-full bg-slate-100 px-2 py-0.5">' + escapeHtml(window.QUIZ_TOPIC_LABELS[q.topic] || q.topic) + "</span>" +
      "</div>" +
      '<div class="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-slate-100">' +
      '<div class="h-full rounded-full bg-indigo-500 transition-all" style="width:' + pct + '%"></div></div>' +
      passageHtml +
      '<p class="mb-4 whitespace-pre-line text-base font-medium text-slate-900">' + escapeHtml(q.prompt) + "</p>" +
      '<div id="answer-area">' + answerAreaHtml + "</div>" +
      feedbackHtml +
      '<div class="mt-5 flex justify-end">' + footerBtn + "</div>" +
      "</div>";

    if (mcQuestion && !session.answered) {
      Array.prototype.forEach.call(el("quiz-panel").querySelectorAll(".option-btn"), function (btn) {
        btn.addEventListener("click", function () {
          session.selected = btn.getAttribute("data-opt");
          renderQuestion(aula, session);
        });
      });
    }
    if (q.type === "fill" && !session.answered) {
      var input = el("fill-input");
      input.addEventListener("input", function () {
        session.inputValue = input.value;
        el("quiz-panel").querySelector("#check-btn").disabled = !input.value.trim();
      });
      input.addEventListener("keydown", function (evt) {
        if (evt.key === "Enter" && session.inputValue.trim()) checkCurrentAnswer();
      });
      input.focus();
    }
    if (q.type === "match" && !session.answered) {
      Array.prototype.forEach.call(el("quiz-panel").querySelectorAll(".match-select"), function (sel) {
        sel.addEventListener("change", function () {
          session.parts[Number(sel.getAttribute("data-idx"))] = sel.value;
          el("quiz-panel").querySelector("#check-btn").disabled = !canSubmit(q, session);
        });
      });
    }
    if (q.type === "multi" && !session.answered) {
      var multiInputs = el("quiz-panel").querySelectorAll(".multi-input");
      Array.prototype.forEach.call(multiInputs, function (inp, i) {
        inp.addEventListener("input", function () {
          session.parts[i] = inp.value;
          el("quiz-panel").querySelector("#check-btn").disabled = !canSubmit(q, session);
        });
        inp.addEventListener("keydown", function (evt) {
          if (evt.key !== "Enter") return;
          if (canSubmit(q, session)) checkCurrentAnswer();
          else if (multiInputs[i + 1]) multiInputs[i + 1].focus();
        });
      });
      if (multiInputs[0]) multiInputs[0].focus();
    }
    if (session.answered) {
      el("next-btn").addEventListener("click", nextQuestion);
    } else {
      var checkBtn = el("check-btn");
      if (checkBtn) checkBtn.addEventListener("click", checkCurrentAnswer);
    }
  }

  function renderSummary(aula, session) {
    var total = session.results.length;
    var correct = session.results.filter(function (r) {
      return r.correct;
    }).length;
    var pct = total ? Math.round((correct / total) * 100) : 0;
    var mood = pct >= 90 ? "🎉 Excelente!" : pct >= 70 ? "👏 Muito bem!" : "💪 Vamos reforçar!";

    var byTopic = {};
    session.results.forEach(function (r) {
      if (!byTopic[r.topic]) byTopic[r.topic] = { correct: 0, total: 0 };
      byTopic[r.topic].total += 1;
      if (r.correct) byTopic[r.topic].correct += 1;
    });

    var topicRows = Object.keys(byTopic)
      .map(function (topic) {
        var s = byTopic[topic];
        var ok = s.correct === s.total;
        return (
          '<li class="flex items-center justify-between py-1.5 text-sm">' +
          '<span>' + (ok ? "✅" : "⚠️") + " " + escapeHtml(window.QUIZ_TOPIC_LABELS[topic] || topic) + "</span>" +
          '<span class="text-slate-400">' + s.correct + "/" + s.total + "</span></li>"
        );
      })
      .join("");

    var missedTopics = Object.keys(byTopic).filter(function (t) {
      return byTopic[t].correct < byTopic[t].total;
    });
    var resourceKeys = [];
    missedTopics.forEach(function (t) {
      var key = window.QUIZ_TOPIC_RESOURCE_MAP[t];
      if (key && resourceKeys.indexOf(key) === -1) resourceKeys.push(key);
    });

    var resourcesHtml = "";
    if (resourceKeys.length) {
      resourcesHtml =
        '<div class="mt-5">' +
        '<p class="mb-2 font-semibold text-slate-800">📚 Pra reforçar o que você errou:</p>' +
        resourceKeys
          .map(function (key) {
            var group = window.QUIZ_RESOURCES[key];
            var links = group.links
              .map(function (link) {
                return (
                  '<li><a class="text-indigo-600 underline hover:text-indigo-800" href="' + escapeHtml(link.url) +
                  '" target="_blank" rel="noopener">' + escapeHtml(link.title) + '</a> <span class="text-xs text-slate-400">(' +
                  escapeHtml(link.type) + ")</span></li>"
                );
              })
              .join("");
            return (
              '<div class="mb-3 rounded-lg bg-slate-50 p-3"><p class="mb-1 text-sm font-medium text-slate-700">' +
              escapeHtml(group.label) + '</p><ul class="list-disc space-y-0.5 pl-5 text-sm">' + links + "</ul></div>"
            );
          })
          .join("") +
        "</div>";
    } else {
      resourcesHtml = '<p class="mt-4 text-sm text-emerald-700">Você acertou tudo — nenhum reforço necessário por aqui! 🙌</p>';
    }

    el("quiz-panel").innerHTML =
      '<div class="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">' +
      '<p class="text-sm text-slate-400">Resultado — ' + escapeHtml(aula.label) + "</p>" +
      '<p class="mt-1 text-2xl font-bold text-slate-900">' + mood + " " + correct + "/" + total + " (" + pct + "%)</p>" +
      '<ul class="mt-4 divide-y divide-slate-100">' + topicRows + "</ul>" +
      resourcesHtml +
      '<button id="retry-btn" class="mt-5 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700">🔁 Refazer (perguntas embaralhadas)</button>' +
      "</div>";

    el("retry-btn").addEventListener("click", function () {
      startQuiz(aula);
    });
  }

  // ---------- Desempenho histórico ----------

  function renderPerformancePanel() {
    var aula = getActiveAula();
    var topics = allTopicsForAula(aula);
    var rows = topics
      .map(function (topic) {
        var stats = ProgressStore.getTopicStats(aula.id, topic);
        if (!stats.attempts) return "";
        var pct = Math.round((stats.correct / stats.attempts) * 100);
        var barColor = pct >= 80 ? "bg-emerald-500" : pct >= 50 ? "bg-amber-500" : "bg-rose-500";
        return (
          '<div class="py-1.5">' +
          '<div class="flex justify-between text-xs text-slate-500"><span>' + escapeHtml(window.QUIZ_TOPIC_LABELS[topic] || topic) +
          "</span><span>" + stats.correct + "/" + stats.attempts + " (" + pct + "%)</span></div>" +
          '<div class="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-100"><div class="h-full ' + barColor +
          '" style="width:' + pct + '%"></div></div></div>'
        );
      })
      .join("");

    el("performance-panel").innerHTML = rows
      ? '<div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">' +
        '<p class="mb-2 text-sm font-semibold text-slate-700">📊 Seu desempenho nesta aula (histórico)</p>' + rows + "</div>"
      : "";
  }

  // ---------- Varredura da pasta do curso ----------

  function setScanPanelVisible(visible) {
    el("scan-panel").classList.toggle("hidden", !visible);
  }

  function renderScanLog(lines, inProgress, pendingList) {
    setScanPanelVisible(true);
    var logHtml = lines
      .map(function (evt) {
        return evt.status === "known"
          ? '<li class="text-emerald-700">✅ ' + escapeHtml(evt.name) + " — já carregada</li>"
          : '<li class="text-amber-700">🆕 ' + escapeHtml(evt.name) + " — encontrada, ainda sem exercícios</li>";
      })
      .join("");

    var pendingHtml = "";
    if (pendingList && pendingList.length) {
      pendingHtml = pendingList
        .map(function (p) {
          var slugMatch = p.name.match(/aula[_-]?(\d+)/i);
          var slug = slugMatch ? "aula" + slugMatch[1] : "aulaNova";
          var promptText =
            'Gera os exercicios da aula "' + p.name + '" (projeto quiz-app do curso English4Life). ' +
            "Leia os arquivos dessa pasta (" + p.files.join(", ") + "), identifique o tema gramatical, e crie " +
            "data/" + slug + ".js seguindo exatamente o mesmo padrao de data/aula1.js, data/aula2.js e data/aula3.js " +
            "(objeto com id, label, dateLabel, folder, theory {title, explanation, examples, tips} e questions[] " +
            "variadas - multipla escolha e preencher lacuna - com topic e explanation em portugues; inclua um " +
            "passage de leitura se fizer sentido). Frases originais, inspiradas nos exercicios da pasta, nao " +
            "copiadas. Depois inclua <script src=\"data/" + slug + ".js\"></script> no index.html.";
          return (
            '<div class="mt-2 rounded-lg border border-amber-200 bg-amber-50 p-3">' +
            '<p class="text-sm font-medium text-amber-900">🆕 ' + escapeHtml(p.name) + "</p>" +
            '<p class="mt-0.5 text-xs text-amber-700">Arquivos: ' + escapeHtml(p.files.join(", ") || "(pasta vazia)") + "</p>" +
            '<button data-prompt="' + escapeHtml(promptText) + '" class="copy-prompt-btn mt-2 rounded-md bg-amber-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-amber-700">' +
            "📋 Copiar prompt para o Claude</button>" +
            "</div>"
          );
        })
        .join("");
    }

    el("scan-panel").innerHTML =
      '<p class="mb-2 text-sm font-semibold text-slate-700">' + (inProgress ? "🔎 Verificando pasta do curso..." : "Resultado da verificação") + "</p>" +
      '<ul class="space-y-1 text-sm">' + logHtml + "</ul>" +
      pendingHtml +
      (inProgress
        ? ""
        : '<p class="mt-3 text-xs text-slate-400">Peça pra mim (Claude) gerar os exercícios de cada aula pendente — cole o prompt copiado numa conversa aqui no Claude Code.</p>');

    Array.prototype.forEach.call(el("scan-panel").querySelectorAll(".copy-prompt-btn"), function (btn) {
      btn.addEventListener("click", function () {
        var text = btn.getAttribute("data-prompt");
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(function () {
            var original = btn.textContent;
            btn.textContent = "✅ Copiado!";
            setTimeout(function () {
              btn.textContent = original;
            }, 1500);
          });
        }
      });
    });
  }

  function renderScanMessage(msg) {
    setScanPanelVisible(true);
    el("scan-panel").innerHTML = '<p class="text-sm text-slate-600">' + escapeHtml(msg) + "</p>";
  }

  function setScanningUi(scanning) {
    state.scanning = scanning;
    el("scan-btn").disabled = scanning;
    el("scan-btn").classList.toggle("opacity-60", scanning);
    el("scan-hint").textContent = scanning ? "Lendo pastas..." : "";
  }

  function handleScanClick() {
    if (state.scanning) return;
    if (!FolderWatcher.isSupported()) {
      renderScanMessage(
        "Seu navegador não tem suporte a essa checagem automática de pastas (funciona no Chrome ou Edge, no computador). " +
          "Sem problema: quando adicionar uma aula nova, é só me pedir aqui no Claude Code pra gerar os exercícios dela."
      );
      return;
    }

    setScanningUi(true);
    var knownFolders = state.aulas.map(function (a) {
      return a.folder;
    });

    Promise.resolve()
      .then(function () {
        return FolderWatcher.getSavedHandle();
      })
      .then(function (handle) {
        return handle || FolderWatcher.pickCourseFolder();
      })
      .then(function (handle) {
        return FolderWatcher.ensurePermission(handle).then(function (ok) {
          if (!ok) throw new Error("Permissão de acesso à pasta não foi concedida.");
          return handle;
        });
      })
      .then(function (handle) {
        var lines = [];
        renderScanLog(lines, true);
        return FolderWatcher.scanCourseFolder(handle, knownFolders, function (evt) {
          lines.push(evt);
          renderScanLog(lines, true);
        }).then(function (pending) {
          renderScanLog(lines, false, pending);
        });
      })
      .catch(function (err) {
        renderScanMessage("Não foi possível verificar a pasta (" + (err && err.message ? err.message : "operação cancelada") + ").");
      })
      .finally(function () {
        setScanningUi(false);
      });
  }

  // ---------- Boot ----------

  document.addEventListener("DOMContentLoaded", function () {
    if (!state.aulas.length) {
      el("tabs").innerHTML = '<p class="text-sm text-slate-500">Nenhuma aula carregada ainda.</p>';
      return;
    }
    state.activeAulaId = state.aulas[0].id;
    ProgressStore.migrateLegacyIfNeeded(buildTopicOwnerMap());
    renderTabs();
    renderTheory();
    renderQuizPanel();
    renderPerformancePanel();
    el("scan-btn").addEventListener("click", handleScanClick);
  });
})();
