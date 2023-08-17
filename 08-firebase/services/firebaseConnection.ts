import firebase, { initializeApp } from "firebase/app"
import "firebase/database"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyD7dtcHBlm7WMn6S2lnv-R1j5SE-ryQCXs",
  authDomain: "react-native-4952f.firebaseapp.com",
  projectId: "react-native-4952f",
  storageBucket: "react-native-4952f.appspot.com",
  messagingSenderId: "134208222187",
  appId: "1:134208222187:web:586c5b2f37c56e13e95fae",
  measurementId: "G-TP136NC62R",
  databaseURL: "https://react-native-4952f-default-rtdb.firebaseio.com"
}

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

export default database
