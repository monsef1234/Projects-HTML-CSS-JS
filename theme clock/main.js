const body = document.body;
const toggleBg = document.querySelector(".toggle");
toggleBg.addEventListener("click", (eo) => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    toggleBg.innerHTML = "Light Mode";
  } else {
    toggleBg.innerHTML = "Dark Mode";
  }
});
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
const months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec",
];
const setTime = () => {
  const time = new Date();
  const timeNow = document.querySelector(".time-now");
  const date = document.querySelector(".number");
  const month = document.querySelector(".month");
  const day = document.querySelector(".day");
  timeNow.innerHTML = `${time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  })}`;
  date.innerHTML = `${time.getDate()}`;
  month.innerHTML = `${months[time.getMonth()].toUpperCase()}`;
  day.innerHTML = `${days[time.getDay()].toUpperCase()},`;
  const hourHand = document.querySelector(".hour-hand");
  const minHand = document.querySelector(".min-hand");
  const secHand = document.querySelector(".sec-hand");
  const hour = new Date().getHours();
  const hourForClock = hour % 12;
  // console.log(hourForClock);
  const min = new Date().getMinutes();
  const sec = new Date().getSeconds();
  hourHand.style.transform = `rotate(${scale(
    hourForClock,
    0,
    10,
    -90,
    270
  )}deg)`;
  minHand.style.transform = `rotate(${scale(min, 0, 60, -90, 270)}deg)`;
  secHand.style.transform = `rotate(${scale(sec, 0, 60, -90, 270)}deg)`;
};

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

setInterval(setTime, 0);
