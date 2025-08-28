// FUNZIONI MOSTRA STEP2 E LETTERA
function showStep2() {
  document.querySelector('.step2').style.display = 'block';
  document.querySelector('.reveal').style.display = 'none';
}

function showLetter() {
  document.querySelector('.letter').style.display = 'block';
  document.querySelector('.proceed').style.display = 'none';
}

// GENERA FIORI
const flowersContainer = document.querySelector('.flowers');
const emojis = ['🌸','🌺','🌼','🌻','💐'];
const numFlowers = window.innerWidth < 500 ? 10 : 20; // meno fiori su mobile

for(let i=0; i<numFlowers; i++) {
  const flower = document.createElement('div');
  flower.className = 'flower';
  flower.innerText = emojis[Math.floor(Math.random() * emojis.length)];
  flower.style.left = Math.random() * 100 + 'vw';
  flower.style.fontSize = (1 + Math.random() * 2) + 'rem';
  flower.style.animationDuration = (5 + Math.random() * 5) + 's';
  flower.style.opacity = Math.random();
  flowersContainer.appendChild(flower);
}


