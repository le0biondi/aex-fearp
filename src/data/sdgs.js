// src/data/sdgs.js
export const sdgs = [
  {
    id: 1,
    title: "Erradicação da Pobreza",
    shortName: "Fim da Pobreza",
    description: "Acabar com a pobreza em todas as suas formas, em todos os lugares.",
    color: "#e5243b",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-01.png",
    fullDescription: "O objetivo 1 visa erradicar a pobreza extrema, atualmente medida como pessoas vivendo com menos de US$ 1,25 por dia. Também busca reduzir pela metade a proporção de homens, mulheres e crianças, de todas as idades, que vivem na pobreza, implementar medidas e sistemas de proteção social para todos, e garantir que todos tenham direitos iguais a recursos econômicos.",
    targets: [
      "Até 2030, erradicar a pobreza extrema para todas as pessoas em todos os lugares",
      "Até 2030, reduzir pelo menos à metade a proporção de homens, mulheres e crianças que vivem na pobreza",
      "Implementar medidas e sistemas de proteção social para todos",
      "Garantir que todos os homens e mulheres tenham direitos iguais aos recursos econômicos",
      "Construir a resiliência dos pobres e vulneráveis a desastres ambientais, econômicos e sociais"
    ],
    connections: [2, 3, 4, 8, 10],
    themes: ["pobreza", "desigualdade", "proteção social", "direitos econômicos", "resiliência"],
    impactAreas: ["acesso a recursos", "segurança financeira", "inclusão social", "redução de vulnerabilidades"]
  },
  {
    id: 2,
    title: "Fome Zero e Agricultura Sustentável",
    shortName: "Fome Zero",
    description: "Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável.",
    color: "#e5b735",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-02.png",
    fullDescription: "O objetivo 2 busca acabar com a fome e todas as formas de desnutrição até 2030, além de garantir o acesso de todas as pessoas a alimentos seguros, nutritivos e suficientes durante todo o ano. Também visa promover sistemas sustentáveis de produção de alimentos e implementar práticas agrícolas resilientes que aumentem a produtividade e a produção.",
    targets: [
      "Acabar com a fome e garantir acesso a alimentos nutritivos para todos",
      "Acabar com todas as formas de desnutrição",
      "Dobrar a produtividade agrícola e a renda dos pequenos produtores de alimentos",
      "Garantir sistemas sustentáveis de produção de alimentos",
      "Manter a diversidade genética de sementes, plantas e animais"
    ],
    connections: [1, 3, 6, 12, 13, 15],
    themes: ["segurança alimentar", "nutrição", "agricultura sustentável", "produtividade agrícola", "diversidade genética"],
    impactAreas: ["acesso a alimentos", "saúde nutricional", "sustentabilidade agrícola", "resiliência alimentar"]
  },
  {
    id: 3,
    title: "Saúde e Bem-Estar",
    shortName: "Saúde e Bem-Estar",
    description: "Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades.",
    color: "#4c9f38",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-03.png",
    fullDescription: "O objetivo 3 visa garantir vidas saudáveis e promover o bem-estar para todos em todas as idades. Isso inclui reduzir a taxa de mortalidade materna e acabar com mortes evitáveis de recém-nascidos e crianças menores de 5 anos. Além disso, busca acabar com epidemias como AIDS, tuberculose e malária, e promover a saúde mental e o bem-estar.",
    targets: [
      "Reduzir a mortalidade materna e infantil",
      "Acabar com epidemias de doenças transmissíveis",
      "Reduzir em um terço a mortalidade prematura por doenças não transmissíveis",
      "Promover a saúde mental e o bem-estar",
      "Garantir acesso universal aos serviços de saúde sexual e reprodutiva"
    ],
    connections: [1, 2, 5, 6, 10],
    themes: ["saúde", "bem-estar", "doenças", "mortalidade", "saúde mental"],
    impactAreas: ["acesso à saúde", "qualidade de vida", "prevenção de doenças", "cobertura médica universal"]
  },
  {
    id: 4,
    title: "Educação de Qualidade",
    shortName: "Educação de Qualidade",
    description: "Assegurar a educação inclusiva, equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos.",
    color: "#c5192d",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-04.png",
    fullDescription: "O objetivo 4 busca garantir que todas as meninas e meninos completem o ensino primário e secundário gratuito, equitativo e de qualidade. Também visa garantir que todos os jovens e adultos tenham habilidades relevantes para o emprego, trabalho decente e empreendedorismo, e eliminar disparidades de gênero na educação.",
    targets: [
      "Garantir que todas as meninas e meninos completem o ensino primário e secundário",
      "Garantir acesso a desenvolvimento infantil de qualidade, cuidados e educação pré-escolar",
      "Garantir acesso igual a educação técnica, profissional e superior acessível e de qualidade",
      "Aumentar substancialmente o número de jovens e adultos com habilidades relevantes para emprego e empreendedorismo",
      "Eliminar disparidades de gênero na educação e garantir acesso igualitário em todos os níveis"
    ],
    connections: [1, 5, 8, 10, 16],
    themes: ["educação", "aprendizagem", "inclusão educacional", "habilidades profissionais", "alfabetização"],
    impactAreas: ["acesso à educação", "qualidade do ensino", "preparação profissional", "redução de desigualdades"]
  },
  {
    id: 5,
    title: "Igualdade de Gênero",
    shortName: "Igualdade de Gênero",
    description: "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.",
    color: "#ff3a21",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-05.png",
    fullDescription: "O objetivo 5 visa acabar com todas as formas de discriminação contra todas as mulheres e meninas em todo o mundo. Busca eliminar todas as formas de violência contra mulheres e meninas nas esferas públicas e privadas, e garantir a participação plena e efetiva das mulheres e a igualdade de oportunidades para liderança em todos os níveis de tomada de decisão.",
    targets: [
      "Acabar com todas as formas de discriminação contra mulheres e meninas",
      "Eliminar todas as formas de violência contra mulheres e meninas",
      "Eliminar práticas nocivas como casamentos forçados e mutilação genital feminina",
      "Reconhecer e valorizar o trabalho doméstico não remunerado",
      "Garantir participação plena e efetiva das mulheres na liderança e tomada de decisões"
    ],
    connections: [1, 3, 4, 8, 10, 16],
    themes: ["gênero", "empoderamento feminino", "equidade", "direitos das mulheres", "participação feminina"],
    impactAreas: ["igualdade de oportunidades", "representatividade", "proteção contra violência", "autonomia econômica"]
  },
  {
    id: 6,
    title: "Água Potável e Saneamento",
    shortName: "Água Limpa e Saneamento",
    description: "Garantir disponibilidade e manejo sustentável da água e saneamento para todos.",
    color: "#26bde2",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-06.png",
    fullDescription: "O objetivo 6 visa alcançar o acesso universal e equitativo à água potável e segura para todos até 2030. Também busca melhorar a qualidade da água, reduzindo a poluição e aumentando substancialmente a reciclagem e reutilização segura globalmente, além de implementar a gestão integrada dos recursos hídricos em todos os níveis.",
    targets: [
      "Alcançar acesso universal e equitativo à água potável segura e acessível para todos",
      "Alcançar acesso a saneamento e higiene adequados e equitativos para todos",
      "Melhorar a qualidade da água, reduzindo a poluição",
      "Aumentar substancialmente a eficiência do uso da água em todos os setores",
      "Implementar a gestão integrada dos recursos hídricos em todos os níveis"
    ],
    connections: [1, 2, 3, 11, 12, 14, 15],
    themes: ["água", "saneamento", "higiene", "recursos hídricos", "poluição aquática"],
    impactAreas: ["acesso à água potável", "tratamento de esgotos", "gestão hídrica", "saúde pública"]
  },
  {
    id: 7,
    title: "Energia Limpa e Acessível",
    shortName: "Energia Acessível e Limpa",
    description: "Garantir acesso à energia barata, confiável, sustentável e renovável para todos.",
    color: "#fcc30b",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-07.png",
    fullDescription: "O objetivo 7 visa garantir o acesso universal a serviços energéticos acessíveis, confiáveis e modernos até 2030. Também busca aumentar substancialmente a participação de energias renováveis na matriz energética global e dobrar a taxa global de melhoria da eficiência energética.",
    targets: [
      "Garantir acesso universal a serviços energéticos acessíveis, confiáveis e modernos",
      "Aumentar substancialmente a participação de energias renováveis na matriz energética global",
      "Dobrar a taxa global de melhoria da eficiência energética",
      "Expandir a infraestrutura e modernizar a tecnologia para fornecimento de serviços de energia modernos e sustentáveis",
      "Facilitar o acesso à pesquisa e tecnologia de energia limpa"
    ],
    connections: [1, 8, 9, 11, 12, 13],
    themes: ["energia", "renováveis", "eficiência energética", "acesso à energia", "tecnologias limpas"],
    impactAreas: ["acesso à eletricidade", "redução de emissões", "desenvolvimento tecnológico", "segurança energética"]
  },
  {
    id: 8,
    title: "Trabalho Decente e Crescimento Econômico",
    shortName: "Trabalho Decente e Crescimento Econômico",
    description: "Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todos.",
    color: "#a21942",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-08.png",
    fullDescription: "O objetivo 8 visa promover o crescimento econômico per capita sustentado e o crescimento do PIB nos países menos desenvolvidos. Também busca atingir níveis mais elevados de produtividade econômica e promover políticas que apoiem atividades produtivas, criação de empregos decentes, empreendedorismo, criatividade e inovação.",
    targets: [
      "Sustentar o crescimento econômico per capita de acordo com as condições nacionais",
      "Atingir níveis mais elevados de produtividade das economias",
      "Promover políticas orientadas para o desenvolvimento",
      "Melhorar progressivamente a eficiência dos recursos globais no consumo e na produção",
      "Alcançar o emprego pleno e produtivo e trabalho decente para todos"
    ],
    connections: [1, 4, 5, 9, 10, 12],
    themes: ["emprego", "crescimento econômico", "produtividade", "inovação", "trabalho decente"],
    impactAreas: ["geração de empregos", "desenvolvimento econômico", "condições de trabalho", "empreendedorismo"]
  },
  {
    id: 9,
    title: "Indústria, Inovação e Infraestrutura",
    shortName: "Indústria, Inovação e Infraestrutura",
    description: "Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.",
    color: "#fd6925",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-09.png",
    fullDescription: "O objetivo 9 visa desenvolver infraestrutura de qualidade, confiável, sustentável e resiliente para apoiar o desenvolvimento econômico e o bem-estar humano. Também busca promover a industrialização inclusiva e sustentável, aumentar significativamente a participação da indústria no setor de emprego, e modernizar a infraestrutura e reabilitar as indústrias para torná-las sustentáveis.",
    targets: [
      "Desenvolver infraestrutura de qualidade, confiável, sustentável e resiliente",
      "Promover a industrialização inclusiva e sustentável",
      "Aumentar o acesso das pequenas indústrias aos serviços financeiros",
      "Modernizar a infraestrutura e reabilitar as indústrias para torná-las sustentáveis",
      "Aumentar a pesquisa científica e melhorar as capacidades tecnológicas dos setores industriais"
    ],
    connections: [7, 8, 11, 12, 13],
    themes: ["infraestrutura", "industrialização", "inovação", "tecnologia", "desenvolvimento econômico"],
    impactAreas: ["desenvolvimento industrial", "avanço tecnológico", "conectividade", "modernização econômica"]
  },
  {
    id: 10,
    title: "Redução das Desigualdades",
    shortName: "Redução das Desigualdades",
    description: "Reduzir a desigualdade dentro dos países e entre eles.",
    color: "#dd1367",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-10.png",
    fullDescription: "O objetivo 10 visa progressivamente alcançar e sustentar o crescimento da renda dos 40% da população mais pobre a uma taxa maior que a média nacional. Também busca empoderar e promover a inclusão social, econômica e política de todos, independentemente da idade, gênero, deficiência, raça, etnia, origem, religião, condição econômica ou outra.",
    targets: [
      "Progressivamente alcançar e sustentar o crescimento da renda dos 40% da população mais pobre",
      "Empoderar e promover a inclusão social, econômica e política de todos",
      "Garantir a igualdade de oportunidades e reduzir as desigualdades de resultados",
      "Adotar políticas fiscais, salariais e de proteção social para alcançar progressivamente uma maior igualdade",
      "Melhorar a regulamentação e monitoramento dos mercados e instituições financeiras globais"
    ],
    connections: [1, 4, 5, 8, 16],
    themes: ["desigualdade", "inclusão", "equidade", "políticas sociais", "justiça econômica"],
    impactAreas: ["diminuição da diferença social", "inclusão socioeconômica", "oportunidades equitativas", "representatividade"]
  },
  {
    id: 11,
    title: "Cidades e Comunidades Sustentáveis",
    shortName: "Cidades e Comunidades Sustentáveis",
    description: "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.",
    color: "#fd9d24",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-11.png",
    fullDescription: "O objetivo 11 visa garantir o acesso de todos à habitação segura, adequada e a preço acessível, e aos serviços básicos. Também busca proporcionar o acesso a sistemas de transporte seguros, acessíveis, sustentáveis e a preço acessível para todos, melhorando a segurança rodoviária por meio da expansão dos transportes públicos.",
    targets: [
      "Garantir acesso de todos à habitação segura, adequada e a preço acessível",
      "Proporcionar acesso a sistemas de transporte seguros, acessíveis e sustentáveis para todos",
      "Aumentar a urbanização inclusiva e sustentável",
      "Proteger e salvaguardar o patrimônio cultural e natural do mundo",
      "Reduzir o impacto ambiental negativo per capita das cidades"
    ],
    connections: [6, 7, 9, 12, 13],
    themes: ["urbanização", "moradia", "mobilidade urbana", "patrimônio cultural", "planejamento urbano"],
    impactAreas: ["cidades sustentáveis", "qualidade de vida urbana", "espaços públicos", "resiliência urbana"]
  },
  {
    id: 12,
    title: "Consumo e Produção Responsáveis",
    shortName: "Consumo e Produção Responsáveis",
    description: "Assegurar padrões de produção e de consumo sustentáveis.",
    color: "#bf8b2e",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-12.png",
    fullDescription: "O objetivo 12 visa implementar o Plano Decenal de Programas sobre Produção e Consumo Sustentáveis, com todos os países tomando medidas. Também busca alcançar o manejo ambientalmente saudável dos produtos químicos e todos os resíduos, e reduzir substancialmente a geração de resíduos por meio da prevenção, redução, reciclagem e reuso.",
    targets: [
      "Implementar o Plano Decenal de Programas sobre Produção e Consumo Sustentáveis",
      "Alcançar gestão sustentável e uso eficiente dos recursos naturais",
      "Reduzir pela metade o desperdício de alimentos per capita mundial",
      "Alcançar o manejo ambientalmente adequado dos produtos químicos e resíduos",
      "Reduzir substancialmente a geração de resíduos"
    ],
    connections: [2, 6, 7, 8, 9, 13, 14, 15],
    themes: ["consumo sustentável", "produção sustentável", "eficiência de recursos", "desperdício", "economia circular"],
    impactAreas: ["redução de resíduos", "uso eficiente de recursos", "consciência de consumo", "processos produtivos sustentáveis"]
  },
  {
    id: 13,
    title: "Ação Contra a Mudança Global do Clima",
    shortName: "Ação Climática",
    description: "Tomar medidas urgentes para combater a mudança climática e seus impactos.",
    color: "#3f7e44",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-13.png",
    fullDescription: "O objetivo 13 visa fortalecer a resiliência e a capacidade de adaptação a riscos relacionados ao clima e catástrofes naturais em todos os países. Também busca integrar medidas da mudança do clima nas políticas, estratégias e planejamentos nacionais, além de melhorar a educação, a conscientização e a capacidade humana e institucional sobre mitigação, adaptação, redução de impacto e alerta precoce da mudança do clima.",
    targets: [
      "Fortalecer a resiliência e a capacidade de adaptação a riscos relacionados ao clima",
      "Integrar medidas da mudança do clima nas políticas nacionais",
      "Melhorar a educação e a conscientização sobre mitigação da mudança do clima",
      "Implementar o compromisso assumido pelos países desenvolvidos na Convenção-Quadro das Nações Unidas sobre Mudança do Clima",
      "Promover mecanismos para aumentar a capacidade de planejamento relacionada à mudança do clima"
    ],
    connections: [2, 7, 9, 11, 12, 14, 15],
    themes: ["clima", "aquecimento global", "resiliência climática", "emissões de carbono", "adaptação climática"],
    impactAreas: ["mitigação de emissões", "prevenção de desastres", "políticas climáticas", "conscientização ambiental"]
  },
  {
    id: 14,
    title: "Vida na Água",
    shortName: "Vida na Água",
    description: "Conservação e uso sustentável dos oceanos, dos mares e dos recursos marinhos para o desenvolvimento sustentável.",
    color: "#0a97d9",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-14.png",
    fullDescription: "O objetivo 14 visa prevenir e reduzir significativamente a poluição marinha de todos os tipos até 2025. Também busca gerir e proteger sustentavelmente os ecossistemas marinhos e costeiros para evitar impactos adversos significativos, inclusive por meio do reforço da sua capacidade de resiliência.",
    targets: [
      "Prevenir e reduzir significativamente a poluição marinha de todos os tipos",
      "Gerir e proteger sustentavelmente os ecossistemas marinhos e costeiros",
      "Minimizar e enfrentar os impactos da acidificação dos oceanos",
      "Regular a coleta e acabar com a sobrepesca e a pesca ilegal",
      "Conservar pelo menos 10% das zonas costeiras e marinhas"
    ],
    connections: [2, 6, 12, 13, 15],
    themes: ["oceanos", "vida marinha", "pesca sustentável", "poluição marinha", "conservação costeira"],
    impactAreas: ["proteção de ecossistemas aquáticos", "biodiversidade marinha", "pesca responsável", "mares saudáveis"]
  },
  {
    id: 15,
    title: "Vida Terrestre",
    shortName: "Vida Terrestre",
    description: "Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da Terra e deter a perda de biodiversidade.",
    color: "#56c02b",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-15.png",
    fullDescription: "O objetivo 15 visa assegurar a conservação, recuperação e uso sustentável de ecossistemas terrestres e de água doce e seus serviços. Também busca promover a implementação da gestão sustentável de todos os tipos de florestas, deter o desmatamento, restaurar florestas degradadas e aumentar substancialmente o florestamento e o reflorestamento globalmente.",
    targets: [
      "Assegurar a conservação, recuperação e uso sustentável de ecossistemas terrestres",
      "Promover a implementação da gestão sustentável de todos os tipos de florestas",
      "Combater a desertificação e restaurar a terra e o solo degradados",
      "Assegurar a conservação de ecossistemas de montanha e sua biodiversidade",
      "Tomar medidas urgentes para reduzir a degradação de habitat naturais e estancar a perda de biodiversidade"
    ],
    connections: [2, 6, 12, 13, 14],
    themes: ["biodiversidade", "florestas", "desertificação", "degradação do solo", "vida selvagem"],
    impactAreas: ["preservação de ecossistemas", "reflorestamento", "combate ao desmatamento", "proteção de espécies"]
  },
  {
    id: 16,
    title: "Paz, Justiça e Instituições Eficazes",
    shortName: "Paz, Justiça e Instituições Eficazes",
    description: "Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis.",
    color: "#00689d",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-16.png",
    fullDescription: "O objetivo 16 visa reduzir significativamente todas as formas de violência e as taxas de mortalidade relacionada em todos os lugares. Também busca acabar com abuso, exploração, tráfico e todas as formas de violência e tortura contra crianças, além de promover o Estado de Direito e garantir a igualdade de acesso à justiça para todos.",
    targets: [
      "Reduzir significativamente todas as formas de violência e as taxas de mortalidade relacionada",
      "Acabar com abuso, exploração, tráfico e todas as formas de violência contra crianças",
      "Promover o Estado de Direito e garantir a igualdade de acesso à justiça para todos",
      "Reduzir significativamente os fluxos financeiros e de armas ilegais",
      "Desenvolver instituições eficazes, responsáveis e transparentes em todos os níveis"
    ],
    connections: [1, 4, 5, 10, 17],
    themes: ["paz", "justiça", "instituições", "governança", "direitos humanos"],
    impactAreas: ["redução da violência", "acesso à justiça", "transparência institucional", "participação cidadã"]
  },
  {
    id: 17,
    title: "Parcerias e Meios de Implementação",
    shortName: "Parcerias para os Objetivos",
    description: "Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.",
    color: "#19486a",
    icon: "/assets/images/sdg-icons/E-WEB-Goal-17.png",
    fullDescription: "O objetivo 17 visa fortalecer a mobilização de recursos internos para melhorar a capacidade nacional para arrecadação de impostos e outras receitas. Também busca aumentar a cooperação Norte-Sul, Sul-Sul e triangular, regional e internacional, para o acesso à ciência, tecnologia e inovação, e aumentar o compartilhamento de conhecimento em termos mutuamente acordados.",
    targets: [
      "Fortalecer a mobilização de recursos domésticos para melhorar a capacidade de arrecadação de impostos",
      "Implementar plenamente os compromissos de assistência oficial ao desenvolvimento",
      "Mobilizar recursos financeiros adicionais para os países em desenvolvimento",
      "Melhorar a cooperação Norte-Sul, Sul-Sul e triangular regional e internacional",
      "Promover o desenvolvimento, a transferência e a difusão de tecnologias ambientalmente corretas"
    ],
    connections: [1, 8, 9, 10, 16],
    themes: ["parcerias", "cooperação internacional", "financiamento", "tecnologia", "desenvolvimento de capacidades"],
    impactAreas: ["colaboração global", "transferência de conhecimento", "mobilização de recursos", "políticas coerentes"]
  }
];

/**
 * Get all SDGs
 * @returns {Array} Array of all SDG objects
 */
export const getAllSDGs = () => {
  return sdgs;
};

/**
 * Get an SDG by its ID
 * @param {number} id - The SDG ID (1-17)
 * @returns {Object|null} The SDG object or null if not found
 */
export const getSDGById = (id) => {
  return sdgs.find(sdg => sdg.id === id) || null;
};

/**
 * Get SDGs by theme
 * @param {string} theme - Theme to search for
 * @returns {Array} Array of SDG objects related to the theme
 */
export const getSDGsByTheme = (theme) => {
  return sdgs.filter(sdg => 
    sdg.themes.some(t => t.toLowerCase().includes(theme.toLowerCase()))
  );
};

/**
 * Get interconnected SDGs for a given SDG
 * @param {number} id - The SDG ID to find connections for
 * @returns {Array} Array of connected SDG objects
 */
export const getConnectedSDGs = (id) => {
  const sdg = getSDGById(id);
  if (!sdg || !sdg.connections) return [];
  
  return sdg.connections.map(connectedId => getSDGById(connectedId)).filter(Boolean);
};

export default sdgs;