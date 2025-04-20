<template>
  <div class="message-item" :class="{ mine: isMine }">
    <img v-if="message.avatar" :src="message.avatar" class="avatar" />
    <div class="message-bubble">
      <div class="sender">{{ message.name || '🎉 Guest' }}</div>
      <div v-if="message.type === 'text'">{{ message.content }}</div>
      <img v-else-if="message.type === 'image'" :src="message.content" alt="Image" />
      <video v-else-if="message.type === 'video'" controls :src="message.content"></video>
      <audio v-else-if="message.type === 'audio'" controls :src="message.content"></audio>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['message', 'currentUser']);
const isMine = props.message.uid === props.currentUser?.uid;
</script>

<style scoped>
.message-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
}
.mine {
  flex-direction: row-reverse;
  text-align: right;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.message-bubble {
  background: #fff;
  padding: 0.5rem;
  border-radius: 10px;
  max-width: 70%;
}
.sender {
  font-weight: bold;
  margin-bottom: 0.3rem;
}
</style>
