//global variables 
let mealOption1 = document.getElementById('dot-0');
let mealOption2 = document.getElementById('dot-1');
let mealOption3 = document.getElementById('dot-2');

let guestCounter = 1;



//checks if guest is attending, if so, then it shows the meal options
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

    var mealChoice = ['Steak', 'Fish', 'Vegetarian'];
    mealChoice.forEach((mealValue, i) => {
      var labelValue = document.createElement('label');
      labelValue.innerHTML = mealValue;
      labelValue.for = "dot-" + i;
      labelValue.style.fontFamily = "Cormorant, serif";
      //labelValue.style.fontSize = "1rem";

      var inputValue = document.createElement('input');
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
    
}