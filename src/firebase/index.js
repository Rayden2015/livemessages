import { getPerformance } from 'firebase/performance';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, RecaptchaVerifier, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signInWithPhoneNumber, createUserWithEmailAndPassword } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
const analytics = getAnalytics(app);

const perf = getPerformance(app); // ✅ Performance enabled

export { app, auth, provider, db, storage, signInWithPopup, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier, analytics, createUserWithEmailAndPassword, perf };
