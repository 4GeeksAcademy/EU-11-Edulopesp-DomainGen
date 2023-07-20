const firstPhrase = ["chewbacca", "eminem", "theguyfromapple", "yourdoctor"];
const secoundPhrase = ["dream", "nightmare", "portifolio", "house"];
const extension = [".com", ".us", ".net", ".io", ".pt"];

const phrasesContainer = document.getElementById("phrasesContainer");

function generateDomain() {
  const getRandomDomain = arr => arr[Math.floor(Math.random() * arr.length)];

  return `www.${getRandomDomain(firstPhrase)}${getRandomDomain(
    secoundPhrase
  )}${getRandomDomain(extension)}`;
}

function generateDomains() {
  phrasesContainer.innerHTML = "";
  const totalCombinations =
    firstPhrase.length * secoundPhrase.length * extension.length;

  for (let i = 0; i < totalCombinations; i++) {
    const domain = generateDomain();
    const paragraph = document.createElement("p");
    paragraph.textContent = domain;
    phrasesContainer.appendChild(paragraph);
  }
}

generateDomains();

//preciso treinar interpretação de texto né kkkkk 3 tentativas pra entender oq era pra fazer e desculpa a demora, tive que pesquisar sobre o for loop, tava meio perdido doq eu podia fazer.
