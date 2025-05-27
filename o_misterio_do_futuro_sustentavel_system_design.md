# Sistema de Design: O Mistério do Futuro Sustentável

## Implementation approach

Para o desenvolvimento do jogo educativo "O Mistério do Futuro Sustentável", implementaremos uma aplicação web utilizando React, JavaScript e Tailwind CSS, conforme especificado no PRD. O jogo será construído com uma arquitetura que separa claramente o conteúdo educacional, a lógica de jogo e a interface do usuário, permitindo escalabilidade e facilidade de manutenção.

### Pontos Difíceis e Soluções

1. **Balanceamento entre Educação e Entretenimento**
   - **Solução:** Implementar um sistema de narrativa baseado em camadas, onde o conteúdo educacional está intrinsecamente ligado à resolução dos casos, mas é apresentado de forma contextual e envolvente.

2. **Sistema de Investigação Complexo**
   - **Solução:** Utilizar uma arquitetura orientada a eventos e um sistema de estado de jogo baseado em Redux para gerenciar as múltiplas interações, pistas e progressões de diálogo.

3. **Conteúdo Educacional Extenso sobre os ODS**
   - **Solução:** Desenvolver uma base de conhecimento modular com API dedicada para o conteúdo dos ODS, facilitando atualizações e extensões futuras.

4. **Experiência de Usuário Adaptativa**
   - **Solução:** Implementar um sistema de dificuldade dinâmica e feedback contextual utilizando algoritmos de aprendizado adaptativo simples.

### Frameworks e Bibliotecas a Serem Utilizados

1. **Frontend**:
   - **React:** Para a construção da interface do usuário baseada em componentes
   - **Redux:** Para gerenciamento de estado da aplicação
   - **Tailwind CSS:** Para estilização e design responsivo
   - **React Router:** Para navegação entre diferentes telas e casos
   - **Framer Motion:** Para animações e transições suaves
   - **Three.js/React Three Fiber:** Para elementos 3D em determinados quebra-cabeças ou visualizações

2. **Conteúdo e Narrativa**:
   - **Ink:** Biblioteca para narrativa interativa e diálogos ramificados
   - **Firebase/Firestore:** Para armazenamento do conteúdo educacional e casos
   - **D3.js:** Para visualização de dados e simulações relacionadas aos ODS

3. **Infraestrutura**:
   - **Vercel/Netlify:** Para hospedagem e deploy contínuo da aplicação
   - **Auth0:** Para autenticação de usuários (opcional para salvar progresso)

## Arquitetura do Sistema

### Visão Geral da Arquitetura

O jogo "O Mistério do Futuro Sustentável" será implementado como uma aplicação web de página única (SPA) usando React e seguindo uma arquitetura em camadas:

```
+-----------------------------------------------------+
|                  Camada de Apresentação             |
|  +-------------+  +---------------+  +-----------+  |
|  | Componentes |  | Visualizações |  | Controles |  |
|  |   React     |  |   de Jogo     |  |    UI     |  |
|  +-------------+  +---------------+  +-----------+  |
+-----------------------------------------------------+
                          |
+-----------------------------------------------------+
|                  Camada de Aplicação                 |
|  +-------------+  +---------------+  +-----------+  |
|  | Gerenciador |  | Serviços de   |  | Estado do |  |
|  |   de Jogo   |  |    Jogo       |  |   Jogo    |  |
|  +-------------+  +---------------+  +-----------+  |
+-----------------------------------------------------+
                          |
+-----------------------------------------------------+
|                  Camada de Domínio                   |
|  +-------------+  +---------------+  +-----------+  |
|  | Entidades   |  | Lógica de     |  | Regras de |  |
|  | do Jogo     |  | Negócio       |  |   Jogo    |  |
|  +-------------+  +---------------+  +-----------+  |
+-----------------------------------------------------+
                          |
+-----------------------------------------------------+
|                  Camada de Infraestrutura            |
|  +-------------+  +---------------+  +-----------+  |
|  | Persistência|  | Serviços      |  | Utilitários|  |
|  | de Dados    |  | Externos      |  |            |  |
|  +-------------+  +---------------+  +-----------+  |
+-----------------------------------------------------+
```

