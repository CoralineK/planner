import app from './firebase';
import 'firebase/auth';

export function createAccount(email: string, password: string) {
  return app.auth().createUserWithEmailAndPassword(email, password);
}

export function signInUser(email: string, password: string) {
  return app.auth().signInWithEmailAndPassword(email, password);
}

export function signOut() {
  return app.auth().signOut();
}
