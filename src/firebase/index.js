import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier, createUserWithEmailAndPassword } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyBQZ-qs4sMKbfCbHLqFnw8jIREaosVQ79I",
    authDomain: "tslive.firebaseapp.com",
    projectId: "tslive",
    storageBucket: "tslive.firebasestorage.app",
    messagingSenderId: "982680631838",
    appId: "1:982680631838:web:003437769e215bdafdcc0f",
    measurementId: "G-VPNFJWYMB2"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
// const analytics = getAnalytics(app);

// Optional: Analytics (only works in production domains)
isSupported().then((yes) => {
  if (yes) getAnalytics(app);
});

const performance = getPerformance(app); // ✅ Performance enabled

export { app, auth, provider, db, storage, signInWithPopup, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier, analytics, createUserWithEmailAndPassword, performance };
