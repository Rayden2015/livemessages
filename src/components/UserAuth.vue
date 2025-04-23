<script setup>
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ref, onMounted } from 'vue';
import { auth, provider, signInWithPopup, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier } from '../firebase';
import { updateProfile, signInAnonymously } from 'firebase/auth';

const emit = defineEmits(['send', 'signed-in']);

const email = ref('');
const password = ref('');
const phone = ref('');
const guestName = ref(localStorage.getItem('guestName') || '');

const loading = ref(false);

const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    emit('signed-in', result.user);
  } catch (error) {
    console.error('Google login failed:', error);
    alert(error.message);
  }
};

const emailLogin = async () => {
  loading.value = true;
  try {
    const result = await signInWithEmailAndPassword(auth, email.value, password.value);
    emit('signed-in', result.user);
  } catch (e) {
    alert(e.message);
  } finally {
    loading.value = false;
  }
};

const phoneLogin = async () => {
  try {
    const confirmation = await signInWithPhoneNumber(auth, phone.value, recaptchaVerifier);
    const code = prompt('Enter the verification code');
    const result = await confirmation.confirm(code);
    if (!result.user.displayName) {
      const name = prompt('Enter your name');
      if (name) {
        await updateProfile(result.user, { displayName: name });
      }
    }
    emit('signed-in', result.user);
  } catch (error) {
    console.error('Phone login failed:', error);
    alert(error.message);
  }
};

const loginAsGuest = async () => {
  if (!guestName.value.trim()) {
    alert('Please enter a name');
    return;
  }

  try {
    const result = await signInAnonymously(auth);

    await updateProfile(auth.currentUser, {
      displayName: guestName.value,
      photoURL: `/src/assets/guest.png`
    });

    // Save locally so it persists across sessions
    localStorage.setItem('guestName', guestName.value);
    localStorage.setItem('guestAvatar', '/assets/default-avatar.png');

    // Immediately emit updated user
    result.user.displayName = guestName.value.trim();
    result.user.photoURL = '/assets/default-avatar.png';
    console.log('Guest login successful:', result.user);
    emit('signed-in', {
      ...auth.currentUser,
      displayName: guestName.value,
      photoURL: '/assets/default-avatar.png'
    }); 
    window.location.reload();

  } catch (error) {
    console.error('Guest login failed:', error);
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
    <h1 class="card title">THERESA-SHARON @ 1</h1>

    <transition name="fade">
      <div class="card">
        <button @click="googleLogin">
          <i class="fab fa-google"></i>
          Login with Google
        </button>
      </div>
    </transition>

    <transition name="fade">
      <div class="guest-login card">
        <input v-model="guestName" placeholder="Enter your name" />
        <button @click="loginAsGuest">Join as Guest</button>
      </div>
    </transition>

    <transition name="fade">
      <div class="card">
        <form @submit.prevent="phoneLogin">
          <label>Mobile Number</label>
          <input v-model="phone" placeholder="+23354*******" />
          <div id="recaptcha-container"></div>
          <button type="submit">
            <span class="icon">📱</span> Login with Mobile Number
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.auth {
  max-width: 90%;
  margin: 0 auto;
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
  inset: 0;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(6px);
  z-index: -1;
}

.title {
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  color: #333;
  width: 100%;
  padding: 1.2rem 0;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.card {
  width: 100%;
  padding: 2rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(20px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 3%;
}

.card:first-of-type button {
  background-color: #db4437;
}
.card:first-of-type button:hover {
  background-color: #c33d2f;
}

.auth button {
  width: 100%;
  padding: 0.75rem;
  margin-top: 0.5rem;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
}

.auth input {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1rem;
  box-sizing: border-box;
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
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
