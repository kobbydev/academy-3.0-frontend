<template>
	<div class="assessment-history">
		<div class="left-section">
			<UserMenu
				class="user-menu"
				:linksData="links"
				:profilePic="adminDetails?.admin.profileImage"
				:userFirstName="adminDetails?.admin.firstName"
				:userLastName="adminDetails?.admin.lastName"
				:userEmail="adminDetails?.admin.emailAddress"
			/>
		</div>
		<div class="right-section">
			<h1 class="heading">Assessment History</h1>
			<div class="table-container">
				<table>
					<tr class="table-header">
						<th>Batch</th>
						<th>Date Composed</th>
						<th>No of Questions</th>
						<th>Time Allocated</th>
						<th>Status</th>
					</tr>
					<tr
						class="table-body"
						v-for="(batch, index) in allBatches"
						:key="index"
					>
						<td>{{ batch.batchId }}</td>
						<td>{{ composeDate }}</td>
						<td>{{ numberOfQuestions }}</td>
						<td>{{ minute }} mins {{ seconds }} seconds</td>
						<td>Taken</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
import UserMenu from '../../components/UserMenu.vue';
import { mapActions, mapGetters } from 'vuex';
import { format } from 'date-fns';
export default {
	name: 'AssessmentHistory',
	components: { UserMenu },
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
			minute: 0,
			seconds: 0,
		};
	},
	async created() {
		await this.getAdminInfo();
		await this.getQuestionsForAdmin();
		await this.getAllBatches();
		this.minute = Math.trunc(this.adminDetails.admin.timer / 60);
		this.seconds = this.adminDetails.admin.timer % 60;
	},
	computed: {
		...mapGetters({
			adminInfo: 'getAdminInfo',
			questionsForAdmin: 'getQuestionsForAdmin',
			allBatches: 'getAllBatches',
		}),
		adminDetails() {
			return this.adminInfo;
		},
		numberOfQuestions() {
			return this.questionsForAdmin.length;
		},
		composeDate() {
			return format(new Date(this.questionsForAdmin[0].createdAt), 'dd/MM/yy');
		},
	},
	methods: {
		...mapActions({
			getAdminInfo: 'getAdminInfo',
			getQuestionsForAdmin: 'getQuestionsForAdmin',
			getAllBatches: 'getAllBatches',
		}),
	},
};
</script>

<style scoped>
.assessment-history {
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
	padding: 137px 97px 86px 75px;
	overflow-y: scroll;
}
.right-section p {
	font-family: 'Lato';
	font-style: italic;
	font-weight: 400;
	font-size: 13px;
	line-height: 16px;
	color: #4f4f4f;
	margin-bottom: 38px;
}
.heading {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 300;
	font-size: 43.5555px;
	line-height: 52px;
	letter-spacing: -0.02em;
	color: #2b3c4e;
}
table {
	border-collapse: collapse;
	width: 100%;
}
.table-container {
	background: #ffffff;
	box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
	border-radius: 8px;
	overflow-y: scroll;
	padding: 42px 64px 53px 31px;
}
td {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	padding: 24px 26px;
	color: #4f4f4f;
	margin-top: 20px;
}
.table-body:hover {
	background: #ffffff;
	box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
	border-left: 7px solid #7557d3;
	border-radius: 8px;
	margin-top: 20px;
	cursor: pointer;
}
.table-header:hover {
	background: #2b3c4e;
}
.table-header {
	background: #2b3c4e;
}
th {
	font-family: 'Lato';
	font-size: 14px;
	line-height: 17px;
	text-align: center;
	color: #ffffff;
	padding: 14px 32px;
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
