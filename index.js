
// VARIABLES NEEDED FOR FORM SUBMISSION AND SHOWING RESULTS
const show = document.querySelectorAll(".show");
const hide = document.querySelectorAll(".hide");
const form = document.querySelector("#container");
const submitBtn = document.querySelector("#submit");





const resultContainer = document.getElementById("resultContainer");

form.addEventListener("submit", Submit);

function Submit() {

  event.preventDefault();


// VARIABLES NEEDED FOR SEARCH PARAMETERS WITHIN API
const cuisineInput = document.getElementById('cuisine').value;
const highProtein = document.getElementById('protein');
const lowCarb = document.getElementById('carb');
const lowFat = document.getElementById('fat');
  const dietInput = document.getElementById('diet').value;

  console.log("button hit");
  console.log(form.classList.contains("show"));

  if (form.classList.contains("show")) {
    console.log("if");

    form.classList.remove("show");
    form.classList.add("hide");
    resultContainer.classList.remove("hide");
    resultContainer.classList.add("show");
  }
  

  console.log(dietInput);
  console.log(cuisineInput);

  if (highProtein.checked == true) {
    console.log(highProtein.value);
  }
  if (lowCarb.checked == true) {
    console.log(lowCarb.value);
  }if (lowFat.checked == true) {
    console.log(lowFat.value);
  }
  
}

function getRecipes() {
    
    // fetch(reviewApiTitle).then(function (response) {
    //     response.json().then(function (data) {
    //       if (data.results.length === 0) {
    //         var movieError = document.createElement("p");
    //         movieError.classList.add("title-text");
    //         movieError.textContent =
    //           "Sorry friend!  It looks like we are having trouble finding your       movie!  Please try another movie.";
    //         movieInfo.append(movieError);
    //         return;
    //       }

    // FETCH DATA BASED OFF CUISINE INPUT, DIET TYPE AND MACRO SELECTION

    // BREAK DOWN THE FETCHES IF NEEDED AND CROSS REFERENCE RESULTS

    // LIMIT FETCHES TO THREE RESULTS

    // APPEND RESULTS 






}
