import menuActive from "./menuActive";

const mouseOverShow = (targetElement, hideElement, showClass) => {
    const elem = document.querySelector(targetElement);
    const hiddenElement = document.querySelector(hideElement);

    elem.addEventListener('mouseover', (e) => {
        hiddenElement.classList.add(showClass);
        document.querySelector('.menu').classList.add('menu__active');
    })

    elem.addEventListener('mouseout', (e) => {
        hiddenElement.classList.remove(showClass);
        document.querySelector('.menu').classList.remove('menu__active');
    })
}

export default mouseOverShow;