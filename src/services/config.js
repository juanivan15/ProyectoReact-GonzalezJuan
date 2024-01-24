
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "mi--tienda-56c44.firebaseapp.com",
  projectId: "mi--tienda-56c44",
  storageBucket: "mi--tienda-56c44.appspot.com",
  messagingSenderId: "298916735407",
  appId: "1:298916735407:web:3e290cba054b5a7744a75a"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);