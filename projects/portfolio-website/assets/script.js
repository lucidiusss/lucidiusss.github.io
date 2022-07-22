'use strict';

// element toggle function 

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


// go to top variable
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {

    if (this.window.scrollY >= 800) {
        goTopBtn.classList.add("active");
    } else {
        goTopBtn.classList.remove("active");
    }

});

//add smooth scrolling when clicking any anchor link
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});