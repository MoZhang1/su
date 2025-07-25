
let decisionText = "";
let mode = 1;
let suWins = 0;
let zmWins = 0;

function startGame() {
  decisionText = document.getElementById("decision").value.trim();
  mode = parseInt(document.querySelector('input[name="mode"]:checked').value);
  if (!decisionText) {
    alert("请先输入你想做的决定！");
    return;
  }
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("game-screen").style.display = "block";
  document.getElementById("round-result").innerText = "请选择石头、剪刀或布：";
}

function play(playerChoice) {
  // 苏老师伪随机胜利逻辑
  let winMap = { "✌": "✋", "✋": "✊", "✊": "✌" };
  let suChoice = Object.keys(winMap).find(key => winMap[key] === playerChoice);

  document.getElementById("round-result").innerText =
    "苏老师出 " + suChoice + "，张子墨出 " + playerChoice + "。苏老师赢了！";

  suWins++;
  if ((mode === 1 && suWins === 1) || (mode === 3 && suWins === 2)) {
    setTimeout(() => {
      document.getElementById("game-screen").style.display = "none";
      document.getElementById("end-screen").style.display = "block";
      document.getElementById("end-result").innerText = "苏老师赢了！你现在可以去：" + decisionText;
    }, 1000);
  }
}

function resetGame() {
  suWins = 0;
  zmWins = 0;
  document.getElementById("end-screen").style.display = "none";
  document.getElementById("start-screen").style.display = "block";
  document.getElementById("decision").value = "";
}
