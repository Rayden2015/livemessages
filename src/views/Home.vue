<template>
  <div class="home-view">
    <UserAuth v-if="!user" @signed-in="user = $event" />
    <template v-else>
      <ChatFeed :user="user" />
      <MessageInput :user="user" />
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
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>