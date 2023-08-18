import { getAuth } from "firebase/auth"
import { getDatabase } from "firebase/database"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyC0wSA55XVSzabqDtJr0AuqHvJScx9oa_I",
  authDomain: "tarefasapp-3c6b2.firebaseapp.com",
  databaseURL: "https://tarefasapp-3c6b2-default-rtdb.firebaseio.com",
  projectId: "tarefasapp-3c6b2",
  storageBucket: "tarefasapp-3c6b2.appspot.com",
  messagingSenderId: "969799006606",
  appId: "1:969799006606:web:88005bb2f28e7348a5ccdf",
  measurementId: "G-E5PCS7ZQHW"
}

export const app = initializeApp(firebaseConfig)

export const db = getDatabase(app)

export const auth = getAuth(app)
