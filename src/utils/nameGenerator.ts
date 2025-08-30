import { GenerationFilters, NameSuggestion } from '../types';

// Generate explanations for names
export const getNameExplanation = (name: string) => {
  const explanations: Record<string, string> = {
    'TechFlow': 'Combina "tecnologia" com "fluxo", sugerindo inovação contínua e processos eficientes.',
    'DataCore': 'Representa o núcleo dos dados, ideal para empresas focadas em análise e inteligência.',
    'CloudSync': 'Evoca sincronização na nuvem, perfeito para soluções de armazenamento modernas.',
    'ByteForge': 'Sugere a criação e moldagem de dados digitais, ideal para desenvolvimento.',
    'CodeLab': 'Laboratório de código, transmite experimentação e inovação tecnológica.',
    'PixelWorks': 'Focado em trabalhos visuais e design digital de alta qualidade.',
    'NetSphere': 'Esfera de rede, sugere conectividade global e abrangência.',
    'DigiCraft': 'Artesanato digital, combina criatividade com tecnologia moderna.',
    'EcoVibe': 'Vibração ecológica, perfeito para marcas sustentáveis e conscientes.',
    'GreenTech': 'Tecnologia verde, ideal para inovações ambientalmente responsáveis.',
    'BioFlow': 'Fluxo biológico, sugere processos naturais e sustentáveis.',
    'EarthCore': 'Núcleo da Terra, representa solidez e compromisso ambiental.',
    'SustainLab': 'Laboratório de sustentabilidade, foco em pesquisa e desenvolvimento verde.',
    'CleanWave': 'Onda limpa, evoca energia renovável e pureza ambiental.',
    'NatureSync': 'Sincronização com a natureza, harmonia entre tecnologia e meio ambiente.',
    'EcoSphere': 'Esfera ecológica, representa um ecossistema completo e equilibrado.'
  };
  
  return explanations[name] || 'Nome único criado pela IA, combinando criatividade e relevância para seu projeto.';
};

