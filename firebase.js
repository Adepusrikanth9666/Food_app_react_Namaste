// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiNcA3zjMcV0ZZQyDmx-RRRGfEDonFQNI",
  authDomain: "food-app-f51a8-b2d6b.firebaseapp.com",
  projectId: "food-app-f51a8",
  storageBucket: "food-app-f51a8.appspot.com",
  messagingSenderId: "81963861646",
  appId: "1:81963861646:web:d37b768c9e1f6f0f386bdf",
  measurementId: "G-L6VJK68D47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
