//checks if guest is attending, if so, then it shows the meal options
function attendanceCheck(){
    if(document.getElementById('dot-A').checked){
        document.getElementById('food-details').style.display = 'inherit';
    }
    else if(document.getElementById('dot-B').checked){
        document.getElementById('food-details').style.display = 'none';
        document.getElementById('additional-user-details').style.display = 'none';
        
        let mealOption1 = document.getElementById('dot-1');
        let mealOption2 = document.getElementById('dot-2');
        let mealOption3 = document.getElementById('dot-3');

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
    if(document.getElementById('dot-1').checked){
        document.getElementById('additional-user-details').style.display = 'inherit';
    }
    else if(document.getElementById('dot-2').checked){
        document.getElementById('additional-user-details').style.display = 'inherit';
    }
    else if(document.getElementById('dot-3').checked){
        document.getElementById('additional-user-details').style.display = 'inherit';
    }
    else{
        document.getElementById('additional-user-details').style.display = 'none';
    }
}

//adds extra guest input fields for first name, last name and meal choices
function addGuest(){

    //TODO: add a guest counter that displays
    
    //extra First Name
    let firstNameTitle = document.createElement("span");
    firstNameTitle.setAttribute("class", "details");
    firstNameTitle.textContent = "First Name*";
    
    let firstName = document.createElement("input");
    firstName.setAttribute("type", "text");
    firstName.setAttribute("placeholder", "Enter your first name");

    document.getElementById('extra-first-name-box').appendChild(firstNameTitle);
    document.getElementById('extra-first-name-box').appendChild(firstName);



    //extra Last Name
    let lastNameTitle = document.createElement("span");
    lastNameTitle.setAttribute("class", "details");
    lastNameTitle.textContent = "Last Name*";
    
    let lastName = document.createElement("input");
    lastName.setAttribute("type", "text");
    lastName.setAttribute("placeholder", "Enter your last name");

    document.getElementById('extra-last-name-box').appendChild(lastNameTitle);
    document.getElementById('extra-last-name-box').appendChild(lastName);



    //extra Food choices
    //TODO: gotta fix the Styling
    let foodChoicesTitle = document.createElement("span");
    foodChoicesTitle.setAttribute("class", "food-title");
    foodChoicesTitle.textContent = "Meal choice*";

    document.getElementById('extra-food-details').appendChild(foodChoicesTitle);

    let mealChoice = ['Steak', 'Fish', 'Vegetarian'];
    mealChoice.forEach((mealValue, i) => {
      let labelValue = document.createElement('label');
      labelValue.innerHTML = mealValue;

      let inputValue = document.createElement('input');
      inputValue.type = "radio";
      inputValue.name = mealValue;
      inputValue.style.display = 'initial';
      inputValue.mealValue = i;

      document.getElementById('extra-food-details').appendChild(labelValue);
      document.getElementById('extra-food-details').appendChild(inputValue);
    });
}