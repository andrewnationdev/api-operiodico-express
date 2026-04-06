const express = require('express')
const app = express()
const port = 3000

const articles = [
  {
    id: 9,
    title: "A Rota da Seda Digital e a Nova Geopolítica de Dados",
    excerpt: "Como a infraestrutura de fibra óptica submarina está redesenhando as zonas de influência entre o Oriente e o Ocidente.",
    content: "Não se trata mais apenas de comércio físico. A soberania nacional no século XXI é medida pela capacidade de processar e armazenar dados em solo pátrio. O investimento massivo em cabos de altíssima velocidade e datacenters estratégicos no Sul Global está criando uma nova cortina de ferro digital, onde a latência é a nova fronteira diplomática.",
    date: "03 Abril, 2026",
    author: "Andrew G. Silva",
    category: "Geopolítica"
  },
  {
    id: 10,
    title: "O Legado Al-Andalus: Quando a Ciência falava Árabe",
    excerpt: "Uma análise sobre como a tradução de textos gregos em Córdoba salvou o conhecimento clássico durante a Idade Média.",
    content: "Enquanto a Europa Central enfrentava o obscurecimento científico, as bibliotecas de Córdoba e Toledo pulsavam com traduções de Aristóteles e avanços em álgebra e astronomia. Esse intercâmbio cultural não foi apenas um registro histórico, mas o motor que permitiu o posterior Renascimento europeu, provando que o progresso humano é um esforço coletivo e multilíngue.",
    date: "02 Abril, 2026",
    author: "Dpto. de História",
    category: "História"
  },
  {
    id: 11,
    title: "Minimalismo como Resistência: A Ética do 'Menos'",
    excerpt: "Em uma sociedade de consumo desenfreado, a escolha pela simplicidade tornou-se um ato político e de preservação mental.",
    content: "O minimalismo moderno transcende a estética de interiores. Ele é uma resposta direta ao burnout informacional. Ao reduzir o ruído visual e material, o indivíduo recupera a agência sobre o próprio tempo. Nas palavras dos novos filósofos da cultura, o vazio não é falta, é espaço para o que realmente importa florescer.",
    date: "01 Abril, 2026",
    author: "Andrew G. Silva",
    category: "Cultura"
  },
  {
    id: 12,
    title: "Ritmos Circadianos e a Arquitetura do Sono",
    excerpt: "Por que ignorar os ciclos naturais de luz e sombra está cobrando um preço alto da produtividade e da saúde mental.",
    content: "A luz azul dos dispositivos móveis é o maior disruptor endócrino da nossa era. Estudos recentes de cronobiologia mostram que alinhar as tarefas mais complexas com o pico de cortisol matinal e silenciar estímulos digitais após o pôr do sol pode aumentar a regeneração neural em até 40%. O bem-estar começa no respeito ao relógio biológico.",
    date: "31 Março, 2026",
    author: "Dr. Marcos Vinícius",
    category: "Bem-estar"
  },
  {
    id: 13,
    title: "A Crise de Identidade das Megacidades Modernas",
    excerpt: "Como o urbanismo padronizado está apagando a história local e criando 'não-lugares' ao redor do globo.",
    content: "Cidades como Dubai, Singapura e São Paulo correm o risco de se tornarem indistinguíveis. A busca pela eficiência e pelo brilho do vidro espelhado muitas vezes soterra a arquitetura vernacular e as tradições de bairro. Recuperar a identidade urbana exige um planejamento que coloque o pedestre e a memória coletiva acima do coeficiente de aproveitamento imobiliário.",
    date: "30 Março, 2026",
    author: "Ana Clara Matos",
    category: "Cultura"
  },
  {
    id: 14,
    title: "A Infância de Dom Pedro I",
    excerpt: "O Príncipe Pedro de Alcântara nasceu no dia 12 de outubro de 1798 no palácio de Queluz em Portugal. Filho dos Príncipes D. João VI e D. Carlota Joaquina da Espanha.",
    content: `O Príncipe Pedro de Alcântara nasceu no dia 12 de outubro de 1798 no palácio de Queluz em Portugal. Filho dos Príncipes D. João VI e D. Carlota Joaquina da Espanha. Na época em que ele nasceu a Europa se encontrava em polvorosa, era uma época cheia de incertezas, e isso se deve por conta da Revolução Francesa que aconteceu anos antes do D. Pedro nascer em 1789. 

Um ano após o seu nascimento, na França aconteceu o golpe de 18 de Brumário, quando Napoleão Bonaparte subiu ao poder na França. 

Seu irmão mais velho D. Antônio Principe da Beira, faleceu e Pedro se tornou o herdeiro e Principe da Beira. 

O príncipe foi criado em Queluz junto de sua avó a Rainha Maria I  que foi impedida de governar por ser considerada “louca”, ficando como regente seu filho mais velho D. João VI. A rainha na época já demonstrava ter problemas psíquicos devido a algumas perdas familiares, e hoje em dia, estudiosos acreditam que ela tenha tido depressão. 

Portugal começou a sofrer ameaças da França, e quando D. João VI soube de que havia a possibilidade de a França invadir Portugal. D. João decidiu levar toda a corte para o Brasil, onde não haveria o risco de ter a sua coroa derrubada pelos franceses. `,
    date: "06 Abril, 2026",
    author: "Anderson Pereira Justiniano",
    category: "História do Brasil"
  }
];

app.get('/all_posts', (req, res) => {
  res.send(articles);
})

app.get('/', (req, res) => {
  res.send(articles);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
