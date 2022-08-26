import { createRouter, createWebHistory } from 'vue-router';
import jwt_decode from 'jwt-decode';
import HomeView from '../views/user-views/HomeView.vue';
import LoginView from '../views/user-views/LoginView.vue';
import SignUpView from '../views/user-views/SignUpView.vue';
import DashboardView from '../views/user-views/DashboardView.vue';
import AssessmentView from '../views/user-views/AssessmentView.vue';
import QuestionsView from '../views/user-views/QuestionsView.vue';
import SuccessView from '../views/user-views/SuccessView.vue';
import AdminLoginView from '../views/admin-views/AdminLoginView.vue';
import AdminDashboardView from '../views/admin-views/AdminDashboardView.vue';
import CreateApplicationView from '../views/admin-views/CreateApplicationView.vue';
import ApplicationEntriesView from '../views/admin-views/ApplicationEntriesView.vue';
import ComposeAssessmentView from '../views/admin-views/ComposeAssessmentView.vue';
import AssessmentHistoryView from '../views/admin-views/AssessmentHistoryView.vue';
import ResultsView from '../views/admin-views/ResultsView.vue';
import SettingsView from '../views/admin-views/SettingsView.vue';
import ForgotPassword from '../views/user-views/ForgotPasswordView.vue';
import UserApplication from '../views/user-views/ApplicationView.vue';
const routes = [
	{
		path: '/',
		name: 'home',
		component: HomeView,
		meta: {
			noAuth: true,
		},
	},
	{
		path: '/login',
		name: 'login',
		component: LoginView,
		meta: {
			noAuth: true,
		},
	},
	{
		path: '/signup',
		name: 'signup',
		component: SignUpView,
		meta: {
			noAuth: true,
		},
	},
	{
		path: '/dashboard',
		name: 'dashboard',
		component: DashboardView,
	},
	{
		path: '/assessment',
		name: 'assessment',
		component: AssessmentView,
	},
	{
		path: '/assessment/questions',
		name: 'questions',
		component: QuestionsView,
	},
	{
		path: '/assessment/success',
		name: 'success',
		component: SuccessView,
	},
	{
		path: '/adminlogin',
		name: 'adminlogin',
		component: AdminLoginView,
		meta: {
			noAuth: true,
		},
	},
	{
		path: '/admindashboard',
		name: 'admindashboard',
		component: AdminDashboardView,
		meta: {
			requiresAuth: true,
			admin: true,
		},
	},
	{
		path: '/create-application',
		name: 'create-application',
		component: CreateApplicationView,
		meta: {
			requiresAuth: true,
			admin: true,
		},
	},
	{
		path: '/application-entries',
		name: 'application-entries',
		component: ApplicationEntriesView,
		meta: {
			requiresAuth: true,
			admin: true,
		},
	},
	{
		path: '/compose-assessment',
		name: 'compose-assessment',
		component: ComposeAssessmentView,
		meta: {
			requiresAuth: true,
			admin: true,
		},
	},
	{
		path: '/assessment-history',
		name: 'assessment-history',
		component: AssessmentHistoryView,
		meta: {
			requiresAuth: true,
			admin: true,
		},
	},
	{
		path: '/results',
		name: 'results',
		component: ResultsView,
		meta: {
			requiresAuth: true,
			admin: true,
		},
	},
	{
		path: '/settings',
		name: 'settings',
		component: SettingsView,
		meta: {
			requiresAuth: true,
			admin: true,
		},
	},
	{
		path: '/forgot-password',
		name: 'forgot-password',
		component: ForgotPassword,
	},
	{
		path: '/user-application',
		name: 'user-application',
		component: UserApplication,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

router.beforeEach((to) => {
	const token = localStorage.getItem('token');
	const role = localStorage.getItem('adminrole');
	// console.log(token);
	// const decoded = jwt_decode(token);
	let isAuthenticated = false;

	if (token) {
		const decode = jwt_decode(token);
		console.log(decode);
		const expiryDate = new Date(decode.exp * 1000);
		const nowDate = new Date();
		if (expiryDate > nowDate) {
			isAuthenticated = true;
			console.log(localStorage.getItem('token'));
		} else {
			localStorage.removeItem('token');
			isAuthenticated = false;
		}
	} else {
		isAuthenticated = false;
	}

	if (!to.meta.noAuth) {
		if (!isAuthenticated && to.name !== 'login') {
			return { name: 'login' };
		}
	}

	if (to.meta.requiresAuth && isAuthenticated) {
		if (to.meta.admin && role !== 'Admin') {
			return { name: 'dashboard' };
		}
	}
});

export default router;
