const userName = document.querySelector('[data-testid="slackUserName"]');
const currentDayOfTheWeek = document.querySelector(
  '[data-testid="currentDayOfTheWeek"]'
);
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
const myTrack = document.querySelector('[data-testid="myTrack"]');
const slackUserImage = document.querySelector(
  '[data-testid="slackDisplayImage"]'
);
const githubLink = document.querySelector('[data-testid="githubLink"]');
const githubUrl = "https://github.com/abiolafasanya/hngx-stage1";

const imageUrl = "https://avatars.githubusercontent.com/u/79338077?v=4";

slackUserImage.setAttribute("src", imageUrl);
userName.innerHTML = `<div style="text-align:center">Abiola Fasanya <br /></div>`;
myTrack.innerHTML = "Frontend";
slackUserImage.setAttribute("alt", "habiola");
githubLink.setAttribute("href", githubUrl);
githubLink.textContent = "GitHub Link";

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
currentDayOfTheWeek.textContent = dayNames[new Date().getDay()];
setInterval(() => {
  const utcTime = Date.now();
  currentUTCTime.textContent = utcTime;
}, 100);
