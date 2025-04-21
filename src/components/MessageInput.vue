<template>
 <div class="message-input">
  <div class="input-container">
    <div class="media-icons">
      <label><input type="file" @change="handleFile" accept="image/*" hidden /><span title="Send Image">🖼️</span></label>
      <label><input type="file" @change="handleFile" accept="video/*" hidden /><span title="Send Video">📹</span></label>
      <label><input type="file" @change="handleFile" accept="audio/*" hidden /><span title="Send Audio">🎤</span></label>
    </div>
    <input v-model="text" placeholder="Type a birthday message..." @keyup.enter="sendMessage" type="text"/>
    <button class="send-button" @click="sendMessage">➤</button>
  </div>
  <div v-if="isUploading" class="upload-progress">
    <div class="upload-preview">
      Uploading: <strong>{{ selectedFileName }}</strong> — {{ Math.floor(uploadProgress) }}%
      <button class="cancel-upload" @click="cancelUpload">Cancel</button>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: uploadProgress + '%' }"></div>
    </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import { db, storage } from '../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

const props = defineProps(['user']);
const text = ref('');
const isUploading = ref(false);
const uploadProgress = ref(0);
const selectedFileName = ref('');
let uploadTaskRef = null;

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
  const uploadTask = uploadBytesResumable(fileRef, file);

  selectedFileName.value = file.name;
  uploadTaskRef = uploadTask;

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
    }
  );
};

const cancelUpload = () => {
  if (uploadTaskRef) {
    uploadTaskRef.cancel();
    isUploading.value = false;
    selectedFileName.value = '';
  }
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