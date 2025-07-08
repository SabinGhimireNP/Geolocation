const speed = document.querySelector(".speed-value");
const arrow = document.querySelector(".arrow");

navigator.geolocation.watchPosition((data) => {
  // console.log(data);
  speed.textContent = Math.round(data.coords.speed);
  arrow.style.transform = `rotate(${data.coords.heading}deg)`;
});