// Enhanced name templates with more variety
const nameTemplates: Record<string, Record<string, string[]>> = {
  empresa: {
    tecnologia: ['TechFlow', 'DataCore', 'CloudSync', 'ByteForge', 'CodeLab', 'PixelWorks', 'NetSphere', 'DigiCraft', 'InnovateTech', 'CyberCore', 'QuantumLab', 'NeuralSync'],
    sustentabilidade: ['EcoVibe', 'GreenTech', 'BioFlow', 'EarthCore', 'SustainLab', 'CleanWave', 'NatureSync', 'EcoSphere', 'PlanetCare', 'GreenFlow', 'EcoInnovate', 'BioCraft'],
    saude: ['VitalCore', 'HealthFlow', 'MedSync', 'WellnessLab', 'CareHub', 'LifeTech', 'BioHealth', 'MediCore', 'HealthWave', 'VitalSync', 'MedFlow', 'CareCore'],
    educacao: ['LearnFlow', 'EduCore', 'KnowledgeHub', 'StudyLab', 'TeachSync', 'BrainWave', 'SkillForge', 'MindCraft', 'EduFlow', 'LearnCore', 'StudySync', 'KnowledgeLab'],
    financas: ['FinFlow', 'MoneyCore', 'CashSync', 'InvestLab', 'PayHub', 'CoinTech', 'WealthWave', 'CapitalCraft', 'FinTech', 'MoneyFlow', 'InvestCore', 'PaySync'],
    consultoria: ['ConsultCore', 'AdviseFlow', 'StrategyLab', 'ExpertHub', 'SolutionSync', 'InsightWave', 'ProCraft', 'WisdomTech', 'ConsultFlow', 'StrategyCore', 'ExpertSync', 'SolutionLab']
  },
  produto: {
    alimentacao: ['TasteMax', 'FlavorPro', 'FreshPlus', 'YummyCore', 'DeliciousX', 'CrunchWave', 'SavorTech', 'BiteFlow'],
    higiene: ['CleanMax', 'FreshPro', 'PurePlus', 'HygieneX', 'SoftWave', 'CareFlow', 'CleanTech', 'PureCore'],
    moda: ['StyleMax', 'FashionPro', 'TrendPlus', 'ChicCore', 'VogueX', 'StyleWave', 'ModaTech', 'FashionFlow'],
    tecnologia: ['TechMax', 'GadgetPro', 'SmartPlus', 'InnoCore', 'DigitalX', 'TechWave', 'InnoFlow', 'SmartTech'],
    casa: ['HomeMax', 'DecorPro', 'ComfortPlus', 'LivingCore', 'CozyX', 'HomeWave', 'DecorFlow', 'ComfortTech'],
    esportes: ['SportMax', 'FitPro', 'ActivePlus', 'PowerCore', 'SportX', 'FitWave', 'ActiveFlow', 'PowerTech']
  },
  aplicativo: {
    financas: ['PayFlow', 'CoinSync', 'MoneyHub', 'FinTech', 'CashApp', 'WealthSync', 'PayCore', 'FinFlow'],
    saude: ['HealthSync', 'FitFlow', 'WellnessHub', 'MedApp', 'VitalSync', 'CareFlow', 'HealthCore', 'FitHub'],
    games: ['GameFlow', 'PlaySync', 'FunHub', 'GameCore', 'PlayTech', 'FunFlow', 'GameSync', 'PlayCore'],
    educacao: ['LearnSync', 'StudyFlow', 'EduHub', 'KnowledgeApp', 'LearnCore', 'StudySync', 'EduFlow', 'BrainHub'],
    produtividade: ['TaskFlow', 'WorkSync', 'ProductiveHub', 'TaskCore', 'WorkFlow', 'ProductiveSync', 'TaskHub', 'WorkCore'],
    social: ['SocialFlow', 'ConnectSync', 'ChatHub', 'SocialCore', 'ConnectFlow', 'ChatSync', 'SocialHub', 'ConnectCore']
  },
  marca: {
    moda: ['StyleCo', 'FashionHouse', 'TrendStudio', 'ChicBrand', 'VogueWorks', 'StyleCraft', 'FashionLab', 'TrendCo'],
    beleza: ['BeautyCo', 'GlowHouse', 'BeautyStudio', 'CharmBrand', 'GlowWorks', 'BeautyCraft', 'GlowLab', 'CharmCo'],
    alimentacao: ['TasteCo', 'FlavorHouse', 'FoodStudio', 'YummyBrand', 'TasteWorks', 'FlavorCraft', 'FoodLab', 'YummyCo'],
    lifestyle: ['LifeCo', 'VibeHouse', 'LifestyleStudio', 'VibeBrand', 'LifeWorks', 'VibeCraft', 'LifeLab', 'VibeCo'],
    esportes: ['SportCo', 'FitHouse', 'ActiveStudio', 'SportBrand', 'FitWorks', 'ActiveCraft', 'SportLab', 'FitCo'],
    arte: ['ArtCo', 'CreativeHouse', 'ArtStudio', 'CreativeBrand', 'ArtWorks', 'CreativeCraft', 'ArtLab', 'CreativeCo']
  },
  bebe: {
    masculino: {
      moderno: ['Enzo', 'Noah', 'Theo', 'Gael', 'Arthur', 'Heitor', 'Davi', 'Lorenzo', 'Miguel', 'Benício'],
      biblico: ['Gabriel', 'Samuel', 'Daniel', 'Rafael', 'João', 'Lucas', 'Mateus', 'Pedro', 'Paulo', 'Tiago'],
      classico: ['Carlos', 'José', 'Antonio', 'Francisco', 'Manuel', 'João', 'Pedro', 'Luis', 'Fernando', 'Ricardo'],
      raro: ['Cael', 'Zion', 'Kai', 'Levi', 'Asher', 'Ezra', 'Atlas', 'Orion', 'Phoenix', 'Sage'],
      internacional: ['Alex', 'Leo', 'Max', 'Ian', 'Ryan', 'Kevin', 'Eric', 'Adam', 'Nathan', 'Oliver']
    },
    feminino: {
      moderno: ['Luna', 'Aurora', 'Maya', 'Isis', 'Antonella', 'Valentina', 'Cecília', 'Eloá', 'Liz', 'Maitê'],
      biblico: ['Maria', 'Ana', 'Sara', 'Rebeca', 'Ester', 'Raquel', 'Débora', 'Miriã', 'Abigail', 'Ruth'],
      classico: ['Helena', 'Isabel', 'Beatriz', 'Catarina', 'Mariana', 'Fernanda', 'Patrícia', 'Cristina', 'Adriana', 'Juliana'],
      raro: ['Zara', 'Aria', 'Nova', 'Ivy', 'Sage', 'Luna', 'Iris', 'Vera', 'Cora', 'Nara'],
      internacional: ['Emma', 'Sophia', 'Olivia', 'Ava', 'Isabella', 'Mia', 'Charlotte', 'Amelia', 'Harper', 'Evelyn']
    },
    unissex: {
      moderno: ['River', 'Sky', 'Ocean', 'Storm', 'Phoenix', 'Sage', 'Quinn', 'Rowan', 'Avery', 'Jordan'],
      biblico: ['Jordan', 'Eden', 'Ariel', 'Gael', 'Noa', 'Eli', 'Micah', 'Shiloh', 'Zion', 'Eden'],
      classico: ['Alex', 'Sam', 'Chris', 'Pat', 'Robin', 'Casey', 'Jamie', 'Taylor', 'Morgan', 'Drew'],
      raro: ['Sage', 'River', 'Phoenix', 'Ocean', 'Storm', 'Sky', 'Atlas', 'Nova', 'Zen', 'Kai'],
      internacional: ['Alex', 'Sam', 'Jordan', 'Taylor', 'Casey', 'Morgan', 'Jamie', 'Robin', 'Avery', 'Quinn']
    }
  }
};

export const generateNames = (filters: GenerationFilters): NameSuggestion[] => {
  const { type, category, style, gender, quantity } = filters;
  
  const results: NameSuggestion[] = [];
  const usedNames = new Set<string>();

  let namePool: string[] = [];

  if (type === 'bebe') {
    const genderKey = gender || 'unissex';
    const styleKey = style || 'moderno';
    namePool = nameTemplates.bebe[genderKey]?.[styleKey] || nameTemplates.bebe.unissex.moderno;
  } else {
    const categoryKey = category || Object.keys(nameTemplates[type] || {})[0];
    namePool = nameTemplates[type]?.[categoryKey] || [];
  }

  // If no specific pool found, create generic names
  if (namePool.length === 0) {
    const prefixes = ['Smart', 'Pro', 'Tech', 'Digital', 'Next', 'Ultra', 'Super', 'Mega', 'Prime', 'Elite'];
    const suffixes = ['Hub', 'Lab', 'Core', 'Flow', 'Sync', 'Wave', 'Craft', 'Works', 'Studio', 'Co'];
    
    for (let i = 0; i < 20; i++) {
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      namePool.push(prefix + suffix);
    }
  }

  // Generate names from pool
  const shuffled = [...namePool].sort(() => Math.random() - 0.5);
  
  for (let i = 0; i < Math.min(quantity, shuffled.length); i++) {
    const name = shuffled[i];

    if (!usedNames.has(name)) {
      usedNames.add(name);
      results.push({
        id: `name-${Date.now()}-${i}`,
        name: name,
        isFavorite: false,
        description: getNameExplanation(name)
      });
    }
  }

  return results;
}