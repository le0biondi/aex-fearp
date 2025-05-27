// src/data/clues.js
export const clues = [
  // Case 1: O Mistério do Rio Poluído
  {
    id: "clue-1-1",
    name: "Amostra de Água Poluída",
    description: "Uma amostra da água do rio contendo substâncias químicas desconhecidas e alta turbidez.",
    type: "physical",
    content: "A análise preliminar indica a presença de substâncias químicas industriais e altos níveis de contaminantes orgânicos. pH anormalmente ácido.",
    image: "/assets/images/polluted-water-sample.jpg",
    location: "riverside",
    relatedSDGs: [6, 14],
  },
  {
    id: "clue-1-2",
    name: "Relatório de Peixes Mortos",
    description: "Relatório da secretaria ambiental sobre a mortandade recente de peixes no Rio Esperança.",
    type: "document",
    content: "Nos últimos três meses, houve um aumento de 300% na mortandade de peixes no Rio Esperança. As análises indicam baixos níveis de oxigênio na água e presença de metais pesados como mercúrio e chumbo.",
    image: "/assets/images/dead-fish-report.jpg",
    location: "riverside",
    relatedSDGs: [6, 14, 15],
  },
  {
    id: "clue-1-3",
    name: "Depoimento de Pescador",
    description: "Gravação do depoimento de um pescador local sobre as mudanças observadas no rio.",
    type: "testimonial",
    content: "Pesco neste rio há mais de 40 anos e nunca vi uma situação tão grave. Além da diminuição dos peixes, a água começou a mudar de cor e cheirar mal há cerca de um ano, logo depois que aquela fábrica nova começou a funcionar. Muitas famílias estão sem sustento.",
    image: "/assets/images/fisherman-testimony.jpg",
    location: "community",
    relatedSDGs: [1, 6, 14],
  },
  {
    id: "clue-1-4",
    name: "Licença Ambiental da Fábrica",
    description: "Documento oficial autorizando o funcionamento da fábrica química próxima ao rio.",
    type: "document",
    content: "Licença condicionada à instalação de sistema de tratamento de efluentes e monitoramento trimestral da qualidade da água descartada. Última inspeção realizada há 18 meses.",
    image: "/assets/images/environmental-license.jpg",
    location: "city-hall",
    relatedSDGs: [6, 11, 12],
  },
  {
    id: "clue-1-5",
    name: "Tubulação Clandestina",
    description: "Tubulação não oficial despejando efluentes industriais diretamente no rio.",
    type: "physical",
    content: "Tubulação não documentada em plantas oficiais, despejando um líquido escuro com forte odor químico diretamente nas águas do rio, sem qualquer tipo de tratamento.",
    image: "/assets/images/illegal-pipe.jpg",
    location: "factory",
    relatedSDGs: [6, 12, 14],
  },
  {
    id: "clue-1-6",
    name: "Relato Médico",
    description: "Relatório médico sobre aumento de casos de problemas de saúde na comunidade ribeirinha.",
    type: "document",
    content: "Aumento significativo em casos de problemas gastrointestinais, irritações cutâneas e doenças respiratórias entre moradores que utilizam a água do rio. Correlação temporal com o início das atividades industriais na região.",
    image: "/assets/images/medical-report.jpg",
    location: "community",
    relatedSDGs: [3, 6],
  },
  {
    id: "clue-1-7",
    name: "Planilha de Custos",
    description: "Planilha encontrada na fábrica mostrando economias com o não-tratamento de resíduos.",
    type: "data",
    content: "Documento interno registrando economias de R$ 1,5 milhão por ano ao evitar o tratamento adequado de resíduos químicos. Menciona 'disposição alternativa' como método utilizado.",
    image: "/assets/images/cost-spreadsheet.jpg",
    location: "factory",
    relatedSDGs: [6, 12, 16],
  },
  {
    id: "clue-1-8",
    name: "Mensagem Eletrônica",
    description: "E-mail entre executivos da fábrica discutindo como evitar fiscalização ambiental.",
    type: "digital",
    content: "Thread de e-mails mencionando 'janelas seguras' para descarte de resíduos não tratados e estratégias para 'gerenciar' visitas de fiscais ambientais.",
    image: "/assets/images/email-evidence.jpg",
    location: "factory",
    relatedSDGs: [6, 12, 16],
  },

  // Case 2: Desigualdade Educacional
  {
    id: "clue-2-1",
    name: "Comparativo de Infraestrutura",
    description: "Documento comparando a infraestrutura de escolas em diferentes bairros da cidade.",
    type: "document",
    content: "Análise detalhada mostrando disparidades significativas: escolas em bairros de alta renda têm, em média, 3x mais laboratórios, 2x mais computadores por aluno, e bibliotecas com acervos 5x maiores do que escolas em bairros de baixa renda.",
    image: "/assets/images/school-infrastructure-comparison.jpg",
    location: "education-department",
    relatedSDGs: [4, 10],
  },
  {
    id: "clue-2-2",
    name: "Índices de Evasão Escolar",
    description: "Relatório estatístico sobre taxas de evasão escolar nas diferentes regiões da cidade.",
    type: "data",
    content: "Escolas de bairros periféricos apresentam taxas de evasão de 32%, comparado a 7% em bairros de alta renda. Principais motivos apontados: necessidade de trabalhar para complementar renda familiar, dificuldade de transporte e falta de perspectiva sobre benefícios da educação.",
    image: "/assets/images/dropout-statistics.jpg",
    location: "underprivileged-school",
    relatedSDGs: [1, 4, 10],
  },
  {
    id: "clue-2-3",
    name: "Depoimento de Professor",
    description: "Entrevista com professor que já trabalhou em escolas de diferentes perfis socioeconômicos.",
    type: "testimonial",
    content: "Trabalhei nas duas realidades e a diferença é gritante. Aqui [escola periférica] falta material básico, muitos alunos vêm com fome ou problemas familiares, e não temos apoio psicológico ou assistência social. Na escola do centro, tínhamos recursos, projetos extracurriculares e até viagens educativas.",
    image: "/assets/images/teacher-testimony.jpg",
    location: "underprivileged-school",
    relatedSDGs: [4, 10],
  },
  {
    id: "clue-2-4",
    name: "Orçamento Educacional",
    description: "Documento que detalha a alocação de recursos financeiros para educação na cidade.",
    type: "document",
    content: "Apesar da política oficial de distribuição igualitária, escolas em áreas já privilegiadas recebem complementação de 40-60% via associações de pais, doações de empresas e parcerias privadas. Escolas periféricas dependem quase exclusivamente do repasse governamental básico.",
    image: "/assets/images/education-budget.jpg",
    location: "education-department",
    relatedSDGs: [4, 10, 16],
  },
  {
    id: "clue-2-5",
    name: "Mapa de Transporte Escolar",
    description: "Mapa mostrando rotas de transporte escolar e tempo médio de deslocamento dos estudantes.",
    type: "data",
    content: "Estudantes de áreas periféricas gastam, em média, 1h40min em deslocamento diário para escola, enquanto estudantes de áreas centrais gastam 25min. 32% dos alunos de áreas periféricas relatam faltas frequentes por problemas de transporte.",
    image: "/assets/images/school-transportation-map.jpg",
    location: "community-center",
    relatedSDGs: [4, 10, 11],
  },
  {
    id: "clue-2-6",
    name: "Resultados de Avaliações Nacionais",
    description: "Dados de desempenho das escolas em avaliações padronizadas nacionais.",
    type: "data",
    content: "Escolas de alta renda apresentam médias 40% superiores em todas as disciplinas avaliadas. A análise longitudinal mostra que a disparidade aumentou 15% nos últimos 5 anos.",
    image: "/assets/images/standardized-test-results.jpg",
    location: "education-department",
    relatedSDGs: [4, 10],
  },
  {
    id: "clue-2-7",
    name: "Depoimento de Aluno",
    description: "Entrevista com estudante da escola periférica sobre seus desafios educacionais.",
    type: "testimonial",
    content: "Quero muito estudar, mas é difícil. Em casa não tenho computador nem internet, e quando a professora passa pesquisa, preciso ir à lan house ou biblioteca pública, que fica longe. Muitas vezes tenho que faltar à aula para cuidar dos meus irmãos mais novos enquanto minha mãe trabalha.",
    image: "/assets/images/student-testimony.jpg",
    location: "underprivileged-school",
    relatedSDGs: [1, 4, 5, 10],
  },
  {
    id: "clue-2-8",
    name: "Iniciativa Comunitária",
    description: "Documento sobre projeto social que oferece reforço escolar e atividades complementares.",
    type: "document",
    content: "Projeto 'Educação para Todos' atende 120 crianças no contraturno escolar, oferecendo alimentação, apoio pedagógico e atividades culturais. Relatório de impacto mostra redução de 45% na evasão escolar e melhoria de 30% no desempenho acadêmico dos participantes.",
    image: "/assets/images/community-initiative.jpg",
    location: "community-center",
    relatedSDGs: [1, 4, 10, 17],
  },

  // Case 3: Crise Climática e Agricultura
  {
    id: "clue-3-1",
    name: "Dados Climatológicos Históricos",
    description: "Registro de dados climatológicos da região nos últimos 30 anos.",
    type: "data",
    content: "Análise revela aumento médio de 1.8°C na temperatura média anual, redução de 25% no volume de chuvas e aumento de 40% na frequência de eventos climáticos extremos (secas prolongadas e tempestades intensas).",
    image: "/assets/images/climate-data.jpg",
    location: "research-station",
    relatedSDGs: [13],
  },
  {
    id: "clue-3-2",
    name: "Relatório de Produtividade Agrícola",
    description: "Documento detalhando mudanças na produtividade das principais culturas da região.",
    type: "document",
    content: "Nos últimos 10 anos, redução média de 40% na produtividade de culturas tradicionais como milho e feijão. Culturas irrigadas mostram menor impacto (redução de 15%), mas enfrentam crescente escassez hídrica.",
    image: "/assets/images/agricultural-productivity-report.jpg",
    location: "drought-farm",
    relatedSDGs: [2, 12, 13],
  },
  {
    id: "clue-3-3",
    name: "Sistema de Irrigação Eficiente",
    description: "Tecnologia de irrigação por gotejamento que economiza água e maximiza absorção pelas plantas.",
    type: "physical",
    content: "Sistema reduz o consumo de água em 60% comparado a métodos tradicionais, direcionando a água diretamente para as raízes das plantas e minimizando perdas por evaporação.",
    image: "/assets/images/drip-irrigation-system.jpg",
    location: "sustainable-farm",
    relatedSDGs: [2, 6, 12, 13],
  },
  {
    id: "clue-3-4",
    name: "Depoimento de Agricultor",
    description: "Entrevista com agricultor familiar sobre os impactos das mudanças climáticas em sua propriedade.",
    type: "testimonial",
    content: "Minha família cultiva esta terra há três gerações, e nunca vimos nada parecido. O calendário de plantio que meu pai me ensinou não funciona mais. As chuvas não vêm quando deveriam, e quando vêm, são tempestades que destroem tudo. Já perdi duas colheitas inteiras nos últimos três anos.",
    image: "/assets/images/farmer-testimony.jpg",
    location: "drought-farm",
    relatedSDGs: [2, 13],
  },
  {
    id: "clue-3-5",
    name: "Manual de Agroecologia",
    description: "Guia prático sobre técnicas agroecológicas adaptadas às condições climáticas locais.",
    type: "document",
    content: "Compêndio de práticas que incluem: diversificação de culturas, sistemas agroflorestais, cobertura permanente do solo, captação de água da chuva e uso de variedades adaptadas a condições de stress hídrico.",
    image: "/assets/images/agroecology-manual.jpg",
    location: "rural-extension-center",
    relatedSDGs: [2, 6, 12, 13, 15],
  },
  {
    id: "clue-3-6",
    name: "Análise de Segurança Alimentar",
    description: "Relatório sobre impactos das mudanças climáticas na disponibilidade e preço dos alimentos.",
    type: "data",
    content: "Aumento médio de 30% nos preços de alimentos básicos nos últimos 3 anos. 25% das famílias da região relatam ter reduzido o consumo de alimentos ou substituído por opções menos nutritivas devido aos altos custos.",
    image: "/assets/images/food-security-analysis.jpg",
    location: "local-market",
    relatedSDGs: [1, 2, 12, 13],
  },
  {
    id: "clue-3-7",
    name: "Sementes Adaptadas ao Clima",
    description: "Variedades de sementes desenvolvidas para maior resistência a condições climáticas adversas.",
    type: "physical",
    content: "Sementes de milho, feijão e hortaliças melhoradas geneticamente para maior tolerância à seca, calor e doenças emergentes relacionadas às mudanças climáticas. Testes mostram produtividade até 40% maior em condições de stress hídrico.",
    image: "/assets/images/climate-adapted-seeds.jpg",
    location: "rural-extension-center",
    relatedSDGs: [2, 13, 15],
  },
  {
    id: "clue-3-8",
    name: "Mapa de Zonas de Risco Climático",
    description: "Mapa detalhando áreas mais vulneráveis a impactos climáticos específicos.",
    type: "data",
    content: "Projeção para próximos 20 anos indica expansão de 60% das áreas consideradas de alto risco para agricultura convencional. Regiões anteriormente adequadas para determinadas culturas se tornarão impróprias até 2040.",
    image: "/assets/images/climate-risk-zones-map.jpg",
    location: "research-station",
    relatedSDGs: [2, 13, 15],
  },
  {
    id: "clue-3-9",
    name: "Projeto de Financiamento Sustentável",
    description: "Documento detalhando linha de crédito especial para adaptação climática na agricultura.",
    type: "document",
    content: "Programa oferece juros reduzidos e carência estendida para agricultores que implementam práticas sustentáveis e tecnologias de baixo carbono. Inclui assistência técnica especializada e seguro agrícola adaptado a riscos climáticos.",
    image: "/assets/images/sustainable-financing-project.jpg",
    location: "rural-extension-center",
    relatedSDGs: [1, 2, 8, 13, 17],
  },
  {
    id: "clue-3-10",
    name: "Sistema Agroflorestal",
    description: "Modelo de produção que integra árvores, cultivos agrícolas e/ou criação animal em uma mesma área.",
    type: "physical",
    content: "Sistema que simula ambientes de floresta, criando microclima favorável que protege culturas do calor excessivo e conserva umidade. Propriedade demonstra maior resiliência a secas e temporais, além de recuperação da fertilidade do solo.",
    image: "/assets/images/agroforestry-system.jpg",
    location: "sustainable-farm",
    relatedSDGs: [2, 13, 15],
  }
];

/**
 * Get a clue by its ID
 * @param {string} id - Clue ID to search for
 * @returns {Object|null} The clue object or null if not found
 */
export const getClueById = (id) => {
  return clues.find(clue => clue.id === id) || null;
};

/**
 * Get clues by location
 * @param {string} locationId - The location ID to filter by
 * @returns {Array} Array of clues at the specified location
 */
export const getCluesByLocation = (locationId) => {
  return clues.filter(clue => clue.location === locationId);
};

/**
 * Get clues related to specific SDGs
 * @param {number|Array} sdgIds - SDG ID or array of IDs to filter by
 * @returns {Array} Array of clues related to the specified SDG(s)
 */
export const getCluesBySDGs = (sdgIds) => {
  const sdgArray = Array.isArray(sdgIds) ? sdgIds : [sdgIds];
  return clues.filter(clue => 
    clue.relatedSDGs && 
    clue.relatedSDGs.some(id => sdgArray.includes(id))
  );
};

export default clues;