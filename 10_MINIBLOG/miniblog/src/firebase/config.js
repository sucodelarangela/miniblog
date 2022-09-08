// Copied from Firebase console:
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAMJFkD1Mkz5msd4Lg_zQbIFfkrFvfsP-w",
    authDomain: "miniblog-c985b.firebaseapp.com",
    projectId: "miniblog-c985b",
    storageBucket: "miniblog-c985b.appspot.com",
    messagingSenderId: "235469764335",
    appId: "1:235469764335:web:c0cc748163ec009b96cd1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Created here:
// Initialize database from Firestore (need to import Firestore on top)
const db = getFirestore(app);

// Export database
export { db };