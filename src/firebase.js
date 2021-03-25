import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBPV0b-b9hA1zSQf7dLXc0nnmm8_1GfRN4",
    authDomain: "time-for-cooking.firebaseapp.com",
    projectId: "time-for-cooking",
    storageBucket: "time-for-cooking.appspot.com",
    messagingSenderId: "740187057589",
    appId: "1:740187057589:web:7d796f97c327aa1dd73dfc",
    measurementId: "G-GJC18DKS0W"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();