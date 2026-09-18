// Aula 2 — Present Continuous (am/is/are + verbo-ing)
// Baseado nos exercícios de: aula_2_25_08_26 (Murphy Basic Grammar in Use unidades 3-4).
// Frases originais, não copiadas dos documentos.
(function () {
  window.QUIZ_AULAS = window.QUIZ_AULAS || [];

  window.QUIZ_AULAS.push({
    id: "aula2",
    label: "Aula 2",
    dateLabel: "25/08/2026",
    folder: "aula_2_25_08_26",

    theory: {
      title: "Presente contínuo: am/is/are + verbo-ing",
      explanation:
        "Usamos o presente contínuo para falar de algo acontecendo agora mesmo, neste exato " +
        "momento, ou por um período temporário ao redor de agora. Ele se forma com am/is/are + " +
        "o verbo terminado em -ing.",
      examples: [
        { en: "I'm studying for my English test right now.", pt: "Estou estudando para minha prova de inglês agora." },
        { en: "She's working from home this week.", pt: "Ela está trabalhando de casa essa semana." },
        { en: "They aren't watching TV; they're cooking.", pt: "Eles não estão assistindo TV; estão cozinhando." },
        { en: "Are you listening to me?", pt: "Você está me escutando?" }
      ],
      tips: [
        "Palavras-chave que pedem contínuo: now, right now, at the moment, Look!, Listen!, today (quando é algo temporário).",
        "Regras do -ing: \"e\" mudo cai (write → writing); consoante final dobra depois de vogal curta (run → running); \"ie\" vira \"y\" (lie → lying).",
        "Alguns verbos (like, want, know, love, need) quase nunca vão para o contínuo — eles descrevem estados, não ações."
      ]
    },

    questions: [
      {
        id: "a2-mc-1",
        type: "mc",
        topic: "continuous-affirmative",
        prompt: "Look! Marina ___ a photo of the sunset.",
        options: ["is taking", "take", "takes"],
        answer: "is taking",
        explanation: "\"Look!\" indica algo acontecendo agora → contínuo. \"Marina\" = she → is taking."
      },
      {
        id: "a2-mc-2",
        type: "mc",
        topic: "continuous-affirmative",
        prompt: "We ___ dinner at the moment; can you call back later?",
        options: ["are having", "have", "has"],
        answer: "are having",
        explanation: "\"At the moment\" indica agora → contínuo. \"We\" → are having."
      },
      {
        id: "a2-mc-3",
        type: "mc",
        topic: "continuous-negative",
        prompt: "He ___ TV right now; he's doing his homework.",
        options: ["isn't watching", "doesn't watch", "aren't watching"],
        answer: "isn't watching",
        explanation: "Negativa do contínuo: is/are + not + verbo-ing. \"He\" → isn't watching."
      },
      {
        id: "a2-mc-4",
        type: "mc",
        topic: "continuous-negative",
        prompt: "I ___ right now — I'm just reading quietly.",
        options: ["am not talking", "don't talk", "are not talking"],
        answer: "am not talking",
        explanation: "\"I\" + am not + verbo-ing = negativa do contínuo com \"I\"."
      },
      {
        id: "a2-mc-5",
        type: "mc",
        topic: "continuous-question",
        prompt: "___ you working on the report today?",
        options: ["Are", "Is", "Do"],
        answer: "Are",
        explanation: "Pergunta no contínuo começa com am/is/are. \"You\" → Are."
      },
      {
        id: "a2-mc-6",
        type: "mc",
        topic: "continuous-question",
        prompt: "What ___ Lucas cooking? It smells great!",
        options: ["is", "are", "does"],
        answer: "is",
        explanation: "\"Lucas\" = he → is. Perguntas com wh- seguem: wh- + is/are + sujeito + verbo-ing."
      },
      {
        id: "a2-mc-7",
        type: "mc",
        topic: "continuous-affirmative",
        prompt: "The kids ___ in the yard; it's their favorite game.",
        options: ["are playing", "plays", "is playing"],
        answer: "are playing",
        explanation: "\"The kids\" = they (plural) → are playing."
      },
      {
        id: "a2-mc-8",
        type: "mc",
        topic: "continuous-question",
        prompt: "___ it raining outside?",
        options: ["Is", "Are", "Does"],
        answer: "Is",
        explanation: "\"It\" → is. \"Is it raining?\" pergunta sobre o momento presente."
      },
      {
        id: "a2-mc-9",
        type: "mc",
        topic: "continuous-negative",
        prompt: "They ___ ; the game finished an hour ago.",
        options: ["aren't playing", "doesn't play", "isn't playing"],
        answer: "aren't playing",
        explanation: "\"They\" → aren't playing (are not + verbo-ing)."
      },
      {
        id: "a2-fill-1",
        type: "fill",
        topic: "continuous-spelling",
        prompt: "Complete o -ing do verbo \"run\":",
        accept: ["running"],
        explanation: "Verbos curtos terminados em consoante-vogal-consoante dobram a última letra: run → running."
      },
      {
        id: "a2-fill-2",
        type: "fill",
        topic: "continuous-spelling",
        prompt: "Complete o -ing do verbo \"write\":",
        accept: ["writing"],
        explanation: "Verbos terminados em \"e\" mudo perdem o \"e\" antes do -ing: write → writing."
      },
      {
        id: "a2-fill-3",
        type: "fill",
        topic: "continuous-spelling",
        prompt: "Complete o -ing do verbo \"swim\":",
        accept: ["swimming"],
        explanation: "Consoante final dobra depois de vogal curta: swim → swimming."
      },
      {
        id: "a2-fill-4",
        type: "fill",
        topic: "continuous-spelling",
        prompt: "Complete o -ing do verbo \"lie\":",
        accept: ["lying"],
        explanation: "Verbos terminados em \"ie\" trocam para \"y\" antes do -ing: lie → lying."
      },
      {
        id: "a2-fill-5",
        type: "fill",
        topic: "continuous-spelling",
        prompt: "Complete o -ing do verbo \"study\":",
        accept: ["studying"],
        explanation: "Verbos terminados em consoante + y não mudam antes do -ing: study → studying."
      },
      {
        id: "a2-fill-6",
        type: "fill",
        topic: "continuous-affirmative",
        prompt: "Complete: Please be quiet, I ___ (study) for my test.",
        accept: ["am studying", "'m studying", "m studying"],
        explanation: "\"I\" + am + studying = ação acontecendo agora."
      },
      {
        id: "a2-fill-7",
        type: "fill",
        topic: "continuous-question",
        prompt: "Complete: What ___ she doing this afternoon? (be)",
        accept: ["is"],
        explanation: "\"She\" → is. \"What is she doing?\""
      },
      {
        id: "a2-fill-8",
        type: "fill",
        topic: "continuous-negative",
        prompt: "Complete a negativa: We ___ (not/work) today — it's a holiday!",
        accept: ["aren't working", "are not working"],
        explanation: "\"We\" + are not + verbo-ing = negativa do contínuo."
      },
      {
        id: "a2-fill-9",
        type: "fill",
        topic: "continuous-affirmative",
        prompt: "Complete: Look, it ___ (start) to rain!",
        accept: ["is starting", "'s starting", "s starting"],
        explanation: "\"Look\" indica o momento presente → \"it is starting\"."
      }
    ],

    passages: []
  });
})();
