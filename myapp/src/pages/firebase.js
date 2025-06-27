
import { initializeApp } from "firebase/app";
import{getAnalytics} from "firebase/analytics";
import { getAuth, GoogleAuthProvider,signInWithPopup,signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD587_mQTgk-zH_KzxX6Hu4mNnYZWi4K3w",
  authDomain: "auth-c1932.firebaseapp.com",
  projectId: "auth-c1932",
  storageBucket:"auth-c1932.firebasestorage.app",
  messagingSenderId:"207469044749",
  appId: "1:207469044749:web:a2f4c998d74a25d7c86144",
  measurementId:"G-CW9WH2GFDL"
};

const app = initializeApp(firebaseConfig);
const analytics=getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle=()=>signInWithPopup(auth,provider);
export const firebaseLogout=()=>signOut(auth);

export { auth, provider };
