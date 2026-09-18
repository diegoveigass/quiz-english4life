# Quiz English4Life

App local de quiz para praticar as aulas de inglês, com exercícios originais inspirados nos
documentos de cada pasta `aula_N`. Roda 100% no navegador — nada é enviado para a internet.

## Como abrir

Dê duplo-clique em `index.html` (ou abra pelo navegador: `Arquivo > Abrir arquivo`). Não precisa
instalar nada, não precisa de servidor.

Funciona melhor no **Chrome ou Edge** (por causa do botão "Verificar pasta do curso" — veja abaixo).
Em outros navegadores o quiz funciona normal, só essa checagem automática de pastas não aparece.

## O que cada aba tem

- Um card de teoria/dicas (📖) com explicação em português, frases de exemplo do dia a dia e dicas.
- Um banco de exercícios variados (múltipla escolha e preencher lacuna, e leitura com perguntas na
  Aula 3), em ordem embaralhada a cada tentativa.
- Feedback imediato depois de cada resposta, explicando por que está certa ou errada.
- Um resumo no final com pontuação, temas que você errou e sugestões reais de vídeo/exercício por tema.
- Um painel de desempenho histórico por tema (fica salvo no navegador, mesmo depois de fechar).

## Como adicionar uma aula nova (ex.: `aula_4_07_09_26`)

1. Crie a pasta normal com os PDFs/imagens da aula, do lado de fora de `quiz-app/` (como já faz hoje).
2. Clique em **"Verificar pasta do curso"** no topo do app. Na primeira vez, ele vai pedir para você
   selecionar a pasta `Ingles - English4Life` (a pasta que contém `quiz-app` e as pastas `aula_*`) —
   autorize o acesso de leitura. Da próxima vez ele tenta lembrar dessa permissão.
3. O app varre as subpastas `aula_*` e mostra quais já têm exercícios e quais são novas ("🆕 pendente").
4. Para cada aula pendente, clique em **"Copiar prompt para o Claude"** e cole numa conversa aqui no
   Claude Code (na pasta do curso). Eu leio os arquivos daquela aula e crio `data/aulaN.js` seguindo o
   mesmo padrão das aulas anteriores — depois é só verificar a pasta de novo (ou reabrir o app) que a
   aba nova aparece.

### Fazendo isso manualmente (sem o botão)

Se preferir, é só me pedir diretamente: *"gera os exercícios da aula 4"*. Por baixo do capô, adicionar
uma aula = criar `data/aulaN.js` (mesmo formato de `data/aula1.js`) e incluir uma linha
`<script src="data/aulaN.js"></script>` no `index.html`, antes de `js/app.js`. Nada mais precisa mudar.

## Estrutura

```
quiz-app/
  index.html          → estrutura da página
  vendor/tailwind.js   → Tailwind CSS baixado localmente (funciona offline)
  js/
    app.js             → renderização das abas, teoria, quiz e resumo
    quiz-engine.js      → embaralhar perguntas e corrigir respostas (sem tocar no DOM)
    progress-store.js   → histórico de acertos/erros (localStorage)
    folder-watcher.js    → detecção de pastas de aula novas (File System Access API)
    resources.js         → links reais de reforço por tema
  data/
    aula1.js, aula2.js, aula3.js → teoria + banco de questões de cada aula
```

## Limitações conhecidas

- O progresso salvo (localStorage) e a permissão de pasta ficam no navegador em que você usa o app —
  não sincronizam entre navegadores/computadores diferentes.
- A detecção automática de pastas novas depende da File System Access API, disponível no Chrome e Edge.
- A geração do conteúdo de uma aula nova (teoria + perguntas) é feita pelo Claude a partir dos
  documentos daquela aula — o app não inventa exercícios sozinho, só detecta que uma aula chegou.
