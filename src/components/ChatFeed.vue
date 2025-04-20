<template>
  <div v-if="user">
    <p>Welcome, {{ user.displayName || 'Anonymous' }}</p>
  </div>
  <div v-else>
    <p>Please sign in</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import MessageItem from './MessageItem.vue';

defineProps({
  user: Object
});
const messages = ref([]);

onMounted(() => {
  const q = query(collection(db, 'messages'), orderBy('timestamp'));
  onSnapshot(q, (snapshot) => {
    messages.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
});
</script>

<style scoped>
.chat-feed {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}
</style>