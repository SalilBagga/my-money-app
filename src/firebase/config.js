import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyDhdDJnWL1sfSIcCwt8uw77NwokWRLrPNs',
  authDomain: 'mymoney-d531a.firebaseapp.com',
  projectId: 'mymoney-d531a',
  storageBucket: 'mymoney-d531a.appspot.com',
  messagingSenderId: '612071108583',
  appId: '1:612071108583:web:b1cc064936d35a5bbd5742',
};

//init firebase
firebase.initializeApp(firebaseConfig);
//int service
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
