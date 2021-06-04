import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCSW2iiwXMUW1gnUSR-1PRKTpkfVqTHm4I",
  authDomain: "innovation-drp.firebaseapp.com",
  projectId: "innovation-drp",
  storageBucket: "innovation-drp.appspot.com",
  messagingSenderId: "166904501502",
  appId: "1:166904501502:web:7d42bb131d62a342c4c1af",
  measurementId: "G-DDW1JE6XQH"
};

firebase.initializeApp(firebaseConfig);
export default firebase;