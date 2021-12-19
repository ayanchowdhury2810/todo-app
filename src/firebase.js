import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCjuKEtwHixIjXVwdYNzFHVdKl-aCL7SSM",
    authDomain: "todo-app2-262ed.firebaseapp.com",
    projectId: "todo-app2-262ed",
    storageBucket: "todo-app2-262ed.appspot.com",
    messagingSenderId: "839836549837",
    appId: "1:839836549837:web:27c781d27eed5b38af9f84",
    measurementId: "G-Y57PRP3LMV"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;