const express = require('express')

const app = express()
const port = 3000

app.use((req, res, next) =>  {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    next();
});

const meses = {
  "Janeiro": 0, "Fevereiro": 1, "Março": 2, "Abril": 3, "Maio": 4, "Junho": 5,
  "Julho": 6, "Agosto": 7, "Setembro": 8, "Outubro": 9, "Novembro": 10, "Dezembro": 11
};

const parseData = (dataStr) => {
  const [dia, mesNome, ano] = dataStr.replace(",", "").split(" ");
  return new Date(ano, meses[mesNome], dia);
};

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
    content: `O Príncipe Pedro de Alcântara, filho dos Príncipes D. João VI e D. Carlota Joaquina da Espanha, nasceu em 12 de outubro de 1798, no palácio de Queluz, em Portugal. Na época em que ele nasceu a Europa se encontrava em polvorosa, devido à revolução francesa, em 1789, que pôs fim ao regime absolutista que imperava na época, trazendo novos ideais para época como o liberalismo. 
<p>Um ano após o seu nascimento, houve o golpe de 18 de Brumário, quando Napoleão Bonaparte ascendeu ao trono. Até então, Pedro não era o herdeiro do trono português e sim seu irmão mais velho D. Antônio Principe da Beira, que faleceu em 1801, deixando para Pedro o título de herdeiro. Ao todo, D. João e Carlota tiveram 9 filhos, entretando apenas 7 sobreviveram até a fase adulta.</p>
<p>O príncipe foi criado em Queluz, junto de sua avó a Rainha Maria I, afastada do governo por ter sido considerada “louca” em 1792. Seu filho mais velho D. João VI ficou como regente. A rainha demonstrava ter problemas psíquicos à época devido a algumas perdas familiares. Atualmente, estudiosos acreditam que ela tenha tido depressão. </p>
<p>Portugal encontrava-se em uma posição bastante delicada, visto que a Europa passava por inúmeros conflitos e queriam que D. João escolhesse em qual lado iria ficar. No entanto, Portugal optou por manter uma relação neutra. Com a ascensão de Napoleão em 1804 e o seu desejo de mudar o mapa da Europa, acontecem várias guerras que culminam da queda de diversos governantes. Bonaparte coloca seus parentes para reinar nestes países. Como se não bastasse, ele almejava rebaixar a Inglaterra como grande potência. Então, em 1806, ele decreta o bloqueio continental, proibindo outros países de comercializarem com a Inglaterra, a fim de sufocar a economia do país.
Como a Inglaterra era um importantíssimo aliado de Portugal, a situação afetou diretamente o país. D. João sempre tentou manter uma posição neutra enquanto buscava soluções para o problema. Em 1807, Napoleão ameaça Portugal, dizendo que se o país não declarasse guerra à Inglaterra, ele o invadiria junto com a Espanha. Sem alternativa viável, o Regente optou pela mudança a corte portuguesa para o Brasil, à época colônia portuguesa. Com isso, o plano era dificultar a chance de invasão da França e a derrubada de sua coroa.</p>
<p>D. Pedro tinha nove anos na ocasião da vinda da corte portuguesa ao Brasil. A corte ficou primeiro em Salvador e fixaram-se posteriormente no Rio de Janeiro. D. Pedro teve uma educação negligenciada, mas apesar disso pôde iniciar-se em matemática, lógica, história, geografia e ecônomia política. No que concerne às línguas, aprendeu latim, francês e inglês. O príncipe tinha autonomia para decidir não participar das aulas e os criados acatavam as suas vontades sem discussão.</p>
`,
    date: "06 Abril, 2026",
    author: "Anderson Pereira Justiniano",
    category: "História do Brasil"
  }
];

const orderArticles = (data) => {
  return data.sort((a, b) => parseData(b.date) - parseData(a.date));
}

app.get('/post', (req, res) => {
  const id = req.query.id;
  
  if (!id) {
    return res.status(400).send({ error: 'ID não fornecido' });
  }

  const article = articles.find(a => a.id == id);

  if (!article) {
    return res.status(404).send({ error: 'Artigo não encontrado' });
  }

  res.send(article);
});

app.get('/all_posts', (req, res) => {
  res.send(orderArticles(articles));
})

app.get('/', (req, res) => {
  res.send(orderArticles(articles));
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
