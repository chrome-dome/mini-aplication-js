alert('This is my version of the popular "rock, paper, scissors" game, with a bit of fantasy. The rules are the same, except that death turns paper, magic turns stone, and a sword turns scissors. Have fun');



const gameSummary = {
 numbers: 0,
 wins: 0,
 losses: 0,
 draws: 0,
}

const game = {
 playerHand: "",
 aiHand: "",
}

const hands = [...document.querySelectorAll('.select img')];

function handSelection() {

 game.playerHand = this.dataset.option
 console.log(game.playerHand);
 hands.forEach(hand => hand.style.boxShadow = '');
 this.style.boxShadow = '0 0 0 4px red';
}

function aiChoice() {
 return hands[Math.floor(Math.random() * 3)].dataset.option;
}

function checkResult(player, ai) {
 if (player === ai) {
  return 'draw';
 } else if ((player === "death" && ai === "magic") || (player === "magic" && ai === "sword") || (player === "sword" && ai === "death")) {
  return 'win';
 } else { return 'loss'; }
}

function publishResult(player, ai, result) {
 document.querySelector('[data-summary="your-choice"]').textContent = player;

 document.querySelector('[data-summary="ai-choice"]').textContent = ai;

 document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

 if (result === "win") {
  document.querySelector('p.wins span').textContent = ++gameSummary.wins;
  document.querySelector('[data-summary="who-win"]').textContent = "You won!!!!"
  document.querySelector('[data-summary="who-win"]').style.color = "blue";
 } else if (result === "loss") {
  document.querySelector('p.losses span').textContent = ++gameSummary.losses;
  document.querySelector('[data-summary="who-win"]').textContent = "You have lost!"
  document.querySelector('[data-summary="who-win"]').style.color = "red";
 } else {
  document.querySelector('p.draws span').textContent = ++gameSummary.draws;
  document.querySelector('[data-summary="who-win"]').textContent = "Draw..."
  document.querySelector('[data-summary="who-win"]').style.color = "lightgrey";
 }
}

function endGame() {
 document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
 game.playerHand = "";
 game.aiHand = "";
}


function startGame() {
 if (!game.playerHand) {
  return alert("select your choice!!!!");
 }
 game.aiHand = aiChoice();
 const gameResult = checkResult(game.playerHand, game.aiHand);
 console.log(gameResult);
 publishResult(game.playerHand, game.aiHand, gameResult);
 endGame()
}

hands.forEach(hand => hand.addEventListener('click', handSelection))

document.querySelector('.start').addEventListener('click', startGame)

