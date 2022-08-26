<template>
	<div class="settings">
		<div class="left-section">
			<UserMenu
				class="user-menu"
				:linksData="links"
				:linkName="linkName"
				:linkIcon="linkIcon"
				:routerLink="routerLink"
				:lId="lId"
			/>
		</div>
		<div class="right-section">
			<h1 class="heading">Profiles and Settings</h1>
			<p>Helps you set admin profile and give other users permissions</p>
			<Button
				text="Admin Profile"
				@click="setSelectedComponent('profile')"
				:class="{ active: isActive }"
			/>
			<Button
				text="Timer Settings"
				@click="setSelectedComponent('timer')"
				:class="{ active: isActive }"
			/>
			<!-- <profile v-if="selectedComponent === 'profile'"></profile>
			<timer v-if="selectedComponent === 'timer'"></timer> -->
			<keep-alive>
				<component :is="selectedComponent"></component>
			</keep-alive>
		</div>
	</div>
</template>

<script>
import UserMenu from '../../components/UserMenu.vue';
import Button from '@/components/Button.vue';
import Profile from '../../components/Profile.vue';
import Timer from '../../components/Timer.vue';
export default {
	name: 'SettingsView',
	components: { UserMenu, Button, Profile, Timer },
	data() {
		return {
			selectedComponent: 'profile',
			isActive: true,
			links: [
				{
					lId: 'dashboard',
					linkName: 'Dashboard',
					linkIcon: require('../../assets/dashboard-icon.svg'),
					routerLink: '/admindashboard',
				},
				{
					lId: 'create-aaplication',
					linkName: 'Create Application',
					linkIcon: require('../../assets/Create-application-icon.svg'),
					routerLink: '/create-application',
				},
				{
					lId: 'application-entries',
					linkName: 'Application Entries',
					linkIcon: require('../../assets/Application-entries-icon.svg'),
					routerLink: '/application-entries',
				},
				{
					lId: 'compose',
					linkName: 'Compose Assessment',
					linkIcon: require('../../assets/assessment-icon.svg'),
					routerLink: '/compose-assessment',
				},
				{
					lId: 'assessment-history',
					linkName: 'Assessment History',
					linkIcon: require('../../assets/Assessment-history-icon.svg'),
					routerLink: '/assessment-history',
				},
				{
					lId: 'results',
					linkName: 'Results',
					linkIcon: require('../../assets/Results-icon.svg'),
					routerLink: '/results',
				},
				{
					lId: 'settings',
					linkName: 'Settings',
					linkIcon: require('../../assets/Setting-icon.svg'),
					routerLink: '/settings',
				},
			],
		};
	},
	methods: {
		setSelectedComponent(component) {
			this.selectedComponent = component;
			this.isActive = true;
		},
	},
};
</script>

<style scoped>
.settings {
	display: flex;
	overflow: hidden;
	height: 100vh;
}
.left-section {
	width: 20vw;
	background: #ffffff;
	box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
	border-radius: 8px;
	position: relative;
	bottom: 0;
	height: 100vh;
}
.right-section {
	width: 80vw;
	height: 100%;
	padding: 101px 376px 159px 42px;
	overflow-y: scroll;
}
.heading {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 300;
	font-size: 43.5555px;
	line-height: 52px;
	letter-spacing: -0.02em;
	margin-bottom: 15px;
	color: #2b3c4e;
}
.right-section p {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 21px;
	margin-bottom: 86px;
	color: #202f44;
	mix-blend-mode: normal;
	opacity: 0.5;
}
.active {
	background: rgba(117, 87, 211, 0.1);
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #333758;
	mix-blend-mode: normal;
	padding: 24px 52px;
	border: none;
	cursor: pointer;
	margin-bottom: 43px;
}
</style>
