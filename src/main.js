const FlyFood = require('./services/FlyFood');
const GraficosFlyFood = require('./utils/GraficosFlyFood');

function main() {
    const caminho = [
        ["0", "0", "V", "0", "E", "W", "0"],
        ["0", "0", "0", "0", "0", "0", "Q"],
        ["A", "R", "Z", "0", "0", "D", "0"],
        ["0", "0", "0", "0", "0", "K", "N"],
        ["0", "0", "F", "0", "C", "0", "0"],
        ["0", "O", "0", "0", "0", "L", "0"],
        ["0", "0", "0", "0", "U", "0", "0"],
    ];

    const flyFood = new FlyFood(caminho);
    const example = new GraficosFlyFood();
    example.mostrarPontos(flyFood.pontos);
    example.melhorAlgoritmo();
    example.melhorPermutacao();

    console.log(`Quantidade de pontos: ${flyFood.pontos.size - 1}`);
    const startTime = process.hrtime.bigint();
    const flyFoodSolucao = flyFood.buscarMelhorCaminho();
    const endTime = process.hrtime.bigint();
    const elapsedTime = endTime - startTime;

    console.log("|| === --- === --- === MENOR ROTA === --- === --- === ||");
    console.log(`Rota: ${flyFoodSolucao.melhorRota}\nCusto: ${flyFoodSolucao.custo}`);
    console.log(`Total de permutações: ${flyFoodSolucao.permutacoes}`);
    console.log("|| === --- === --- === --- === --- === --- === --- === ||");
    console.log(`Finished time in seconds: ${(elapsedTime / 1000000000n).toFixed(4)} s`);
}

main();
