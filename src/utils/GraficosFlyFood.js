class GraficosFlyFood {
  mostrarPontos(pontos) {
      console.log("Pontos no mapa:");
      pontos.forEach((value, key) => {
          console.log(`Ponto ${key}: [${value[0]}, ${value[1]}]`);
      });
  }

  melhorAlgoritmo() {
      console.log("Implementar a lógica do melhor algoritmo aqui.");
  }

  melhorPermutacao() {
      console.log("Implementar a lógica da melhor permutação aqui.");
  }
}

module.exports = GraficosFlyFood;
