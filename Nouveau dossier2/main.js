const upperInput = document.getElementById("upper");
const lowerInput = document.getElementById("lower");
const numberInput = document.getElementById("number");
const symbolesInput = document.getElementById("symbols");
const btn = document.querySelector(".generate");
const text = document.getElementById("text");
const length = document.getElementById("numberl");
const inputs = document.querySelectorAll(".checked");
console.log(inputs);
/////////////////////////////////////////////////////////
const getlowercase = () => {
  const alph = "abcdefghijklmnopqrstuvwxyz";
  return alph.charAt(Math.trunc(Math.random() * alph.length));
};
const getuppercase = () => {
  const alph = "abcdefghijklmnopqrstuvwxyz";
  return alph.charAt(Math.trunc(Math.random() * alph.length)).toUpperCase();
};
const getnumbers = () => {
  const numbers = "0123456789";
  return numbers.charAt(Math.trunc(Math.random() * numbers.length));
};
const getsymbols = () => {
  const symbols = `!@#$%^&*()_-+={[}]|\:;"'<,>.?/`;
  return symbols.charAt(Math.trunc(Math.random() * symbols.length));
};
const random = {
  lower: getlowercase,
  upper: getuppercase,
  number: getnumbers,
  symbole: getsymbols,
};
/////////////////////////////////////////////////////////
btn.addEventListener("click", (eo) => {
  text.value = "";
  const hasLower = lowerInput.checked;
  const hasUpper = upperInput.checked;
  const hasNumbers = numberInput.checked;
  const hasSymbols = symbolesInput.checked;
  generatePassword(hasLower, hasUpper, hasNumbers, hasSymbols);
});
const generatePassword = (lower, upper, number, symbole) => {
  const typeCounts = lower + upper + number + symbole;
  const typeArr = [{ lower }, { upper }, { number }, { symbole }].filter(
    (item) => Object.values(item)[0]
  );
  console.log(typeArr);
  for (let i = 0; i < length.value; i += typeCounts) {
    typeArr.forEach((type) => {
      let funcName = Object.keys(type)[0];
      let getFunc = random[`${funcName}`];
      let excu = getFunc;
      text.value += excu();
    });
  }
};

// Copy Event
const copy = document.querySelector(".fa-clipboard");
copy.addEventListener("click", (eo) => {
  if (text.value !== "") {
    alert("Copied!");
    setTimeout(() => {
      navigator.clipboard.writeText(text.value);
    }, 10);
  }
});
