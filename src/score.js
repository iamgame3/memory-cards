/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-filename-extension */

import React, { useState, useEffect } from "react";

function Score() {
  const [state, setState] = useState([0, [], 0]);

  const updateScore = (characterName) => {
    if (characterName !== undefined) {
      if (!state[1].includes(characterName)) {
        setState((state[0] += 1));
        setState(state[1].push(characterName));
        if (state[0] > state[2]) setState((state[2] = state[0]));
      } else {
        setState((state[0] = 0));
        setState((state[1] = []));
      }
    }
    const currentScore = document.createElement("p");
    currentScore.textContent = `Current Score: ${state[0]}`;
    currentScore.classList.add("score");
    const highScore = document.createElement("p");
    highScore.textContent = `High Score: ${state[2]}`;
    highScore.classList.add("score");
    const scoresContainer = document.querySelector(".scores");
    scoresContainer.replaceChildren();
    scoresContainer.appendChild(currentScore);
    scoresContainer.appendChild(highScore);
    document.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => {
        updateScore(card.querySelector(".card-caption").textContent);
      });
    });
  };

  useEffect(() => {
    updateScore();
  }, []);

  return <div className="scores" />;
}

export default Score;
