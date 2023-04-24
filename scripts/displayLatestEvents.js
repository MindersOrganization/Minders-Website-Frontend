import { getEvents } from "./getEvents.js";

const sliderContainer = document.querySelector(".events-slider-container");
const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");

rightArrow.addEventListener("click", () => {
  sliderContainer.scrollLeft += 325;
});

leftArrow.addEventListener("click", () => {
  sliderContainer.scrollLeft -= 325;
});

const displayLatestEvents = async (n, container) => {
  const events = await getEvents();
  // to handle links in homepage and event-page sliders
  const currentPageUrl = window.location.href;
  let eventPageRoute = "";
  if(currentPageUrl.includes("pages")){
    eventPageRoute = "./event.html"
  }else{
    eventPageRoute = "./pages/event.html"
  };

  for (let i = 0; i < n; i++) {
    let eventCard = `
        <div class="event-card">
          <div class="event-status">
            <div class="status-tag ${events[i].status}">
            <span class="status-circle ${events[i].status}"></span>
            <div class="status-name">${
              events[i].status === "sold-out" ? "sold out" : events[i].status
            }</div>
            </div>
          </div>
          <div class = "event-img-container">
            <img
            src="${events[i].card_img}"
            alt=""
            class="event-img"
            />
          </div>
          <div class="event-title text-center" ><a href="${eventPageRoute}?id=${
            events[i].id
          }" class="event-link" id=${events[i].id}>${events[i].title}</a></div>
        </div>
        `;
    container.innerHTML += eventCard;
  }
};

let eventCardsNum = 4;

displayLatestEvents(eventCardsNum, sliderContainer);