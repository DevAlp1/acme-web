const menuBtn = document.querySelector('.nav-hamburger');
const closeBtn = document.querySelector('.close-menu');
const menuOverlay = document.querySelector('.mobile-menu');
const dorpBtn = document.querySelector('.dropdown-link');
const dorpMenu = document.querySelector('.dropdown');

menuBtn.addEventListener('click', () => {
    menuOverlay.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    menuOverlay.classList.remove('show');
});

dorpBtn.addEventListener('click', () => {
    if (dorpMenu.classList.contains('show')) {
        dorpMenu.classList.remove('show');
    } else {
        dorpMenu.classList.add('show');
    }
});