import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

const user = {
  name: "Qasim Asad",
  age: "25",
  city: "san francisco",
  lastActivity: new Date().getTime()
};

const inactiveFirstStage = () => {
  console.log("User has been inactive for the past 1-2 minutes");
};

const inactiveSecondStage = () => {
  console.log("User has been inactive for the past 3-4 minutes");
};

const inactiveThirdStage = () => {
  console.log("User has been inactive for the past 5-6 minutes");
};
const getMinutes = (seconds) => {
  return seconds / 60;
};
let seconds = 0;

// this is the main method that acts like a worker and runs every 1 minute
setInterval(function () {
  // please write your code here
  seconds++;
  console.log(seconds);
  console.log(getMinutes(seconds));
  let minutes = getMinutes(seconds);
  if (minutes > 5) {
    seconds = 0;
    minutes = getMinutes(seconds);
  }
  if (minutes >= 1 && minutes <= 2) {
    inactiveFirstStage();
  }
  if (minutes >= 2 && minutes <= 3) {
    inactiveSecondStage();
  }
  if (minutes >= 4 && minutes <= 5) {
    inactiveThirdStage();
  }
}, 1000);
