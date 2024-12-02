// import { BASE_URL } from "./displayMobileNavbar.js";

// const REQUIRED_URL = BASE_URL + '/user/messages/';

// const form = document.getElementsByClassName('form-content')[0];
// const userName = document.getElementsByClassName('name-input')[0];
// const userEmail = document.getElementsByClassName('email-input')[0];
// const userSubject = document.getElementsByClassName('subject-input')[0];
// const userMessage = document.getElementsByClassName('message-input')[0];
// const messageType = document.getElementsByClassName('dropdown-values')[0];
// const submitButton = document.getElementsByClassName('form-submit')[0];

// submitButton.addEventListener('click', sendEmail);

// function handleSubmit(e) {
// e.preventDefault();
// axios
//     .post(REQUIRED_URL,
//         {
//             name: userName.value,
//             email: userEmail.value,
//             subject: userSubject.value,
//             message: userMessage.value,
//             type: messageType.value
//         })
//     .then((res) => {
//         window.location.assign('../pages/contact-success.html');
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// }

function sendMail(){
    
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
        type:document.getElementById("type").value,
        subject:document.getElementById("subject").value,
    };

const serviceID="service_nu760rh";
const templateID="template_x448dxf";

emailjs.send(serviceID,templateID,params)
.then(res=>{
    document.getElementById("name").value="";
    document.getElementById("email").value="";
    document.getElementById("message").value="";
    document.getElementById("subject").value="";
    document.getElementById("type").value="BUG";

    console.log(res);
    window.location.assign('../pages/contact-success.html');
// alert("your message sent successfully");
})
.catch(err=>{
    alert("something wrong happened");
    console.log(err)
})
}