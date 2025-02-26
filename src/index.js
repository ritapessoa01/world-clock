function updateTime() {
  // Current Location

  let currentElement = document.querySelector("#current");
  let currentDateElement = currentElement.querySelector("#date");
  let currentTimeElement = currentElement.querySelector("#time");
  let currentTime = moment();

  currentDateElement.innerHTML = currentTime.format("MMMM Do YYYY");
  currentTimeElement.innerHTML = currentTime.format("HH:mm");

  // Paris

  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("HH:mm:ss");

  // Tokyo

  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTime.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoTime.format("HH:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
