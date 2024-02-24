function updateTime() {
  let tokyoElem = document.querySelector("#tokyo");
  let tokyoDateElem = tokyoElem.querySelector(".date");
  let tokyoTimeElem = tokyoElem.querySelector(".time");
  let tokyoAmPmElem = tokyoElem.querySelector(".am-pm");

  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElem.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElem.innerHTML = tokyoTime.format("hh:mm");
  tokyoAmPmElem.innerHTML = tokyoTime.format("A");

  let mexicoElem = document.querySelector("#mexico");
  let mexicoDateElem = mexicoElem.querySelector(".date");
  let mexicoTimeElem = mexicoElem.querySelector(".time");
  let mexicoAmPmElem = mexicoElem.querySelector(".am-pm");

  let mexicoTime = moment().tz("Mexico/General");

  mexicoDateElem.innerHTML = mexicoTime.format("MMMM Do YYYY");
  mexicoTimeElem.innerHTML = mexicoTime.format("hh:mm");
  mexicoAmPmElem.innerHTML = mexicoTime.format("A");
}

function updateCurrentTime() {
  let currentCityElem = document.querySelector(".current-time ");
  let currentCityDateElem = currentCityElem.querySelector(".date");
  let currentCityTimeElem = currentCityElem.querySelector(".time");
  let currentCityAmPmElem = currentCityElem.querySelector(".am-pm");

  let currentCityTime = moment().tz("Mexico/General");

  currentCityDateElem.innerHTML = currentCityTime.format("MMMM Do YYYY");
  currentCityTimeElem.innerHTML = currentCityTime.format("hh:mm:ss");
  currentCityAmPmElem.innerHTML = currentCityTime.format("A");
}
updateTime();
updateCurrentTime();
setInterval(updateTime, 1000);
setInterval(updateCurrentTime, 1000);
