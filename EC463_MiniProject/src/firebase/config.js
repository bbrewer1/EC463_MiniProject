import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCYJEiSZBRAkao0r7JQZ5e1J6Atdympn0Q",
  authDomain: "calorie-scanner-2ac8c.firebaseapp.com",
  //databaseURL: 'https://your-database-name.firebaseio.com',
  projectId: 'calorie-scanner-2ac8c',
  storageBucket: 'calorie-scanner-2ac8c.appspot.com',
  messagingSenderId: '603682150475',
  appId: '1:603682150475:web:789143891b8f2b8cf655ce',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };