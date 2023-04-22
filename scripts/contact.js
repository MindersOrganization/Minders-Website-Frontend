import { BASE_URL } from "./root.js";

const REQUIRED_URL = BASE_URL + '/messages/';

const form = document.getElementsByClassName('form-content')[0];
const userName = document.getElementsByClassName('name-input')[0];
const userEmail = document.getElementsByClassName('email-input')[0];
const userSubject = document.getElementsByClassName('subject-input')[0];
const userMessage = document.getElementsByClassName('message-input')[0];
const messageType = document.getElementsByClassName('dropdown-values')[0];
const submitButton = document.getElementsByClassName('form-submit')[0];

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    axios
        .post(REQUIRED_URL,
            {
                name: userName.value,
                email: userEmail.value,
                subject: userSubject.value,
                message: userMessage.value,
                type: messageType.value
            })
        .then((res) => {
            window.location.assign('../pages/contact-success.html');
        })
        .catch((err) => {
            console.log(err);
        });
}