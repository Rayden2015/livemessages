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
import { auth } from '@/firebase';
import ChatFeed from './components/ChatFeed.vue';
import UserAuth from './components/UserAuth.vue';

const user = ref(null);

const handleSignedIn = (signedInUser) => {
  user.value = signedInUser;
};

onMounted(() => {
  onAuthStateChanged(auth, (u) => {
    if (u) {
      // If user is anonymous and guest name was set
      const guestName = localStorage.getItem('guestName');
      const guestAvatar = localStorage.getItem('guestAvatar');

      if (u.isAnonymous && guestName) {
        u.displayName = guestName;
        u.photoURL = guestAvatar || '/assets/default-avatar.png';
      }

      // Ensure `user` is reactive with updated values
      user.value = {
        uid: u.uid,
        displayName: u.displayName || 'Guest',
        photoURL: u.photoURL,
        isAnonymous: u.isAnonymous,
        email: u.email
      };
    }
  });
});

const logout = async () => {
  await signOut(auth);
  localStorage.removeItem('guestName');
  localStorage.removeItem('guestAvatar');
  user.value = null;
};
</script>

<style scoped>
.chat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #ccc;
}
</style>