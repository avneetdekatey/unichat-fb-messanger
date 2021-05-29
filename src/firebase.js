import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBm9YquZ00jUrzRrK2Sy9E4y_fFe6ulzig",
    authDomain: "unichat-512f6.firebaseapp.com",
    projectId: "unichat-512f6",
    storageBucket: "unichat-512f6.appspot.com",
    messagingSenderId: "555018721958",
    appId: "1:555018721958:web:86443a5c441b47b368f267"
}).auth();