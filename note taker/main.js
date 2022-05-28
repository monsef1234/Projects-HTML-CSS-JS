const add = document.getElementById("add");
const remove = document.getElementById("remove");
const allNote = document.getElementById("allnote");
console.log(allNote);
const popUp = document.getElementsByClassName("fixed")[0];
const note = document.getElementById("note");
const placeOfNotes = document.getElementsByClassName("yournotes")[0];
const closee = document.getElementById("close");
let i = 0;
add.addEventListener("click", (eo) => {
  if (note.value === "") {
    alert("Write Something Please!");
  } else {
    eo.preventDefault();
    i++;
    remove.remove();
    placeOfNotes.innerHTML = `
    <div class="box">
    <h2>note ${i}</h2>
    <p>${note.value}</p>
    <button class="more" id="more">viwe detail</button>
  </div>
    `;
    console.log(note.value);
  }
});
placeOfNotes.addEventListener("click", (eo) => {
  if (eo.target.classList.contains("more")) {
    const findNote = eo.target.parentElement.getElementsByTagName("p")[0];
    const span = document.createElement("span");
    allNote.prepend(span);
    popUp.style.visibility = "visible";
    span.innerText = `${findNote.textContent}`;
  }
});
closee.addEventListener("click", (eo) => {
  popUp.style.visibility = "hidden";
});
