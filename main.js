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
// var displaySide = document.querySelector('.side');
// var displayDessert = document.querySelector('.dessert');
// var displayMain = document.querySelector('.main');
// var displayEntire = document.querySelector('.entire');
var letsCookButton = document.querySelector('.lets-cook-button');
var radioButtons = document.getElementsByName('dinner');
var rightBox = document.querySelector('.right-box');
var foodSuggestion = document.querySelector('.food-suggestion');
var youShouldMake = document.querySelector('.you-should-make');

//........................event listeners.......................

letsCookButton.addEventListener('click', function(event){
        toggle(event)
});

//........................functions ............................
var sideMainDessertEntree; 

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function toggle(){
  cookingPot.classList.add('hidden');
  foodSuggestion.classList.remove('hidden');
  youShouldMake.classList.remove('hidden');
}

// first select the value of the specified 
function displayFood(){


    for(var i=0; i < radioButtons.length; i++){ 
        if(radioButtons[i].checked){
          sideMainDessertEntree = radioButtons[i].value
        }
            console.log(sideMainDessertEntree)
    } 
    return sideMainDessertEntree

//     var randomSide = sides[getRandomIndex(sides)];
//     var randomMain = mains[getRandomIndex(mains)];
//     var randomDessert = desserts[getRandomIndex(desserts)];

//     if(sideMainDessertEntree.includes('Side')){
//     rightBox.innerHTML=  `<h1>You should make:</h1>
//                          <h2>${randomSide} </h2>`
//     } else if(sideMainDessertEntree == 'Main Dish') {
//                          `<h1>You should make:</h1>
//                          <h2>${randomMain}`
//  } else if (sideMainDessertEntree == 'Dessert'){
//                          `<h1>You should make:</h1>
//                          <h2>${randomDessert}`
//  } else 
// return 'sorry, we don\'t have that option.'

}