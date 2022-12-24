import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";

import { useFirebaseUser } from "@/hooks/Firebase";
import { app } from "@/utils/firebase";

const auth = getAuth(app);

type props = {
  children?: ReactNode;
};
export const Auth: FC<props> = ({ children }) => {
  return <FirebaseAuth>{children}</FirebaseAuth>;
};

const FirebaseAuth: FC<props> = ({ children }) => {
  const [firebaseUser, setFirebaseUser] = useFirebaseUser();
  const router = useRouter();
  useEffect(() => {
    const unListen = onAuthStateChanged(auth, async (user) => {
      setFirebaseUser(user);
      if (!user) {
        // await logout();
        router.push("/login");
      }
    });
    return () => {
      unListen();
    };
  }, []);

  if (!firebaseUser) {
    return <>Firebase認証確認中...</>;
  }

  return <>{children}</>;
};
