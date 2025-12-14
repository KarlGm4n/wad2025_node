<template>
  <div class="contact-page">
    <AppHeader />

    <div class="content-wrapper">
      <div class="info-container">
        <h2 class="page-title">Contact Us</h2>

        <section class="info-section">
          <h3 class="section-title">Team Members</h3>
          <ul class="members-list">
            <li>Karl Gregor Urmet</li>
            <li>Kermo Mätlik</li>
            <li>Tristan Sooaru</li>
          </ul>
        </section>

        <section class="info-section">
          <h3 class="section-title">Project Info</h3>
          <p><strong>Group:</strong> Group Z</p>
          <p><strong>Current Task:</strong> Homework 4</p>
        </section>
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';

export default {
  name: "ContactPage",
  components: { AppHeader, AppFooter }
};
</script>

<style scoped>
.contact-page {
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

.info-container {
  background-color: #d8e8d0;
  border-radius: 16px;
  padding: 40px;
  width: 100%;
  max-width: 500px;
}

.page-title {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  font-size: 28px;
  font-weight: 600;
}

.info-section {
  margin-bottom: 30px;
}

.info-section:last-child {
  margin-bottom: 0;
}

.section-title {
  color: #333;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  border-bottom: 2px solid #999;
  padding-bottom: 8px;
}

.members-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.members-list li {
  color: #333;
  font-size: 16px;
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
}

.members-list li:before {
  content: "•";
  position: absolute;
  left: 0;
  color: #6ba3d4;
  font-weight: bold;
}

.info-section p {
  color: #333;
  font-size: 16px;
  margin: 8px 0;
  line-height: 1.6;
}
</style>
