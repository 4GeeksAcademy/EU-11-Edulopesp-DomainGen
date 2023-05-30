/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  const phrases = document.querySelectorAll(".phrase");

  phrases.forEach(phrase => {
    phrase.innerHTML = generateDomain();
  });
};
const genRandomDomain = arr => arr[Math.floor(Math.random() * arr.length)];
//write your code here
const generateDomain = () => {
  const owner = [
    "eminems",
    "chewbaccas",
    "thedudefromapple",
    "mygirlfriends",
    "yourdoctors"
  ];

  const place = ["dream", "nightmare", "goal"];
  const where = ["website", "project", "place", "portifolio"];
  const extension = [".com", ".us", ".net", ".io", ".pt", ".com.br"];

  return `www.${genRandomDomain(owner)}${genRandomDomain(
    place
  )}${genRandomDomain(where)}${genRandomDomain(extension)}`;
};
