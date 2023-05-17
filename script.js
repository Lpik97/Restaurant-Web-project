const navBar = document.querySelector('.navbar');
const navBarLogo = document.querySelector('.navbar-logo');
const navBarList = document.querySelector('.navbar-list');
const salones = document.querySelectorAll('.salon')
const salonDonQuijote = document.getElementById('salon-don-quijote');
const salonDulcinea = document.getElementById('salon-dulcinea');
const salonSancho = document.getElementById('salon-sancho');


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

document.addEventListener('scroll', () => {
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

document.addEventListener('scroll', () => {
    if (window.scrollY >= 180) {
        salonDonQuijote.classList.add('scrolled-salon-don-quijote');
        salonDulcinea.classList.add('scrolled-salon-dulcinea');
        salonSancho.classList.add('scrolled-salon-sancho');
    }
});

salones.forEach(salon => {
    salon.addEventListener('click', () => {
        let newTab = window.open("", "_blank", 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=1366, height=768, top=250, left=250');
        newTab.document.open();
        newTab.document.write(`
            <html>
              <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="styles.css">
                <title>${salon.id}</title>
              </head>
              <body>
                <div class="carousel" data-carousel>
                  <button class="carousel-button left" data-carousel-button="left">&#8249;</button>
                  <button class="carousel-button right" data-carousel-button="right">&#8250;</button>
                  <ul data-slides>
                    ${getCarouselImages(salon.id)}
                  </ul>
                  ${getCarouselText(salon.id)}
                </div>
                <script>
                const carouselButtons = document.querySelectorAll("[data-carousel-button]");
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
                </script>
              </body>
            </html>
          `);
        newTab.document.close();
        function getCarouselImages(salonId) {
            if (salonId === 'salon-don-quijote') {
                return `
                    <li class="slide" data-active>
                    <img src="./images/karl-hedin-wN3q1ANmXJQ-unsplash.jpg" alt="">
                    </li>
                    <li class="slide">
                    <img src="./images/karl-hedin-wN3q1ANmXJQ-unsplash.jpg" alt="">
                    </li>
                    <li class="slide">
                    <img src="./images/karl-hedin-wN3q1ANmXJQ-unsplash.jpg" alt="">
                    </li>
                `;
            } else if (salonId === 'salon-dulcinea') {
                return `
                    <li class="slide" data-active>
                    <img src="./images/logan-weaver-lgnwvr-vJlaWLnGcb0-unsplash.jpg" alt="">
                    </li>
                    <li class="slide">
                    <img src="./images/logan-weaver-lgnwvr-vJlaWLnGcb0-unsplash.jpg" alt="">
                    </li>
                    <li class="slide">
                    <img src="./images/logan-weaver-lgnwvr-vJlaWLnGcb0-unsplash.jpg" alt="">
                    </li>
                `;
            } else if (salonId === 'salon-sancho') {
                return `
                    <li class="slide" data-active>
                    <img src="./images/andrii-olishevskyi-iTc58VLTtEw-unsplash.jpg" alt="">
                    </li>
                    <li class="slide">
                    <img src="./images/andrii-olishevskyi-iTc58VLTtEw-unsplash.jpg" alt="">
                    </li>
                    <li class="slide">
                    <img src="./images/andrii-olishevskyi-iTc58VLTtEw-unsplash.jpg" alt="">
                    </li>
                `;
            }
            function getCarouselText(salonId) {
                if (salonId === 'salon-don-quijote') {
                    return `
                        <p class="salon-p">El salon Don Quijote es nuestra propuesta mas versátil, con capacidad máxima de hasta 200 invitados, cuenta con una amplia pista de baile dotada de la última tecnología en iluminación y sonido, como también, un jardin delantero donde tendrá lugar la recepción de tus invitados. El comedor por su parte, impacta con su novedoso cielo raso que estimulará la imaginación de todos los comensales.</p>
                    `;
                } else if (salonId === 'salon-dulcinea') {
                    return `
                        <p class="salon-p">El salon Dulcinea, con una capacidad de hasta 160 invitados, conserva intacta la escencia de los clásicos salones de antaño combinándolo a su vez con un cálido diseño contemporáneo. Siendo su cualidad mas destacada, el amplio recinto de terraza estilo deck, perfecto para disfrutar de un trago mientras el evento se desarolla.</p>
                    `;
                } else if (salonId === 'salon-sancho') {
                    return `
                        <p class="salon-p">El salon Sancho dislumbra a todos por su moderno y minimalista diseño, jugando con la iluminación creará gratas sencaciones entre los invitados. Ideal para eventos íntimos, contarás con un amplio patio trasero donde la barra se lleva el protagonismo de la noche.</p>
                    `;
                }
            }
        }
    });
});

document.addEventListener('scroll', () => {
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