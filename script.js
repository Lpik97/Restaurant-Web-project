const aboveHeaderText = document.querySelector(".above-header-text");
function openWhatsApp () {
    window.open('https://api.whatsapp.com/send/?phone=541152630497&text=Quisiera+obtener+mas+información+acerca+de+los+salones.&type=phone_number&app_absent=0', 'new-window', 'height=600,width=800,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=yes,directories=yes,status=yes');
}

const logoImage = document.querySelector(".image-logo");
function reloadPage () {
    window.location.reload();
}

const header = document.querySelector("header");

document.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        header.classList.add('scrolledBar');
    } else {
        header.classList.remove('scrolledBar');
    }
});