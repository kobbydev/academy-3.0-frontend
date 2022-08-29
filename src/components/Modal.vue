<template>
	<div class="modal" @click="close">
		<div class="modal-content">
			<div class="profile-picture">
				<img :src="singleApplicant.image" alt="" />
			</div>
			<p class="modal-text">Personal Details</p>
			<hr />
			<div class="section-1">
				<div class="name-section">
					<label for="user-name">Name</label><br />
					<input
						type="text"
						name="user-name"
						readonly
						v-model="singleApplicant.firstName"
					/>
				</div>
				<div class="email-section">
					<label for="user-email">Email</label><br />
					<input type="text" name="user-email" readonly />
				</div>
			</div>
			<div class="section-2">
				<div class="address-section">
					<label for="user-address">Address</label><br />
					<input type="text" name="user-address" readonly />
				</div>
				<div class="university-section">
					<label for="user-university">University</label><br />
					<input type="text" name="user-university" readonly />
				</div>
			</div>
			<div class="section-3">
				<div class="course-section">
					<label for="user-course">Course of Study</label><br />
					<input type="text" name="user-course" readonly />
				</div>
				<div class="dob-section">
					<label for="user-dob">Date of Birth</label><br />
					<input type="text" name="user-dob" readonly />
				</div>
			</div>
			<div class="section-4">
				<div class="cgpa-section">
					<label for="user-cgpa">CGPA</label><br />
					<input type="text" name="user-cgpa" readonly />
				</div>
				<div class="cv-section">
					<label for="user-cv">CV</label><br />
					<input type="text" name="user-cv" readonly />
				</div>
			</div>
			<div class="buttons">
				<Button text="Approve" class="approve-btn" @click="approve" />
				<Button text="Decline" class="decline-btn" @click="decline" />
			</div>
		</div>
	</div>
</template>

<script>
import Button from './Button.vue';
// import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'ModalComponent',
	components: { Button },
	props: [
		'image',
		'cv',
		'emailAddress',
		'address',
		'courseOfStudy',
		'dateOfBirth',
		'cgpa',
		'university',
		'firstName',
		'lastName',
	],
	data() {
		return {
			applicantInfo: [],
		};
	},
	computed: {
		...mapGetters({
			singleApplicant: 'getSingleApplicant',
		}),
	},
	methods: {
		...mapActions({
			getSingleApplicant: 'getSingleApplicant',
		}),
		close() {
			this.$emit('close');
		},
		approve() {
			this.$emit('approve');
		},
		decline() {
			this.$emit('decline');
		},
		// async getSingleApplicant() {
		// 	const email = this.$store.getters.getApplicantInfo[0];
		// 	const token = localStorage.getItem('admintoken');
		// 	let response = await axios.get(
		// 		`http://localhost:8081/api/v1/applicant-info/${email}`,
		// 		{
		// 			headers: { token: token },
		// 		}
		// 	);
		// 	this.applicantInfo.push(response);
		// },
		// logA() {
		// 	console.log('a');
		// },
	},
};
</script>

<style scoped>
.section-1,
.section-2,
.section-3,
.section-4 {
	display: flex;
	justify-content: space-between;
	margin-bottom: 36px;
}
.modal {
	width: 100vw;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: flex-end;
	z-index: 1;
	/* align-items: center; */
}
.modal-content {
	background: #ffffff;
	position: absolute;
	right: 0;
	bottom: 0;
	top: 0;
	height: 100vh;
	z-index: 4;
	padding: 95px 58px 145px 48px;
	width: 600px;
	display: flex;
	flex-direction: column;
}
.profile-picture {
	width: 179px;
	height: 179px;
	margin-bottom: 42px;
}
.modal-text {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: #7d7d7d;
	margin-bottom: 14px;
}
hr {
	margin-bottom: 32px;
	background: #f2f2f2;
}
label {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #b1b1b1;
}
input {
	width: 231px;
	border: 1px solid #cdcfd6;
	border-radius: 4px;
	padding: 14px 0;
	cursor: pointer;
	outline: none;
}
input::placeholder {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	color: #4f4f4f;
}
.approve-btn {
	background: #7557d3;
	border-radius: 4px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	border: none;
	margin-right: 24px;
	color: #ffffff;
	padding: 14px 32px;
	cursor: pointer;
}
.buttons {
	margin: auto;
}
.decline-btn {
	background: white;
	border: 1px solid #cecece;
	border-radius: 4px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #4f4f4f;
	padding: 14px 36px;
	cursor: pointer;
}
</style>
