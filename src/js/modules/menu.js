const menu = () => {

    let menuIsActive = false;
    const open = document.querySelector('.hamburger');
    const close = document.querySelector('.menu__close');
    const dropDown = document.querySelector('.dropDown');
    const btn = document.querySelector('.btn__menu');
    const serviceOpen = document.querySelector('.menu__services');
    const hiddenElement = document.querySelector('.serviceMenu');

    //открытие и закрытие выпадающего меню
    open.addEventListener('click', () => {
        dropDown.classList.add('dropDown_active');
        open.classList.add('hamburger_hide');
        close.classList.add('menu__close_show');
        btn.classList.add('btn__menu_active');
        serviceOpen.classList.add('menu__services_disable')
        document.querySelector('.menu').classList.add('menu__active');
        menuIsActive = true;
    })

    close.addEventListener('click', () => {
        dropDown.classList.remove('dropDown_active');
        open.classList.remove('hamburger_hide');
        close.classList.remove('menu__close_show');
        btn.classList.remove('btn__menu_active');
        serviceOpen.classList.remove('menu__services_disable');
        document.querySelector('.menu').classList.remove('menu__active');
        menuIsActive = false;
    })


    // появление и исчезновение списка услуг
    serviceOpen.addEventListener('mouseover', (e) => {
        if (!menuIsActive) {
            hiddenElement.classList.add("serviceMenu_show");
            document.querySelector('.menu').classList.add('menu__active');
        }
    })

    serviceOpen.addEventListener('mouseout', (e) => {
        if (!menuIsActive) {
            hiddenElement.classList.remove("serviceMenu_show");
            document.querySelector('.menu').classList.remove('menu__active');
        }
    })

}

export default menu;