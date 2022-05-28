const icon = document.querySelector("i");
const input = document.querySelector("input");
icon.addEventListener("click", (eo) => {
    input.classList.toggle("active");
    // console.log(input.scrollHeight);
})