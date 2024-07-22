const FlyFoodSolucaoDto = require('../models/FlyFoodSolucaoDto');

class FlyFood {
    constructor(caminho) {
        this.pontos = new Map();
        this.menorRota = null;
        this.permutacoes_cont = 0;
        this.menorCusto = null;

        for (let linha = 0; linha < caminho.length; linha++) {
            for (let coluna = 0; coluna < caminho.length; coluna++) {
                if (caminho[linha][coluna] !== "0") {
                    this.pontos.set(caminho[linha][coluna], [linha, coluna]);
                }
            }
        }
    }

    buscarMelhorCaminho() {
        const pointsKeys = Array.from(this.pontos.keys()).filter(key => key !== "R");
        this.permutacoes(pointsKeys, "R");

        return new FlyFoodSolucaoDto(
            this.menorRota,
            this.menorCusto,
            pointsKeys.length + 1,
            this.permutacoes_cont
        );
    }

    permutacoes(pointsList, prefix) {
        if (pointsList.length === 0) {
            this.permutacoes_cont += 1;
            const rota = prefix + "R";
            this.menorCaminho(rota);
            return;
        }

        for (let i = 0; i < pointsList.length; i++) {
            const point = prefix + pointsList[i];
            if (this.menorCusto !== null && this.descartaCaminhoRuim(point)) {
                return;
            }
            const removido = pointsList.splice(i, 1);
            this.permutacoes(pointsList, point);
            pointsList.splice(i, 0, removido[0]);
        }
    }

    descartaCaminhoRuim(rota) {
        let custo = 0;
        const pontoLista = rota.split("");
        for (let p = 0; p < pontoLista.length - 1; p++) {
            const currentPoint = this.pontos.get(pontoLista[p]);
            const nextPoint = this.pontos.get(pontoLista[p + 1]);
            const total = Math.abs(currentPoint[0] - nextPoint[0]) + Math.abs(currentPoint[1] - nextPoint[1]);
            custo += total;
            if (custo > this.menorCusto) {
                return true;
            }
        }
        return false;
    }

    menorCaminho(rota) {
        let custo = 0;
        const pontoLista = rota.split("");
        for (let p = 0; p < pontoLista.length - 1; p++) {
            const currentPoint = this.pontos.get(pontoLista[p]);
            const nextPoint = this.pontos.get(pontoLista[p + 1]);
            const total = Math.abs(currentPoint[0] - nextPoint[0]) + Math.abs(currentPoint[1] - nextPoint[1]);
            custo += total;
            if (this.menorCusto !== null && custo > this.menorCusto) {
                return;
            }
        }
        if (this.menorCusto === null || custo < this.menorCusto) {
            this.menorCusto = custo;
            this.menorRota = rota;
        }
    }
}

module.exports = FlyFood;
