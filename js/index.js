function timeDisplay() {
  let today = new Date();
  let timePar = document.getElementById("time");
  let hr = chkTime(today.getHours());
  let min = chkTime(today.getMinutes());
  let sec = chkTime(today.getSeconds());
  let timeStr = hr + " : " + min + " : " + sec;

  timePar.innerHTML = timeStr;
}
setInterval(timeDisplay, 100);

function chkTime(num) {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
}

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function displayDate() {
  let today = new Date();
  let datePar = document.getElementById("date");
  let dateStr =
    today.getDate() +
    " " +
    months[today.getMonth()] +
    " " +
    today.getFullYear();
  datePar.innerHTML = dateStr;
}
displayDate();

let greet = () => {
  let username = prompt("Please enter your name: ", "Guest");
  let greetDiv = document.querySelector(".greet");
  if (username == null) {
    username = "Guest";
  }
  greetDiv.innerHTML = "Hey , " + username + "!";
};

setTimeout(greet, 2000);
