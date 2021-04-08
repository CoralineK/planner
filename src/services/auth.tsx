import app from './firebase';
import 'firebase/auth';

export function createAccount(email: string, password: string) {
  return app.auth().createUserWithEmailAndPassword(email, password);
}

export async function signInUser(email: string, password: string) {
  await app.auth().setPersistence(app.auth.Auth.Persistence.LOCAL);
  return app.auth().signInWithEmailAndPassword(email, password);
}

export function signOut() {
  return app.auth().signOut();
}
