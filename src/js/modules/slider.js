import { tns } from "tiny-slider";

const slider = () => {
    const slider = tns({
        container: '.promo__slider',
        items: 1,
        slideBy: 'page',
        controls: false,
        loop: false,
        responsive: {
            769: {
                nav: false
            }
        }
    });

    document.querySelector('.promo__slider_total').textContent = slider.getInfo().pages;

    const currentSlide = document.querySelector('.promo__slider_current');
    
    document.querySelector(".promo__slider_left").addEventListener('click',() => {
        slider.goTo('prev');
        currentSlide.textContent = slider.getInfo().index + 1;
        
    })
    document.querySelector(".promo__slider_right").addEventListener('click',() => {
        slider.goTo('next');
        currentSlide.textContent = slider.getInfo().index + 1;
    })
}

export default slider;