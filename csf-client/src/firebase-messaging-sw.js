importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.1.3/firebase-messaging-compat.js");
firebase.initializeApp({
    apiKey: "AIzaSyDDQWru_n00aOcMiYAbUHjq91a38t8oXn8",
    authDomain: "csf-miniproject.firebaseapp.com",
    projectId: "csf-miniproject",
    storageBucket: "csf-miniproject.appspot.com",
    messagingSenderId: "547519369677",
    appId: "1:547519369677:web:c9ec2fa782cc6d90c17484"
});
const messaging = firebase.messaging();