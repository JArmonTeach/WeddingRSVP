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



/**
 * Function name: attendanceCheck()
 * 
 * Input Parameters: none
 * 
 * Description: Checks whether the radio buttons for guest attending or not attending have been checked, then displays or doesn't display the meal options respectively
 * 
 * Return value: None
 */
function attendanceCheck(){
    if(document.getElementById('dot-A').checked){
        document.getElementById('food-details').style.display = 'inherit';
    }//end if
    else if(document.getElementById('dot-B').checked){
        document.getElementById('food-details').style.display = 'none';
        document.getElementById('additional-user-details').style.display = 'none';

        mealOption1.checked = false;
        mealOption2.checked = false;
        mealOption3.checked = false;

        //while loop clears the extra guest dynamically added fields if they are present
        while(guestCounter >= 0){
            removeGuest();
            //a decrement is not present here because there is one in the function removeGuest()
        }//end while loop

    }//end else if
    else{
        document.getElementById('food-details').style.display = 'none';
        document.getElementById('additional-user-details').style.display = 'none';        
    }//end else
}//end function



/**
 * Function name: additionalGuestCheck()
 * 
 * Input Parameters: none
 * 
 * Description: Checks if any of the meal options have been checked, then show the additional guest prompt
 * 
 * Return value: None
 */
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



/**
 * Function name: addGuest
 * 
 * Input Parameters: None
 * 
 * Description: Function is called when "Add Guest" button is clicked, then first name, last name and meal choice input fields are dynamically added
 * 
 * Return value: None
 */
function addGuest(){
    //extra First Name label made
    let firstNameTitle = document.createElement("span");
    firstNameTitle.setAttribute("class", "details");
    firstNameTitle.textContent = "Extra Guest " + guestCounter + " First Name*";

    //extra First Name input field made
    let firstName = document.createElement("input");
    firstName.setAttribute("type", "text");
    firstName.setAttribute("placeholder", "Enter first name");

    //both first name label and input field are appended into HTML element
    document.getElementById('extra-first-name-box').appendChild(firstNameTitle);
    document.getElementById('extra-first-name-box').appendChild(firstName);


    //extra Last Name label made
    let lastNameTitle = document.createElement("span");
    lastNameTitle.setAttribute("class", "details");
    lastNameTitle.textContent = "Extra Guest " + guestCounter + " Last Name*";
    
    //extra Last Name input field made
    let lastName = document.createElement("input");
    lastName.setAttribute("type", "text");
    lastName.setAttribute("placeholder", "Enter last name");

    //both last name labelt and input field are appended into the HTML element
    document.getElementById('extra-last-name-box').appendChild(lastNameTitle);
    document.getElementById('extra-last-name-box').appendChild(lastName);


    //extra Food choices label made
    let foodChoicesTitle = document.createElement("span");
    foodChoicesTitle.setAttribute("class", "food-title");
    foodChoicesTitle.textContent = "Additional Guest " + guestCounter + " Meal choice*";

    //extra Food choices label is appended into the HTML element
    document.getElementById('extra-food-details').appendChild(foodChoicesTitle);

    //mealChoice array is ran through the mealValue method to create a label and radio button for each array element, then appends all those labels and radio buttons into the HTML element
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
    });//end method

    guestCounter++; //ensures a correct additional guest count for the labels
}//end function



/**
 * Function name: removeGuest()
 * 
 * Input Parameters: None
 * 
 * Description: Function is called when "Remove Guest" button is clicked, then the last children first name, last name and meal choice input fields are removed
 * 
 * Return value: None
 */
function removeGuest(){
    for(let i = 0; i < 2; i++){ //2 ensures that input field and labels for first name and last name are removed
        extraFirstNameList.removeChild(extraFirstNameList.lastChild);
        extraLastNameList.removeChild(extraLastNameList.lastChild);
    }

    for(let j = 0; j < 7; j++){ //7 ensures that input fields and labels are removed
        extraMealChoicesList.removeChild(extraMealChoicesList.lastChild);
    }

    guestCounter--; //ensures a correct additional guest count for the labels and acts as the decrementor for the while loop in the attendanceCheck() function
}//end function