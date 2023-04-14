const hamburgerMenu = document.getElementsByClassName('hamburger-icon')[0];
const navbarList = document.getElementsByClassName('mobile-menu')[0];

function displayNavbar() {
    if (navbarList.style.visibility == 'hidden'){
        navbarList.style.visibility = 'visible';
        hamburgerMenu.style.backgroundImage = 'url("../media/icons8-close-window-100.png")'
    }
    else{
        navbarList.style.visibility = 'hidden'
        hamburgerMenu.style.backgroundImage = 'url("../media/icons8-menu-squared-100.png")'
    }
}