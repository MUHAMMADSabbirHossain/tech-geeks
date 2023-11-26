// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_VI3uFi35eBoBZLBPT2Y31niHR3xYyJs",
    authDomain: "tech-geeks-ed13e.firebaseapp.com",
    projectId: "tech-geeks-ed13e",
    storageBucket: "tech-geeks-ed13e.appspot.com",
    messagingSenderId: "754522470132",
    appId: "1:754522470132:web:68ec07be1ed609f95b50a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;