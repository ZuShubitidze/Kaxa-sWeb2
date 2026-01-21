import { initializeApp, type FirebaseApp } from "firebase/app";
// ... other Firebase service imports

let firebaseApp: FirebaseApp | null = null;

const firebaseConfigDev = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY_DEV,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN_DEV,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID_DEV,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET_DEV,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID_DEV,
  appId: import.meta.env.VITE_FIREBASE_APP_ID_DEV,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID_DEV,
};

const firebaseConfigProd = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY_PROD,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN_PROD,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID_PROD,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET_PROD,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID_PROD,
  appId: import.meta.env.VITE_FIREBASE_APP_ID_PROD,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID_PROD,
};

if (typeof window !== "undefined" && !firebaseApp) {
  if (import.meta.env.DEV) {
    // Vite's shorthand for development environment
    firebaseApp = initializeApp(firebaseConfigDev);
    console.log("Firebase initialized for Development (kaxa-web-dev)");
  } else if (import.meta.env.PROD) {
    // Vite's shorthand for production environment
    firebaseApp = initializeApp(firebaseConfigProd);
    console.log("Firebase initialized for Production (kaxa-web)");
  } else {
    console.warn("Unknown environment, Firebase not initialized.");
  }
  // ... initialize other services
}

export { firebaseApp };
// ... export other services
