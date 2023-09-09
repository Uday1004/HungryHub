import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyC1eE_fOLohJQNZsmR9k0qUSOH66Ij3wK4",
  authDomain: "hungry-hubs.firebaseapp.com",
  projectId: "hungry-hubs",
  storageBucket: "hungry-hubs.appspot.com",
  messagingSenderId: "292092184322",
  appId: "1:292092184322:web:c01c3f14468176484d641b",
  measurementId: "G-JXPXZNYN16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);




