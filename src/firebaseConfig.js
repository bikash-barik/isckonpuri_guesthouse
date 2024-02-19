import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC52tM2h6HzGDeJkZmkjgSXtRODVUSUCMo",
  authDomain: "iskconpuri-guesthouse.firebaseapp.com",
  projectId: "iskconpuri-guesthouse",
  storageBucket: "iskconpuri-guesthouse.appspot.com",
  messagingSenderId: "316548638536",
  appId: "1:316548638536:web:e00c16c169032ffda7b57d",
  measurementId: "G-QN23VJ28YT"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// Get the Firebase Storage instance
const storage = getStorage(app);
export { db };
// Get the Firebase Authentication instance
const auth = getAuth(app);
// Set persistence to 'local' so that the user remains logged in across browser restarts
setPersistence(auth, browserLocalPersistence);

export { storage, auth}; // Export the 'storage' and 'auth', Firestore instance modules
export default app;
