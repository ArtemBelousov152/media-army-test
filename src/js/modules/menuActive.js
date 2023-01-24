const menuActive = () => {
    
    const open = document.querySelector('.hamburger');
    const close = document.querySelector('.menu__close');
    const dropDown = document.querySelector('.dropDownMenu');
    const btn = document.querySelector('.btn__menu');

    open.addEventListener('click', () => {
        dropDown.classList.add('dropDownMenu_active');
        open.classList.add('hamburger_hide');
        close.classList.add('menu__close_show');
        btn.classList.add('btn__menu_active');
        document.querySelector('.menu').classList.add('menu__active');
    })

    close.addEventListener('click', () => {
        dropDown.classList.remove('dropDownMenu_active');
        open.classList.remove('hamburger_hide');
        close.classList.remove('menu__close_show');
        btn.classList.remove('btn__menu_active');
        document.querySelector('.menu').classList.remove('menu__active');
    })

}

export default menuActive;