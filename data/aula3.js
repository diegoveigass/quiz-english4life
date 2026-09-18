// Aula 3 — Present Simple x Present Continuous (misturados) + leitura
// Baseado nos exercícios de: aula_3_31_08_26 (Perfect English Grammar, Test-English,
// leitura "daily routines", Murphy unidades 22-29). Frases e texto originais.
(function () {
  window.QUIZ_AULAS = window.QUIZ_AULAS || [];

  window.QUIZ_AULAS.push({
    id: "aula3",
    label: "Aula 3",
    dateLabel: "31/08/2026",
    folder: "aula_3_31_08_26",

    theory: {
      title: "Simple Present x Present Continuous: qual usar?",
      explanation:
        "As duas formas falam do \"presente\", mas com sentidos diferentes. O presente simples " +
        "fala de hábitos, rotinas e verdades gerais (algo que se repete ou é sempre assim). O " +
        "presente contínuo fala de algo acontecendo agora mesmo, ou por um período temporário " +
        "ao redor de agora — algo que não é a regra.",
      examples: [
        { en: "I usually take the bus, but today I'm walking.", pt: "Eu normalmente pego o ônibus, mas hoje estou indo a pé." },
        { en: "She works at a hospital.", pt: "Ela trabalha em um hospital (rotina/profissão)." },
        { en: "She's working extra hours this month.", pt: "Ela está trabalhando horas extras esse mês (temporário)." },
        { en: "The sun rises in the east.", pt: "O sol nasce no leste (verdade geral → sempre simples)." },
        { en: "Rents are getting more and more expensive.", pt: "Os aluguéis estão ficando cada vez mais caros (situação em mudança → contínuo)." },
        { en: "I'm seeing the dentist tomorrow, but the clinic opens at 8.", pt: "Tenho consulta amanhã (combinado → contínuo), mas a clínica abre às 8 (horário fixo → simples)." }
      ],
      tips: [
        "Palavras que pedem simples: usually, always, every day/week, on Sundays, often, never.",
        "Palavras que pedem contínuo: now, right now, at the moment, these days, this week/month (quando é algo fora da rotina), Look!/Listen!.",
        "Verbos de estado (like, want, know, need, seem, understand, believe, have = possuir) não vão para o contínuo, mesmo falando de \"agora\": I don't understand, not \"I'm not understanding\".",
        "Alguns verbos mudam de sentido: have a car (possuir → simples) x I'm having lunch (comer → contínuo); he looks tired (aparência → simples) x he's looking at the map (olhando → contínuo).",
        "Situação que está mudando/evoluindo pede contínuo, mesmo sem ser \"agora\": prices are rising, it's getting better, more and more people are working from home.",
        "Futuro: plano já combinado vai no contínuo (I'm flying to Recife on Friday); horário fixo de tabela vai no simples (the train leaves at 11:15).",
        "Advérbio de frequência vem antes do verbo principal (I never drink coffee), mas depois do verbo to be (she is always late).",
        "3ª pessoa do simples (he/she/it) sempre leva -s/-es: go → goes, watch → watches, study → studies, have → has."
      ]
    },

    questions: [
      {
        id: "a3-mc-1",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "Every morning, Rafael ___ (drink) coffee before work.",
        options: ["drinks", "is drinking", "drink"],
        answer: "drinks",
        explanation: "\"Every morning\" = hábito → presente simples. \"Rafael\" = he → drinks (3ª pessoa + s)."
      },
      {
        id: "a3-mc-2",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "Shh! The teacher ___ (explain) the lesson right now.",
        options: ["is explaining", "explains", "explain"],
        answer: "is explaining",
        explanation: "\"Right now\" = acontecendo neste momento → contínuo."
      },
      {
        id: "a3-mc-3",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "My grandmother ___ (not/like) fast food; she prefers home cooking.",
        options: ["doesn't like", "isn't liking", "don't like"],
        answer: "doesn't like",
        explanation: "\"Like\" é verbo de estado (não vai para o contínuo) e descreve uma preferência geral → simples negativo com \"doesn't\" (she)."
      },
      {
        id: "a3-mc-4",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "Look! The kids ___ (build) a sandcastle on the beach.",
        options: ["are building", "build", "builds"],
        answer: "are building",
        explanation: "\"Look!\" aponta para uma ação vista agora → contínuo."
      },
      {
        id: "a3-mc-5",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "Beatriz usually ___ (take) the bus, but today she ___ (walk) to work.",
        options: ["takes / is walking", "is taking / walks", "take / walk"],
        answer: "takes / is walking",
        explanation: "\"Usually\" → hábito (simples: takes); \"today\" descreve algo diferente do normal, acontecendo agora → contínuo (is walking)."
      },
      {
        id: "a3-mc-6",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "How often ___ you (go) to the gym?",
        options: ["do", "does", "are"],
        answer: "do",
        explanation: "Pergunta sobre frequência/hábito com \"how often\" → presente simples; sujeito \"you\" → auxiliar \"do\"."
      },
      {
        id: "a3-mc-7",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "Where ___ Felipe (stay) this week? — He's normally at his own place.",
        options: ["is ... staying", "does ... stay", "do ... stay"],
        answer: "is ... staying",
        explanation: "\"This week\" sugere algo temporário/atual, diferente do hábito → contínuo."
      },
      {
        id: "a3-mc-8",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "Water ___ (boil) at 100°C.",
        options: ["boils", "is boiling", "boil"],
        answer: "boils",
        explanation: "Fato/verdade geral (científica) → sempre presente simples."
      },
      {
        id: "a3-mc-9",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "I can't talk now, I ___ (drive).",
        options: ["am driving", "drive", "drives"],
        answer: "am driving",
        explanation: "\"Now\" → ação em andamento → contínuo."
      },
      {
        id: "a3-mc-10",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "She ___ (have) three brothers.",
        options: ["has", "is having", "have"],
        answer: "has",
        explanation: "\"Have\" no sentido de posse é estado → presente simples (she → has). \"Is having\" só valeria para \"tomar café da manhã/fazer uma festa\", por exemplo."
      },
      {
        id: "a3-fill-1",
        type: "fill",
        topic: "third-person-s",
        prompt: "Complete a 3ª pessoa do verbo \"go\": He ___ .",
        accept: ["goes"],
        explanation: "Verbos terminados em -o, -ch, -sh, -ss, -x ganham \"-es\": go → goes."
      },
      {
        id: "a3-fill-2",
        type: "fill",
        topic: "third-person-s",
        prompt: "Complete a 3ª pessoa do verbo \"study\": She ___ every night.",
        accept: ["studies"],
        explanation: "Consoante + y → troca \"y\" por \"ies\": study → studies."
      },
      {
        id: "a3-fill-3",
        type: "fill",
        topic: "third-person-s",
        prompt: "Complete a 3ª pessoa do verbo \"watch\": He ___ TV after dinner.",
        accept: ["watches"],
        explanation: "Terminado em -ch → acrescenta \"-es\": watch → watches."
      },
      {
        id: "a3-fill-4",
        type: "fill",
        topic: "third-person-s",
        prompt: "Complete a 3ª pessoa do verbo \"have\": It ___ two doors.",
        accept: ["has"],
        explanation: "\"Have\" é irregular na 3ª pessoa: have → has."
      },
      {
        id: "a3-fill-5",
        type: "fill",
        topic: "simple-vs-continuous",
        prompt: "Complete: Right now, I ___ (write) this message on my phone.",
        accept: ["am writing", "'m writing", "m writing"],
        explanation: "\"Right now\" → contínuo: am/is/are + verbo-ing."
      },
      {
        id: "a3-fill-6",
        type: "fill",
        topic: "simple-vs-continuous",
        prompt: "Complete: My dad ___ (not/work) on Sundays.",
        accept: ["doesn't work"],
        explanation: "Hábito/rotina (Sundays = regularidade) → presente simples negativo com \"doesn't\" (he)."
      },
      {
        id: "a3-mc-11",
        type: "mc",
        topic: "stative-verbs",
        prompt: "I ___ (not/understand) this exercise. Can you explain it again?",
        options: ["don't understand", "am not understanding", "doesn't understand"],
        answer: "don't understand",
        explanation: "\"Understand\" é verbo de estado (não é uma ação que se faz) — não vai para o contínuo, mesmo falando de agora. Sujeito \"I\" → don't."
      },
      {
        id: "a3-mc-12",
        type: "mc",
        topic: "stative-verbs",
        prompt: "Camila ___ (seem) tired today.",
        options: ["seems", "is seeming", "seem"],
        answer: "seems",
        explanation: "\"Seem\" descreve um estado/impressão → sempre presente simples, mesmo com \"today\". She → seems."
      },
      {
        id: "a3-mc-13",
        type: "mc",
        topic: "stative-verbs",
        prompt: "We ___ (need) two more days to finish the report.",
        options: ["need", "are needing", "needs"],
        answer: "need",
        explanation: "\"Need\" é verbo de estado → presente simples. \"Are needing\" não existe no inglês natural."
      },
      {
        id: "a3-mc-14",
        type: "mc",
        topic: "stative-verbs",
        prompt: "___ you ___ (know) his email address?",
        options: ["Do / know", "Are / knowing", "Does / know"],
        answer: "Do / know",
        explanation: "\"Know\" é estado → pergunta no simples com do/does. Sujeito \"you\" → Do."
      },
      {
        id: "a3-mc-15",
        type: "mc",
        topic: "stative-verbs",
        prompt: "Sorry, I can't talk — I ___ (have) lunch with my sister.",
        options: ["'m having", "have", "has"],
        answer: "'m having",
        explanation: "Aqui \"have\" significa almoçar, que é ação → contínuo. Só quando \"have\" significa possuir (I have a car) é que fica no simples."
      },
      {
        id: "a3-mc-16",
        type: "mc",
        topic: "stative-verbs",
        prompt: "Bruno ___ (look) tired this morning. — Yes, he went to bed very late.",
        options: ["looks", "is looking", "look"],
        answer: "looks",
        explanation: "\"Look\" no sentido de aparência é estado → simples (he looks tired). \"He is looking\" seria ele olhando para alguma coisa, que é ação."
      },
      {
        id: "a3-mc-17",
        type: "mc",
        topic: "changing-situations",
        prompt: "Online classes ___ (become) more and more common in Brazil.",
        options: ["are becoming", "become", "becomes"],
        answer: "are becoming",
        explanation: "Situação que está mudando/evoluindo (dica: \"more and more\", \"less and less\") → presente contínuo, mesmo não sendo \"agora neste segundo\"."
      },
      {
        id: "a3-mc-18",
        type: "mc",
        topic: "changing-situations",
        prompt: "The price of coffee ___ (rise) again this year.",
        options: ["is rising", "rises", "rise"],
        answer: "is rising",
        explanation: "Tendência em curso (está subindo ao longo deste ano) → contínuo. \"Coffee rises\" soaria como um fato permanente, o que não é o caso."
      },
      {
        id: "a3-mc-19",
        type: "mc",
        topic: "changing-situations",
        prompt: "Every year, farmers ___ (produce) more soy than before, and the forest ___ (disappear) fast.",
        options: ["produce / is disappearing", "are producing / disappears", "produce / disappears"],
        answer: "produce / is disappearing",
        explanation: "\"Every year\" = algo que se repete → simples (produce). A floresta sumindo é uma situação em mudança → contínuo (is disappearing)."
      },
      {
        id: "a3-mc-20",
        type: "mc",
        topic: "future-arrangements",
        prompt: "I can't meet you on Friday — I ___ (fly) to Recife in the morning.",
        options: ["'m flying", "fly", "flies"],
        answer: "'m flying",
        explanation: "Plano já combinado/marcado para o futuro (passagem comprada) → presente contínuo."
      },
      {
        id: "a3-mc-21",
        type: "mc",
        topic: "future-arrangements",
        prompt: "Hurry up! The last train ___ (leave) at 11:15 every night.",
        options: ["leaves", "is leaving", "leave"],
        answer: "leaves",
        explanation: "Horário fixo de tabela (trem, avião, cinema, aula) → presente simples, mesmo falando do futuro."
      },
      {
        id: "a3-mc-22",
        type: "mc",
        topic: "future-arrangements",
        prompt: "What time ___ you ___ (see) the dentist tomorrow?",
        options: ["are / seeing", "do / see", "does / see"],
        answer: "are / seeing",
        explanation: "Compromisso marcado para amanhã → contínuo (Are you seeing...?). Aqui \"see\" = ter consulta com, que é ação; \"I see what you mean\" seria estado."
      },
      {
        id: "a3-mc-23",
        type: "mc",
        topic: "frequency-adverbs",
        prompt: "Qual frase está correta?",
        options: ["She is always late for class.", "She always is late for class.", "Always she is late for class."],
        answer: "She is always late for class.",
        explanation: "Com o verbo \"to be\", o advérbio de frequência vem DEPOIS: is always. Com os outros verbos, vem ANTES: she always arrives late."
      },
      {
        id: "a3-mc-24",
        type: "mc",
        topic: "frequency-adverbs",
        prompt: "Escolha a frase certa:",
        options: ["I never drink coffee at night.", "I drink never coffee at night.", "I drink coffee never at night."],
        answer: "I never drink coffee at night.",
        explanation: "Advérbio de frequência (never, always, usually, often) vem antes do verbo principal: I never drink."
      },
      {
        id: "a3-mc-25",
        type: "mc",
        topic: "frequency-adverbs",
        prompt: "\"She rarely eats fast food.\" O que essa frase quer dizer?",
        options: ["Ela come fast food poucas vezes", "Ela nunca come fast food", "Ela come fast food toda semana"],
        answer: "Ela come fast food poucas vezes",
        explanation: "\"Rarely\" = raramente: acontece, mas com pouca frequência. Não é o mesmo que \"never\" (nunca)."
      },
      {
        id: "a3-mc-26",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "Carla ___ (teach) math, but this semester she ___ (also/teach) physics.",
        options: ["teaches / is also teaching", "is teaching / also teaches", "teach / also teaches"],
        answer: "teaches / is also teaching",
        explanation: "A profissão dela é permanente → simples (teaches). \"This semester\" é algo temporário, fora do normal → contínuo (is also teaching)."
      },
      {
        id: "a3-mc-27",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "Diego ___ (not/watch) TV right now; he ___ (study) for a test.",
        options: ["isn't watching / is studying", "doesn't watch / studies", "isn't watching / studies"],
        answer: "isn't watching / is studying",
        explanation: "\"Right now\" vale para as duas partes da frase: as duas vão para o contínuo."
      },
      {
        id: "a3-mc-28",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "How often ___ your brother ___ (go) to the beach in the summer?",
        options: ["does / go", "is / going", "do / go"],
        answer: "does / go",
        explanation: "\"How often\" pergunta sobre frequência/hábito → simples. Sujeito \"your brother\" (he) → does + verbo na forma base (go, sem -es)."
      },
      {
        id: "a3-fill-7",
        type: "fill",
        topic: "changing-situations",
        prompt: "Complete: My English ___ (get) better and better.",
        accept: ["is getting", "'s getting", "s getting"],
        explanation: "Mudança gradual (\"better and better\") → presente contínuo: is getting."
      },
      {
        id: "a3-fill-8",
        type: "fill",
        topic: "simple-vs-continuous",
        prompt: "Complete a pergunta: ___ (you/work) from home these days?",
        accept: ["are you working"],
        explanation: "\"These days\" = situação temporária de agora → contínuo. Na pergunta, o verbo to be vem antes do sujeito: Are you working...?"
      },
      {
        id: "a3-fill-9",
        type: "fill",
        topic: "continuous-spelling",
        prompt: "Complete com o -ing de \"run\": Look! The dogs are ___ in the park.",
        accept: ["running"],
        explanation: "Verbo curto terminado em consoante-vogal-consoante dobra a última letra: run → running."
      },
      {
        id: "a3-fill-10",
        type: "fill",
        topic: "continuous-spelling",
        prompt: "Complete com o -ing de \"make\": She is ___ a cake at the moment.",
        accept: ["making"],
        explanation: "Verbo terminado em -e perde o \"e\" antes do -ing: make → making (nunca \"makeing\")."
      },
      {
        id: "a3-fill-11",
        type: "fill",
        topic: "third-person-s",
        prompt: "Complete a 3ª pessoa do verbo \"do\": My brother ___ the dishes every night.",
        accept: ["does"],
        explanation: "\"Do\" é irregular na 3ª pessoa: do → does."
      },
      {
        id: "a3-fill-12",
        type: "fill",
        topic: "third-person-s",
        prompt: "Complete a 3ª pessoa do verbo \"fly\": Time ___ when you're having fun.",
        accept: ["flies"],
        explanation: "Consoante + y → troca por \"ies\": fly → flies. (Se fosse vogal + y, seria só -s: play → plays.)"
      },
      {
        id: "a3-fill-13",
        type: "fill",
        topic: "stative-verbs",
        prompt: "Complete: This umbrella ___ (belong) to Marina.",
        accept: ["belongs"],
        explanation: "\"Belong\" é verbo de estado (posse) → simples. \"This umbrella\" = it → belongs."
      },
      {
        id: "a3-fill-14",
        type: "fill",
        topic: "frequency-adverbs",
        prompt: "Reescreva colocando \"usually\" no lugar certo: \"We have dinner at 8.\"",
        accept: ["we usually have dinner at 8", "we usually have dinner at 8.", "usually we have dinner at 8", "usually we have dinner at 8."],
        explanation: "O advérbio de frequência vai antes do verbo principal: We usually have dinner at 8."
      },
      {
        id: "a3-mc-29",
        type: "mc",
        topic: "error-correction",
        prompt: "Qual frase está ERRADA?",
        options: ["He don't like coffee.", "He doesn't like coffee.", "He likes coffee."],
        answer: "He don't like coffee.",
        explanation: "Com he/she/it o auxiliar é \"doesn't\", nunca \"don't\": He doesn't like coffee."
      },
      {
        id: "a3-mc-30",
        type: "mc",
        topic: "error-correction",
        prompt: "Qual é a correção de \"She is wanting a new phone.\"?",
        options: ["She wants a new phone.", "She is want a new phone.", "She wanting a new phone."],
        answer: "She wants a new phone.",
        explanation: "\"Want\" é verbo de estado — não existe no contínuo. Vai para o simples: she wants."
      },
      {
        id: "a3-mc-31",
        type: "mc",
        topic: "error-correction",
        prompt: "Uma destas frases tem erro. Qual?",
        options: ["Are you liking this song?", "Do you like this song?", "I like this song."],
        answer: "Are you liking this song?",
        explanation: "\"Like\" é estado → pergunta no simples: Do you like this song?"
      },
      {
        id: "a3-mc-32",
        type: "mc",
        topic: "error-correction",
        prompt: "Qual é a correção de \"What you are doing?\"",
        options: ["What are you doing?", "What do you doing?", "What you do doing?"],
        answer: "What are you doing?",
        explanation: "Na pergunta, o verbo to be vem ANTES do sujeito: What are you doing?"
      },
      {
        id: "a3-mc-33",
        type: "mc",
        topic: "error-correction",
        prompt: "Qual é a correção de \"He is study English at the moment.\"?",
        options: [
          "He is studying English at the moment.",
          "He is studies English at the moment.",
          "He study English at the moment."
        ],
        answer: "He is studying English at the moment.",
        explanation: "No contínuo é am/is/are + verbo com -ing: is studying."
      },
      {
        id: "a3-mc-34",
        type: "mc",
        topic: "error-correction",
        prompt: "Qual destas frases está ERRADA?",
        options: ["My sister don't work here.", "My sister doesn't work here.", "My sisters don't work here."],
        answer: "My sister don't work here.",
        explanation: "\"My sister\" = she → doesn't. Já \"my sisters\" (plural) = they → don't, por isso a terceira está certa."
      },
      {
        id: "a3-mc-35",
        type: "mc",
        topic: "translation",
        prompt: "Como se diz: \"Ela está cozinhando agora.\"",
        options: ["She is cooking now.", "She cooks now.", "She cooking now."],
        answer: "She is cooking now.",
        explanation: "\"Agora\" → contínuo, e o contínuo sempre precisa do verbo to be: she IS cooking."
      },
      {
        id: "a3-mc-36",
        type: "mc",
        topic: "translation",
        prompt: "Como se diz: \"Eu não trabalho aos sábados.\"",
        options: ["I don't work on Saturdays.", "I'm not working on Saturdays.", "I not work on Saturdays."],
        answer: "I don't work on Saturdays.",
        explanation: "Rotina (aos sábados, sempre) → presente simples negativo: don't work."
      },
      {
        id: "a3-mc-37",
        type: "mc",
        topic: "translation",
        prompt: "Como se diz: \"Meu irmão mora em Curitiba.\"",
        options: ["My brother lives in Curitiba.", "My brother is living in Curitiba.", "My brother live in Curitiba."],
        answer: "My brother lives in Curitiba.",
        explanation: "Onde alguém mora é situação permanente → simples (he lives). \"Is living\" só se fosse temporário (ex.: por três meses)."
      },
      {
        id: "a3-mc-38",
        type: "mc",
        topic: "translation",
        prompt: "Como se diz: \"Que horas você acorda?\"",
        options: ["What time do you wake up?", "What time are you waking up?", "What time you wake up?"],
        answer: "What time do you wake up?",
        explanation: "Pergunta sobre rotina → simples com \"do\". Sem o auxiliar a pergunta fica incompleta."
      },
      {
        id: "a3-mc-39",
        type: "mc",
        topic: "short-answers",
        prompt: "Are you studying English? — Yes, I ___.",
        options: ["am", "do", "is"],
        answer: "am",
        explanation: "A resposta curta repete o auxiliar da pergunta: pergunta com \"are\" → Yes, I am."
      },
      {
        id: "a3-mc-40",
        type: "mc",
        topic: "short-answers",
        prompt: "Does she work on Mondays? — No, she ___.",
        options: ["doesn't", "isn't", "don't"],
        answer: "doesn't",
        explanation: "Pergunta com \"does\" → resposta curta com does: No, she doesn't."
      },
      {
        id: "a3-mc-41",
        type: "mc",
        topic: "short-answers",
        prompt: "Do they live near you? — Yes, they ___.",
        options: ["do", "are", "does"],
        answer: "do",
        explanation: "Pergunta com \"do\" → Yes, they do. (\"Are\" só se a pergunta fosse \"Are they...?\".)"
      },
      {
        id: "a3-fill-15",
        type: "fill",
        topic: "short-answers",
        prompt: "Complete a resposta curta: Is he watching the game? — No, he ___.",
        accept: ["isn't", "is not"],
        explanation: "Pergunta com \"is\" → No, he isn't. Repare que a resposta curta nunca repete o verbo principal (não se diz \"No, he isn't watching\")."
      },
      {
        id: "a3-mc-42",
        type: "mc",
        topic: "questions-word-order",
        prompt: "Qual pergunta está correta?",
        options: ["Where does he live?", "Where he lives?", "Where does he lives?"],
        answer: "Where does he live?",
        explanation: "Quem leva o -s é o auxiliar (does); o verbo principal fica na forma base: does he live."
      },
      {
        id: "a3-mc-43",
        type: "mc",
        topic: "questions-word-order",
        prompt: "Qual destas perguntas está correta?",
        options: [
          "How many languages do you speak?",
          "How many languages you speak?",
          "How many languages does you speak?"
        ],
        answer: "How many languages do you speak?",
        explanation: "Sujeito \"you\" → auxiliar \"do\". Toda pergunta no simples precisa de do/does (ou do verbo to be)."
      },
      {
        id: "a3-fill-16",
        type: "fill",
        topic: "questions-word-order",
        prompt: "Coloque na ordem certa: what / do / you / usually / do / on Sundays?",
        accept: [
          "what do you usually do on sundays",
          "what do you usually do on sundays?"
        ],
        explanation: "Ordem da pergunta: (wh-) + auxiliar + sujeito + advérbio + verbo → What do you usually do on Sundays?"
      },
      {
        id: "a3-fill-17",
        type: "fill",
        topic: "questions-word-order",
        prompt: "Coloque na ordem certa: is / why / crying / the baby ?",
        accept: ["why is the baby crying", "why is the baby crying?"],
        explanation: "Com o verbo to be: (wh-) + to be + sujeito + verbo-ing → Why is the baby crying?"
      },
      {
        id: "a3-mc-44",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "It's 11 pm and the neighbours ___ (play) loud music again.",
        options: ["are playing", "play", "plays"],
        answer: "are playing",
        explanation: "Está acontecendo agora (e incomodando agora) → contínuo. \"Again\" aqui é reclamação, não frequência."
      },
      {
        id: "a3-mc-45",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "My parents ___ (not/use) WhatsApp; they prefer calling.",
        options: ["don't use", "aren't using", "doesn't use"],
        answer: "don't use",
        explanation: "Fato geral sobre eles → simples. \"My parents\" = they → don't."
      },
      {
        id: "a3-mc-46",
        type: "mc",
        topic: "simple-vs-continuous",
        prompt: "Listen! Someone ___ (knock) at the door.",
        options: ["is knocking", "knocks", "knock"],
        answer: "is knocking",
        explanation: "\"Listen!\" chama atenção para algo acontecendo neste momento → contínuo. \"Someone\" é singular → is."
      },
      {
        id: "a3-fill-18",
        type: "fill",
        topic: "simple-vs-continuous",
        prompt: "Complete: The shop ___ (open) at 9 every day.",
        accept: ["opens"],
        explanation: "\"Every day\" = rotina fixa → simples, e \"the shop\" = it → opens."
      },
      {
        id: "a3-mc-47",
        type: "mc",
        topic: "stative-verbs",
        prompt: "This coffee ___ (taste) amazing!",
        options: ["tastes", "is tasting", "taste"],
        answer: "tastes",
        explanation: "\"Taste\" no sentido de ter gosto é estado → simples. (\"The chef is tasting the soup\" seria a ação de provar.)"
      },
      {
        id: "a3-mc-48",
        type: "mc",
        topic: "stative-verbs",
        prompt: "I ___ (not/remember) her name right now.",
        options: ["don't remember", "am not remembering", "doesn't remember"],
        answer: "don't remember",
        explanation: "\"Remember\" é estado mental → fica no simples mesmo com \"right now\"."
      },
      {
        id: "a3-fill-19",
        type: "fill",
        topic: "stative-verbs",
        prompt: "Complete: Sofia ___ (love) romantic movies.",
        accept: ["loves"],
        explanation: "\"Love\" é estado → simples, e Sofia = she → loves."
      },
      {
        id: "a3-mc-49",
        type: "mc",
        topic: "future-arrangements",
        prompt: "The movie ___ (start) at 8:30 tonight.",
        options: ["starts", "is starting", "start"],
        answer: "starts",
        explanation: "Horário de programação (cinema, aula, voo) → simples, mesmo sendo hoje à noite."
      },
      {
        id: "a3-mc-50",
        type: "mc",
        topic: "future-arrangements",
        prompt: "We ___ (have) dinner with my in-laws on Saturday. It's all arranged.",
        options: ["are having", "have", "has"],
        answer: "are having",
        explanation: "Compromisso já combinado (\"it's all arranged\") → contínuo com valor de futuro."
      },
      {
        id: "a3-mc-51",
        type: "mc",
        topic: "changing-situations",
        prompt: "More and more people ___ (work) remotely in Brazil.",
        options: ["are working", "work", "works"],
        answer: "are working",
        explanation: "\"More and more\" sinaliza tendência em mudança → contínuo."
      },
      {
        id: "a3-fill-20",
        type: "fill",
        topic: "changing-situations",
        prompt: "Complete: Streaming is changing the market, and DVD sales ___ (fall) every year.",
        accept: ["are falling"],
        explanation: "Tendência em curso, dentro de uma mudança que o texto já anunciou → contínuo (are falling)."
      },
      {
        id: "a3-fill-21",
        type: "fill",
        topic: "third-person-s",
        prompt: "Complete a 3ª pessoa do verbo \"finish\": The class ___ at 10.",
        accept: ["finishes"],
        explanation: "Terminado em -sh → acrescenta \"-es\": finish → finishes."
      },
      {
        id: "a3-fill-22",
        type: "fill",
        topic: "third-person-s",
        prompt: "Complete a 3ª pessoa do verbo \"relax\": He ___ on the sofa after work.",
        accept: ["relaxes"],
        explanation: "Terminado em -x → acrescenta \"-es\": relax → relaxes."
      },
      {
        id: "a3-fill-23",
        type: "fill",
        topic: "continuous-spelling",
        prompt: "Complete com o -ing de \"lie\": The cat is ___ on my keyboard again.",
        accept: ["lying"],
        explanation: "Verbo terminado em -ie troca por -ying: lie → lying (o mesmo vale para die → dying)."
      },
      {
        id: "a3-fill-24",
        type: "fill",
        topic: "continuous-spelling",
        prompt: "Complete com o -ing de \"swim\": They are ___ in the pool right now.",
        accept: ["swimming"],
        explanation: "Consoante-vogal-consoante numa sílaba só → dobra a última letra: swim → swimming."
      },
      {
        id: "a3-mc-52",
        type: "mc",
        topic: "frequency-adverbs",
        prompt: "Qual destas está escrita corretamente?",
        options: ["He usually gets up early.", "He gets usually up early.", "Usually he get up early."],
        answer: "He usually gets up early.",
        explanation: "O advérbio fica entre o sujeito e o verbo principal, e o verbo continua na 3ª pessoa: he usually gets."
      },
      {
        id: "a3-fill-25",
        type: "fill",
        topic: "frequency-adverbs",
        prompt: "Reescreva a frase com \"never\": \"She eats meat.\"",
        accept: ["she never eats meat", "she never eats meat."],
        explanation: "\"Never\" já é a negação — o verbo continua afirmativo e na 3ª pessoa: She never eats meat."
      }
    ],

    passages: [
      {
        id: "a3-passage-1",
        title: "Um dia de Rafael, o entregador de bicicleta",
        text:
          "Rafael works as a bicycle delivery rider in São Paulo. He usually wakes up at 6 am and " +
          "has a light breakfast before leaving home. He starts his shifts at 7:30 and delivers " +
          "around twenty orders every morning. He always checks his phone for new orders, but he " +
          "never rides while looking at the screen. At lunchtime, he takes a one-hour break and eats " +
          "with his co-workers near the park. This week, however, something is different: it's raining " +
          "every day, so Rafael is wearing a raincoat and is riding more carefully than usual. He still " +
          "finishes his deliveries, just a bit later than normal. In the evening, he usually rests, but " +
          "today he is fixing his bicycle because a wheel is broken.",
        questions: [
          {
            id: "a3-r-1",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "What time does Rafael usually wake up?",
            options: ["6 am", "7:30 am", "8 am"],
            answer: "6 am",
            explanation: "O texto diz \"He usually wakes up at 6 am\"."
          },
          {
            id: "a3-r-2",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "How many orders does he usually deliver every morning?",
            options: ["Ten", "Twenty", "Thirty"],
            answer: "Twenty",
            explanation: "O texto diz \"delivers around twenty orders every morning\"."
          },
          {
            id: "a3-r-3",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "Why is Rafael riding more carefully this week?",
            options: ["Because his bike is new", "Because it's raining every day", "Because he's tired"],
            answer: "Because it's raining every day",
            explanation: "O texto explica que essa semana está chovendo todo dia, por isso ele anda com mais cuidado."
          },
          {
            id: "a3-r-4",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "What is Rafael doing this evening, instead of resting?",
            options: ["Fixing his bicycle", "Delivering more orders", "Having dinner with friends"],
            answer: "Fixing his bicycle",
            explanation: "O texto diz que hoje à noite, em vez de descansar como de costume, ele está consertando a bicicleta porque uma roda está quebrada."
          },
          {
            id: "a3-r-5",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "In \"This week... Rafael is wearing a raincoat\", why is the continuous form used?",
            options: [
              "Because it's a permanent habit",
              "Because it's something temporary happening these days",
              "Because it's a general truth"
            ],
            answer: "Because it's something temporary happening these days",
            explanation: "\"This week\" indica uma situação temporária e atual (diferente da rotina normal dele) — por isso usamos o contínuo, e não o simples."
          }
        ]
      },
      {
        id: "a3-passage-2",
        title: "Larissa, jogadora de vôlei (rotina x situação temporária)",
        text:
          "Larissa is a professional volleyball player. She wakes up at 5:30 every weekday and " +
          "drinks a big glass of water before anything else. She normally trains twice a day: from " +
          "7 to 9 in the morning with her team, and from 4 to 6 in the afternoon at the gym. Between " +
          "the two sessions she always has a long lunch and takes a short nap. She rarely eats fast " +
          "food, but she has pizza with her teammates once a month, usually after an important match. " +
          "In the evening she likes reading, and she almost never watches television. This month, " +
          "however, Larissa isn't training with the team, because she is recovering from a knee " +
          "injury. She is swimming every morning instead, and she is seeing a physiotherapist three " +
          "times a week. She misses the court, but she says her knee is getting better every day.",
        questions: [
          {
            id: "a3-r-6",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "How often does Larissa normally train on a weekday?",
            options: ["Twice a day", "Once a day", "Three times a day"],
            answer: "Twice a day",
            explanation: "O texto diz \"She normally trains twice a day\" e depois detalha os dois horários (manhã com o time, tarde na academia)."
          },
          {
            id: "a3-r-7",
            type: "mc",
            topic: "frequency-adverbs",
            prompt: "How often does she eat pizza?",
            options: ["About once a month", "Every week", "Never"],
            answer: "About once a month",
            explanation: "\"She has pizza with her teammates once a month\". Cuidado: \"rarely eats fast food\" não quer dizer \"nunca\" — a frequência exata vem na frase seguinte."
          },
          {
            id: "a3-r-8",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "Why isn't she training with the team this month?",
            options: [
              "Because she is recovering from a knee injury",
              "Because she is on holiday",
              "Because she changed teams"
            ],
            answer: "Because she is recovering from a knee injury",
            explanation: "O texto explica: \"she is recovering from a knee injury\" — por isso o treino com o time está suspenso este mês."
          },
          {
            id: "a3-r-9",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "What is she doing instead of team training?",
            options: [
              "She is swimming every morning",
              "She is running in the park",
              "She is resting at home all day"
            ],
            answer: "She is swimming every morning",
            explanation: "O texto diz \"She is swimming every morning instead\" e que vê um fisioterapeuta três vezes por semana."
          },
          {
            id: "a3-r-10",
            type: "mc",
            topic: "simple-vs-continuous",
            prompt: "In \"She is swimming every morning instead\", why is the continuous used, even with \"every morning\"?",
            options: [
              "Because it's a temporary routine, only during her recovery",
              "Because it's a permanent habit",
              "Because \"swim\" is always used in the continuous"
            ],
            answer: "Because it's a temporary routine, only during her recovery",
            explanation: "\"Every morning\" normalmente pede o simples, mas aqui a rotina toda é temporária (só neste mês, enquanto ela se recupera) → contínuo. Compare com \"She wakes up at 5:30 every weekday\", que é a rotina permanente dela."
          },
          {
            id: "a3-r-11",
            type: "mc",
            topic: "changing-situations",
            prompt: "In \"her knee is getting better every day\", the continuous shows that...",
            options: [
              "the situation is changing little by little",
              "the knee is already 100% fine",
              "this happens every day of her life"
            ],
            answer: "the situation is changing little by little",
            explanation: "Contínuo com verbos como get, become, improve, rise indica mudança em andamento — o joelho está melhorando aos poucos, ainda não está curado."
          }
        ]
      },
      {
        id: "a3-passage-3",
        title: "Conversa no elevador: Bia e Tiago (diálogo)",
        text:
          "Bia: Hi, Tiago! I don't usually see you in the morning. Do you work here now?\n" +
          "Tiago: Hi, Bia! Not exactly. I work for a company in Belo Horizonte, but this month I'm " +
          "working at this office, because we're starting a new project.\n" +
          "Bia: Nice! And how do you come to work? Do you drive?\n" +
          "Tiago: I normally drive, but my car is at the garage, so these days I'm taking the metro. " +
          "It's cheaper, actually.\n" +
          "Bia: I know! I take the metro every day. Hey, are you going to the team lunch on Friday?\n" +
          "Tiago: Yes, I am. I'm meeting the design team at 12:30, and then we're all having lunch " +
          "together.\n" +
          "Bia: Perfect. See you there!",
        questions: [
          {
            id: "a3-r-12",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "Where does Tiago normally work?",
            options: ["For a company in Belo Horizonte", "In this office", "At home"],
            answer: "For a company in Belo Horizonte",
            explanation: "Ele diz \"I work for a company in Belo Horizonte\" (simples = situação normal) e só está neste escritório este mês."
          },
          {
            id: "a3-r-13",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "Why is he working at this office this month?",
            options: [
              "Because his team is starting a new project",
              "Because he changed companies",
              "Because his office in BH is closed"
            ],
            answer: "Because his team is starting a new project",
            explanation: "\"...but this month I'm working at this office, because we're starting a new project.\""
          },
          {
            id: "a3-r-14",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "How does Tiago normally come to work, and how is he coming these days?",
            options: [
              "He normally drives, but these days he's taking the metro",
              "He normally takes the metro, but these days he's driving",
              "He always takes the metro"
            ],
            answer: "He normally drives, but these days he's taking the metro",
            explanation: "\"I normally drive, but my car is at the garage, so these days I'm taking the metro\" — o par clássico rotina (simples) x situação temporária (contínuo)."
          },
          {
            id: "a3-r-15",
            type: "mc",
            topic: "future-arrangements",
            prompt: "\"I'm meeting the design team at 12:30\" — what does this sentence talk about?",
            options: [
              "A plan already arranged for Friday",
              "Something happening right now",
              "Something he does every day"
            ],
            answer: "A plan already arranged for Friday",
            explanation: "Contínuo com hora marcada e dia combinado = futuro já arranjado, não algo acontecendo agora."
          },
          {
            id: "a3-r-16",
            type: "mc",
            topic: "simple-vs-continuous",
            prompt: "Why does Bia say \"I take the metro every day\" and not \"I'm taking\"?",
            options: [
              "Because it's her normal routine",
              "Because it's temporary",
              "Because \"take\" can't be used in the continuous"
            ],
            answer: "Because it's her normal routine",
            explanation: "Para ela o metrô é a rotina de sempre → simples. Para o Tiago é só enquanto o carro está na oficina → contínuo."
          },
          {
            id: "a3-r-17",
            type: "mc",
            topic: "short-answers",
            prompt: "Bia asks: \"Are you going to the team lunch on Friday?\" How does Tiago answer?",
            options: ["Yes, I am.", "Yes, I do.", "Yes, I go."],
            answer: "Yes, I am.",
            explanation: "A resposta curta repete o auxiliar da pergunta: \"Are you...?\" → \"Yes, I am.\""
          }
        ]
      }
    ]
  });
})();
