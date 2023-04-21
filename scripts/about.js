import { BASE_URL } from "./root.js";

const PARTNERS_URL = BASE_URL + '/third-parties/?type=PARTNER';
const SPONSORS_URL = BASE_URL + '/third-parties?type=SPONSOR';

const partnersTrack = document.getElementsByClassName('partners-slide-track')[0]; 
const sponsorsTrack = document.getElementsByClassName('sponsors-slide-track')[0]; 

function getPartners() {
    axios
        .get(PARTNERS_URL)
        .then((res) => {
            for (let i = 0; i < res.data.length; i++){
                const container = document.createElement('div');
                const partnerImage = document.createElement('img');
                partnerImage.src = BASE_URL + res.data[i]['image'];
                container.classList.add('slide');
                partnerImage.classList.add('slide-img');
                container.appendChild(partnerImage);
                partnersTrack.append(container);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

function getSponsors() {
    axios
        .get(SPONSORS_URL)
        .then((res) => {
            for (let i = 0; i < res.data.length; i++){
                const container = document.createElement('div');
                const sponsorImage = document.createElement('img');
                sponsorImage.src = BASE_URL + res.data[i]['image'];
                container.classList.add('slide');
                sponsorImage.classList.add('slide-img');
                container.appendChild(sponsorImage);
                sponsorsTrack.append(container);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

getPartners();
getSponsors();