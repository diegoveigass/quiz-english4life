// Links reais e verificados, curados por tema, para sugestão de reforço quando o usuário erra.
(function () {
  window.QUIZ_RESOURCES = {
    "to-be": {
      label: "Verbo to be (am/is/are)",
      links: [
        { title: "Basic English Grammar (A1): Verb \"BE\" in the Present Tense", url: "https://www.youtube.com/watch?v=yJNr3BrmiGo", type: "vídeo" },
        { title: "Present simple forms of 'to be' — exercícios (Test-English)", url: "https://test-english.com/grammar-points/a1/present-simple-forms-of-to-be/", type: "exercício" },
        { title: "Present simple: 'to be' (British Council LearnEnglish)", url: "https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-be", type: "leitura" }
      ]
    },
    "continuous": {
      label: "Present Continuous",
      links: [
        { title: "Present Continuous | An Easy English Grammar Lesson", url: "https://www.youtube.com/watch?v=QqxdZzOorAU", type: "vídeo" },
        { title: "Present continuous: I'm doing, Are you doing? — exercícios (Test-English)", url: "https://test-english.com/grammar-points/a1/present-continuous/", type: "exercício" }
      ]
    },
    "simple-vs-continuous": {
      label: "Simple Present x Present Continuous",
      links: [
        { title: "Present Simple vs Present Continuous | Easy English Grammar Lesson (A1–A2)", url: "https://www.youtube.com/watch?v=MdoPhd8HOoY", type: "vídeo" },
        { title: "Present simple or present continuous? — exercícios (Test-English)", url: "https://test-english.com/grammar-points/a1/present-simple-present-continuous/", type: "exercício" }
      ]
    },
    "third-person-s": {
      label: "3ª pessoa do Simple Present (-s / -es)",
      links: [
        { title: "Present Simple Spelling Rules — 3rd Person Singular", url: "https://www.youtube.com/watch?v=pNAE2TAoyD8", type: "vídeo" }
      ]
    },
    "stative-dynamic": {
      label: "Verbos de estado x verbos de ação (stative x dynamic)",
      links: [
        { title: "Stative verbs vs Dynamic verbs — List and examples", url: "https://www.youtube.com/watch?v=ohOq09JcBhY", type: "vídeo" },
        { title: "Stative vs dynamic verbs — exercícios (Test-English)", url: "https://test-english.com/grammar-points/a2/stative-vs-dynamic-verbs-or-non-action-vs-action-verbs/", type: "exercício" }
      ]
    },
    "verbs-prepositions": {
      label: "Verbo + preposição (listen to, interested in, go home)",
      links: [
        { title: "Verbs and prepositions — exercícios (British Council LearnEnglish)", url: "https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/verbs-prepositions", type: "exercício" }
      ]
    },
    "grammar-details": {
      label: "Detalhes de gramática (plural irregular, artigos)",
      links: [
        { title: "A/an, plurals: singular and plural forms — Test-English", url: "https://test-english.com/grammar-points/a1/a-an-plurals/", type: "exercício" },
        { title: "Articles: 'a', 'an', 'the' — British Council LearnEnglish", url: "https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/articles-a-an-the", type: "leitura" }
      ]
    }
  };

  // Mapeia cada tag de tópico usada nas perguntas para um grupo de recursos acima.
  window.QUIZ_TOPIC_RESOURCE_MAP = {
    "to-be-affirmative": "to-be",
    "to-be-negative": "to-be",
    "to-be-question": "to-be",
    "to-be-short-answer": "to-be",
    "to-be-contractions": "to-be",
    "continuous-affirmative": "continuous",
    "continuous-negative": "continuous",
    "continuous-question": "continuous",
    "continuous-spelling": "continuous",
    "simple-vs-continuous": "simple-vs-continuous",
    "reading-comprehension": "simple-vs-continuous",
    "stative-verbs": "simple-vs-continuous",
    "changing-situations": "simple-vs-continuous",
    "future-arrangements": "simple-vs-continuous",
    "frequency-adverbs": "simple-vs-continuous",
    "error-correction": "simple-vs-continuous",
    "translation": "simple-vs-continuous",
    "questions-word-order": "simple-vs-continuous",
    "short-answers": "to-be",
    "third-person-s": "third-person-s",
    "stative-vs-dynamic": "stative-dynamic",
    "dual-meaning-verbs": "stative-dynamic",
    "continuous-always": "stative-dynamic",
    "preposition-gerund": "verbs-prepositions",
    "verb-preposition": "verbs-prepositions",
    "irregular-plurals": "grammar-details",
    "musical-instruments": "grammar-details"
  };

  // Rótulo amigável (PT-BR) de cada tag de tópico, usado nos painéis de desempenho e no resumo.
  window.QUIZ_TOPIC_LABELS = {
    "to-be-affirmative": "To be — afirmativa",
    "to-be-negative": "To be — negativa",
    "to-be-question": "To be — pergunta",
    "to-be-short-answer": "To be — resposta curta",
    "to-be-contractions": "To be — contrações",
    "continuous-affirmative": "Contínuo — afirmativa",
    "continuous-negative": "Contínuo — negativa",
    "continuous-question": "Contínuo — pergunta",
    "continuous-spelling": "Contínuo — ortografia do -ing",
    "simple-vs-continuous": "Simples x Contínuo",
    "reading-comprehension": "Leitura e interpretação",
    "stative-verbs": "Verbos de estado (know, want, seem…)",
    "changing-situations": "Situações em mudança (more and more)",
    "future-arrangements": "Futuro combinado x horário fixo",
    "frequency-adverbs": "Advérbios de frequência",
    "error-correction": "Achar o erro na frase",
    "translation": "Tradução PT → EN",
    "questions-word-order": "Ordem das palavras na pergunta",
    "short-answers": "Respostas curtas (Yes, I am / No, she doesn't)",
    "third-person-s": "3ª pessoa do simples (-s)",
    "stative-vs-dynamic": "Verbos de estado x verbos de ação",
    "dual-meaning-verbs": "Verbos com sentido duplo (think, look, see, have, be…)",
    "continuous-always": "Contínuo + always (hábito irritante)",
    "preposition-gerund": "Verbo depois de preposição (+ -ing)",
    "verb-preposition": "Verbo + preposição (listen to, go home)",
    "irregular-plurals": "Plural irregular (child → children)",
    "musical-instruments": "Instrumentos musicais + \"the\""
  };
})();
