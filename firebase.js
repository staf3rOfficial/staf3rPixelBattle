// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAvniRNkJXERzbBAtWM0eRVElH_l4mJh-A",
  authDomain: "pbstaf52.firebaseapp.com",
  projectId: "pbstaf52",
  storageBucket: "pbstaf52.firebasestorage.app",
  messagingSenderId: "853591293522",
  appId: "1:853591293522:web:a460e6efc46c50bfab298b",
  measurementId: "G-3HFVMQ2GDC"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, onValue, set };
