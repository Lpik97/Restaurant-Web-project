const navBar = document.querySelector('.navbar');
const navBarLogo = document.querySelector('.navbar-logo');
const navBarList = document.querySelector('.navbar-list');
const salonDonQuijote = document.querySelector('.salon-don-quijote');
const salonDulcinea = document.querySelector('.salon-dulcinea');
const salonSancho = document.querySelector('.salon-sancho');

function openWhatsApp () {
    window.open('https://api.whatsapp.com/send/?phone=541152630497&text=Quisiera+obtener+mas+información+acerca+de+los+salones.&type=phone_number&app_absent=0', 'new-window', 'height=600,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=yes,directories=yes,status=yes');
}

function openNewTab () {
    window.open('https://presupuesto.donquijoterecepciones.com/', 'new-window');
}

function openFacebook () {
    window.open('https://www.facebook.com/dqrecepciones/', 'new-window');
}

function openInstagram () {
    window.open('https://www.instagram.com/dqrecepciones/', 'new-window');
}

function openTikTok () {
    window.open('https://www.tiktok.com/@dqrecepciones', 'new-window');
}

function openYoutube () {
    window.open('https://www.youtube.com/@dqrecepciones', 'new-window');
}

function reloadPage () {
    window.scrollTo(0, 0);
    window.location.reload();
}

function scrollUp() {
    let element = document.documentElement;
    let options = {
      behavior: 'smooth'
    };
    element.scrollIntoView(options);
}

function scrollToProducts() {
    const element = document.getElementById("products");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function scrollToUs() {
    const element = document.getElementById("us");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function scrollToClients() {
    const element = document.getElementById("clients");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function scrollToMeetus() {
    const element = document.getElementById("meetus");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function scrollToFooter() {
    const element = document.getElementById("footer");
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
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

document.addEventListener('scroll', function () {
    const scrollButton = document.getElementById('scrollButton');
    if (window.scrollY >= 550 && window.scrollY <= 6520 && !scrollButton) {
        const scrollButton = document.createElement('div');
        scrollButton.innerHTML = '<img src="./images/arrow-up.svg"</img>';
        scrollButton.setAttribute('id', 'scrollButton');
        const products = document.querySelector('.products');
        document.body.insertBefore(scrollButton, products);
        scrollButton.addEventListener('click', function() {
            scrollUp();
        });
    } else if (scrollButton && window.scrollY >= 6520 || scrollButton && window.scrollY < 550) {
        scrollButton.remove();
    }
});