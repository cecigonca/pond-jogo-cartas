# Jogo Inspirado no Balatro – Ponderada de Desenvolvimento Mobile

## Descrição

Aplicativo mobile desenvolvido com React Native, inspirado no jogo Balatro, com o objetivo de praticar conceitos fundamentais de desenvolvimento mobile como manipulação de estado, navegação, lógica de jogo, persistência local e interface reativa.

## Funcionalidades Implementadas

- **Tela Inicial**
  - Inserção do nome do jogador
  - Acesso às telas de Regras e Ranking

- **Mecânica de Jogo**
  - Jogo com 10 rodadas
  - A cada rodada, o jogador escolhe 1 carta entre 3 opções
  - As cartas possuem efeitos que impactam a pontuação

- **Tipos de Carta e Efeitos**
  - `bonus_fixa`: adiciona pontos fixos
  - `bonus_negativo`: subtrai pontos
  - `multiplica_total`: dobra o total final
  - `bonus_trio_cor`: dá bônus se houver 3 ou mais cartas da mesma cor

- **Cálculo da Pontuação Final**
  - Soma dos efeitos das cartas escolhidas
  - Verificação de trio de cor
  - Aplicação de multiplicadores ao total

- **Tela de Resultado**
  - Exibição da pontuação final e efeitos de cada carta
  - Indicação da colocação no ranking (Top 5)

- **Ranking**
  - Armazena os 5 melhores jogadores com nome e pontuação
  - Persistência local com AsyncStorage

- **Tela de Regras**
  - Explicações objetivas sobre como jogar e como funciona a pontuação

## Tecnologias Utilizadas

### Frontend (React Native)
- **React Native + Expo**
- `React Navigation` – gerenciamento de rotas e telas
- `React Native Paper` – UI moderna e responsiva
- `React Native Safe Area View` – compatibilidade com bordas e status bar
- `AsyncStorage` – persistência local de dados do ranking
- **JSON local** – base de cartas utilizada como mock de API

## Como Rodar o Projeto

1. **Clone o repositório**

```bash
git clone https://github.com/cecigonca/pond-jogo-cartas.git
```
```bash
cd pond-jogo-cartas/app-ponderada
```

2. **Instale as dependências**

```bash
npm install
```

3. **Inicie o projeto React Native com Expo**

```bash
npx expo start
```

Use o aplicativo **Expo Go** para testar no celular via QR Code.

## Observações Técnicas
- A lógica de escolha de cartas, efeitos e cálculo da pontuação está concentrada na `GameScreen` e `ResultScreen`.
- O sistema de ranking utiliza ordenação por pontuação e timestamp para evitar empates exatos.
- O projeto simula backend e API por meio de arquivos JSON locais, conforme permitido no enunciado.

## Vídeos para Demonstração
- [Vídeo do App (com narração)](https://drive.google.com/file/d/13g2hwgBSyoIbMF7HZ6-u3Y-qQtEAZjiy/view?usp=sharing)
- [Vídeo do VSCode](https://drive.google.com/file/d/1KCfgCuSwGiP8Ryv7zvtZPXK6PqzFXN_7/view?usp=sharing)
