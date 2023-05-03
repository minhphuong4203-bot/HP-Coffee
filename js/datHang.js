//dong mo modal
const bookBtn = document.querySelector('.btnBook');
const modalBook = document.querySelector('.modalBook');
const modalBookCloses = document.querySelectorAll('.btnCloseBook');

function showModalBook() {
    modalBook.classList.add('open');
}

function hideModalBook() {
    modalBook.classList.remove('open');
}

bookBtn.addEventListener('click', showModalBook);

for (const modalClose of modalBookCloses) {
    modalClose.addEventListener('click', hideModalBook);
}

//chuyenTrang
function veTrangChu() {
    location.replace("index.html");
}


//dat hang
function getValue(id) {
    return document.getElementById(id).value.trim();
}

var row = 1;
var display = document.getElementById("btnSub");
display.addEventListener("click", showTable);

function getValue(id) {
    return document.getElementById(id).value.trim();
}

function valiData() {
    var flag = true;
    var ten = getValue('txtName');
    if (ten == '' || ten.length < 5 || !/[\w ]+/.test(ten)) {
        flag = false;
        alert("Xem lai họ và tên");
    }

    var diaChi = getValue('txtAddress');
    if (diaChi == '' || diaChi.length < 5 || !/[\w ]+/.test(diaChi)) {
        flag = false;
        alert("Xem lai địa chỉ");
    }

    var phone = getValue('txtPhone');
    if (phone == '' || phone.length < 5 || !/(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(phone)) {
        flag = false;
        alert("Xem lai số điện thoại");
    }
    return flag;
}

function getPriceTotal() {
    // var quant = getValue('txtQuant');
    var total = getPriceEach() * getQuantity();
    return total;

}

function showPriceTotal() {
    document.getElementById('txtPrice').value = '';
    document.getElementById('txtPrice').value = getPriceTotal();
}

function getQuantity() {
    var quant = getValue('txtQuant');
    return quant;
}

function getPriceEach() {
    const item = document.querySelector('#product');
    event.preventDefault();
    if (item.value == 1) {
        return 100000;
    }
    if (item.value == 2) {
        return 49000;
    }
    if (item.value == 3) {
        return 39000;
    }
    if (item.value == 4) {
        return 49000;
    }
    if (item.value == 5) {
        return 39000;
    }
    if (item.value == 6) {
        return 35000;
    }
    if (item.value == 7) {
        return 19000;
    }
}

// function tb() {
//     console.log(getPriceTotal());
// }

function showSelectedValue() {
    var selectedValue = getValue("txtName");
    // console.log(selectedValue);
    return selectedValue;
}

function getDateNow() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;
    return today;
}

function showTable() {
    var name = getValue("txtName");
    var product = showSelectedValue();
    var quant = getValue("txtQuant");
    var date = getDateNow();
    var price = getPriceTotal();
    var address = getValue("txtAddress");
    var phone = getValue("txtPhone");
    if (valiData() == true) {
        var displayTable = document.getElementById("table");
        var newRow = displayTable.insertRow(row);
        var cell = newRow.insertCell(0);
        var cell1 = newRow.insertCell(1);
        var cell2 = newRow.insertCell(2);
        var cell3 = newRow.insertCell(3);
        var cell4 = newRow.insertCell(4);
        var cell5 = newRow.insertCell(5);
        var cell6 = newRow.insertCell(6);
        var cell7 = newRow.insertCell(7);
        cell.innerHTML = row;
        cell1.innerHTML = name;
        cell2.innerHTML = product;
        cell3.innerHTML = quant;
        cell4.innerHTML = date;
        cell5.innerHTML = price;
        cell6.innerHTML = address;
        cell7.innerHTML = phone;




        row++;
    }
}

const userBTNs = document.querySelectorAll('.user-icon');
const modalLogin = document.querySelector('.modalLogin');
const modalLoginCloses = document.querySelector('.modalLogin-close');

function showModal() {
    modalLogin.classList.add('open');
}

function hideModal() {
    modalLogin.classList.remove('open');
}

modalLoginCloses.addEventListener('click', hideModal);