import { BASE_URL } from "./displayMobileNavbar.js";

const urlParams = new URLSearchParams(window.location.search);
const eventId = urlParams.get("id");

const eventSection = document.querySelector(".event-section");

const formatDate = (dateObj) => {
  var mm = dateObj.getMonth() + 1; // getMonth() is zero-based
  var dd = dateObj.getDate();

  console.log(mm, dd);
};

const displayEventDetails = async () => {
  try {
    const res = await axios.get(`${BASE_URL}/user/events/${eventId}`);
    const eventData = res.data;
    document.title = eventData.title;
    let eventDate = new Date(eventData.date);
    let formtedEventDate = eventDate
      .toLocaleDateString("en-GB", {
        weekday: "short",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
      .replace(/ /g, " ");
    const event = `
    <div class="event-details-card">
    <div class="event-details">
      <h1 class="event-header">${eventData.title}</h1>
      <span class="event-date">${formtedEventDate}</span>
      <span class="event-location"
        >&#128205; ${eventData.location}</span
      >
    </div>
    <div class="event-container">
      <div class="left-half">
        <div class="event-cover">
          <img src="${BASE_URL + eventData.cover_img}" alt="" />
        </div>
      </div>
      <div class="right-half">
        <div class="status-tag details-status-tag ${eventData.status.toLowerCase()}">
          <span class="status-circle ${eventData.status.toLowerCase()}"></span>
          <div class="status-name">${eventData.status}</div>
        </div>
        <h2 class="event-description-header">Description</h2>
        <p class="event-description">
        ${eventData.description}
        </p>
        <div class="event-agenda">
          <img src="${BASE_URL + eventData.description_img}" alt="" />
        </div>
      </div>
    </div>
  </div>
    `;
    eventSection.innerHTML = event;
  } catch (e) {
    if (e.response.status === 404) {
      window.location.assign("../pages/not-found.html");
    } else if (e.response.status === 500) {
      window.location.assign("../pages/server-error.html");
    }
  }
};
displayEventDetails();
