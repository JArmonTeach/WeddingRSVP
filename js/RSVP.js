/**
 * Global Variables
 */
//variables for meal option radio buttons
var mealOption1 = document.getElementById('dot-0');
var mealOption2 = document.getElementById('dot-1');
var mealOption3 = document.getElementById('dot-2');

//variables to get HTML element where extra guest dynamic form elements will be inserted
var extraFirstNameList = document.getElementById('extra-first-name-box');
var extraLastNameList = document.getElementById('extra-last-name-box');
var extraMealChoicesList = document.getElementById('extra-food-details');

var mealChoice = ['Steak', 'Fish', 'Vegetarian']; //array of all possible meal choices
var guestCounter = 1;



//checks if guest is attending, if so, then it shows the meal options
/**
 * 
 */
function attendanceCheck(){
    if(document.getElementById('dot-A').checked){
        document.getElementById('food-details').style.display = 'inherit';
    }
    else if(document.getElementById('dot-B').checked){
        document.getElementById('food-details').style.display = 'none';
        document.getElementById('additional-user-details').style.display = 'none';

        mealOption1.checked = false;
        mealOption2.checked = false;
        mealOption3.checked = false;

        while(guestCounter >= 0){
            removeGuest();
            //a decrement is not present here because there is one in the function removeGuest()
        }
    }
    else{
        document.getElementById('food-details').style.display = 'none';
        document.getElementById('additional-user-details').style.display = 'none';        
    }
}



//checks if a meal option has been chosen, then shows the additional guest prompt
function additionalGuestCheck(){
    if(mealOption1.checked){
        document.getElementById('additional-user-details').style.display = 'inherit';
    }
    else if(mealOption2.checked){
        document.getElementById('additional-user-details').style.display = 'inherit';
    }
    else if(mealOption3.checked){
        document.getElementById('additional-user-details').style.display = 'inherit';
    }
    else{
        document.getElementById('additional-user-details').style.display = 'none';
    }
}



//adds extra guest input fields for first name, last name and meal choices
function addGuest(){
    //extra First Name
    let firstNameTitle = document.createElement("span");
    firstNameTitle.setAttribute("class", "details");
    firstNameTitle.textContent = "Extra Guest " + guestCounter + " First Name*";
    
    let firstName = document.createElement("input");
    firstName.setAttribute("type", "text");
    firstName.setAttribute("placeholder", "Enter first name");

    document.getElementById('extra-first-name-box').appendChild(firstNameTitle);
    document.getElementById('extra-first-name-box').appendChild(firstName);



    //extra Last Name
    let lastNameTitle = document.createElement("span");
    lastNameTitle.setAttribute("class", "details");
    lastNameTitle.textContent = "Extra Guest " + guestCounter + " Last Name*";
    
    let lastName = document.createElement("input");
    lastName.setAttribute("type", "text");
    lastName.setAttribute("placeholder", "Enter last name");

    document.getElementById('extra-last-name-box').appendChild(lastNameTitle);
    document.getElementById('extra-last-name-box').appendChild(lastName);



    //extra Food choices
    let foodChoicesTitle = document.createElement("span");
    foodChoicesTitle.setAttribute("class", "food-title");
    foodChoicesTitle.textContent = "Additional Guest " + guestCounter + " Meal choice*";

    document.getElementById('extra-food-details').appendChild(foodChoicesTitle);

    mealChoice.forEach((mealValue, i) => {
      let labelValue = document.createElement('label');
      labelValue.innerHTML = mealValue;
      labelValue.for = "dot-" + i;
      labelValue.style.fontFamily = "Cormorant, serif";
      //labelValue.style.fontSize = "1rem";

      let inputValue = document.createElement('input');
      inputValue.type = "radio";
      inputValue.name = "food" + guestCounter;
      inputValue.id = "dot-" + i;
      inputValue.style.display = 'initial';
      inputValue.value = mealValue;

      document.getElementById('extra-food-details').appendChild(labelValue);
      document.getElementById('extra-food-details').appendChild(inputValue);
    });

    guestCounter++;
}



//removes the last added extra guest input fields for first name, last name and meal choices
function removeGuest(){
    for(let i = 0; i < 2; i++){
        extraFirstNameList.removeChild(extraFirstNameList.lastChild);
        extraLastNameList.removeChild(extraLastNameList.lastChild);
    }

    for(let j = 0; j < 7; j++){
        extraMealChoicesList.removeChild(extraMealChoicesList.lastChild);
    }

    guestCounter--;
}