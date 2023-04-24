import { BASE_URL } from "./displayMobileNavbar.js";
import { getEvents } from './getEvents.js';

const cardsContainer = document.querySelector(".event-cards-container");

/** displays events on the page */
const displayEvents = async () => {
  try {
    const events = await getEvents();
    // console.log(events);
    events.forEach((val) => {
      let eventCard = `
        <div class="event-card">
          <div class="event-status">
            <div class="status-tag ${val.status}">
            <span class="status-circle ${val.status}"></span>
            <div class="status-name">${
              val.status === "sold-out" ? "sold out" : val.status
            }</div>
            </div>
          </div>
          <div class = "event-img-container">
            <img
            src="${val.card_img}"
            alt=""
            class="event-img"
            />
          </div>
          <div class="event-title text-center" ><a href="./event.html?id=${val.id}" class="event-link" id=${
            val.id
          }>${val.title}</a></div>
        </div>
        `;
      cardsContainer.innerHTML += eventCard;
    });
  } catch (error) {
    console.log(error);
  }
};

displayEvents()