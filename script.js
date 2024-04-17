function updateTime() {
  //prague
  let pragueElement = document.querySelector("#prague");
  if (pragueElement) {
    let pragueDateElement = pragueElement.querySelector(".date");
    let pragueTimeElement = pragueElement.querySelector(".time");
    let pragueTime = moment()
      .tz("Europe/Prague")
      .format("HH:mm:ss [<small>]A[</small>]");

    pragueDateElement.innerHTML = moment().format("LL");
    pragueTimeElement.innerHTML = pragueTime;
  }
}

function updateCity(event) {
  let cityTimezone = event.target.value;
  if (cityTimezone === "current") {
    cityTimezone = moment.tz.guess();
  }
  let cityName = cityTimezone.split("/")[1];
  let cityTime = moment()
    .tz(`${cityTimezone}`)
    .format("HH:mm:ss [<small>]A[</small>]");
  let cityDate = moment().tz(`${cityTimezone}`).format("LL");
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city">
            <div class="city-and-date">
              <h2>${cityName}</h2>
              <div class="date">${cityDate}</div>
            </div>
            <div class="time">${cityTime}</div>
          </div>
        `;
}

let selectElement = document.querySelector("#select-element");
selectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
