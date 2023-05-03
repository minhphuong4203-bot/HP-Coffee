//modal Dang nhap
const userBTNs = document.querySelectorAll('.user-icon');
const modalLogin = document.querySelector('.modalLogin');
const modalLoginCloses = document.querySelector('.modalLogin-close');

function showModal() {
    modalLogin.classList.add('open');
}

function hideModal() {
    modalLogin.classList.remove('open');
}

for (const userBTN of userBTNs) {
    userBTN.addEventListener('click', showModal);
}

// userBTN.addEventListener('click', showModal);

modalLoginCloses.addEventListener('click', hideModal);

//chuyen trang
function chuyenSangcfAndBeauti() {
    location.replace("cafe&beauti.html");
}

function veTrangChu() {
    location.replace("index.html");
}

function chuyenSangcfAndHealth() {
    location.replace("cafe&health.html");
}


function chuyenSangGioiThieu() {
    location.replace("signatureCoffee.html");
}

// <<<<<<< HEAD

var btnDatHangs = document.querySelectorAll('.btnDatHang');
function chuyenSangDatHang() {
    location.replace("datHang.html");
}

for (const btnDatHang of btnDatHangs) {
    btnDatHang.addEventListener('click', chuyenSangDatHang);
}

function change_PD_1(){
    location.replace("CoffeeHanhNhanNuong.html")
}
// >>>>>>> 8204a553167029e6bcf21233e72ca8e6e66858cd
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
        } else {

            menu.style.height = null;
        }
    }
}

// Dat Hang
// const bookBtn = document.querySelector('.btnBook');
// const modalBook = document.querySelector('.modalBook');
// const modalBookCloses = document.querySelectorAll('.btnCloseBook');

// function showModalBook() {
//     modalBook.classList.add('open');
// }

// function hideModalBook() {
//     modalBook.classList.remove('open');
// }

// bookBtn.addEventListener('click', showModalBook);

// for (const modalClose of modalBookCloses) {
//     modalClose.addEventListener('click', hideModalBook);
// }
