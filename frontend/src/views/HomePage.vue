<template>
  <div class="home-page">
    <AppHeader />

    <!-- Main Content -->
    <div class="content-container">
      <!-- Sidebar (empty for now) -->
      <aside class="sidebar"></aside>

      <!-- Posts Section -->
      <main class="posts-section">
        <!-- Logout Button at top -->
        <div class="logout-container">
          <button @click="logout" class="logout-btn">Logout</button>
        </div>

        <!-- Posts List -->
        <div class="posts-list">
          <div v-for="post in posts" :key="post.id" class="post-card" @click="$router.push(`/posts/${post.id}`)">
            <div class="post-date">{{ formatDate(post.postdate) }}</div>
            <div class="post-content">{{ post.body }}</div>
          </div>
        </div>

        <!-- Action Buttons at bottom -->
        <div class="action-buttons">
          <button @click="$router.push('/add-post')" class="btn btn-primary">Add post</button>
          <button @click="deleteAllPosts" class="btn btn-primary">Delete all</button>
        </div>
      </main>

      <!-- Right Sidebar (empty for now) -->
      <aside class="sidebar"></aside>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';

export default {
  name: "HomePage",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await fetch('http://localhost:3000/api/posts');
        if (response.ok) {
          this.posts = await response.json();
        }
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    },
    async logout() {
      try {
        await fetch('http://localhost:3000/auth/logout', {
          method: 'GET',
          credentials: 'include'
        });
        this.$router.push('/login');
      } catch (err) {
        console.error('Logout error:', err);
      }
    },
    async deleteAllPosts() {
      // TODO: Call backend to delete all posts

      if (!confirm('Delete all posts?')) return;

      try {
        const response = await fetch('http://localhost:3000/api/posts', {
          method: 'DELETE',
          credentials: 'include'
        });
        if (!response.ok) {
          alert('Failed to delete all posts');
        }
        this.posts = [];
      } catch (err) {
        console.error("Couldn't delete all:", err);
        alert("Failed to delete all posts.");
      }
    },
    // Inside methods: { ... }

    formatDate(dateString) {
      // 1. If the data is missing, stop here
      if (!dateString) return 'No Date';

      // 2. Parse the ISO string from your JSON
      const date = new Date(dateString);

      // 3. Formatting options (e.g., Dec 13, 2025)
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      
      // 4. Return formatted date
      return date.toLocaleDateString('en-US', options);
    }
  }
};
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  height: 97vh;
  overflow: hidden;
}

/* Logout Button Container */
.logout-container {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.logout-btn {
  background-color: #6ba3d4;
  border: none;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
}

.logout-btn:hover {
  background-color: #5a8fb8;
}

/* Main Content */
.content-container {
  display: flex;
  flex: 1;
  gap: 20px;
  padding-bottom: 10px;
  padding-top: 10px;
  max-width: 100%;
  margin: 0;
  overflow: hidden;
  min-height: 0;
}

.sidebar {
  flex: 0 0 150px;
  background-color: #bfbfbf;
  border-radius: 8px;
  padding: 20px 10px;
}

.posts-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 0;
  overflow-y: auto;
}

.posts-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 10px;
  flex: 1;
}

.post-card {
  background-color: #d0d0d0;
  padding: 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: box-shadow 0.3s ease;
}

.post-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-date {
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
  text-align: center;
}

.post-content {
  color: #333;
  font-size: 14px;
  line-height: 1.6;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 15px;
  justify-content: space-between;
  margin-top: 15px;
}

.btn {
  background-color: #6ba3d4;
  border: none;
  color: white;
  padding: 10px 24px;
  border-radius: 20px;
  font-weight: 500;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #5a8fb8;
}
</style>