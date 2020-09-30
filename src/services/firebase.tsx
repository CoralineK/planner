import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDJBa-KUc1LDNA1TaupoFFcXSQzP54QJYs',
  authDomain: 'planner-85d57.firebaseapp.com',
  databaseURL: 'https://planner-85d57.firebaseio.com',
  projectId: 'planner-85d57',
  storageBucket: 'planner-85d57.appspot.com',
  messagingSenderId: '435077168151',
  appId: '1:435077168151:web:f2f60bfb71d1e5cfd83052',
  measurementId: 'G-3CZP11V1ET',
};

app.apps.length === 0 && app.initializeApp(config);

export function createAccount(email: string, password: string) {
  return app.auth().createUserWithEmailAndPassword(email, password);
}

export function signInUser(email: string, password: string) {
  return app.auth().signInWithEmailAndPassword(email, password);
}

export function signOut() {
  return app.auth().signOut();
}
