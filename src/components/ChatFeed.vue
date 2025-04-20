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

function getColor(seed) {
  const colors = ['#f44336', '#e91e63', '#9c27b0', '#2196f3', '#009688', '#4caf50', '#ff9800'];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}
</script>

<template>
    <div class="chat-feed">
      <div class="chat-header">Welcome to the chat 🎉</div>
  
      <div class="chat-body">
        <transition-group name="fade-list" tag="div" class="messages">
          <div
            v-for="msg in messages"
            :key="msg.id"
            :class="['message-bubble', msg.uid === user.uid ? 'mine' : 'theirs']"
          >
            <div class="message-meta">
              <div v-if="!msg.photoURL" class="avatar" :style="{ backgroundColor: getColor(msg.uid) }">
                {{ msg.sender.charAt(0).toUpperCase() }}
              </div>
              <img v-else class="avatar-img" :src="msg.photoURL" alt="avatar" />
              <div>
                <span class="sender">{{ msg.uid === user.uid ? 'You' : msg.sender }}</span>
                <span class="time">{{ formatTime(msg.createdAt?.seconds) }}</span>
              </div>
            </div>
            <div class="text">{{ msg.text }}</div>
          </div>
        </transition-group>
      </div>
  
      <div class="chat-input">
        <input v-model="messageText" @keydown.enter="sendMessage" placeholder="Type a message..." />
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
  height: 100vh;
  width: 90%;
  max-width: 600px;
  margin: 2rem auto;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.chat-header {
  background: rgba(255, 255, 255, 0.7);
  padding: 0.75rem;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid #ccc;
}

.chat-body {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.chat-input {
  display: flex;
  padding: 1rem;
  background: #fff;
  border-top: 1px solid #ccc;
}

.chat-input input {
  flex: 1;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
}

.chat-input button {
  margin-left: 0.5rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  background: #4caf50;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.chat-input button:hover {
  background: #388e3c;
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
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  margin-bottom: 0.3rem;
  color: #555;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
}

.avatar-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
}

.fade-list-enter-active,
.fade-list-leave-active {
  transition: all 0.3s ease;
}
.fade-list-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-list-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>