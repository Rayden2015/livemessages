<template>
  <div class="message-input">
    <div class="input-container">
      <div class="media-icons">
        <label><input type="file" @change="$emit('upload', $event)" accept="image/*" hidden /><span title="Send Image">🖼️</span></label>
        <label><input type="file" @change="$emit('upload', $event)" accept="video/*" hidden /><span title="Send Video">📹</span></label>
        <label><input type="file" @change="$emit('upload', $event)" accept="audio/*" hidden /><span title="Send Audio">🎤</span></label>
      </div>
      <input v-model="text" placeholder="Type a birthday message..." @keyup.enter="sendMessage" @input="handleTyping" type="text" />
      <button class="send-button" @click="sendMessage">➤</button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';

const emit = defineEmits(['send', 'typing', 'upload']);
const props = defineProps(['user']);

const text = ref('');

const sendMessage = () => {
  if (!text.value.trim()) return;
  emit('send', text.value);
  nextTick(() => {
    text.value = '';
  });
};

const handleTyping = () => {
  emit('typing');
};
</script>

<style scoped>
.message-input {
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0.75rem;
  background: #f0f0f0;
  width: 100%;
}

.input-container {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: white;
  border-radius: 30px;
  padding: 0.4rem 1rem;
  border: 1px solid #ccc;
  width: 90%;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}

.input-container input[type='text'] {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem 0.75rem;
  background: transparent;
}

.media-icons {
  display: flex;
  gap: 0.4rem;
  margin-right: 0.25rem;
}

.media-icons span {
  cursor: pointer;
  font-size: 1.3rem;
  user-select: none;
  opacity: 0.7;
  transition: opacity 0.2s;
}
.media-icons span:hover {
  opacity: 1;
}

.send-button {
  background-color: #25d366;
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.send-button:hover {
  background-color: #20c659;
}
</style>
