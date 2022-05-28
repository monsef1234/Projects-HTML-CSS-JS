const img = document.querySelector(".img");
const counter = document.querySelector(".counter")
let timesClicked = 0
img.addEventListener("dblclick",(eo) => {
    const hearts = document.querySelectorAll(".fa-heart") 
    hearts.forEach(heart => {
        heart.remove();
    });
    const heart =  document.createElement("i");
    heart.classList.add("fa-solid");
    heart.classList.add("fa-heart");
    img.append(heart);
    let x = eo.clientX;
    let y = eo.clientY;
    let xImg = eo.target.offsetLeft;
    let yImg = eo.target.offsetTop;
    let xInside = x - xImg;
    let yInside = y - yImg;
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    counter.innerHTML= `${++timesClicked}`
})