/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#phrase").innerHTML = generateDomain();
};
//write your code here

const generateDomain = () => {
  const who = [
    "eminems",
    "chewbaccas",
    "thedudefromapple",
    "mygirlfriends",
    "yourdoctors"
  ];
  const what = ["dream", "nightmare", "goal"];
  const where = ["website", "project", "place", "portifolio"];

  const getRandomDomain = arr => arr[Math.floor(Math.random() * arr.length)];

  return `${getRandomDomain(who)}${getRandomDomain(what)}${getRandomDomain(
    where
  )}.com`;
};
