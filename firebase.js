import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {
  getDatabase,// get my database
  ref,// reference for specific parts of your database
  push,// generates a very unique identifier
  set,// adds things to the database
  onValue,// shows things in our database
} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC2KvXZ0rY7muDCry3Ilie6WbLp2B9FZcE",
    authDomain: "blogwebsite-b041c.firebaseapp.com",
    databaseURL: "https://blogwebsite-b041c-default-rtdb.firebaseio.com",
    projectId: "blogwebsite-b041c",
    storageBucket: "blogwebsite-b041c.appspot.com",
    messagingSenderId: "882162960251",
    appId: "1:882162960251:web:6787729f68b589707cdfde"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
export{ database, ref, push, set, onValue };