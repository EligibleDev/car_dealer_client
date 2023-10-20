import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVFlS2edednwsIQqZRNhLJzXHwSRbXy4A",
    authDomain: "assignment-10-car-dealer.firebaseapp.com",
    projectId: "assignment-10-car-dealer",
    storageBucket: "assignment-10-car-dealer.appspot.com",
    messagingSenderId: "883897478392",
    appId: "1:883897478392:web:7b6cced913c63b8ac4df0d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
