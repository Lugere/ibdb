import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Configure firebase connection
const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCx2AB7A8mV7wceJa1o7fGetUTLtBdk180",
    authDomain: "ibdb-a3662.firebaseapp.com",
    databaseURL: "https://ibdb-a3662.firebaseio.com",
    projectId: "ibdb-a3662",
    storageBucket: "ibdb-a3662.appspot.com",
    messagingSenderId: "749530552418",
    appId: "1:749530552418:web:6f474f640c61129253593b",
};
firebase.initializeApp(FIREBASE_CONFIG);

// Utilieties
const DB = firebase.firestore();
const AUTH = firebase.auth;

// Collection references
const USERS_COLLECTION = DB.collection("users");
const BOOKS_COLLECTION = DB.collection("books");
const COVERS_COLLECTIONS = DB.collection("covers");
const AUTHORS_COLLECTION = DB.collection("authos");
const FAVORITES_COLLECTION = DB.collection("favorites");

// export utils/refs
export {
    DB,
    AUTH,
    USERS_COLLECTION,
    BOOKS_COLLECTION,
    COVERS_COLLECTIONS,
    AUTHORS_COLLECTION,
    FAVORITES_COLLECTION,
};