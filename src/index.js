function updateTime() {
  let tokyoElem = document.querySelector("#tokyo");
  if (tokyoElem) {
    let tokyoDateElem = tokyoElem.querySelector(".date");
    let tokyoTimeElem = tokyoElem.querySelector(".time");
    let tokyoAmPmElem = tokyoElem.querySelector(".am-pm");

    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElem.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElem.innerHTML = tokyoTime.format("hh:mm");
    tokyoAmPmElem.innerHTML = tokyoTime.format("A");
  }

  let mexicoElem = document.querySelector("#mexico");
  if (mexicoElem) {
    let mexicoDateElem = mexicoElem.querySelector(".date");
    let mexicoTimeElem = mexicoElem.querySelector(".time");
    let mexicoAmPmElem = mexicoElem.querySelector(".am-pm");

    let mexicoTime = moment().tz("Mexico/General");

    mexicoDateElem.innerHTML = mexicoTime.format("MMMM Do YYYY");
    mexicoTimeElem.innerHTML = mexicoTime.format("hh:mm");
    mexicoAmPmElem.innerHTML = mexicoTime.format("A");
  }

  let melbourneElem = document.querySelector("#melbourne");
  if (melbourneElem) {
    let melbourneDateElem = melbourneElem.querySelector(".date");
    let melbourneTimeElem = melbourneElem.querySelector(".time");
    let melbourneAmPmElem = melbourneElem.querySelector(".am-pm");

    let melbourneTime = moment().tz("Australia/Melbourne");

    melbourneDateElem.innerHTML = melbourneTime.format("MMMM Do YYYY");
    melbourneTimeElem.innerHTML = melbourneTime.format("hh:mm");
    melbourneAmPmElem.innerHTML = melbourneTime.format("A");
  }

  let saopauloElem = document.querySelector("#saopaulo");
  if (saopauloElem) {
    let saopauloDateElem = saopauloElem.querySelector(".date");
    let saopauloTimeElem = saopauloElem.querySelector(".time");
    let saopauloAmPmElem = saopauloElem.querySelector(".am-pm");

    let saopauloTime = moment().tz("Australia/Melbourne");

    saopauloDateElem.innerHTML = saopauloTime.format("MMMM Do YYYY");
    saopauloTimeElem.innerHTML = saopauloTime.format("hh:mm");
    saopauloAmPmElem.innerHTML = saopauloTime.format("A");
  }
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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let chosenCityTime = moment().tz(cityTimeZone);
  let cityName = cityTimeZone.replace("_", " ").split("/");
  cityName = cityName[cityName.length - 1];

  let cityListElem = document.querySelector(".world-cities");
  cityListElem.innerHTML = `
  <div class="city-time">
          <h3 class="city">${cityName}</h3>
          <div class="date">${chosenCityTime.format("MMMM Do YYYY")}</div>
          <div class="full-time">
            <span class="time">${chosenCityTime.format("hh:mm")} </span>
            <span class="am-pm">${chosenCityTime.format("A")}</span>
          </div>
        </div>
        `;

  let chosenCityElem = document.querySelector(".chosen-city ");
  let chosenCityNameElem = chosenCityElem.querySelector(".city");
  let chosenCityDateElem = chosenCityElem.querySelector(".date");
  let chosenCityTimeElem = chosenCityElem.querySelector(".time");
  let chosenCityAmPmElem = chosenCityElem.querySelector(".am-pm");
  chosenCityNameElem.innerHTML = cityName;
  chosenCityDateElem.innerHTML = chosenCityTime.format("MMMM Do YYYY");
  chosenCityTimeElem.innerHTML = chosenCityTime.format("hh:mm");
  chosenCityAmPmElem.innerHTML = chosenCityTime.format("A");
}

updateTime();
updateCurrentTime();
setInterval(updateTime, 1000);
setInterval(updateCurrentTime, 1000);

let citiesSelectElem = document.querySelector("#city-select");

citiesSelectElem.addEventListener("change", updateCity);
