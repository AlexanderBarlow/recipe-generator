
// VARIABLES NEEDED FOR FORM SUBMISSION AND SHOWING RESULTS
const show = document.querySelectorAll(".show");
const hide = document.querySelectorAll(".hide");
const form = document.querySelector("#container");
const submitBtn = document.querySelector("#submit");





const resultContainer = document.getElementById("resultContainer");

form.addEventListener("submit", Submit);
form.addEventListener("submit", getRecipes);

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
  event.preventDefault();
  
  const recipeSheet = document.querySelector('#recipe');
  const recipeName = document.querySelector('#recipeName');

  const apiId = 'd3e3671d';
  const apiKey = 'df874e873413260268ab781defe839ab';
  const cuisineInput = document.getElementById('cuisine').value;
  const recipeApi = 'https://api.edamam.com/api/recipes/v2?type=public&q=' + cuisineInput + '&app_id=' + apiId + '&app_key=' + apiKey + '%09&diet=high-protein';
  
    
    fetch(recipeApi)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) { 
      if (data.length === 0) {
        alert('Not a valid cuisine!')
        return
      }

      // recipeName.textContent = data.hits[0].recipe.recipeName;
      recipeName.textContent = data.hits[0].recipe.label;
      
      
      for (let i = 0; i < data.hits[0].recipe.ingredientLines.length; i++){

        const recipeList = document.createElement('li')
        recipeList.textContent = data.hits[0].recipe.ingredientLines[i]

        recipeSheet.append(recipeList)
      }
      
     
    });


    // FETCH DATA BASED OFF CUISINE INPUT, DIET TYPE AND MACRO SELECTION

    // BREAK DOWN THE FETCHES IF NEEDED AND CROSS REFERENCE RESULTS

    // LIMIT FETCHES TO THREE RESULTS

    // APPEND RESULTS 






}
