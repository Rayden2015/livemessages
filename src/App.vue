<template>
  <div class="app-container">
    <UserAuth v-if="!user" @signed-in="onSignedIn" />
    <ChatFeed v-else :user="user" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChatFeed from './components/ChatFeed.vue';
import UserAuth from './components/UserAuth.vue';

const user = ref(null);

function onSignedIn(authUser) {
  console.log('User signed in:', authUser);
  user.value = authUser;
}
</script>

<style scoped>
.app-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #e5ddd5;
}
</style>