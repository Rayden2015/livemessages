import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBQZ-qs4sMKbfCbHLqFnw8jIREaosVQ79I",
    authDomain: "tslive.firebaseapp.com",
    projectId: "tslive",
    storageBucket: "tslive.firebasestorage.app",
    messagingSenderId: "982680631838",
    appId: "1:982680631838:web:003437769e215bdafdcc0f"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { app, auth, provider, db, storage, signInWithPopup, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier };
