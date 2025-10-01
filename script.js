let userSeq = [];
let gameSeq = [];
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let hs = 0;
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started..");
    started = true;
  }
  levelUp();
});
function btnflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}
function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 100);
}
function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `level ${level}`;

  let color = Math.floor(Math.random() * 3);
  let randcolor = btns[color];
  let randbtn = document.querySelector(`.${randcolor}`);

  gameSeq.push(randcolor);
  console.log(gameSeq);
  btnflash(randbtn);
}
function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if(level > hs){
      hs = level;
      h3.innerText = `Highest Score : ${hs}`;
    }
    h2.innerHTML = `Game Over!Your Score is <b>${level}</b> Press any key to start Again!! `;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    },150);

    reset();
  }
}
function btnpress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  console.log(userSeq);

  checkAns(userSeq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
  btn.addEventListener("click", btnpress);
}

function reset(){
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
  h3.innerText = `Highest Score : ${hs}`;
}
