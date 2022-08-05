//checks if guest is attending, if so, then it shows the meal options
function attendanceCheck(){
    if(document.getElementById('dot-A').checked){
        document.getElementById('food-details').style.display = 'inherit';
    }
    else if(document.getElementById('dot-B').checked){
        document.getElementById('food-details').style.display = 'none';
        document.getElementById('additional-user-details').style.display = 'none';
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

//adds input fields for additional guests for their first name, last name and meal option
function addExtraGuest(){

    addFirstName();
    addLastName();
    addMealOptions();
}

//function to clone guest first name input text field
function addFirstName(){
    var original = document.getElementById("first-name-box");
    var clone = original.cloneNode(true);
    clone.removeAttribute("id");
    document.getElementById("new-row").appendChild(clone);
}

//function to clone guest last name input text field
function addLastName(){
    var original = document.getElementById("last-name-box");
    var clone = original.cloneNode(true);
    clone.removeAttribute("id");
    document.getElementById("new-row").appendChild(clone);
}

//function to clone meal options field
function addMealOptions(){
    //create id variable that starts on 4
    //create clone variable that gets the element by id of that div

    //finalClone = clone then find input, attribute and add id variable
    //increment the id variable
    //get the new-row and append the clone to it

    //OR just figure it out with innerHTML dynamically adding html elements, but do it incrementally
}
//TODO: deleteExtraGuest()