### Componentes Principais da Arquitetura

1. **Camada de Apresentação**
   - **Componentes React:** Elementos da UI reutilizáveis (botões, caixas de diálogo, inventário)
   - **Visualizações de Jogo:** Telas principais (menu, locais de investigação, base de dados ODS)
   - **Controles UI:** Interfaces específicas para mecânicas (quadro de investigação, análise de pistas)

2. **Camada de Aplicação**
   - **Gerenciador de Jogo:** Coordena fluxo de jogo, progressão e estados
   - **Serviços de Jogo:** Implementam funcionalidades como diálogo, investigação, quebra-cabeças
   - **Estado do Jogo:** Gerencia estado atual usando Redux (inventário, progresso, conhecimento)

3. **Camada de Domínio**
   - **Entidades do Jogo:** Modelos de dados como Case, Character, Clue, SDG
   - **Lógica de Negócio:** Regras de análise de pistas, conexões entre ODS
   - **Regras de Jogo:** Sistema de progressão, desbloqueio de conteúdo

4. **Camada de Infraestrutura**
   - **Persistência:** Salvamento/carregamento de progresso via Firebase
   - **Serviços Externos:** APIs para conteúdo educacional dos ODS
   - **Utilitários:** Funções auxiliares e ferramentas de desenvolvimento

### Padrões de Design a serem aplicados

1. **Observer Pattern:** Para atualizações reativas da UI quando o estado do jogo muda
2. **Strategy Pattern:** Para diferentes algoritmos de resolução de quebra-cabeças
3. **Factory Pattern:** Para criação de entidades de jogo com base em dados externos
4. **Command Pattern:** Para gerenciamento de ações do jogador e histórico de comandos
5. **State Pattern:** Para gerenciar os diferentes estados de um caso de investigação

## Wireframes e Mockups de Interface

A seguir, apresentamos wireframes conceituais para as principais telas do jogo:

### Tela Principal de Investigação

```
+-------------------------------------------------------+
|  [Logo]   |  INVENTÁRIO  |  BASE ODS  |  MAPA  | MENU |
+-------------------------------------------------------+
|                                                       |
|     [AMBIENTE EXPLORÁVEL / CENA INTERATIVA]           |
|                                                       |
|     * Hotspots interativos indicados                  |
|     * Personagens disponíveis visíveis                |
|     * Elementos de ambiente                           |
|                                                       |
+-------------------------------------------------------+
|    CASO: [Nome do Caso Atual]    OBJETIVO: [Descrição]|
+-------------------------------------------------------+
|  [ÁREA DE DIÁLOGO/DESCRIÇÕES]                         |
|  > Texto descrevendo a cena ou diálogo atual          |
+-------------------------------------------------------+
|  [OPÇÕES DE INTERAÇÃO]                                |
|  > Examinar   > Falar   > Usar Item   > Voltar        |
+-------------------------------------------------------+
```

### Interface de Diálogo

```
+-------------------------------------------------------+
|  [Nome do Personagem]                       [Fechar X] |
+-------------------------------------------------------+
|                                                       |
|  [Avatar do            [Texto do diálogo atual,       |
|   Personagem]          mostrando a fala do personagem |
|                        ou pergunta feita pelo jogador]|
|                                                       |
|                                                       |
+-------------------------------------------------------+
|  OPÇÕES DE RESPOSTA:                                  |
|  [1] Primeira opção de diálogo/pergunta              |
|  [2] Segunda opção de diálogo/pergunta               |
|  [3] Terceira opção de diálogo/pergunta              |
|  [Voltar] Encerrar conversa                          |
+-------------------------------------------------------+
```

### Base de Dados dos ODS

```
+-------------------------------------------------------+
|  OBJETIVOS DE DESENVOLVIMENTO SUSTENTÁVEL     [Fechar] |
+-------------------------------------------------------+
|                                                       |
|  [Ícones coloridos dos 17 ODS em uma grade]           |
|                                                       |
+-------------------------------------------------------+
|  [ODS SELECIONADO - TÍTULO E ÍCONE]                   |
+-------------------------------------------------------+
|  DESCRIÇÃO:                                           |
|  [Texto detalhado explicando o ODS selecionado]       |
|                                                       |
|  METAS:                                               |
|  [Lista das metas específicas do ODS]                 |
|                                                       |
|  CONEXÕES COM OUTROS ODS:                             |
|  [Diagrama mostrando relações com outros objetivos]   |
|                                                       |
|  EXEMPLOS REAIS:                                      |
|  [Lista de casos de sucesso e iniciativas]            |
+-------------------------------------------------------+
```

