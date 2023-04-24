import { BASE_URL } from "./displayMobileNavbar.js";

/**
 * TODO dividing events into sections according to year
 */

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
export const getEvents = async () => {
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