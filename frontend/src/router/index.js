import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import LoginPage from '../views/LoginPage.vue';
import SignUpPage from '../views/SignUpPage.vue';
import AddPostPage from '../views/AddPostPage.vue';
import PostDetailPage from '../views/PostDetailPage.vue';
import ContactPage from '../views/ContactPage.vue';
import auth from "../auth";

const routes = [
  { path: '/', component: HomePage,
    beforeEnter: async(to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
  },
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

// Global guard to protect routes marked with meta.requiresAuth
router.beforeEach(async (to, from, next) => {
  if (to.meta && to.meta.requiresAuth) {
    const isAuthed = await auth.authenticated();
    if (!isAuthed) {
      return next('/login');
    }
  }
  next();
});

export default router;