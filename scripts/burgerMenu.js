document.addEventListener('DOMContentLoaded', function() {
    let burgerMenu = document.getElementsByClassName('custom-burger-menu');
    let mobileMenu = document.getElementsByClassName('mobile-nav-menu');
    let topLine = document.getElementsByClassName('top-line');
    let middleLine = document.getElementsByClassName('middle-line');
    let bottomLine = document.getElementsByClassName('bottom-line');

    burgerMenu[0].addEventListener('click', function() {
        mobileMenu[0].style.width = '238px';
        console.log(topLine)
        /* topLine[0].classList.add('.top-line_Burger-menu'); */
        topLine[0].style.transform = 'translateY(12.5px) rotate(45deg)';
        middleLine[0].classList.add('.middle-line_Burger-menu');
        bottomLine[0].classList.add('.bottom-line_Burger-menu');
    });
});