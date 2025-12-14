import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import SignUpPage from '../views/SignUpPage.vue';
import AddPostPage from '../views/AddPostPage.vue';
import PostDetailPage from '../views/PostDetailPage.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/signup', component: SignUpPage },
  { path: '/add-post', component: AddPostPage, meta: { requiresAuth: true } },
  { path: '/posts/:id', component: PostDetailPage, meta: { requiresAuth: true } },
  { path: '/contact', component: ContactPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;