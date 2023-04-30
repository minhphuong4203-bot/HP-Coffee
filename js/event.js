//modal Dang nhap
const userBTN = document.querySelector('.user-icon');
const modalLogin = document.querySelector('.modalLogin');
const modalLoginCloses = document.querySelector('.modalLogin-close');

function showModal() {
    modalLogin.classList.add('open');
}

function hideModal() {
    modalLogin.classList.remove('open');
}

userBTN.addEventListener('click', showModal);

modalLoginCloses.addEventListener('click', hideModal);

//chuyen trang
function chuyenSangcfAndBeauti() {
    location.replace("cafe&beauti.html")
}

function veTrangChu() {
    location.replace("index.html")
}

//responsive menu mobile
var menu = document.getElementById('menu');
var mobileMenu = document.getElementById('mobile-menu');
var menuHeight = menu.clientHeight;

mobileMenu.onclick = function () {
    var isClose = menu.clientHeight === menuHeight;
    if (isClose) {
        menu.style.height = 'auto';
    }
    else {
        menu.style.height = null;

    }
}

// Tu dong dong khi chon menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function () {
        var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
        event.preventDefault();
        }else{

            menu.style.height = null;
        }
    }
}