# Malves - Projeto Next.js

Este projeto foi migrado de React/Vite para Next.js.

## 🚀 Como executar

### Instalação das dependências

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

O projeto estará disponível em [http://localhost:3000](http://localhost:3000)

### Build de produção

```bash
npm run build
```

### Iniciar em produção

```bash
npm start
```

## 📁 Estrutura do projeto

- `src/app/` - Páginas do Next.js App Router
- `src/components/` - Componentes React reutilizáveis
- `src/pages/` - Páginas existentes (mantidas para compatibilidade)
- `src/assets/` - Imagens e recursos estáticos
- `src/types/` - Definições de tipos TypeScript
- `src/utils/` - Utilitários e funções auxiliares

## 🔧 Tecnologias utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (ícones)
- React Hot Toast (notificações)
- Vercel Analytics

## 📱 Páginas disponíveis

- `/` - Página inicial (Landing Page)
- `/politica-de-privacidade` - Política de privacidade
- `/nomeia` - Página do app NomeIA
- `/nomeia/politica-de-privacidade` - Política de privacidade do NomeIA

## 🎨 Componentes principais

- `Header` - Cabeçalho com navegação
- `HeroSection` - Seção principal da landing page
- `ShowcaseSection` - Exibição dos aplicativos
- `AboutSection` - Sobre o desenvolvedor
- `ContactSection` - Formulário de contato
- `FooterSection` - Rodapé com links e informações

## 📝 Notas importantes

- Todos os componentes que usam hooks do React ou APIs do navegador foram marcados com `"use client"`
- O projeto usa o App Router do Next.js 14
- As rotas foram configuradas para manter a mesma estrutura de URLs
- O sistema de navegação foi adaptado para funcionar com Next.js
