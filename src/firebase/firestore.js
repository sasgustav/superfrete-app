import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para enviar uma mensagem
const sendMessage = async (message) => {
  await addDoc(collection(db, 'messages'), {
    text: message,
    timestamp: new Date(),
  });
};

// Função para recuperar mensagens em tempo real
const getMessages = (callback) => {
  const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
  return onSnapshot(q, (querySnapshot) => {
    const messages = querySnapshot.docs.map(doc => doc.data());
    callback(messages);
  });
};

export { sendMessage, getMessages };
