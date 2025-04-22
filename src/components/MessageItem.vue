<template>
  <div class="message-item" :class="{ mine: isMine }">
    <img v-if="message.avatar" :src="message.avatar" class="avatar" loading="lazy" />
    <div class="message-bubble">
      <div class="sender">{{ message.name || '🎉 Guest' }}</div>
      <div v-if="message.type === 'text'">{{ message.content }}</div>
      <img
        v-else-if="message.type === 'image'"
        :src="message.content"
        alt="Image"
        class="media-preview"
        loading="lazy"
      />
      <video
        v-else-if="message.type === 'video'"
        controls
        :src="message.content"
        class="media-preview"
      />
      <audio
        v-else-if="message.type === 'audio'"
        controls
        :src="message.content"
        class="media-preview"
      />
    </div>
    <div v-if="isUploading" class="upload-progress">
      Uploading... {{ Math.floor(uploadProgress) }}%
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: uploadProgress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { uploadBytesResumable } from 'firebase/storage';
import { trace } from 'firebase/performance';
import { performance } from '../firebase'; // assuming performance is exported from your firebase config

const props = defineProps(['message', 'currentUser']);
const isMine = props.message.uid === props.currentUser?.uid;

const isUploading = ref(false);
const uploadProgress = ref(0);

const handleFile = async (e) => {
  const file = e.target.files[0];
  const type = file.type.startsWith('image') ? 'image' :
               file.type.startsWith('video') ? 'video' :
               file.type.startsWith('audio') ? 'audio' : null;
  if (!type) return;

  const uploadTrace = trace(performance, 'message_upload');
  await uploadTrace.start();

  const fileRef = storageRef(storage, `uploads/${file.name}`);
  const uploadTask = uploadBytesResumable(fileRef, file);

  isUploading.value = true;
  uploadProgress.value = 0;

  uploadTask.on('state_changed',
    (snapshot) => {
      uploadProgress.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    },
    (error) => {
      console.error('Upload failed', error);
      isUploading.value = false;
    },
    async () => {
      const url = await getDownloadURL(uploadTask.snapshot.ref);
      await addDoc(collection(db, 'messages'), {
        type,
        content: url,
        name: props.user?.displayName || 'Guest',
        avatar: props.user?.photoURL || null,
        uid: props.user?.uid || null,
        timestamp: serverTimestamp()
      });
      isUploading.value = false;
      await uploadTrace.stop();
    }
  );
};
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
.media-preview {
  margin-top: 0.5rem;
  max-width: 100%;
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: contain;
}
.upload-progress {
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: #333;
}
.progress-bar {
  height: 6px;
  background: #ddd;
  border-radius: 4px;
  overflow: hidden;
}
.progress-fill {
  height: 100%;
  background: #4caf50;
  transition: width 0.3s ease;
}
</style>
