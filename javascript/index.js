const updateTime = () => {
  //Toronto
  let mainElement = document.querySelector("#city-main");
  let mainElementDate = mainElement.querySelector(".date");
  let mainElementTime = mainElement.querySelector(".time");
  let mainElementTimezone = moment().tz("America/Toronto");
  mainElementDate.innerHTML = mainElementTimezone.format("ddd Do MMMM YYYY");
  mainElementTime.innerHTML = mainElementTimezone.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  //Norwich
  let secondElement = document.querySelector("#city-2");
  let secondElementDate = secondElement.querySelector(".date");
  let secondElementTime = secondElement.querySelector(".time");
  let secondElementTimezone = moment().tz("Europe/London");
  secondElementDate.innerHTML =
    secondElementTimezone.format("ddd Do MMMM YYYY");
  secondElementTime.innerHTML = secondElementTimezone.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  //Berlin
  let thirdElement = document.querySelector("#city-3");
  let thirdElementDate = thirdElement.querySelector(".date");
  let thirdElementTime = thirdElement.querySelector(".time");
  let thirdElementTimezone = moment().tz("Europe/London");
  thirdElementDate.innerHTML = thirdElementTimezone.format("ddd Do MMMM YYYY");
  thirdElementTime.innerHTML = thirdElementTimezone.format(
    "HH:mm:ss [<small>]A[</small>]"
  );

  //Honolulu
  let fourthElement = document.querySelector("#city-4");
  let fourthElementDate = fourthElement.querySelector(".date");
  let fourthElementTime = fourthElement.querySelector(".time");
  let fourthElementTimezone = moment().tz("Pacific/Honolulu");
  fourthElementDate.innerHTML =
    fourthElementTimezone.format("ddd Do MMMM YYYY");
  fourthElementTime.innerHTML = fourthElementTimezone.format(
    "HH:mm:ss [<small>]A[</small>]"
  );
};

updateTime();

setInterval(updateTime, 1000);
