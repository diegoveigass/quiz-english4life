// Aula 1 — Verbo "to be" no presente (am/is/are)
// Baseado nos exercícios de: aula_1_17_08_26 (Test-English "to be", Perfect English Grammar,
// Murphy Basic Grammar in Use unidades 1-2). Frases originais, não copiadas dos documentos.
(function () {
  window.QUIZ_AULAS = window.QUIZ_AULAS || [];

  window.QUIZ_AULAS.push({
    id: "aula1",
    label: "Aula 1",
    dateLabel: "17/08/2026",
    folder: "aula_1_17_08_26",

    theory: {
      title: "O verbo to be no presente: am / is / are",
      explanation:
        "O \"to be\" é o verbo mais usado do inglês e muda de acordo com quem pratica a ação: " +
        "I → am, he/she/it → is, we/you/they → are. Ele aparece em frases sobre identidade, " +
        "características, profissão, idade e sentimentos — não descreve uma ação, e sim um estado.",
      examples: [
        { en: "I'm a bit tired today.", pt: "Eu estou um pouco cansado hoje." },
        { en: "She's from Salvador.", pt: "Ela é de Salvador." },
        { en: "We're not ready yet.", pt: "Nós ainda não estamos prontos." },
        { en: "Is it far from here?", pt: "É longe daqui?" }
      ],
      tips: [
        "I → am · he/she/it → is · we/you/they → are — não existe outra conjugação do to be no presente.",
        "Negativa: só acrescenta \"not\" depois do to be (is not / are not); nunca use don't/doesn't com o to be.",
        "Nas perguntas, o to be vai antes do sujeito: \"Are you...?\" e não \"You are...?\".",
        "Contrações (I'm, she's, we're, isn't, aren't) são super comuns na fala — vale acostumar o ouvido."
      ]
    },

    questions: [
      {
        id: "a1-mc-1",
        type: "mc",
        topic: "to-be-affirmative",
        prompt: "My brother ___ a firefighter.",
        options: ["is", "are", "am"],
        answer: "is",
        explanation: "Depois de \"my brother\" (ele = he), o to be fica \"is\". Use \"is\" com he/she/it e nomes/singular."
      },
      {
        id: "a1-mc-2",
        type: "mc",
        topic: "to-be-affirmative",
        prompt: "We ___ neighbors.",
        options: ["is", "am", "are"],
        answer: "are",
        explanation: "\"We\" pede \"are\", assim como you/they. \"We are neighbors\" = somos vizinhos."
      },
      {
        id: "a1-mc-3",
        type: "mc",
        topic: "to-be-affirmative",
        prompt: "I ___ a little nervous today.",
        options: ["is", "am", "are"],
        answer: "am",
        explanation: "Com \"I\", o to be é sempre \"am\" (contração: I'm)."
      },
      {
        id: "a1-mc-4",
        type: "mc",
        topic: "to-be-question",
        prompt: "___ your parents doctors?",
        options: ["Is", "Are", "Am"],
        answer: "Are",
        explanation: "\"Your parents\" = they (plural), então a pergunta começa com \"Are\"."
      },
      {
        id: "a1-mc-5",
        type: "mc",
        topic: "to-be-question",
        prompt: "___ Camila at the gym right now?",
        options: ["Is", "Are", "Am"],
        answer: "Is",
        explanation: "Nomes próprios no singular (Camila = she) usam \"is\"."
      },
      {
        id: "a1-mc-6",
        type: "mc",
        topic: "to-be-negative",
        prompt: "This soup ___ very hot; you can eat it now.",
        options: ["isn't", "aren't", "don't"],
        answer: "isn't",
        explanation: "\"This soup\" = it (singular), então a negativa é \"isn't\" (is not). \"Don't\" não existe com o to be."
      },
      {
        id: "a1-mc-7",
        type: "mc",
        topic: "to-be-negative",
        prompt: "Hugo and Felipe ___ from Lisbon; they're from Porto.",
        options: ["isn't", "aren't", "amn't"],
        answer: "aren't",
        explanation: "Sujeito plural (Hugo and Felipe = they) usa \"aren't\". \"Amn't\" não existe em inglês padrão."
      },
      {
        id: "a1-mc-8",
        type: "mc",
        topic: "to-be-short-answer",
        prompt: "\"Are you ready?\" \"Yes, I ___.\"",
        options: ["am", "is", "do"],
        answer: "am",
        explanation: "Na resposta curta repetimos o to be da pergunta: \"Are you...?\" → \"Yes, I am.\""
      },
      {
        id: "a1-mc-9",
        type: "mc",
        topic: "to-be-short-answer",
        prompt: "\"Is Sofia a nurse?\" \"No, she ___.\"",
        options: ["isn't", "aren't", "doesn't"],
        answer: "isn't",
        explanation: "Resposta curta negativa repete o to be: \"Is she...?\" → \"No, she isn't.\""
      },
      {
        id: "a1-fill-1",
        type: "fill",
        topic: "to-be-affirmative",
        prompt: "Complete: The stores ___ open on Sundays. (be)",
        accept: ["are"],
        explanation: "\"The stores\" = they (plural) → \"are\"."
      },
      {
        id: "a1-fill-2",
        type: "fill",
        topic: "to-be-affirmative",
        prompt: "Complete: My favorite color ___ green. (be)",
        accept: ["is"],
        explanation: "\"My favorite color\" é singular (it) → \"is\"."
      },
      {
        id: "a1-fill-3",
        type: "fill",
        topic: "to-be-negative",
        prompt: "Complete a negativa: I ___ hungry, but I'm thirsty. (be)",
        accept: ["am not", "'m not", "m not"],
        explanation: "Negativa do to be com \"I\": \"am not\" (ou a contração \"'m not\")."
      },
      {
        id: "a1-fill-4",
        type: "fill",
        topic: "to-be-negative",
        prompt: "Complete: Those apples ___ fresh anymore. (be)",
        accept: ["aren't", "are not"],
        explanation: "\"Those apples\" = they → negativa \"aren't\" (are not)."
      },
      {
        id: "a1-fill-5",
        type: "fill",
        topic: "to-be-question",
        prompt: "Complete a pergunta: ___ it Monday today? (be)",
        accept: ["is"],
        explanation: "\"it\" pede \"is\": \"Is it Monday today?\""
      },
      {
        id: "a1-fill-6",
        type: "fill",
        topic: "to-be-short-answer",
        prompt: "\"Are they at school?\" \"No, they ___.\" (complete com to be)",
        accept: ["aren't", "are not"],
        explanation: "Resposta curta repete o to be da pergunta: \"Are they...?\" → \"No, they aren't.\""
      },
      {
        id: "a1-fill-7",
        type: "fill",
        topic: "to-be-contractions",
        prompt: "Escreva a forma reduzida (contração) de: \"She is\"",
        accept: ["she's"],
        explanation: "\"is\" se junta ao pronome: \"she\" + \"is\" = \"she's\"."
      },
      {
        id: "a1-fill-8",
        type: "fill",
        topic: "to-be-contractions",
        prompt: "Escreva a forma reduzida de: \"They are not\"",
        accept: ["they aren't", "they're not"],
        explanation: "Duas contrações são aceitas: \"they aren't\" (contrai o \"not\") ou \"they're not\" (contrai o \"are\")."
      },
      {
        id: "a1-fill-9",
        type: "fill",
        topic: "to-be-contractions",
        prompt: "Escreva a forma reduzida de: \"I am\"",
        accept: ["i'm"],
        explanation: "\"I\" + \"am\" = \"I'm\"."
      }
    ],

    passages: []
  });
})();
