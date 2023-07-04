
// VARIABLES NEEDED FOR FORM SUBMISSION AND SHOWING RESULTS
const show = document.querySelectorAll(".show");
const hide = document.querySelectorAll(".hide");
const form = document.querySelector("#container");
const submitBtn = document.querySelector("#submit");
const resultContainer = document.getElementById("resultContainer");
const viewRecipe = document.querySelector('#viewRecipe');
const closeModal = document.querySelector('#modal')

form.addEventListener("submit", Submit);
form.addEventListener("submit", getRecipes);
closeModal.addEventListener('click', () => {
  closeModal.classList.add('hide')
}
);




function Submit() {

  event.preventDefault();

  if (form.classList.contains("show")) {

    form.classList.remove("show");
    form.classList.add("hide");
    resultContainer.classList.remove("hide");
    resultContainer.classList.add("show");

  }
  
}

function getRecipes() {
  event.preventDefault();
  
  const apiId = 'd3e3671d';
  const apiKey = 'df874e873413260268ab781defe839ab';
  const recipeSheet = document.querySelector('#recipe');
  const recipeName = document.querySelector('#recipeName');
  const highProtein = document.getElementById('protein');
  const lowCarb = document.getElementById('carb');
  const lowFat = document.getElementById('fat');
  const recipeImage = document.querySelector('#img');
  const tags = document.querySelector('#tags');
  const dietType = document.querySelector('#diet').value
  let dietInput

  const newDiet = dietType.split(" ") 


if (newDiet.length > 1) {
  dietInput = ''
  for (let y = 0; y < newDiet.length; y++) {
    if (y < newDiet.length - 1) {

     dietInput =  dietInput + newDiet[y] + '-';

    }
    if (y = newDiet.length - 1 ) {
      
      dietInput =  dietInput + newDiet[y];

    }

  }
} else {
  dietInput = dietType
}

console.log(dietInput);


  const cuisineInput = document.getElementById('cuisine').value;
  let recipeApi = 'https://api.edamam.com/api/recipes/v2?type=public&q=' + cuisineInput + '&health=' + dietInput.toLowerCase() + '&app_id=' + apiId + '&app_key=' + apiKey + '%09&diet='

//need to conditionally call the macro parameters if they are selected through if statements and different versions of the fetch requested

//run .checked logic on check boxes and use coordinated fetches
//could possibly use switch case

if ( highProtein.checked === true ){

  recipeApi = recipeApi + highProtein.value + '&';

}

if ( lowCarb.checked === true) {

  recipeApi = recipeApi + lowCarb.value + '&'

}

if ( lowFat.checked === true ) {
  
  recipeApi = recipeApi + lowFat.value + '&'

}

console.log(recipeApi);

fetch(recipeApi)
.then(function (response) {
  return response.json();
})
.then(function (data) { 
  if (data.count === 0) {
    alert('Sorry, there are no recipes for that.')
    location.reload()
  }

  tags.textContent = data.hits[0].recipe.dietLabels

  // recipeName.textContent = data.hits[0].recipe.recipeName;
  recipeName.textContent = data.hits[0].recipe.label;

  
  recipeImage.src=  data.hits[0].recipe.images.THUMBNAIL.url;
 
  
  
  viewRecipe.addEventListener("click", viewRecipes);

  function viewRecipes() {

    const modal = document.querySelector('#modal')
    const tagsTitle = document.querySelector('#tagsTitle');

    modal.classList.remove('hide')
    modal.classList.add('show')
  

    const recipeSheet = document.querySelector('#recipe');

    recipeSheet.textContent = '';
  
    for (let i = 0; i < data.hits[0].recipe.ingredientLines.length; i++){
  
      const recipeList = document.createElement('li')
      recipeList.textContent = data.hits[0].recipe.ingredientLines[i]
  
      recipeSheet.append(recipeList)
    }
  
  
  }


  
  
});


}






if('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
      navigator.serviceWorker.register('../sw.js').then( () => {
          console.log('Service Worker Registered');
      })
  })
}