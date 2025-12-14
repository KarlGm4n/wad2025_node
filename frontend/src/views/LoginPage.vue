<template>
  <div class="login-page">
    <AppHeader />

    <div class="content-wrapper">
      <div class="form-container">
        <h2 class="form-title">Login</h2>

        <form @submit.prevent="submitLogin" class="post-form">
          <div class="form-group">
            <label for="email" class="form-label">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="Email"
              class="form-input"
            />
          </div>

          <div class="form-group">
            <label for="password" class="form-label">Password</label>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="Password"
              class="form-input"
            />
          </div>

          <div class="action-row">
            <button type="submit" class="btn">Login</button>
            <span class="or-sep">Or</span>
            <button type="button" class="btn" @click="$router.push('/signup')">Signup</button>
          </div>
        </form>
      </div>
    </div>

    <AppFooter />
  </div>
  
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';

export default {
  name: "LoginPage",
  components: { AppHeader, AppFooter },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    submitLogin() {
      // TODO: hook up to backend auth
      console.log('Login with:', { email: this.email, password: this.password });
    }
  }
};
</script>

<style scoped>
.login-page {
  display: flex;
  flex-direction: column;
  min-height: 97vh;
  background-color: #f5f5f5;
}

.content-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
}

.form-container {
  background-color: #d8e8d0;
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
}

.form-title {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 24px;
  font-weight: 500;
}

.post-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  align-items: center;
  gap: 15px;
}

.form-label {
  font-weight: 500;
  color: #333;
  min-width: 90px;
  font-size: 16px;
}

.form-input {
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
}

.form-input::placeholder {
  color: #999;
}

.action-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.btn {
  background-color: #6ba3d4;
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  font-size: 16px;
  min-width: 110px;
  transition: background-color 0.3s ease;
}

.btn:hover { background-color: #5a8fb8; }
.or-sep { color: #666; }
</style>
