/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const phrases = document.querySelectorAll(".phrase");

  const genRandomDomain = arr => arr[Math.floor(Math.random() * arr.length)];
  const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);

  const randomDomains = [
    "whereeminemwritessongs",
    "chewbaccasdreamplace",
    "thedudefromappleportifolio",
    "somewherethateverybodylikes",
    "yourdoctorsplace"
  ];
  const extension = [".com", ".us", ".net", ".io", ".pt"];
  const shuffledDomains = shuffleArray(randomDomains);

  phrases.forEach((phrase, index) => {
    phrase.innerHTML = `www.${shuffledDomains[index]}${genRandomDomain(
      extension
    )}`;
  });
};
