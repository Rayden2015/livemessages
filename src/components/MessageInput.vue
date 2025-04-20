<template>
  <div class="message-input">
    <input v-model="text" placeholder="Type a message..." @keyup.enter="sendMessage" />
    <input type="file" @change="handleFile" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { db, storage } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';

const props = defineProps(['user']);
const text = ref('');

const sendMessage = async () => {
  if (!text.value.trim()) return;
  await addDoc(collection(db, 'messages'), {
    type: 'text',
    content: text.value,
    name: props.user?.displayName || 'Guest',
    avatar: props.user?.photoURL || null,
    uid: props.user?.uid || null,
    timestamp: serverTimestamp()
  });
  text.value = '';
};

const handleFile = async (e) => {
  const file = e.target.files[0];
  const type = file.type.startsWith('image') ? 'image' :
               file.type.startsWith('video') ? 'video' :
               file.type.startsWith('audio') ? 'audio' : null;
  if (!type) return;

  const fileRef = storageRef(storage, `uploads/${file.name}`);
  await uploadBytes(fileRef, file);
  const url = await getDownloadURL(fileRef);

  await addDoc(collection(db, 'messages'), {
    type,
    content: url,
    name: props.user?.displayName || 'Guest',
    avatar: props.user?.photoURL || null,
    uid: props.user?.uid || null,
    timestamp: serverTimestamp()
  });
};
</script>

<style scoped>
.message-input {
  display: flex;
  gap: 0.5rem;
  padding: 1rem;
  background: #f0f0f0;
}
input[type='text'] {
  flex: 1;
  padding: 0.5rem;
  border-radius: 8px;
  border: 1px solid #ccc;
}
</style>
