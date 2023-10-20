const header = document.getElementById("header"),
    navMenu = document.getElementById("nav-menu"),
    navOpen = document.getElementById("nav-open"),
    navClose = document.getElementById("nav-close"),
    navLinks = document.querySelectorAll(".nav__link")



/* Change header on scroll
---------------------------------------*/
window.addEventListener("scroll", () => {
    if (window.scrollY > 100){
        header.classList.add("header--scroll");
    }   else{
        header.classList.remove("header--scroll");
    }
});

/* Navigation Menu
---------------------------------------*/

// Open
navOpen.addEventListener("click", () => {
    navMenu.classList.add("nav__menu--open");
});

// Close
navClose.addEventListener("click", () => {
    navMenu.classList.remove("nav__menu--open");
});

// Close the nav menu when the user clicks on each nav link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("nav__menu--open");
    })
});

/* 
Active link on scroll section 
-------------------------------------*/

/* 
Scrolltop 
----------------------------------------------*/

/* 
Testimonial Swiper
----------------------------------------------*/

/* 
ScrollReveal
----------------------------------------------*/
