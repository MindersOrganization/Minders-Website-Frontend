import { getEvents } from "./getEvents.js";

const sliderContainer = document.querySelector('.events-slider-container');
// const eventCard = document.querySelector('.event-card');
const rightArrow = document.querySelector('.right-arrow');
const leftArrow = document.querySelector('.left-arrow');
// let cardWidth = eventCard.getBoundingClientRect().width;

rightArrow.addEventListener('click', () => {
    sliderContainer.scrollLeft += 325;
})

leftArrow.addEventListener('click', () => {
    sliderContainer.scrollLeft -= 325;
})

  const displayLatestEvents = async (n, container) => {
      const events = await getEvents();
      for (let i = 0; i < n; i++){
        let eventCard = `
        <div class="event-card">
          <div class="status-tag ${events[i].status}">
            <span class="status-circle ${events[i].status}"></span>
            <div class="status-name">${
              events[i].status === "sold-out" ? "sold out" : events[i].status
            }</div>
          </div>
          <div class = "event-img-container">
            <img
            src="${events[i].card_img}"
            alt=""
            class="event-img"
            />
          </div>
          <div class="event-title text-center" /><a class="" href = "#">${events[i].title}<a></div>
        </div>
        `;
        container.innerHTML += eventCard;
      }
    };

displayLatestEvents(5, sliderContainer);
