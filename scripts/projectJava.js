/*Variable for image index of slideshow*/
var slideNumb = 1;
/*Ref:https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9;
Initializes timer of slideshow going to next picture*/
var timer = null;
/*Ref:https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9
Listener event to make slideshow roll through images automatically when page first loads*/
window.addEventListener("load",function() {
    slideNav(slideNumb);
});
/*Ref:https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9;
Function that goes to next or previous slide when pressing next or previous button*/
function add(n) {
    clearTimeout(timer);
    slideNav(slideNumb += n);
}
/*Ref:https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9;
Function that allows user to go to any picture in slideshow when using selector dots*/
function current(n) {
    clearTimeout(timer);
    slideNav(slideNumb = n);
}

/*Ref:https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9;
Function that changes slides based on slideNumb variable. Function utilizes slide and dot elements and stores them
into an array. This function hides the appropriate images and shows the ones that are based on these elements.*/
function slideNav(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(n == undefined){n = ++slideNumb}
    if (n > slides.length) {slideNumb = 1}    
    if (n < 1) {slideNumb = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideNumb-1].style.display = "block";  
    dots[slideNumb-1].className += " active";
    timer = setTimeout(slideNav, 4000);
}
