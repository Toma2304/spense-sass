const open = document.getElementById('open');
const close = document.getElementById('close');

function openMenu() {
    document.querySelector('.header .phone').style.display = 'block';
}

function closeMenu() {
    document.querySelector('.header .phone').style.display = 'none';
}

open.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);