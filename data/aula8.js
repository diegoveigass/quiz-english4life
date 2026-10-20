// Aula 8 — Pronomes: I/me/my/mine/myself, 's (posse) e this/that/these/those + listening.
// Baseado em: aula_8_19_10_26 (Murphy unidades 60-65, quadro de pronomes, aula.txt com this/that/these/those
// e os links de listening: ELLLO "Time Habits", Test-English "What are you doing?" e "How often do you...?").
// Frases e textos originais, inspirados nos exercícios da pasta.
// Listening: o áudio é gerado pela voz do navegador (campos `listen` nas perguntas e `audio` nas passagens).
(function () {
  window.QUIZ_AULAS = window.QUIZ_AULAS || [];

  window.QUIZ_AULAS.push({
    id: "aula8",
    label: "Aula 8",
    dateLabel: "19/10/2026",
    folder: "aula_8_19_10_26",

    theory: {
      title: "Pronomes pessoais, possessivos e reflexivos (+ this/that/these/those)",
      explanation:
        "Cada pessoa tem uma \"família\" de formas. O pronome sujeito (I, you, he, she, it, we, they) vem ANTES " +
        "do verbo: \"She knows Tom\". O pronome objeto (me, you, him, her, it, us, them) vem DEPOIS do verbo ou " +
        "de uma preposição: \"Tom knows her\", \"Come with us\". O possessivo adjetivo (my, your, his, her, its, " +
        "our, their) vem ANTES de um substantivo: \"my car\". O possessivo pronome (mine, yours, his, hers, ours, " +
        "theirs) substitui o substantivo: \"It's mine\". O reflexivo (myself, yourself, himself, herself, itself, " +
        "ourselves, yourselves, themselves) é usado quando sujeito e objeto são a mesma pessoa: \"He cut himself\". " +
        "Para posse também usamos 's com pessoas (Kate's camera) e \"of\" com coisas (the roof of the building). " +
        "Por fim, this/that/these/those apontam: this e these para perto, that e those para longe; this/that no " +
        "singular, these/those no plural.",
      examples: [
        { en: "I know Tom, and Tom knows me.", pt: "Eu conheço o Tom, e o Tom me conhece. (I = sujeito, me = objeto)" },
        { en: "Do you want to come with us?", pt: "Você quer vir com a gente? (depois de preposição → objeto: us)" },
        { en: "It's their car, not ours.", pt: "É o carro deles, não o nosso. (their + substantivo; ours sem substantivo)" },
        { en: "A friend of mine called me.", pt: "Uma amiga minha me ligou. (friend of mine, nunca \"of me\")" },
        { en: "She hurt herself, but he didn't hurt himself.", pt: "Ela se machucou, mas ele não se machucou. (mesma pessoa → reflexivo)" },
        { en: "Whose bag is this? — It's Julia's.", pt: "De quem é esta bolsa? — É da Julia. ('s sem o substantivo)" },
        { en: "This is my phone, and those are your keys.", pt: "Este é o meu celular, e aquelas são as suas chaves." }
      ],
      tips: [
        "Quadro das formas: I → me → my → mine → myself | you → you → your → yours → yourself | he → him → his → his → himself | she → her → her → hers → herself | it → it → its → — → itself | we → us → our → ours → ourselves | they → them → their → theirs → themselves.",
        "Sujeito antes do verbo, objeto depois do verbo OU de preposição: \"for me\", \"with them\", \"look at her\". Nunca \"for I\" nem \"with they\".",
        "my/your/his/her/our/their/its precisam de um substantivo logo depois (my keys). mine/yours/hers/ours/theirs ficam sozinhos (They're mine). Nunca \"mine keys\" nem \"It's my\".",
        "its (possessivo, sem apóstrofo) x it's (= it is / it has): The dog wagged its tail. / It's a nice dog.",
        "his serve para os dois usos (his car / the car is his). \"Her\" é adjetivo (her book) e objeto (I saw her); \"hers\" fica sozinho (the book is hers).",
        "friend of mine / a friend of his / some friends of yours: depois de \"of\" use o possessivo pronome, não \"me/him/you\".",
        "Reflexivo = mesma pessoa. They know each other = um conhece o outro (duas pessoas diferentes). They know themselves = cada um conhece a si mesmo. by myself = sozinho.",
        "yourself (uma pessoa) x yourselves (várias): Help yourself! / Help yourselves!",
        "'s para pessoas: my sister's house. Plural regular → só apóstrofo: my parents' car; my friend's house (um amigo) x my friends' house (vários). Para coisas use of: the name of this town, not \"this town's name\".",
        "Whose...? pergunta de quem é: Whose umbrella is this? / Whose is this? Resposta: It's mine. / It's Paul's.",
        "this/that/these/those: this = singular + perto; that = singular + longe; these = plural + perto; those = plural + longe. This is my pen. / Those are your keys.",
        "Listening (aula): ouça de olho em horários (at 7:30), frequência (always, usually, never) e ações em andamento (is cooking). Use \"Ouvir devagar\" quando precisar e só abra a transcrição no fim. Para mais prática, os mesmos sites da aula: ELLLO (Time Habits) e Test-English (What are you doing? / How often do you…?)."
      ]
    },

    questions: [
      // ---------- Pronome sujeito x objeto ----------
      {
        id: "a8-mc-1",
        type: "mc",
        topic: "subject-object-pronouns",
        prompt: "I don't know that man. Do you know ___ ?",
        options: ["him", "he", "his"],
        answer: "him",
        explanation: "Depois do verbo \"know\" vem o pronome OBJETO. Homem = masculino → him."
      },
      {
        id: "a8-mc-2",
        type: "mc",
        topic: "subject-object-pronouns",
        prompt: "My sister and I are tired. ___ are going to bed early.",
        options: ["We", "Us", "Our"],
        answer: "We",
        explanation: "É o sujeito da frase (antes do verbo) → we (my sister and I = nós)."
      },
      {
        id: "a8-mc-3",
        type: "mc",
        topic: "subject-object-pronouns",
        prompt: "We're going to a concert tonight. Do you want to come with ___ ?",
        options: ["us", "we", "our"],
        answer: "us",
        explanation: "Depois de preposição (with) usamos o pronome objeto → us."
      },
      {
        id: "a8-mc-4",
        type: "mc",
        topic: "subject-object-pronouns",
        prompt: "I'm talking to you. Please listen to ___ .",
        options: ["me", "I", "my"],
        answer: "me",
        explanation: "\"Listen to\" + objeto → me."
      },
      {
        id: "a8-mc-5",
        type: "mc",
        topic: "subject-object-pronouns",
        prompt: "Where are my keys? I can't find ___ .",
        options: ["them", "they", "it"],
        answer: "them",
        explanation: "Keys é plural e está no fim, como objeto → them."
      },
      {
        id: "a8-mc-6",
        type: "mc",
        topic: "subject-object-pronouns",
        prompt: "Camila loves dogs. ___ has two of them.",
        options: ["She", "Her", "Hers"],
        answer: "She",
        explanation: "Sujeito feminino antes do verbo \"has\" → she."
      },
      {
        id: "a8-mc-7",
        type: "mc",
        topic: "subject-object-pronouns",
        prompt: "They want to see me, but I don't want to see ___ .",
        options: ["them", "they", "their"],
        answer: "them",
        explanation: "\"to see\" pede objeto: them (eles/elas)."
      },
      // ---------- Possessivo adjetivo ----------
      {
        id: "a8-mc-8",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "Alice and Tom live in Recife. ___ son lives in Lisbon.",
        options: ["Their", "Them", "They"],
        answer: "Their",
        explanation: "Antes de um substantivo (son) usamos o possessivo adjetivo: their (deles)."
      },
      {
        id: "a8-mc-9",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "Rafael is washing ___ car on Sundays.",
        options: ["his", "her", "he's"],
        answer: "his",
        explanation: "O dono é Rafael (masculino) → his. \"He's\" = he is, não é possessivo."
      },
      {
        id: "a8-mc-10",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "Brazil is famous for ___ beaches and ___ food.",
        options: ["its / its", "it's / it's", "their / its"],
        answer: "its / its",
        explanation: "Brazil = it (um país). Possessivo sem apóstrofo: its. \"It's\" só quando é it is."
      },
      {
        id: "a8-mc-11",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "I saw Sarah with ___ husband at the mall.",
        options: ["her", "his", "she"],
        answer: "her",
        explanation: "O marido é da Sarah (feminino) → her husband."
      },
      {
        id: "a8-mc-12",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "We're going to invite all ___ friends to the party.",
        options: ["our", "ours", "us"],
        answer: "our",
        explanation: "Seguido de substantivo (friends) → our. \"Ours\" ficaria sozinho."
      },
      // ---------- Possessivo pronome / whose ----------
      {
        id: "a8-mc-13",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "That isn't my umbrella. ___ is blue.",
        options: ["Mine", "My", "Me"],
        answer: "Mine",
        explanation: "Sem substantivo depois → mine (= my umbrella)."
      },
      {
        id: "a8-mc-14",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "Can we use your washing machine? ___ isn't working.",
        options: ["Ours", "Our", "We"],
        answer: "Ours",
        explanation: "Ours = our washing machine; sem substantivo, usa-se o possessivo pronome."
      },
      {
        id: "a8-mc-15",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "I went to the movies with a friend ___ .",
        options: ["of mine", "of me", "of my"],
        answer: "of mine",
        explanation: "Depois de \"friend of\" vem o possessivo pronome: a friend of mine."
      },
      {
        id: "a8-mc-16",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "\"Whose bag is this?\" \"It's ___ .\" (a bolsa é da Beth)",
        options: ["hers", "her", "she's"],
        answer: "hers",
        explanation: "Sem substantivo → hers (= her bag). \"Her\" precisaria de um substantivo."
      },
      {
        id: "a8-mc-17",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "Is this book yours or ___ ?",
        options: ["mine", "my", "me"],
        answer: "mine",
        explanation: "\"Yours or mine\": os dois ficam sem substantivo."
      },
      // ---------- Reflexivos ----------
      {
        id: "a8-mc-18",
        type: "mc",
        topic: "reflexive-pronouns",
        prompt: "She fell off her bike, but she didn't hurt ___ .",
        options: ["herself", "her", "himself"],
        answer: "herself",
        explanation: "Sujeito e objeto são a mesma pessoa (she/ela mesma) → herself."
      },
      {
        id: "a8-mc-19",
        type: "mc",
        topic: "reflexive-pronouns",
        prompt: "My friends had a great time in Salvador. They enjoyed ___ .",
        options: ["themselves", "them", "each other"],
        answer: "themselves",
        explanation: "Enjoy oneself = se divertir. Plural → themselves."
      },
      {
        id: "a8-mc-20",
        type: "mc",
        topic: "reflexive-pronouns",
        prompt: "Paul and I live near ___ .",
        options: ["each other", "ourselves", "us"],
        answer: "each other",
        explanation: "Cada um mora perto do outro → each other (ação recíproca)."
      },
      {
        id: "a8-mc-21",
        type: "mc",
        topic: "reflexive-pronouns",
        prompt: "Dinner is ready! Please help ___ , everybody. (várias pessoas)",
        options: ["yourselves", "yourself", "themselves"],
        answer: "yourselves",
        explanation: "Você (plural) + reflexivo = yourselves. Uma pessoa só seria yourself."
      },
      {
        id: "a8-mc-22",
        type: "mc",
        topic: "reflexive-pronouns",
        prompt: "Which sentence means \"Eu viajei sozinho\"?",
        options: ["I travelled by myself.", "I travelled by me.", "I travelled alone myself."],
        answer: "I travelled by myself.",
        explanation: "by myself = sozinho(a). \"By me\" tem outro sentido."
      },
      // ---------- 's e of ----------
      {
        id: "a8-mc-23",
        type: "mc",
        topic: "possessive-s",
        prompt: "Julia and Paul have a son, Daniel. Julia is Daniel's ___ .",
        options: ["mother", "wife", "aunt"],
        answer: "mother",
        explanation: "Julia e Paul têm um filho, Daniel; então Julia é a mãe do Daniel. Daniel's mother = a mãe do Daniel."
      },
      {
        id: "a8-mc-24",
        type: "mc",
        topic: "possessive-s",
        prompt: "Which sentence is correct?",
        options: ["What's the name of this town?", "What's this town's name?", "What's the town name of this?"],
        answer: "What's the name of this town?",
        explanation: "Com coisas e lugares usamos \"of\", não 's."
      },
      {
        id: "a8-mc-25",
        type: "mc",
        topic: "possessive-s",
        prompt: "Two parents own the car. We say: it's my ___ car.",
        options: ["parents'", "parent's", "parents"],
        answer: "parents'",
        explanation: "Plural regular → só o apóstrofo depois do s: parents'. (parent's = de um pai/mãe.)"
      },
      {
        id: "a8-mc-26",
        type: "mc",
        topic: "possessive-s",
        prompt: "\"Whose camera is that?\" — \"It's my ___ .\"",
        options: ["brother's", "brothers", "brother is"],
        answer: "brother's",
        explanation: "It's my brother's = é do meu irmão (camera fica subentendida)."
      },
      // ---------- this/that/these/those ----------
      {
        id: "a8-mc-27",
        type: "mc",
        topic: "this-that-these-those",
        prompt: "(Segurando um lápis na mão) ___ is my pencil.",
        options: ["This", "That", "Those"],
        answer: "This",
        explanation: "Singular + perto → this."
      },
      {
        id: "a8-mc-28",
        type: "mc",
        topic: "this-that-these-those",
        prompt: "(Apontando para duas casas do outro lado da rua) ___ are my cousins' houses.",
        options: ["Those", "These", "That"],
        answer: "Those",
        explanation: "Plural + longe → those."
      },
      {
        id: "a8-mc-29",
        type: "mc",
        topic: "this-that-these-those",
        prompt: "(Tocando em seus sapatos novos) How do you like ___ shoes?",
        options: ["these", "this", "that"],
        answer: "these",
        explanation: "Shoes é plural e está perto → these."
      },
      {
        id: "a8-mc-30",
        type: "mc",
        topic: "this-that-these-those",
        prompt: "(Apontando para um carro lá longe) Is ___ your car?",
        options: ["that", "this", "these"],
        answer: "that",
        explanation: "Singular + longe → that."
      },
      // ---------- Listening: frase curta ----------
      {
        id: "a8-l-1",
        type: "mc",
        topic: "listening-sentences",
        listen: "I don't know her, but my brother works with her.",
        prompt: "Ouça. Quem trabalha com ela?",
        options: ["O irmão do falante", "O falante", "A irmã do falante"],
        answer: "O irmão do falante",
        explanation: "\"My brother works with her\" — o falante não conhece a mulher, mas o irmão dele trabalha com ela."
      },
      {
        id: "a8-l-2",
        type: "mc",
        topic: "listening-sentences",
        listen: "Whose keys are these? They aren't mine.",
        prompt: "Ouça. As chaves são do falante?",
        options: ["Não", "Sim", "Não dá para saber"],
        answer: "Não",
        explanation: "\"They aren't mine\" = não são minhas."
      },
      {
        id: "a8-l-3",
        type: "fill",
        topic: "listening-sentences",
        listen: "We always have lunch with them on Sundays.",
        prompt: "Ouça e escreva o pronome que vem depois de \"with\":",
        accept: ["them"],
        explanation: "Depois de preposição (with) usa-se o pronome objeto: with them."
      },
      {
        id: "a8-l-4",
        type: "fill",
        topic: "listening-sentences",
        listen: "She never takes the bus. She walks to work by herself.",
        prompt: "Ouça e escreva a palavra que aparece depois de \"by\":",
        accept: ["herself"],
        explanation: "by herself = sozinha."
      },
      {
        id: "a8-l-5",
        type: "mc",
        topic: "listening-time-habits",
        listen: "I usually wake up at six, but on Saturdays I get up at nine.",
        prompt: "Ouça. A que horas a pessoa acorda aos sábados?",
        options: ["9:00", "6:00", "7:30"],
        answer: "9:00",
        explanation: "Usually = 6h (hábito); on Saturdays = 9h."
      },
      {
        id: "a8-l-6",
        type: "mc",
        topic: "listening-time-habits",
        listen: "My brother never drinks coffee. He prefers tea in the morning.",
        prompt: "Ouça. Com que frequência o irmão toma café?",
        options: ["Nunca", "Sempre", "Às vezes"],
        answer: "Nunca",
        explanation: "\"Never\" = nunca."
      },
      {
        id: "a8-l-7",
        type: "fill",
        topic: "listening-now",
        listen: "Sorry, I can't talk right now. I'm cooking dinner.",
        prompt: "Ouça e escreva o que a pessoa está fazendo (2 palavras, ex.: \"watching tv\"):",
        accept: ["cooking dinner"],
        explanation: "I'm cooking dinner = estou preparando o jantar (presente contínuo)."
      },
      {
        id: "a8-l-8",
        type: "mc",
        topic: "listening-now",
        listen: "Listen! The kids are playing in the garden, and our dog is sleeping under the table.",
        prompt: "Ouça. Onde o cachorro está dormindo?",
        options: ["Debaixo da mesa", "No jardim", "No sofá"],
        answer: "Debaixo da mesa",
        explanation: "\"Our dog is sleeping under the table\"; as crianças é que estão no jardim."
      },
      // ---------- Lacunas ----------
      {
        id: "a8-fill-1",
        type: "fill",
        topic: "subject-object-pronouns",
        prompt: "I don't like horror movies. I'm afraid of ___ .",
        accept: ["them"],
        explanation: "Depois da preposição \"of\", plural → them."
      },
      {
        id: "a8-fill-2",
        type: "fill",
        topic: "subject-object-pronouns",
        prompt: "Maria likes music. ___ plays the piano every evening.",
        accept: ["she"],
        explanation: "Sujeito feminino → she."
      },
      {
        id: "a8-fill-3",
        type: "fill",
        topic: "subject-object-pronouns",
        prompt: "This letter is for Bill. Can you give it to ___ ?",
        accept: ["him"],
        explanation: "Depois de \"to\" → objeto: him."
      },
      {
        id: "a8-fill-4",
        type: "fill",
        topic: "possessive-adjectives",
        prompt: "John has a sister. ___ sister is 21 years old.",
        accept: ["his"],
        explanation: "Possessivo de John + substantivo (sister) → his."
      },
      {
        id: "a8-fill-5",
        type: "fill",
        topic: "possessive-adjectives",
        prompt: "I'm going to wash ___ hair before I go out.",
        accept: ["my"],
        explanation: "I → my + substantivo (hair)."
      },
      {
        id: "a8-fill-6",
        type: "fill",
        topic: "possessive-pronouns",
        prompt: "It's our money. It's ___ .",
        accept: ["ours"],
        explanation: "our + substantivo → ours (sem substantivo)."
      },
      {
        id: "a8-fill-7",
        type: "fill",
        topic: "possessive-pronouns",
        prompt: "They're her shoes. They're ___ .",
        accept: ["hers"],
        explanation: "her + substantivo → hers (sozinho)."
      },
      {
        id: "a8-fill-8",
        type: "fill",
        topic: "reflexive-pronouns",
        prompt: "I'm not angry with you. I'm angry with ___ .",
        accept: ["myself"],
        explanation: "Eu comigo mesmo → myself."
      },
      {
        id: "a8-fill-9",
        type: "fill",
        topic: "reflexive-pronouns",
        prompt: "Kate and Helen are good friends. They know ___ well.",
        accept: ["each other"],
        explanation: "Uma conhece a outra → each other."
      },
      {
        id: "a8-fill-10",
        type: "fill",
        topic: "possessive-s",
        prompt: "\"Whose umbrella is this?\" \"It's my ___ .\" (mother)",
        accept: ["mother's", "mothers'"],
        explanation: "Dona = a mãe → mother's (umbrella subentendido)."
      },
      // ---------- Achar o erro ----------
      {
        id: "a8-mc-31",
        type: "mc",
        topic: "error-pronouns",
        prompt: "Qual frase está ERRADA?",
        options: ["I went to the movies with a friend of me.", "She gave me her umbrella.", "It's their problem, not ours."],
        answer: "I went to the movies with a friend of me.",
        explanation: "O certo é \"a friend of mine\" (possessivo pronome depois de of)."
      },
      {
        id: "a8-mc-32",
        type: "mc",
        topic: "error-pronouns",
        prompt: "Qual frase está CORRETA?",
        options: ["The dog is eating its food.", "The dog is eating it's food.", "The dog is eating their food."],
        answer: "The dog is eating its food.",
        explanation: "Possessivo de it = its (sem apóstrofo). It's = it is."
      },
      {
        id: "a8-mc-33",
        type: "mc",
        topic: "error-pronouns",
        prompt: "Qual frase está ERRADA?",
        options: ["Is this you book?", "Is this your book?", "Is this book yours?"],
        answer: "Is this you book?",
        explanation: "Antes de substantivo → your (não you)."
      },
      // ---------- Ligar colunas ----------
      {
        id: "a8-match-1",
        type: "match",
        topic: "pronoun-families",
        prompt: "Ligue cada pronome sujeito ao pronome objeto correspondente:",
        pairs: [
          { left: "I", right: "me" },
          { left: "he", right: "him" },
          { left: "she", right: "her" },
          { left: "we", right: "us" },
          { left: "they", right: "them" }
        ],
        explanation: "Sujeito → objeto: I/me, he/him, she/her, we/us, they/them."
      },
      {
        id: "a8-match-2",
        type: "match",
        topic: "pronoun-families",
        prompt: "Ligue cada possessivo adjetivo ao possessivo pronome:",
        pairs: [
          { left: "my", right: "mine" },
          { left: "our", right: "ours" },
          { left: "your", right: "yours" },
          { left: "her", right: "hers" },
          { left: "their", right: "theirs" }
        ],
        explanation: "my/mine, our/ours, your/yours, her/hers, their/theirs. (his e its não mudam.)"
      },
      {
        id: "a8-match-3",
        type: "match",
        topic: "reflexive-pronouns",
        prompt: "Ligue cada sujeito ao reflexivo:",
        pairs: [
          { left: "I", right: "myself" },
          { left: "he", right: "himself" },
          { left: "she", right: "herself" },
          { left: "we", right: "ourselves" },
          { left: "they", right: "themselves" }
        ],
        explanation: "Reflexivos terminam em -self (singular) ou -selves (plural)."
      },
      {
        id: "a8-match-4",
        type: "match",
        topic: "this-that-these-those",
        prompt: "Ligue cada palavra à situação:",
        pairs: [
          { left: "this", right: "singular + perto" },
          { left: "that", right: "singular + longe" },
          { left: "these", right: "plural + perto" },
          { left: "those", right: "plural + longe" }
        ],
        explanation: "Anotação da aula: this/that no singular; these/those no plural; perto = this/these, longe = that/those."
      },
      // ---------- Várias lacunas ----------
      {
        id: "a8-multi-1",
        type: "multi",
        topic: "subject-object-pronouns",
        prompt: "Complete com I / me / he / him / she / her / we / us / they / them:",
        blanks: [
          { label: "\"I know Tom, and Tom knows ___ .\"", accept: ["me"] },
          { label: "\"We know Tom, and Tom knows ___ .\"", accept: ["us"] },
          { label: "\"Those girls are nice. Do you know ___ ?\"", accept: ["them"] },
          { label: "\"Where's Amanda? Have you seen ___ ?\"", accept: ["her"] },
          { label: "\"David is late, and ___ isn't answering his phone.\"", accept: ["he"] }
        ],
        explanation: "Antes do verbo = sujeito (he). Depois do verbo = objeto (me, us, them, her)."
      },
      {
        id: "a8-multi-2",
        type: "multi",
        topic: "possessive-adjectives",
        prompt: "Complete com my / your / his / her / our / their:",
        blanks: [
          { label: "\"I gave him ___ address, and he gave me his.\"", accept: ["my"] },
          { label: "\"Sarah lives with ___ parents.\"", accept: ["her"] },
          { label: "\"Tom and Eva love ___ new house.\"", accept: ["their"] },
          { label: "\"We invited ___ neighbors to dinner.\"", accept: ["our"] },
          { label: "\"Do you know ___ phone number?\" (do Fábio)", accept: ["his"] }
        ],
        explanation: "Cada possessivo concorda com o DONO (não com a coisa) e vem antes de um substantivo."
      },
      {
        id: "a8-multi-3",
        type: "multi",
        topic: "this-that-these-those",
        prompt: "Complete com this / that / these / those:",
        blanks: [
          { label: "\"___ is my coffee.\" (na sua mão)", accept: ["this"] },
          { label: "\"___ are my glasses.\" (no seu rosto, vários)", accept: ["these"] },
          { label: "\"___ is a nice building.\" (do outro lado da rua)", accept: ["that"] },
          { label: "\"___ are your friends over there.\" (longe, vários)", accept: ["those"] }
        ],
        explanation: "Perto: this (1) / these (vários). Longe: that (1) / those (vários)."
      }
    ],

    passages: [
      // ---------- Listening 1: rotina (inspirado em "Time Habits") ----------
      {
        id: "a8-passage-1",
        title: "Listening: What time do you get up? (Ana e Pedro)",
        audio:
          "Ana: Pedro, what time do you get up? " +
          "Pedro: Early. I wake up at 5:30, but I stay in bed for ten minutes. It's a bad habit. " +
          "Ana: I always get up at seven. Then I have breakfast with my sister at 7:30. " +
          "Pedro: I never eat breakfast at home. I usually buy a coffee and a sandwich near my office. " +
          "Ana: When do you start work? " +
          "Pedro: At eight. And I finish at five. Then I go to the gym, and I get home around eight. " +
          "Ana: Wow! I finish at four, and I go to bed at ten. But on weekends I sleep until nine.",
        questions: [
          {
            id: "a8-lp1-1",
            type: "mc",
            topic: "listening-time-habits",
            prompt: "What time does Pedro wake up?",
            options: ["5:30", "7:00", "8:00"],
            answer: "5:30",
            explanation: "Pedro diz \"I wake up at 5:30\"."
          },
          {
            id: "a8-lp1-2",
            type: "mc",
            topic: "listening-time-habits",
            prompt: "Where does Pedro usually have breakfast?",
            options: ["Near his office", "At home", "With his sister"],
            answer: "Near his office",
            explanation: "Ele nunca come em casa; compra café e sanduíche perto do escritório."
          },
          {
            id: "a8-lp1-3",
            type: "mc",
            topic: "listening-time-habits",
            prompt: "What time does Ana have breakfast?",
            options: ["7:30", "7:00", "10:00"],
            answer: "7:30",
            explanation: "Ana levanta às 7h e toma café às 7:30, com a irmã."
          },
          {
            id: "a8-lp1-4",
            type: "fill",
            topic: "listening-time-habits",
            prompt: "What time does Pedro finish work? (ex.: 3)",
            accept: ["5", "five", "5:00", "5 pm", "5pm"],
            explanation: "\"I finish at five\"."
          }
        ]
      },
      // ---------- Listening 2: What are you doing? ----------
      {
        id: "a8-passage-2",
        title: "Listening: What are you doing? (ligação)",
        audio:
          "Lia: Hi, Marco! What are you doing? " +
          "Marco: Hi, Lia. I'm cooking dinner right now. My parents are visiting us tonight. " +
          "Lia: Oh nice! Is your sister helping you? " +
          "Marco: No, she isn't. She's talking to her friends on the phone. And my brother is watching TV. " +
          "Lia: And what about the dog? " +
          "Marco: Our dog is sleeping under the table. Why are you asking? " +
          "Lia: I'm standing outside your house. This bag is for you, but I think nobody is listening to the bell!",
        questions: [
          {
            id: "a8-lp2-1",
            type: "mc",
            topic: "listening-now",
            prompt: "What is Marco doing?",
            options: ["Cooking dinner", "Watching TV", "Talking on the phone"],
            answer: "Cooking dinner",
            explanation: "\"I'm cooking dinner right now.\""
          },
          {
            id: "a8-lp2-2",
            type: "mc",
            topic: "listening-now",
            prompt: "Who is visiting Marco tonight?",
            options: ["His parents", "His friends", "Lia"],
            answer: "His parents",
            explanation: "\"My parents are visiting us tonight.\""
          },
          {
            id: "a8-lp2-3",
            type: "mc",
            topic: "listening-now",
            prompt: "What is Marco's sister doing?",
            options: ["Talking to her friends", "Helping him cook", "Sleeping"],
            answer: "Talking to her friends",
            explanation: "\"She's talking to her friends on the phone.\" Her = da irmã."
          },
          {
            id: "a8-lp2-4",
            type: "mc",
            topic: "listening-now",
            prompt: "Where is Lia?",
            options: ["Outside Marco's house", "At home", "At the gym"],
            answer: "Outside Marco's house",
            explanation: "\"I'm standing outside your house.\""
          }
        ]
      },
      // ---------- Listening 3: How often...? ----------
      {
        id: "a8-passage-3",
        title: "Listening: How often do you...? (entrevista)",
        audio:
          "Interviewer: Clara, how often do you go to the gym? " +
          "Clara: I go three times a week, usually on Monday, Wednesday and Friday. " +
          "Interviewer: And how often do you cook dinner? " +
          "Clara: Almost every day. I rarely order food, because I like cooking for myself. " +
          "Interviewer: Do you ever eat out with friends? " +
          "Clara: Sometimes. We go to a restaurant once a month. They always choose the place, and I always pay for our drinks. " +
          "Interviewer: Do you watch TV in the evening? " +
          "Clara: Hardly ever. I prefer reading a book.",
        questions: [
          {
            id: "a8-lp3-1",
            type: "mc",
            topic: "listening-frequency",
            prompt: "How often does Clara go to the gym?",
            options: ["Three times a week", "Every day", "Once a month"],
            answer: "Three times a week",
            explanation: "\"I go three times a week.\""
          },
          {
            id: "a8-lp3-2",
            type: "mc",
            topic: "listening-frequency",
            prompt: "How often does Clara order food?",
            options: ["Rarely", "Often", "Always"],
            answer: "Rarely",
            explanation: "\"I rarely order food\" = raramente."
          },
          {
            id: "a8-lp3-3",
            type: "mc",
            topic: "listening-frequency",
            prompt: "How often does Clara eat out with friends?",
            options: ["Once a month", "Once a week", "Every day"],
            answer: "Once a month",
            explanation: "\"We go to a restaurant once a month.\""
          },
          {
            id: "a8-lp3-4",
            type: "mc",
            topic: "listening-frequency",
            prompt: "What does Clara prefer to do in the evening?",
            options: ["Read a book", "Watch TV", "Go out"],
            answer: "Read a book",
            explanation: "Hardly ever watches TV; prefere ler um livro."
          },
          {
            id: "a8-lp3-5",
            type: "mc",
            topic: "subject-object-pronouns",
            prompt: "In the sentence \"They always choose the place\", who is \"they\"?",
            options: ["Clara's friends", "Clara and the interviewer", "The restaurant"],
            answer: "Clara's friends",
            explanation: "\"They\" retoma \"friends\" (we = Clara e os amigos; they = os amigos que escolhem)."
          }
        ]
      },
      // ---------- Leitura (sem áudio) ----------
      {
        id: "a8-passage-4",
        title: "Leitura: Uma festa em família",
        text:
          "It's Saturday, and Lucas is preparing a party for his grandmother's birthday. His cousins are bringing " +
          "their guitars, and his aunt is making a big cake herself. \"Whose balloons are these?\" Lucas asks. " +
          "\"They're mine,\" says his sister Bia. \"I bought them yesterday with a friend of mine.\" Lucas's " +
          "grandmother loves parties, but she doesn't like loud music. \"Please give her a chair near the window,\" " +
          "Lucas says to Bia. \"She can see us from there, and we can see her.\" At night, everyone sings together " +
          "and enjoys themselves.",
        questions: [
          {
            id: "a8-r-1",
            type: "mc",
            topic: "reading-pronouns",
            prompt: "Whose balloons are they?",
            options: ["Bia's", "Lucas's", "The aunt's"],
            answer: "Bia's",
            explanation: "\"They're mine,\" says his sister Bia."
          },
          {
            id: "a8-r-2",
            type: "mc",
            topic: "reading-pronouns",
            prompt: "In \"Please give her a chair\", who is \"her\"?",
            options: ["The grandmother", "Bia", "The aunt"],
            answer: "The grandmother",
            explanation: "Her = a avó, que não gosta de música alta e vai sentar perto da janela."
          },
          {
            id: "a8-r-3",
            type: "mc",
            topic: "reading-pronouns",
            prompt: "Who is making the cake?",
            options: ["Lucas's aunt", "Lucas's cousins", "Bia"],
            answer: "Lucas's aunt",
            explanation: "\"His aunt is making a big cake herself\" (herself = ela mesma)."
          },
          {
            id: "a8-r-4",
            type: "fill",
            topic: "reading-pronouns",
            prompt: "Complete (uma palavra): \"His cousins are bringing ___ guitars.\"",
            accept: ["their"],
            explanation: "Os primos (they) → their guitars."
          }
        ]
      }
    ]
  });
})();
