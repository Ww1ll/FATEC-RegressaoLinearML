# Regressão Linear em JavaScript
Este projeto consiste na implementação de uma análise de regressão linear simples utilizando JavaScript. O código é projetado para calcular o coeficiente angular (inclinação) da reta que melhor se ajusta a um conjunto de dados, a partir de arquivos xlsx que foram transformados em JSON para um melhor desenvolvimento.

## Descrição do Trabalho
A regressão linear é uma técnica estatística utilizada para modelar a relação entre duas variáveis. Neste projeto, desenvolvemos uma função que:
1. Calcula a média de um array.
2. Determina o coeficiente angular da reta que melhor se ajusta a um conjunto de pontos (x, y).
### Estrutura do Código
- **Função `media(array)`**: Calcula a média dos valores em um array.
- **Função `regressaoLinear(x, y)`**: Recebe dois arrays (x e y) e calcula o coeficiente angular da reta de regressão linear. Garante que os arrays tenham o mesmo comprimento e utiliza o método de mínimos quadrados para calcular a inclinação da reta.
O código lê dados de cinco arquivos JSON, onde cada arquivo contém um conjunto de pontos (x, y), e imprime o coeficiente angular para cada amostra.
## Integrantes do Time
- **Felipe Felix**
- **Lucas Mendonça**
- **Fernando Bonde**
- **William Braz**
- **João Sassi**
## Disciplina
Este projeto foi desenvolvido como parte da disciplina de Aprendizagem de Máquina, ministrada pelo professor Bruno Zolotareff. O objetivo é aplicar conceitos teóricos em um projeto prático, promovendo o entendimento sobre a análise de dados e modelagem preditiva.
## Como Executar o Projeto
1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Coloque os arquivos de amostra no diretório `./Data/json/`.
3. Execute o script com o comando:
   ```bash
   node RegressaoLinear.js
