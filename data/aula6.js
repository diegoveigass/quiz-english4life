// Aula 6 — Air Travel: perguntas x pedidos (may/can/could), instruções x anúncios e vocabulário
// de aeroporto. Baseado em: aula_6_28_09_26 (worksheet Linguahouse pre-int A2-B1 "Air Travel").
// Frases e textos originais, inspirados nos exercícios da pasta.
(function () {
  window.QUIZ_AULAS = window.QUIZ_AULAS || [];

  window.QUIZ_AULAS.push({
    id: "aula6",
    label: "Aula 6",
    dateLabel: "28/09/2026",
    folder: "aula_6_28_09_26",

    theory: {
      title: "Air Travel: perguntas, pedidos, instruções e anúncios",
      explanation:
        "Numa situação de atendimento, como no aeroporto, você ouve quatro tipos de fala. " +
        "Perguntas (questions) pedem uma informação: \"Where are you flying to?\". Pedidos " +
        "(requests) querem que você FAÇA algo e costumam usar may, can ou could: \"May I see your " +
        "passport, please?\". Instruções (instructions) mandam você fazer algo, direto no " +
        "imperativo: \"Place your bag on the scales.\". Anúncios (announcements) dão instruções ou " +
        "informações para muita gente de uma vez: \"We are about to take off.\". Saber qual é qual " +
        "ajuda a responder: pergunta pede resposta; pedido e instrução pedem uma ação (às vezes com " +
        "\"Here you are.\" / \"Sure.\"); anúncio normalmente só pede que você siga o que foi dito.",
      examples: [
        { en: "Are you checking any bags today?", pt: "Vai despachar alguma mala hoje? (pergunta sim/não → quer informação)" },
        { en: "Could you show me your boarding pass, please?", pt: "Poderia me mostrar seu cartão de embarque? (pedido com could → quer que você faça algo)" },
        { en: "— May I see your passport, please? — Here you are.", pt: "— Posso ver seu passaporte? — Aqui está. (resposta natural a um pedido)" },
        { en: "Take off your shoes and put them in the tray.", pt: "Tire os sapatos e coloque na bandeja. (instrução, imperativo)" },
        { en: "Please fasten your seat belt when the sign is switched on.", pt: "Por favor, aperte o cinto quando o aviso acender. (anúncio para todos)" },
        { en: "The plane took off an hour late.", pt: "O avião decolou com uma hora de atraso. (take off = decolar; o oposto é land)" }
      ],
      tips: [
        "Pedido educado: May I…? (pedir permissão — só com I/we), Can you…? (mais informal), Could you…? (mais educado). Todos seguidos do verbo na forma base: \"Could you open\", nunca \"Could you opening/to open\".",
        "Instrução = imperativo, sem sujeito: Place…, Step this way…, Take off…, Go through… O \"please\" deixa mais educado, mas não muda o tipo.",
        "Perguntas sim/não (e pedidos) sobem a entonação no final ↗; perguntas com where, what, how many descem ↘.",
        "Nem sempre é preciso responder com palavras: diante de um pedido ou instrução, basta agir (entregar o passaporte, colocar a mala). Se quiser, use Here you are. / Sure. / Of course.",
        "Não entendeu? Peça para repetir: Sorry, could you repeat that, please? / Sorry, could you say that again?",
        "Take off tem dois sentidos: tirar (roupa, sapato — o oposto é put on) e decolar (avião — o oposto é land).",
        "Vocabulário-chave: check in / check a bag (despachar), scales (balança), boarding pass (cartão de embarque), departure gate (portão), aisle seat x window seat (corredor x janela), overhead locker (bagageiro), cabin crew (tripulação), carry-on bag (bagagem de mão), tray (bandeja).",
        "Expressões de tempo nos anúncios: about to = prestes a (vai acontecer já, já); shortly = em breve, daqui a pouco.",
        "Depois do pouso: Immigration (passaporte), Baggage Reclaim (pegar a mala), Customs (alfândega — Nothing to declare / Goods to declare)."
      ]
    },

    questions: [
      // ---------- Vocabulário do aeroporto ----------
      {
        id: "a6-mc-1",
        type: "mc",
        topic: "air-travel-vocab",
        prompt: "At check-in, the agent asks you to put your suitcase on the ___ to weigh it.",
        options: ["scales", "tray", "overhead locker"],
        answer: "scales",
        explanation: "\"Scales\" é a balança onde a mala é pesada no check-in. \"Tray\" é a bandeja do raio-x; \"overhead locker\" é o bagageiro dentro do avião."
      },
      {
        id: "a6-mc-2",
        type: "mc",
        topic: "air-travel-vocab",
        prompt: "I always ask for an ___ seat because I get up a lot during long flights.",
        options: ["aisle", "window", "middle"],
        answer: "aisle",
        explanation: "Quem levanta muito prefere a poltrona do corredor (aisle seat — o \"s\" é mudo: /aɪl/), para não incomodar ninguém ao sair."
      },
      {
        id: "a6-mc-3",
        type: "mc",
        topic: "air-travel-vocab",
        prompt: "You can't get on the plane without your ___ — it shows your seat number and gate.",
        options: ["boarding pass", "landing card", "luggage tag"],
        answer: "boarding pass",
        explanation: "O cartão de embarque (boarding pass) traz assento, portão e horário de embarque. \"Landing card\" é o formulário preenchido na chegada a alguns países."
      },
      {
        id: "a6-mc-4",
        type: "mc",
        topic: "air-travel-vocab",
        prompt: "The ___ served drinks and snacks about an hour after take-off.",
        options: ["cabin crew", "ground staff", "customs officers"],
        answer: "cabin crew",
        explanation: "\"Cabin crew\" é a tripulação de cabine (comissários) — quem atende os passageiros durante o voo."
      },
      {
        id: "a6-mc-5",
        type: "mc",
        topic: "air-travel-vocab",
        prompt: "My flight to Lisbon leaves from ___ B12, so I need to hurry.",
        options: ["departure gate", "baggage reclaim", "check-in desk"],
        answer: "departure gate",
        explanation: "O avião sai do portão de embarque (departure gate). \"Baggage reclaim\" é onde você pega a mala na chegada."
      },
      {
        id: "a6-mc-6",
        type: "mc",
        topic: "air-travel-vocab",
        prompt: "Your small suitcase can go in the ___ above your seat.",
        options: ["overhead locker", "scales", "aisle"],
        answer: "overhead locker",
        explanation: "\"Overhead locker\" (britânico; em inglês americano, overhead bin) é o bagageiro acima das poltronas."
      },
      {
        id: "a6-mc-7",
        type: "mc",
        topic: "air-travel-vocab",
        prompt: "Qual é a diferença entre \"check a bag\" e \"a carry-on bag\"?",
        options: [
          "Check a bag = despachar a mala; carry-on bag = bagagem de mão que vai com você na cabine.",
          "Check a bag = revisar a mala; carry-on bag = mala despachada.",
          "As duas querem dizer mala despachada."
        ],
        answer: "Check a bag = despachar a mala; carry-on bag = bagagem de mão que vai com você na cabine.",
        explanation: "\"Are you checking any bags?\" = vai despachar alguma mala? A carry-on bag é a que você carrega (carry) para dentro do avião."
      },
      {
        id: "a6-mc-8",
        type: "mc",
        topic: "air-travel-vocab",
        prompt: "The gate agent said, \"Please don't leave your bags ___.\" (sem ninguém tomando conta)",
        options: ["unattended", "unpacked", "unchecked"],
        answer: "unattended",
        explanation: "\"Unattended\" = desacompanhado, sem ninguém cuidando. É comum a pergunta de segurança \"Have you left your bag unattended at any time?\"."
      },

      // ---------- Pergunta x pedido ----------
      {
        id: "a6-mc-9",
        type: "mc",
        topic: "question-vs-request",
        prompt: "\"Where are you flying to today?\" — isso é:",
        options: ["uma pergunta (quer uma informação)", "um pedido (quer que você faça algo)", "um anúncio"],
        answer: "uma pergunta (quer uma informação)",
        explanation: "O atendente só quer saber o destino — ele precisa de uma informação, não que você faça algo. Resposta: \"To Madrid.\""
      },
      {
        id: "a6-mc-10",
        type: "mc",
        topic: "question-vs-request",
        prompt: "\"Could you lift your arms, please?\" — isso é:",
        options: ["um pedido (quer que você faça algo)", "uma pergunta (quer uma informação)", "um anúncio para todos os passageiros"],
        answer: "um pedido (quer que você faça algo)",
        explanation: "Apesar do formato de pergunta, \"Could you… please?\" é um pedido: o agente de segurança quer que você levante os braços. A resposta é a ação."
      },
      {
        id: "a6-mc-11",
        type: "mc",
        topic: "question-vs-request",
        prompt: "\"Has anyone given you anything to carry on the flight?\" — isso é:",
        options: ["uma pergunta de segurança (quer informação)", "um pedido", "uma instrução"],
        answer: "uma pergunta de segurança (quer informação)",
        explanation: "É uma pergunta sim/não: o atendente quer saber se alguém te entregou algo. Resposta: \"No, nobody has.\""
      },
      {
        id: "a6-mc-12",
        type: "mc",
        topic: "question-vs-request",
        prompt: "No check-in, dá para responder \"no\" a \"May I see your passport, please?\"",
        options: [
          "Não — é um pedido educado, mas obrigatório; você precisa mostrar o passaporte.",
          "Sim — como é uma pergunta, você pode recusar.",
          "Sim, desde que peça desculpas."
        ],
        answer: "Não — é um pedido educado, mas obrigatório; você precisa mostrar o passaporte.",
        explanation: "May/can/could deixam o pedido educado, mas nesse contexto ele não é opcional: sem passaporte, sem embarque."
      },
      {
        id: "a6-mc-13",
        type: "mc",
        topic: "question-vs-request",
        prompt: "Quando alguém faz um pedido (request), essa pessoa…",
        options: ["quer que você faça algo", "só precisa de uma informação", "está dando um aviso geral"],
        answer: "quer que você faça algo",
        explanation: "Request = pedido de ação (mostrar, abrir, colocar). Question = pedido de informação."
      },

      // ---------- Pedidos educados (may/can/could) ----------
      {
        id: "a6-mc-14",
        type: "mc",
        topic: "polite-requests",
        prompt: "___ I have a glass of water, please?",
        options: ["Could", "Do", "Will"],
        answer: "Could",
        explanation: "Para pedir algo educadamente: Could/Can/May I have…? \"Do I have\" seria uma pergunta sobre posse (\"eu tenho?\")."
      },
      {
        id: "a6-mc-15",
        type: "mc",
        topic: "polite-requests",
        prompt: "Could you ___ your laptop out of your bag, please?",
        options: ["take", "taking", "to take"],
        answer: "take",
        explanation: "Depois de may/can/could vem o verbo na forma base, sem \"to\" e sem -ing: Could you take…"
      },
      {
        id: "a6-mc-16",
        type: "mc",
        topic: "polite-requests",
        prompt: "Qual pedido é o mais educado para falar com um desconhecido?",
        options: [
          "Could you help me with my bag, please?",
          "Help me with my bag.",
          "You help me with my bag?"
        ],
        answer: "Could you help me with my bag, please?",
        explanation: "\"Could you… please?\" é a forma mais educada. O imperativo sozinho soa como ordem, e \"You help me?\" não tem auxiliar."
      },
      {
        id: "a6-mc-17",
        type: "mc",
        topic: "polite-requests",
        prompt: "O agente quer ver seu cartão de embarque. Qual frase está correta?",
        options: [
          "May I see your boarding pass, please?",
          "May you see my boarding pass, please?",
          "May I to see your boarding pass, please?"
        ],
        answer: "May I see your boarding pass, please?",
        explanation: "\"May I…?\" = posso…? (pedindo permissão para ele mesmo ver). \"May you\" não se usa em pedidos, e depois de may não vem \"to\"."
      },
      {
        id: "a6-mc-18",
        type: "mc",
        topic: "polite-requests",
        prompt: "Você está com frio no avião. O que pede ao comissário?",
        options: [
          "Could I have a blanket, please?",
          "Could I having a blanket, please?",
          "Could I a blanket, please?"
        ],
        answer: "Could I have a blanket, please?",
        explanation: "Could I have + coisa + please? é a fórmula para pedir algo. O verbo \"have\" não pode faltar e fica na forma base."
      },

      // ---------- Responder a pedidos ----------
      {
        id: "a6-mc-19",
        type: "mc",
        topic: "responding-requests",
        prompt: "— Could I see your passport, please? — ___",
        options: ["Here you are.", "Yes, you could.", "No problem, I see."],
        answer: "Here you are.",
        explanation: "Ao entregar algo, diga \"Here you are.\" (aqui está). \"Yes, you could\" responde a gramática, não o pedido — soa estranho."
      },
      {
        id: "a6-mc-20",
        type: "mc",
        topic: "responding-requests",
        prompt: "— Can you put your bag on the scales, please? — ___ (e coloca a mala)",
        options: ["Sure.", "Yes, I can put.", "It's a bag."],
        answer: "Sure.",
        explanation: "Respostas curtas e naturais a um pedido: Sure. / OK. / Of course. — ou simplesmente fazer a ação."
      },
      {
        id: "a6-mc-21",
        type: "mc",
        topic: "responding-requests",
        prompt: "O comissário fala rápido demais e você não entende. O que dizer?",
        options: [
          "Sorry, could you repeat that, please?",
          "What you say?",
          "Repeat."
        ],
        answer: "Sorry, could you repeat that, please?",
        explanation: "Pedir repetição também é um pedido: Sorry, could you repeat that / say that again, please? As outras opções soam rudes ou estão erradas."
      },

      // ---------- Instrução x anúncio ----------
      {
        id: "a6-mc-22",
        type: "mc",
        topic: "instructions-announcements",
        prompt: "\"Put your liquids in a clear plastic bag.\" — isso é:",
        options: ["uma instrução", "um anúncio", "uma pergunta"],
        answer: "uma instrução",
        explanation: "Imperativo dirigido a você (put…) = instrução: diz o que você precisa fazer."
      },
      {
        id: "a6-mc-23",
        type: "mc",
        topic: "instructions-announcements",
        prompt: "\"Ladies and gentlemen, we will be landing in about twenty minutes.\" — isso é:",
        options: ["um anúncio", "uma instrução individual", "um pedido"],
        answer: "um anúncio",
        explanation: "Anúncios são para muita gente de uma vez (ladies and gentlemen) e dão informações ou instruções gerais."
      },
      {
        id: "a6-mc-24",
        type: "mc",
        topic: "instructions-announcements",
        prompt: "Depois de uma instrução ou de um anúncio, normalmente precisamos…",
        options: ["fazer algo", "responder com uma frase", "fazer uma pergunta"],
        answer: "fazer algo",
        explanation: "Instruções e anúncios pedem ação (tirar o sapato, apertar o cinto). Não é preciso responder em voz alta."
      },
      {
        id: "a6-mc-25",
        type: "mc",
        topic: "instructions-announcements",
        prompt: "Instruções…",
        options: ["dizem o que você precisa fazer", "só sugerem o que você pode fazer", "são sempre para muitas pessoas"],
        answer: "dizem o que você precisa fazer",
        explanation: "Instrução não é sugestão: \"Take off your belt\" significa que você precisa tirar o cinto."
      },

      // ---------- Entonação ----------
      {
        id: "a6-mc-26",
        type: "mc",
        topic: "intonation",
        prompt: "\"Are you travelling alone?\" — a entonação no final…",
        options: ["sobe ↗ (pergunta sim/não)", "desce ↘ (pergunta com question word)", "fica igual"],
        answer: "sobe ↗ (pergunta sim/não)",
        explanation: "Perguntas sim/não — e também pedidos como \"Can you…?\" — sobem no final."
      },
      {
        id: "a6-mc-27",
        type: "mc",
        topic: "intonation",
        prompt: "\"How many bags are you checking?\" — a entonação no final…",
        options: ["desce ↘ (pergunta com question word)", "sobe ↗ (pergunta sim/não)", "sobe e desce várias vezes"],
        answer: "desce ↘ (pergunta com question word)",
        explanation: "Perguntas com where, what, how many, when… costumam descer no final."
      },

      // ---------- Phrasal verbs e expressões ----------
      {
        id: "a6-mc-28",
        type: "mc",
        topic: "airport-phrasal-verbs",
        prompt: "Na segurança: \"Take off your jacket, please.\" Aqui \"take off\" significa…",
        options: ["tirar (a roupa) — o oposto é put on", "decolar — o oposto é land", "levar embora"],
        answer: "tirar (a roupa) — o oposto é put on",
        explanation: "Com roupa, sapato, cinto: take off = tirar; put on = vestir/colocar."
      },
      {
        id: "a6-mc-29",
        type: "mc",
        topic: "airport-phrasal-verbs",
        prompt: "No avião: \"We'll take off in five minutes.\" Aqui \"take off\" significa…",
        options: ["decolar — o oposto é land", "tirar a roupa — o oposto é put on", "cancelar o voo"],
        answer: "decolar — o oposto é land",
        explanation: "Para aviões: take off = decolar; land = pousar. O substantivo é take-off (decolagem)."
      },
      {
        id: "a6-mc-30",
        type: "mc",
        topic: "airport-phrasal-verbs",
        prompt: "\"Step this way, please\" — o que o funcionário quer?",
        options: ["Que você venha/ande por aqui.", "Que você suba um degrau.", "Que você espere parado."],
        answer: "Que você venha/ande por aqui.",
        explanation: "\"Step\" aqui é andar/dar alguns passos: \"venha por aqui, por favor\". Muito comum na segurança."
      },
      {
        id: "a6-mc-31",
        type: "mc",
        topic: "airport-phrasal-verbs",
        prompt: "Qual palavra é muito usada em aeroportos com o mesmo sentido de \"put\"?",
        options: ["place", "take", "leave"],
        answer: "place",
        explanation: "\"Place your items in the tray\" = \"put your items in the tray\". Place soa mais formal, típico de instruções e anúncios."
      },
      {
        id: "a6-mc-32",
        type: "mc",
        topic: "airport-phrasal-verbs",
        prompt: "\"We are about to start boarding.\" — \"about to\" significa…",
        options: ["prestes a (vai acontecer já)", "mais ou menos", "sobre"],
        answer: "prestes a (vai acontecer já)",
        explanation: "Be about to + verbo = algo vai acontecer em instantes. Não confunda com \"about\" = sobre / aproximadamente."
      },
      {
        id: "a6-mc-33",
        type: "mc",
        topic: "airport-phrasal-verbs",
        prompt: "\"The captain will shortly switch off the seat belt sign.\" — \"shortly\" significa…",
        options: ["em breve, daqui a pouco", "rapidamente, com pressa", "por pouco tempo"],
        answer: "em breve, daqui a pouco",
        explanation: "\"Shortly\" = soon. Armadilha: não quer dizer \"de forma curta\" nem \"por pouco tempo\"."
      },
      {
        id: "a6-mc-34",
        type: "mc",
        topic: "airport-phrasal-verbs",
        prompt: "After check-in, go through Security and make your ___ to gate D7.",
        options: ["way", "road", "walk"],
        answer: "way",
        explanation: "\"Make your way to\" = dirija-se a / vá até. Expressão fixa, comum em instruções de aeroporto."
      },

      // ---------- Depois do pouso ----------
      {
        id: "a6-mc-35",
        type: "mc",
        topic: "arrival-vocab",
        prompt: "You have nothing to declare. Which exit should you take at Customs?",
        options: ["The green one (Nothing to declare).", "The red one (Goods to declare).", "The one for Baggage Reclaim."],
        answer: "The green one (Nothing to declare).",
        explanation: "Na alfândega (Customs): verde = Nothing to declare (nada a declarar); vermelho = Goods to declare (bens a declarar)."
      },
      {
        id: "a6-mc-36",
        type: "mc",
        topic: "arrival-vocab",
        prompt: "Where do you collect the suitcase you checked in?",
        options: ["At Baggage Reclaim.", "At Immigration.", "At the departure gate."],
        answer: "At Baggage Reclaim.",
        explanation: "\"Baggage Reclaim\" (em inglês americano, baggage claim) é a esteira onde você pega a mala despachada."
      },
      {
        id: "a6-mc-37",
        type: "mc",
        topic: "arrival-vocab",
        prompt: "At ___, an officer checks your passport and may ask why you are visiting the country.",
        options: ["Immigration", "Customs", "Baggage Reclaim"],
        answer: "Immigration",
        explanation: "Immigration = controle de passaportes. Customs (alfândega) controla o que você traz na bagagem."
      },

      // ---------- Preencher: palavra que falta (formato do exercício 4) ----------
      {
        id: "a6-fill-1",
        type: "fill",
        topic: "missing-word",
        prompt: "Complete com a palavra que falta: \"___ I see your ticket, please?\" (pedido de permissão, começa com M)",
        accept: ["may"],
        explanation: "\"May I see…?\" = posso ver…? É a forma mais formal de pedir permissão."
      },
      {
        id: "a6-fill-2",
        type: "fill",
        topic: "missing-word",
        prompt: "Complete com a palavra que falta: \"Did you pack this suitcase ___?\" (você mesmo)",
        accept: ["yourself"],
        explanation: "\"Did you pack your bag yourself?\" é pergunta de segurança padrão: você mesmo fez a mala?"
      },
      {
        id: "a6-fill-3",
        type: "fill",
        topic: "missing-word",
        prompt: "Complete com a palavra que falta: \"Please fasten your seat ___ when the sign is on.\"",
        accept: ["belt"],
        explanation: "Seat belt = cinto de segurança. Fasten your seat belt = aperte o cinto."
      },
      {
        id: "a6-fill-4",
        type: "fill",
        topic: "missing-word",
        prompt: "Complete com a palavra que falta: \"The cabin crew will be passing ___ the cabin with hot drinks.\"",
        accept: ["through"],
        explanation: "Pass through the cabin = passar pela cabine (de ponta a ponta). \"Through\" dá a ideia de atravessar."
      },
      {
        id: "a6-fill-5",
        type: "fill",
        topic: "missing-word",
        prompt: "Complete com a palavra que falta: \"Are you checking ___ bags today?\" (alguma)",
        accept: ["any"],
        explanation: "Em perguntas, \"any\" = algum/alguma: Are you checking any bags?"
      },
      {
        id: "a6-fill-6",
        type: "fill",
        topic: "missing-word",
        prompt: "Complete com a palavra que falta: \"Please put your coats and bags in the overhead ___.\"",
        accept: ["lockers", "locker"],
        explanation: "Overhead locker(s) = bagageiro(s) acima das poltronas."
      },
      {
        id: "a6-fill-7",
        type: "fill",
        topic: "missing-word",
        prompt: "Complete com a palavra que falta: \"Boarding will begin ___ .\" (em breve — começa com S)",
        accept: ["shortly", "soon"],
        explanation: "\"Shortly\" = em breve. É a palavra típica dos anúncios; \"soon\" também está certo."
      },
      {
        id: "a6-fill-8",
        type: "fill",
        topic: "missing-word",
        prompt: "Complete com a palavra que falta: \"___ you wearing any jewellery?\" (verbo auxiliar)",
        accept: ["are"],
        explanation: "Pergunta no contínuo: Are you wearing…? (está usando alguma joia?). Repare na grafia britânica: jewellery (americano: jewelry)."
      },

      // ---------- Preencher: pedidos e phrasal verbs ----------
      {
        id: "a6-fill-9",
        type: "fill",
        topic: "polite-requests",
        prompt: "Transforme em pedido educado com \"could\": \"Open your bag.\" → \"___ you open your bag, please?\"",
        accept: ["could"],
        explanation: "Could you + verbo base + please? transforma uma ordem num pedido educado."
      },
      {
        id: "a6-fill-10",
        type: "fill",
        topic: "polite-requests",
        prompt: "Complete o pedido: \"Could I ___ a window seat, please?\" (ter/pegar)",
        accept: ["have", "get"],
        explanation: "Could I have…? é a fórmula clássica para pedir algo. \"Could I get…?\" também é comum, principalmente no inglês americano."
      },
      {
        id: "a6-fill-11",
        type: "fill",
        topic: "airport-phrasal-verbs",
        prompt: "Complete com o oposto: \"You can put ___ your shoes again after the scanner.\" (oposto de take off)",
        accept: ["on"],
        explanation: "Take off (tirar) x put on (colocar/vestir)."
      },
      {
        id: "a6-fill-12",
        type: "fill",
        topic: "airport-phrasal-verbs",
        prompt: "Complete com o oposto de \"take off\" (para aviões): \"We will ___ in Rome at 6 p.m.\"",
        accept: ["land"],
        explanation: "Take off = decolar; land = pousar."
      },
      {
        id: "a6-fill-13",
        type: "fill",
        topic: "airport-phrasal-verbs",
        prompt: "Complete: \"Hurry up! The plane is ___ to take off.\" (prestes a)",
        accept: ["about"],
        explanation: "Be about to + verbo = prestes a. \"The plane is about to take off.\""
      },
      {
        id: "a6-fill-14",
        type: "fill",
        topic: "air-travel-vocab",
        prompt: "Complete: \"I prefer a ___ seat so I can look outside.\" (janela)",
        accept: ["window"],
        explanation: "Window seat = janela; aisle seat = corredor."
      },

      // ---------- Achar o erro ----------
      {
        id: "a6-err-1",
        type: "mc",
        topic: "error-correction",
        prompt: "Achar o erro: qual versão do pedido está correta?",
        options: [
          "Can you show me your boarding pass, please?",
          "Can you showing me your boarding pass, please?",
          "Can you to show me your boarding pass, please?"
        ],
        answer: "Can you show me your boarding pass, please?",
        explanation: "Modal (can/could/may) + verbo base. Nada de -ing, nada de \"to\"."
      },
      {
        id: "a6-err-2",
        type: "mc",
        topic: "error-correction",
        prompt: "Achar o erro: qual frase está correta?",
        options: [
          "Please place your bag on the scales.",
          "Please place your bag in the scales.",
          "Please place your bag at the scales."
        ],
        answer: "Please place your bag on the scales.",
        explanation: "Em cima de uma superfície → on: on the scales, on the table. (E \"in the tray\", porque a bandeja tem bordas e as coisas ficam dentro.)"
      },
      {
        id: "a6-err-3",
        type: "mc",
        topic: "error-correction",
        prompt: "Achar o erro: qual pergunta está correta?",
        options: [
          "Where are you flying to today?",
          "Where you are flying to today?",
          "Where are you flying today to?"
        ],
        answer: "Where are you flying to today?",
        explanation: "Ordem da pergunta: question word + auxiliar + sujeito + verbo. A preposição \"to\" fica logo depois do verbo, e a expressão de tempo no final."
      },
      {
        id: "a6-fill-15",
        type: "fill",
        topic: "error-correction",
        prompt: "Corrija a frase e digite-a inteira: \"Did you packed your bag yourself?\"",
        accept: ["did you pack your bag yourself"],
        explanation: "Com o auxiliar \"did\", o verbo principal volta para a forma base: Did you pack (não packed)."
      },

      // ---------- Tradução PT → EN ----------
      {
        id: "a6-tr-1",
        type: "mc",
        topic: "translation",
        prompt: "Traduza: \"Você poderia me mostrar seu cartão de embarque, por favor?\"",
        options: [
          "Could you show me your boarding pass, please?",
          "You could show me your boarding pass, please?",
          "Could you show me your pass of boarding, please?"
        ],
        answer: "Could you show me your boarding pass, please?",
        explanation: "Pedido: Could you + verbo base… please? Na pergunta, o modal vem antes do sujeito. E \"cartão de embarque\" é boarding pass."
      },
      {
        id: "a6-tr-2",
        type: "fill",
        topic: "translation",
        prompt: "Traduza para o inglês: \"Aperte o cinto.\" (3 palavras, instrução)",
        accept: ["fasten your seat belt", "fasten your seatbelt"],
        explanation: "Instrução = imperativo sem sujeito: Fasten your seat belt."
      },
      {
        id: "a6-tr-3",
        type: "mc",
        topic: "translation",
        prompt: "Traduza: \"O avião está prestes a decolar.\"",
        options: [
          "The plane is about to take off.",
          "The plane is about take off.",
          "The plane is almost to take off."
        ],
        answer: "The plane is about to take off.",
        explanation: "Be about TO + verbo. Sem o \"to\" a frase fica errada."
      },

      // ---------- Ligar colunas ----------
      {
        id: "a6-match-1",
        type: "match",
        topic: "air-travel-vocab",
        prompt: "Ligue cada palavra ao seu significado:",
        pairs: [
          { left: "aisle seat", right: "poltrona do corredor" },
          { left: "scales", right: "balança do check-in" },
          { left: "tray", right: "bandeja do raio-x" },
          { left: "cabin crew", right: "comissários de bordo" },
          { left: "departure gate", right: "portão de embarque" },
          { left: "overhead locker", right: "bagageiro acima do assento" }
        ],
        explanation: "Vocabulário do warm-up da aula: aisle seat, scales, tray, cabin crew, departure gate, overhead locker."
      },
      {
        id: "a6-match-2",
        type: "match",
        topic: "instructions-announcements",
        prompt: "Classifique cada frase:",
        pairs: [
          { left: "Where are you flying to?", right: "pergunta" },
          { left: "Could you open your bag, please?", right: "pedido" },
          { left: "Take off your belt.", right: "instrução" },
          { left: "We are experiencing some turbulence.", right: "anúncio" },
          { left: "Did you pack your bag yourself?", right: "pergunta" },
          { left: "Step this way, please.", right: "instrução" }
        ],
        explanation: "Pergunta = quer informação; pedido = modal + quer uma ação; instrução = imperativo para você; anúncio = informação/instrução para todos."
      },
      {
        id: "a6-match-3",
        type: "match",
        topic: "responding-requests",
        prompt: "Ligue cada fala do funcionário à melhor resposta do passageiro:",
        pairs: [
          { left: "May I see your passport, please?", right: "Here you are." },
          { left: "How many bags are you checking?", right: "Just one." },
          { left: "Have you left your bag unattended?", right: "No, I haven't." },
          { left: "Where are you flying to today?", right: "To Dublin." },
          { left: "Would you like something to drink?", right: "Yes, an orange juice, please." }
        ],
        explanation: "Pedido → entregue e diga \"Here you are\"; pergunta com how many/where → dê a informação; pergunta sim/não com have → resposta curta com o mesmo auxiliar (No, I haven't)."
      },

      // ---------- Várias lacunas: ordem das etapas ----------
      {
        id: "a6-multi-1",
        type: "multi",
        topic: "airport-sequence",
        prompt: "Coloque as etapas da viagem na ordem (digite o número de 1 a 6):",
        blanks: [
          { label: "You go through Security and put your things in a tray.", accept: ["3"] },
          { label: "You arrive at the airport and go to the check-in desk.", accept: ["1"] },
          { label: "The plane takes off.", accept: ["6"] },
          { label: "You check your suitcase and get your boarding pass.", accept: ["2"] },
          { label: "You board the plane and fasten your seat belt.", accept: ["5"] },
          { label: "You find your departure gate.", accept: ["4"] }
        ],
        explanation: "Check-in (1) → despachar a mala e pegar o cartão (2) → segurança (3) → achar o portão (4) → embarcar e apertar o cinto (5) → decolagem (6)."
      },
      {
        id: "a6-multi-2",
        type: "multi",
        topic: "polite-requests",
        prompt: "Complete os pedidos com may, can ou could (cada lacuna tem uma resposta):",
        blanks: [
          { label: "\"___ I see your passport?\" (permissão, bem formal — começa com M)", accept: ["may"] },
          { label: "\"___ you speak more slowly, please?\" (o mais educado — começa com C, 5 letras)", accept: ["could"] },
          { label: "\"___ you help me? It's heavy!\" (informal — começa com C, 3 letras)", accept: ["can"] }
        ],
        explanation: "May I…? = permissão (formal, só com I/we). Could you…? = pedido mais educado. Can you…? = pedido informal."
      }
    ],

    passages: [
      {
        id: "a6-passage-1",
        title: "Camila no check-in (diálogo)",
        text:
          "Agent: Good morning! Where are you flying to today?\n" +
          "Camila: Good morning. To Edinburgh.\n" +
          "Agent: Lovely. May I see your passport, please?\n" +
          "Camila: Here you are.\n" +
          "Agent: Thank you. Are you checking any bags today?\n" +
          "Camila: Yes, just this one. And I have a small carry-on bag.\n" +
          "Agent: Could you put your suitcase on the scales, please? … That's fine. Did you pack it yourself?\n" +
          "Camila: Yes, I did.\n" +
          "Agent: Great. Would you prefer a window seat or an aisle seat?\n" +
          "Camila: Sorry, could you say that again, please?\n" +
          "Agent: Of course. Window or aisle?\n" +
          "Camila: Aisle, please. I always need to stretch my legs.\n" +
          "Agent: No problem — seat 22C. Here's your boarding pass. Go through Security and make your way " +
          "to gate A14. Boarding starts at 9:40.\n" +
          "Camila: Thank you very much!",
        questions: [
          {
            id: "a6-r-1",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "Where is Camila flying to?",
            options: ["Edinburgh", "Dublin", "London"],
            answer: "Edinburgh",
            explanation: "Ela responde à pergunta \"Where are you flying to today?\" com \"To Edinburgh.\""
          },
          {
            id: "a6-r-2",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "How many bags is Camila checking?",
            options: ["One", "Two", "None"],
            answer: "One",
            explanation: "\"Yes, just this one.\" — a outra é uma carry-on bag (bagagem de mão), que vai com ela na cabine."
          },
          {
            id: "a6-r-3",
            type: "mc",
            topic: "question-vs-request",
            prompt: "No diálogo, qual fala do agente é um PEDIDO (e não uma pergunta)?",
            options: [
              "Could you put your suitcase on the scales, please?",
              "Where are you flying to today?",
              "Did you pack it yourself?"
            ],
            answer: "Could you put your suitcase on the scales, please?",
            explanation: "O agente quer que Camila FAÇA algo (colocar a mala na balança). As outras duas pedem informação."
          },
          {
            id: "a6-r-4",
            type: "mc",
            topic: "responding-requests",
            prompt: "Why does Camila say \"Sorry, could you say that again, please?\"",
            options: [
              "She didn't understand the question and wants it repeated.",
              "She wants to change her seat.",
              "She is angry with the agent."
            ],
            answer: "She didn't understand the question and wants it repeated.",
            explanation: "É a forma educada de pedir repetição — exatamente o que a aula recomenda quando você não entende algo."
          },
          {
            id: "a6-r-5",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "Why does Camila choose an aisle seat?",
            options: [
              "She needs to stretch her legs.",
              "She wants to look outside.",
              "It's the only seat available."
            ],
            answer: "She needs to stretch her legs.",
            explanation: "\"I always need to stretch my legs\" — no corredor fica mais fácil levantar e esticar as pernas."
          },
          {
            id: "a6-r-6",
            type: "mc",
            topic: "instructions-announcements",
            prompt: "\"Go through Security and make your way to gate A14.\" — o que o agente está fazendo?",
            options: [
              "Dando uma instrução (o que ela precisa fazer em seguida).",
              "Fazendo um anúncio para todos os passageiros.",
              "Fazendo uma pergunta."
            ],
            answer: "Dando uma instrução (o que ela precisa fazer em seguida).",
            explanation: "Imperativo (go, make) dirigido só a ela = instrução."
          }
        ]
      },
      {
        id: "a6-passage-2",
        title: "Depois do pouso: o que acontece?",
        text:
          "When the plane has landed and the seat belt sign is switched off, passengers take their bags " +
          "from the overhead lockers and get off. At some airports you walk to the terminal; at others, " +
          "a bus takes you there.\n" +
          "The first stop is Immigration. An officer looks at your passport, and in some countries you " +
          "also have to fill in a landing card. Many airports now have electronic gates: you put your " +
          "passport on a scanner and a camera takes your photo.\n" +
          "Next comes Baggage Reclaim. Find the right belt on the screen, wait for your suitcase and " +
          "check the tag — a lot of bags look the same!\n" +
          "The last stage is Customs. If you are not bringing anything illegal and you haven't bought " +
          "too many duty-free goods, take the green exit: \"Nothing to declare\". If you have something " +
          "to declare, use the red exit.",
        questions: [
          {
            id: "a6-r-7",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "What is the first stop after you get off the plane?",
            options: ["Immigration", "Customs", "Baggage Reclaim"],
            answer: "Immigration",
            explanation: "\"The first stop is Immigration\" — controle de passaportes."
          },
          {
            id: "a6-r-8",
            type: "mc",
            topic: "arrival-vocab",
            prompt: "What do electronic gates do?",
            options: [
              "They scan your passport and take your photo.",
              "They weigh your suitcase.",
              "They check what you bought in the duty-free shop."
            ],
            answer: "They scan your passport and take your photo.",
            explanation: "\"You put your passport on a scanner and a camera takes your photo.\""
          },
          {
            id: "a6-r-9",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "Why should you check the tag on your suitcase?",
            options: [
              "Because many bags look the same.",
              "Because the tag shows your seat number.",
              "Because Customs officers ask for it."
            ],
            answer: "Because many bags look the same.",
            explanation: "\"Check the tag — a lot of bags look the same!\" — para não levar a mala de outra pessoa."
          },
          {
            id: "a6-r-10",
            type: "mc",
            topic: "arrival-vocab",
            prompt: "Você comprou só um perfume no free shop e não traz nada ilegal. Qual saída usar?",
            options: [
              "A verde — Nothing to declare.",
              "A vermelha — Goods to declare.",
              "Qualquer uma."
            ],
            answer: "A verde — Nothing to declare.",
            explanation: "Sem nada ilegal e sem excesso de compras no duty-free → saída verde."
          },
          {
            id: "a6-r-11",
            type: "fill",
            topic: "vocab-in-context",
            prompt: "Complete com a palavra do texto (o contrário de \"taken off\"): \"When the plane has ___ and the seat belt sign is switched off…\"",
            accept: ["landed"],
            explanation: "\"When the plane has landed\" — land = pousar, o oposto de take off (decolar)."
          }
        ]
      }
    ]
  });
})();
