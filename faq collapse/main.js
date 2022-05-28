const show = document.querySelectorAll(".fa-angle-down");
const closee = document.querySelectorAll(".fa-circle-xmark");
const closeAll = () => {
  const box = document.querySelectorAll(".box");
  box.forEach((item) => {
    item.style.backgroundColor = "transparent";
  });
  show.forEach((item) => {
    item.style.display = "block";
  });
  closee.forEach((item) => {
    item.style.display = "none";
  });
  const comments = document.querySelectorAll(".comments");
  comments.forEach((item) => {
    item.style.display = "none";
  });
  const answer = document.querySelectorAll(".answer");
  answer.forEach((item) => {
    item.style.height = "0px";
    item.style.marginTop = "0";
  });
};
show.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    closeAll();
    const anwserr =
      item.parentElement.parentElement.parentNode.getElementsByClassName(
        "answer"
      )[0];
    item.style.display = "none";
    anwserr.style.height = `${anwserr.scrollHeight}px`;
    anwserr.style.marginTop = "20px";
    const xMark =
      item.parentElement.getElementsByClassName("fa-circle-xmark")[0];
    xMark.style.display = "block";
    const box = item.parentElement.parentElement.parentElement;
    box.style.backgroundColor = "white";
    const comments =
      item.parentElement.parentElement.parentElement.getElementsByClassName(
        "comments"
      )[0];
    comments.style.display = "block";
  });
});
closee.forEach((item, index) => {
  item.addEventListener("click", (eo) => {
    const anwserr =
      item.parentElement.parentElement.parentElement.getElementsByClassName(
        "answer"
      )[0];
    item.style.display = "none";
    anwserr.style.height = `0px`;
    anwserr.style.marginTop = "0px";
    const angle = item.parentElement.getElementsByClassName("fa-angle-down")[0];
    angle.style.display = "block";
    const box = item.parentElement.parentElement.parentElement;
    box.style.backgroundColor = "transparent";
    const comments =
      item.parentElement.parentElement.parentElement.getElementsByClassName(
        "comments"
      )[0];
    comments.style.display = "none";
  });
});
