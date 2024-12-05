// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkE83cuF92J5sp5MqdNzL1eLab_4-ezgs",
  authDomain: "my-movie-site-1a1ab.firebaseapp.com",
  projectId: "my-movie-site-1a1ab",
  storageBucket: "my-movie-site-1a1ab.firebasestorage.app",
  messagingSenderId: "795127682285",
  appId: "1:795127682285:web:a8b3cba59272820b24a8e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);