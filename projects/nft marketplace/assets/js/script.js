'use strict';

// element toggle function 

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }


// navbar variable
const navbar = document.querySelector("[data-navbar]");
const navbarToggleBtn = document.querySelector("[data-navbar-toggle-btn]");

navbarToggleBtn.addEventListener("click", function () { elemToggleFunc(navbar);});



// wishlist button
const wishlistBtn = document.querySelectorAll("[data-wishlist-btn]");

for (let i = 0; i < wishlistBtn.length; i++) {

    wishlistBtn[i].addEventListener("click", function() { elemToggleFunc(this); });

}


// go to top variable
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function() {

    if (this.window.scrollY >= 800) {
        goTopBtn.classList.add("active");
    } else {
        goTopBtn.classList.remove("active");
    }

});