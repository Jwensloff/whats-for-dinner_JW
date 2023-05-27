// data
var sides = [
'Miso Glazed Carrots',
'Coleslaw',
'Garden Salad',
'Crispy Potatoes',
'Sweet Potato Tots',
'Coconut Rice',
'Caeser Salad',
'Shrimp Summer Rolls',
'Garlic Butter Mushrooms',
'Hush Puppies'];

var mains =[
'Spaghetti and Meatballs',
'Pineapple Chicken',
'Shakshuka',
'Thai Yellow Curry',
'Bibimbap',
'Chicken Parmesean',
'Butternut Squash Soup',
'BBQ Chicken Burgers',
'Ramen',
'Empanadas',
'Chicken Fried Rice',
'Sheet Pan Fajitas',
'Margarita Pizza'];

var desserts= [
'Apple Pie',
'Lemon Meringue Pie',
'Black Forest Cake',
'Banana Bread',
'Peach Cobbler',
'Cheesecake',
'Funfetti Cake',
'Baklava',
'Flan',
'Macarons',
'Macaroons',
'Chocolate Cupcakes',
'Pavlova',
'Pumpkin Pie',
'Key Lime Pie',
'Tart Tatin',
'Croissants',
'Eclairs'];

//........................query selectors ......................
var cookingPot = document.querySelector('.cooking-pot');
var sideRadioButton = document.querySelector('.side');
var dessertRadioButton = document.querySelector('.dessert');
var mainRadioButton = document.querySelector('.main');
var entireRadioButton = document.querySelector('.entire');
var letsCookButton = document.querySelector('.lets-cook-button');
var rightBox = document.querySelector('.right-box');
var foodSuggestion = document.querySelector('.food-suggestion');
var youShouldMake = document.querySelector('.you-should-make');
var clearButton = document.querySelector('.clear-button');
//........................event listeners.......................

letsCookButton.addEventListener('click', function(event){
        toggle(event)
        displayFood()
});

clearButton.addEventListener('click', function(event){
    clearSelectedFood(event)});

//........................functions ............................

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function toggle(){
  cookingPot.classList.add('hidden');
  foodSuggestion.classList.remove('hidden');
  youShouldMake.classList.remove('hidden');
}

function clearSelectedFood(){
    cookingPot.classList.remove('hidden');
    foodSuggestion.classList.add('hidden');
    youShouldMake.classList.add('hidden');
}

function displayFood(){
      if (sideRadioButton.checked){
            foodSuggestion.innerText = sides[getRandomIndex(sides)]
    } else if (mainRadioButton.checked){
            foodSuggestion.innerText = mains[getRandomIndex(mains)]
    } else if (dessertRadioButton.checked){
            foodSuggestion.innerText = desserts[getRandomIndex(desserts)]
    } else if (entireRadioButton.checked) {
                foodSuggestion.innerText = `${mains[getRandomIndex(mains)]} with 
                a side of ${sides[getRandomIndex(sides)]} and 
                ${desserts[getRandomIndex(desserts)]}
                for dessert!`
    } else if (!sideRadioButton.checked && 
                !mainRadioButton.checked &&
                !dessertRadioButton.checked &&
                !entireRadioButton.checked){
                foodSuggestion.innerText='Please select an option in order recieve a suggestion.';
               
            }
            clearButton.classList.remove('hidden');
}






