import { createRouter, createWebHistory } from "vue-router";
import { useUsers } from "@/stores/";
import {
  Welcome,
  Dashboard,
  ForgotPassword,
  Login,
  Register,
  ResetPassword,
  VerifyEmail,
} from "@/views/";
import PageNotFound from "@/views/errors/404.vue";
import { type RouteRecordRaw } from "vue-router";

const APP_NAME = import.meta.env.VITE_APP_NAME

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), //dECLARA as rotas com a interface RouteRecordRaw
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome,
      meta: {
        title: "Welcome",
        metaTags: [
          {
            name: "Welcome",
            content:
              "An application / authentication starter kit frontend in Vue.js 3 for Laravel Breeze.",
          },
          {
            property: "og:Welcome",
            content:
              "An application / authentication starter kit frontend in Vue.js 3 for Laravel Breeze.",
          },
        ],
      },
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta: {
        title: "Dashboard",
        guard: "auth",
      },
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      query: {
        reset: "reset",
      },
      meta: {
        title: "Log in",
        guard: "guest",
      },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      meta: {
        title: "Register",
        guard: "guest",
      },
    },
    {
      path: "/forgot-password",
      name: "forgot-password",
      component: ForgotPassword,
      meta: {
        title: "Forget Password",
        guard: "guest",
      },
    },
    {
      path: "/password-reset/:token",
      name: "password-reset",
      component: ResetPassword,
      query: {
        email: "email",
      },
      meta: {
        title: "Reset Password",
        guard: "guest",
      },
    },
    {
      path: "/verify-email",
      name: "verify-email",
      component: VerifyEmail,
      query: {
        resend: "resend",
      },
      meta: {
        title: "Email Verification",
        guard: "auth",
      },
    },
    {
      path: "/page-not-found",
      name: "page-not-found",
      component: PageNotFound,
      meta: {
        title: "Page Not Found",
      },
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/page-not-found",
    },
  ] as RouteRecordRaw[],
});

//Auth Middleware
router.beforeEach((to, from, next) => {
  const store = useUsers();

  const auth = store.authUser;

  if (to.matched.some((route) => route.meta.guard === "guest") && auth)
    next({ name: "dashboard" });
  else if (to.matched.some((route) => route.meta.guard === "auth") && !auth)
    next({ name: "login" });
  else next();
});


export default router;