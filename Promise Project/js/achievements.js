// Counting Achievements
const courses = document.getElementById("count-courses");
const students = document.getElementById("count-students");
const awards = document.getElementById("count-awards");
let countC = 0;
let countS = 0;
let countA = 0;
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
const countAchievements = () => {
  setInterval(() => {
    if (countC < 450) {
      countC++;
      courses.innerHTML = `${countC}+`;
      students.innerHTML = `${Math.trunc(scale(countC, 0, 450, 0, 7900))}+`;
      awards.innerHTML = `${Math.trunc(scale(countC, 0, 450, 0, 26))}+`;
    } else {
      clearInterval(stop);
    }
  }, 0);
};
countAchievements();
