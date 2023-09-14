import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAWNUhK1quL94CqsYHuciKLRdJ0Fe0fg1I",
  authDomain: "todo-64df3.firebaseapp.com",
  projectId: "todo-64df3",
  storageBucket: "todo-64df3.appspot.com",
  messagingSenderId: "244225146533",
  appId: "1:244225146533:web:8114374a1db08be248d74c",
};

const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth();
