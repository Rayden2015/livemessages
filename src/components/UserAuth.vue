<script setup>
import { ref, onMounted } from 'vue';
import { auth, provider, signInWithPopup, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier, createUserWithEmailAndPassword } from '../firebase';

const emit = defineEmits(['send', 'signed-in']);

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const phone = ref('');

const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    emit('signed-in', result.user);
  } catch (error) {
    console.error('Google login failed:', error);
    alert(error.message);
  }
};

const loading = ref(false);

const emailLogin = async () => {
  // Client-side password match check before login/account creation
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match.");
    return;
  }
  try {
    const result = await signInWithEmailAndPassword(auth, email.value, password.value);
    emit('signed-in', result.user);
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      // Try creating a new account
      try {
        const result = await createUserWithEmailAndPassword(auth, email.value, password.value);
        alert('Account created successfully!');
        emit('signed-in', result.user);
      } catch (createError) {
        alert(`Failed to create account: ${createError.message}`);
      }
    } else {
      alert(`Login failed: ${error.message}`);
    }
  }
};

const phoneLogin = async () => {
  try {
    const confirmation = await signInWithPhoneNumber(auth, phone.value, recaptchaVerifier);
    const code = prompt('Enter the verification code');
    const result = await confirmation.confirm(code);
    emit('signed-in', result.user);
  } catch (error) {
    console.error('Phone login failed:', error);
    alert(error.message);
  }
};

let recaptchaVerifier;

let recaptchaInitialized = false;

onMounted(() => {
  if (typeof window !== 'undefined' && auth && !recaptchaInitialized) {
    recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      size: 'invisible',
      callback: () => {
        console.log('recaptcha resolved..');
      },
    });

    recaptchaVerifier.render().then(widgetId => {
      console.log('reCAPTCHA widget ID:', widgetId);
    });

    recaptchaInitialized = true;
  }
});

</script>

<template>
  <div class="auth">
    <h1 class="title">🎉 Theresa-Sharon @ 1 🎉</h1>
    <h2 class="tagline">Join the celebration — Share your birthday wishes with us!</h2>
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
          <label>Confirm Password</label>
          <input v-model="confirmPassword" type="password" placeholder="Confirm Password" />
          <button type="submit" :disabled="loading">
            <span class="icon">📧</span>
            <template v-if="loading">
              Signing in<span class="dot">.</span><span class="dot">.</span><span class="dot">.</span>
            </template>
            <template v-else>
              Login with Email
            </template>
          </button>
        </form>
      </div>
    </transition>
    <transition name="fade">
      <div class="card">
        <form @submit.prevent="phoneLogin">
          <label>Phone</label>
          <input v-model="phone" placeholder="Phone number +23354*******" />
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
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(6px);
  z-index: -1;
}

.title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
}

.tagline {
  font-size: 1rem;
  color: #666;
  margin-bottom: 1.5rem;
  text-align: center;
  font-style: italic;
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
  width: 90%;
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
  margin-bottom: 5%;
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

.dot {
  animation: blink 1.4s infinite both;
  display: inline-block;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes blink {
  0% {
    opacity: 0.2;
  }
  20% {
    opacity: 1;
  }
  100% {
    opacity: 0.2;
  }
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

@media (max-width: 599px) {
  .auth {
    width: 90%;
    padding: 1rem;
  }

  .card {
    padding: 0.75rem;
  }

  .title {
    font-size: 1.5rem;
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