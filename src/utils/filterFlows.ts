import { FilterFlow, FilterStep } from '../types';

export const filterFlows: Record<string, FilterFlow> = {
  empresa: {
    type: 'empresa',
    steps: [
      {
        id: 'style',
        title: 'Estilo do Nome',
        question: 'Qual estilo representa melhor sua empresa?',
        options: [
          { id: 'moderno', label: 'Moderno', description: 'Nomes contemporâneos e inovadores' },
          { id: 'minimalista', label: 'Minimalista', description: 'Simples, limpo e direto' },
          { id: 'classico', label: 'Clássico', description: 'Tradicional e confiável' },
          { id: 'elegante', label: 'Elegante', description: 'Sofisticado e refinado' },
          { id: 'inovador', label: 'Inovador', description: 'Criativo e disruptivo' }
        ],
        required: true
      },
      {
        id: 'category',
        title: 'Segmento de Mercado',
        question: 'Em qual área sua empresa atua?',
        options: [
          { id: 'tecnologia', label: 'Tecnologia', description: 'Software, hardware, TI' },
          { id: 'sustentabilidade', label: 'Sustentabilidade', description: 'Meio ambiente, energia limpa' },
          { id: 'saude', label: 'Saúde', description: 'Medicina, bem-estar, fitness' },
          { id: 'educacao', label: 'Educação', description: 'Ensino, treinamento, cursos' },
          { id: 'financas', label: 'Finanças', description: 'Bancos, investimentos, fintech' },
          { id: 'consultoria', label: 'Consultoria', description: 'Serviços profissionais' }
        ],
        required: true
      },
      {
        id: 'language',
        title: 'Idioma do Nome',
        question: 'Em que idioma deve ser o nome?',
        options: [
          { id: 'portugues', label: 'Português', description: 'Mercado brasileiro' },
          { id: 'ingles', label: 'Inglês', description: 'Alcance internacional' },
          { id: 'internacional', label: 'Internacional', description: 'Fácil pronúncia global' }
        ],
        required: true
      },
      {
        id: 'size',
        title: 'Tamanho do Nome',
        question: 'Qual o tamanho ideal?',
        options: [
          { id: 'curto', label: 'Curto', description: '1-2 palavras, até 8 letras' },
          { id: 'medio', label: 'Médio', description: '2-3 palavras, até 15 letras' },
          { id: 'longo', label: 'Longo', description: '3+ palavras, mais descritivo' }
        ],
        required: true
      },
      {
        id: 'quantity',
        title: 'Quantidade de Nomes',
        question: 'Quantas sugestões você quer?',
        options: [
          { id: '3', label: '3 nomes', description: 'Opções selecionadas' },
          { id: '5', label: '5 nomes', description: 'Boa variedade' },
          { id: '10', label: '10 nomes', description: 'Muitas opções' }
        ],
        required: true
      }
    ]
  },
  marca: {
    type: 'marca',
    steps: [
      {
        id: 'style',
        title: 'Estilo do Nome',
        question: 'Qual estilo representa melhor sua marca?',
        options: [
          { id: 'moderno', label: 'Moderno', description: 'Contemporâneo e atual' },
          { id: 'minimalista', label: 'Minimalista', description: 'Simples e memorável' },
          { id: 'classico', label: 'Clássico', description: 'Atemporal e confiável' },
          { id: 'elegante', label: 'Elegante', description: 'Sofisticado e premium' },
          { id: 'inovador', label: 'Inovador', description: 'Único e diferenciado' }
        ],
        required: true
      },
      {
        id: 'category',
        title: 'Segmento de Mercado',
        question: 'Em qual área sua marca atua?',
        options: [
          { id: 'moda', label: 'Moda', description: 'Roupas, acessórios, estilo' },
          { id: 'beleza', label: 'Beleza', description: 'Cosméticos, cuidados pessoais' },
          { id: 'alimentacao', label: 'Alimentação', description: 'Comida, bebidas, gastronomia' },
          { id: 'lifestyle', label: 'Lifestyle', description: 'Estilo de vida, decoração' },
          { id: 'esportes', label: 'Esportes', description: 'Fitness, atividades físicas' },
          { id: 'arte', label: 'Arte', description: 'Criatividade, design, cultura' }
        ],
        required: true
      },
      {
        id: 'language',
        title: 'Idioma do Nome',
        question: 'Em que idioma deve ser o nome?',
        options: [
          { id: 'portugues', label: 'Português', description: 'Mercado brasileiro' },
          { id: 'ingles', label: 'Inglês', description: 'Alcance internacional' },
          { id: 'internacional', label: 'Internacional', description: 'Fácil pronúncia global' }
        ],
        required: true
      },
      {
        id: 'size',
        title: 'Tamanho do Nome',
        question: 'Qual o tamanho ideal?',
        options: [
          { id: 'curto', label: 'Curto', description: '1-2 palavras, até 8 letras' },
          { id: 'medio', label: 'Médio', description: '2-3 palavras, até 15 letras' },
          { id: 'longo', label: 'Longo', description: '3+ palavras, mais descritivo' }
        ],
        required: true
      },
      {
        id: 'quantity',
        title: 'Quantidade de Nomes',
        question: 'Quantas sugestões você quer?',
        options: [
          { id: '3', label: '3 nomes', description: 'Opções selecionadas' },
          { id: '5', label: '5 nomes', description: 'Boa variedade' },
          { id: '10', label: '10 nomes', description: 'Muitas opções' }
        ],
        required: true
      }
    ]
  },
  produto: {
    type: 'produto',
    steps: [
      {
        id: 'style',
        title: 'Estilo do Nome',
        question: 'Qual estilo melhor define seu produto?',
        options: [
          { id: 'criativo', label: 'Criativo', description: 'Original e imaginativo' },
          { id: 'funcional', label: 'Funcional', description: 'Descritivo e claro' },
          { id: 'divertido', label: 'Divertido', description: 'Descontraído e alegre' },
          { id: 'impactante', label: 'Impactante', description: 'Marcante e memorável' }
        ],
        required: true
      },
      {
        id: 'category',
        title: 'Categoria do Produto',
        question: 'Qual a categoria do seu produto?',
        options: [
          { id: 'alimentacao', label: 'Alimentação', description: 'Comidas, bebidas, snacks' },
          { id: 'higiene', label: 'Higiene', description: 'Cuidados pessoais, limpeza' },
          { id: 'moda', label: 'Moda', description: 'Roupas, calçados, acessórios' },
          { id: 'tecnologia', label: 'Tecnologia', description: 'Eletrônicos, gadgets, apps' },
          { id: 'casa', label: 'Casa', description: 'Decoração, móveis, utensílios' },
          { id: 'esportes', label: 'Esportes', description: 'Equipamentos, suplementos' }
        ],
        required: true
      },
      {
        id: 'language',
        title: 'Idioma do Nome',
        question: 'Em que idioma deve ser o nome?',
        options: [
          { id: 'portugues', label: 'Português', description: 'Mercado brasileiro' },
          { id: 'ingles', label: 'Inglês', description: 'Alcance internacional' },
          { id: 'internacional', label: 'Internacional', description: 'Fácil pronúncia global' }
        ],
        required: true
      },
      {
        id: 'size',
        title: 'Tamanho do Nome',
        question: 'Qual o tamanho ideal?',
        options: [
          { id: 'curto', label: 'Curto', description: '1-2 palavras, até 8 letras' },
          { id: 'medio', label: 'Médio', description: '2-3 palavras, até 15 letras' },
          { id: 'longo', label: 'Longo', description: '3+ palavras, mais descritivo' }
        ],
        required: true
      },
      {
        id: 'quantity',
        title: 'Quantidade de Nomes',
        question: 'Quantas sugestões você quer?',
        options: [
          { id: '3', label: '3 nomes', description: 'Opções selecionadas' },
          { id: '5', label: '5 nomes', description: 'Boa variedade' },
          { id: '10', label: '10 nomes', description: 'Muitas opções' }
        ],
        required: true
      }
    ]
  },
  aplicativo: {
    type: 'aplicativo',
    steps: [
      {
        id: 'style',
        title: 'Estilo do Nome',
        question: 'Qual estilo combina com seu app?',
        options: [
          { id: 'curto', label: 'Curto', description: 'Nomes concisos e diretos' },
          { id: 'minimalista', label: 'Minimalista', description: 'Simples e clean' },
          { id: 'tecnologico', label: 'Tecnológico', description: 'Moderno e tech' },
          { id: 'inovador', label: 'Inovador', description: 'Criativo e único' }
        ],
        required: true
      },
      {
        id: 'category',
        title: 'Categoria do App',
        question: 'Qual a categoria do seu aplicativo?',
        options: [
          { id: 'financas', label: 'Finanças', description: 'Bancos, investimentos, pagamentos' },
          { id: 'saude', label: 'Saúde', description: 'Fitness, medicina, bem-estar' },
          { id: 'games', label: 'Games', description: 'Jogos, entretenimento' },
          { id: 'educacao', label: 'Educação', description: 'Aprendizado, cursos, idiomas' },
          { id: 'produtividade', label: 'Produtividade', description: 'Trabalho, organização, tarefas' },
          { id: 'social', label: 'Social', description: 'Redes sociais, comunicação' }
        ],
        required: true
      },
      {
        id: 'language',
        title: 'Alcance do Nome',
        question: 'Qual o alcance desejado?',
        options: [
          { id: 'portugues', label: 'Português', description: 'Mercado brasileiro' },
          { id: 'ingles', label: 'Inglês', description: 'Alcance internacional' },
          { id: 'internacional', label: 'Internacional', description: 'Fácil pronúncia global' }
        ],
        required: true
      },
      {
        id: 'size',
        title: 'Tamanho do Nome',
        question: 'Qual o tamanho ideal?',
        options: [
          { id: 'curto', label: 'Curto', description: '1 palavra, até 6 letras' },
          { id: 'medio', label: 'Médio', description: '1-2 palavras, até 10 letras' },
          { id: 'longo', label: 'Longo', description: '2+ palavras, mais descritivo' }
        ],
        required: true
      },
      {
        id: 'quantity',
        title: 'Quantidade de Nomes',
        question: 'Quantas sugestões você quer?',
        options: [
          { id: '3', label: '3 nomes', description: 'Opções selecionadas' },
          { id: '5', label: '5 nomes', description: 'Boa variedade' },
          { id: '10', label: '10 nomes', description: 'Muitas opções' }
        ],
        required: true
      }
    ]
  },
  bebe: {
    type: 'bebe',
    steps: [
      {
        id: 'gender',
        title: 'Gênero',
        question: 'Para qual gênero é o nome?',
        options: [
          { id: 'masculino', label: 'Masculino', description: 'Nomes para meninos' },
          { id: 'feminino', label: 'Feminino', description: 'Nomes para meninas' },
          { id: 'unissex', label: 'Unissex', description: 'Nomes para qualquer gênero' }
        ],
        required: true
      },
      {
        id: 'style',
        title: 'Estilo do Nome',
        question: 'Qual estilo você prefere?',
        options: [
          { id: 'moderno', label: 'Moderno', description: 'Nomes contemporâneos e atuais' },
          { id: 'biblico', label: 'Bíblico', description: 'Nomes de origem bíblica' },
          { id: 'classico', label: 'Clássico', description: 'Nomes tradicionais e atemporais' },
          { id: 'raro', label: 'Raro', description: 'Nomes únicos e pouco comuns' },
          { id: 'internacional', label: 'Internacional', description: 'Nomes de fácil pronúncia' }
        ],
        required: true
      },
      {
        id: 'language',
        title: 'Origem do Nome',
        question: 'Qual origem você prefere?',
        options: [
          { id: 'portugues', label: 'Português', description: 'Nomes de origem portuguesa' },
          { id: 'ingles', label: 'Inglês', description: 'Nomes de origem inglesa' },
          { id: 'hebraico', label: 'Hebraico', description: 'Nomes de origem hebraica' },
          { id: 'nordico', label: 'Nórdico', description: 'Nomes de origem nórdica' },
          { id: 'latino', label: 'Latino', description: 'Nomes de origem latina' },
          { id: 'grego', label: 'Grego', description: 'Nomes de origem grega' }
        ],
        required: true
      },
      {
        id: 'quantity',
        title: 'Quantidade de Nomes',
        question: 'Quantas sugestões você quer?',
        options: [
          { id: '3', label: '3 nomes', description: 'Opções selecionadas' },
          { id: '5', label: '5 nomes', description: 'Boa variedade' },
          { id: '10', label: '10 nomes', description: 'Muitas opções' }
        ],
        required: true
      }
    ]
  }
};

export const getFilterFlow = (type: string): FilterFlow | null => {
  return filterFlows[type.toLowerCase()] || null;
};