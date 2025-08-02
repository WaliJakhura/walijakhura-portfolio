// ================= FIREBASE =================

// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import {
    getDatabase,
    ref,
    set,
    push,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYd-gLUrcBrW9A38YTSrp40ok8e_mI3xo",
    authDomain: "mluqman-moon.firebaseapp.com",
    databaseURL: "https://mluqman-moon-default-rtdb.firebaseio.com",
    projectId: "mluqman-moon",
    storageBucket: "mluqman-moon.appspot.com",
    messagingSenderId: "616544447609",
    appId: "1:616544447609:web:9493249abc9cb17fc778a8",
    measurementId: "G-Z4BMCGX85Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const fbase_database = getDatabase();

// =============================================

var userName = document.getElementById("name");
var userEmail = document.getElementById("email");
var userPhone = document.getElementById("phone");
var userSubject = document.getElementById("subject");
var userMessage = document.getElementById("message");
let emp_fields_err = document.getElementById("empty_notice");
let comp_form_success = document.getElementById("returnmessage");

const myTimeout = setTimeout(function() {
    emp_fields_err.style.display = "none";
}, 5000);

// function myStopFunction() {
//     clearTimeout(myTimeout);
// }

window.submitNow = function() {
    if (
        userName.value == "" ||
        userEmail.value == "" ||
        userPhone.value == "" ||
        userSubject.value == "" ||
        userMessage.value == ""
    ) {
        emp_fields_err.style.display = "block";
        const myTimeout = setTimeout(function() {
            emp_fields_err.style.display = "none";
        }, 5000);
    } else {
        const userObj = {
            userName: userName.value,
            userEmail: userEmail.value,
            userPhone: userPhone.value,
            userSubject: userSubject.value,
            userMessage: userMessage.value,
        };
        const refernce = ref(fbase_database, `form_data/${userObj.userName}/`);
        set(refernce, userObj)
            .then((res) => {
                // console.log(res)
                userName.value = "";
                userEmail.value = "";
                userPhone.value = "";
                userSubject.value = "";
                userMessage.value = "";
                comp_form_success.style.display = "block";
                const myTimeout = setTimeout(function() {
                    comp_form_success.style.display = "none";
                }, 5000);
            })
            .catch(() => {
                console.log("error in submission");
            });
    }
    // console.log(userObj)
    // alert("submitted")
};

// ================= ROUGH =================

// console.log(userName.value)
// console.log(userEmail.value)
// console.log(userPhone.value)
// console.log(userSubject.value)
// console.log(userMessage.value)