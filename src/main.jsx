import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "proyectofinalgulo.firebaseapp.com",
  projectId: "proyectofinalgulo",
  storageBucket: "proyectofinalgulo.firebasestorage.app",
  messagingSenderId: "1086304633883",
  appId: "1:1086304633883:web:cf83fa20127add18eb24be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);

createRoot(document.getElementById('root')).render(
  <>
    
    <App />

  </>
);