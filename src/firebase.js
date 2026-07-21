// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Kredensial diambil dari environment variable (lihat .env.example).
// Jangan hardcode API key di sini agar tidak ikut ter-commit.
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Peringatan dini bila konfigurasi belum diisi, supaya error-nya jelas
// alih-alih pesan cryptic "auth/invalid-api-key" saat runtime.
if (!firebaseConfig.apiKey) {
  console.warn(
    "[firebase] Konfigurasi Firebase belum diisi. " +
    "Salin .env.example menjadi .env lalu isi VITE_FIREBASE_* sebelum mengaktifkan ChatRoom."
  );
}

// Init Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const loginWithGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);

// Firestore
export const db = getFirestore(app);
