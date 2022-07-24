import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAAKRFVuVLVMtmuUGbWRJjCIjW0i5K836I",
  authDomain: "ineuronhack.firebaseapp.com",
  projectId: "ineuronhack",
  storageBucket: "ineuronhack.appspot.com",
  messagingSenderId: "26572889312",
  appId: "1:26572889312:web:6396a96a03f28f6fe68485",
  measurementId: "G-DL0P3VVZR6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
