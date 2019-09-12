
import * as firebase from 'firebase'
import * as firebaseui from 'firebaseui'

import { storeUser } from './auth'

import 'firebaseui/dist/firebaseui.css'

let ui: firebaseui.auth.AuthUI

const firebaseConfig = {
    apiKey: "AIzaSyDgkuK6L7YIJyzp5asgv-LKjoD2xvV0gzI",
    authDomain: "ani-lobby.firebaseapp.com",
    databaseURL: "https://ani-lobby.firebaseio.com",
    projectId: "ani-lobby",
    storageBucket: "",
    messagingSenderId: "761402594367",
    appId: "1:761402594367:web:62835473bbc76c6987148a"
}

export const init = () => {
    firebase.initializeApp(firebaseConfig)
    ui = new firebaseui.auth.AuthUI(firebase.auth())
}

const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult: { user: { uid: string, displayName: string } }) {
            const { uid, displayName } = authResult.user
            storeUser({ uid, username: displayName }, "temp-user")
            return true;
        }
    },
    signInFlow: 'popup',
    signInSuccessUrl: 'http://localhost:3000/callback/login',
    signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
};

export const openFirebaseAuth = () => {
    ui.start('#firebaseui-auth-container', uiConfig)
}
