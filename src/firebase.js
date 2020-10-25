// const firebaseConfig = {
  // apiKey: "AIzaSyAMB1U1Y7i-ya3m1W2qsi9gZ49bJd_maKI",
  // authDomain: "todo-app-cp-ab61d.firebaseapp.com",
  // databaseURL: "https://todo-app-cp-ab61d.firebaseio.com",
  // projectId: "todo-app-cp-ab61d",
  // storageBucket: "todo-app-cp-ab61d.appspot.com",
  // messagingSenderId: "626350365962",
  // appId: "1:626350365962:web:c701ba7e2d57b9ccbbeef3",
  // measurementId: "G-B1SCB8BPQL"
// };

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAMB1U1Y7i-ya3m1W2qsi9gZ49bJd_maKI",
   authDomain: "todo-app-cp-ab61d.firebaseapp.com",
   databaseURL: "https://todo-app-cp-ab61d.firebaseio.com",
   projectId: "todo-app-cp-ab61d",
   storageBucket: "todo-app-cp-ab61d.appspot.com",
   messagingSenderId: "626350365962",
   appId: "1:626350365962:web:c701ba7e2d57b9ccbbeef3",
   measurementId: "G-B1SCB8BPQL"
});

const db = firebaseApp.firestore();

export default db;
