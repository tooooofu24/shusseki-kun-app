import { initializeApp } from "firebase/app";

import { firebaseConfig } from "@/config/firebase/FirebaseConfig";

export const app = initializeApp(firebaseConfig);
