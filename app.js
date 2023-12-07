let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelup();
  }
});

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelup();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelup() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  // console.log(randIdx);
  // console.log(randColor);
  // console.log(randbtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randbtn);
}

function checkAns(Idx) {
  // console.log("curr level : ", level);
  if (userSeq[Idx] == gameSeq[Idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelup, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press Start key to start`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "White";
    }, 150);
    reset();
  }
}
function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}
let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
