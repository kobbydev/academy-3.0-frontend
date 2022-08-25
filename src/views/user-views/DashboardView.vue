<template>
	<div class="dashboard">
		<div class="left-section">
			<UserMenu :linksData="links" :linkName="linkName" :linkIcon="linkIcon" :routerLink="routerLink" />
		</div>
		<div class="right-section">
			<h1 class="heading">Dashboard</h1>
			<p class="status-message">
				Your Application is currently being review, you wil be notified if
				successful
			</p>
			<div class="application-data">
				<div class="application-date">
					<p class="header">Date of Application</p>
					<h2>09.09.19</h2>
					<hr />
					<p class="status-text">4 days since applied</p>
				</div>
				<div class="application-status">
					<p class="header">Application Status</p>
					<h2>Pending</h2>
					<hr />
					<p class="status-text">We will get back to you</p>
				</div>
			</div>
			<div class="updates-and-assessment">
				<div class="updates">
					<h1>Updates</h1>
					<p></p>
					<hr />
					<p></p>
					<hr />
					<p></p>
					<hr />
					<p></p>
					<hr />
				</div>
				<div class="assessment">
					<h1>Take Assessment</h1>
					<p>We have 4 days left until the next assessment Watch this space</p>
					<Button text="Take Assessment" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import UserMenu from '../../components/UserMenu.vue';
import Button from '@/components/Button.vue';
export default {
	name: 'DashboardView',
	components: {
		UserMenu,
		Button,
	},
	data() {
		return {
			links: [
				{
					linkName: 'Dashboard',
					linkIcon: require('../../assets/dashboard-icon.svg'),
					routerLink: '/dashboard',
				},
				{
					linkName: 'Assessment',
					linkIcon: require('../../assets/assessment-icon.svg'),
					routerLink: '/assessment',
				},
				{
					linkName: 'Logout',
					linkIcon: require('../../assets/logout-icon.svg'),
					routerLink: '/login',
				},
			],
		};
	},
};
</script>

<style scoped>
.dashboard {
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
	padding: 107px 61px 86px 47px;
	overflow-y: scroll;
}

.heading {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 300;
	font-size: 43.5555px;
	line-height: 52px;
	letter-spacing: -0.02em;
	color: #2b3c4e;
	margin-bottom: 14px;
}

.status-message {
	font-family: 'Lato';
	font-style: italic;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #2b3c4e;
	margin-bottom: 60px;
}

.application-data {
	display: flex;
}

.application-date {
	margin-right: 86px;
}

.header {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	margin-bottom: 11px;
	color: #4f4f4f;
}

.application-date h2,
.application-status h2 {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 300;
	font-size: 48px;
	line-height: 58px;
	text-align: center;
	margin-bottom: 19px;
	color: #2b3c4e;
}

.application-date hr,
.application-status hr {
	width: 148px;
	height: 4px;
	background: #006df0;
	border-radius: 4px;
	margin-bottom: 9px;
}

.application-status hr {
	background: #f09000;
}

.status-text {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	color: #4f4f4f;
}

.updates-and-assessment {
	display: flex;
	justify-content: space-between;
	margin-top: 97px;
}

.updates,
.assessment {
	width: 482px;
	height: 453px;
	border: 1px solid #ececf9;
	border-radius: 4px;
	padding: 25px 34px;
}

.assessment {
	display: flex;
	flex-direction: column;
}

.updates h1,
.assessment h1 {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: -0.02em;
	color: #2b3c4e;
}

.updates h1 {
	margin-bottom: 87px;
}

.updates hr {
	width: 412.5px;
	height: 0px;
	border: 1px solid #cecece;
	margin-bottom: 74px;
}

.assessment h1 {
	margin-bottom: 144px;
}

.assessment p {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	margin: auto;
	font-size: 16.7273px;
	line-height: 20px;
	text-align: center;
	width: 342px;
	color: #4f4f4f;
	margin-bottom: 24px;
}

button {
	background: #b1b1b1;
	border-radius: 4px;
	padding: 10px 42px;
	border: none;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	margin: auto;
	margin-top: 0;
	cursor: pointer;
}

::-webkit-scrollbar {
	width: 10px;
	right: 10px;
}

/* Track */
::-webkit-scrollbar-track {
	background: #cdcfd6;
	border-radius: 17px;
}

/* Handle */
::-webkit-scrollbar-thumb {
	background: #031131;
	opacity: 0.7;
	border-radius: 17px;
	height: 66px;
}
</style>
