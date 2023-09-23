function on() {
document.getElementById("overlay").style.display = "block";
}

function off() {
document.getElementById("overlay").style.display = "none";

}

function on1() {
    document.getElementById("overlay1").style.display = "block";
}
    
    function off1() {
    document.getElementById("overlay1").style.display = "none";
    
}

function on2() {
    document.getElementById("overlay2").style.display = "block";
}
    
    function off2() {
    document.getElementById("overlay2").style.display = "none";
    
}

function on3() {
    document.getElementById("overlay3").style.display = "block";
}
    
    function off3() {
    document.getElementById("overlay3").style.display = "none";
    
}

function on4() {
    document.getElementById("overlay4").style.display = "block";
}
    
    function off4() {
    document.getElementById("overlay4").style.display = "none";
    
}

function on5() {
    document.getElementById("overlay5").style.display = "block";
}
    
    function off5() {
    document.getElementById("overlay5").style.display = "none";
    
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlides(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for ( i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].idName = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
   
}