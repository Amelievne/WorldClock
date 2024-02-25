function updateTimeMm(timezone, section) {
  let chosenCityTime = moment().tz(timezone);
  let cityName = timezone.replace("_", " ").split("/");
  cityName = cityName[cityName.length - 1];
  section.innerHTML = `
  <div class="city-time">
          <h3 class="city">${cityName}</h3>
          <div class="date">${chosenCityTime.format("MMMM Do YYYY")}</div>
          <div class="full-time">
            <span class="time">${chosenCityTime.format("hh:mm")} </span>
            <span class="am-pm">${chosenCityTime.format("A")}</span>
          </div>
        </div>
        `;
}
function updateTimeSs(timezone, section) {
  let chosenCityTime = moment().tz(timezone);
  let cityName = timezone.replace("_", " ").split("/");
  cityName = cityName[cityName.length - 1];
  section.innerHTML = `
  <div class="city-time">
          <h3 class="city">${cityName}</h3>
          <div class="date">${chosenCityTime.format("MMMM Do YYYY")}</div>
          <div class="full-time">
            <span class="time">${chosenCityTime.format("hh:mm:ss")} </span>
            <span class="am-pm">${chosenCityTime.format("A")}</span>
          </div>
        </div>
        `;
}
function updateHistoric(timezone) {
  let historicElem = document.querySelector("#historic-search");

  let chosenCityTime = moment().tz(timezone);
  let cityName = timezone.replace("_", " ").split("/");
  cityName = cityName[cityName.length - 1];

  historicList += `
  <div class="city-time">
          <h3 class="city">${cityName}</h3>
          <div class="date">${chosenCityTime.format("MMMM Do YYYY")}</div>
          <div class="full-time">
            <span class="time">${chosenCityTime.format("hh:mm")} </span>
            <span class="am-pm">${chosenCityTime.format("A")}</span>
          </div>
        </div>
        `;

  historicElem.innerHTML = `<section>${historicList}</section>`;
}

function updateCurrentCity() {
  let cityTimeZone = moment.tz.guess();
  let cityListElem = document.querySelector(".current-city-time");
  updateTimeSs(cityTimeZone, cityListElem);
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityListElem = document.querySelector(".chosen-city-time");
  updateTimeMm(cityTimeZone, cityListElem);
  updateHistoric(cityTimeZone);
}

function updateWorldList() {
  let tokyoElem = document.querySelector("#tokyo");
  let tokyoTz = "Asia/Tokyo";
  updateTimeMm(tokyoTz, tokyoElem);

  let mexicoElem = document.querySelector("#mexico");
  let mexicoTz = "America/Cancun";
  updateTimeMm(mexicoTz, mexicoElem);

  let melbourneElem = document.querySelector("#melbourne");
  let melbourneTz = "Australia/Melbourne";
  updateTimeMm(melbourneTz, melbourneElem);

  let saopauloElem = document.querySelector("#saopaulo");
  let saopauloTz = "America/Sao_Paulo";
  updateTimeMm(saopauloTz, saopauloElem);
}

updateWorldList();
updateCurrentCity();
setInterval(updateWorldList, 1000);
setInterval(updateCurrentCity, 1000);

let citiesSelectElem = document.querySelector("#city-select");
citiesSelectElem.addEventListener("change", updateCity);

let historicList = "";
