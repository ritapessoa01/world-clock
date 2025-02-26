function updateTime() {
  // Current Location

  let currentTimezone = moment.tz.guess();
  let currentCityName = currentTimezone.replace("_", " ").split("/")[1];
  let currentCity = document.querySelector("#location");

  currentCity.innerHTML = currentCityName;

  let currentElement = document.querySelector("#current");
  let currentDateElement = currentElement.querySelector("#date");
  let currentTimeElement = currentElement.querySelector("#time");
  let currentTime = moment();

  currentDateElement.innerHTML = currentTime.format("MMMM Do YYYY");
  currentTimeElement.innerHTML = currentTime.format("HH:mm:ss");

  // Paris

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisTime.format("HH:mm:ss");
  }

  // Tokyo

  let tokyoElement = document.querySelector("#tokyo");
  if (tokyoElement) {
    let tokyoDateElement = tokyoElement.querySelector(".date");
    let tokyoTimeElement = tokyoElement.querySelector(".time");
    let tokyoTime = moment().tz("Asia/Tokyo");

    tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
    tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss");
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  let cityName = cityTimezone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimezone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` 
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
