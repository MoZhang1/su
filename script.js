
let decision = "";
let mode = 1;
let round = 1;
let sulaoshiWins = 0;

function startGame() {
  decision = document.getElementById("decision").value;
  mode = parseInt(document.querySelector('input[name="mode"]:checked').value);
  if (!decision) {
    alert("请先输入决定内容");
    return;
  }
  document.getElementById("home").style.display = "none";
  document.getElementById("game").style.display = "block";
  document.getElementById("decision-text").innerText = "决定内容：「" + decision + "」";
  updateRoundInfo();
}

function updateRoundInfo() {
  document.getElementById("round-info").innerText = `第${round}局`;
  document.getElementById("battle-result").innerText = "";
}

function play(userChoice) {
  const winMap = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock"
  };

  let zimoChoice = winMap[userChoice];

  sulaoshiWins++;

  document.getElementById("battle-result").innerText =
    `苏老师出 ${symbol(userChoice)}，张子墨出 ${symbol(zimoChoice)}。苏老师赢了！`;

  if ((mode === 1) || (mode === 3 && sulaoshiWins === 2)) {
    setTimeout(() => showResult(), 1500);
  } else {
    round++;
    setTimeout(() => updateRoundInfo(), 1500);
  }
}

function symbol(choice) {
  if (choice === "rock") return "✊";
  if (choice === "scissors") return "✌️";
  if (choice === "paper") return "✋";
}

function showResult() {
  document.getElementById("game").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("final-decision").innerText = `那么，「${decision}」就这么决定了哦～`;
}
