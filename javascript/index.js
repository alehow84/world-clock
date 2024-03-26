let cityOneElement = document.querySelector("#toronto");
let citiesElement = document.querySelector("#cities");
let timezoneContainer = "";

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

    // let singleCityElement = document.querySelector("#single-city");
    // if (singleCityElement) {
    //   let singleCityElementDate = singleCityElement.querySelector(".date");
    //   let singleCityElementTime = singleCityElement.querySelector(".time");
    //   let singleCityElementTimezone = moment().tz(`${timezoneContainer}`);
    //   singleCityElementDate.innerHTML =
    //     singleCityElementTimezone.format("ddd Do MMMM YYYY");
    //   singleCityElementTime.innerHTML = singleCityElementTimezone.format(
    //     "HH:mm:ss [<small>]A[</small>]"
    //   );
    // }
  }
}

function changeCity(event) {
  let flagRef = "";
  timezoneContainer = event.target.value;
  if (timezoneContainer === "Asia/Tokyo") {
    flagRef = "jp";
  } else if (timezoneContainer === "Europe/Copenhagen") {
    flagRef = "dk";
  } else if (timezoneContainer === "Europe/Budapest") {
    flagRef = "hu";
  } else if (timezoneContainer === "Atlantic/Reykjavik") {
    flagRef = "is";
  }
  let selectedCityName = timezoneContainer.split("/")[1];
  console.log(selectedCityName, "selectedCityName");

  let cityDateInfo = moment().tz(`${timezoneContainer}`);

  citiesElement.innerHTML = `<div class="city">
<div>
  <h2>${selectedCityName} <span class="fi fi-${flagRef} fis"></span></h2>
  <div class="date">${cityDateInfo.format("ddd Do MMMM YYYY")}</div>
</div>
<div class="time">${cityDateInfo.format("HH:mm:ss [<small>]A[</small>]")}</div>
</div>`;
}

function resetSelect() {
  citiesElement.innerHTML = `<div class="city" id="toronto">
<div>
  <h2>Toronto <span class="fi fi-ca fis"></span></h2>
  <div class="date"></div>
</div>
<div class="time"></div>
</div>
<div class="city" id="norwich">
<div>
  <h2>Norwich <span class="fi fi-gb fis"></span></h2>
  <div class="date"></div>
</div>
<div class="time"></div>
</div>
<div class="city" id="berlin">
<div>
  <h2>Berlin <span class="fi fi-de fis"></span></h2>
  <div class="date"></div>
</div>
<div class="time"></div>
</div>
<div class="city" id="honolulu">
<div>
  <h2>Honolulu <span class="fi fi-us fis"></span></h2>
  <div class="date"></div>
</div>
<div class="time"></div>
</div>
</div>`;
}

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", changeCity);

let cityReset = document.querySelector("#reset");
cityReset.addEventListener("click", resetSelect);

updateTime();
setInterval(updateTime, 1000);
