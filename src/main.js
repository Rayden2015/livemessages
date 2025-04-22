import { createApp } from 'vue';
import App from './App.vue';
import './assets/styles.css';

createApp(App).mount('#app');

window.onerror = async (message, source, lineno, colno, error) => {
    await addDoc(collection(db, 'errors'), {
      message,
      source,
      lineno,
      colno,
      stack: error?.stack || '',
      timestamp: serverTimestamp()
    });
  };