const navBar = document.querySelector('.navbar');
const navBarLogo = document.querySelector('.navbar-logo');
const navBarList = document.querySelector('.navbar-list');
const salonDonQuijote = document.querySelector('.salon-don-quijote');
const salonDulcinea = document.querySelector('.salon-dulcinea');
const salonSancho = document.querySelector('.salon-sancho');



function openWhatsApp () {
    window.open('https://api.whatsapp.com/send/?phone=541152630497&text=Quisiera+obtener+mas+información+acerca+de+los+salones.&type=phone_number&app_absent=0', 'new-window', 'height=600,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=yes,directories=yes,status=yes');
}

function reloadPage () {
    window.location.reload();
}

document.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        navBar.classList.add('scrolled-navbar');
        navBarLogo.classList.add('scrolled-navbar-logo');
        navBarList.classList.add('scrolled-navbar-list');
    } else {
        navBar.classList.remove('scrolled-navbar');
        navBarLogo.classList.remove('scrolled-navbar-logo');
        navBarList.classList.remove('scrolled-navbar-list');
    }
});

document.addEventListener('scroll', function () {
    if (window.scrollY >= 180) {
        salonDonQuijote.classList.add('scrolled-salon-don-quijote');
        salonDulcinea.classList.add('scrolled-salon-dulcinea');
        salonSancho.classList.add('scrolled-salon-sancho');
    }
});