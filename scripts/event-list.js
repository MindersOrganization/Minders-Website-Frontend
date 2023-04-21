import BASE_URL from "./root.js";

const cardsContainer = document.querySelector(".event-cards-container");

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
      status = "to-be-done";
      break;
  }

  return status;
};

const getEvents = () => {
  const eventsData = [];
  axios
    .get(`${BASE_URL}/events/`)
    .then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        eventsData.push({
          title: res.data[i].title,
          status: setStatus(res.data[i].status),
          card_img: BASE_URL + res.data[i].list_img,
          date: res.data[i].date,
        });
      }
      eventsData.forEach((val) => {
        let eventCard = `
        <div class="event-card">
          <div class="status-tag ${val.status}">
            <span class="status-circle ${val.status}"></span>
            <div class="status-name">${val.status}</div>
          </div>
          <img
            src="${val.card_img}"
            alt=""
            class="event-img"
          />
          <div class="event-title text-center">${val.title}</div>
        </div>
        `;
        cardsContainer.innerHTML += eventCard;
      });
    })
    .catch((e) => console.log(e));
};

getEvents();
