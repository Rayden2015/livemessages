<template>
  <div class="message-input">
    <div class="input-container">
      <div class="media-icons">
        <label><input type="file" @change="handleFileUpload" accept="image/*" hidden /><span title="Send Image">🖼️</span></label>
        <label><input type="file" @change="handleFileUpload" accept="video/*" hidden /><span title="Send Video">📹</span></label>
        <label><input type="file" @change="handleFileUpload" accept="audio/*" hidden /><span title="Send Audio">🎤</span></label>
      </div>
      <input v-model="text" placeholder="Share your birthday message..." @keyup.enter="sendMessage" @input="handleTyping" type="text" />
      <button class="send-button" @click="sendMessage">➤</button>
    </div>
    <div v-if="isUploading" class="upload-preview">
      <img v-if="previewUrl" :src="previewUrl" alt="preview" class="preview-img" />
      <div class="progress-bar">
        <div class="progress-fill" :style="{ width: uploadProgress + '%' }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import { ref as storageRef, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebase';

const emit = defineEmits(['send', 'typing', 'upload']);
const props = defineProps(['user']);

const text = ref('');
const isUploading = ref(false);
const uploadProgress = ref(0);
const previewUrl = ref('');

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
const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const type = file.type.startsWith('image') ? 'image' :
               file.type.startsWith('video') ? 'video' :
               file.type.startsWith('audio') ? 'audio' : null;
  if (!type) return;

  previewUrl.value = URL.createObjectURL(file);
  isUploading.value = true;
  uploadProgress.value = 0;

  const fileRef = storageRef(storage, `uploads/${Date.now()}_${file.name}`);
  const uploadTask = uploadBytesResumable(fileRef, file);

  uploadTask.on(
    'state_changed',
    (snapshot) => {
      uploadProgress.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    },
    (error) => {
      console.error('Upload failed', error);
      isUploading.value = false;
    },
    async () => {
      const url = await getDownloadURL(uploadTask.snapshot.ref);
      emit('send', { type, content: url });
      isUploading.value = false;
      previewUrl.value = '';
    }
  );
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

  .upload-preview {
    margin-top: 0.5rem;
    text-align: center;
  }

  .preview-img {
    max-width: 100px;
    max-height: 100px;
    border-radius: 8px;
    margin-bottom: 0.25rem;
  }

  .progress-bar {
    height: 6px;
    background: #ddd;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 0.25rem;
  }

  .progress-fill {
    height: 100%;
    background: #4caf50;
    transition: width 0.3s ease;
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
