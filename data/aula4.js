// Aula 4 — Stative x Dynamic Verbs (verbos de estado x verbos de ação) + verbos com sentido
// duplo (think, look, see, have, be, taste) no simples x contínuo.
// Baseado nos exercícios de: aula_4_14_09_26 (worksheet "Present Simple vs. Continuous" B1-B2
// da Linguahouse — seções de stative verbs, "always" + contínuo e verbos de duplo sentido — e
// na correção de tarefa da aula ao vivo de 14/09, que revisou -es/-ies, have→has, plural
// irregular child→children, ordem da pergunta, "ever", "listen to" e "go home" sem preposição).
// Frases originais, inspiradas no material, não copiadas dos documentos.
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
      }
    ]
  });
})();
