// Lógica pura do quiz: embaralhar, montar a fila de perguntas e corrigir respostas.
// Não mexe no DOM — quem desenha a tela é o app.js.
(function () {
  function shuffle(arr) {
    var copy = arr.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  // Tamanho de uma rodada. O banco de cada aula pode ser bem maior que isso: cada rodada
  // sorteia um subconjunto, para a sessão não ficar longa demais e para repetir a aula
  // trazer perguntas diferentes.
  var ROUND = { standalone: 14, passages: 1 };

  // Monta a fila de perguntas de uma aula: perguntas avulsas sorteadas + blocos de leitura
  // (as perguntas de cada texto de leitura ficam juntas e na sequência, com o texto anexado
  // em cada uma delas para a tela sempre poder mostrá-lo).
  function buildPlayQueue(aula) {
    var standaloneBlocks = shuffle(aula.questions || [])
      .slice(0, ROUND.standalone)
      .map(function (q) {
        return [{ question: q }];
      });

    var passageBlocks = shuffle(aula.passages || [])
      .slice(0, ROUND.passages)
      .map(function (passage) {
        return shuffle(passage.questions).map(function (q) {
          return { question: q, passage: passage };
        });
      });

    var blocks = shuffle(standaloneBlocks.concat(passageBlocks));
    var queue = [];
    blocks.forEach(function (block) {
      block.forEach(function (item) {
        queue.push(item);
      });
    });
    return queue;
  }

  function normalize(str) {
    return String(str || "")
      .trim()
      .toLowerCase()
      .replace(/[’`]/g, "'")
      .replace(/\s+/g, " ")
      // Pontuação no fim não muda a resposta: "goes." e "why is the baby crying?" valem
      // tanto quanto "goes" e "why is the baby crying".
      .replace(/\s*[.!?]+$/, "");
  }

  // Retorna { correct: boolean } para uma pergunta de múltipla escolha ou de preencher.
  function checkAnswer(question, userAnswer) {
    if (question.type === "mc" || !question.type) {
      return { correct: userAnswer === question.answer };
    }
    var accepted = question.accept && question.accept.length ? question.accept : [question.answer];
    var normalizedAccepted = accepted.map(normalize);
    return { correct: normalizedAccepted.indexOf(normalize(userAnswer)) !== -1 };
  }

  window.QuizEngine = {
    ROUND: ROUND,
    shuffle: shuffle,
    buildPlayQueue: buildPlayQueue,
    checkAnswer: checkAnswer
  };
})();
