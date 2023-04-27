const navBar = document.querySelector('.navbar');
const navBarLogo = document.querySelector('.navbar-logo');
const navBarList = document.querySelector('.navbar-list');
const hero = document.querySelector('.hero');

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
        hero.classList.add('scrolled-hero');
    } else {
        navBar.classList.remove('scrolled-navbar');
        navBarLogo.classList.remove('scrolled-navbar-logo');
        navBarList.classList.remove('scrolled-navbar-list');
        hero.classList.remove('scrolled-hero');
    }
});