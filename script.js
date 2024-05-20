/* toggle icon navbar */

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};



let sections =document.querySelectorAll('section');
let navLinks = document.querySelectorAll(' header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');

            });
        }
    });


    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};


/* Scroll reveal */

ScrollReveal({ 
    distance:'80px',
    duration: 2000,
    delay: 200

});


ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portafolio-box,.contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });


const typed = new Typed('.multiple-text', {
    strings: ["Programadores","Ingenieros"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true
})


/* Logo animation */
const logoElement = document.getElementById('logo');
const fullText = '<span class="colored">M</span>ind<span class="colored">U</span>';
const shortText = '<span class="colored">M</span><span class="transition">U</span>';

let isFullText = false;

setInterval(() => {
    if (isFullText) {
        logoElement.innerHTML = shortText;
        const transitionSpan = logoElement.querySelector('.transition');
        setTimeout(() => {
            transitionSpan.classList.add('fade-out');
        }, 100);  // Start fade-out after 100ms
    } else {
        const transitionSpan = logoElement.querySelector('.transition');
        transitionSpan.classList.remove('fade-out');
        transitionSpan.classList.add('fade-in');
        setTimeout(() => {
            logoElement.innerHTML = fullText;
        }, 1000);  // Update text after fade-in duration
    }
    isFullText = !isFullText;
}, 3000);  // Total interval time