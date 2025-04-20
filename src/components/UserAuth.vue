<template>
  <div class="auth">
    <button @click="googleLogin">Login with Google</button>
    <form @submit.prevent="emailLogin">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login with Email</button>
    </form>
    <form @submit.prevent="phoneLogin">
      <input v-model="phone" placeholder="Phone number" />
      <div id="recaptcha"></div>
      <button type="submit">Login with Phone</button>
    </form>
  </div>
  <div id="recaptcha"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { auth, provider, signInWithPopup, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from '../firebase';

// Combine both emit calls into one
const emit = defineEmits(['send', 'signed-in']);

const email = ref('');
const password = ref('');
const phone = ref('');

const googleLogin = async () => {
  const result = await signInWithPopup(auth, provider);
  emit('signed-in', result.user); // Emit signed-in event
};

const emailLogin = async () => {
  const result = await signInWithEmailAndPassword(auth, email.value, password.value);
  emit('signed-in', result.user); // Emit signed-in event
};

let recaptchaVerifier;

onMounted(() => {
  if (!window.recaptchaVerifier) {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha', {
      size: 'invisible',
      callback: (response) => {
        console.log('reCAPTCHA verified');
      }
    }, auth);
  }
});

const phoneLogin = async () => {
  const appVerifier = window.recaptchaVerifier;
  const confirmation = await signInWithPhoneNumber(auth, phone.value, appVerifier);
  const code = prompt('Enter the verification code');
  const result = await confirmation.confirm(code);
  console.log('Signed in:', result.user);
};
</script>

<style scoped>
.auth {
  padding: 2rem;
}
</style>
