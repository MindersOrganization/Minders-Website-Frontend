const hamburgerMenu = document.getElementsByClassName('hamburger-icon')[0];
const navbarList = document.getElementsByClassName('mobile-menu')[0];
const activePage = document.getElementsByClassName('active');

function displayNavbar() {
    if (activePage.length > 0){
        if (navbarList.style.visibility == 'hidden'){
            navbarList.style.visibility = 'visible';
            hamburgerMenu.style.backgroundImage = 'url("../media/icons8-close-window-100.png")'
        }
        else{
            navbarList.style.visibility = 'hidden'
            hamburgerMenu.style.backgroundImage = 'url("../media/icons8-menu-squared-100.png")'
        }
    }
    else{
        if (navbarList.style.visibility == 'hidden'){
            navbarList.style.visibility = 'visible';
            hamburgerMenu.style.backgroundImage = 'url("./media/icons8-close-window-100.png")'
        }
        else{
            navbarList.style.visibility = 'hidden'
            hamburgerMenu.style.backgroundImage = 'url("./media/icons8-menu-squared-100.png")'
        }
    }
}