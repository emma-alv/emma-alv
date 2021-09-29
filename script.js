window.onscroll = function() {fixedNavbar()};

const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

function fixedNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('fixed-top')
    } else {
        navbar.classList.remove('fixed-top')
    }
}