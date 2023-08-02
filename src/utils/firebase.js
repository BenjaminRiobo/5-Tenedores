import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: "AIzaSyA9DR9TlhGvLaTxzfC4t8dkC8yZI8ijqls",
  authDomain: "tenedores-7f41e.firebaseapp.com",
  projectId: "tenedores-7f41e",
  storageBucket: "tenedores-7f41e.appspot.com",
  messagingSenderId: "469391911732",
  appId: "1:469391911732:web:e871b07b28bfbed456d361"
};

export const initFirebase = initializeApp(firebaseConfig);