### Quadro de Investigação

```
+-------------------------------------------------------+
|  QUADRO DE INVESTIGAÇÃO: [Nome do Caso]       [Fechar] |
+-------------------------------------------------------+
|                                                       |
|  [Área interativa onde as pistas podem ser            |
|   organizadas e conectadas pelo jogador]              |
|                                                       |
|  * Pistas representadas como ícones/cartões           |
|  * Linhas conectando pistas relacionadas              |
|  * Áreas para categorizar (Pessoas, Locais, Motivos)  |
|                                                       |
+-------------------------------------------------------+
|  FERRAMENTAS:                                         |
|  [Conectar] [Agrupar] [Destacar] [Notas] [Analisar]   |
+-------------------------------------------------------+
|  PISTAS DISPONÍVEIS:                                  |
|  [Lista de pistas coletadas ainda não posicionadas]   |
+-------------------------------------------------------+
```

### Tela de Resolução de Caso

```
+-------------------------------------------------------+
|  RESOLUÇÃO DO CASO: [Nome do Caso]           [Voltar] |
+-------------------------------------------------------+
|                                                       |
|  RESUMO DO CASO:                                      |
|  [Breve descrição do problema investigado]            |
|                                                       |
|  EVIDÊNCIAS COLETADAS:                                |
|  [Lista das principais pistas encontradas]            |
|                                                       |
|  ODS RELACIONADOS:                                    |
|  [Ícones dos ODS identificados como relevantes]       |
|                                                       |
+-------------------------------------------------------+
|  PROPONHA SUA SOLUÇÃO:                                |
|                                                       |
|  1. Identifique a causa principal:                    |
|     [Menu dropdown com opções]                        |
|                                                       |
|  2. Selecione as metas dos ODS a aplicar:             |
|     [Checkboxes com metas relevantes]                 |
|                                                       |
|  3. Proponha ações concretas:                         |
|     [Campo de texto para solução detalhada]           |
|                                                       |
+-------------------------------------------------------+
|  [SUBMETER SOLUÇÃO]                [REVER EVIDÊNCIAS] |
+-------------------------------------------------------+
```

## Anything UNCLEAR

1. **Detalhamento dos Algoritmos de Avaliação**: O PRD não especifica com detalhes como avaliar a eficácia das soluções propostas pelos jogadores. Precisaremos desenvolver métricas claras para determinar o que constitui uma solução aceitável para cada caso e como o jogo fornecerá feedback construtivo.

2. **Nível de Profundidade dos ODS**: O documento indica que todos os 17 ODS e suas 169 metas devem ser incluídos, mas não especifica o nível de detalhamento necessário para cada um. Seria necessário esclarecer se todos devem ter o mesmo nível de profundidade ou se alguns podem ser priorizados com base na relevância para os casos desenvolvidos.

3. **Estratégia de Localização**: O PRD menciona dúvidas sobre internacionalização, mas não estabelece uma diretriz clara. Recomendaria iniciar com suporte completo ao português do Brasil, mas projetar a arquitetura para facilitar a localização futura em outros idiomas, especialmente considerando a natureza global dos ODS.

4. **Requisitos de Hardware**: O PRD menciona preocupações sobre acessibilidade em computadores com recursos limitados, mas não define os requisitos mínimos. Recomendaria otimizar para funcionar em hardware modesto e oferecer configurações gráficas ajustáveis para equilibrar desempenho e qualidade visual.

5. **Métricas de Engajamento e Aprendizado**: Embora o PRD mencione a necessidade de avaliar o impacto educacional, não especifica como isso será medido no jogo. Sugerimos implementar um sistema discreto de analytics para monitorar o tempo gasto em diferentes atividades, taxa de conclusão de casos e interação com o conteúdo educacional.