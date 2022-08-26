<template>
	<div class="admin-dashboard">
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
			<h1 class="heading">Dashboard</h1>
			<div class="applications-data">
				<div class="current-applications">
					<p class="header">Current Applications</p>
					<h3 class="number">{{ allApplicants.length }}</h3>
					<hr />
					<p class="application-class">Academy 2.0</p>
				</div>
				<div class="total-applications">
					<p class="header">Total Applications</p>
					<h3 class="number">{{ allApplicants.length }}</h3>
					<hr />
					<p class="application-class">All entries so far</p>
				</div>
				<div class="academys">
					<p class="header">Academy's</p>
					<h3 class="number">{{ allBatches.length }}</h3>
					<hr />
					<p class="application-class">So far</p>
				</div>
			</div>
			<div class="history-and-assessment">
				<div class="history">
					<h1>History</h1>
					<p>Last Update 18:24, 22/02/19</p>
					<table>
						<tr v-for="(batch, index) in allBatches" :key="index">
							<td>Academy {{ batch.batchId }}</td>
							<td>{{ allApplicants.length }} students</td>
							<td>started {{}}</td>
						</tr>
						<!-- <tr>
							<td>Academy Batch 2</td>
							<td>15 students</td>
							<td>started 11/09/15</td>
						</tr>
						<tr>
							<td>Academy Batch 3</td>
							<td>15 students</td>
							<td>started 11/09/15</td>
						</tr> -->
					</table>
				</div>
				<div class="assessment">
					<h1>Create Assessment</h1>
					<p>Create test question for an incoming academy students</p>
					<Button text="Create Assessment" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import UserMenu from '@/components/UserMenu.vue';
import Button from '@/components/Button.vue';
import { mapActions, mapGetters } from 'vuex';
// import { format } from 'date-fns';
export default {
	name: 'AdminDashboard',
	components: { UserMenu, Button },
	data() {
		return {
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
	async created() {
		await this.getAllApplicants();
		await this.getAllBatches();
		console.log(this.date);
	},
	computed: {
		...mapGetters({
			allApplicants: 'getAllApplicants',
			allBatches: 'getAllBatches',
		}),
		// date() {
		// 	return this.allBatches.forEach((element) => {
		// 		const newDate = format(new Date(element.createdAt), 'dd/MM/yy');
		// 		return newDate;
		// 	});
		// },
	},
	methods: {
		...mapActions({
			getAllApplicants: 'getAllApplicants',
			getAllBatches: 'getAllBatches',
		}),
	},
};
</script>

<style scoped>
.admin-dashboard {
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
	margin-bottom: 65px;
}
.applications-data {
	display: flex;
}
.current-applications,
.total-applications {
	margin-right: 100px;
}
.header {
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 19px;
	margin-bottom: 8px;
	color: #4f4f4f;
}
.number {
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 300;
	font-size: 48px;
	line-height: 65px;
	margin-bottom: 11px;
	color: #2b3c4e;
}
.current-applications hr {
	width: 148px;
	height: 4px;
	background: #006df0;
	border-radius: 4px;
	border: none;
	margin-bottom: 9px;
}
.total-applications hr {
	width: 148px;
	height: 4px;
	background: #00f026;
	border-radius: 4px;
	border: none;
	margin-bottom: 9px;
}
.academys hr {
	width: 148px;
	height: 4px;
	margin-bottom: 9px;
	border: none;
	background: #f09000;
	border-radius: 4px;
}
.application-class {
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
	color: #4f4f4f;
}
.history-and-assessment {
	margin-top: 52px;
	display: flex;
	justify-content: space-between;
}
.history,
.assessment {
	padding: 26px 31px;
}
.history {
	padding-left: 0;
}
.history h1,
.assessment h1 {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: -0.02em;
	color: #2b3c4e;
}
.history p {
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;
	margin-bottom: 32px;
	color: #4f4f4f;
}
table {
	border-collapse: collapse;
}
td {
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 22px;
	text-align: center;
	padding: 22px 25px;
	color: #4f4f4f;
}
tr:hover {
	background: #ffffff;
	box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
	border-left: 7px solid #7557d3;
	border-radius: 8px;
	cursor: pointer;
}
.assessment {
	border: 1px solid #ececf9;
	border-radius: 4px;
	width: 482px;
	display: flex;
	flex-direction: column;
}
.assessment p {
	font-family: 'Nunito Sans';
	font-style: normal;
	font-weight: 400;
	font-size: 16.7273px;
	line-height: 23px;
	text-align: center;
	margin: auto;
	margin-top: 70px;
	width: 342.91px;
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
