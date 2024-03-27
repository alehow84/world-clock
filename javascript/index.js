function updateTime() {
  //Toronto
  let torontoElement = document.querySelector("#toronto");
  if (torontoElement) {
    let torontoElementDate = torontoElement.querySelector(".date");
    let torontoElementTime = torontoElement.querySelector(".time");
    let torontoElementTimezone = moment().tz("America/Toronto");
    torontoElementDate.innerHTML =
      torontoElementTimezone.format("ddd Do MMMM YYYY");
    torontoElementTime.innerHTML = torontoElementTimezone.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

  //Norwich
  let norwichElement = document.querySelector("#norwich");
  if (norwichElement) {
    let norwichElementDate = norwichElement.querySelector(".date");
    let norwichElementTime = norwichElement.querySelector(".time");
    let norwichElementTimezone = moment().tz("Europe/London");
    norwichElementDate.innerHTML =
      norwichElementTimezone.format("ddd Do MMMM YYYY");
    norwichElementTime.innerHTML = norwichElementTimezone.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

  //Berlin
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinElementDate = berlinElement.querySelector(".date");
    let berlinElementTime = berlinElement.querySelector(".time");
    let berlinElementTimezone = moment().tz("Europe/Berlin");
    berlinElementDate.innerHTML =
      berlinElementTimezone.format("ddd Do MMMM YYYY");
    berlinElementTime.innerHTML = berlinElementTimezone.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }

  //Honolulu
  let honoluluElement = document.querySelector("#honolulu");
  if (honoluluElement) {
    let honoluluElementDate = honoluluElement.querySelector(".date");
    let honoluluElementTime = honoluluElement.querySelector(".time");
    let honoluluElementTimezone = moment().tz("Pacific/Honolulu");
    honoluluElementDate.innerHTML =
      honoluluElementTimezone.format("ddd Do MMMM YYYY");
    honoluluElementTime.innerHTML = honoluluElementTimezone.format(
      "HH:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(cityName, timezone, flag) {
  let currentTime = moment().tz(timezone);

  return `<div class="city" id="selected-city">
    <div>
      <h2>${cityName} <span class="fi fi-${flag} fis"></span></h2>
      <div class="date">${currentTime.format("ddd Do MMMM YYYY")}</div>
    </div>
    <div class="time">${currentTime.format(
      "HH:mm:ss [<small>]A[</small>]"
    )}</div>
    </div>
    <a href="/"><i class="fa-solid fa-circle-left"></i> Back to World Clock home</a>`;
}

function selectCity(event) {
  let flagRef = null;
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  if (cityTimezone === "Asia/Tokyo") {
    flagRef = "jp";
  } else if (cityTimezone === "Europe/Copenhagen") {
    flagRef = "dk";
  } else if (cityTimezone === "Europe/Budapest") {
    flagRef = "hu";
  } else if (cityTimezone === "Atlantic/Reykjavik") {
    flagRef = "is";
  } else if (cityTimezone === "Europe/London") {
    flagRef = "gb";
  }

  let citiesElement = document.querySelector("#cities");
  let selectedCityName = cityTimezone.split("/")[1];

  citiesElement.innerHTML = updateCity(selectedCityName, cityTimezone, flagRef);

  setInterval(() => {
    citiesElement.innerHTML = updateCity(
      selectedCityName,
      cityTimezone,
      flagRef
    );
  }, 1000);
}

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", selectCity);

updateTime();
setInterval(updateTime, 1000);
