
// VARIABLES NEEDED FOR FORM SUBMISSION AND SHOWING RESULTS
const show = document.querySelectorAll(".show");
const hide = document.querySelectorAll(".hide");
const form = document.querySelector("#container");
const submitBtn = document.querySelector("#submit");

// VARIABLES NEEDED FOR SEARCH PARAMETERS WITHIN API



const resultContainer = document.getElementById("resultContainer");

form.addEventListener("submit", Submit);

function Submit() {
  event.preventDefault();

  console.log("button hit");
  console.log(form.classList.contains("show"));

  if (form.classList.contains("show")) {
    console.log("if");

    form.classList.remove("show");
    form.classList.add("hide");
    resultContainer.classList.remove("hide");
    resultContainer.classList.add("show");
  }
}

function getRecipes() {

    // FETCH DATA BASED OFF CUISINE INPUT, DIET TYPE AND MACRO SELECTION

    // BREAK DOWN THE FETCHES IF NEEDED AND CROSS REFERENCE RESULTS

    // LIMIT FETCHES TO THREE RESULTS

    // APPEND RESULTS 






}
