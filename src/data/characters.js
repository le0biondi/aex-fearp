// src/data/characters.js
export const characters = [
  // Case 1: O Mistério do Rio Poluído
  {
    id: "char-1-1",
    name: "Dona Clara",
    role: "Moradora da comunidade ribeirinha",
    avatar: "/assets/images/characters/clara.jpg",
    description: "Uma senhora idosa que vive na comunidade há mais de 60 anos e conhece profundamente a história do rio.",
    dialogues: {
      initial: "char-1-1-initial",
    },
    location: "community",
    hasClues: ["clue-1-3"]
  },
  {
    id: "char-1-2",
    name: "Dr. Silva",
    role: "Médico do posto de saúde local",
    avatar: "/assets/images/characters/dr-silva.jpg",
    description: "Médico dedicado que atende a população ribeirinha e tem notado um aumento em problemas de saúde relacionados à água.",
    dialogues: {
      initial: "char-1-2-initial",
    },
    location: "community",
    hasClues: ["clue-1-6"]
  },
  {
    id: "char-1-3",
    name: "Eng. Rodrigues",
    role: "Engenheiro da fábrica química",
    avatar: "/assets/images/characters/rodrigues.jpg",
    description: "Engenheiro ambiental responsável pelo sistema de tratamento de resíduos da fábrica.",
    dialogues: {
      initial: "char-1-3-initial",
    },
    location: "factory",
    hasClues: []
  },
  {
    id: "char-1-4",
    name: "Ricardo Menezes",
    role: "Diretor executivo da fábrica",
    avatar: "/assets/images/characters/ricardo.jpg",
    description: "Executivo focado em resultados financeiros, com pouca preocupação com questões ambientais.",
    dialogues: {
      initial: "char-1-4-initial",
    },
    location: "factory",
    hasClues: ["clue-1-7"]
  },
  {
    id: "char-1-5",
    name: "Secretária Marina",
    role: "Secretária municipal de meio ambiente",
    avatar: "/assets/images/characters/marina.jpg",
    description: "Funcionária pública responsável pela fiscalização ambiental na região.",
    dialogues: {
      initial: "char-1-5-initial",
    },
    location: "city-hall",
    hasClues: ["clue-1-4"]
  },

  // Case 2: Desigualdade Educacional
  {
    id: "char-2-1",
    name: "Professora Camila",
    role: "Professora da escola periférica",
    avatar: "/assets/images/characters/camila.jpg",
    description: "Professora dedicada que luta diariamente contra as limitações de recursos para oferecer educação de qualidade.",
    dialogues: {
      initial: "char-2-1-initial",
    },
    location: "underprivileged-school",
    hasClues: ["clue-2-3"]
  },
  {
    id: "char-2-2",
    name: "Pedro",
    role: "Estudante da escola periférica",
    avatar: "/assets/images/characters/pedro.jpg",
    description: "Aluno dedicado que enfrenta diversos desafios socioeconômicos que afetam seu desempenho escolar.",
    dialogues: {
      initial: "char-2-2-initial",
    },
    location: "underprivileged-school",
    hasClues: ["clue-2-7"]
  },
  {
    id: "char-2-3",
    name: "Diretor Paulo",
    role: "Diretor da escola modelo",
    avatar: "/assets/images/characters/paulo.jpg",
    description: "Gestor de uma escola bem estruturada que atende estudantes de famílias de alta renda.",
    dialogues: {
      initial: "char-2-3-initial",
    },
    location: "wealthy-school",
    hasClues: []
  },
  {
    id: "char-2-4",
    name: "Secretário Eduardo",
    role: "Secretário municipal de educação",
    avatar: "/assets/images/characters/eduardo.jpg",
    description: "Responsável pelas políticas educacionais e distribuição de recursos entre as escolas da cidade.",
    dialogues: {
      initial: "char-2-4-initial",
    },
    location: "education-department",
    hasClues: ["clue-2-4", "clue-2-1"]
  },
  {
    id: "char-2-5",
    name: "Coordenadora Lúcia",
    role: "Coordenadora do centro comunitário",
    avatar: "/assets/images/characters/lucia.jpg",
    description: "Líder comunitária que desenvolve projetos sociais para complementar a educação formal nas áreas periféricas.",
    dialogues: {
      initial: "char-2-5-initial",
    },
    location: "community-center",
    hasClues: ["clue-2-8"]
  },

  // Case 3: Crise Climática e Agricultura
  {
    id: "char-3-1",
    name: "Sr. Joaquim",
    role: "Agricultor tradicional",
    avatar: "/assets/images/characters/joaquim.jpg",
    description: "Agricultor que cultiva a terra da mesma forma há décadas e está enfrentando dificuldades com as mudanças climáticas.",
    dialogues: {
      initial: "char-3-1-initial",
    },
    location: "drought-farm",
    hasClues: ["clue-3-4"]
  },
  {
    id: "char-3-2",
    name: "Ana Ferreira",
    role: "Agricultora agroecológica",
    avatar: "/assets/images/characters/ana.jpg",
    description: "Agricultora que implementou práticas sustentáveis e está conseguindo adaptar-se melhor às mudanças climáticas.",
    dialogues: {
      initial: "char-3-2-initial",
    },
    location: "sustainable-farm",
    hasClues: ["clue-3-10"]
  },
  {
    id: "char-3-3",
    name: "Dra. Beatriz",
    role: "Cientista climática",
    avatar: "/assets/images/characters/beatriz.jpg",
    description: "Pesquisadora especializada em mudanças climáticas e seus impactos na agricultura local.",
    dialogues: {
      initial: "char-3-3-initial",
    },
    location: "research-station",
    hasClues: ["clue-3-1", "clue-3-8"]
  },
  {
    id: "char-3-4",
    name: "Eng. Roberto",
    role: "Engenheiro agrônomo da extensão rural",
    avatar: "/assets/images/characters/roberto.jpg",
    description: "Especialista que oferece assistência técnica a agricultores para adaptação às mudanças climáticas.",
    dialogues: {
      initial: "char-3-4-initial",
    },
    location: "rural-extension-center",
    hasClues: ["clue-3-5", "clue-3-7", "clue-3-9"]
  },
  {
    id: "char-3-5",
    name: "Dona Teresa",
    role: "Feirante no mercado local",
    avatar: "/assets/images/characters/teresa.jpg",
    description: "Comerciante que vende produtos agrícolas e percebe as mudanças na disponibilidade e preço dos alimentos.",
    dialogues: {
      initial: "char-3-5-initial",
    },
    location: "local-market",
    hasClues: ["clue-3-6"]
  }
];

/**
 * Get all characters in the game
 * @returns {Array} Array of all characters
 */
export const getAllCharacters = () => {
  return characters;
};

/**
 * Get a character by ID
 * @param {string} id - Character ID
 * @returns {Object|null} Character object or null if not found
 */
export const getCharacterById = (id) => {
  return characters.find(character => character.id === id) || null;
};

/**
 * Get characters by location
 * @param {string} locationId - Location ID
 * @returns {Array} Array of characters at the specified location
 */
export const getCharactersByLocation = (locationId) => {
  return characters.filter(character => character.location === locationId);
};

/**
 * Get characters that have specific clues
 * @param {string|Array} clueIds - Clue ID or array of clue IDs
 * @returns {Array} Array of characters that have the specified clue(s)
 */
export const getCharactersByClues = (clueIds) => {
  const clueArray = Array.isArray(clueIds) ? clueIds : [clueIds];
  return characters.filter(character => 
    character.hasClues && 
    character.hasClues.some(id => clueArray.includes(id))
  );
};

export default characters;