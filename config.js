import Firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyCe9Ty01bEwxLedHO932tVjpRu8_LnCGkE",
    authDomain: "ebima-93874.firebaseapp.com",
    databaseURL: "https://ebima-93874.firebaseio.com",
    projectId: "ebima-93874",
    storageBucket: "",
    messagingSenderId: "253629596991",
    appId: "1:253629596991:web:c455cb3f68dc3013"
  };
let app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();