// Aula 5 — Vocabulário: Daily routines (rotina diária) + Everyday problems (problemas do dia a dia)
// Baseado nos exercícios de: aula_5_21_09_26 (Cambridge, English Vocabulary in Use pre-int/int:
// unidade 48 "Daily routines" — sleep, food, keeping clean, work, evenings, housework — e unidade
// 52 "Everyday problems" — something wrong with, out of order, dropped/broke/spilt/burnt, run out
// of, missed the bus, left x forgot) e nos sites de apoio indicados (languageguide.org,
// lingoclip.app, newsinlevels.com).
// Frases e textos originais, inspirados no material, não copiados dos documentos.
(function () {
  window.QUIZ_AULAS = window.QUIZ_AULAS || [];

  window.QUIZ_AULAS.push({
    id: "aula5",
    label: "Aula 5",
    dateLabel: "21/09/2026",
    folder: "aula_5_21_09_26",

    theory: {
      title: "Vocabulário: rotina diária e pequenos problemas do dia a dia",
      explanation:
        "Esta aula é de vocabulário (Cambridge, English Vocabulary in Use — unidades 48 e 52). Na " +
        "rotina, o inglês usa muitas expressões prontas — principalmente have + substantivo (have " +
        "breakfast, have a shower, have a nap) — e verbos que não se traduzem palavra por palavra " +
        "(get up não é o mesmo que wake up; go to bed não é o mesmo que go to sleep). Nos problemas " +
        "do dia a dia, você aprende a dizer que algo não funciona (something wrong with…, not " +
        "working, out of order), a contar pequenos acidentes (dropped, broke, spilt, burnt, tripped " +
        "over, ran out of, missed the bus) e a diferença entre leave e forget. Vários desses verbos " +
        "são irregulares no passado (break → broke → broken; lose → lost; leave → left), então vale " +
        "decorar as três formas.",
      examples: [
        { en: "I have breakfast at seven and a shower before work.", pt: "Tomo café da manhã às sete e um banho antes do trabalho (have + substantivo; breakfast sem \"the\")." },
        { en: "My alarm didn't ring, so I overslept and missed the bus.", pt: "Meu despertador não tocou, então dormi demais e perdi o ônibus." },
        { en: "On Sundays we have a lie-in, and then friends come round for lunch.", pt: "Aos domingos ficamos mais tempo na cama, e depois amigos vêm em casa para almoçar." },
        { en: "There's something wrong with the oven: it isn't working properly.", pt: "Tem algo errado com o forno: ele não está funcionando direito." },
        { en: "The ticket machine is out of order, so I bought my ticket at the desk.", pt: "A máquina de bilhetes está fora de serviço, então comprei o bilhete no balcão." },
        { en: "He dropped his glasses and one lens broke.", pt: "Ele deixou os óculos caírem e uma lente quebrou." },
        { en: "We've run out of rice — can you go shopping?", pt: "Acabou o arroz — você pode ir ao mercado?" },
        { en: "I left my charger at work, so my phone is dead.", pt: "Deixei meu carregador no trabalho, então meu celular descarregou (leave: dizendo ONDE ficou)." }
      ],
      tips: [
        "have + substantivo é muito comum na rotina: have breakfast / lunch / dinner, have a snack, have a shower / a bath / a shave / a wash, have a nap, have a lie-in, have a rest, have a chat, have a lunch break. Em muitos casos soa mais natural que um verbo só: I'm going to have a shower.",
        "Refeições em geral não levam \"the\": have breakfast, have lunch, have dinner.",
        "Sono: wake up (acordar) x get up (sair da cama) x go to bed (ir para a cama) x go to sleep / fall asleep (pegar no sono). can't get to sleep = não consegue dormir; oversleep = dormir além da hora; a late night x an early night; a nap = soneca; a lie-in = ficar mais tempo na cama de manhã.",
        "Casa e comida: a snack (lanche), on my own / by myself (sozinho), bother (se dar ao trabalho), feed (dar comida a alguém/bicho), a cleaner (quem limpa). Tarefas: do the shopping, do the washing (roupa), do the washing-up (louça), do the ironing (passar roupa).",
        "Trabalho: leave home (sair de casa), get to work (chegar ao trabalho), leave work (sair do trabalho), get home (chegar em casa), a lunch break (intervalo de almoço).",
        "Noite: stay in (ficar em casa) x go out (sair para se divertir); come round (visitar alguém na casa da pessoa); have friends for dinner (convidar amigos para jantar em casa); play cards (jogar baralho).",
        "Aparelho com defeito: There's something wrong with the TV. / The light isn't working (não funciona). / The shower isn't working properly (funciona, mas mal). / The phone is out of order (fora de serviço — comum em máquinas e telefones públicos).",
        "Pequenos acidentes: drop (deixar cair) → dropped; spill (derramar) → spilt ou spilled; burn (queimar) → burnt ou burned; break (quebrar) → broke → broken; trip over (tropeçar em) → tripped; lose (perder algo) → lost; ruin (estragar); a stain (mancha); run out of (acabar) → ran / run. Miss the bus = perder o ônibus (chegar tarde); lose = perder um objeto.",
        "leave x forget: quando você diz ONDE a coisa ficou, usa-se leave — I left my bag on the bus. Forget vem sozinho ou com to + verbo: I forgot my bag. / I forgot to call you."
      ]
    },

    questions: [
      // ---------- Sono (sleep) ----------
      {
        id: "a5-mc-1",
        type: "mc",
        topic: "sleep-vocabulary",
        prompt: "I stayed up watching a series until 3 a.m., so this morning I ___ and woke up at 10.",
        options: ["overslept", "fell asleep", "had a nap"],
        answer: "overslept",
        explanation: "\"Oversleep\" = dormir mais do que devia (perder a hora). \"Fall asleep\" é pegar no sono; \"have a nap\" é tirar uma soneca."
      },
      {
        id: "a5-mc-2",
        type: "mc",
        topic: "sleep-vocabulary",
        prompt: "O que significa \"get up\"?",
        options: ["Levantar da cama", "Abrir os olhos e acordar", "Ir para a cama"],
        answer: "Levantar da cama",
        explanation: "\"Wake up\" é acordar (abrir os olhos); \"get up\" é sair da cama; \"go to bed\" é ir para a cama. Dá para acordar às 6 e só levantar às 6:30."
      },
      {
        id: "a5-mc-3",
        type: "mc",
        topic: "sleep-vocabulary",
        prompt: "I don't work on Saturdays, so I always ___ and stay in bed until nine.",
        options: ["have a lie-in", "have an early night", "fall asleep"],
        answer: "have a lie-in",
        explanation: "\"Have a lie-in\" = ficar mais tempo na cama de manhã, de propósito. \"An early night\" é ir dormir mais cedo, à noite."
      },
      {
        id: "a5-mc-4",
        type: "mc",
        topic: "sleep-vocabulary",
        prompt: "O oposto de \"a late night\" (dormir muito tarde) é...",
        options: ["an early night", "a lie-in", "a nap"],
        answer: "an early night",
        explanation: "Late night x early night: ir dormir tarde x ir dormir cedo. Lie-in e nap são outras coisas (ficar na cama de manhã / soneca)."
      },
      {
        id: "a5-mc-5",
        type: "mc",
        topic: "sleep-vocabulary",
        prompt: "I was so tired that I ___ as soon as my head touched the pillow.",
        options: ["fell asleep", "woke up", "overslept"],
        answer: "fell asleep",
        explanation: "\"Fall asleep\" = pegar no sono. Repare que é \"asleep\" (adjetivo), não \"sleep\"."
      },
      {
        id: "a5-mc-6",
        type: "mc",
        topic: "sleep-vocabulary",
        prompt: "Como se diz: \"Ontem eu dormi demais e perdi o ônibus.\"",
        options: [
          "Yesterday I overslept and missed the bus.",
          "Yesterday I slept much and lost the bus.",
          "Yesterday I overslept and lost the bus."
        ],
        answer: "Yesterday I overslept and missed the bus.",
        explanation: "\"Oversleep\" = dormir demais. \"Perder o ônibus\" (chegar tarde) é \"miss the bus\"; \"lose\" é para perder objetos ou dinheiro."
      },
      {
        id: "a5-mc-7",
        type: "mc",
        topic: "sleep-vocabulary",
        prompt: "O que é \"a nap\"?",
        options: ["Um sono curto, geralmente à tarde", "Uma noite muito mal dormida", "Um sonho ruim"],
        answer: "Um sono curto, geralmente à tarde",
        explanation: "\"Have a nap\" = tirar uma soneca (20 a 25 minutinhos, por exemplo)."
      },
      {
        id: "a5-fill-1",
        type: "fill",
        topic: "sleep-vocabulary",
        prompt: "Complete: I had too much coffee and couldn't ___ to sleep last night.",
        accept: ["get", "go"],
        explanation: "\"Can't get to sleep\" (ou \"go to sleep\") = não conseguir pegar no sono."
      },
      {
        id: "a5-fill-2",
        type: "fill",
        topic: "sleep-vocabulary",
        prompt: "Complete (soneca): I'm exhausted. I think I'll have a short ___ after lunch.",
        accept: ["nap"],
        explanation: "\"A nap\" é a soneca curta durante o dia: have a nap."
      },
      {
        id: "a5-fill-3",
        type: "fill",
        topic: "sleep-vocabulary",
        prompt: "Complete (dormir demais): I always set two alarms because I'm afraid I'll ___.",
        accept: ["oversleep"],
        explanation: "Depois de \"I'll\" o verbo fica na forma base: I'll oversleep."
      },
      {
        id: "a5-fill-4",
        type: "fill",
        topic: "sleep-vocabulary",
        prompt: "Complete: It was midnight and I was so sleepy that I ___ asleep on the sofa.",
        accept: ["fell"],
        explanation: "Passado de \"fall\" (irregular): fall → fell → fallen. Fell asleep = pegou no sono."
      },
      {
        id: "a5-fill-5",
        type: "fill",
        topic: "sleep-vocabulary",
        prompt: "Coloque na ordem certa: does / your / when / brother / get up ?",
        accept: ["when does your brother get up", "when does your brother get up?"],
        explanation: "Ordem da pergunta no simples: (wh-) + does + sujeito + verbo na forma base → When does your brother get up?"
      },

      // ---------- have + substantivo ----------
      {
        id: "a5-mc-8",
        type: "mc",
        topic: "have-collocations",
        prompt: "In the summer I usually ___ a quick shower in the morning.",
        options: ["have", "do", "make"],
        answer: "have",
        explanation: "Com banho, o inglês usa \"have a shower\" (no inglês americano também se ouve \"take a shower\"). Nunca \"do\" nem \"make\"."
      },
      {
        id: "a5-mc-9",
        type: "mc",
        topic: "have-collocations",
        prompt: "Qual frase está correta?",
        options: [
          "I usually have breakfast at 7:30.",
          "I usually have the breakfast at 7:30.",
          "I usually do breakfast at 7:30."
        ],
        answer: "I usually have breakfast at 7:30.",
        explanation: "Refeições em geral usam \"have\" e não levam \"the\": have breakfast, have lunch, have dinner."
      },
      {
        id: "a5-mc-10",
        type: "mc",
        topic: "have-collocations",
        prompt: "Qual é a correção de \"We did a chat after class.\"?",
        options: [
          "We had a chat after class.",
          "We made a chat after class.",
          "We did chat after class."
        ],
        answer: "We had a chat after class.",
        explanation: "\"Chat\" (conversa) combina com have: have a chat. Passado de have = had."
      },
      {
        id: "a5-fill-6",
        type: "fill",
        topic: "have-collocations",
        prompt: "Complete: On Saturdays I love to ___ a lie-in and stay in bed until nine.",
        accept: ["have"],
        explanation: "A expressão é \"have a lie-in\"."
      },
      {
        id: "a5-fill-7",
        type: "fill",
        topic: "have-collocations",
        prompt: "Complete: Come round after class and we can ___ a chat.",
        accept: ["have"],
        explanation: "\"Have a chat\" = bater um papo."
      },
      {
        id: "a5-fill-8",
        type: "fill",
        topic: "have-collocations",
        prompt: "Complete: In winter I often have a bath ___ of a shower.",
        accept: ["instead"],
        explanation: "\"Instead of\" = em vez de: have a bath instead of a shower."
      },
      {
        id: "a5-fill-9",
        type: "fill",
        topic: "have-collocations",
        prompt: "Reescreva usando have + substantivo (a shower): \"I'm going to shower.\"",
        accept: ["i'm going to have a shower", "i am going to have a shower"],
        explanation: "Em muitos contextos o inglês prefere have + substantivo a um verbo só: I'm going to have a shower."
      },

      // ---------- Casa, comida e limpeza ----------
      {
        id: "a5-mc-11",
        type: "mc",
        topic: "home-routine-vocab",
        prompt: "She lives ___, so she has to cook for herself every night.",
        options: ["on her own", "in her own", "by her own"],
        answer: "on her own",
        explanation: "\"On her own\" = \"by herself\" = sozinha, sem outras pessoas. \"On my/your/his/her own\" é a estrutura fixa."
      },
      {
        id: "a5-mc-12",
        type: "mc",
        topic: "home-routine-vocab",
        prompt: "Uma pessoa que trabalha limpando casas é um(a) ___.",
        options: ["cleaner", "washer", "sweeper"],
        answer: "cleaner",
        explanation: "\"A cleaner\" é quem limpa. \"Washer\" seria uma máquina de lavar."
      },
      {
        id: "a5-mc-13",
        type: "mc",
        topic: "home-routine-vocab",
        prompt: "\"Fortunately, my flatmate does the washing-up.\" O que quer dizer \"fortunately\"?",
        options: ["felizmente / por sorte", "infelizmente", "normalmente"],
        answer: "felizmente / por sorte",
        explanation: "\"Fortunately\" = luckily (por sorte). O contrário é \"unfortunately\" (infelizmente)."
      },
      {
        id: "a5-mc-14",
        type: "mc",
        topic: "home-routine-vocab",
        prompt: "We have a dog, so we ___ him in the morning and at night.",
        options: ["feed", "eat", "bother"],
        answer: "feed",
        explanation: "\"Feed\" = dar comida a alguém ou a um bicho. \"Eat\" é o próprio ato de comer."
      },
      {
        id: "a5-mc-15",
        type: "mc",
        topic: "home-routine-vocab",
        prompt: "I don't ___ to cook on weekdays — I usually just warm up something.",
        options: ["bother", "mind", "disturb"],
        answer: "bother",
        explanation: "\"Don't bother to + verbo\" = não se dar ao trabalho de. \"Mind\" pede -ing (I don't mind cooking), e \"disturb\" é incomodar alguém."
      },
      {
        id: "a5-mc-16",
        type: "mc",
        topic: "home-routine-vocab",
        prompt: "O que significa \"do the washing-up\"?",
        options: ["Lavar a louça", "Lavar a roupa", "Passar a roupa"],
        answer: "Lavar a louça",
        explanation: "Washing-up = louça; washing = roupa lavada; ironing = passar roupa. Todos usam \"do\": do the washing-up, do the washing, do the ironing."
      },
      {
        id: "a5-mc-17",
        type: "mc",
        topic: "home-routine-vocab",
        prompt: "My brother ___ the shopping every Saturday morning.",
        options: ["does", "makes", "has"],
        answer: "does",
        explanation: "As tarefas de casa usam \"do\": do the shopping (fazer as compras), do the ironing, do the washing-up."
      },
      {
        id: "a5-mc-18",
        type: "mc",
        topic: "home-routine-vocab",
        prompt: "Qual frase está ERRADA?",
        options: [
          "She does the washing-up after dinner.",
          "She makes the washing-up after dinner.",
          "She does the ironing on Sundays."
        ],
        answer: "She makes the washing-up after dinner.",
        explanation: "Tarefa doméstica usa \"do\", não \"make\": She does the washing-up."
      },
      {
        id: "a5-mc-19",
        type: "mc",
        topic: "home-routine-vocab",
        prompt: "Como se diz: \"Eu moro sozinho, então preparo meu próprio jantar.\"",
        options: [
          "I live on my own, so I make my own dinner.",
          "I live on my own, so I do my own dinner.",
          "I live in my own, so I make my own dinner."
        ],
        answer: "I live on my own, so I make my own dinner.",
        explanation: "\"Sozinho\" = on my own. Preparar uma refeição = make (breakfast, dinner…). \"Do\" fica para tarefas como the shopping ou the ironing."
      },
      {
        id: "a5-fill-10",
        type: "fill",
        topic: "home-routine-vocab",
        prompt: "Complete: My mum ___ the ironing every Sunday night.",
        accept: ["does"],
        explanation: "Tarefa doméstica + 3ª pessoa: do the ironing → does (my mum = she)."
      },
      {
        id: "a5-fill-11",
        type: "fill",
        topic: "home-routine-vocab",
        prompt: "Complete: I live on my own, so I ___ my own breakfast every morning.",
        accept: ["make", "prepare", "cook"],
        explanation: "O material usa \"make my own breakfast\" (preparar a própria refeição). \"Prepare\" e \"cook\" também funcionam."
      },
      {
        id: "a5-fill-12",
        type: "fill",
        topic: "home-routine-vocab",
        prompt: "Complete: I usually ___ my teeth right after breakfast.",
        accept: ["brush", "clean"],
        explanation: "Escovar os dentes = brush (ou clean) my teeth."
      },

      // ---------- Trabalho e noite ----------
      {
        id: "a5-mc-20",
        type: "mc",
        topic: "work-evening-vocab",
        prompt: "I leave home at 8:15 and ___ work by 9 a.m.",
        options: ["get to", "arrive to", "reach to"],
        answer: "get to",
        explanation: "\"Get to work\" = chegar ao trabalho. \"Arrive\" pede \"at/in\", e \"reach\" não leva preposição — por isso \"arrive to\" e \"reach to\" estão erradas."
      },
      {
        id: "a5-mc-21",
        type: "mc",
        topic: "work-evening-vocab",
        prompt: "I leave work at 5:30 and ___ home at about 6:15.",
        options: ["get", "go to", "arrive in"],
        answer: "get",
        explanation: "\"Get home\" = chegar em casa. \"Home\" não leva preposição (nunca \"to home\")."
      },
      {
        id: "a5-mc-22",
        type: "mc",
        topic: "work-evening-vocab",
        prompt: "Qual é o oposto de \"go out\" (sair para se divertir)?",
        options: ["stay in", "come round", "get up"],
        answer: "stay in",
        explanation: "Go out x stay in: sair de casa x ficar em casa."
      },
      {
        id: "a5-mc-23",
        type: "mc",
        topic: "work-evening-vocab",
        prompt: "\"My cousins are coming round on Sunday.\" O que isso quer dizer?",
        options: [
          "Meus primos vão me visitar em casa no domingo",
          "Meus primos vão dar uma volta de carro no domingo",
          "Meus primos vão passar o domingo em outra cidade"
        ],
        answer: "Meus primos vão me visitar em casa no domingo",
        explanation: "\"Come round\" = visitar alguém na casa da pessoa (bem comum no inglês britânico e informal)."
      },
      {
        id: "a5-mc-24",
        type: "mc",
        topic: "work-evening-vocab",
        prompt: "\"We're having friends for dinner on Friday.\" Isso significa...",
        options: [
          "Vamos convidar amigos para jantar em casa",
          "Vamos jantar em um restaurante",
          "Vamos jantar na casa dos nossos amigos"
        ],
        answer: "Vamos convidar amigos para jantar em casa",
        explanation: "\"Have friends for dinner\" = convidar amigos e cozinhar o jantar para eles, em casa."
      },
      {
        id: "a5-mc-25",
        type: "mc",
        topic: "work-evening-vocab",
        prompt: "On rainy Sundays my grandparents like to ___ cards after lunch.",
        options: ["play", "do", "make"],
        answer: "play",
        explanation: "Jogo de baralho = play cards (assim como play chess, play football)."
      },
      {
        id: "a5-mc-26",
        type: "mc",
        topic: "work-evening-vocab",
        prompt: "I have a one-hour lunch ___ from 12 to 1.",
        options: ["break", "stop", "pause"],
        answer: "break",
        explanation: "Intervalo de almoço = lunch break. Também se diz \"a couple of breaks\" para as pausas curtas ao longo do dia."
      },
      {
        id: "a5-mc-27",
        type: "mc",
        topic: "work-evening-vocab",
        prompt: "Como se diz: \"Você saiu com seus amigos no sábado?\"",
        options: [
          "Did you go out with your friends on Saturday?",
          "Did you went out with your friends on Saturday?",
          "Do you go out with your friends on Saturday?"
        ],
        answer: "Did you go out with your friends on Saturday?",
        explanation: "Pergunta no passado: Did + sujeito + verbo na forma base (go, não went). \"Do you go…?\" perguntaria sobre hábito, não sobre o sábado que passou."
      },
      {
        id: "a5-fill-13",
        type: "fill",
        topic: "work-evening-vocab",
        prompt: "Complete: My shift ends at six, so I ___ the office at six and get home around seven.",
        accept: ["leave"],
        explanation: "\"Leave the office / leave work\" = sair do escritório / do trabalho."
      },
      {
        id: "a5-fill-14",
        type: "fill",
        topic: "work-evening-vocab",
        prompt: "Complete: I'm too tired to go out tonight. I think I'll ___ in and watch a film.",
        accept: ["stay"],
        explanation: "\"Stay in\" = ficar em casa (o oposto de go out)."
      },
      {
        id: "a5-fill-15",
        type: "fill",
        topic: "work-evening-vocab",
        prompt: "Complete: I finish at 5:30 and usually get ___ at 6:15.",
        accept: ["home"],
        explanation: "\"Get home\" — sem preposição."
      },

      // ---------- Aparelhos com defeito ----------
      {
        id: "a5-mc-28",
        type: "mc",
        topic: "machine-problems",
        prompt: "The TV doesn't turn on. There's something ___ with it.",
        options: ["wrong", "bad", "broke"],
        answer: "wrong",
        explanation: "A expressão fixa é \"there's something wrong with…\" (tem algo errado com…)."
      },
      {
        id: "a5-mc-29",
        type: "mc",
        topic: "machine-problems",
        prompt: "O telefone público da estação não funciona, e tem um aviso colado nele. Qual aviso?",
        options: ["OUT OF ORDER", "OUT OF WORK", "NOT ORDER"],
        answer: "OUT OF ORDER",
        explanation: "\"Out of order\" = fora de serviço; é muito usado em telefone público, banheiro público e máquinas de estação."
      },
      {
        id: "a5-mc-30",
        type: "mc",
        topic: "machine-problems",
        prompt: "The washing machine works, but it spins very slowly and the clothes stay wet. Which sentence is the best?",
        options: [
          "The washing machine isn't working properly.",
          "The washing machine isn't working.",
          "The washing machine is out of order."
        ],
        answer: "The washing machine isn't working properly.",
        explanation: "\"Not working properly\" = funciona, mas mal. \"Not working\" seria não funcionar nada, e \"out of order\" costuma ser para equipamento público."
      },
      {
        id: "a5-mc-31",
        type: "mc",
        topic: "machine-problems",
        prompt: "\"The light is not working.\" Isso quer dizer que...",
        options: [
          "a luz não funciona / não acende",
          "a luz funciona, mas fraca",
          "a luz está funcionando muito bem"
        ],
        answer: "a luz não funciona / não acende",
        explanation: "\"Not working\" = não está funcionando. Se funcionasse mal, o inglês diria \"not working properly\"."
      },
      {
        id: "a5-mc-32",
        type: "mc",
        topic: "machine-problems",
        prompt: "Qual frase está ERRADA?",
        options: [
          "There's something wrong of the TV.",
          "There's something wrong with the TV.",
          "The phone isn't working."
        ],
        answer: "There's something wrong of the TV.",
        explanation: "A preposição é \"with\": there's something wrong with the TV."
      },
      {
        id: "a5-mc-33",
        type: "mc",
        topic: "machine-problems",
        prompt: "Como se diz: \"O elevador está fora de serviço.\"",
        options: [
          "The elevator is out of order.",
          "The elevator is out of work.",
          "The elevator is not order."
        ],
        answer: "The elevator is out of order.",
        explanation: "Fora de serviço = out of order (no inglês britânico, \"elevator\" é \"lift\": The lift is out of order)."
      },
      {
        id: "a5-fill-16",
        type: "fill",
        topic: "machine-problems",
        prompt: "Complete: I can't print — there's something wrong ___ the printer.",
        accept: ["with"],
        explanation: "\"There's something wrong with…\" — a preposição é with."
      },
      {
        id: "a5-fill-17",
        type: "fill",
        topic: "machine-problems",
        prompt: "Complete (funcionar): It's dark in the kitchen because the light isn't ___.",
        accept: ["working"],
        explanation: "\"Isn't working\" = não está funcionando."
      },
      {
        id: "a5-fill-18",
        type: "fill",
        topic: "machine-problems",
        prompt: "Complete: The shower works, but the water is barely warm. It isn't working ___.",
        accept: ["properly", "well"],
        explanation: "\"Not working properly\" (ou \"well\") = funciona, mas não como devia."
      },
      {
        id: "a5-fill-19",
        type: "fill",
        topic: "machine-problems",
        prompt: "Complete: The public toilet is closed — it's out of ___.",
        accept: ["order"],
        explanation: "\"Out of order\" = fora de serviço."
      },

      // ---------- Pequenos acidentes e imprevistos ----------
      {
        id: "a5-mc-34",
        type: "mc",
        topic: "accident-vocab",
        prompt: "I ___ my coffee on the keyboard, and now some keys don't work.",
        options: ["spilt", "tripped", "ruined"],
        answer: "spilt",
        explanation: "\"Spill\" = derramar (spilt ou spilled). \"Trip\" é tropeçar; \"ruin\" é estragar, mas não se usa com \"coffee\" assim."
      },
      {
        id: "a5-mc-35",
        type: "mc",
        topic: "accident-vocab",
        prompt: "He left the toast under the grill too long and ___ it.",
        options: ["burnt", "spilt", "lost"],
        answer: "burnt",
        explanation: "\"Burn\" = queimar / danificar com fogo (passado: burnt ou burned)."
      },
      {
        id: "a5-mc-36",
        type: "mc",
        topic: "accident-vocab",
        prompt: "We can't make pancakes: we've ___ out of eggs.",
        options: ["run", "gone", "fallen"],
        answer: "run",
        explanation: "\"Run out of\" = acabar (não ter mais). Run → ran → run; com \"we've\" usa-se o particípio: run."
      },
      {
        id: "a5-mc-37",
        type: "mc",
        topic: "accident-vocab",
        prompt: "She wasn't looking and ___ over a toy on the floor.",
        options: ["tripped", "dropped", "spilt"],
        answer: "tripped",
        explanation: "\"Trip over\" = tropeçar em alguma coisa. Passado: tripped (dobra o p)."
      },
      {
        id: "a5-mc-38",
        type: "mc",
        topic: "accident-vocab",
        prompt: "The train left at 8:00 and I arrived at 8:02, so I ___ it.",
        options: ["missed", "lost", "left"],
        answer: "missed",
        explanation: "\"Miss the train/bus\" = perder o transporte por chegar tarde. \"Lose\" é para perder um objeto ou dinheiro."
      },
      {
        id: "a5-mc-39",
        type: "mc",
        topic: "accident-vocab",
        prompt: "\"The red wine ruined my white shirt.\" O que quer dizer \"ruined\"?",
        options: ["estragou / destruiu", "lavou", "secou"],
        answer: "estragou / destruiu",
        explanation: "\"Ruin\" = estragar por completo. Por isso aparece junto de \"stain\" (mancha)."
      },
      {
        id: "a5-mc-40",
        type: "mc",
        topic: "accident-vocab",
        prompt: "O que é \"a stain\"?",
        options: [
          "Uma mancha (difícil de tirar)",
          "Um rasgo no tecido",
          "Um tipo de sabão"
        ],
        answer: "Uma mancha (difícil de tirar)",
        explanation: "\"A stain\" é uma mancha, como a de vinho ou de café numa camiseta."
      },
      {
        id: "a5-mc-41",
        type: "mc",
        topic: "accident-vocab",
        prompt: "\"He left home in a good mood.\" O que quer dizer \"in a good mood\"?",
        options: ["de bom humor / feliz", "com muita pressa", "com muita fome"],
        answer: "de bom humor / feliz",
        explanation: "\"Be in a good mood\" = estar de bom humor. O contrário: in a bad mood."
      },
      {
        id: "a5-fill-20",
        type: "fill",
        topic: "accident-vocab",
        prompt: "Complete (deixar cair): Careful! Don't ___ the eggs.",
        accept: ["drop"],
        explanation: "\"Drop\" = deixar cair. Depois de \"don't\" o verbo fica na forma base."
      },
      {
        id: "a5-fill-21",
        type: "fill",
        topic: "accident-vocab",
        prompt: "Complete (derramar): Careful! Don't ___ the juice.",
        accept: ["spill"],
        explanation: "\"Spill\" = derramar."
      },
      {
        id: "a5-fill-22",
        type: "fill",
        topic: "accident-vocab",
        prompt: "Complete (perder o ônibus): Hurry up or we'll ___ the last bus.",
        accept: ["miss"],
        explanation: "\"Miss the bus\" = perder o ônibus por chegar tarde."
      },
      {
        id: "a5-fill-23",
        type: "fill",
        topic: "accident-vocab",
        prompt: "Complete: There's no more bread. We've ___ out of bread.",
        accept: ["run"],
        explanation: "\"Run out of\" = acabar. Com \"we've\" (present perfect) usa-se o particípio: run."
      },

      // ---------- Verbos irregulares no passado ----------
      {
        id: "a5-mc-42",
        type: "mc",
        topic: "irregular-past",
        prompt: "Qual é o passado de \"break\"?",
        options: ["broke", "breaked", "broken"],
        answer: "broke",
        explanation: "Break → broke (passado) → broken (particípio). \"Breaked\" não existe, e \"broken\" só entra com have/has/had."
      },
      {
        id: "a5-mc-43",
        type: "mc",
        topic: "irregular-past",
        prompt: "I'm so sorry, I've ___ your glass.",
        options: ["broken", "broke", "breaked"],
        answer: "broken",
        explanation: "Depois de \"have/has\" (present perfect) usa-se o particípio: I've broken."
      },
      {
        id: "a5-mc-44",
        type: "mc",
        topic: "irregular-past",
        prompt: "Yesterday I ___ my keys and had to call my landlord.",
        options: ["lost", "losed", "loosed"],
        answer: "lost",
        explanation: "Lose → lost → lost. Cuidado com \"loose\" (frouxo), que é outra palavra."
      },
      {
        id: "a5-mc-45",
        type: "mc",
        topic: "irregular-past",
        prompt: "Qual forma NÃO existe em inglês?",
        options: ["burnted", "burnt", "burned"],
        answer: "burnted",
        explanation: "O passado de burn é \"burnt\" ou \"burned\" — as duas existem. \"Burnted\" mistura as duas."
      },
      {
        id: "a5-mc-46",
        type: "mc",
        topic: "irregular-past",
        prompt: "Qual destes verbos é IRREGULAR (não termina em -ed no passado)?",
        options: ["lose", "trip", "drop"],
        answer: "lose",
        explanation: "Lose → lost. Já trip → tripped e drop → dropped são regulares (só dobram a última letra)."
      },
      {
        id: "a5-mc-47",
        type: "mc",
        topic: "irregular-past",
        prompt: "Qual é o passado de \"trip\" (tropeçar)?",
        options: ["tripped", "triped", "tript"],
        answer: "tripped",
        explanation: "Consoante-vogal-consoante numa sílaba só: dobra a última letra antes do -ed (trip → tripped)."
      },
      {
        id: "a5-mc-48",
        type: "mc",
        topic: "irregular-past",
        prompt: "Passado e particípio de \"leave\":",
        options: ["left / left", "leaved / left", "left / leaved"],
        answer: "left / left",
        explanation: "Leave é irregular e tem a mesma forma no passado e no particípio: left / left."
      },
      {
        id: "a5-fill-24",
        type: "fill",
        topic: "irregular-past",
        prompt: "Complete com o passado de \"break\": Someone ___ the window last night.",
        accept: ["broke"],
        explanation: "Passado de break = broke."
      },
      {
        id: "a5-fill-25",
        type: "fill",
        topic: "irregular-past",
        prompt: "Complete com o particípio de \"lose\": Oh no, I've ___ my wallet again!",
        accept: ["lost"],
        explanation: "I've + particípio: lose → lost."
      },
      {
        id: "a5-fill-26",
        type: "fill",
        topic: "irregular-past",
        prompt: "Complete com o passado de \"leave\": I ___ my umbrella on the train yesterday.",
        accept: ["left"],
        explanation: "Passado de leave = left."
      },
      {
        id: "a5-fill-27",
        type: "fill",
        topic: "irregular-past",
        prompt: "Complete com o passado de \"drop\": She ___ her phone and cracked the screen.",
        accept: ["dropped"],
        explanation: "Drop é regular, mas dobra o p: dropped."
      },
      {
        id: "a5-fill-28",
        type: "fill",
        topic: "irregular-past",
        prompt: "Complete com o passado de \"burn\": I ___ the rice again. I'm a terrible cook!",
        accept: ["burnt", "burned"],
        explanation: "As duas formas valem: burnt (mais britânica) ou burned."
      },
      {
        id: "a5-fill-29",
        type: "fill",
        topic: "irregular-past",
        prompt: "Complete com o particípio de \"spill\": Oh no, you've ___ tea on my book!",
        accept: ["spilt", "spilled"],
        explanation: "As duas formas valem: spilt (mais britânica) ou spilled."
      },
      {
        id: "a5-fill-30",
        type: "fill",
        topic: "irregular-past",
        prompt: "Complete com o passado de \"trip\": She wasn't looking and ___ over the cat.",
        accept: ["tripped"],
        explanation: "Trip dobra o p: tripped."
      },

      // ---------- leave x forget ----------
      {
        id: "a5-mc-49",
        type: "mc",
        topic: "leave-vs-forget",
        prompt: "Sorry, I can't open the car. I ___ my keys at home.",
        options: ["left", "forgot", "lost"],
        answer: "left",
        explanation: "Quando dizemos ONDE a coisa ficou (at home), o material recomenda \"leave\": I left my keys at home. \"Lost\" seria perdê-las sem saber onde."
      },
      {
        id: "a5-mc-50",
        type: "mc",
        topic: "leave-vs-forget",
        prompt: "Qual frase está correta?",
        options: [
          "I left my wallet on the table.",
          "I forgot my wallet on the table.",
          "I forgot on the table my wallet."
        ],
        answer: "I left my wallet on the table.",
        explanation: "Com o lugar (on the table), usa-se \"leave\". E o objeto vem logo depois do verbo: left my wallet on the table."
      },
      {
        id: "a5-mc-51",
        type: "mc",
        topic: "leave-vs-forget",
        prompt: "I'm sorry — I ___ to bring your book.",
        options: ["forgot", "left", "lost"],
        answer: "forgot",
        explanation: "\"Forget to + verbo\" = esquecer de fazer algo. Aqui não há lugar, então é forget."
      },
      {
        id: "a5-mc-52",
        type: "mc",
        topic: "leave-vs-forget",
        prompt: "Quando você diz ONDE algo ficou (on the bus, at home), qual verbo o material recomenda?",
        options: ["leave (left)", "forget (forgot)", "miss (missed)"],
        answer: "leave (left)",
        explanation: "Com o lugar, é leave: I left my bag on the bus. Forget fica para \"I forgot my bag\" (sem lugar) ou \"I forgot to…\"."
      },
      {
        id: "a5-mc-53",
        type: "mc",
        topic: "leave-vs-forget",
        prompt: "Qual é a correção de \"I forgot my umbrella on the train.\"?",
        options: [
          "I left my umbrella on the train.",
          "I forgot my umbrella at the train.",
          "I have forgot my umbrella on the train."
        ],
        answer: "I left my umbrella on the train.",
        explanation: "Com o lugar (on the train), troca-se forgot por left."
      },
      {
        id: "a5-mc-54",
        type: "mc",
        topic: "leave-vs-forget",
        prompt: "Como se diz: \"Deixei minha mochila no ônibus.\"",
        options: [
          "I left my backpack on the bus.",
          "I forgot my backpack on the bus.",
          "I lost my backpack in the bus."
        ],
        answer: "I left my backpack on the bus.",
        explanation: "\"Deixei\" + lugar = left. Também se diz \"on the bus\" (não \"in the bus\")."
      },
      {
        id: "a5-fill-31",
        type: "fill",
        topic: "leave-vs-forget",
        prompt: "Complete com o passado de \"leave\": Oh no! I ___ my wallet at home this morning.",
        accept: ["left"],
        explanation: "Com o lugar (at home), usa-se leave → left."
      },
      {
        id: "a5-fill-32",
        type: "fill",
        topic: "leave-vs-forget",
        prompt: "Complete com o passado de \"forget\": Sorry, I ___ to call you back.",
        accept: ["forgot"],
        explanation: "Forget → forgot → forgotten. \"Forgot to + verbo\" = esqueceu de fazer."
      },

      // ---------- Formatos do livro: ligar colunas (match) ----------
      // Cada linha tem um menu com as opções da coluna da direita; só conta como certa se TODAS as
      // linhas estiverem certas.
      {
        id: "a5-match-1",
        type: "match",
        topic: "home-routine-vocab",
        prompt: "Ligue cada verbo à palavra que combina com ele (rotina em casa):",
        pairs: [
          { left: "fall", right: "asleep" },
          { left: "do", right: "the washing-up" },
          { left: "have", right: "a lie-in" },
          { left: "play", right: "cards" },
          { left: "feed", right: "the cat" },
          { left: "brush", right: "my teeth" }
        ],
        explanation: "fall asleep, do the washing-up, have a lie-in, play cards, feed the cat, brush my teeth. Cada verbo tem seus parceiros: em inglês vale decorar a expressão inteira, não só a palavra solta."
      },
      {
        id: "a5-match-2",
        type: "match",
        topic: "accident-vocab",
        prompt: "Ligue o começo de cada frase ao final que faz sentido:",
        pairs: [
          { left: "I dropped my phone", right: "and the screen broke." },
          { left: "The batteries have run out,", right: "so the remote doesn't work." },
          { left: "I'm afraid I left my wallet", right: "at the office." },
          { left: "He spilt his coffee", right: "and it made a stain on his shirt." },
          { left: "She missed the last train,", right: "so she had to take a taxi." },
          { left: "I burnt the toast", right: "because I was talking on the phone." }
        ],
        explanation: "Cada final é a consequência natural do começo: derrubar o celular → a tela quebra; pilhas que acabaram → o controle não funciona; perder o último trem → táxi. Repare em \"left my wallet at the office\": com o lugar, usa-se leave."
      },
      {
        id: "a5-match-3",
        type: "match",
        topic: "work-evening-vocab",
        prompt: "Ligue cada expressão ao seu significado:",
        pairs: [
          { left: "go out", right: "sair de casa para se divertir" },
          { left: "stay in", right: "ficar em casa" },
          { left: "come round", right: "visitar alguém em casa" },
          { left: "get to work", right: "chegar ao trabalho" },
          { left: "have a lunch break", right: "parar de trabalhar para almoçar" },
          { left: "have friends for dinner", right: "convidar amigos e cozinhar para eles" }
        ],
        explanation: "Go out x stay in são opostos; come round é visitar alguém na casa da pessoa; have friends for dinner é o anfitrião cozinhando para os amigos."
      },
      {
        id: "a5-match-4",
        type: "match",
        topic: "accident-vocab",
        prompt: "Ligue cada expressão ao seu significado:",
        pairs: [
          { left: "out of order", right: "fora de serviço" },
          { left: "a stain", right: "uma mancha" },
          { left: "trip over", right: "tropeçar em algo" },
          { left: "ruin", right: "estragar por completo" },
          { left: "run out of", right: "ficar sem / acabar" },
          { left: "in a good mood", right: "de bom humor" }
        ],
        explanation: "Vocabulário da unidade 52: out of order (máquina fora de serviço), a stain (mancha), trip over (tropeçar em), ruin (estragar), run out of (acabar) e in a good mood (de bom humor)."
      },
      {
        id: "a5-match-5",
        type: "match",
        topic: "sleep-vocabulary",
        prompt: "Ligue cada expressão sobre sono ao seu significado:",
        pairs: [
          { left: "oversleep", right: "dormir além da hora" },
          { left: "fall asleep", right: "pegar no sono" },
          { left: "get up", right: "levantar da cama" },
          { left: "have a nap", right: "tirar uma soneca" },
          { left: "have a lie-in", right: "ficar mais tempo na cama de manhã" },
          { left: "have an early night", right: "ir dormir mais cedo" }
        ],
        explanation: "Vocabulário da unidade 48: oversleep (dormir demais), fall asleep (pegar no sono), get up (sair da cama), have a nap (soneca), have a lie-in (ficar na cama de manhã) e have an early night (dormir cedo)."
      },

      // ---------- Formatos do livro: várias lacunas numa questão (multi) ----------
      // Tabelas de passado e particípio (como o exercício 52.1 do livro).
      {
        id: "a5-multi-1",
        type: "multi",
        topic: "irregular-past",
        prompt: "Complete a tabela: passado (past tense) e particípio (past participle) de cada verbo.",
        blanks: [
          { label: "break — past tense", accept: ["broke"] },
          { label: "break — past participle", accept: ["broken"] },
          { label: "lose — past tense", accept: ["lost"] },
          { label: "lose — past participle", accept: ["lost"] },
          { label: "drop — past tense", accept: ["dropped"] },
          { label: "drop — past participle", accept: ["dropped"] }
        ],
        explanation: "break → broke → broken (as duas formas são diferentes!); lose → lost → lost; drop → dropped → dropped (regular, mas dobra o p)."
      },
      {
        id: "a5-multi-2",
        type: "multi",
        topic: "irregular-past",
        prompt: "Complete a tabela: passado (past tense) e particípio (past participle) de cada verbo.",
        blanks: [
          { label: "leave — past tense", accept: ["left"] },
          { label: "leave — past participle", accept: ["left"] },
          { label: "trip — past tense", accept: ["tripped"] },
          { label: "trip — past participle", accept: ["tripped"] },
          { label: "oversleep — past tense", accept: ["overslept"] },
          { label: "oversleep — past participle", accept: ["overslept"] }
        ],
        explanation: "leave → left → left; trip → tripped → tripped (dobra o p); oversleep → overslept → overslept (segue o padrão de sleep → slept)."
      },
      {
        id: "a5-multi-3",
        type: "multi",
        topic: "irregular-past",
        prompt: "Complete a tabela: passado (past tense) e particípio (past participle). Estes verbos aceitam duas formas — basta escrever uma.",
        blanks: [
          { label: "burn — past tense", accept: ["burnt", "burned"] },
          { label: "burn — past participle", accept: ["burnt", "burned"] },
          { label: "spill — past tense", accept: ["spilt", "spilled"] },
          { label: "spill — past participle", accept: ["spilt", "spilled"] }
        ],
        explanation: "burn → burnt ou burned; spill → spilt ou spilled. As formas em -t são mais britânicas; as em -ed são muito comuns no inglês americano. As duas estão certas."
      },
      {
        id: "a5-multi-4",
        type: "multi",
        topic: "irregular-past",
        prompt: "Complete a tabela: passado (past tense) e particípio (past participle) de cada verbo.",
        blanks: [
          { label: "run — past tense", accept: ["ran"] },
          { label: "run — past participle", accept: ["run"] },
          { label: "forget — past tense", accept: ["forgot"] },
          { label: "forget — past participle", accept: ["forgotten"] },
          { label: "fall — past tense", accept: ["fell"] },
          { label: "fall — past participle", accept: ["fallen"] }
        ],
        explanation: "run → ran → run (o particípio é igual ao infinitivo); forget → forgot → forgotten; fall → fell → fallen."
      },

      // Diálogos com lacunas numeradas e banco de palavras (como o exercício 48.3 do livro).
      {
        id: "a5-multi-5",
        type: "multi",
        topic: "work-evening-vocab",
        prompt:
          "Complete o diálogo com as palavras do quadro (uma para cada lacuna):\n" +
          "nap · bother · stay · late · round · out of order\n\n" +
          "Lia: You look sleepy, Theo! Did you have a (1) ___ night?\n" +
          "Theo: Yes, I did. I think I'll have a (2) ___ after lunch.\n" +
          "Lia: Good idea. Tonight I'm going to (3) ___ in and watch a film.\n" +
          "Theo: Me too. I don't want to (4) ___ to cook, so I'll just have a snack. Come (5) ___ if you like!\n" +
          "Lia: Thanks, but I can't. The lift in my building is (6) ___ — and I live on the tenth floor!",
        blanks: [
          { label: "(1)", accept: ["late"] },
          { label: "(2)", accept: ["nap"] },
          { label: "(3)", accept: ["stay"] },
          { label: "(4)", accept: ["bother"] },
          { label: "(5)", accept: ["round"] },
          { label: "(6)", accept: ["out of order"] }
        ],
        explanation: "a late night (noite dormida tarde); have a nap (soneca); stay in (ficar em casa); don't bother to cook (não se dar ao trabalho de cozinhar); come round (aparecer na casa de alguém); the lift is out of order (o elevador está fora de serviço)."
      },
      {
        id: "a5-multi-6",
        type: "multi",
        topic: "accident-vocab",
        prompt:
          "Complete o diálogo com as palavras do quadro (uma para cada lacuna):\n" +
          "missed · working · spilt · run out · wrong\n\n" +
          "Bea: Why are you so late?\n" +
          "Kai: I (1) ___ the bus, and then the ticket machine at the station wasn't (2) ___.\n" +
          "Bea: Oh no! And why is your shirt wet?\n" +
          "Kai: I (3) ___ my coffee on the way here. And my phone battery has (4) ___ too!\n" +
          "Bea: Wow, what a morning. Is there something (5) ___ with your phone?",
        blanks: [
          { label: "(1)", accept: ["missed"] },
          { label: "(2)", accept: ["working"] },
          { label: "(3)", accept: ["spilt", "spilled"] },
          { label: "(4)", accept: ["run out"] },
          { label: "(5)", accept: ["wrong"] }
        ],
        explanation: "missed the bus (perdeu o ônibus); wasn't working (não estava funcionando); spilt my coffee (derramou o café — spilled também vale); has run out (a bateria acabou — com \"has\" usa-se o particípio: run); something wrong with… (algo errado com…)."
      }
    ],

    passages: [
      {
        id: "a5-passage-1",
        title: "A segunda-feira difícil da Marina (rotina + imprevistos)",
        text:
          "Marina had a terrible Monday. On Sunday night she had a very late night, so on Monday " +
          "morning she overslept and woke up at 8:20 instead of 6:30. She had a quick shower, but " +
          "the hot water wasn't working properly — it was only warm. In the kitchen she wanted to " +
          "make coffee, but there was no milk: they had run out, so she drank it black. She ran to " +
          "the bus stop, but she missed the bus by about ten seconds and had to wait twenty minutes " +
          "for the next one. When she finally got to work, her boss was in a meeting, so luckily " +
          "nobody noticed she was late. At lunchtime she opened her bag and realised she had left " +
          "her lunch box on the kitchen table at home. In the evening she got home, had a long bath " +
          "and an early night. \"Tomorrow will be better,\" she thought.",
        questions: [
          {
            id: "a5-r-1",
            type: "mc",
            topic: "vocab-in-context",
            prompt: "What time did Marina wake up on Monday?",
            options: ["8:20", "6:30", "7:00"],
            answer: "8:20",
            explanation: "O texto diz que ela \"woke up at 8:20 instead of 6:30\" — ou seja, dormiu além da hora (overslept)."
          },
          {
            id: "a5-r-2",
            type: "mc",
            topic: "vocab-in-context",
            prompt: "Why did Marina oversleep?",
            options: [
              "Because she had a very late night on Sunday",
              "Because she was ill",
              "Because she had a lie-in on purpose"
            ],
            answer: "Because she had a very late night on Sunday",
            explanation: "O texto diz \"On Sunday night she had a very late night, so on Monday morning she overslept\". Não foi um lie-in de propósito."
          },
          {
            id: "a5-r-3",
            type: "mc",
            topic: "machine-problems",
            prompt: "What was wrong with Marina's shower?",
            options: [
              "The hot water wasn't working properly",
              "The shower was out of order",
              "There was no water at all"
            ],
            answer: "The hot water wasn't working properly",
            explanation: "\"Not working properly\" = funcionava, mas mal (a água só esquentava um pouco). \"Out of order\" seria fora de serviço, e o chuveiro estava funcionando."
          },
          {
            id: "a5-r-4",
            type: "mc",
            topic: "accident-vocab",
            prompt: "Why did Marina drink her coffee black?",
            options: [
              "They had run out of milk",
              "She likes it black",
              "She burnt the milk"
            ],
            answer: "They had run out of milk",
            explanation: "O texto diz \"there was no milk: they had run out\" — o leite tinha acabado."
          },
          {
            id: "a5-r-5",
            type: "mc",
            topic: "accident-vocab",
            prompt: "\"She missed the bus by about ten seconds.\" What does \"missed the bus\" mean?",
            options: [
              "Ela chegou tarde e o ônibus já tinha saído",
              "Ela sentiu saudade do ônibus",
              "Ela deixou algo dentro do ônibus"
            ],
            answer: "Ela chegou tarde e o ônibus já tinha saído",
            explanation: "\"Miss the bus\" = perder o ônibus por chegar tarde. Por isso ela teve que esperar 20 minutos pelo próximo."
          },
          {
            id: "a5-r-6",
            type: "mc",
            topic: "leave-vs-forget",
            prompt: "Where did Marina leave her lunch box?",
            options: [
              "On the kitchen table at home",
              "On the bus",
              "At her office"
            ],
            answer: "On the kitchen table at home",
            explanation: "O texto diz \"she had left her lunch box on the kitchen table at home\". Repare no \"left\": como o lugar é dito, usa-se leave e não forget."
          }
        ]
      },
      {
        id: "a5-passage-2",
        title: "Conversa entre Caio e Nina: rotina de semana e de fim de semana (diálogo)",
        text:
          "Nina: You look tired, Caio. Did you have a late night?\n" +
          "Caio: Yes! I couldn't get to sleep, so I only slept about five hours. Normally I go to " +
          "bed at 11 and get up at 6:30.\n" +
          "Nina: I need more sleep than that! During the week I usually have an early night, and on " +
          "Saturdays I always have a lie-in.\n" +
          "Caio: Lucky you! What do you do in the evenings?\n" +
          "Nina: Most evenings I stay in and have a rest. This Saturday, though, I'm going out with " +
          "some friends, and on Sunday my cousins are coming round for lunch, so I have to do the " +
          "shopping on Friday.\n" +
          "Caio: Do you cook for them?\n" +
          "Nina: Of course! I live on my own, so I really enjoy cooking for other people. But during " +
          "the week I don't bother to cook — I just have a snack.\n" +
          "Caio: Same here. Actually, I think I'll have a nap after work today.",
        questions: [
          {
            id: "a5-r-7",
            type: "mc",
            topic: "sleep-vocabulary",
            prompt: "What time does Caio normally get up?",
            options: ["6:30", "11:00", "5:00"],
            answer: "6:30",
            explanation: "Caio diz \"Normally I go to bed at 11 and get up at 6:30\". Às 11 ele vai para a cama; às 6:30 ele levanta."
          },
          {
            id: "a5-r-8",
            type: "mc",
            topic: "sleep-vocabulary",
            prompt: "Why is Caio tired today?",
            options: [
              "He couldn't get to sleep last night",
              "He overslept",
              "He had a lie-in"
            ],
            answer: "He couldn't get to sleep last night",
            explanation: "\"I couldn't get to sleep, so I only slept about five hours\" — ele não conseguiu pegar no sono."
          },
          {
            id: "a5-r-9",
            type: "mc",
            topic: "sleep-vocabulary",
            prompt: "What does Nina always do on Saturdays?",
            options: [
              "She has a lie-in",
              "She does the shopping",
              "She goes to work early"
            ],
            answer: "She has a lie-in",
            explanation: "\"On Saturdays I always have a lie-in\" = aos sábados ela fica mais tempo na cama de manhã."
          },
          {
            id: "a5-r-10",
            type: "mc",
            topic: "work-evening-vocab",
            prompt: "\"My cousins are coming round for lunch.\" What does \"coming round\" mean?",
            options: [
              "Visiting her at home",
              "Going to a restaurant",
              "Driving around the city"
            ],
            answer: "Visiting her at home",
            explanation: "\"Come round\" = visitar alguém na casa da pessoa. Por isso ela precisa fazer as compras antes."
          },
          {
            id: "a5-r-11",
            type: "mc",
            topic: "home-routine-vocab",
            prompt: "Nina says \"I live on my own.\" What does it mean?",
            options: [
              "Moro sozinha",
              "Moro na minha cidade natal",
              "Moro perto da minha família"
            ],
            answer: "Moro sozinha",
            explanation: "\"On my own\" = by myself = sozinho, sem outras pessoas."
          },
          {
            id: "a5-r-12",
            type: "mc",
            topic: "home-routine-vocab",
            prompt: "What does Nina do during the week instead of cooking?",
            options: [
              "She has a snack",
              "She has friends for dinner",
              "She goes out for dinner"
            ],
            answer: "She has a snack",
            explanation: "\"During the week I don't bother to cook — I just have a snack.\" (bother = se dar ao trabalho)."
          }
        ]
      }
    ]
  });
})();
