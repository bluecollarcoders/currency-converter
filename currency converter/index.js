const api = "https://api.exchangerate-api.com/v4/latest/USD";

var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var resetButton = document.querySelector("#reset");
var fromCurrency = document.querySelector(".from");
var toCurrency = document.querySelector(".to");
var finalAmount = document.getElementById("finalAmount");
var finalValue = document.querySelector(".finalValue");
var resultFrom;
var resultTo;
var searchValue;

// Event when currency is changed
fromCurrency.addEventListener("change", (e) => {
  resultFrom = `${e.target.value}`;
});

// Event when currency is changed
toCurrency.addEventListener("change", (e) => {
  resultTo = `${e.target.value}`;
});

// function for updating value along with eventlisner
search.addEventListener("input", updateValue);
function updateValue(e) {
  searchValue = e.target.value;
}

// when user clicks, it calls function getresults
convert.addEventListener("click", getResults);

// function getresults
function getResults() {
  fetch(`${api}`)
    .then((currency) => {
      return currency.json();
    })
    .then(displayResults);
}

// display function after conversion
function displayResults(currency) {
  let fromRate = currency.rates[resultFrom];
  let toRate = currency.rates[resultTo];
  finalValue.innerHTML = ((toRate / fromRate) * searchValue).toFixed(2);
  finalAmount.style.display = "block";
}
// When user clicks on reset button

resetButton.addEventListener("click", clearVal);

function clearVal() {
  window.location.reload();
  document.getElementsByClassName("finalValue").innerHtml = "";
}
