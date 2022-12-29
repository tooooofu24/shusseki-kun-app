import { getAuth, signOut } from "firebase/auth";

import { app } from "../firebase";

export const logout = async () => {
  const auth = getAuth(app);
  await signOut(auth);
};
