import { createRouter, createWebHistory } from 'vue-router';
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
	},
	{
		path: '/login',
		name: 'login',
		component: LoginView,
	},
	{
		path: '/signup',
		name: 'signup',
		component: SignUpView,
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
	},
	{
		path: '/admindashboard',
		name: 'admindashboard',
		component: AdminDashboardView,
	},
	{
		path: '/create-application',
		name: 'create-application',
		component: CreateApplicationView,
	},
	{
		path: '/application-entries',
		name: 'application-entries',
		component: ApplicationEntriesView,
	},
	{
		path: '/compose-assessment',
		name: 'compose-assessment',
		component: ComposeAssessmentView,
	},
	{
		path: '/assessment-history',
		name: 'assessment-history',
		component: AssessmentHistoryView,
	},
	{
		path: '/results',
		name: 'results',
		component: ResultsView,
	},
	{
		path: '/settings',
		name: 'settings',
		component: SettingsView,
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

export default router;
