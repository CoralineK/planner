import app from './firebase';
import 'firebase/firestore';
import 'firebase/auth';

const db = app.firestore();
const userId = app.auth().currentUser?.uid;

type Event = {
  begin: Date;
  finish: Date;
  location: string;
  title: string;
  exist: boolean;
};

export async function addEvent({
  begin,
  finish,
  location,
  title,
  exist,
}: Event) {
  const userId = app.auth().currentUser?.uid;
  try {
    return db.collection(`users/${userId}/events`).add({
      begin: begin,
      finish: finish,
      location: location,
      title: title,
      exist: exist,
    });
  } catch (error) {
    console.error('Error adding event: ', error);
  }
}

export async function getEvents() {
  const userId = app.auth().currentUser?.uid;
  console.log(userId);
  try {
    return db
      .collection(`users/${userId}/events`)
      .get()
      .then((snapshot) => {
        console.log(snapshot.docs);
        // querySnapshot.forEach((doc) => {
        //   console.log(doc.id, ' => ', doc.data());
        // });
      });
  } catch (error) {
    console.error('Error getting events: ', error);
  }
}
