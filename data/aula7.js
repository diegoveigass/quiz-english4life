// Aula 7 — Airport Check-in: perguntas do atendimento (May I see…? / Are you checking…? / Have you left…? /
// Would you prefer…? / Do you need…?) e perguntas no Present Continuous (planos e ações em andamento).
// Baseado em: aula_7_05_10_26 (diálogo de check-in, role play e atividade bônus de gramática).
// Frases e textos originais, inspirados nos exercícios da pasta.
(function () {
  window.QUIZ_AULAS = window.QUIZ_AULAS || [];

  window.QUIZ_AULAS.push({
    id: "aula7",
    label: "Aula 7",
    dateLabel: "05/10/2026",
    folder: "aula_7_05_10_26",

    theory: {
      title: "Airport Check-in: perguntas do atendimento e Present Continuous",
      explanation:
        "No balcão de check-in, o atendente (airline assistant) usa perguntas bem previsíveis, e cada uma " +
        "tem um molde. \"Where are you flying today?\" pergunta o destino. \"May I see your passport?\" é um " +
        "pedido educado (may + I + verbo base). \"Are you checking any bags?\" usa o Present Continuous " +
        "para falar do que você vai fazer agora. \"Have you left your bags unattended?\" usa o Present " +
        "Perfect (have + particípio) para perguntar se isso aconteceu alguma vez até agora. \"Do you need " +
        "anything else?\" e \"Would you prefer a window seat or an aisle seat?\" oferecem opções. " +
        "Já o Present Continuous (be + verbo com -ing) serve para ações em andamento e também para planos " +
        "já combinados: \"Which airport are you departing from tonight?\", \"Is your flight boarding at " +
        "gate B25?\". Na pergunta, a ordem é: palavra interrogativa + am/is/are + sujeito + verbo-ing.",
      examples: [
        { en: "Where are you flying today?", pt: "Para onde você vai voar hoje? (Present Continuous com plano/viagem)" },
        { en: "May I see your passport, please?", pt: "Posso ver seu passaporte, por favor? (pedido educado: may + I + verbo base)" },
        { en: "Are you checking any bags today?", pt: "Vai despachar alguma mala hoje? (be + sujeito + verbo-ing)" },
        { en: "Have you left your bags unattended at any time?", pt: "Você deixou as malas sem vigilância em algum momento? (have + particípio: left)" },
        { en: "Would you prefer a window seat or an aisle seat?", pt: "Você prefere janela ou corredor? (would you prefer + opção A or opção B)" },
        { en: "What time is your flight boarding?", pt: "A que horas seu voo embarca? (question word + is + sujeito + verbo-ing)" }
      ],
      tips: [
        "Present Continuous na pergunta: palavra interrogativa + am/is/are + sujeito + verbo-ing. Ex.: Why are you travelling? Nunca \"Why you are travelling?\".",
        "Ele serve para (1) o que está acontecendo agora e (2) planos já combinados para o futuro próximo: \"Are you going to Paris next week?\" = você vai a Paris na semana que vem?",
        "Ortografia do -ing: depart → departing; go → going; stay → staying (verbo + y só soma -ing); bring → bringing; pick → picking; board → boarding; come → coming, make → making (corta o e final); sit → sitting, get → getting (dobra a consoante final em verbo curto CVC).",
        "Perguntas sim/não começam com am/is/are: Are you checking any bags? Is your flight on time? Is Eva bringing her laptop? Na resposta curta, repita o auxiliar: Yes, I am. / No, it isn't.",
        "May I see…? é pedido de permissão, formal, só com I/we. Depois de may vem o verbo base, sem \"to\" e sem -ing: May I see your boarding pass?",
        "Have you left…? pergunta sobre uma experiência até agora; o particípio de leave é left (irregular). Resposta curta: No, I haven't. / Yes, I have.",
        "Would you prefer…? e Do you need…? oferecem opção ou ajuda: Do you need any help? Would you prefer a window seat or an aisle seat? Responda direto: An aisle seat, please.",
        "Antes de checar a mala, o atendente pode avisar de atrasos: Your flight has been delayed. / It's now scheduled to depart at 6 PM. Resposta educada: Oh well, that's not too bad. / That's OK.",
        "Vocabulário-chave: depart (partir), board (embarcar), boarding pass (cartão de embarque), gate (portão), delayed (atrasado), carry-on (bagagem de mão), baggage claim (retirada de bagagem), unattended (sem vigilância)."
      ]
    },

    questions: [
      // ---------- Escolher a pergunta que completa o diálogo ----------
      {
        id: "a7-mc-1",
        type: "mc",
        topic: "checkin-questions",
        prompt: "Agent: Hello, ___ going to Chicago today? / Passenger: Yes, with my family.",
        options: ["are you", "do you", "have you"],
        answer: "are you",
        explanation: "Plano de viagem no Present Continuous: Are you going…? (are + sujeito + verbo-ing). Você responde \"Yes, I am.\""
      },
      {
        id: "a7-mc-2",
        type: "mc",
        topic: "checkin-questions",
        prompt: "Agent: ___ I see your passport, please? / Passenger: Here you are.",
        options: ["May", "Have", "Are"],
        answer: "May",
        explanation: "\"May I see…?\" é o pedido educado clássico de balcão. Resposta natural: \"Here you are.\""
      },
      {
        id: "a7-mc-3",
        type: "mc",
        topic: "checkin-questions",
        prompt: "Agent: ___ you checking any bags today? / Passenger: Yes, one suitcase.",
        options: ["Are", "Do", "Have"],
        answer: "Are",
        explanation: "Present Continuous: Are you checking…? = vai despachar alguma mala? \"Do you checking\" mistura dois tempos e está errado."
      },
      {
        id: "a7-mc-4",
        type: "mc",
        topic: "checkin-questions",
        prompt: "Agent: Have you ___ your bags unattended at any time? / Passenger: No, never.",
        options: ["left", "leave", "leaving"],
        answer: "left",
        explanation: "Present Perfect = have + particípio. O particípio de leave é left (irregular): Have you left…?"
      },
      {
        id: "a7-mc-5",
        type: "mc",
        topic: "checkin-questions",
        prompt: "Agent: ___ you prefer a window seat or an aisle seat? / Passenger: An aisle seat, please.",
        options: ["Would", "Are", "Have"],
        answer: "Would",
        explanation: "\"Would you prefer A or B?\" oferece duas opções de forma educada. Responda diretamente: \"An aisle seat, please.\""
      },
      {
        id: "a7-mc-6",
        type: "mc",
        topic: "checkin-questions",
        prompt: "Agent: Do you ___ any help with your bags? / Passenger: No, thanks, I'm fine.",
        options: ["need", "needing", "needs"],
        answer: "need",
        explanation: "Depois de \"Do you\" vem o verbo na forma base: Do you need…? Não se coloca -ing nem -s."
      },
      {
        id: "a7-mc-7",
        type: "mc",
        topic: "checkin-questions",
        prompt: "Agent: Where ___ you flying today? / Passenger: I'm flying to Stockholm.",
        options: ["are", "do", "have"],
        answer: "are",
        explanation: "Where are you flying…? — question word + are + sujeito + verbo-ing. A resposta também usa o contínuo: I'm flying to Stockholm."
      },
      {
        id: "a7-mc-8",
        type: "mc",
        topic: "checkin-questions",
        prompt: "Qual frase o passageiro usa para entregar o documento depois de \"May I see your boarding pass?\"",
        options: ["Here you are.", "Yes, you may see.", "I see it."],
        answer: "Here you are.",
        explanation: "Para entregar algo, diga \"Here you are.\" (aqui está). \"Yes, you may see\" soa estranho, pois o pedido pede uma ação."
      },

      // ---------- Present Continuous: forma das perguntas ----------
      {
        id: "a7-mc-9",
        type: "mc",
        topic: "present-continuous-questions",
        prompt: "Qual é a pergunta correta?",
        options: [
          "What time is your flight departing?",
          "What time your flight is departing?",
          "What time does your flight departing?"
        ],
        answer: "What time is your flight departing?",
        explanation: "Ordem: question word + is + sujeito + verbo-ing. Não se usa \"does\" junto com -ing."
      },
      {
        id: "a7-mc-10",
        type: "mc",
        topic: "present-continuous-questions",
        prompt: "Which gate ___ your flight boarding at?",
        options: ["is", "are", "does"],
        answer: "is",
        explanation: "\"Your flight\" é singular (it) → is. Which gate is your flight boarding at?"
      },
      {
        id: "a7-mc-11",
        type: "mc",
        topic: "present-continuous-questions",
        prompt: "Why ___ you travelling alone this time?",
        options: ["are", "is", "do"],
        answer: "are",
        explanation: "You → are. Why are you travelling…? (grafia britânica; americano: traveling)."
      },
      {
        id: "a7-mc-12",
        type: "mc",
        topic: "present-continuous-questions",
        prompt: "Qual pergunta está correta?",
        options: [
          "Are your friends coming to the airport with you?",
          "Is your friends coming to the airport with you?",
          "Are your friends come to the airport with you?"
        ],
        answer: "Are your friends coming to the airport with you?",
        explanation: "\"Your friends\" é plural → are, e o verbo precisa do -ing: coming (come perde o -e antes do -ing)."
      },
      {
        id: "a7-mc-13",
        type: "mc",
        topic: "present-continuous-questions",
        prompt: "Qual é a forma -ing correta do verbo \"stay\"?",
        options: ["staying", "stayying", "stai-ing"],
        answer: "staying",
        explanation: "Verbo terminado em vogal + y apenas soma -ing: stay → staying; play → playing."
      },
      {
        id: "a7-mc-14",
        type: "mc",
        topic: "present-continuous-questions",
        prompt: "Qual é a forma -ing correta do verbo \"get\"?",
        options: ["getting", "geting", "geting-ing"],
        answer: "getting",
        explanation: "Verbo curto terminado em consoante-vogal-consoante dobra a última consoante: get → getting; sit → sitting."
      },
      {
        id: "a7-mc-15",
        type: "mc",
        topic: "present-continuous-questions",
        prompt: "\"Are you going to Paris next week?\" — aqui o Present Continuous indica…",
        options: [
          "um plano já combinado para o futuro",
          "algo que acontece todos os dias",
          "algo que já aconteceu"
        ],
        answer: "um plano já combinado para o futuro",
        explanation: "Com expressão de futuro (next week, tomorrow, tonight), o Present Continuous fala de planos já organizados."
      },
      {
        id: "a7-mc-16",
        type: "mc",
        topic: "present-continuous-questions",
        prompt: "Qual é a resposta curta correta para \"Is the taxi picking you up at nine?\" (sim)",
        options: ["Yes, it is.", "Yes, it does.", "Yes, it has."],
        answer: "Yes, it is.",
        explanation: "A resposta curta repete o auxiliar da pergunta: Is…? → Yes, it is. / No, it isn't."
      },

      // ---------- Perguntas x respostas ----------
      {
        id: "a7-mc-17",
        type: "mc",
        topic: "question-answer-match",
        prompt: "Which airport are you departing from tonight? — Qual resposta combina?",
        options: ["From Heathrow.", "At nine o'clock.", "For three days."],
        answer: "From Heathrow.",
        explanation: "A pergunta pede o lugar de partida (from + aeroporto). \"At nine\" responderia a hora; \"for three days\" responderia a duração."
      },
      {
        id: "a7-mc-18",
        type: "mc",
        topic: "question-answer-match",
        prompt: "Who is picking you up at the airport? — Qual resposta combina?",
        options: ["My brother is.", "At the arrivals hall.", "By car."],
        answer: "My brother is.",
        explanation: "Who pede uma pessoa. Resposta curta: \"My brother is.\" (ou \"My brother.\")."
      },
      {
        id: "a7-mc-19",
        type: "mc",
        topic: "question-answer-match",
        prompt: "How long are you staying in Lisbon? — Qual resposta combina?",
        options: ["For a week.", "In a hotel.", "With my cousin."],
        answer: "For a week.",
        explanation: "How long pergunta duração: for + período de tempo."
      },
      {
        id: "a7-mc-20",
        type: "mc",
        topic: "question-answer-match",
        prompt: "What are you bringing in your carry-on? — Qual resposta combina?",
        options: ["A jacket and a book.", "At gate A3.", "For two days."],
        answer: "A jacket and a book.",
        explanation: "What pergunta a coisa (objetos). \"At gate A3\" seria resposta para where; \"for two days\" para how long."
      },
      {
        id: "a7-mc-21",
        type: "mc",
        topic: "question-answer-match",
        prompt: "Have you left your bags unattended at any time? — Qual resposta curta combina?",
        options: ["No, I haven't.", "No, I don't.", "No, I'm not."],
        answer: "No, I haven't.",
        explanation: "A pergunta é com have (Present Perfect), então a resposta curta repete have: No, I haven't."
      },

      // ---------- Vocabulário ----------
      {
        id: "a7-mc-22",
        type: "mc",
        topic: "airport-vocab",
        prompt: "\"Unfortunately, your flight has been delayed.\" — o que aconteceu com o voo?",
        options: ["Vai sair mais tarde do que o previsto.", "Foi cancelado para sempre.", "Saiu mais cedo."],
        answer: "Vai sair mais tarde do que o previsto.",
        explanation: "Delayed = atrasado. Já cancelled seria cancelado. O atendente continua com: \"It's now scheduled to depart at 6 PM.\""
      },
      {
        id: "a7-mc-23",
        type: "mc",
        topic: "airport-vocab",
        prompt: "\"Your flight departs from gate B25.\" O verbo \"depart\" significa…",
        options: ["partir / sair", "chegar", "esperar"],
        answer: "partir / sair",
        explanation: "Depart = partir (oposto de arrive). \"Departures\" é a área de embarque; \"Arrivals\" é a de chegada."
      },
      {
        id: "a7-mc-24",
        type: "mc",
        topic: "airport-vocab",
        prompt: "\"I'm sorry for any inconvenience.\" — o que \"inconvenience\" quer dizer?",
        options: [
          "incômodo, transtorno",
          "conveniência",
          "informação"
        ],
        answer: "incômodo, transtorno",
        explanation: "Inconvenience = incômodo. Cuidado: não é \"inconveniência\" no sentido de falta de educação; é um pequeno transtorno, como um atraso."
      },
      {
        id: "a7-mc-25",
        type: "mc",
        topic: "airport-vocab",
        prompt: "O que o atendente quer dizer com: \"Right now you have a middle seat.\"",
        options: [
          "Informa que seu assento atual é o do meio, entre dois outros.",
          "Informa que o assento fica no meio do avião inteiro.",
          "Informa que não há assento."
        ],
        answer: "Informa que seu assento atual é o do meio, entre dois outros.",
        explanation: "Middle seat = poltrona do meio. Por isso o atendente oferece: \"Would you prefer a window seat or an aisle seat?\""
      },
      {
        id: "a7-mc-26",
        type: "mc",
        topic: "airport-vocab",
        prompt: "Quando o voo \"boards at 5:30\", isso quer dizer que…",
        options: [
          "os passageiros começam a entrar no avião às 5:30.",
          "o avião pousa às 5:30.",
          "o check-in fecha às 5:30."
        ],
        answer: "os passageiros começam a entrar no avião às 5:30.",
        explanation: "Board = embarcar. Boarding time é o horário de embarque, que é antes do horário de partida (departure)."
      },

      // ---------- Preencher: montar a pergunta ----------
      {
        id: "a7-fill-1",
        type: "fill",
        topic: "checkin-questions",
        prompt: "Complete o pedido do atendente: \"___ I see your boarding pass, please?\" (começa com M)",
        accept: ["may"],
        explanation: "May I see…? = posso ver…? Pedido formal e educado, típico de atendimento."
      },
      {
        id: "a7-fill-2",
        type: "fill",
        topic: "checkin-questions",
        prompt: "Complete: \"___ you checking any bags today?\" (verbo auxiliar do contínuo)",
        accept: ["are"],
        explanation: "Are you checking…? — be + sujeito + verbo-ing."
      },
      {
        id: "a7-fill-3",
        type: "fill",
        topic: "checkin-questions",
        prompt: "Complete: \"Have you ___ your bags unattended?\" (particípio de leave)",
        accept: ["left"],
        explanation: "Leave → left → left. Have you left…? é Present Perfect."
      },
      {
        id: "a7-fill-4",
        type: "fill",
        topic: "checkin-questions",
        prompt: "Complete: \"Would you ___ a window seat or an aisle seat?\" (preferir)",
        accept: ["prefer"],
        explanation: "Would you prefer…? — depois de would vem o verbo base: prefer."
      },
      {
        id: "a7-fill-5",
        type: "fill",
        topic: "checkin-questions",
        prompt: "Complete: \"___ you need anything else?\" (auxiliar do presente simples)",
        accept: ["do"],
        explanation: "Need é verbo de estado, normalmente no presente simples: Do you need…?"
      },

      // ---------- Preencher: Present Continuous (atividade bônus) ----------
      {
        id: "a7-fill-6",
        type: "fill",
        topic: "present-continuous-questions",
        prompt: "Escreva a pergunta inteira com o verbo no contínuo: \"(you / depart) from which terminal?\" → \"Which terminal ___ ___ ___ from?\" (digite as 3 palavras que faltam)",
        accept: ["are you departing"],
        explanation: "Which terminal are you departing from? — are + you + departing (depart + ing)."
      },
      {
        id: "a7-fill-7",
        type: "fill",
        topic: "present-continuous-questions",
        prompt: "Complete: \"What time ___ your flight boarding?\" (is ou are)",
        accept: ["is"],
        explanation: "\"Your flight\" = it → is. What time is your flight boarding?"
      },
      {
        id: "a7-fill-8",
        type: "fill",
        topic: "present-continuous-questions",
        prompt: "Escreva a forma -ing de \"go\" para completar: \"Are you ___ to Rome next week?\"",
        accept: ["going"],
        explanation: "Go → going. Verbo terminado em -o apenas recebe -ing."
      },
      {
        id: "a7-fill-9",
        type: "fill",
        topic: "present-continuous-questions",
        prompt: "Complete com o verbo \"pick\" no contínuo: \"Is the taxi ___ you up at nine?\"",
        accept: ["picking"],
        explanation: "Pick up = buscar alguém. Pick → picking (não dobra o k, pois termina em duas consoantes: ck)."
      },
      {
        id: "a7-fill-10",
        type: "fill",
        topic: "present-continuous-questions",
        prompt: "Complete com o verbo \"stay\": \"How long are we ___ in the hotel?\"",
        accept: ["staying"],
        explanation: "Stay → staying. Vogal + y não muda: staying, playing, enjoying."
      },
      {
        id: "a7-fill-11",
        type: "fill",
        topic: "present-continuous-questions",
        prompt: "Complete com o verbo \"bring\": \"What is Marta ___ in her carry-on?\"",
        accept: ["bringing"],
        explanation: "Bring → bringing. What is Marta bringing in her carry-on?"
      },
      {
        id: "a7-fill-12",
        type: "fill",
        topic: "present-continuous-questions",
        prompt: "Complete com o verbo \"come\": \"Who is ___ with you to the airport?\"",
        accept: ["coming"],
        explanation: "Come → coming (corta o -e final antes de -ing)."
      },

      // ---------- Achar o erro / corrigir ----------
      {
        id: "a7-err-1",
        type: "mc",
        topic: "error-correction",
        prompt: "Achar o erro: qual pergunta está correta?",
        options: [
          "Where are you flying today?",
          "Where you are flying today?",
          "Where do you flying today?"
        ],
        answer: "Where are you flying today?",
        explanation: "Na pergunta, o auxiliar (are) vem antes do sujeito (you). E não se usa \"do\" junto com verbo-ing."
      },
      {
        id: "a7-err-2",
        type: "mc",
        topic: "error-correction",
        prompt: "Achar o erro: qual pedido está correto?",
        options: [
          "May I see your passport, please?",
          "May I to see your passport, please?",
          "May I seeing your passport, please?"
        ],
        answer: "May I see your passport, please?",
        explanation: "Após may vem o verbo base, sem \"to\" e sem -ing."
      },
      {
        id: "a7-err-3",
        type: "mc",
        topic: "error-correction",
        prompt: "Achar o erro: qual pergunta está correta?",
        options: [
          "Have you left your bags unattended?",
          "Have you leave your bags unattended?",
          "Did you left your bags unattended?"
        ],
        answer: "Have you left your bags unattended?",
        explanation: "Have + particípio (left). Com \"did\" o verbo voltaria à forma base: Did you leave…?"
      },
      {
        id: "a7-fill-13",
        type: "fill",
        topic: "error-correction",
        prompt: "Corrija a frase e digite-a inteira: \"Are you check any bags today?\"",
        accept: ["are you checking any bags today"],
        explanation: "Present Continuous exige verbo-ing: Are you checking any bags today?"
      },
      {
        id: "a7-fill-14",
        type: "fill",
        topic: "error-correction",
        prompt: "Corrija a frase e digite-a inteira: \"Which gate your flight is boarding at?\"",
        accept: ["which gate is your flight boarding at"],
        explanation: "Ordem da pergunta: question word + is + sujeito + verbo-ing. Which gate is your flight boarding at?"
      },

      // ---------- Tradução ----------
      {
        id: "a7-tr-1",
        type: "mc",
        topic: "translation",
        prompt: "Traduza: \"Você vai despachar alguma mala hoje?\"",
        options: [
          "Are you checking any bags today?",
          "Do you checking any bags today?",
          "You are checking any bags today?"
        ],
        answer: "Are you checking any bags today?",
        explanation: "Pergunta no Present Continuous: are + you + checking. \"Any\" é usado em perguntas com substantivo plural."
      },
      {
        id: "a7-tr-2",
        type: "mc",
        topic: "translation",
        prompt: "Traduza: \"Você prefere um assento na janela ou no corredor?\"",
        options: [
          "Would you prefer a window seat or an aisle seat?",
          "Do you prefer a seat of window or corridor?",
          "Would you prefering window seat or aisle?"
        ],
        answer: "Would you prefer a window seat or an aisle seat?",
        explanation: "Would you prefer + opção A or opção B. Corredor do avião = aisle (não corridor); janela = window."
      },
      {
        id: "a7-tr-3",
        type: "fill",
        topic: "translation",
        prompt: "Traduza para o inglês (4 palavras): \"Estou voando para Estocolmo.\" (Estocolmo = Stockholm)",
        accept: ["i'm flying to stockholm", "i am flying to stockholm"],
        explanation: "Present Continuous afirmativo: I'm flying to Stockholm. (I'm = I am)"
      },

      // ---------- Ligar colunas ----------
      {
        id: "a7-match-1",
        type: "match",
        topic: "question-answer-match",
        prompt: "Ligue cada pergunta do atendente à resposta mais natural:",
        pairs: [
          { left: "Where are you flying today?", right: "To Stockholm." },
          { left: "May I see your passport?", right: "Here you are." },
          { left: "Are you checking any bags?", right: "Yes, one bag to check." },
          { left: "Have you left your bags unattended?", right: "No, I haven't." },
          { left: "Would you prefer a window or an aisle seat?", right: "An aisle seat, please." }
        ],
        explanation: "Cada pergunta tem uma resposta típica: destino, documento, bagagem, resposta curta com have, e escolha de assento."
      },
      {
        id: "a7-match-2",
        type: "match",
        topic: "present-continuous-questions",
        prompt: "Ligue cada pergunta à resposta que combina:",
        pairs: [
          { left: "Which airport are you departing from?", right: "From JFK." },
          { left: "What time is your flight boarding?", right: "At 5:30." },
          { left: "How long are we staying in Rome?", right: "For four days." },
          { left: "Who is picking you up?", right: "My uncle is." },
          { left: "What is she bringing?", right: "Her laptop and a book." }
        ],
        explanation: "From + lugar de partida; at + hora; for + duração; who → pessoa; what → coisa."
      },
      {
        id: "a7-match-3",
        type: "match",
        topic: "airport-vocab",
        prompt: "Ligue cada palavra ao significado:",
        pairs: [
          { left: "depart", right: "partir" },
          { left: "board", right: "embarcar" },
          { left: "delayed", right: "atrasado" },
          { left: "carry-on", right: "bagagem de mão" },
          { left: "unattended", right: "sem vigilância" },
          { left: "inconvenience", right: "transtorno" }
        ],
        explanation: "Vocabulário do diálogo de check-in da aula."
      },

      // ---------- Várias lacunas ----------
      {
        id: "a7-multi-1",
        type: "multi",
        topic: "present-continuous-questions",
        prompt: "Complete as perguntas com a forma correta do verbo no Present Continuous (is/are + verbo-ing):",
        blanks: [
          { label: "\"Which gate is your flight ___ at?\" (board)", accept: ["boarding"] },
          { label: "\"Are you ___ to Paris next week?\" (go)", accept: ["going"] },
          { label: "\"Is the taxi ___ you up at 9:00?\" (pick)", accept: ["picking"] },
          { label: "\"Are we ___ in Stockholm for two days?\" (stay)", accept: ["staying"] },
          { label: "\"Is Eva ___ her laptop in her carry-on?\" (bring)", accept: ["bringing"] }
        ],
        explanation: "Todas seguem: is/are + sujeito + verbo-ing. Repare nas formas boarding, going, picking, staying e bringing: só soma -ing."
      },
      {
        id: "a7-multi-2",
        type: "multi",
        topic: "checkin-questions",
        prompt: "Complete o início de cada pergunta do atendente (use: May / Are / Have / Would / Do):",
        blanks: [
          { label: "\"___ I see your passport, please?\"", accept: ["may"] },
          { label: "\"___ you checking any bags today?\"", accept: ["are"] },
          { label: "\"___ you left your bags unattended?\"", accept: ["have"] },
          { label: "\"___ you prefer a window seat?\"", accept: ["would"] },
          { label: "\"___ you need anything else?\"", accept: ["do"] }
        ],
        explanation: "May (pedido), Are (contínuo), Have (present perfect), Would (preferência), Do (presente simples)."
      }
    ],

    passages: [
      {
        id: "a7-passage-1",
        title: "No balcão de check-in (diálogo)",
        text:
          "Agent: Good afternoon! Where are you flying today?\n" +
          "Passenger: Hi. I'm flying to Lisbon.\n" +
          "Agent: Lovely. May I see your passport, please?\n" +
          "Passenger: Here you are. May I also keep my boarding pass on my phone?\n" +
          "Agent: Of course. Are you checking any bags today?\n" +
          "Passenger: Yes, one suitcase. And I have a backpack to carry on.\n" +
          "Agent: Have you left your bags unattended at any time?\n" +
          "Passenger: No, I've always had them with me.\n" +
          "Agent: Great. Unfortunately, your flight has been delayed. It's now scheduled to depart at 7 PM.\n" +
          "Passenger: Oh, that's a pity. But it's OK.\n" +
          "Agent: I'm sorry for the inconvenience. Would you prefer a window seat or an aisle seat?\n" +
          "Passenger: A window seat, please.\n" +
          "Agent: Here's your boarding pass. Your flight is boarding at gate C12 at 6:30. Do you need anything else?\n" +
          "Passenger: No, thank you.",
        questions: [
          {
            id: "a7-r-1",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "Where is the passenger flying?",
            options: ["To Lisbon", "To Stockholm", "To Madrid"],
            answer: "To Lisbon",
            explanation: "\"I'm flying to Lisbon.\" — resposta à pergunta \"Where are you flying today?\""
          },
          {
            id: "a7-r-2",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "What bags does the passenger have?",
            options: [
              "One suitcase to check and a backpack to carry on.",
              "Only a backpack.",
              "Two suitcases to check."
            ],
            answer: "One suitcase to check and a backpack to carry on.",
            explanation: "\"One suitcase\" será despachada (checked); a backpack é a bagagem de mão (carry-on)."
          },
          {
            id: "a7-r-3",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "What is the problem with the flight?",
            options: [
              "It has been delayed until 7 PM.",
              "It has been cancelled.",
              "It leaves two hours earlier."
            ],
            answer: "It has been delayed until 7 PM.",
            explanation: "\"Your flight has been delayed. It's now scheduled to depart at 7 PM.\""
          },
          {
            id: "a7-r-4",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "Which seat does the passenger choose?",
            options: ["A window seat", "An aisle seat", "A middle seat"],
            answer: "A window seat",
            explanation: "Resposta à pergunta \"Would you prefer a window seat or an aisle seat?\": \"A window seat, please.\""
          },
          {
            id: "a7-r-5",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "What time does the flight start boarding?",
            options: ["6:30", "7:00", "5:30"],
            answer: "6:30",
            explanation: "\"Your flight is boarding at gate C12 at 6:30.\" O horário de partida (7 PM) é depois do embarque."
          },
          {
            id: "a7-r-6",
            type: "fill",
            topic: "vocab-in-context",
            prompt: "Complete com palavra do texto: \"I'm sorry for the ___.\" (transtorno causado pelo atraso)",
            accept: ["inconvenience"],
            explanation: "\"I'm sorry for the inconvenience\" — pedido de desculpas padrão em atendimento."
          }
        ]
      },
      {
        id: "a7-passage-2",
        title: "Planos de viagem de Júlia",
        text:
          "Júlia is going to Paris next week. She is travelling with her sister, and they are staying in " +
          "a small hotel for four days. Their flight is departing from Terminal 2 at 8:15 AM, so a taxi is " +
          "picking them up at 5:30. Júlia is bringing a laptop and a book in her carry-on, but her sister is " +
          "not bringing anything electronic. At the airport, they are checking one suitcase together.",
        questions: [
          {
            id: "a7-r-7",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "How long are Júlia and her sister staying in Paris?",
            options: ["For four days.", "For a week.", "For two days."],
            answer: "For four days.",
            explanation: "\"They are staying in a small hotel for four days.\""
          },
          {
            id: "a7-r-8",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "What time is the taxi picking them up?",
            options: ["At 5:30.", "At 8:15.", "At 4:00."],
            answer: "At 5:30.",
            explanation: "O voo parte às 8:15, mas o táxi busca as duas às 5:30."
          },
          {
            id: "a7-r-9",
            type: "mc",
            topic: "present-continuous-questions",
            prompt: "Qual pergunta pode ter como resposta \"A laptop and a book\"?",
            options: [
              "What is Júlia bringing in her carry-on?",
              "Where is Júlia staying?",
              "Who is Júlia travelling with?"
            ],
            answer: "What is Júlia bringing in her carry-on?",
            explanation: "What pergunta a coisa. Where seria o lugar e who seria a pessoa."
          },
          {
            id: "a7-r-10",
            type: "fill",
            topic: "present-continuous-questions",
            prompt: "Complete a pergunta cuja resposta é \"From Terminal 2\": \"Which terminal ___ their flight departing from?\" (is ou are)",
            accept: ["is"],
            explanation: "\"Their flight\" = it → is. Which terminal is their flight departing from?"
          }
        ]
      }
    ]
  });
})();
