// toggle dark light mode
const dark = document.getElementsByClassName("uil-moon")[0];
const light = document.getElementsByClassName("uil-sun")[0];
console.log(light);
const htmlFile = document.querySelector("html");
dark.addEventListener("click", (eo) => {
  htmlFile.classList.add("dark");
  dark.classList.add("opacity");
  light.classList.remove("opacity");
});
light.addEventListener("click", (eo) => {
  htmlFile.classList.remove("dark");
  dark.classList.remove("opacity");
  light.classList.add("opacity");
});
// Menu
const openMenu = document.getElementById("open-menu");
const closeMenu = document.getElementById("close-menu");
const menu = document.querySelector(".header_container ul");
openMenu.addEventListener("click", (eo) => {
  menu.style.display = "flex";
  menu.classList.add("animate");
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
});
closeMenu.addEventListener("click", (eo) => {
  menu.style.display = "none";
  menu.classList.remove("animate");
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
});
// Change the active class
const sections = document.querySelectorAll(".section");
const navs = document.querySelectorAll(".header_container ul li");
const removeActive = () => {
  navs.forEach((nav) => {
    nav.classList.remove("active");
  });
};
const hi = sections.length;
sections.forEach((section, index) => {
  navs[0].classList.add("active");
  window.addEventListener("scroll", (eo) => {
    if (window.scrollY >= section.offsetTop - 100) {
      removeActive();
      navs[index].classList.add("active");
    }
  });
});
// Scroll To the section
const navsB = document.querySelectorAll(".header_container ul li a");
navsB.forEach((nav) => {
  nav.addEventListener("click", (eo) => {
    eo.preventDefault();
    const getID = nav.getAttribute("href").slice(1);
    const getSection = document.getElementById(getID);
    window.scrollTo({
      top: getSection.offsetTop - 100,
      left: 0,
    });
  });
});

// Show More Content
const moreContent = document.getElementsByClassName("toggle-more")[0];
const moreBtn = document.getElementsByClassName("toggle-btn")[0];
moreBtn.addEventListener("click", (eo) => {
  moreBtn.classList.toggle("more");
  if (moreBtn.classList.contains("more")) {
    moreContent.style.display = "block";
    moreBtn.innerHTML = "show less";
  } else {
    moreContent.style.display = "none";
    moreBtn.innerHTML = "show more";
  }
});
// Toggle skills
function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
const html = document.getElementsByClassName("html")[0];
const css = document.getElementsByClassName("css")[0];
const js = document.getElementsByClassName("js")[0];
const htmlBox = document.getElementsByClassName("html-box")[0];
const cssBox = document.getElementsByClassName("css-box")[0];
const jsBox = document.getElementsByClassName("js-box")[0];
const figma = document.getElementsByClassName("figma")[0];
const adobexd = document.getElementsByClassName("adobexd")[0];
const adobeafter = document.getElementsByClassName("adobeafter")[0];
const figmaBox = document.getElementsByClassName("figma-box")[0];
const adobexdBox = document.getElementsByClassName("adobexd-box")[0];
const adobeafterBox = document.getElementsByClassName("adobeafter-box")[0];
const php = document.getElementsByClassName("php")[0];
const python = document.getElementsByClassName("python")[0];
const mongo = document.getElementsByClassName("mongo")[0];
const phpBox = document.getElementsByClassName("php-box")[0];
const pythonBox = document.getElementsByClassName("python-box")[0];
const mongoBox = document.getElementsByClassName("mongo-box")[0];
let counterUIUX = 0;
let counterFrontEnd = 0;
let counterBackEnd = 0;
const UIUX = () => {
  setInterval(() => {
    if (counterUIUX < 92) {
      counterUIUX++;
      figma.innerHTML = `${counterUIUX}%`;
      figmaBox.style.width = `${scale(counterUIUX, 0, 92, 0, 92)}%`;
      adobexd.innerHTML = `${Math.trunc(scale(counterUIUX, 0, 92, 0, 80))}%`;
      adobexdBox.style.width = `${scale(counterUIUX, 0, 92, 0, 80)}%`;
      adobeafter.innerHTML = `${Math.trunc(scale(counterUIUX, 0, 92, 0, 88))}%`;
      adobeafterBox.style.width = `${scale(counterUIUX, 0, 92, 0, 88)}%`;
    } else {
      clearInterval(FrontEnd);
    }
  }, 30);
};

const FrontEnd = () => {
  setInterval(() => {
    if (counterFrontEnd < 92) {
      counterFrontEnd++;
      html.innerHTML = `${counterFrontEnd}%`;
      htmlBox.style.width = `${scale(counterFrontEnd, 0, 92, 0, 92)}%`;
      css.innerHTML = `${Math.trunc(scale(counterFrontEnd, 0, 92, 0, 80))}%`;
      cssBox.style.width = `${scale(counterFrontEnd, 0, 92, 0, 80)}%`;
      js.innerHTML = `${Math.trunc(scale(counterFrontEnd, 0, 92, 0, 88))}%`;
      jsBox.style.width = `${scale(counterFrontEnd, 0, 92, 0, 88)}%`;
    } else {
      clearInterval(FrontEnd);
    }
  }, 30);
};
const BackEnd = () => {
  setInterval(() => {
    if (counterBackEnd < 92) {
      counterBackEnd++;
      php.innerHTML = `${counterBackEnd}%`;
      phpBox.style.width = `${scale(counterBackEnd, 0, 92, 0, 92)}%`;
      python.innerHTML = `${Math.trunc(scale(counterBackEnd, 0, 92, 0, 80))}%`;
      pythonBox.style.width = `${scale(counterBackEnd, 0, 92, 0, 80)}%`;
      mongo.innerHTML = `${Math.trunc(scale(counterBackEnd, 0, 92, 0, 88))}%`;
      mongoBox.style.width = `${scale(counterBackEnd, 0, 92, 0, 88)}%`;
    } else {
      clearInterval(BackEnd);
    }
  }, 30);
};
const resetUIUX = () => {
  figma.innerHTML = `0%`;
  figmaBox.style.width = `0%`;
  adobexd.innerHTML = `0%`;
  adobexdBox.style.width = `0%`;
  adobeafter.innerHTML = `0%`;
  adobeafterBox.style.width = `0%`;
};

const headers = document.querySelectorAll(".header");
headers.forEach((header, index) => {
  header.addEventListener("click", (eo) => {
    header.classList.toggle("block");
    if (header.classList.contains("block")) {
      if (index === 0) {
        UIUX();
      }
      if (index === 1) {
        FrontEnd();
      }
      if (index === 2) {
        BackEnd();
      }
    }
  });
});
