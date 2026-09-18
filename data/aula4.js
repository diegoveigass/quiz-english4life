// Aula 4 — Stative x Dynamic Verbs (verbos de estado x verbos de ação) + verbos com sentido
// duplo (think, look, see, have, be, taste) no simples x contínuo.
// Baseado nos exercícios de: aula_4_14_09_26 (worksheet "Present Simple vs. Continuous" B1-B2
// da Linguahouse — seções de stative verbs, "always" + contínuo e verbos de duplo sentido — e
// na correção de tarefa da aula ao vivo de 14/09, que revisou -es/-ies, have→has, plural
// irregular child→children, ordem da pergunta, "ever", "listen to" e "go home" sem preposição).
// Frases originais, inspiradas no material, não copiadas dos documentos.
//
// 2º lote (mesmo tema, formatos novos em vez de mais completar lacuna): achar o erro
// (error-correction), tradução PT→EN (translation), resposta curta (short-answers), ordem da
// pergunta (questions-word-order) — todos girando em torno de stative x dynamic e verbos de
// sentido duplo — + reforço de erros reais da correção da aula (have→has, -es/-ies, do/does sem
// significado x verbo to be com significado) + um 2º texto de leitura em formato de diálogo.
(function () {
  window.QUIZ_AULAS = window.QUIZ_AULAS || [];

  window.QUIZ_AULAS.push({
    id: "aula4",
    label: "Aula 4",
    dateLabel: "14/09/2026",
    folder: "aula_4_14_09_26",

    theory: {
      title: "Stative x Dynamic Verbs: quando o verbo NÃO pode ir pro contínuo",
      explanation:
        "Verbos dinâmicos (de ação) descrevem algo que dá pra imaginar alguém fazendo — dance, " +
        "play, study, write — e podem ir tanto pro presente simples quanto pro contínuo. Já os " +
        "verbos de estado (stative) descrevem sentimentos, opiniões e processos mentais — want, " +
        "like, know, believe, seem — e não são uma ação que alguém \"faz\": eles só existem no " +
        "presente simples, mesmo falando de agora. O truque é que alguns verbos (think, look, " +
        "see, have, be, taste) mudam de sentido dependendo da forma usada.",
      examples: [
        { en: "I love this song, but I don't understand the lyrics.", pt: "Eu amo essa música, mas não entendo a letra (dois verbos de estado, sempre no simples)." },
        { en: "I think you're right.", pt: "Eu acho que você tem razão (\"think\" = opinião → estado → simples)." },
        { en: "Wait, I'm thinking — give me a second.", pt: "Espera, eu tô pensando — me dá um segundo (\"think\" = usar o cérebro agora → ação → contínuo)." },
        { en: "She's always losing her phone!", pt: "Ela vive perdendo o celular! (contínuo + always = hábito irritante)" },
        { en: "I'm interested in learning Portuguese slang.", pt: "Tenho interesse em aprender gírias em português (verbo depois de preposição → sempre -ing)." },
        { en: "Are you seeing anyone these days?", pt: "Você está namorando alguém esses dias? (\"see\" no contínuo = estar envolvido romanticamente)" }
      ],
      tips: [
        "Verbos dinâmicos (ação) — dance, play, study, work, write, run... — podem ir pro presente simples OU contínuo, dependendo do contexto.",
        "Verbos de estado (stative) — want, like, love, hate, prefer, know, realize, understand, believe, remember, seem, suppose, mean — só existem no presente simples. Nunca \"I'm wanting\", \"she's knowing\".",
        "Alguns verbos mudam de sentido entre o simples e o contínuo: think (achar x pensar ativamente), look (parecer x olhar para algo), see (entender/ter um encontro marcado x estar namorando), have (possuir x vivenciar), be (característica permanente x comportamento temporário/estranho), taste (ter gosto de x experimentar o sabor).",
        "Verbo depois de preposição sempre vai pro -ing, mesmo sendo um verbo de estado: interested IN learning, tired OF waiting, thinking ABOUT moving.",
        "Contínuo + always = hábito repetitivo, geralmente algo que incomoda (ou vira piada): \"He's always arriving late.\"",
        "\"Listen\" sempre precisa da preposição \"to\" antes do objeto: \"I'm listening to you\", nunca \"I'm listening you\".",
        "Depois de verbos de movimento, \"home\" não leva preposição (\"I'm going home\"), mas outros destinos levam \"to\" (\"I'm going to the mall\").",
        "Substantivos irregulares não seguem a regra do -s: child → children (nunca \"childs\" nem \"childrens\"). Instrumentos musicais sempre levam \"the\": play the piano, the guitar, the violin."
      ]
    },

    questions: [
      {
        id: "a4-mc-1",
        type: "mc",
        topic: "stative-vs-dynamic",
        prompt: "Right now, I ___ (want) a big glass of water.",
        options: ["want", "am wanting", "wants"],
        answer: "want",
        explanation: "\"Want\" é verbo de estado — mesmo falando de \"agora\", não existe \"I'm wanting\". Verbos de estado só vão pro presente simples."
      },
      {
        id: "a4-mc-2",
        type: "mc",
        topic: "stative-vs-dynamic",
        prompt: "Look! Camila ___ (dance) in the middle of the street!",
        options: ["is dancing", "dances", "dance"],
        answer: "is dancing",
        explanation: "\"Dance\" é verbo dinâmico (dá pra imaginar alguém fazendo essa ação) — pode ir pro contínuo, e \"Look!\" pede o contínuo."
      },
      {
        id: "a4-mc-3",
        type: "mc",
        topic: "stative-vs-dynamic",
        prompt: "My brother ___ (not/believe) in luck.",
        options: ["doesn't believe", "isn't believing", "don't believe"],
        answer: "doesn't believe",
        explanation: "\"Believe\" é verbo de estado (não dá pra \"imaginar\" alguém fazendo a ação de acreditar) — fica sempre no simples. \"My brother\" = he → doesn't."
      },
      {
        id: "a4-mc-4",
        type: "mc",
        topic: "stative-vs-dynamic",
        prompt: "Qual frase está correta?",
        options: ["I love this song.", "I'm loving this song.", "I loving this song."],
        answer: "I love this song.",
        explanation: "\"Love\" é verbo de estado — nunca \"I'm loving\", mesmo que pareça natural por causa de slogans famosos tipo \"I'm lovin' it\"."
      },
      {
        id: "a4-mc-5",
        type: "mc",
        topic: "stative-vs-dynamic",
        prompt: "We ___ (need) two more people for the team.",
        options: ["need", "are needing", "needs"],
        answer: "need",
        explanation: "\"Need\" é verbo de estado — sempre no simples. \"Are needing\" não existe no inglês natural."
      },
      {
        id: "a4-mc-6",
        type: "mc",
        topic: "dual-meaning-verbs",
        prompt: "I ___ (think) you're completely right.",
        options: ["think", "am thinking", "thinks"],
        answer: "think",
        explanation: "\"Think\" no sentido de opinião/achar é estado → presente simples."
      },
      {
        id: "a4-mc-7",
        type: "mc",
        topic: "dual-meaning-verbs",
        prompt: "Don't interrupt me, I ___ (think) about the problem.",
        options: ["am thinking", "think", "thinks"],
        answer: "am thinking",
        explanation: "Aqui \"think\" significa usar o cérebro ativamente para resolver algo (ação) → contínuo."
      },
      {
        id: "a4-mc-8",
        type: "mc",
        topic: "dual-meaning-verbs",
        prompt: "You ___ (look) very happy today. Did something good happen?",
        options: ["look", "are looking", "looks"],
        answer: "look",
        explanation: "\"Look\" no sentido de \"parecer\" é estado → simples. \"You look happy\" = você parece feliz."
      },
      {
        id: "a4-mc-9",
        type: "mc",
        topic: "dual-meaning-verbs",
        prompt: "What are you ___ (look) at? Is something wrong?",
        options: ["looking", "look", "looks"],
        answer: "looking",
        explanation: "\"Look at\" no sentido de usar os olhos para ver algo é ação → contínuo (are + looking)."
      },
      {
        id: "a4-mc-10",
        type: "mc",
        topic: "dual-meaning-verbs",
        prompt: "I ___ (see) what you mean now, thanks for explaining.",
        options: ["see", "am seeing", "sees"],
        answer: "see",
        explanation: "\"See\" no sentido de \"entender\" é estado → simples. \"I see\" = eu entendo."
      },
      {
        id: "a4-mc-11",
        type: "mc",
        topic: "dual-meaning-verbs",
        prompt: "Sorry, I can't talk now — I ___ (see) the doctor.",
        options: ["'m seeing", "see", "sees"],
        answer: "'m seeing",
        explanation: "Aqui \"see\" significa \"ter uma consulta/encontro marcado com\" — é ação → contínuo."
      },
      {
        id: "a4-mc-12",
        type: "mc",
        topic: "dual-meaning-verbs",
        prompt: "This cake ___ (taste) like chocolate.",
        options: ["tastes", "is tasting", "taste"],
        answer: "tastes",
        explanation: "\"Taste\" no sentido de \"ter gosto de\" é estado → simples. \"This cake\" = it → tastes."
      },
      {
        id: "a4-mc-13",
        type: "mc",
        topic: "dual-meaning-verbs",
        prompt: "My uncle ___ (be) a very calm person.",
        options: ["is", "is being", "be"],
        answer: "is",
        explanation: "\"Be\" no sentido de característica permanente é estado → simples. \"Is being\" seria um comportamento temporário/fora do normal."
      },
      {
        id: "a4-mc-14",
        type: "mc",
        topic: "dual-meaning-verbs",
        prompt: "O que significa \"Are you seeing anyone?\"?",
        options: ["Você está namorando alguém?", "Você está olhando para alguém?", "Você conhece alguém?"],
        answer: "Você está namorando alguém?",
        explanation: "\"See\" no contínuo, nesse contexto, significa estar envolvido romanticamente com alguém."
      },
      {
        id: "a4-mc-15",
        type: "mc",
        topic: "continuous-always",
        prompt: "He's always ___ (forget) his umbrella! It drives me crazy.",
        options: ["forgetting", "forgets", "forget"],
        answer: "forgetting",
        explanation: "Presente contínuo + \"always\" descreve um hábito irritante que se repete — nesse caso, esquecer o guarda-chuva."
      },
      {
        id: "a4-mc-16",
        type: "mc",
        topic: "continuous-always",
        prompt: "Qual frase está correta?",
        options: [
          "She is always talking about her problems.",
          "She always is talking about her problems.",
          "Always she is talking about her problems."
        ],
        answer: "She is always talking about her problems.",
        explanation: "No contínuo, \"always\" fica entre o to be e o verbo-ing: is always talking."
      },
      {
        id: "a4-mc-17",
        type: "mc",
        topic: "preposition-gerund",
        prompt: "I'm interested in ___ (learn) a new language.",
        options: ["learning", "learn", "learns"],
        answer: "learning",
        explanation: "Verbo depois de preposição sempre vai pro -ing, mesmo que o verbo em si não tenha nada a ver com o contínuo: interested IN learning."
      },
      {
        id: "a4-mc-18",
        type: "mc",
        topic: "preposition-gerund",
        prompt: "She's thinking about ___ (change) careers.",
        options: ["changing", "change", "changes"],
        answer: "changing",
        explanation: "\"About\" é preposição → o verbo seguinte vai pro -ing: thinking about changing."
      },
      {
        id: "a4-mc-19",
        type: "mc",
        topic: "verb-preposition",
        prompt: "Qual frase está correta?",
        options: [
          "Can you listen to me, please?",
          "Can you listen me, please?",
          "Can you listen at me, please?"
        ],
        answer: "Can you listen to me, please?",
        explanation: "O verbo \"listen\" sempre precisa da preposição \"to\" antes do objeto — nunca \"listen me\" ou \"listen at me\"."
      },
      {
        id: "a4-mc-20",
        type: "mc",
        topic: "verb-preposition",
        prompt: "Qual frase está correta?",
        options: ["I'm going home.", "I'm going to home.", "I'm going at home."],
        answer: "I'm going home.",
        explanation: "\"Home\" não leva preposição depois de verbos de movimento — é uma exceção. \"To home\" não existe."
      },
      {
        id: "a4-mc-21",
        type: "mc",
        topic: "verb-preposition",
        prompt: "Qual frase está correta?",
        options: [
          "I'm going to the supermarket.",
          "I'm going the supermarket.",
          "I'm going at the supermarket."
        ],
        answer: "I'm going to the supermarket.",
        explanation: "Para destinos que não sejam \"home\", usamos a preposição \"to\" antes do lugar: going to the supermarket."
      },
      {
        id: "a4-mc-22",
        type: "mc",
        topic: "irregular-plurals",
        prompt: "Qual frase está correta?",
        options: [
          "Children usually like chocolate.",
          "Childs usually like chocolate.",
          "Childrens usually like chocolate."
        ],
        answer: "Children usually like chocolate.",
        explanation: "\"Child\" é substantivo irregular — o plural é \"children\", sem -s. Nunca \"childs\" nem \"childrens\" (children já é plural)."
      },
      {
        id: "a4-mc-23",
        type: "mc",
        topic: "irregular-plurals",
        prompt: "How many ___ do you have?",
        options: ["children", "childs", "child"],
        answer: "children",
        explanation: "Pergunta sobre quantidade pede o plural, e o plural irregular de \"child\" é \"children\"."
      },
      {
        id: "a4-mc-24",
        type: "mc",
        topic: "musical-instruments",
        prompt: "Qual frase está correta?",
        options: [
          "He plays the guitar every weekend.",
          "He plays guitar every weekend.",
          "He play the guitar every weekend."
        ],
        answer: "He plays the guitar every weekend.",
        explanation: "Instrumentos musicais sempre levam \"the\" depois do verbo \"play\": play the guitar. A terceira opção também erra a 3ª pessoa (falta o -s: he plays)."
      },
      {
        id: "a4-fill-1",
        type: "fill",
        topic: "stative-vs-dynamic",
        prompt: "Complete: I ___ (not/understand) this sentence.",
        accept: ["don't understand"],
        explanation: "\"Understand\" é estado mental — a negativa fica no simples, com \"don't\" (sujeito \"I\")."
      },
      {
        id: "a4-fill-2",
        type: "fill",
        topic: "stative-vs-dynamic",
        prompt: "Complete: She ___ (realize) her mistake now.",
        accept: ["realizes"],
        explanation: "\"Realize\" é verbo de estado — mesmo com \"now\", fica no simples, e \"she\" pede o -s (realizes)."
      },
      {
        id: "a4-fill-3",
        type: "fill",
        topic: "dual-meaning-verbs",
        prompt: "Complete: Why ___ you (be) so rude today? You're never like this.",
        accept: ["are you being"],
        explanation: "\"Be\" no contínuo indica comportamento temporário/atípico, fora do normal da pessoa — diferente do jeito de ser de sempre."
      },
      {
        id: "a4-fill-4",
        type: "fill",
        topic: "dual-meaning-verbs",
        prompt: "Complete: I ___ (have) a small apartment downtown.",
        accept: ["have"],
        explanation: "\"Have\" no sentido de posse é estado → presente simples."
      },
      {
        id: "a4-fill-5",
        type: "fill",
        topic: "dual-meaning-verbs",
        prompt: "Complete: Relax, we ___ (have) a great time at this party!",
        accept: ["are having", "'re having", "re having"],
        explanation: "\"Have\" no sentido de \"vivenciar/experimentar\" é ação → presente contínuo."
      },
      {
        id: "a4-fill-6",
        type: "fill",
        topic: "continuous-always",
        prompt: "Complete (hábito irritante): You ___ (always/interrupt) me when I'm speaking!",
        accept: ["are always interrupting"],
        explanation: "Contínuo + \"always\" é usado para reclamar de algo que a pessoa faz repetidamente."
      },
      {
        id: "a4-fill-7",
        type: "fill",
        topic: "continuous-always",
        prompt: "Complete: My sister is a very generous person — she ___ (always/lend) money to her friends.",
        accept: ["is always lending"],
        explanation: "Aqui o contínuo + \"always\" não é reclamação — só reforça que é algo muito frequente e característico da pessoa."
      },
      {
        id: "a4-fill-8",
        type: "fill",
        topic: "preposition-gerund",
        prompt: "Complete: We're tired of ___ (wait) for the bus.",
        accept: ["waiting"],
        explanation: "Depois de preposição (\"of\"), o verbo vai sempre pro -ing: tired of waiting."
      },
      {
        id: "a4-fill-9",
        type: "fill",
        topic: "preposition-gerund",
        prompt: "Complete: I'm worried about ___ (fail) the exam.",
        accept: ["failing"],
        explanation: "Verbo depois de preposição (\"about\") sempre em -ing — regra que vale mesmo aqui, numa frase sobre preocupação."
      },
      {
        id: "a4-fill-10",
        type: "fill",
        topic: "verb-preposition",
        prompt: "Complete: You can turn off the radio, I'm not listening ___ it.",
        accept: ["to"],
        explanation: "O verbo \"listen\" sempre precisa da preposição \"to\" antes do objeto — a frase não pode terminar só em \"listening\"."
      },
      {
        id: "a4-fill-11",
        type: "fill",
        topic: "verb-preposition",
        prompt: "Traduza: \"Estou indo para casa.\"",
        accept: ["i'm going home", "i am going home"],
        explanation: "\"Casa\", no sentido de destino de um verbo de movimento, não leva preposição em inglês: \"I'm going home\", nunca \"to home\"."
      },
      {
        id: "a4-fill-12",
        type: "fill",
        topic: "irregular-plurals",
        prompt: "Complete o plural de \"child\":",
        accept: ["children"],
        explanation: "\"Child\" é substantivo irregular — plural \"children\", sem acrescentar -s."
      },
      {
        id: "a4-fill-13",
        type: "fill",
        topic: "musical-instruments",
        prompt: "Complete: She's playing ___ piano beautifully.",
        accept: ["the"],
        explanation: "Instrumentos musicais sempre levam o artigo \"the\" depois do verbo \"play\": play the piano, the guitar, the violin."
      },
      {
        id: "a4-mc-25",
        type: "mc",
        topic: "error-correction",
        prompt: "Qual frase está ERRADA?",
        options: ["I'm knowing the answer.", "I know the answer.", "She knows the answer."],
        answer: "I'm knowing the answer.",
        explanation: "\"Know\" é verbo de estado — nunca vai pro contínuo. O certo é \"I know the answer.\""
      },
      {
        id: "a4-mc-26",
        type: "mc",
        topic: "error-correction",
        prompt: "Qual é a correção de \"She's wanting to leave early today.\"?",
        options: ["She wants to leave early today.", "She want to leave early today.", "She's want to leave early today."],
        answer: "She wants to leave early today.",
        explanation: "\"Want\" é estado — fica no simples, e \"she\" pede o -s: wants."
      },
      {
        id: "a4-mc-27",
        type: "mc",
        topic: "error-correction",
        prompt: "Uma destas frases tem erro. Qual?",
        options: ["He's always losing his keys.", "He's always lose his keys.", "He always loses his keys."],
        answer: "He's always lose his keys.",
        explanation: "Depois do to be (is), o verbo principal precisa do -ing: is always LOSING, nunca \"is always lose\"."
      },
      {
        id: "a4-mc-28",
        type: "mc",
        topic: "error-correction",
        prompt: "Qual é a correção de \"I'm liking this movie a lot.\"?",
        options: ["I like this movie a lot.", "I likes this movie a lot.", "I'm like this movie a lot."],
        answer: "I like this movie a lot.",
        explanation: "\"Like\" é verbo de estado — nunca \"I'm liking\", mesmo sendo comum em propagandas."
      },
      {
        id: "a4-mc-29",
        type: "mc",
        topic: "error-correction",
        prompt: "Qual destas frases está ERRADA?",
        options: ["Look, he's dancing!", "Look, he dance!", "He dances every weekend."],
        answer: "Look, he dance!",
        explanation: "\"He dance\" não existe nem no simples (faltaria o -s: he dances) nem no contínuo (faltaria is: he's dancing). \"Look!\" pede o contínuo: Look, he's dancing!"
      },
      {
        id: "a4-mc-30",
        type: "mc",
        topic: "translation",
        prompt: "Como se diz: \"Eu não acredito em você.\"",
        options: ["I don't believe you.", "I'm not believing you.", "I no believe you."],
        answer: "I don't believe you.",
        explanation: "\"Believe\" é verbo de estado — negativa sempre no simples: don't believe."
      },
      {
        id: "a4-mc-31",
        type: "mc",
        topic: "translation",
        prompt: "Como se diz: \"Ela está namorando alguém novo.\"",
        options: ["She's seeing someone new.", "She sees someone new.", "She's looking someone new."],
        answer: "She's seeing someone new.",
        explanation: "\"See\" no contínuo, nesse sentido, significa estar envolvido romanticamente com alguém."
      },
      {
        id: "a4-mc-32",
        type: "mc",
        topic: "translation",
        prompt: "Como se diz: \"Este café tem gosto de queimado.\"",
        options: ["This coffee tastes burnt.", "This coffee is tasting burnt.", "This coffee taste burnt."],
        answer: "This coffee tastes burnt.",
        explanation: "\"Taste\" no sentido de \"ter gosto de\" é estado → simples. \"This coffee\" = it → tastes."
      },
      {
        id: "a4-mc-33",
        type: "mc",
        topic: "translation",
        prompt: "Como se diz: \"Estou pensando em comprar um carro novo.\"",
        options: [
          "I'm thinking about buying a new car.",
          "I think about buy a new car.",
          "I'm thinking about buy a new car."
        ],
        answer: "I'm thinking about buying a new car.",
        explanation: "\"Think\" no sentido de usar o cérebro ativamente é contínuo, e o verbo depois da preposição \"about\" sempre vai pro -ing: buying."
      },
      {
        id: "a4-mc-34",
        type: "mc",
        topic: "translation",
        prompt: "Como se diz: \"Ele está sendo muito grosso hoje, não é do feitio dele.\"",
        options: ["He's being very rude today.", "He's very rude today.", "He is very rude today."],
        answer: "He's being very rude today.",
        explanation: "\"Be\" no contínuo indica um comportamento temporário e fora do normal da pessoa — exatamente o caso aqui."
      },
      {
        id: "a4-mc-35",
        type: "mc",
        topic: "short-answers",
        prompt: "Do you understand the exercise? — No, I ___.",
        options: ["don't", "isn't", "doesn't"],
        answer: "don't",
        explanation: "\"Understand\" é estado, mas a resposta curta segue a pergunta: pergunta com \"do\" → No, I don't."
      },
      {
        id: "a4-mc-36",
        type: "mc",
        topic: "short-answers",
        prompt: "Is she always losing her phone? — Yes, she ___.",
        options: ["is", "does", "has"],
        answer: "is",
        explanation: "Pergunta com \"is\" (contínuo + always) → resposta curta com is: Yes, she is."
      },
      {
        id: "a4-mc-37",
        type: "mc",
        topic: "short-answers",
        prompt: "Is he playing video games right now? — No, he ___.",
        options: ["isn't", "doesn't", "don't"],
        answer: "isn't",
        explanation: "Pergunta com \"is\" → resposta curta com isn't. Nunca repete o verbo principal (não é \"No, he isn't playing\")."
      },
      {
        id: "a4-fill-14",
        type: "fill",
        topic: "short-answers",
        prompt: "Complete a resposta curta: Do they believe in ghosts? — No, they ___.",
        accept: ["don't"],
        explanation: "\"Believe\" é estado, mas a pergunta usou \"do\", então a resposta curta é: No, they don't."
      },
      {
        id: "a4-mc-38",
        type: "mc",
        topic: "questions-word-order",
        prompt: "Qual pergunta está correta?",
        options: ["What does this word mean?", "What means this word?", "What this word means?"],
        answer: "What does this word mean?",
        explanation: "Ordem da pergunta: palavra interrogativa → auxiliar (does) → sujeito → verbo principal: What does this word mean?"
      },
      {
        id: "a4-mc-39",
        type: "mc",
        topic: "questions-word-order",
        prompt: "Qual destas perguntas está correta?",
        options: [
          "Do you ever go to the movies?",
          "Do you go ever to the movies?",
          "Ever do you go to the movies?"
        ],
        answer: "Do you ever go to the movies?",
        explanation: "\"Ever\" sempre vem imediatamente antes do verbo principal, depois do sujeito: Do you EVER go..."
      },
      {
        id: "a4-fill-15",
        type: "fill",
        topic: "questions-word-order",
        prompt: "Coloque na ordem certa: usually / drive / to work / does / Martin ?",
        accept: ["does martin usually drive to work", "does martin usually drive to work?"],
        explanation: "Ordem: auxiliar (does) → sujeito → advérbio de frequência (usually) → verbo principal → resto da frase."
      },
      {
        id: "a4-fill-16",
        type: "fill",
        topic: "questions-word-order",
        prompt: "Coloque na ordem certa: are / you / seeing / anyone ?",
        accept: ["are you seeing anyone", "are you seeing anyone?"],
        explanation: "Pergunta no contínuo: to be (are) → sujeito (you) → verbo-ing (seeing) → resto (anyone)."
      },
      {
        id: "a4-mc-40",
        type: "mc",
        topic: "third-person-s",
        prompt: "Qual frase está correta?",
        options: ["My uncle has two dogs.", "My uncle haves two dogs.", "My uncle have two dogs."],
        answer: "My uncle has two dogs.",
        explanation: "\"Have\" é irregular — a 3ª pessoa é \"has\", nunca \"haves\"."
      },
      {
        id: "a4-mc-41",
        type: "mc",
        topic: "third-person-s",
        prompt: "Qual é a forma correta do verbo \"finish\" com \"she\"?",
        options: ["finishes", "finishs", "finish"],
        answer: "finishes",
        explanation: "Verbos terminados em SH, CH, SS, X ou US recebem -ES na 3ª pessoa: finishes."
      },
      {
        id: "a4-mc-42",
        type: "mc",
        topic: "third-person-s",
        prompt: "Qual é a forma correta do verbo \"try\" com \"he\"?",
        options: ["tries", "trys", "try"],
        answer: "tries",
        explanation: "Verbo terminado em Y precedido de consoante troca o Y por -IES na 3ª pessoa: tries."
      },
      {
        id: "a4-mc-43",
        type: "mc",
        topic: "do-does-vs-be",
        prompt: "Qual frase está correta?",
        options: ["What does your sister do?", "What is your sister do?", "What is your sister doing do?"],
        answer: "What does your sister do?",
        explanation: "\"Does\" aqui é só auxiliar, sem significado próprio — não precisamos do verbo to be porque não estamos falando de \"ser/estar\"."
      },
      {
        id: "a4-fill-17",
        type: "fill",
        topic: "do-does-vs-be",
        prompt: "Complete: ___ your father usually finish work late? (pergunta sobre a rotina dele, sem sentido de \"ser/estar\")",
        accept: ["does"],
        explanation: "\"Do/does\" não tem significado próprio, é só auxiliar de pergunta/negativa. O verbo to be é que carrega o sentido de \"ser/estar\" — aqui não precisamos dele."
      },
      {
        id: "a4-fill-18",
        type: "fill",
        topic: "frequency-adverbs",
        prompt: "Complete: Martin ___ (usually/not/drive) to work — he prefers walking.",
        accept: ["doesn't usually drive"],
        explanation: "Ordem na negativa: auxiliar (doesn't) → advérbio de frequência (usually) → verbo principal (drive)."
      }
    ],

    passages: [
      {
        id: "a4-passage-1",
        title: "Marcelo, o programador, e uma semana diferente",
        text:
          "Marcelo is a software developer, and he thinks it's the perfect job for him — he loves " +
          "solving problems. He usually works from home and spends most of the day writing and " +
          "testing code. He believes good communication is more important than talent, so he " +
          "always listens to his teammates carefully before making a decision.\n" +
          "Marcelo's colleague, Renata, is always losing her password — it's a running joke in the " +
          "team. Marcelo isn't like that; he never forgets anything important.\n" +
          "This week, however, something is different: Marcelo is training a new employee, Paulo, " +
          "so he's spending extra hours explaining the company's systems. Right now, Marcelo is " +
          "looking at Paulo's code on the screen and thinking about the best way to fix a bug. " +
          "\"This part looks strange,\" he says. \"Are you seeing what I mean?\" Paulo nods, but he " +
          "still doesn't fully understand everything.\n" +
          "In the afternoon, they have a video call with a client in Canada. Paulo is a bit " +
          "nervous — he's never done this before — but Marcelo knows he will do fine.",
        questions: [
          {
            id: "a4-r-1",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "What does Marcelo think about his job?",
            options: ["It's the perfect job for him.", "It's boring.", "It's too stressful."],
            answer: "It's the perfect job for him.",
            explanation: "O texto diz \"he thinks it's the perfect job for him\" — \"think\" aqui é opinião (estado) → simples."
          },
          {
            id: "a4-r-2",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "Why does Marcelo always listen to his teammates before deciding?",
            options: [
              "Because he believes good communication matters more than talent.",
              "Because he doesn't trust his own judgment.",
              "Because his boss told him to."
            ],
            answer: "Because he believes good communication matters more than talent.",
            explanation: "O texto diz \"He believes good communication is more important than talent.\""
          },
          {
            id: "a4-r-3",
            type: "mc",
            topic: "continuous-always",
            prompt: "O que \"Renata is always losing her password\" sugere?",
            options: [
              "É um hábito repetitivo que incomoda (ou virou piada).",
              "Aconteceu só uma vez.",
              "É uma característica permanente e elogiosa dela."
            ],
            answer: "É um hábito repetitivo que incomoda (ou virou piada).",
            explanation: "Contínuo + \"always\" descreve algo que se repete — o texto até diz que \"é uma piada recorrente no time\"."
          },
          {
            id: "a4-r-4",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "What is different about Marcelo's week?",
            options: [
              "He's training a new employee.",
              "He's on vacation.",
              "He's working from the office for the first time."
            ],
            answer: "He's training a new employee.",
            explanation: "\"This week... Marcelo is training a new employee, Paulo\" — contínuo para uma situação temporária dessa semana."
          },
          {
            id: "a4-r-5",
            type: "mc",
            topic: "dual-meaning-verbs",
            prompt: "Em \"This part looks strange\", o que \"looks\" significa?",
            options: [
              "Parece (aparência) — verbo de estado.",
              "Está olhando para algo com os olhos — ação.",
              "Está procurando algo."
            ],
            answer: "Parece (aparência) — verbo de estado.",
            explanation: "\"Look\" no sentido de aparência é estado → simples. Seria diferente de \"looking at\", que é ação."
          },
          {
            id: "a4-r-6",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "Right now, what is Marcelo doing with Paulo's code?",
            options: [
              "He's looking at it and thinking about how to fix a bug.",
              "He's deleting it.",
              "He's ignoring it."
            ],
            answer: "He's looking at it and thinking about how to fix a bug.",
            explanation: "\"Right now, Marcelo is looking at Paulo's code... and thinking about the best way to fix a bug\" — os dois no contínuo, porque é algo acontecendo neste momento."
          }
        ]
      },
      {
        id: "a4-passage-2",
        title: "Ana e Bia trocam mensagens depois do feriado (diálogo)",
        text:
          "Ana: Hey! Sorry I didn't answer earlier — I was at the movies with my boyfriend. We " +
          "watched a really weird movie about magic.\n" +
          "Bia: No problem! How's everything? Are you still living downtown?\n" +
          "Ana: Yes, I love it there, but it's getting expensive. Anyway, guess what — I'm having a " +
          "great time these days. Work is calm and I'm learning to play the guitar!\n" +
          "Bia: That's awesome! I don't remember you liking music that much before.\n" +
          "Ana: I know, right? I think it's because my new roommate always practices at home — " +
          "she's always leaving her guitar in the living room, so I just pick it up and try.\n" +
          "Bia: Ha, that's actually a great habit to catch! Hey, are you seeing anyone these days?\n" +
          "Ana: Not really, I'm just enjoying being single for a while. What about you — do you " +
          "still work with Marcos?\n" +
          "Bia: Yes, he's a great boss, but sometimes I don't understand him — he's usually so " +
          "calm, but yesterday he was being really impatient with everyone.\n" +
          "Ana: Weird! Well, I have to go, I'm meeting a friend for coffee. Talk soon!\n" +
          "Bia: Sounds good. Listen to some good music for me! Bye!",
        questions: [
          {
            id: "a4-r-7",
            type: "mc",
            topic: "reading-comprehension",
            prompt: "Why didn't Ana answer earlier?",
            options: [
              "She was at the movies with her boyfriend.",
              "She was sleeping.",
              "She was working late."
            ],
            answer: "She was at the movies with her boyfriend.",
            explanation: "\"I was at the movies with my boyfriend. We watched a really weird movie about magic.\""
          },
          {
            id: "a4-r-8",
            type: "mc",
            topic: "dual-meaning-verbs",
            prompt: "What does \"I'm having a great time these days\" mean?",
            options: [
              "She's experiencing/enjoying good days.",
              "She owns something great.",
              "She's about to throw a party."
            ],
            answer: "She's experiencing/enjoying good days.",
            explanation: "\"Have\" no contínuo, aqui, significa vivenciar/experimentar algo bom — não tem nada a ver com posse."
          },
          {
            id: "a4-r-9",
            type: "mc",
            topic: "continuous-always",
            prompt: "\"She's always leaving her guitar in the living room\" sugere que...",
            options: [
              "É um hábito frequente da colega de quarto.",
              "Aconteceu só uma vez.",
              "A colega de quarto nunca toca guitarra."
            ],
            answer: "É um hábito frequente da colega de quarto.",
            explanation: "Contínuo + \"always\" descreve algo que se repete — aqui, sem ser uma reclamação, só reforça que é bem frequente."
          },
          {
            id: "a4-r-10",
            type: "mc",
            topic: "dual-meaning-verbs",
            prompt: "O que a pergunta de Bia, \"Are you seeing anyone these days?\", está perguntando?",
            options: [
              "Se Ana está namorando alguém.",
              "Se Ana consegue enxergar bem.",
              "Se Ana tem uma consulta marcada."
            ],
            answer: "Se Ana está namorando alguém.",
            explanation: "\"See\" no contínuo, nesse contexto, significa estar envolvido romanticamente com alguém."
          },
          {
            id: "a4-r-11",
            type: "mc",
            topic: "dual-meaning-verbs",
            prompt: "\"He was being really impatient with everyone\" significa que...",
            options: [
              "A impaciência do Marcos ontem foi algo temporário/atípico para ele.",
              "Marcos é sempre uma pessoa impaciente.",
              "Marcos não foi trabalhar ontem."
            ],
            answer: "A impaciência do Marcos ontem foi algo temporário/atípico para ele.",
            explanation: "\"Be\" no contínuo indica comportamento temporário e fora do normal — contrasta com \"he's usually so calm\"."
          },
          {
            id: "a4-r-12",
            type: "mc",
            topic: "stative-vs-dynamic",
            prompt: "Por que Ana diz \"I don't remember you liking music that much before\" e não \"I'm not remembering\"?",
            options: [
              "Porque \"remember\" é verbo de estado — nunca vai pro contínuo.",
              "Porque a frase fala do futuro.",
              "Porque \"remember\" só precisa de \"do\" em perguntas."
            ],
            answer: "Porque \"remember\" é verbo de estado — nunca vai pro contínuo.",
            explanation: "\"Remember\" é um verbo de estado (processo mental) — mesmo na negativa, fica sempre no presente simples: I don't remember."
          }
        ]
      }
    ]
  });
})();
