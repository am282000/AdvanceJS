const currentDate = document.getElementById("date");
const currentTime = document.getElementById("time");

function prependZero(num) {
  return num.toString().padStart(2, "0");
}

function getDate(now) {
  const days = {
    0: "SUN",
    1: "MON",
    2: "TUE",
    3: "WED",
    4: "THU",
    5: "FRI",
    6: "SAT",
  };
  const year = now.getFullYear();
  const month = prependZero(now.getMonth() + 1);
  const date = prependZero(now.getDate());
  const day = now.getDay();
  const dateString = `${year}-${month}-${date} ${days[day]}`;
  currentDate.innerHTML = dateString;
}

function getTime(now) {
  const hours = prependZero(now.getHours());
  const minutes = prependZero(now.getMinutes());
  const seconds = prependZero(now.getSeconds());
  const timeString = `${hours}:${minutes}:${seconds}`;
  currentTime.innerHTML = timeString;
}

const updateDateTime = function (params) {
  const now = new Date();
  getDate(now);
  getTime(now);
};

updateDateTime();

setInterval(() => {
  updateDateTime();
}, 1000);
