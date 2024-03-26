/*
Purpose - Add functionality so that when the user selects a city from the dropdown, the world clock is populated with just one city and its time/date information.

- add values to the options in the select that are the moment timezones for each city DONE
-define a function that is called by an event listener 
-this function will grab the value of the event and define it as a variable called cutyTimezone
- 
- add an event listener to the city-select

<span class="fi fi-jp fis"></span>

<span class="fi fi-dk fis"></span>

<span class="fi fi-me fis"></span>

<span class="fi fi-is fis"></span>

*/

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

updateTime();

setInterval(updateTime, 1000);

function changeCity() {
  let cityTimezone = event.target.value;
}

let citySelect = document.querySelector(".city-select");
citySelect.addEventListener();
