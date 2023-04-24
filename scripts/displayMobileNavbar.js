const hamburgerMenu = document.getElementsByClassName('hamburger-icon')[0];
const navbarList = document.getElementsByClassName('mobile-menu')[0];
const activePage = document.getElementsByClassName('active');
const hamburgerButton = document.getElementsByClassName('hamburger-icon-button')[0];

hamburgerButton.addEventListener('click', displayNavbar);

function displayNavbar() {
    if (activePage.length > 1){
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

// const documentBody = document.getElementsByTagName('body')[0];
// const pageFooter = document.getElementsByTagName('footer')[0];
// function getPageHeight() {
//     if(documentBody.clientHeight < window.innerHeight){
//         pageFooter.style.position = 'absolute';
//         pageFooter.style.bottom = '0';
//         pageFooter.style.width = '100%';
//     }
// }
// getPageHeight()

export const BASE_URL = 'http://127.0.0.1:8000';