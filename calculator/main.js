let clipboard1 = new ClipboardJS(".btn");
let btn = document.querySelector(".btn");
const result = document.getElementById("result");
const clearResult = document.getElementById("clear");
const buttons = document.querySelectorAll("#button");
const equal = document.getElementById("equal");
const operators = document.querySelectorAll("#num-first");
const removeCalc = document.getElementById("remove");
buttons.forEach((button) => {
  button.addEventListener("click", (eo) => {
    if (result.classList.contains("result")) {
      result.classList.remove("result");
      result.value = "";
      result.value += button.value;
    } else {
      result.value += button.value;
    }
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", (eo) => {
    if (result.value === "") {
      result.value = "";
    } else {
      result.value += operator.value;
    }
  });
});
clearResult.addEventListener("click", (eo) => {
  result.value = "";
});
equal.addEventListener("click", (eo) => {
  if (result.value === "") {
    alert("Please Write a calculation");
  } else {
    const resultCalc = eval(result.value);
    result.value = resultCalc;
    result.classList.add("result");
  }
});
removeCalc.addEventListener("click", (eo) => {
  const resultRemove = result.value;
  result.value = resultRemove.slice(0, resultRemove.length - 1);
});
btn.addEventListener("click", (eo) => {
  if (result.value === "") {
    alert("Please Write a calculation");
  } else {
    alert("Copied!");
  }
});
