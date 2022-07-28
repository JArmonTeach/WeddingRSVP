function attendanceCheck(){
    if(document.getElementById('dot-A').checked){
        document.getElementById('food-details').style.display = 'inherit';
    }
    else{
        document.getElementById('food-details').style.display = 'none';
    }
}