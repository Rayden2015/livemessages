<script setup>
import { ref, onMounted, nextTick, watch } from 'vue';
import { db } from '../firebase';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
  updateDoc,
  deleteDoc
} from 'firebase/firestore';

const props = defineProps({
  user: Object
});

const userId = props.user?.uid;
const messages = ref([]);
const messageText = ref('');
const messagesEndRef = ref(null);
const chatBodyRef = ref(null);
const isTyping = ref(false);
const typingUsers = ref([]);
let typingTimer;
const TYPING_TIMEOUT = 1500;

onMounted(() => {
  const userMessagesRef = collection(db, 'messages');
  const q = query(userMessagesRef, orderBy('createdAt'));

  onSnapshot(q, (snapshot) => {
    messages.value = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    nextTick(() => scrollToBottom());
  });

  const typingRef = collection(db, 'typing');
  onSnapshot(typingRef, (snapshot) => {
    typingUsers.value = snapshot.docs
      .map(doc => doc.data())
      .filter(user => user.uid !== props.user.uid);
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

    await deleteDoc(doc(db, 'typing', props.user.uid));
    messageText.value = '';
    isTyping.value = false;
  } catch (error) {
    console.error('Error sending message:', error);
    alert('Message failed: ' + error.message);
  }
};

watch(messageText, () => {
  if (!props.user) return;
  isTyping.value = true;
  setDoc(doc(db, 'typing', props.user.uid), {
    uid: props.user.uid,
    name: props.user.displayName,
    timestamp: Date.now()
  });

  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => {
    isTyping.value = false;
    deleteDoc(doc(db, 'typing', props.user.uid));
  }, TYPING_TIMEOUT);
});

const scrollToBottom = () => {
  if (chatBodyRef.value) {
    chatBodyRef.value.scrollTop = chatBodyRef.value.scrollHeight;
  }
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
    <div class="chat-header">Welcome to the Theresa-Sharon's Birthday Live Chat</div>

    <div class="chat-body" ref="chatBodyRef">
      <transition-group name="fade-list" tag="div" class="messages">
        <div
          v-for="msg in messages"
          :key="msg.id"
          :class="['message-wrapper', msg.uid === userId ? 'align-right' : 'align-left']"
        >
          <div :class="['message-bubble', msg.uid === userId ? 'mine' : 'theirs']">
            <div class="message-meta">
              <div v-if="!msg.photoURL" class="avatar" :style="{ backgroundColor: getColor(msg.uid) }">
                {{ msg.sender.charAt(0).toUpperCase() }}
              </div>
              <img v-else class="avatar-img" :src="msg.photoURL" alt="avatar" />
              <div>
                <span class="sender"> {{ msg.uid === userId ? 'You' : msg.sender }}</span>
                <span class="time"> {{ formatTime(msg.createdAt?.seconds) }}</span>
                <span class="status"> {{ msg.uid === userId ? '✓ Read' : '' }}</span>
              </div>
            </div>
            <div class="text">{{ msg.text }}</div>
            <div class="delivered-time">{{ formatTime(msg.createdAt?.seconds) }}</div>
          </div>
        </div>
      </transition-group>
      <div v-if="typingUsers.length" class="typing-indicator">
        {{ typingUsers[0].name }} is typing...
      </div>
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

.message-wrapper {
  display: flex;
  width: 100%;
}

.message-wrapper.align-right {
  justify-content: flex-end;
}

.message-wrapper.align-left {
  justify-content: flex-start;
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
  text-align: right;
  border-bottom-right-radius: 0;
}

.message-bubble.theirs {
  background-color: #fff;
  text-align: left;
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

.status {
  font-size: 0.7rem;
  color: #888;
  margin-left: 0.5rem;
}

.typing-indicator {
  padding: 0.5rem 1rem;
  font-style: italic;
  font-size: 0.85rem;
  color: #777;
}

.delivered-time {
  text-align: right;
  font-size: 0.7rem;
  color: #999;
  margin-top: 0.3rem;
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