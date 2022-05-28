const img = document.querySelector("img");
const counter = document.querySelector(".counter");
/*Solution of the teacher -- Better --*/ 
let i = 0;
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
window.addEventListener("load", (eo) => {
    const stop = setInterval(() => {
        i++;
        counter.innerHTML = `${i}%`;
        counter.style.opacity = scale(i, 0, 100, 1, 0);
        img.style.filter = `blur(${scale(i, 0, 100, 30, 0)}px)`;
        if (i === 100) {
            clearInterval(stop);
            counter.style.display = "none"
        }
    }, 50);
})
/* Another Solution - Which is Mine -
let i = 0;
let b = 13;
let c = 1
window.addEventListener("load", (eo) => {
    const stop = setInterval(() => {
        i++;
        counter.innerHTML = `${i}%`;
        counter.style.opacity = scale(i, 0, 100, 1, 0);
        if (i === 100) {
            clearInterval(stop);
            counter.style.display = "none"
        }
    }, 30);
    const stopTwo = setInterval(() => {
        c -= 0.1;
        counter.style.opacity = `${c}`
        if (c < 0) {
            clearInterval(stopTwo);
        }
    }, 300);
    const stopThree = setInterval(() => {
        b -= 1;
        img.style.filter = `blur(${b}px)`
        if (b === 0) {
            clearInterval(stopThree);
        }
    }, 200);
})
*/