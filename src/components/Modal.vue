<template>
	<div class="modal">
		<div class="modal-background" @click="close"></div>
		<div class="modal-content">
			<div class="profile-picture">
				<img :src="singleApplicant.image" alt="" />
			</div>
			<p class="modal-text">Personal Details</p>
			<hr />
			<div class="section-1">
				<div class="name-section">
					<label for="user-name">Name</label><br />
					<input type="text" name="user-name" readonly v-model="fullName" />
				</div>
				<div class="email-section">
					<label for="user-email">Email</label><br />
					<input
						type="text"
						name="user-email"
						readonly
						v-model="singleApplicant.emailAddress"
					/>
				</div>
			</div>
			<div class="section-2">
				<div class="address-section">
					<label for="user-address">Address</label><br />
					<input
						type="text"
						name="user-address"
						readonly
						v-model="singleApplicant.address"
					/>
				</div>
				<div class="university-section">
					<label for="user-university">University</label><br />
					<input
						type="text"
						name="user-university"
						readonly
						v-model="singleApplicant.university"
					/>
				</div>
			</div>
			<div class="section-3">
				<div class="course-section">
					<label for="user-course">Course of Study</label><br />
					<input
						type="text"
						name="user-course"
						readonly
						v-model="singleApplicant.courseOfStudy"
					/>
				</div>
				<div class="dob-section">
					<label for="user-dob">Date of Birth</label><br />
					<input type="text" name="user-dob" readonly />
				</div>
			</div>
			<div class="section-4">
				<div class="cgpa-section">
					<label for="user-cgpa">CGPA</label><br />
					<input
						type="text"
						name="user-cgpa"
						readonly
						v-model="singleApplicant.cgpa"
					/>
				</div>
				<div class="cv-section">
					<label for="user-cv">CV</label><br />
					<input
						type="text"
						name="user-cv"
						readonly
						v-model="singleApplicant.cv"
					/>
				</div>
			</div>
			<div class="status-text" v-if="singleApplicant.app_status === 'Approved'">
				Application has already been approved
				<i class="uil uil-check-circle"></i>
			</div>
			<div class="status-text" v-if="singleApplicant.app_status === 'Declined'">
				Application has already been declined
				<i class="uil uil-exclamation-circle"></i>
			</div>
			<div class="buttons">
				<Button
					text="Approve"
					class="approve-btn"
					@click="approve"
					v-show="singleApplicant.app_status === 'Pending'"
				/>
				<Button
					text="Decline"
					class="decline-btn"
					@click="decline"
					v-show="singleApplicant.app_status === 'Pending'"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import Button from './Button.vue';
import { mapActions, mapGetters } from 'vuex';
import { format, differenceInYears } from 'date-fns';
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
		fullName() {
			return (
				this.singleApplicant.firstName + ' ' + this.singleApplicant.lastName
			);
		},
		dateFormat() {
			return (
				this.dateOfBirthConversion(this.singleApplicant.dateOfBirth) +
				'-' +
				this.age(this.singleApplicant.dateOfBirth)
			);
		},
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
.section-1,
.section-2,
.section-3,
.section-4 {
	display: flex;
	justify-content: space-between;
	margin-bottom: 36px;
}
.modal-background {
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
.profile-picture img {
	width: 179px;
	height: 179px;
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
	padding-left: 16px;
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
.status-text {
	font-family: 'Lato';
	font-style: italic;
	font-weight: 500;
	font-size: 16px;
	text-align: center;
}
input[type='text'] {
	font-family: 'Lato';
	font-style: normal;
}
</style>
