import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAdIFifd-2r8kuuYQ13LX0HO-59pHOwduY",
    authDomain: "react-form-17090.firebaseapp.com",
    projectId: "react-form-17090",
    storageBucket: "react-form-17090.appspot.com",
    messagingSenderId: "391302295117",
    appId: "1:391302295117:web:671aa2c8956583fc3d7604",
    measurementId: "G-1H3Q02S4HL"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;