// Aula 9 — Possessivos: possessive adjectives (my, your, his...) x possessive pronouns (mine, yours, his...)
// Baseado em: aula_9_26_10_26 (quadro "Personal Pronouns Chart" com as 5 colunas — subjective, objective,
// possessive adjective, possessive pronoun, reflexive — e os links de Test-English (A1 possessive adjectives)
// e Perfect English Grammar (possessive pronouns and possessive adjectives exercise 1)).
// Frases e textos originais, inspirados nos exercícios da pasta.
(function () {
  window.QUIZ_AULAS = window.QUIZ_AULAS || [];

  window.QUIZ_AULAS.push({
    id: "aula9",
    label: "Aula 9",
    dateLabel: "26/10/2026",
    folder: "aula_9_26_10_26",

    theory: {
      title: "Possessivos: my x mine, your x yours, her x hers",
      explanation:
        "Em inglês existem duas formas de possessivo. O possessive adjective (my, your, his, her, its, " +
        "our, their) vem SEMPRE antes de um substantivo: my car, their house. O possessive pronoun " +
        "(mine, yours, his, hers, ours, theirs) fica SOZINHO, no lugar do substantivo, para não repetir: " +
        "\"This car is mine\" (= my car). Os dois concordam com o DONO, e não com a coisa possuída — " +
        "por isso \"Ana and her brother\" (o dono é a Ana → her), mesmo o irmão sendo homem. " +
        "O quadro completo tem 5 colunas: sujeito (I), objeto (me), possessive adjective (my), " +
        "possessive pronoun (mine) e reflexivo (myself).",
      examples: [
        { en: "This is my phone. That one is yours.", pt: "Este é o meu celular. Aquele é o seu (= your phone)." },
        { en: "Is this bag hers or his?", pt: "Essa bolsa é dela ou dele? (sozinhos, sem substantivo depois)" },
        { en: "Paulo lives with his sister and her husband.", pt: "Paulo mora com a irmã dele e o marido dela (cada possessivo segue o seu dono)." },
        { en: "The company changed its logo.", pt: "A empresa mudou o logotipo dela (its, sem apóstrofo)." },
        { en: "Our flat is small, but theirs is huge.", pt: "Nosso apartamento é pequeno, mas o deles é enorme." },
        { en: "Whose keys are these? — They're mine.", pt: "De quem são essas chaves? — São minhas." },
        { en: "She's a friend of mine.", pt: "Ela é uma amiga minha (a friend of + possessive pronoun)." }
      ],
      tips: [
        "Teste rápido: tem substantivo logo depois? → my/your/her/our/their. Não tem? → mine/yours/hers/ours/theirs.",
        "His é igual nas duas colunas (his car / the car is his). Its quase nunca é usado sozinho — prefira \"its\" antes de substantivo.",
        "Nenhum possessivo leva apóstrofo: its, yours, hers, ours, theirs. Com apóstrofo é contração: it's = it is, who's = who is.",
        "Pares que soam igual: its x it's, your x you're, their x there x they're, whose x who's.",
        "\"Seu/sua\" do português é ambíguo — em inglês escolha pelo dono: dele = his, dela = her, de você = your, deles/delas = their.",
        "Partes do corpo e roupas levam possessivo, não \"the\": I broke my arm, she washed her hair, put your coat on.",
        "Nunca use artigo junto com o possessivo: \"the my car\" está errado → my car. E \"a friend of mine\", não \"a friend of me\".",
        "Para dizer \"meu próprio\", use own depois do possessivo: my own room, their own business."
      ]
    },

    questions: [
      // ---- Possessive adjectives (antes do substantivo) ----
      {
        id: "a9-mc-1",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "Larissa is talking to ___ grandmother on the phone.",
        options: ["her", "his", "hers"],
        answer: "her",
        explanation: "A dona é a Larissa (she) e vem um substantivo depois (grandmother) → possessive adjective \"her\"."
      },
      {
        id: "a9-mc-2",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "Mr. and Mrs. Costa sold ___ old car last week.",
        options: ["their", "there", "they're"],
        answer: "their",
        explanation: "Os donos são \"Mr. and Mrs. Costa\" (they) → their + substantivo. \"There\" = lá/há; \"they're\" = they are."
      },
      {
        id: "a9-mc-3",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "The cat is sleeping in ___ basket.",
        options: ["its", "it's", "his"],
        answer: "its",
        explanation: "Animal sem gênero definido = it → possessivo \"its\" (sem apóstrofo). \"It's\" é \"it is\"."
      },
      {
        id: "a9-mc-4",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "We love ___ new neighbours. They're very friendly.",
        options: ["our", "ours", "us"],
        answer: "our",
        explanation: "Sujeito \"we\" e substantivo depois (neighbours) → our. \"Ours\" fica sozinho; \"us\" é objeto."
      },
      {
        id: "a9-mc-5",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "Excuse me, is this ___ umbrella? I found it under the table.",
        options: ["your", "you're", "yours"],
        answer: "your",
        explanation: "Vem substantivo depois (umbrella) → your. \"You're\" = you are; \"yours\" não aceita substantivo depois."
      },
      {
        id: "a9-mc-6",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "Rodrigo always forgets ___ password.",
        options: ["his", "her", "its"],
        answer: "his",
        explanation: "O dono é Rodrigo (he) → his."
      },
      {
        id: "a9-mc-7",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "Fernanda and ___ brother are going to the concert.",
        options: ["her", "his", "their"],
        answer: "her",
        explanation: "O possessivo concorda com o dono (Fernanda → her), não com a pessoa possuída (o irmão). Erro comum: usar \"his\" porque irmão é homem."
      },
      {
        id: "a9-mc-8",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "I hurt ___ back at the gym yesterday.",
        options: ["my", "the", "mine"],
        answer: "my",
        explanation: "Com partes do corpo o inglês usa possessivo, não artigo: I hurt my back (em português: \"machuquei as costas\")."
      },
      {
        id: "a9-mc-9",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "The children are doing ___ homework in the kitchen.",
        options: ["their", "his", "theirs"],
        answer: "their",
        explanation: "\"The children\" = they → their + substantivo (homework)."
      },
      {
        id: "a9-mc-10",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "This hotel is famous for ___ swimming pool.",
        options: ["its", "it's", "their"],
        answer: "its",
        explanation: "O dono é \"this hotel\" (it) → its. Lembre: possessivo nunca tem apóstrofo."
      },
      {
        id: "a9-fill-1",
        type: "fill",
        topic: "possessive-adjectives",
        prompt: "Complete com o possessivo: \"I have a dog. ___ name is Pipoca.\"",
        accept: ["its", "his", "her"],
        explanation: "Para animal, o normal é \"its\" (it). Se você trata o cachorro como alguém da família, \"his\"/\"her\" também é aceito."
      },
      {
        id: "a9-fill-2",
        type: "fill",
        topic: "possessive-adjectives",
        prompt: "Complete: \"Thiago and I are brothers. ___ parents live in Natal.\"",
        accept: ["our"],
        explanation: "\"Thiago and I\" = we → our."
      },
      {
        id: "a9-fill-3",
        type: "fill",
        topic: "possessive-adjectives",
        prompt: "Complete: \"Clara, is that ___ jacket on the chair?\"",
        accept: ["your"],
        explanation: "Falando com a Clara (you) e com substantivo depois (jacket) → your."
      },
      {
        id: "a9-fill-4",
        type: "fill",
        topic: "possessive-adjectives",
        prompt: "Complete: \"My aunt works from home. ___ office is in the living room.\"",
        accept: ["her"],
        explanation: "Aunt = she → her + office."
      },

      // ---- Possessive pronouns (sozinhos) ----
      {
        id: "a9-mc-11",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "That isn't my coffee. ___ is the one with milk.",
        options: ["Mine", "My", "Me"],
        answer: "Mine",
        explanation: "Não tem substantivo depois — \"mine\" substitui \"my coffee\"."
      },
      {
        id: "a9-mc-12",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "Is this notebook Marina's? — Yes, it's ___.",
        options: ["hers", "her", "her's"],
        answer: "hers",
        explanation: "Sozinho no fim da frase → possessive pronoun \"hers\". Sem apóstrofo: \"her's\" não existe."
      },
      {
        id: "a9-mc-13",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "Our garden is small, but ___ is enormous. (dos vizinhos)",
        options: ["theirs", "their", "they"],
        answer: "theirs",
        explanation: "\"Theirs\" = their garden. Como não repetimos o substantivo, usamos a forma sozinha."
      },
      {
        id: "a9-mc-14",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "You can't take that charger — it's ___! I need it.",
        options: ["mine", "my", "myself"],
        answer: "mine",
        explanation: "Fim da frase, sem substantivo → mine."
      },
      {
        id: "a9-mc-15",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "I've got my ticket. Have you got ___?",
        options: ["yours", "your", "you"],
        answer: "yours",
        explanation: "\"Yours\" = your ticket. \"Your\" precisaria de um substantivo logo depois."
      },
      {
        id: "a9-mc-16",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "This isn't Pedro's bike. ___ is red.",
        options: ["His", "Him", "He's"],
        answer: "His",
        explanation: "\"His\" serve nas duas colunas: his bike / the bike is his. Aqui está sozinho, = his bike."
      },
      {
        id: "a9-mc-17",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "Those seats aren't free. They're ___. (nossos)",
        options: ["ours", "our", "us"],
        answer: "ours",
        explanation: "Sozinho, sem substantivo → ours."
      },
      {
        id: "a9-mc-18",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "___ phone is ringing? — I think it's Lucas's.",
        options: ["Whose", "Who's", "Who"],
        answer: "Whose",
        explanation: "\"Whose\" pergunta \"de quem\". \"Who's\" é contração de \"who is\"."
      },
      {
        id: "a9-mc-19",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "Camila is an old friend of ___.",
        options: ["mine", "me", "my"],
        answer: "mine",
        explanation: "Estrutura fixa: a friend of + possessive pronoun → a friend of mine / of yours / of hers."
      },
      {
        id: "a9-fill-5",
        type: "fill",
        topic: "possessive-pronouns",
        prompt: "Complete com o possessive pronoun: \"These aren't your keys. They're ___ .\" (meus)",
        accept: ["mine"],
        explanation: "my keys → mine."
      },
      {
        id: "a9-fill-6",
        type: "fill",
        topic: "possessive-pronouns",
        prompt: "Complete: \"Is this pizza for you and Bruno? — Yes, it's ___ .\"",
        accept: ["ours"],
        explanation: "\"You and Bruno\" responde como \"we\" → our pizza → ours."
      },
      {
        id: "a9-fill-7",
        type: "fill",
        topic: "possessive-pronouns",
        prompt: "Complete: \"My sister's room is tidy, but ___ is a mess.\" (o do meu irmão)",
        accept: ["his"],
        explanation: "his room → his (igual nas duas formas)."
      },
      {
        id: "a9-fill-8",
        type: "fill",
        topic: "possessive-pronouns",
        prompt: "Reescreva sem repetir o substantivo: \"This is their table.\" → \"This table is ___ .\"",
        accept: ["theirs"],
        explanation: "their table → theirs."
      },

      // ---- Adjetivo x pronome na mesma frase ----
      {
        id: "a9-mc-20",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "Can I borrow ___ pen? I left ___ at home.",
        options: ["your / mine", "yours / my", "your / my"],
        answer: "your / mine",
        explanation: "\"Your pen\" (com substantivo) e \"mine\" sozinho (= my pen)."
      },
      {
        id: "a9-mc-21",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "Julia's hair is long, and ___ sister's is short. Actually, ___ is even shorter than mine.",
        options: ["her / hers", "hers / her", "her / her"],
        answer: "her / hers",
        explanation: "\"Her sister\" (antes de substantivo) e \"hers\" sozinho no lugar de \"her hair\"."
      },
      {
        id: "a9-mc-22",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "They showed us ___ photos, and we showed them ___.",
        options: ["their / ours", "theirs / our", "their / our"],
        answer: "their / ours",
        explanation: "\"Their photos\" (com substantivo) e \"ours\" sozinho (= our photos)."
      },
      {
        id: "a9-fill-9",
        type: "fill",
        topic: "possessive-pronouns",
        prompt: "Complete com your ou yours: \"This bag is mine, and that one is ___ .\"",
        accept: ["yours"],
        explanation: "Sem substantivo depois → yours."
      },
      {
        id: "a9-fill-10",
        type: "fill",
        topic: "possessive-adjectives",
        prompt: "Complete com our ou ours: \"___ flight leaves at 9, but theirs leaves at 11.\"",
        accept: ["our"],
        explanation: "Vem substantivo (flight) → our."
      },
      {
        id: "a9-multi-1",
        type: "multi",
        topic: "possessive-pronouns",
        prompt: "Complete com a forma certa (adjective ou pronoun):",
        blanks: [
          { label: "\"Whose glasses are these? Are they ___ ?\" (seus — de você)", accept: ["yours"] },
          { label: "\"No, ___ glasses are in my bag.\" (meus)", accept: ["my"] },
          { label: "\"Maybe they're Sofia's. She lost ___ yesterday.\"", accept: ["hers"] },
          { label: "\"I'll call ___ mum and ask.\" (da Sofia)", accept: ["her"] }
        ],
        explanation: "Substantivo depois → my/her. Sozinho → yours/hers (= your glasses / her glasses)."
      },
      {
        id: "a9-multi-2",
        type: "multi",
        topic: "possessive-adjectives",
        prompt: "Complete com its / it's, your / you're, their / there / they're:",
        blanks: [
          { label: "\"___ raining, take an umbrella.\"", accept: ["it's", "it is"] },
          { label: "\"The dog hurt ___ paw.\"", accept: ["its"] },
          { label: "\"___ late again! The class started at 7.\" (você está)", accept: ["you're", "you are"] },
          { label: "\"Is this ___ seat?\"", accept: ["your"] },
          { label: "\"The kids left ___ toys in the car.\"", accept: ["their"] },
          { label: "\"___ is a café near the station.\"", accept: ["there"] }
        ],
        explanation: "Com apóstrofo é contração (it's = it is, you're = you are, they're = they are). Possessivo nunca tem apóstrofo (its, your, their). \"There\" = há/lá."
      },

      // ---- Quadro completo: sujeito / objeto / possessivos / reflexivo ----
      {
        id: "a9-match-1",
        type: "match",
        topic: "pronoun-families",
        prompt: "Ligue cada possessive adjective ao possessive pronoun:",
        pairs: [
          { left: "my", right: "mine" },
          { left: "your", right: "yours" },
          { left: "her", right: "hers" },
          { left: "our", right: "ours" },
          { left: "their", right: "theirs" },
          { left: "his", right: "his" }
        ],
        explanation: "A maioria só ganha -s (yours, hers, ours, theirs); my → mine é irregular; his não muda."
      },
      {
        id: "a9-match-2",
        type: "match",
        topic: "pronoun-families",
        prompt: "Ligue cada pronome sujeito ao seu reflexivo:",
        pairs: [
          { left: "we", right: "ourselves" },
          { left: "she", right: "herself" },
          { left: "it", right: "itself" },
          { left: "they", right: "themselves" },
          { left: "you (plural)", right: "yourselves" }
        ],
        explanation: "No plural o reflexivo termina em -selves (ourselves, yourselves, themselves); no singular, em -self."
      },
      {
        id: "a9-match-3",
        type: "match",
        topic: "pronoun-families",
        prompt: "Classifique cada palavra pela coluna do quadro:",
        pairs: [
          { left: "them", right: "objective" },
          { left: "ours", right: "possessive pronoun" },
          { left: "their", right: "possessive adjective" },
          { left: "himself", right: "reflexive" },
          { left: "we", right: "subjective" },
          { left: "me", right: "objective" }
        ],
        explanation: "Subjective = quem faz (we); objective = quem recebe (me, them); possessive adjective vai antes do substantivo (their); possessive pronoun fica sozinho (ours); reflexive termina em -self/-selves."
      },
      {
        id: "a9-multi-3",
        type: "multi",
        topic: "pronoun-families",
        prompt: "Complete a linha do quadro para \"they\":",
        blanks: [
          { label: "Objective", accept: ["them"] },
          { label: "Possessive adjective", accept: ["their"] },
          { label: "Possessive pronoun", accept: ["theirs"] },
          { label: "Reflexive", accept: ["themselves"] }
        ],
        explanation: "they → them → their → theirs → themselves."
      },
      {
        id: "a9-multi-4",
        type: "multi",
        topic: "pronoun-families",
        prompt: "Complete a linha do quadro para \"she\":",
        blanks: [
          { label: "Objective", accept: ["her"] },
          { label: "Possessive adjective", accept: ["her"] },
          { label: "Possessive pronoun", accept: ["hers"] },
          { label: "Reflexive", accept: ["herself"] }
        ],
        explanation: "she → her → her → hers → herself. Repare que \"her\" aparece em duas colunas (objeto e possessive adjective)."
      },
      {
        id: "a9-mc-23",
        type: "mc",
        topic: "subject-object-pronouns",
        prompt: "In \"I saw her at the bus stop\", the word \"her\" is...",
        options: ["an object pronoun", "a possessive adjective", "a possessive pronoun"],
        answer: "an object pronoun",
        explanation: "\"Her\" recebe a ação (eu vi QUEM? ela) e não tem substantivo depois → objeto. Em \"I saw her car\", seria possessive adjective."
      },
      {
        id: "a9-mc-24",
        type: "mc",
        topic: "subject-object-pronouns",
        prompt: "My parents are visiting next week. I'm going to pick ___ up at the airport.",
        options: ["them", "their", "theirs"],
        answer: "them",
        explanation: "Depois do verbo, recebendo a ação, sem substantivo depois → objeto \"them\"."
      },
      {
        id: "a9-mc-25",
        type: "mc",
        topic: "reflexive-pronouns",
        prompt: "Be careful with that knife! Don't cut ___.",
        options: ["yourself", "your", "yours"],
        answer: "yourself",
        explanation: "A ação volta para quem faz (você se corta) → reflexivo yourself."
      },
      {
        id: "a9-mc-26",
        type: "mc",
        topic: "reflexive-pronouns",
        prompt: "We painted the whole house ___. No help from anyone!",
        options: ["ourselves", "ours", "us"],
        answer: "ourselves",
        explanation: "\"Ourselves\" no fim = nós mesmos, sozinhos, sem ajuda."
      },

      // ---- Armadilhas de tradução (seu/sua, dele/dela) ----
      {
        id: "a9-mc-27",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "Como se diz: \"O Marcos vendeu o carro dele.\"",
        options: ["Marcos sold his car.", "Marcos sold her car.", "Marcos sold the car of him."],
        answer: "Marcos sold his car.",
        explanation: "\"Dele\" com dono homem → his, antes do substantivo. \"The car of him\" não existe em inglês."
      },
      {
        id: "a9-mc-28",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "Como se diz: \"A Paula ama o cachorro dela.\"",
        options: ["Paula loves her dog.", "Paula loves his dog.", "Paula loves the her dog."],
        answer: "Paula loves her dog.",
        explanation: "Dona mulher → her. Não importa se o cachorro é macho: o possessivo segue o DONO. E nunca \"the\" + possessivo."
      },
      {
        id: "a9-mc-29",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "Como se diz: \"Os alunos esqueceram os livros deles.\"",
        options: ["The students forgot their books.", "The students forgot theirs books.", "The students forgot his books."],
        answer: "The students forgot their books.",
        explanation: "Donos no plural → their (sem -s, porque vem substantivo depois)."
      },
      {
        id: "a9-mc-30",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "Como se diz: \"Essa casa é nossa.\"",
        options: ["This house is ours.", "This house is our.", "This house is our's."],
        answer: "This house is ours.",
        explanation: "Sozinho no fim → ours, sem apóstrofo."
      },
      {
        id: "a9-mc-31",
        type: "mc",
        topic: "possessive-pronouns",
        prompt: "Como se diz: \"Ele é um colega meu.\"",
        options: ["He's a colleague of mine.", "He's a colleague of me.", "He's a my colleague."],
        answer: "He's a colleague of mine.",
        explanation: "\"Um ... meu\" = a ... of mine. \"A my colleague\" mistura artigo e possessivo, o que não pode."
      },
      {
        id: "a9-fill-11",
        type: "fill",
        topic: "possessive-adjectives",
        prompt: "Traduza só o possessivo: \"A Bia e a mãe dela\" → \"Bia and ___ mother\"",
        accept: ["her"],
        explanation: "Dona = Bia (she) → her."
      },
      {
        id: "a9-fill-12",
        type: "fill",
        topic: "possessive-pronouns",
        prompt: "Traduza: \"É seu?\" (falando com uma pessoa) → \"Is it ___ ?\"",
        accept: ["yours"],
        explanation: "Sozinho no fim → yours."
      },

      // ---- Achar o erro ----
      {
        id: "a9-mc-32",
        type: "mc",
        topic: "error-pronouns",
        prompt: "Qual frase está ERRADA?",
        options: ["This book is your.", "This book is yours.", "This is your book."],
        answer: "This book is your.",
        explanation: "\"Your\" precisa de substantivo depois. Sozinho no fim, o certo é \"yours\"."
      },
      {
        id: "a9-mc-33",
        type: "mc",
        topic: "error-pronouns",
        prompt: "Qual é a correção de \"The company lost it's best client.\"?",
        options: ["The company lost its best client.", "The company lost their's best client.", "The company lost it best client."],
        answer: "The company lost its best client.",
        explanation: "\"It's\" = it is. O possessivo é \"its\", sem apóstrofo."
      },
      {
        id: "a9-mc-34",
        type: "mc",
        topic: "error-pronouns",
        prompt: "Uma destas frases tem erro. Qual?",
        options: ["Ana called his father.", "Ana called her father.", "Ana's father called her."],
        answer: "Ana called his father.",
        explanation: "Ana é a dona → her father. \"His\" seria o pai de outro homem."
      },
      {
        id: "a9-mc-35",
        type: "mc",
        topic: "error-pronouns",
        prompt: "Qual frase está ERRADA?",
        options: ["Those are theirs bags.", "Those bags are theirs.", "Those are their bags."],
        answer: "Those are theirs bags.",
        explanation: "Antes de substantivo é \"their\" (sem -s): their bags. \"Theirs\" só sozinho."
      },
      {
        id: "a9-mc-36",
        type: "mc",
        topic: "error-pronouns",
        prompt: "Qual é a correção de \"Who's car is parked outside?\"",
        options: ["Whose car is parked outside?", "Who car is parked outside?", "Whom car is parked outside?"],
        answer: "Whose car is parked outside?",
        explanation: "\"Who's\" = who is. Para perguntar \"de quem\" + substantivo, use whose."
      },
      {
        id: "a9-mc-37",
        type: "mc",
        topic: "error-pronouns",
        prompt: "Qual frase está correta?",
        options: ["I washed my hands before dinner.", "I washed the hands before dinner.", "I washed mine hands before dinner."],
        answer: "I washed my hands before dinner.",
        explanation: "Parte do corpo → possessivo (my hands), não artigo. \"Mine\" não vai antes de substantivo."
      },
      {
        id: "a9-fill-13",
        type: "fill",
        topic: "error-pronouns",
        prompt: "Corrija a frase digitando-a inteira: \"Is this you're phone?\"",
        accept: ["is this your phone", "is this your phone?"],
        explanation: "\"You're\" = you are. Possessivo antes de substantivo → your: Is this your phone?"
      },
      {
        id: "a9-fill-14",
        type: "fill",
        topic: "error-pronouns",
        prompt: "Corrija a frase digitando-a inteira: \"That idea was her's, not mine.\"",
        accept: ["that idea was hers, not mine", "that idea was hers not mine", "that idea was hers, not mine."],
        explanation: "Possessive pronoun não tem apóstrofo: hers."
      },

      // ---- 's e whose ----
      {
        id: "a9-mc-38",
        type: "mc",
        topic: "possessive-s",
        prompt: "Whose laptop is this? — It's ___.",
        options: ["Gabriel's", "Gabriel", "of Gabriel"],
        answer: "Gabriel's",
        explanation: "Com nome de pessoa usamos 's: Gabriel's (= o do Gabriel). Funciona como um possessive pronoun."
      },
      {
        id: "a9-mc-39",
        type: "mc",
        topic: "possessive-s",
        prompt: "Escolha a frase natural:",
        options: ["This is my parents' house.", "This is the house of my parents.", "This is my parent's houses."],
        answer: "This is my parents' house.",
        explanation: "Plural terminado em -s ganha só o apóstrofo: parents' house (a casa dos meus pais)."
      },
      {
        id: "a9-fill-15",
        type: "fill",
        topic: "possessive-s",
        prompt: "Responda com o possessive pronoun: \"Is this Rita's coat?\" — \"Yes, it's ___ .\"",
        accept: ["hers"],
        explanation: "Rita's coat → hers (dela, sozinho)."
      },
      {
        id: "a9-fill-16",
        type: "fill",
        topic: "possessive-s",
        prompt: "Responda com o possessive pronoun: \"Are these Leo and Nina's tickets?\" — \"Yes, they're ___ .\"",
        accept: ["theirs"],
        explanation: "Dois donos → theirs."
      },
      {
        id: "a9-mc-40",
        type: "mc",
        topic: "possessive-adjectives",
        prompt: "Escolha a frase com \"own\" usada corretamente:",
        options: ["She wants her own room.", "She wants own her room.", "She wants a own room."],
        answer: "She wants her own room.",
        explanation: "\"Own\" (próprio) vem depois do possessivo: her own room, my own car."
      }
    ],

    passages: [
      {
        id: "a9-passage-1",
        title: "A mudança da família Ribeiro",
        text:
          "The Ribeiro family is moving to a new apartment this weekend, and everybody is packing their " +
          "things. Carla, the mother, is putting her books into boxes. Her husband, André, is taking care " +
          "of the kitchen, but most of the plates are hers — André only owns a few mugs. Their son, Davi, " +
          "is twelve and he wants his own bedroom in the new place. His sister Lia is nine, and she says the " +
          "biggest room should be hers. \"It isn't fair,\" says Davi. \"My room was always smaller than yours!\" " +
          "Their dog, Tufão, doesn't care: he is sleeping in his basket, next to a box with the word \"OURS\" " +
          "written on it. Nobody knows whose box it is, so Carla opens it. Inside are old photos of the " +
          "family — so, in a way, the box belongs to all of them.",
        questions: [
          {
            id: "a9-r-1",
            type: "mc",
            topic: "reading-pronouns",
            prompt: "Who owns most of the plates?",
            options: ["Carla", "André", "Davi"],
            answer: "Carla",
            explanation: "\"most of the plates are hers\" — \"hers\" se refere à Carla, a mãe."
          },
          {
            id: "a9-r-2",
            type: "mc",
            topic: "reading-pronouns",
            prompt: "What does Davi want in the new apartment?",
            options: ["His own bedroom", "A bigger kitchen", "A new dog"],
            answer: "His own bedroom",
            explanation: "\"he wants his own bedroom in the new place\"."
          },
          {
            id: "a9-r-3",
            type: "mc",
            topic: "reading-pronouns",
            prompt: "In \"the biggest room should be hers\", \"hers\" means...",
            options: ["Lia's room", "Carla's room", "the dog's room"],
            answer: "Lia's room",
            explanation: "Quem fala é a Lia (\"she says\"), então \"hers\" = o quarto dela, da Lia."
          },
          {
            id: "a9-r-4",
            type: "mc",
            topic: "reading-pronouns",
            prompt: "In \"My room was always smaller than yours!\", who is Davi talking to?",
            options: ["His sister Lia", "His father", "The dog"],
            answer: "His sister Lia",
            explanation: "Davi responde à Lia: \"yours\" = your room, o quarto dela."
          },
          {
            id: "a9-r-5",
            type: "mc",
            topic: "reading-pronouns",
            prompt: "Why does Carla open the box?",
            options: ["Because nobody knows whose box it is", "Because it is hers", "Because the dog is inside"],
            answer: "Because nobody knows whose box it is",
            explanation: "\"Nobody knows whose box it is, so Carla opens it.\" — whose = de quem."
          },
          {
            id: "a9-r-6",
            type: "mc",
            topic: "possessive-adjectives",
            prompt: "In \"he is sleeping in his basket\", \"his\" refers to...",
            options: ["Tufão, the dog", "Davi", "André"],
            answer: "Tufão, the dog",
            explanation: "O sujeito da frase é o cachorro Tufão (tratado como \"he\"), então \"his basket\" é a caminha dele."
          }
        ]
      },
      {
        id: "a9-passage-2",
        title: "Achados e perdidos no escritório (diálogo)",
        text:
          "Renata: Hi, Igor! Someone left a blue scarf in the meeting room. Is it yours?\n" +
          "Igor: No, it isn't mine. Mine is grey. Maybe it's Paula's — she was there this morning.\n" +
          "Renata: I asked her already. She says hers is in her car.\n" +
          "Igor: What about the two interns? They had their meeting there at ten.\n" +
          "Renata: Good idea. Oh, and there's also a phone charger. Whose is it?\n" +
          "Igor: That one is ours! Our team uses it every day. Thanks, Renata.\n" +
          "Renata: No problem. I'll send a message to the interns about the scarf.",
        questions: [
          {
            id: "a9-r-7",
            type: "mc",
            topic: "reading-pronouns",
            prompt: "What colour is Igor's scarf?",
            options: ["Grey", "Blue", "He doesn't have a scarf"],
            answer: "Grey",
            explanation: "\"No, it isn't mine. Mine is grey.\" — \"mine\" = my scarf."
          },
          {
            id: "a9-r-8",
            type: "mc",
            topic: "reading-pronouns",
            prompt: "Where is Paula's scarf?",
            options: ["In her car", "In the meeting room", "On her desk"],
            answer: "In her car",
            explanation: "\"She says hers is in her car.\" — hers = her scarf."
          },
          {
            id: "a9-r-9",
            type: "mc",
            topic: "reading-pronouns",
            prompt: "Who does the phone charger belong to?",
            options: ["Igor's team", "Renata", "The interns"],
            answer: "Igor's team",
            explanation: "Igor diz \"That one is ours! Our team uses it every day.\""
          },
          {
            id: "a9-r-10",
            type: "mc",
            topic: "possessive-pronouns",
            prompt: "In \"She says hers is in her car\", why are there two different words (hers / her)?",
            options: [
              "\"Hers\" stands alone; \"her\" comes before a noun (car)",
              "\"Hers\" is plural and \"her\" is singular",
              "They mean different people"
            ],
            answer: "\"Hers\" stands alone; \"her\" comes before a noun (car)",
            explanation: "As duas se referem à Paula. \"Hers\" substitui \"her scarf\"; \"her\" vem antes do substantivo \"car\"."
          },
          {
            id: "a9-r-11",
            type: "mc",
            topic: "possessive-adjectives",
            prompt: "\"They had their meeting there at ten.\" Which word is the possessive?",
            options: ["their", "there", "they"],
            answer: "their",
            explanation: "\"Their\" = deles (possessivo). \"There\" = lá; \"they\" = eles (sujeito)."
          }
        ]
      }
    ]
  });
})();
