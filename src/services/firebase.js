import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBOA__K5ZilWnPqroiwYVWZMzO8SkZUeb0",
  authDomain: "jugando-con-react.firebaseapp.com",
  projectId: "jugando-con-react",
  storageBucket: "jugando-con-react.appspot.com",
  messagingSenderId: "997699261894",
  appId: "1:997699261894:web:0cb5edbbdadd7b6bc54ec7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;