setInterval(function () {
  //Singapore
  let singaporeElement = document.querySelector("#singapore");
  let singaporeDateElement = singaporeElement.querySelector(".date");
  let singaporeTimeElement = singaporeElement.querySelector(".time");
  let singaporeTime = moment()
    .tz("Asia/Singapore")
    .format("HH:mm:ss [<small>]A[</small>]");

  singaporeDateElement.innerHTML = moment().format("LL");
  singaporeTimeElement.innerHTML = singaporeTime;
}, 1000);

setInterval(function () {
  //Singapore
  let torontoElement = document.querySelector("#toronto");
  let torontoDateElement = torontoElement.querySelector(".date");
  let torontoTimeElement = torontoElement.querySelector(".time");
  let torontoTime = moment()
    .tz("America/Toronto")
    .format("HH:mm:ss [<small>]A[</small>]");

  torontoDateElement.innerHTML = moment().format("LL");
  torontoTimeElement.innerHTML = torontoTime;
}, 1000);
