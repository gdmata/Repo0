"use strict";

let numeroSecreto = Math.trunc(Math.random() * 20) + 1;
let pontos = 20;
let pontosmax = 0;

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    displayMessage("Não é um número!");
  }
  // Quando o jogador ganhar o jogo
  else if (numeroSecreto == guess) {
    displayMessage("Acertou!");

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    displayNumber(numeroSecreto);

    if (pontos > pontosmax) {
      pontosmax = pontos;
      document.querySelector(".highscore").textContent = pontosmax;
    }
    // When guess is wrong
  } else if (guess !== numeroSecreto) {
    if (pontos > 1) {
      displayMessage(guess > numeroSecreto ? "Alto demais" : "Baixo demais");
      pontos--;
      document.querySelector(".score").textContent = pontos;
    } else {
      displayMessage("Você Perdeu");
      document.querySelector(".score").textContent = 0;
    }
    // quando o chute é alto demais
    /* else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Your guess is too high, try again";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
  // chute baixo demais
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        "Your guess is too low, try again";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});
*/
    document.querySelector(".again").addEventListener("click", function () {
      pontos = 20;
      document.querySelector("body").style.backgroundColor = "#222";
      document.querySelector(".number").style.width = "15rem";
      displayNumber("?");
      document.querySelector(".guess").value = "";
      displayMessage("Comece os palpites... ");
      document.querySelector(".score").textContent = pontos;
      numeroSecreto = Math.trunc(Math.random() * 20) + 1;
    });
  }
});
