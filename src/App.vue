<template>
  <div>
    <UserAuth @signed-in="handleSignedIn" />
    <ChatFeed v-if="user" :user="user" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChatFeed from './components/ChatFeed.vue';
import UserAuth from './components/UserAuth.vue';

const user = ref(null);

const handleSignedIn = (signedInUser) => {
  user.value = signedInUser;
};
</script>