
let count = 0;
let btn = document.getElementById("btn");
let disp = document.getElementById("display");
let resetBtn = document.getElementById("resetBtn");

btn.onclick = function () {
  count++;
  disp.innerHTML = count;
};

resetBtn.onclick = function () {
  count = 0;
  disp.innerHTML = count;
};