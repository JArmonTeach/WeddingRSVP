//checks if guest is attending, if so, then it shows the meal options
function attendanceCheck(){
    if(document.getElementById('dot-A').checked){
        document.getElementById('food-details').style.display = 'inherit';
    }
    else{
        document.getElementById('food-details').style.display = 'none';
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
    var original = document.getElementById("first-name-box");
    var clone = original.cloneNode(true);
    clone.removeAttribute("id");
    document.getElementById("new-row").appendChild(clone);
    
    //TODO:do this for last name and clone the food choices too -- will most likely need to make the first name, last name and food different functions inside this function
}

//TODO: deleteExtraGuest()