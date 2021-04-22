import firebase from "firebase/app";
import "firebase/firestore"


var app = firebase.initializeApp({
    apiKey: "AIzaSyCmqk8KukKIQnnSEJVMJ_JkHHeWaWQH69s",
    authDomain: "react-coder-e66f8.firebaseapp.com",
    projectId: "react-coder-e66f8",
    storageBucket: "react-coder-e66f8.appspot.com",
    messagingSenderId: "925716756052",
    appId: "1:925716756052:web:4daf0a00cf54cf6e435fc1"
  });

export function getFirebase(){
    return app
}

export function getFirestore(){
    return firebase.firestore(app);
}

export function getDate(){
    return firebase.firestore.Timestamp.fromDate(new Date());
}