<template>
  <div>
    <div v-if="!user">
      <UserAuth @signed-in="handleSignedIn" />
    </div>
    <div v-else>
      <div class="chat-header">
        <span>Welcome, {{ user.displayName || 'Guest' }} to THERESA-SHARON @ ONE</span>
        <button @click="logout">Logout</button>
      </div>
      <ChatFeed :user="user" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '@/firebase'; // optimized path using alias

const user = ref(null);

const handleSignedIn = (signedInUser) => {
  user.value = signedInUser;
};

// Dynamic imports for better code splitting
const ChatFeed = defineAsyncComponent(() => import('./components/ChatFeed.vue'));
const UserAuth = defineAsyncComponent(() => import('./components/UserAuth.vue'));

onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    user.value = u;
  });
});

const logout = () => {
  signOut(auth);
};

// Potential image optimization can be handled here if image usage is added later
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