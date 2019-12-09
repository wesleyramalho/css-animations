var inc = 1000;

clock();

function clock() {
  const date = new Date();

  const hours = ((date.getHours() + 11) % 12) + 1;
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const hour = hours * 30;
  const minute = minutes * 6;
  const second = seconds * 6;
  const hourElem = document.querySelector(".hour");
  const minuteElem = document.querySelector(".minute");
  const secondElem = document.querySelector(".second");

  if (hourElem) {
    hourElem.style.transform = `rotate(${hour}deg)`;
  }
  if (minuteElem) {
    minuteElem.style.transform = `rotate(${minute}deg)`;
  }
  if (secondElem) {
    secondElem.style.transform = `rotate(${second}deg)`;
  }
}

setInterval(clock, inc);
