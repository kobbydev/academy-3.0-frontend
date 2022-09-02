<template>
	<div class="questions">
		<div class="left-section">
			<UserMenu
				:linksData="links"
				:profilePic="applicantInfo?.user.image"
				:userEmail="applicantInfo?.user.emailAddress"
				:userFirstName="applicantInfo?.user.firstName"
				:userLastName="applicantInfo?.user.lastName"
			/>
		</div>
		<div class="right-section">
			<div class="header">
				<div class="header-">
					<h1 class="heading">Take Assessment</h1>
					<p>
						Click the finish button below to submit assessment, you can go back
						at any time to edit your answers.
					</p>
				</div>
				<div class="timer">
					<h3>Timer</h3>
					<div class="second-timer">
						<h1>
							{{ getTime.minutes }}<span>min</span>{{ getTime.seconds
							}}<span>sec</span>
						</h1>
					</div>
				</div>
			</div>
			<div
				class="questions-section"
				v-for="(question, index) in questions.slice(index, index + 1)"
				:key="index"
			>
				<h1 class="question-number">Question {{ index + 1 }}</h1>
				<p class="question-text">{{ question.question }}</p>
				<div class="options">
					<div class="option-a">
						<input
							type="radio"
							name="options"
							:value="question.optionA"
							id="optionA"
							@change="selectAnswer($event)"
							:checked="answer === 'optionA'"
						/>
						<label for="optionA">{{ question.optionA }}</label>
					</div>
					<div class="option-b">
						<input
							type="radio"
							name="options"
							:value="question.optionB"
							id="optionB"
							@change="selectAnswer($event)"
							:checked="answer === 'optionB'"
						/>
						<label for="optionB">{{ question.optionB }}</label>
					</div>
					<div class="option-c">
						<input
							type="radio"
							name="options"
							:value="question.optionC"
							id="optionC"
							@change="selectAnswer($event)"
							:checked="answer === 'optionC'"
						/>
						<label for="optionC">{{ question.optionC }}</label>
					</div>
					<div class="option-d">
						<input
							type="radio"
							name="options"
							:value="question.optionD"
							id="optionD"
							@change="selectAnswer($event)"
							:checked="answer === 'optionD'"
						/>
						<label for="optionD">{{ question.optionD }}</label>
					</div>
				</div>
			</div>
			<div class="buttons">
				<Button text="Previous" class="previous-btn" @click="previous" />
				<Button text="Next" class="next-btn" @click="next" />
			</div>
			<Button text="Finish" class="finish-btn" @click="finish" />
		</div>
	</div>
</template>

<script>
import UserMenu from '../../components/UserMenu.vue';
import Button from '@/components/Button.vue';
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
import intervalToDuration from 'date-fns/intervalToDuration';
export default {
	name: 'QuestionsView',
	components: { UserMenu, Button },
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
			],
			index: 0,
			questionsArray: [],
			answer: '',
			score: 0,
			time: 0,
			endTime: 0,
		};
	},
	async created() {
		await this.getApplicant();
		await this.getQuestions();
		this.startTimer(), (this.endTime = setInterval(this.startTimer, 1000));
		console.log(this.applicant.user.timer);
	},
	computed: {
		...mapGetters({
			applicant: 'getApplicant',
			questions: 'getQuestions',
		}),
		applicantInfo() {
			return this.applicant;
		},
		getTime() {
			const timer = intervalToDuration({ start: 0, end: this.time * 1000 });
			return {
				minutes: timer.minutes.toString().padStart(2, '0'),
				seconds: timer.seconds.toString().padStart(2, '0'),
			};
		},
	},
	watch: {
		time(value) {
			if (value >= this.applicant.user.time) {
				this.stopTimer();
				this.finish();
			}
		},
	},
	methods: {
		...mapActions({
			getApplicant: 'getApplicant',
			getQuestions: 'getQuestions',
		}),
		startTimer() {
			this.time++;
		},
		stopTimer() {
			clearInterval(this.endTime);
			localStorage.setItem('endTime', this.time);
		},
		next() {
			this.questionsArray[this.index] = this.answer;
			if (this.index === this.questions.length) {
				return false;
			} else {
				this.index++;
			}
			if (this.index < this.questionsArray.length) {
				this.answer = this.questionsArray[this.index];
			} else {
				this.answer = '';
			}
		},
		previous() {
			this.questionsArray[this.index] = this.answer;
			if (this.index === 0) {
				this.index = 0;
			} else {
				this.index--;
			}
			this.answer = this.questionsArray[this.index];
		},
		selectAnswer(event) {
			this.answer = event.target.id;
		},
		finish() {
			this.stopTimer();
			let overallScore = 0;
			this.questionsArray.forEach((item, index) => {
				if (item === this.questions[index].correctAnswer) {
					overallScore += 1;
				}
			});
			this.score = overallScore;
			// const userId = localStorage.getItem('userLoginId');
			const userId = this.applicantInfo.user._id;
			const token = localStorage.getItem('token');
			axios
				.put(
					`http://localhost:8081/api/v1/user/update/${userId}`,
					{ scores: this.score, is_taken_test: true },
					{
						headers: { token: token },
					}
				)
				.then((response) => {
					console.log(response);
					this.$router.push({ name: 'success' });
				})
				.catch((error) => console.log(error));
		},
	},
};
</script>

<style scoped>
.questions {
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
	padding: 107px 82px 0px 47px;
	overflow-y: scroll;
	display: flex;
	flex-direction: column;
}
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
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
.header p {
	font-family: 'Lato';
	font-style: italic;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #2b3c4e;
}
.timer h3 {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #4f4f4f;
}
.second-timer h1 {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 300;
	font-size: 48px;
	line-height: 58px;
	text-align: center;
	color: #2b3c4e;
}
span {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	text-align: center;
	color: #4f4f4f;
}
.buttons {
	margin-top: 86px;
	padding: 0 123px 0 117px;
	display: flex;
	justify-content: space-between;
}
.previous-btn {
	border: 1px solid rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	background: white;
	color: #211f26;
	padding: 10px 31px;
}
.next-btn {
	background: #7557d3;
	border-radius: 4px;
	border: none;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	padding: 10px 44px;
}
.questions-section {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 64px;
}
.finish-btn {
	margin: auto;
	margin-top: 75px;
	background: #cecece;
	border-radius: 4px;
	border: none;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	padding: 10px 81px;
	cursor: pointer;
}
input[type='radio']:checked ~ label {
	background: #31d283;
	padding: 6px 15px;
}
.question-number {
	font-family: 'Lato';
	font-style: italic;
	font-weight: 500;
	font-size: 14px;
	line-height: 17px;
	color: #2b3c4e;
	margin-bottom: 14px;
}
.question-text {
	font-family: 'Lato';
	font-style: italic;
	font-weight: 500;
	font-size: 24px;
	line-height: 29px;
	color: #2b3c4e;
	margin-bottom: 48px;
}
#optionB,
#optionC,
#optionD {
	margin-top: 37px;
}
label {
	font-family: 'Lato';
	font-style: italic;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #2b3c4e;
	margin-left: 42px;
	padding: 6px 15px;
	cursor: pointer;
}
input[type='radio'] {
	border: 1px solid #2b3c4e;
	-webkit-appearance: none;
	width: 8px;
	height: 8px;
	cursor: pointer;
}
input[type='radio']:focus {
	outline-color: transparent;
}
input[type='radio']:checked {
	background: #2b3c4e;
}
</style>
