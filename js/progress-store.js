// Guarda o histórico de acertos/erros por (aula + tópico) no localStorage (persiste entre
// sessões). É por aula porque o painel "Seu desempenho nesta aula" só faz sentido mostrando o
// que aconteceu NAQUELA aula — se fosse só por tópico, tópicos reaproveitados em mais de uma
// aula (ex.: "reading-comprehension", usado nos textos de leitura da aula 3 e da aula 4)
// fariam o histórico de uma aula aparecer "herdado" em outra, antes mesmo do usuário começá-la.
(function () {
  var STORAGE_KEY = "quizEnglish4Life.progress.v2";
  var LEGACY_KEY = "quizEnglish4Life.progress.v1"; // formato antigo: só por tópico, sem aula.

  function loadAll() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveAll(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      // localStorage indisponível (ex.: modo privado) — o app segue funcionando sem persistir.
    }
  }

  function key(aulaId, topic) {
    return aulaId + "::" + topic;
  }

  function recordAnswer(aulaId, topic, correct) {
    var data = loadAll();
    var k = key(aulaId, topic);
    if (!data[k]) data[k] = { attempts: 0, correct: 0 };
    data[k].attempts += 1;
    if (correct) data[k].correct += 1;
    saveAll(data);
  }

  function getTopicStats(aulaId, topic) {
    var data = loadAll();
    return data[key(aulaId, topic)] || { attempts: 0, correct: 0 };
  }

  // Migração única do formato antigo (v1, só por tópico). Só migra tópicos que pertencem a UMA
  // única aula — sem ambiguidade, então dá pra saber com certeza de onde veio cada resposta.
  // Tópicos usados em mais de uma aula (ex.: "reading-comprehension") são descartados na
  // migração: não dá pra saber em qual aula cada resposta antiga aconteceu, e "chutar" recriaria
  // exatamente o vazamento que essa mudança resolve. `topicOwnerMap` = { topic: [aulaId, ...] }.
  function migrateLegacyIfNeeded(topicOwnerMap) {
    var data = loadAll();
    if (data.__migratedFromV1) return;

    var legacyRaw;
    try {
      legacyRaw = localStorage.getItem(LEGACY_KEY);
    } catch (e) {
      legacyRaw = null;
    }
    if (legacyRaw) {
      var legacy = null;
      try {
        legacy = JSON.parse(legacyRaw);
      } catch (e) {
        legacy = null;
      }
      if (legacy) {
        Object.keys(legacy).forEach(function (topic) {
          var owners = (topicOwnerMap && topicOwnerMap[topic]) || [];
          if (owners.length === 1) {
            var k = key(owners[0], topic);
            if (!data[k]) data[k] = legacy[topic];
          }
        });
      }
    }

    data.__migratedFromV1 = true;
    saveAll(data);
  }

  window.ProgressStore = {
    recordAnswer: recordAnswer,
    getTopicStats: getTopicStats,
    migrateLegacyIfNeeded: migrateLegacyIfNeeded
  };
})();
