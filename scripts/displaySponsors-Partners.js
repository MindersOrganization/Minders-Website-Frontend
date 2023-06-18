import { BASE_URL } from "./displayMobileNavbar.js";

const partnersTrack = document.getElementsByClassName(
  "partners-slide-track"
)[0];
const sponsorsTrack = document.getElementsByClassName(
  "sponsors-slide-track"
)[0];

const getPartners = async () => {
  try {
    const partnersData = [];
    const res = await axios.get(`${BASE_URL}/user/third-parties/?type=PARTNER`);
    res.data.forEach((val) => {
      partnersData.push({
        name: val.name,
        image: val.image,
        url: val.url,
      });
    });
    return partnersData;
  } catch (err) {
    console.log(err);
  }
};

const displayPartners = async () => {
  const partners = await getPartners();
  for (let i = 0; i < 2; i++) {
    partners.forEach((value) => {
      let partnerCard = `
            <div class="slide">
                <img src="${BASE_URL + value.image}" alt="" class="slide-img">
            </div>
            `;
      partnersTrack.innerHTML += partnerCard;
    });
  }
};

const getSponsors = async () => {
    try {
      const sponsorsData = [];
      const res = await axios.get(`${BASE_URL}/user/third-parties/?type=SPONSOR`);
      res.data.forEach((val) => {
        sponsorsData.push({
          name: val.name,
          image: val.image,
          url: val.url,
        });
      });
      return sponsorsData;
    } catch (err) {
      console.log(err);
    }
  };

const displaySponsors = async () => {
  const sponsors = await getSponsors();
  for (let i = 0; i < 2; i++) {
    sponsors.forEach((value) => {
      let sponsorCard = `
            <div class="slide">
                <img src="${BASE_URL + value.image}" alt="" class="slide-img">
            </div>
            `;
      sponsorsTrack.innerHTML += sponsorCard;
    });
  }
};

displayPartners();
displaySponsors();
