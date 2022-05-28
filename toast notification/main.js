const msgs = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
  "Message Five",
];
const colors = ["red", "yellow", "blue", "green", "brown"];
const show = document.querySelector(".show");
const notifs = document.querySelector(".notifs");
const showFunc = () => {
  let randomNum = Math.trunc(Math.random() * msgs.length);
  const div = document.createElement("button");
  div.classList.add("notif");
  div.innerHTML = `${msgs[randomNum]}`;
  div.style.color = `${colors[randomNum]}`;
  notifs.append(div);
  const divs = document.querySelectorAll(".notif");
  divs.forEach((div) => {
    setTimeout(() => {
      div.remove();
    }, 2000);
  });
};

show.addEventListener("click", showFunc);
/* https://www.youtube.com/watch?v=ZXAn4UQ9ETA&list=PL57itF56EUaBuwft-VCr7hSMrJgw93qtb&index=28*/
