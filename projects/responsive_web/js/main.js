const menu = document.querySelector('#menu'),
    btnMenu = menu.querySelector('#btnMenu');

function menuClickEvent() {
    if (menu.classList.contains('on')) {
        menu.classList.remove('on');
    } else {
        menu.classList.add('on');
    }
}

btnMenu.addEventListener('click', menuClickEvent);