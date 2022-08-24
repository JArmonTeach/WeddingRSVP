//Getting the HTML element button
var topButton = document.getElementById("topBtn");

//calls scrollFunction when scrolls down
window.onscroll = function(){
    scrollFunction()
};

/**
 * Function name: scrollFunction
 * 
 * Input Parameters: none
 * 
 * Description: When user scrolls down 20px from the top of document, the button will show
 * 
 * Return value: None
 */
function scrollFunction(){
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topButton.style.display = "block";
    }//end if
    else{
        topButton.style.display = "none";
    }//end else
}//end function

/**
 * Function name: goToTop
 * 
 * Input Parameters: none
 * 
 * Description: When the button is clicked, it scrolls back to the top of the document
 * 
 * Return value: None
 */
 function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 }