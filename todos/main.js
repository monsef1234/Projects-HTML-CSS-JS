const inputTodo = document.getElementById("text");
const form = document.querySelector("form");
const spans = document.querySelector(".spans");
const myTodos = () => {
  const mytodo = inputTodo.value;
  if (mytodo.trim() === "") {
    alert("write somthing!");
  } else {
    const span = document.createElement("span");
    span.classList.add("mytodo");
    span.innerHTML = mytodo;
    spans.append(span);
    inputTodo.value = "";
  }
};
const clickTodos = (eo) => {
  eo.target.classList.toggle("done");
};
const removeTodos = (eo) => {
  eo.target.remove();
};
form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  myTodos();
});
spans.addEventListener("contextmenu", (eo) => {
  eo.preventDefault();
  removeTodos(eo);
});
spans.addEventListener("click", (eo) => {
  eo.preventDefault();

  clickTodos(eo);
});
