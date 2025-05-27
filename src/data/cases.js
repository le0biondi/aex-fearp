// src/data/cases.js
export const cases = [
  {
    id: "case-1",
    title: "O Mistério do Rio Poluído",
    description: "Uma comunidade ribeirinha enfrenta uma grave crise de saúde relacionada à poluição do rio local. Sua missão é descobrir a fonte da contaminação e os responsáveis, além de entender quais Objetivos de Desenvolvimento Sustentável estão sendo violados.",
    difficulty: "iniciante",
    thumbnail: "/assets/images/cases/polluted-river.jpg",
    background: "O Rio Esperança tem sido a fonte de vida para a comunidade Vila das Águas por gerações. Nos últimos meses, no entanto, moradores começaram a notar mudanças na água e um aumento alarmante de doenças. Peixes estão morrendo, a água tem um odor estranho, e várias pessoas foram hospitalizadas após consumir água ou peixes do rio.",
    objectives: [
      {
        id: "obj-1-1",
        description: "Identificar a fonte da poluição no rio",
        completed: false,
        requiredClues: ["clue-1-5"]
      },
      {
        id: "obj-1-2",
        description: "Descobrir quem são os responsáveis pela contaminação",
        completed: false,
        requiredClues: ["clue-1-7", "clue-1-8"]
      },
      {
        id: "obj-1-3",
        description: "Entender os impactos na saúde da comunidade",
        completed: false,
        requiredClues: ["clue-1-3", "clue-1-6"]
      },
      {
        id: "obj-1-4",
        description: "Identificar os Objetivos de Desenvolvimento Sustentável relacionados ao caso",
        completed: false,
        requiredSDGs: [6, 3, 14, 12]
      }
    ],
    locations: [
      {
        id: "riverside",
        name: "Margem do Rio",
        description: "A área às margens do Rio Esperança, onde moradores pescam e usam a água para várias atividades.",
        image: "/assets/images/locations/riverside.jpg",
        availableClues: ["clue-1-1", "clue-1-2"],
        characters: ["char-1-1"]
      },
      {
        id: "community",
        name: "Comunidade Vila das Águas",
        description: "Uma pequena vila onde vivem as famílias que dependem do rio para subsistência e atividades diárias.",
        image: "/assets/images/locations/community.jpg",
        availableClues: [],
        characters: ["char-1-1", "char-1-2"]
      },
      {
        id: "factory",
        name: "Fábrica Química Industrial",
        description: "Uma fábrica instalada há cerca de dois anos nas proximidades do rio, que processa produtos químicos para diversos setores.",
        image: "/assets/images/locations/chemical-factory.jpg",
        availableClues: ["clue-1-5", "clue-1-7", "clue-1-8"],
        characters: ["char-1-3", "char-1-4"]
      },
      {
        id: "city-hall",
        name: "Prefeitura",
        description: "Centro administrativo da cidade, onde estão os órgãos governamentais locais, incluindo a secretaria de meio ambiente.",
        image: "/assets/images/locations/city-hall.jpg",
        availableClues: ["clue-1-4"],
        characters: ["char-1-5"]
      }
    ],
    requiredClues: ["clue-1-1", "clue-1-2", "clue-1-5", "clue-1-7"],
    dialogues: {
      "char-1-1-initial": {
        text: "Olá, investigador. É bom ver alguém se preocupando com nosso problema. Estamos desesperados! Tenho pescado neste rio desde criança, e nunca vi nada assim. A água está com um cheiro estranho, e muitas pessoas estão ficando doentes depois de usar a água ou comer os peixes.",
        choices: [
          {
            id: "choice-1",
            text: "Quando você começou a perceber essas mudanças no rio?",
            nextNodeId: "char-1-1-response-1"
          },
          {
            id: "choice-2",
            text: "Você suspeita de alguma coisa ou alguém específico?",
            nextNodeId: "char-1-1-response-2"
          },
          {
            id: "choice-3",
            text: "Como isso tem afetado a vida da comunidade?",
            nextNodeId: "char-1-1-response-3"
          }
        ]
      },
      "char-1-1-response-1": {
        text: "Foi há cerca de um ano, mais ou menos quando aquela fábrica nova começou a funcionar a todo vapor. No início eram só pequenas mudanças - a água um pouco mais turva, menos peixes. Mas nos últimos meses piorou muito. Agora tem dias que a água fica com uma coloração estranha, um cheiro forte de produtos químicos.",
        choices: [
          {
            id: "choice-1",
            text: "Vocês já procuraram as autoridades ambientais?",
            nextNodeId: "char-1-1-response-4"
          },
          {
            id: "choice-2",
            text: "Você tem alguma prova dessas mudanças no rio?",
            nextNodeId: "char-1-1-response-5",
            revealClueId: "clue-1-3"
          }
        ]
      }
      // Additional dialogue nodes would continue here
    }
  },
  {
    id: "case-2",
    title: "Desigualdade Educacional",
    description: "Em uma cidade dividida entre áreas ricas e periféricas, há uma grande disparidade na qualidade da educação oferecida. Investigue as causas e consequências dessa desigualdade.",
    difficulty: "intermediário",
    thumbnail: "/assets/images/cases/educational-inequality.jpg",
    background: "Cidade Nova sempre se orgulhou de seu desenvolvimento econômico, mas esse crescimento não beneficiou a todos igualmente. Enquanto escolas em áreas privilegiadas exibem excelentes resultados e infraestrutura de ponta, instituições em bairros periféricos enfrentam problemas graves de infraestrutura, evasão escolar e baixo desempenho. Sua missão é entender as raízes dessa desigualdade e como ela viola direitos fundamentais.",
    objectives: [
      {
        id: "obj-2-1",
        description: "Documentar as diferenças de infraestrutura entre escolas",
        completed: false,
        requiredClues: ["clue-2-1"]
      },
      {
        id: "obj-2-2",
        description: "Identificar os fatores que causam a evasão escolar",
        completed: false,
        requiredClues: ["clue-2-2", "clue-2-7"]
      },
      {
        id: "obj-2-3",
        description: "Analisar como a distribuição de recursos afeta a qualidade do ensino",
        completed: false,
        requiredClues: ["clue-2-4", "clue-2-6"]
      },
      {
        id: "obj-2-4",
        description: "Identificar os Objetivos de Desenvolvimento Sustentável relacionados ao caso",
        completed: false,
        requiredSDGs: [4, 10, 1]
      }
    ],
    locations: [
      {
        id: "underprivileged-school",
        name: "Escola Municipal Novo Horizonte",
        description: "Uma escola pública localizada em um bairro periférico, enfrentando diversos desafios estruturais.",
        image: "/assets/images/locations/underprivileged-school.jpg",
        availableClues: ["clue-2-2", "clue-2-3", "clue-2-7"],
        characters: ["char-2-1", "char-2-2"]
      },
      {
        id: "wealthy-school",
        name: "Colégio Excelência",
        description: "Uma escola bem estruturada em um bairro nobre, com recursos abundantes e resultados acadêmicos notáveis.",
        image: "/assets/images/locations/wealthy-school.jpg",
        availableClues: [],
        characters: ["char-2-3"]
      },
      {
        id: "education-department",
        name: "Secretaria Municipal de Educação",
        description: "Órgão responsável pela gestão da educação pública na cidade, incluindo distribuição de recursos.",
        image: "/assets/images/locations/education-department.jpg",
        availableClues: ["clue-2-1", "clue-2-4", "clue-2-6"],
        characters: ["char-2-4"]
      },
      {
        id: "community-center",
        name: "Centro Comunitário União",
        description: "Espaço gerido por moradores locais que oferece atividades complementares para estudantes da periferia.",
        image: "/assets/images/locations/community-center.jpg",
        availableClues: ["clue-2-5", "clue-2-8"],
        characters: ["char-2-5"]
      }
    ],
    requiredClues: ["clue-2-1", "clue-2-2", "clue-2-4", "clue-2-7"],
    dialogues: {
      // Dialogue structures similar to Case 1
    }
  },
  {
    id: "case-3",
    title: "Crise Climática e Agricultura",
    description: "Produtores rurais enfrentam os efeitos das mudanças climáticas que ameaçam sua produção e sustento. Investigue os impactos e possíveis soluções sustentáveis.",
    difficulty: "avançado",
    thumbnail: "/assets/images/cases/climate-agriculture.jpg",
    background: "A região de Vale Verde sempre foi conhecida por sua produção agrícola abundante. Nos últimos anos, no entanto, padrões climáticos extremos e imprevisíveis têm causado perdas significativas nas colheitas. Enquanto alguns agricultores enfrentam dificuldades crescentes para manter seus meios de vida tradicionais, outros começam a implementar práticas inovadoras para se adaptar à nova realidade climática. Sua missão é entender como as mudanças climáticas estão afetando a agricultura local e explorar soluções sustentáveis.",
    objectives: [
      {
        id: "obj-3-1",
        description: "Documentar os impactos das mudanças climáticas na produção agrícola",
        completed: false,
        requiredClues: ["clue-3-1", "clue-3-2", "clue-3-4"]
      },
      {
        id: "obj-3-2",
        description: "Identificar práticas agrícolas resilientes às mudanças climáticas",
        completed: false,
        requiredClues: ["clue-3-3", "clue-3-5", "clue-3-7"]
      },
      {
        id: "obj-3-3",
        description: "Analisar as consequências para a segurança alimentar e economia local",
        completed: false,
        requiredClues: ["clue-3-6", "clue-3-9"]
      },
      {
        id: "obj-3-4",
        description: "Identificar os Objetivos de Desenvolvimento Sustentável relacionados ao caso",
        completed: false,
        requiredSDGs: [2, 13, 15, 6]
      }
    ],
    locations: [
      {
        id: "drought-farm",
        name: "Fazenda Impactada pela Seca",
        description: "Propriedade rural que utiliza métodos tradicionais de cultivo e está sofrendo severamente com as mudanças climáticas.",
        image: "/assets/images/locations/drought-farm.jpg",
        availableClues: ["clue-3-2", "clue-3-4"],
        characters: ["char-3-1"]
      },
      {
        id: "sustainable-farm",
        name: "Fazenda Agroecológica Novo Caminho",
        description: "Propriedade que implementou técnicas sustentáveis e está conseguindo adaptar-se melhor ao novo cenário climático.",
        image: "/assets/images/locations/sustainable-farm.jpg",
        availableClues: ["clue-3-3", "clue-3-10"],
        characters: ["char-3-2"]
      },
      {
        id: "research-station",
        name: "Estação de Pesquisa Climática",
        description: "Centro de estudos dedicado à coleta de dados climáticos e seus efeitos na agricultura regional.",
        image: "/assets/images/locations/research-station.jpg",
        availableClues: ["clue-3-1", "clue-3-8"],
        characters: ["char-3-3"]
      },
      {
        id: "rural-extension-center",
        name: "Centro de Extensão Rural",
        description: "Instituição que oferece assistência técnica aos agricultores, incluindo tecnologias adaptativas.",
        image: "/assets/images/locations/extension-center.jpg",
        availableClues: ["clue-3-5", "clue-3-7", "clue-3-9"],
        characters: ["char-3-4"]
      },
      {
        id: "local-market",
        name: "Mercado Local",
        description: "Feira onde agricultores vendem seus produtos e onde os impactos na disponibilidade e preço dos alimentos são evidentes.",
        image: "/assets/images/locations/local-market.jpg",
        availableClues: ["clue-3-6"],
        characters: ["char-3-5"]
      }
    ],
    requiredClues: ["clue-3-1", "clue-3-3", "clue-3-4", "clue-3-6", "clue-3-10"],
    dialogues: {
      // Dialogue structures similar to previous cases
    }
  }
];

