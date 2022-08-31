<template>
	<div class="application-entries">
		<Modal
			v-show="isModalVisible"
			@close="closeModal"
			@approve="approveModal"
			@decline="declineModal"
		/>
		<ChoiceModal
			@close="closeChoiceModal"
			v-show="isApproveModalVisible"
			text="Are you sure you want to approve this application?"
		/>
		<DeclineChoiceModal
			@close="closeChoiceModal"
			v-show="isDeclineModalVisible"
			text="Are you sure you want to decline this application?"
		/>
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
			<select name="batch" id="batch-select">
				<option
					value="{{ batch.batchId}}"
					v-for="(batch, index) in allBatches"
					:key="index"
				>
					Entries - {{ batch.batchId }}
				</option>
				<option value="batch-2">Entries - Batch 2</option>
			</select>
			<p>Comprises of all that applied for batch 2</p>
			<table>
				<tr class="table-header">
					<th>Name</th>
					<th>Email</th>
					<th class="table-sort">
						DOB - Age <img src="../../assets/sort-icon.svg" alt="" />
					</th>
					<th>Address</th>
					<th>University</th>
					<th class="table-sort">
						CGPA <img src="../../assets/sort-icon.svg" alt="" />
					</th>
				</tr>
				<tr
					class="table-body"
					@click="
						showModal();
						getEmail(index);
					"
					v-for="(applicant, index) in allApplicants"
					:key="index"
				>
					<td>{{ applicant.firstName }} {{ applicant.lastName }}</td>
					<td>{{ applicant.emailAddress }}</td>
					<td>
						{{ dateOfBirthConversion(applicant.dateOfBirth) }} -
						{{ age(applicant.dateOfBirth) }}
					</td>
					<td>{{ applicant.address }}</td>
					<td>{{ applicant.university }}</td>
					<td>{{ applicant.cgpa }}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
import UserMenu from '../../components/UserMenu.vue';
import Modal from '@/components/Modal.vue';
import { format, differenceInYears } from 'date-fns';
import ChoiceModal from '@/components/ChoiceModal.vue';
import DeclineChoiceModal from '@/components/DeclineChoiceModal.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'ApplicationEntries',
	components: { UserMenu, Modal, ChoiceModal, DeclineChoiceModal },
	data() {
		return {
			selectTerm: '',
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
			isModalVisible: false,
			isApproveModalVisible: false,
			isDeclineModalVisible: false,
		};
	},
	async created() {
		await this.getAllApplicants();
		await this.getAllBatches();
		// console.log(this.getEmail());
	},
	async updated() {
		// const id = localStorage.getItem('userId');
		const id = this.$store.getters.getApplicantInfo[0];
		await this.getSingleApplicant(id);
		console.log(this.singleApplicant);
	},
	computed: {
		...mapGetters({
			allApplicants: 'getAllApplicants',
			allBatches: 'getAllBatches',
			singleApplicant: 'getApplicant',
		}),
		dateOfBirth() {
			return (dateOb) => {
				format(new Date(dateOb), 'MM/dd/yy');
			};
		},
	},
	methods: {
		...mapActions({
			getAllApplicants: 'getAllApplicants',
			getAllBatches: 'getAllBatches',
			getSingleApplicant: 'getSingleApplicant',
		}),
		showModal() {
			this.isModalVisible = true;
		},
		approveModal() {
			this.isModalVisible = false;
			this.isApproveModalVisible = true;
		},
		declineModal() {
			this.isModalVisible = false;
			this.isDeclineModalVisible = true;
		},
		closeModal() {
			this.isModalVisible = false;
			// localStorage.removeItem('userEmail');
		},
		closeChoiceModal() {
			this.isApproveModalVisible = false;
			this.isDeclineModalVisible = false;
		},
		getEmail(index) {
			const result1 = this.allApplicants[index]._id;
			this.$store.commit('setId', this.allApplicants[index]._id);
			// const result = this.$store.getters.getApplicantInfo[0];
			localStorage.removeItem('userId');
			localStorage.setItem('userId', result1);
			console.log(result1);
		},
		dateOfBirthConversion(date) {
			return format(new Date(date), 'MM/dd/yy');
		},
		age(date) {
			return differenceInYears(new Date(), new Date(date));
		},
	},
};
</script>

<style scoped>
.application-entries {
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
select {
	-webkit-appearance: none;
	-moz-appearance: none;
	background-image: url('../../assets/select-icon.svg');
	background-position: right;
	padding: 16px;
	padding-left: 0;
	background-size: auto;
	background-repeat: no-repeat;
	border: none;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 300;
	font-size: 43.5555px;
	line-height: 52px;
	letter-spacing: -0.02em;
	outline: none;
	color: #2b3c4e;
	cursor: pointer;
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
table {
	border-collapse: collapse;
	width: 100%;
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
.table-sort {
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
