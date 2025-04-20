<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
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
  const q = query(collection(db, 'messages'), orderBy('timestamp'));
  onSnapshot(q, async (snapshot) => {
    messages.value = snapshot.docs.map(doc => doc.data());
    await nextTick(); // Wait for DOM update
    scrollToBottom();
  });
});

const sendMessage = async () => {
  console.log('User:', props.user);
  console.log('Text:', messageText.value);

  if (!messageText.value.trim()) return;
  if (!props.user) {
    alert('User not signed in');
    return;
  }

  try {
    await addDoc(collection(db, 'messages'), {
      text: messageText.value,
      sender: props.user.displayName || 'Anonymous',
      uid: props.user.uid,
      photoURL: props.user.photoURL || '',
      timestamp: serverTimestamp()
    });
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
  <div class="chat-container">
    <div class="chat-header">
      👋 Welcome, <strong>{{ props.user.displayName }}</strong>
    </div>

    <div class="messages">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        :class="['message-item', msg.uid === props.user.uid ? 'own' : 'other']"
      >
        <div class="bubble">
          <img v-if="msg.photoURL" :src="msg.photoURL" class="avatar" />
          <div>
            <div class="sender">{{ msg.sender }}</div>
            <div class="text">{{ msg.text }}</div>
            <div class="timestamp">{{ formatDate(msg.timestamp?.seconds) }}</div>
          </div>
        </div>
      </div>
      <div ref="messagesEndRef"></div>
    </div>

    <div class="input-area">
      <input
        v-model="messageText"
        @keydown.enter="sendMessage"
        placeholder="Type your birthday message here..."
        autofocus
      />
      <button @click="sendMessage" @keydown.enter="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
function formatDate(seconds) {
  if (!seconds) return '';
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 90vh;
  max-width: 600px;
  margin: 0 auto;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.chat-header {
  padding: 1rem;
  background-color: #ededed;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}

.messages {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  background: #f7f7f7;
}

.message-item {
  margin-bottom: 1rem;
  display: flex;
}

.message-item.own {
  justify-content: flex-end;
}

.message-item.other {
  justify-content: flex-start;
}

.bubble {
  display: flex;
  align-items: flex-start;
  max-width: 75%;
  background: #dcf8c6;
  padding: 0.75rem;
  border-radius: 12px;
  position: relative;
}

.message-item.own .bubble {
  background: #cef;
  flex-direction: row-reverse;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin: 0 0.5rem;
}

.sender {
  font-weight: bold;
  font-size: 0.85rem;
}

.text {
  margin-top: 0.25rem;
}

.timestamp {
  font-size: 0.7rem;
  text-align: right;
  color: #888;
  margin-top: 4px;
}

.input-area {
  display: flex;
  padding: 0.75rem;
  border-top: 1px solid #ccc;
  background: #fff;
}

input {
  flex: 1;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
}

button {
  padding: 0.5rem 1.2rem;
  margin-left: 0.5rem;
  font-weight: bold;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}
</style>