/**
 * Get all available cases
 * @returns {Array} Array of all case objects
 */
export const getAllCases = () => {
  return cases;
};

/**
 * Get a case by ID
 * @param {string} id - Case ID to search for
 * @returns {Object|null} The case object or null if not found
 */
export const getCaseById = (id) => {
  return cases.find(caseData => caseData.id === id) || null;
};

/**
 * Get all locations for a specific case
 * @param {string} caseId - Case ID to get locations for
 * @returns {Array} Array of locations for the case
 */
export const getLocationsByCaseId = (caseId) => {
  const caseData = getCaseById(caseId);
  return caseData ? caseData.locations : [];
};

/**
 * Get a location by its ID within a case
 * @param {string} caseId - Case ID
 * @param {string} locationId - Location ID
 * @returns {Object|null} The location object or null if not found
 */
export const getLocationById = (caseId, locationId) => {
  const caseData = getCaseById(caseId);
  if (!caseData) return null;
  
  return caseData.locations.find(location => location.id === locationId) || null;
};

/**
 * Get case objectives
 * @param {string} caseId - Case ID
 * @returns {Array} Array of objective objects for the case
 */
export const getCaseObjectives = (caseId) => {
  const caseData = getCaseById(caseId);
  return caseData ? caseData.objectives : [];
};

export default cases;