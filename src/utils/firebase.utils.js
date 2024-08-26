import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7lNrI3dS3cz3Z_YDBbkWPsp_A54056WI",
  authDomain: "tarangini-12ebc.firebaseapp.com",
  projectId: "tarangini-12ebc",
  storageBucket: "tarangini-12ebc.appspot.com",
  messagingSenderId: "410182322664",
  appId: "1:410182322664:web:ac8818395ef752ce4f3c5d",
  measurementId: "G-5TP02L4LDY"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);

// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();
  
// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({   
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signOutUser = () => signOut(auth);
export const db = getFirestore(app);
