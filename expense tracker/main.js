const date = document.getElementById("date");
const namee = document.getElementById("name");
const amount = document.getElementById("amount");
const form = document.querySelector("form");
const table = document.querySelector("table tbody");
form.addEventListener("submit", (eo) => {
  eo.preventDefault();
  table.innerHTML += ` <tr class="found">
    <td>${namee.value}</td>
    <td>${date.value}</td>
    <td>$${amount.value}</td>
    <td><span class= "close">X</span></td>
  </tr>
  `;
  namee.value = "";
  date.value = "";
  amount.value = "";
});
const tableMain = document.querySelector("table");
tableMain.addEventListener("click", (eo) => {
  const tableaa = document.querySelectorAll("table tbody .found");
  if (eo.target.classList.contains("close")) {
    eo.target.parentElement.parentElement.remove();
  }
});
