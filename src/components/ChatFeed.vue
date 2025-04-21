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
import MessageInput from './MessageInput.vue';

const props = defineProps({
  user: Object
});

const userId = props.user?.uid;
const messages = ref([]);
const messagesEndRef = ref(null);
const chatBodyRef = ref(null);
const isTyping = ref(false);
const typingUsers = ref([]);
let typingTimer;
const TYPING_TIMEOUT = 1500;
const showEmojiPicker = ref(false);

onMounted(() => {
  if ("Notification" in window && Notification.permission !== 'granted') {
    Notification.requestPermission();
  }

  const userMessagesRef = collection(db, 'messages');
  const q = query(userMessagesRef, orderBy('createdAt'));

  let lastMessageId = null;

  onSnapshot(q, (snapshot) => {
    const newMessages = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    newMessages.forEach(msg => {
      if (msg.reactions) {
        reactions.value[msg.id] = msg.reactions;
      }
    });

    // If there's a new message and it's not by you
    const latest = newMessages[newMessages.length - 1];
    if (
      latest &&
      latest.id !== lastMessageId &&
      latest.uid !== props.user?.uid
    ) {
      const audio = new Audio('/src/assets/notify.mp3');
      audio.play();

      if (Notification.permission === 'granted') {
        new Notification(latest.sender || 'Someone', {
          body: latest.text || 'Sent a message',
          icon: latest.photoURL || '/src/assets/ts1.png'
        });
      }
    }

    lastMessageId = latest?.id;
    messages.value = newMessages;
    nextTick(() => scrollToBottom());
  });

  const typingRef = collection(db, 'typing');
  onSnapshot(typingRef, (snapshot) => {
    typingUsers.value = snapshot.docs
      .map(doc => doc.data())
      .filter(user => user.uid !== props.user.uid);
  });
});

const handleTyping = () => {
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
};



 


const handleSend = async (payload) => {
  if (!payload || !props.user) return;

  const messageData = {
    sender: props.user.displayName || 'Anonymous',
    uid: props.user.uid,
    photoURL: props.user.photoURL || '',
    timestamp: serverTimestamp(),
    createdAt: serverTimestamp()
  };

  if (typeof payload === 'string') {
    messageData.type = 'text';
    messageData.content = payload;
  } else if (payload.type && payload.content) {
    messageData.type = payload.type;
    messageData.content = payload.content;
  } else {
    return;
  }

  await addDoc(collection(db, 'messages'), messageData);
  await deleteDoc(doc(db, 'typing', props.user.uid));
  isTyping.value = false;

  nextTick(() => {
    scrollToBottom();
    const inputEl = document.querySelector('.message-input input[type="text"]');
    if (inputEl) inputEl.blur();
  });
};

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

const reactions = ref({});

const reactToMessage = async (id, emoji) => {
  const messageRef = doc(db, 'messages', id);
  const currentReactions = reactions.value[id] || {};

  if (!currentReactions[emoji]) {
    currentReactions[emoji] = 1;
  } else {
    currentReactions[emoji]++;
  }

  reactions.value[id] = { ...currentReactions };

  try {
    await updateDoc(messageRef, {
      reactions: reactions.value[id]
    });
  } catch (error) {
    console.error('Failed to update reactions:', error);
  }
};

function formatTime(seconds) {
  if (!seconds) return '';
  const date = new Date(seconds * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

</script>

<template>
  <div class="chat-feed">
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
                <span>-</span>
                <span class="time"> {{ formatTime(msg.createdAt?.seconds) }}</span>
                <span class="status"> {{ msg.uid === userId ? '✓ Read' : '' }}</span>
              </div>
            </div>
            <div v-if="msg.type === 'text'" class="text">{{ msg.content }}</div>
            <img v-else-if="msg.type === 'image'" :src="msg.content" class="chat-media" />
            <video v-else-if="msg.type === 'video'" controls class="chat-media">
              <source :src="msg.content" />
              Your browser does not support video.
            </video>
            <audio v-else-if="msg.type === 'audio'" controls class="chat-media">
              <source :src="msg.content" />
              Your browser does not support audio.
            </audio>
            <div class="delivered-time">{{ formatTime(msg.createdAt?.seconds) }}</div>
            <div class="reaction-bar">
              <span
                v-for="emoji in ['❤️', '😂', '👍', '🔥', '😮']"
                :key="emoji"
                @click="reactToMessage(msg.id, emoji)"
              >
                {{ emoji }}
                <small v-if="reactions[msg.id] && reactions[msg.id][emoji]">({{ reactions[msg.id][emoji] }})</small>
              </span>
            </div>
          </div>
        </div>
      </transition-group>
      <div v-if="typingUsers.length" class="typing-indicator">
        <span v-if="typingUsers.length === 1">{{ typingUsers[0].name }} is typing...</span>
        <span v-else>
          {{ typingUsers.map(u => u.name).join(', ') }} are typing...
        </span>
      </div>
    </div>

    <div class="chat-input">
      <MessageInput
        :user="props.user"
        @send="handleSend"
        @typing="handleTyping"
      />
    </div>
  </div>
</template>

<style scoped>

.container {
  width: 100%;     /* instead of fixed px */
  max-width: 1200px;
  margin: 0 auto;

}
.reaction-bar {
  margin-top: 0.3rem;
  font-size: 1.2rem;
  display: flex;
  gap: 0.4rem;
  cursor: pointer;
}

.reaction-bar span.selected {
  transform: scale(1.2);
  text-shadow: 0 0 2px #0002;
}

.selected-reaction {
  margin-top: 0.2rem;
  font-size: 1.1rem;
}

@media screen and (max-width: 768px) {
  .some-class {
    flex-direction: column;
    font-size: 14px;
  }
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.chat-feed {
  display: flex;
  flex-direction: column;
  height: 85vh; /* Full height */
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.chat-header {
  background: #075e54;
  color: white;
  padding: 0.75rem;
  font-weight: bold;
  text-align: center;
  border-bottom: 1px solid #ccc;
  font-size: 1rem;
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
  flex-shrink: 0;
  padding: 0.5rem 0.75rem;
  background: #f0f0f0;
  border-top: 1px solid #ccc;
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
  max-width: 75%;
  padding: 0.6rem 0.9rem;
  border-radius: 16px;
  font-size: 0.95rem;
  word-break: break-word;
  position: relative;
  background: #fff;
  line-height: 1.4;
}

.message-bubble.mine {
  background-color: #dcf8c6;
  align-self: flex-end;
  border-bottom-right-radius: 0;
}

.message-bubble.theirs {
  background-color: white;
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

@media screen and (max-width: 600px) {
  .chat-header {
    font-size: 0.9rem;
  }
  .message-bubble {
    font-size: 0.85rem;
    padding: 0.5rem 0.8rem;
  }
}


.chat-media {
  max-width: 100%;
  max-height: 300px;
  border-radius: 10px;
  margin-top: 0.5rem;
}
</style>