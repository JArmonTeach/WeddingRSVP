function attendanceCheck(){
    if(document.getElementById('dot-A').checked){
        document.getElementById('food-details').style.visibility = 'visible';
    }
    else{
        document.getElementById('food-details').style.visibility = 'hidden';
    }
}