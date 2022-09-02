<template>
	<div class="assessment">
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
					<p v-if="this.applicantInfo.user.is_taken_test === false">
						Click the button below to start assessment, you have limited time
						for this test
					</p>
					<p v-if="this.applicantInfo.user.is_taken_test">Thank You</p>
				</div>
				<div class="timer">
					<h3>Timer</h3>
					<div class="second-timer">
						<h1>00<span>min</span>00<span>sec</span></h1>
					</div>
				</div>
			</div>

			<div class="counter">
				<img
					src="@/assets/counter.svg"
					alt=""
					v-if="
						assessmentDate > 0 &&
						this.applicantInfo.user.is_taken_test === false
					"
				/>
				<i
					class="uil uil-smile-beam"
					v-if="this.applicantInfo.user.is_taken_test"
				></i>
				<p
					v-if="
						assessmentDate > 0 &&
						this.applicantInfo.user.is_taken_test === false
					"
				>
					We have {{ assessmentDate }} days left until the next assessment<br />Watch
					this space
				</p>
				<p
					v-if="
						assessmentDate === 0 &&
						this.applicantInfo.user.is_taken_test === false
					"
					class="second-message"
				>
					You can now take your assessment
				</p>
				<p v-if="this.applicantInfo.user.is_taken_test" class="second-message">
					You have already taken the assessment. Please wait for feedback
				</p>
				<Button
					text="Take Assessment"
					v-show="this.applicantInfo.user.is_taken_test === false"
					:disabled="assessmentDate > 0"
					@click="this.$router.push({ name: 'questions' })"
					:class="{ enabled: assessmentDate === 0 }"
				/>
			</div>
		</div>
	</div>
</template>

<script>
import UserMenu from '../../components/UserMenu.vue';
import Button from '@/components/Button.vue';
import { mapActions, mapGetters } from 'vuex';
import { formatDistanceToNow, format, differenceInDays } from 'date-fns';
export default {
	name: 'AssessmentView',
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
		};
	},
	async created() {
		await this.getApplicant();
		console.log(this.getApplicant());
		console.log(this.assessmentDate);
	},
	computed: {
		...mapGetters({
			applicant: 'getApplicant',
		}),
		applicantInfo() {
			return this.applicant;
		},
		applicationTimeline() {
			return formatDistanceToNow(new Date(this.applicantInfo.user.createdAt));
		},
		applicationDate() {
			return format(new Date(this.applicantInfo.user.createdAt), 'dd.MM.yy');
		},
		assessmentDate() {
			return differenceInDays(new Date(2022, 8, 31, 0, 0), new Date());
		},
	},
	methods: {
		...mapActions({
			getApplicant: 'getApplicant',
		}),
	},
};
</script>

<style scoped>
.assessment {
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
}
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.counter {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 164px;
}
.heading {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 300;
	font-size: 43.5555px;
	line-height: 52px;
	letter-spacing: -0.02em;
	margin-bottom: 14px;
	color: #2b3c4e;
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
.counter p {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 16.7273px;
	line-height: 20px;
	text-align: center;
	margin: 24px 0;
	color: #4f4f4f;
	width: 342px;
}
button {
	background: #b1b1b1;
	border-radius: 4px;
	padding: 10px 42px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	border: none;
	color: #ffffff;
}
.enabled {
	background: #7557d3;
	cursor: pointer;
}
i {
	font-size: 100px;
	color: #7557d3;
}
</style>
