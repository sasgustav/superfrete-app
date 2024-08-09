import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from './config';

const sendMessage = async (text) => {
  await addDoc(collection(db, 'messages'), {
    text,
    timestamp: new Date().toISOString()
  });
};

const getMessages = (callback) => {
  const q = query(collection(db, 'messages'), orderBy('timestamp'));
  onSnapshot(q, (querySnapshot) => {
    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push(doc.data());
    });
    callback(messages);
  });
};

export { sendMessage, getMessages };
