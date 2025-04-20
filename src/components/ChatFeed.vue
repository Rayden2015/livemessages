<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../firebase';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp
} from 'firebase/firestore';

const props = defineProps({
  user: Object
});

const messages = ref([]);
const messageText = ref('');
const messagesEndRef = ref(null);

onMounted(() => {
  const userMessagesRef = collection(db, 'messages');
  const q = query(userMessagesRef, orderBy('createdAt'))

  onSnapshot(q, (snapshot) => {
    messages.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    console.log('Messages:', messages.value);
  })
})

const sendMessage = async () => {
  console.log('User:', props.user);
  console.log('Text:', messageText.value);

  if (!messageText.value.trim()) return;
  if (!props.user) {
    alert('User not signed in');
    return;
  }

  try {
    await addDoc(
        collection(db, 'messages'),
        {
            text: messageText.value,
            user: {
            uid: props.user.uid,
            displayName: props.user.displayName,
            },
            sender: props.user.displayName || 'Anonymous',
            uid: props.user.uid,
            photoURL: props.user.photoURL || '',
            timestamp: serverTimestamp(),
            createdAt: serverTimestamp(),
        }
);

    messageText.value = '';
  } catch (error) {
    console.error('Error sending message:', error);
    alert('Message failed: ' + error.message);
  }
};

const scrollToBottom = () => {
  messagesEndRef.value?.scrollIntoView({ behavior: 'smooth' });
};
</script>

<template>
    <div class="chat-feed">
      <div class="messages">
        <div
          v-for="msg in messages"
          :key="msg.id"
          :class="['message-bubble', msg.uid === user.uid ? 'mine' : 'theirs']"
        >
          <div class="message-meta">
            <span class="sender">{{ msg.uid === user.uid ? 'You' : msg.sender }}</span>
            <span class="time">{{ formatTime(msg.createdAt?.seconds) }}</span>
          </div>
          <div class="text">{{ msg.text }}</div>
        </div>
      </div>
  
      <div class="input-area">
        <input
          v-model="messageText"
          @keydown.enter="sendMessage"
          placeholder="Type a message..."
        />
        <button @click="sendMessage">Send</button>
      </div>
    </div>
  </template>

<script>
function formatDate(seconds) {
  if (!seconds) return '';
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function formatTime(seconds) {
  if (!seconds) return '';
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
</script>

<style scoped>
.chat-feed {
  display: flex;
  flex-direction: column;
  height: 80vh;
  max-width: 600px;
  margin: 0 auto;
  background: #f4f4f4;
  border-radius: 8px;
  overflow: hidden;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.message-bubble {
  max-width: 70%;
  padding: 0.75rem 1rem;
  border-radius: 16px;
  position: relative;
  word-break: break-word;
  line-height: 1.4;
}

.message-bubble.mine {
  background-color: #dcf8c6;
  align-self: flex-end;
  border-bottom-right-radius: 0;
}

.message-bubble.theirs {
  background-color: #fff;
  align-self: flex-start;
  border-bottom-left-radius: 0;
}

.message-meta {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  margin-bottom: 0.3rem;
  color: #555;
}

.input-area {
  display: flex;
  padding: 1rem;
  background: #fff;
  border-top: 1px solid #ccc;
}

input {
  flex: 1;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
}

button {
  margin-left: 0.5rem;
  padding: 0.5rem 1.2rem;
  border: none;
  border-radius: 20px;
  background: #4caf50;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

</style>