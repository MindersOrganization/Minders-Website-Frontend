import { BASE_URL } from "./displayMobileNavbar.js";

/**
 * TODO dividing events into sections according to year
 */

const cardsContainer = document.querySelector(".event-cards-container");

/** gets all the events in the data base and
 * @returns {Object[]} a list of events { title, status, card_img, date }
 */
export const getEvents = async () => {
  const eventsData = [];
  const res = await axios.get(`${BASE_URL}/user/events/`);
  res.data.forEach((val) => {
    eventsData.push({
      id: val.id,
      title: val.title,
      status: val.status.toLowerCase(),
      card_img: BASE_URL + val.list_img,
      date: val.date,
    });
  });
  return eventsData;
};
