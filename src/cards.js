/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-filename-extension */

import React, { useState, useEffect } from "react";
import goku from "./images/characters/goku.jpg";
import vegeta from "./images/characters/vegeta.png";
import vegito from "./images/characters/vegito.jpg";
import gogeta from "./images/characters/gogeta.jpg";
import gohan from "./images/characters/gohan.jpg";
import piccolo from "./images/characters/piccolo.jpeg";
import trunks from "./images/characters/trunks.jpg";
import tien from "./images/characters/tien.jpg";
import krillin from "./images/characters/krillin.jpg";
import frieza from "./images/characters/frieza.jpg";
import cell from "./images/characters/cell.jpg";
import buu from "./images/characters/buu.jpg";

function Cards() {
  const [state] = useState([
    [goku, "Goku"],
    [vegeta, "Vegeta"],
    [vegito, "Vegito"],
    [gogeta, "Gogeta"],
    [gohan, "Gohan"],
    [piccolo, "Piccolo"],
    [trunks, "Trunks"],
    [tien, "Tien"],
    [krillin, "Krillin"],
    [frieza, "Frieza"],
    [cell, "Cell"],
    [buu, "Buu"],
  ]);

  const randomiseImages = () => {
    const cardsContainer = document.querySelector(".cards-container");
    cardsContainer.replaceChildren();
    const randomImages = [];
    // eslint-disable-next-line no-constant-condition
    while (true) {
      if (randomImages.length === 12) break;
      const randomNumber = Math.floor(Math.random() * 12);
      const doesntInclude = (array) => array[0] !== state[randomNumber][0];
      if (randomImages.every(doesntInclude))
        randomImages.push(state[randomNumber]);
    }
    randomImages.forEach((image) => {
      const imageElement = document.createElement("img");
      imageElement.src = image[0];
      imageElement.classList.add("card-image");
      const imageCaption = document.createElement("p");
      imageCaption.textContent = image[1];
      imageCaption.classList.add("card-caption");
      const card = document.createElement("div");
      card.classList.add("card");
      card.appendChild(imageElement);
      card.appendChild(imageCaption);
      cardsContainer.appendChild(card);
    });
  };

  useEffect(() => {
    randomiseImages();
  }, []);

  return <div className="cards-container" />;
}

export default Cards;
