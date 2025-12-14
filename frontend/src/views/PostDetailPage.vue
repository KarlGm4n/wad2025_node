<template>
  <div class="home-page">
    <AppHeader />
    
    <div class="content-container">
      <aside class="sidebar"></aside>

      <main class="posts-section">
        <div class="detail-container">
          <h3>A Post</h3>
          
          <div class="form-group">
            <label for="body">Body</label>
            <input 
              type="text" 
              id="body" 
              v-model="post.body" 
              class="post-input"
            />
          </div>

          <div class="action-buttons-center">
            <button @click="updatePost" class="btn btn-update">Update</button>
            <button @click="deletePost" class="btn btn-delete">Delete</button>
          </div>
        </div>
      </main>

      <aside class="sidebar"></aside>
    </div>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/Header.vue';
import AppFooter from '@/components/Footer.vue';

export default {
  name: "PostDetailPage",
  components: { AppHeader, AppFooter },
  data() {
    return {
      post: {
        body: '' // Initialize to avoid errors before data loads
      }
    };
  },
  mounted() {
    this.fetchPost();
  },
  methods: {
    // 1. Fetch Single Post
    async fetchPost() {
      // Get the ID from the URL (e.g., /posts/4)
      const id = this.$route.params.id; 
      try {
        const response = await fetch(`http://localhost:3000/api/posts/${id}`);
        if (response.ok) {
          this.post = await response.json();
          // Debug check: Verify data in console
          console.log("Fetched post:", this.post);
        } else {
          // If post not found, go back home
          console.error("Post not found");
          this.$router.push('/');
        }
      } catch (err) {
        console.error("Error fetching post:", err);
      }
    },
    
    // 2. Update Post
    async updatePost() {
      const id = this.$route.params.id;
      try {
        await fetch(`http://localhost:3000/api/posts/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ body: this.post.body })
        });
        // Redirect to home after update
        this.$router.push('/');
      } catch (err) {
        console.error("Error updating post:", err);
      }
    },
    
    // 3. Delete Post
    async deletePost() {
      const id = this.$route.params.id;
      try {
        await fetch(`http://localhost:3000/api/posts/${id}`, {
          method: 'DELETE'
        });
        // Redirect to home after delete
        this.$router.push('/');
      } catch (err) {
        console.error("Error deleting post:", err);
      }
    }
  }
};
</script>

<style scoped>
/* Reuse layout styles from HomePage for consistency */
.home-page { display: flex; flex-direction: column; height: 97vh; overflow: hidden; }
.content-container { display: flex; flex: 1; gap: 20px; padding: 10px 0; max-width: 100%; margin: 0; }
.sidebar { flex: 0 0 150px; background-color: #bfbfbf; border-radius: 8px; padding: 20px 10px; }
.posts-section { flex: 1; display: flex; flex-direction: column; align-items: center; }

/* Specific styles for the Detail Box */
.detail-container {
  background-color: #eee;
  padding: 30px;
  border-radius: 15px;
  width: 80%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

h3 { text-align: center; color: #333; margin: 0 0 10px 0; }

.form-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

label { font-weight: bold; color: #333; min-width: 50px; }

.post-input {
  flex: 1;
  padding: 10px;
  border-radius: 20px;
  border: none;
  background-color: white;
  text-align: center; 
}

.action-buttons-center {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.btn {
  padding: 10px 25px;
  border-radius: 20px;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.btn-update { background-color: #6ba3d4; } 
.btn-update:hover { background-color: #5a8fb8; }

.btn-delete { background-color: #6ba3d4; }
.btn-delete:hover { background-color: #5a8fb8; }
</style>
