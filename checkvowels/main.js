const text = document.getElementById("text");
const btn = document.getElementById("btn");
btn.addEventListener("click", (eo) => {
  const textValue = text.value;
  const regVowels = /[aeuoi]/g;
  if (textValue == "") {
    alert("write somthing");
  }
  if (textValue.match(regVowels) && textValue != "") {
    alert(`There is ${textValue.match(regVowels).length} Vowle(s)`);
  }
  if (!textValue.match(regVowels) && textValue != "") {
    alert("0 vowels");
  }
});
