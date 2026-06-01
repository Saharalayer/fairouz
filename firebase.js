import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDiYEqCsJEuzN_27PyBCUYImJEaFDYr-gY",
  authDomain: "mlahaf-fairouz.firebaseapp.com",
  databaseURL: "https://mlahaf-fairouz-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mlahaf-fairouz",
  storageBucket: "mlahaf-fairouz.appspot.com",
  messagingSenderId: "333824785757",
  appId: "1:333824785757:web:cffb0adced88c7f88cbcb4"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
