import { BASE_URL } from "./root.js";

/**
 * TODO dividing events into sections according to year
 */

const cardsContainer = document.querySelector(".event-cards-container");

/** changes the value of status from shorthand to full status name */
const setStatus = (statusVal) => {
  let status;
  switch (statusVal) {
    case "o":
      status = "ongoing";
      break;
    case "pa":
      status = "finished";
      break;
    case "u":
      status = "upcoming";
      break;
    case "po":
      status = "postponed";
      break;
    case "s":
      status = "sold-out";
      break;
  }

  return status;
};

/** gets all the events in the data base and
 * @returns {Object[]} a list of events { title, status, card_img, date }
 */
const getEvents = async () => {
  const eventsData = [];
  const res = await axios.get(`${BASE_URL}/events/`);
  res.data.forEach((val) => {
    eventsData.push({
      id: val.id,
      title: val.title,
      status: setStatus(val.status),
      card_img: BASE_URL + val.list_img,
      date: val.date,
    });
  });
  return eventsData;
};

/** displays events on the page */
const displayEvents = async () => {
  const events = await getEvents();
  events.forEach((val) => {
    let eventCard = `
    <div class="event-card">
      <div class="status-tag ${val.status}">
        <span class="status-circle ${val.status}"></span>
        <div class="status-name">${
          val.status === "sold-out" ? "sold out" : val.status
        }</div>
      </div>
      <div class = "event-img-container">
        <img
        src="${val.card_img}"
        alt=""
        class="event-img"
        />
      </div>
      <div class="event-title text-center" /><a class="" href = "#">${val.title}<a></div>
    </div>
    `;
    cardsContainer.innerHTML += eventCard;
  });
};

displayEvents();
