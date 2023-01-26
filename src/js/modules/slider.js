import Swiper from "swiper";

const sliders = () => {

    // слайдер для промо блока и функционал для него
    const sliderPromo = new Swiper('.promo__swiper', {
        slidesPerView: 1,
    });

    document.querySelector('.promo__slider_total').textContent = sliderPromo.slides.length;

    const currentSlide = document.querySelector('.promo__slider_current');

    document.querySelector(".promo__slider_left").addEventListener('click', () => {
        sliderPromo.slidePrev();
        currentSlide.textContent = sliderPromo.activeIndex + 1;

    })
    document.querySelector(".promo__slider_right").addEventListener('click', () => {
        sliderPromo.slideNext();
        currentSlide.textContent = sliderPromo.activeIndex + 1;
    })

    sliderPromo.on('slideChange', () => {
        currentSlide.textContent = sliderPromo.activeIndex + 1;
    })

    //слайдер для брендов автомобилей и функционал для него
    const brandsSlider = new Swiper('.brands__slider', {
        direction: "horizontal",
        slidesPerView: 7,
        spaceBetween: -40,
    })
    
    document.querySelector(".brands").addEventListener('wheel', (e) => {
        let delta = e.deltaY;

        console.log(brandsSlider.activeIndex)

        if (delta === 100 && brandsSlider.isBeginning) {
            e.stopPropagation();
            e.preventDefault();

            brandsSlider.slideNext();

        } else if (delta === -100 && brandsSlider.isEnd) {
            e.stopPropagation();
            e.preventDefault();

            brandsSlider.slidePrev();
        }
    })
}

export default sliders;