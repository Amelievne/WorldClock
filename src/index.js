let tokyoElem = document.querySelector("#tokyo");
let tokyoDateElem = tokyoElem.querySelector(".date");
let tokyoTimeElem = tokyoElem.querySelector(".time");
let tokyoAmPmElem = document.querySelector("#tokyo .am-pm");
let tokyoTime = moment();

tokyoDateElem.innerHTML = tokyoTime.format("MMMM Do YYYY");
tokyoTimeElem.innerHTML = tokyoTime.format("hh:mm");
tokyoAmPmElem.innerHTML = tokyoTime.format("A");
