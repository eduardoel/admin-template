import firebase from "firebase/app"
import 'firebase/auth'

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: NEXT_PUBLIC_FIREBASE_API_KEY,
        authDomain: NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
        projectId: NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        storageBucket: NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: NEXT_PUBLIC_FIREBASE_MESSAGING_SENDERID,
        appId: NEXT_PUBLIC_FIREBASE_APP_ID
    })
}

export default firebase