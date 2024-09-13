import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  doc,
  setDoc,
  getDoc,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "@/config/firebase";
import { TLoginForm } from "./type";
import { TRole, IUser } from "@/interfaces/user";
import { FirebaseError } from "firebase/app";
import { useEffect, useState } from "react";
import { USER_NOT_FOUND } from "@/constant/error";

export const useAuthState = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const unregisterAuthObserver = onAuthStateChanged(
      auth,
      async (currentUser) => {
        if (currentUser) {
          const docRef = doc(db, "user", currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data() as IUser;
            setUser(userData);
          }
        } else {
          setUser(null);
        }
      },
    );

    return () => unregisterAuthObserver();
  }, []);

  return user;
};

export const Login = async (value: TLoginForm, role: TRole = "admin") => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    value.email,
    value.password,
  );

  const docRef = doc(db, "user", userCredential.user.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    signOut(auth);
    throw new FirebaseError("user not found", USER_NOT_FOUND);
  }

  if (role !== "admin" && docSnap.data()?.role === "admin") {
    signOut(auth);
    throw new FirebaseError("operation-not-allowed", "Operation not allowed");
  }

  const user = docSnap.data() as IUser;
  user.emailVerified = userCredential.user.emailVerified;
  return user;
};

export const logout = async () => {
  await signOut(auth);
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();

  const userCredential = await signInWithPopup(auth, provider);
  const docRef = doc(db, "user", userCredential.user.uid);
  const docSnap = await getDoc(docRef);
  // if (!docSnap.exists()) {
  //   await signOut(auth);
  //   throw new FirebaseError(
  //     "auth/user-not-found",
  //     "User not found in database.",
  //   );
  // }

  const user = docSnap.data() as IUser;
  user.emailVerified = userCredential.user.emailVerified;
  return user;
};

export const checkAccountExist = async (email: string) => {
  const userQuery = query(collection(db, "user"), where("email", "==", email));
  const querySnapshot = await getDocs(userQuery);
  return querySnapshot.docs.length > 0;
};
