<template>
  <header class="nav-header">
    <nav class="nav-links">
      <router-link to="/" class="nav-link">Home</router-link>
      <span class="nav-separator">|</span>
      <router-link to="/contact" class="nav-link">Contacts</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>
.nav-header {
  background-color: #bfbfbf;
  border-radius: 8px;
  height: 60px;
  padding: 0 20px;
}

.nav-links {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin: 0 auto;
  height: 100%;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
}

.nav-separator {
  color: #333;
  font-weight: 500;
}
</style>
