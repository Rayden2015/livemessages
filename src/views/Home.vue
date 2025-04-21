<template>
  <div class="home-view">
    <UserAuth v-if="!user" @signed-in="user = $event" />
    <template v-else>
      <div class="chat-layout">
        <div class="chat-header">
          <p>Welcome, {{ user.displayName || 'User' }}</p>
        </div>
        <div class="chat-body">
          <ChatFeed :user="user" />
        </div>
        <div class="chat-footer">
          <MessageInput :user="user" />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import UserAuth from '../components/UserAuth.vue';
import ChatFeed from '../components/ChatFeed.vue';
import MessageInput from '../components/MessageInput.vue';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const user = ref(null);

onMounted(() => {
  onAuthStateChanged(auth, (currentUser) => {
    user.value = currentUser;
  });
});
</script>

<style scoped>
.home-view {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.chat-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.chat-header {
  flex-shrink: 0;
  padding: 1rem;
  background: #f1f1f1;
  text-align: center;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}

.chat-body {
  flex: 1;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(6px);
}

.chat-footer {
  flex-shrink: 0;
  padding: 0.5rem;
  border-top: 1px solid #ccc;
  background: #f9f9f9;
}
.media-controls {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.media-controls span {
  cursor: pointer;
  font-size: 1.2rem;
}
</style>