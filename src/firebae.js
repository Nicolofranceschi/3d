import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAygild3Ju3r3jHL9f-KfEVAHvQFBhowxc",
  authDomain: "sagrabot.firebaseapp.com",
  projectId: "sagrabot",
  storageBucket: "sagrabot.appspot.com",
  messagingSenderId: "583569284042",
  databaseURL: "https://sagrabot-default-rtdb.europe-west1.firebasedatabase.app/",
  appId: "1:583569284042:web:a39954381f226446bc8d33",
  measurementId: "G-Z6L7W1LECB"
};

firebase.initializeApp(firebaseConfig);


export const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
      
    }
  };


export const firestore = firebase.firestore();