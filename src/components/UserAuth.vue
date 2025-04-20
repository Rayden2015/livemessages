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
    <h1 class="title">THERESA-SHARON @ 1</h1>
    <transition name="fade">
      <div class="card">
        <button @click="googleLogin">
          <span class="icon">🔒</span> Login with Google
        </button>
      </div>
    </transition>
    <transition name="fade">
      <div class="card">
        <form @submit.prevent="emailLogin">
          <label>Email</label>
          <input v-model="email" placeholder="Email" />
          <label>Password</label>
          <input v-model="password" type="password" placeholder="Password" />
          <button type="submit">
            <span class="icon">📧</span> Login with Email
          </button>
        </form>
      </div>
    </transition>
    <transition name="fade">
      <div class="card">
        <form @submit.prevent="phoneLogin">
          <label>Phone</label>
          <input v-model="phone" placeholder="Phone number" />
          <div id="recaptcha-container"></div>
          <button type="submit">
            <span class="icon">📱</span> Login with Phone
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.auth {
  max-width: 90%;
  margin: 2rem auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
}

.auth::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.9); /* subtle overlay */
  z-index: -1;
}

.title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
}

.auth button {
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.5rem;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.card:first-of-type button {
  background-color: #db4437;
}
.card:first-of-type button:hover {
  background-color: #c33d2f;
}

.card:nth-of-type(2) button,
.card:nth-of-type(3) button {
  background-color: #e91e63;
}
.card:nth-of-type(2) button:hover,
.card:nth-of-type(3) button:hover {
  background-color: #d81b60;
}

.auth input {
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
}

.auth form {
  margin-top: 1rem;
}

.card {
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  background: #f9f9f9;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.card form {
  width: 100%;
}

.icon {
  font-size: 1.2rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (min-width: 600px) {
  .auth {
    max-width: 500px;
    padding: 2rem 3rem;
  }
}

@media (min-width: 1024px) {
  .auth {
    max-width: 600px;
  }
}
</style>

<style>
body {
  background-image: url('../assets/img/ts1.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>