const menuBar = document.querySelector('.menu-bar');
const logoImage = document.querySelector('.logo-image');
const navBar = document.querySelector('.navigation-bar');
const carouselButtons = document.querySelectorAll("[data-carousel-button]");

function openWhatsApp () {
    window.open('https://api.whatsapp.com/send/?phone=541152630497&text=Quisiera+obtener+mas+información+acerca+de+los+salones.&type=phone_number&app_absent=0', 'new-window', 'height=600,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=yes,directories=yes,status=yes');
}

function reloadPage () {
    window.location.reload();
}

document.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        menuBar.classList.add('scrolledBar');
        logoImage.classList.add('scrolledImage');
        navBar.classList.add('scrolledNavBar');
    } else {
        menuBar.classList.remove('scrolledBar');
        logoImage.classList.remove('scrolledImage');
        navBar.classList.remove('scrolledNavBar');
    }
});

carouselButtons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === 'right' ? 1 : -1;
        const slides = button.closest('[data-carousel]').querySelector('[data-slides]');
        const activeSlide = slides.querySelector('[data-active]');
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    })
})