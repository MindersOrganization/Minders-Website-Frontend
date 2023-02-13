const sliderContainer = document.querySelector('.slider-container');
const eventCard = document.querySelector('.event-card');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
let cardWidth = eventCard.getBoundingClientRect().width;

rightArrow.addEventListener('click', () => {
    console.log('ji')
    sliderContainer.scrollLeft += (cardWidth + 20.5);
})

leftArrow.addEventListener('click', () => {
    sliderContainer.scrollLeft -= (cardWidth + 20.5);
})