setInterval(() => {
  const localTime = document.querySelector("#localTime");
  const date = new Date();
  var hs = date.getHours();
  var mins = date.getMinutes();
  var sec = date.getSeconds();
  var type = "AM";

  function updateTime() {
    var now = new Date();
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    document.getElementById("date").innerHTML =
      now.getDate() + " " + months[now.getMonth()];
    document.getElementById("year").innerHTML = new Date().getFullYear();
  }

  setInterval(updateTime, 1000);

  if (hs > 12) {
    type = "PM";
    hs = hs - 12;
  }
  if (hs < 10) {
    hs = "0" + hs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }

  localTime.textContent = hs + ":" + mins + ":" + sec + " " + type;
});

/*REFERENCES
https://www.aspsnippets.com/Articles/JavaScript-Display-Current-Time-in-12-hour-format-AM-PM-and-24-hour-format-with-Hours-Minutes-and-Seconds-hhmmss.aspx
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
https://www.w3schools.com/jsref/jsref_obj_date.asp*/
