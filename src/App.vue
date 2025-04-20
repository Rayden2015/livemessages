<template>
  <div>
    <div v-if="!user">
      <UserAuth @signed-in="handleSignedIn" />
    </div>
    <div v-else>
      <div class="chat-header">
        <span>Welcome, {{ user.displayName || 'Guest' }}</span>
        <button @click="logout">Logout</button>
      </div>
      <ChatFeed :user="user" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebase/index.js';
import ChatFeed from './components/ChatFeed.vue';
import UserAuth from './components/UserAuth.vue';

const user = ref(null);

const handleSignedIn = (signedInUser) => {
  user.value = signedInUser;
};

onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    user.value = u;
  });
});

const logout = () => {
  signOut(auth);
};
</script>

<style scoped>
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
}
</style>