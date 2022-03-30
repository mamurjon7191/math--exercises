"use strict";
let first = document.querySelector(".firstNumber");
let second = document.querySelector(".secondNumber");
let btn = document.querySelector(".btn");
let ans = document.querySelector(".answer");

let sum;
let hisob = function () {
  let a = Math.trunc(Math.random() * 100 + 1);
  let b = Math.trunc(Math.random() * 100 + 1);
  first.textContent = a;
  second.textContent = b;
  sum = a + b;
};
hisob();

btn.addEventListener("click", function () {
  let r = +ans.value;
  if (sum == r) {
    alert("Correct");
    ans.value = " ";
  } else {
    alert(`False! Correct answer is ${sum}`);
  }
  hisob();
});
