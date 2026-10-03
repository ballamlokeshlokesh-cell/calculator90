import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut,
  updateProfile
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function friendlyError(error) {
  const code = error?.code || "";
  const messages = {
    "auth/email-already-in-use": "This email is already registered. Please log in.",
    "auth/invalid-email": "Please enter a valid email address.",
    "auth/weak-password": "Password is too weak. Use at least 8 characters.",
    "auth/invalid-credential": "Email or password is incorrect.",
    "auth/user-not-found": "No account was found with this email.",
    "auth/wrong-password": "Email or password is incorrect.",
    "auth/too-many-requests": "Too many attempts. Please wait and try again.",
    "auth/network-request-failed": "Network error. Check your internet connection."
  };
  return messages[code] || error?.message || "Something went wrong. Please try again.";
}

async function registerUser({ name, email, phone, password }) {
  const credential = await createUserWithEmailAndPassword(auth, email, password);
  const user = credential.user;

  await updateProfile(user, { displayName: name });
  await setDoc(doc(db, "users", user.uid), {
    uid: user.uid,
    name,
    email,
    phone,
    createdAt: serverTimestamp()
  });

  await sendEmailVerification(user);
  return user;
}

async function loginUser(email, password) {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  await credential.user.reload();
  return auth.currentUser;
}

async function resetPassword(email) {
  await sendPasswordResetEmail(auth, email);
}

async function logout() {
  await signOut(auth);
  window.location.href = "login.html";
}

window.Auth = {
  auth,
  registerUser,
  loginUser,
  resetPassword,
  logout,
  friendlyError
};

// Protect the calculator page. Login/signup pages are not protected.
const page = location.pathname.split("/").pop().toLowerCase();
if (page === "calculator.html" || page === "index.html" || page === "") {
  onAuthStateChanged(auth, (user) => {
    if (!user) {
      window.location.replace("login.html");
      return;
    }
    if (typeof window.startCalculatorApp === "function") {
      window.startCalculatorApp();
    }
  });
}
