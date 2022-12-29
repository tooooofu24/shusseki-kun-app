import { FirebaseError } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { app } from "../firebase";

export const login = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  await signInWithPopup(auth, provider).catch((e: Error) => {
    if (e instanceof FirebaseError) {
      throw new Error("システムのエラーが発生しました");
    }
    throw new Error("不明なエラーです");
  });
};
