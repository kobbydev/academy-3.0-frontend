<template>
	<div class="compose-assessment">
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
			<h1 class="heading">Compose Assessment</h1>
			<p class="question-number">{{ index + 1 }}/30</p>
			<form>
				<div class="section-1">
					<label class="custom-file-upload">
						<input type="file" />
						+ Choose file
					</label>
				</div>
				<div class="section-2">
					<label for="questions">Questions</label><br />
					<textarea
						name="questions"
						id="questions"
						cols="30"
						rows="10"
						v-model="questionForm.question"
					></textarea>
				</div>
				<div class="options-section">
					<div class="options-a-b">
						<div class="options-a">
							<label
								for="option-a"
								class="radio-labels"
								@click="selectCorrectAnswer('optionA')"
								>Option A</label
							><br />

							<input
								type="text"
								name="question-options"
								v-model="questionForm.optionA"
								id="option-a"
								:class="{ chosen: questionForm.correctAnswer === 'optionA' }"
							/>
							<br />
						</div>
						<div class="options-b">
							<label
								for="option-b"
								class="radio-labels"
								@click="selectCorrectAnswer('optionB')"
								>Option B</label
							><br />

							<input
								type="text"
								name="question-options"
								v-model="questionForm.optionB"
								id="option-b"
								:class="{ chosen: questionForm.correctAnswer === 'optionB' }"
							/><br />
						</div>
					</div>
					<div class="options-c-d">
						<div class="option-c">
							<label
								for="option-c"
								class="radio-labels"
								@click="selectCorrectAnswer('optionC')"
								>Option C</label
							><br />

							<input
								type="text"
								name="question-options"
								v-model="questionForm.optionC"
								id="option-c"
								:class="{ chosen: questionForm.correctAnswer === 'optionC' }"
							/><br />
						</div>
						<div class="option-d">
							<label
								for="option-d"
								class="radio-labels"
								@click="selectCorrectAnswer('optionD')"
								>Option D</label
							><br />

							<input
								type="text"
								name="question-options"
								v-model="questionForm.optionD"
								id="option-d"
								:class="{ chosen: questionForm.correctAnswer === 'optionD' }"
							/>
						</div>
					</div>
				</div>
				<div class="buttons">
					<Button text="Previous" @click="previous" type="button" />
					<Button text="Next" @click="next" type="button" /><br />
				</div>
				<Button
					text="Finish"
					type="button"
					class="finish-btn"
					@click="finish"
				/>
			</form>
		</div>
	</div>
</template>

<script>
import UserMenu from '../../components/UserMenu.vue';
import Button from '@/components/Button.vue';
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'ComposeAssessment',
	components: { UserMenu, Button },
	data() {
		return {
			isChosen: false,
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
			index: 0,
			questions: [],
			questionForm: {
				question: '',
				optionA: '',
				optionB: '',
				optionC: '',
				optionD: '',
				correctAnswer: '',
			},
			questionTemplate: {
				question: '',
				optionA: '',
				optionB: '',
				optionC: '',
				optionD: '',
				correctAnswer: '',
			},
		};
	},
	async created() {
		await this.getAdminInfo();
	},
	computed: {
		...mapGetters({
			adminInfo: 'getAdminInfo',
		}),
		adminDetails() {
			return this.adminInfo;
		},
	},
	methods: {
		...mapActions({
			getAdminInfo: 'getAdminInfo',
		}),
		next() {
			if (this.questionForm.question !== '') {
				this.questions[this.index] = this.questionForm;
				// if (this.questions[this.index]) {
				// 	!this.question.push(this.questionForm);
				// }
				// this.questions.push(this.questionForm);
				this.index++;
				// this.questionForm = this.questionTemplate;
				if (this.index < this.questions.length) {
					this.questionForm = { ...this.questions[this.index] };
				} else {
					this.questionForm = { ...this.questionTemplate };
				}
			}
		},
		previous() {
			if (this.questionForm.question !== '') {
				this.questions[this.index] = this.questionForm;
			}
			if (this.index === 0) {
				this.index = 0;
			} else {
				this.index--;
			}
			this.questionForm = { ...this.questions[this.index] };
		},
		finish() {
			const token = localStorage.getItem('admintoken');
			this.questions.forEach((item) => {
				axios
					.post('http://localhost:8081/api/v1/admin/create-assessment', item, {
						headers: { token: token },
					})
					.then((response) => console.log(response))
					.catch((error) => console.log(error));
			});
		},
		selectCorrectAnswer(value) {
			this.questionForm.correctAnswer = value;
		},
	},
};
</script>

<style scoped>
.compose-assessment {
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
	padding: 111px 93px 93px 79px;
	overflow-y: scroll;
}
.heading {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 300;
	font-size: 43.5555px;
	line-height: 52px;
	margin-bottom: 62px;
	letter-spacing: -0.02em;
	color: #2b3c4e;
}
.question-number {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	margin-bottom: 21px;
	color: #2b3c4e;
}
form {
	display: flex;
	flex-direction: column;
}
input[type='radio'] {
	border: 1.5px solid #2b3c4e;
	-webkit-appearance: none;
	height: 41px;
	width: 456px;
	border-radius: 4px;
	cursor: pointer;
}
input[type='radio']:checked {
	background: #31d283 no-repeat center center;
	background-size: 59px 59px;
}
.chosen {
	background: #31d283;
}
input[type='radio']:focus {
	outline-color: transparent;
}
.options-a-b {
	margin-bottom: 25px;
}
.options-a-b,
.options-c-d {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.options-section {
	margin-top: 25px;
}

input[type='file'] {
	display: none;
}
input[type='text'] {
	border: 1.5px solid #2b3c4e;
	border-radius: 4px;
	height: 41px;
	width: 456px;
	padding: 10px;
	font-family: 'Lato';
	font-style: normal;
}
label {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #2b3c4e;
	margin-bottom: 5px;
}
.radio-labels {
	margin-bottom: 5px;
}
.section-1 {
	margin-bottom: 25px;
}
.custom-file-upload {
	border: 1.55172px dashed #2b3c4e;
	border-radius: 6.2069px;
	display: inline-block;
	cursor: pointer;
	width: 456px;
	padding: 46px 181px 40px 167px;
	font-family: 'Avenir Roman';
	font-size: 16px;
	line-height: 22px;
	color: #2b3c4e;
	margin-right: 64px;
}
textarea {
	width: 100%;
	padding: 10px;
	font-family: 'Lato';
	font-style: normal;
}
.buttons {
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 55px;
	margin-top: 52px;
	width: 100%;
}
button {
	background: #2b3c4e;

	border-radius: 4px;
	border: none;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	padding: 10px 31px;
	margin-left: 85px;
	color: #ffffff;
	cursor: pointer;
}
button:nth-of-type(2) {
	padding: 10px 46px;
	position: relative;
	right: -20%;
}
.finish-btn {
	background: #cecece;
	padding: 10px 81px;
	margin: auto;
}
</style>
