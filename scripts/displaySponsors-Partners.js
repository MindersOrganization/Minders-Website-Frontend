import { BASE_URL } from "./displayMobileNavbar.js";

const PARTNERS_URL = BASE_URL + '/user/third-parties/?type=PARTNER';
const SPONSORS_URL = BASE_URL + '/user/third-parties?type=SPONSOR';

const partnersTrack = document.getElementsByClassName('partners-slide-track')[0]; 
const sponsorsTrack = document.getElementsByClassName('sponsors-slide-track')[0]; 

const getPartners = async () => {
    try {
        const partnersData = [];
        const response = await axios.get(PARTNERS_URL);
        response.data.forEach ((value) => {
            partnersData.push({
                name: value.name,
                image: value.image,
                url: value.url
            });
        });
        return partnersData;
    }
    catch(error) {
        console.log(error);
    };
}

const displayPartners = async () => {
    const partners = await getPartners();
    for (let i = 0; i < 2; i++){
        partners.forEach((value) => {
            let partnerCard = 
            `
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
        const response = await axios.get(SPONSORS_URL)
        response.data.forEach((value) => {
            sponsorsData.push({
                name: value.name,
                image: value.image,
                url: value.url
            });
        });
        return sponsorsData;
    }
    catch(error) {
        console.log(error);
    };
};

const displaySponsors = async () => {
    const sponsors = await getSponsors();
    for (let i = 0; i < 2; i++){
        sponsors.forEach((value) => {
            let sponsorCard = 
            `
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