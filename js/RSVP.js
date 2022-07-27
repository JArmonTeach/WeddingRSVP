function attendanceCheck(){
    if(document.getElementById('dot-A').checked){
        document.getElementByClass('food-details').style.visibility = 'visible';
    }
    else{
        document.getElementByClass('food-details').style.visibility = 'hidden';
    }
}