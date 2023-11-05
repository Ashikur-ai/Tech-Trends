// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSISlRehk-wWFStWkb5ZJpRXlNJELCL0Y",
    authDomain: "tech-trends-9b550.firebaseapp.com",
    projectId: "tech-trends-9b550",
    storageBucket: "tech-trends-9b550.appspot.com",
    messagingSenderId: "887279639581",
    appId: "1:887279639581:web:cd41311d6ab9a67dd17af4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;