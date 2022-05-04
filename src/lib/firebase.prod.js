import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { seedDatabase } from '../seed';


const config = {
    apiKey: "AIzaSyAwSVevtI6TbwqOtGKDEqCeUKZMvq6-U-I",
    authDomain: "netflix-86e54.firebaseapp.com",
    projectId: "netflix-86e54",
    storageBucket: "netflix-86e54.appspot.com",
    messagingSenderId: "525425684874",
    appId: "1:525425684874:web:f5c492cfca4e05f2741873",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };