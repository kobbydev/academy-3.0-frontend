/* eslint-disable no-mixed-spaces-and-tabs */
import { createRouter, createWebHistory } from "vue-router";
// import jwt_decode from "jwt-decode";
import HomeView from "../views/user-views/HomeView.vue";
import LoginView from "../views/user-views/LoginView.vue";
import SignUpView from "../views/user-views/SignUpView.vue";
import DashboardView from "../views/user-views/DashboardView.vue";
import AssessmentView from "../views/user-views/AssessmentView.vue";
import QuestionsView from "../views/user-views/QuestionsView.vue";
import SuccessView from "../views/user-views/SuccessView.vue";
import AdminLoginView from "../views/admin-views/AdminLoginView.vue";
import AdminDashboardView from "../views/admin-views/AdminDashboardView.vue";
import CreateApplicationView from "../views/admin-views/CreateApplicationView.vue";
import ApplicationEntriesView from "../views/admin-views/ApplicationEntriesView.vue";
import ComposeAssessmentView from "../views/admin-views/ComposeAssessmentView.vue";
import AssessmentHistoryView from "../views/admin-views/AssessmentHistoryView.vue";
import ResultsView from "../views/admin-views/ResultsView.vue";
import SettingsView from "../views/admin-views/SettingsView.vue";
import ForgotPassword from "../views/user-views/ForgotPasswordView.vue";
import UserApplication from "../views/user-views/ApplicationView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUpView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: "/assessment",
    name: "assessment",
    component: AssessmentView,
    meta: { requiresAuth: true },
  },
  {
    path: "/assessment/questions",
    name: "questions",
    component: QuestionsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/assessment/success",
    name: "success",
    component: SuccessView,
    meta: { requiresAuth: true },
  },
  {
    path: "/adminlogin",
    name: "adminlogin",
    component: AdminLoginView,
  },
  {
    path: "/admindashboard",
    name: "admindashboard",
    component: AdminDashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: "/create-application",
    name: "create-application",
    component: CreateApplicationView,
    meta: { requiresAuth: true },
  },
  {
    path: "/application-entries",
    name: "application-entries",
    component: ApplicationEntriesView,
    meta: { requiresAuth: true },
  },
  {
    path: "/compose-assessment",
    name: "compose-assessment",
    component: ComposeAssessmentView,
    meta: { requiresAuth: true },
  },
  {
    path: "/assessment-history",
    name: "assessment-history",
    component: AssessmentHistoryView,
    meta: { requiresAuth: true },
  },
  {
    path: "/results",
    name: "results",
    component: ResultsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/settings",
    name: "settings",
    component: SettingsView,
    meta: { requiresAuth: true },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/user-application",
    name: "user-application",
    component: UserApplication,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to) => {
//   const token = localStorage.getItem("token");
//   let loggedIn = false;
//   if (token) {
//     const decoded = jwt_decode(token);
//     const expiryDate = new Date(decoded.exp * 1000);
//     const now = new Date();
//     if (now < expiryDate) {
//       loggedIn = true;
//     }
//   }
//   if (to.meta.requiresAuth && !loggedIn) {
//     return "/login";
//   }

// if (to.meta.requiresAuth) {
// 	if (!loggedIn && to.name !== 'login') {
// 		return { name: 'login' };
// 	}
// }

  // return true or nothing: navigation is valid
  // return false: breaks navigation
  // return route: redirects to that route
// });

export default router;
