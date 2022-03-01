import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const app = initializeApp({
  apiKey: "AIzaSyC4oUGdQjsMeJfYBoapJUlBktvCDL3eCvg",
  authDomain: "sudisoupreview.firebaseapp.com",
  projectId: "sudisoupreview",
  storageBucket: "sudisoupreview.appspot.com",
  messagingSenderId: "179707165412",
  appId: "1:179707165412:web:ad07d9b1a5c681e7cccaf1",
})

export const db = getFirestore(app)
