//Getting the HTML element button
var topButton = document.getElementById("topBtn");

//anything with the class of fade-in will call fader
const faders = document.querySelectorAll('.fade-in'); 



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


//define options for fading in
const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
};

//observer for fader
 const appearOnScroll = new IntersectionObserver
 (function(
    entries, 
    appearOnScroll
    ) {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }
            else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        })
    }, 
    appearOptions);

//any HTML element with the fader will set up that individual fader
faders.forEach(fader => {
    appearOnScroll.observe(fader);
})