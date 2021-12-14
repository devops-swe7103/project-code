console.log(`searchValidation.js connected`);

// the search form should either a city value or a postcode value
// when user begins to type in one input field, the other is cleared out
// depending on which value is returned either the /search/city/:cityName or the /search/postcode/:postcode is returned
const cityInput = document.getElementById("city-input");
const postcodeInput = document.getElementById("postcode-input");

const clearInputIn = (element) => {
  element.value = undefined;
};

cityInput.addEventListener(`input`, (e) => {
  console.log(`Change in city: `, e.target.value);
  clearInputIn(postcodeInput);
});

postcodeInput.addEventListener(`input`, (e) => {
  console.log(`Change in postcode: `, e.target.value);
  clearInputIn(cityInput);
});
