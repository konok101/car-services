// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrjF2JhaEWup6fZ5iaf5hzc3FYM-gvNkU",
  authDomain: "genius-car-services-50d3f.firebaseapp.com",
  projectId: "genius-car-services-50d3f",
  storageBucket: "genius-car-services-50d3f.appspot.com",
  messagingSenderId: "387242210960",
  appId: "1:387242210960:web:0b13bb757e8e5539b60a15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth= getAuth(app);


export default auth;