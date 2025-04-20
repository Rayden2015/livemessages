<script setup>
import { ref, onMounted } from 'vue';
import { auth, provider, signInWithPopup, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from '../firebase';

const emit = defineEmits(['send', 'signed-in']);

const email = ref('');
const password = ref('');
const phone = ref('');

const googleLogin = async () => {
  const result = await signInWithPopup(auth, provider);
  emit('signed-in', result.user);
};

const emailLogin = async () => {
  const result = await signInWithEmailAndPassword(auth, email.value, password.value);
  emit('signed-in', result.user);
};

let recaptchaVerifier;

onMounted(() => {
  if (typeof window !== 'undefined' && auth) {
    recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            size: 'invisible',
            callback: () => {
                console.log('recaptcha resolved..')
            }
        });

    recaptchaVerifier.render().then(widgetId => {
      console.log('reCAPTCHA widget ID:', widgetId);
    });
  } else {
    console.error('Firebase Auth not ready or recaptcha setup failed.');
  }
});

const phoneLogin = async () => {
  const confirmation = await signInWithPhoneNumber(auth, phone.value, recaptchaVerifier);
  const code = prompt('Enter the verification code');
  const result = await confirmation.confirm(code);
  emit('signed-in', result.user);
};
</script>

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
      <div id="recaptcha-container"></div>
      <button type="submit">Login with Phone</button>
    </form>
  </div>
</template>