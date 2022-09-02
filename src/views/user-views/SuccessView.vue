<template>
	<div class="success">
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
					<p>Thank you</p>
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
			<div class="display">
				<img src="@/assets/confetti.svg" alt="" />
				<p>
					We have received your assessment test, we will get back to you soon.
					Best of luck
				</p>
				<Button text="Home" @click="this.$router.push({ name: 'dashboard' })" />
			</div>
		</div>
	</div>
</template>

<script>
import UserMenu from '../../components/UserMenu.vue';
import Button from '../../components/Button.vue';
import { mapActions, mapGetters } from 'vuex';
import intervalToDuration from 'date-fns/intervalToDuration';
export default {
	name: 'SuccessView',
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
		console.log(this.endTime);
	},
	computed: {
		...mapGetters({
			applicant: 'getApplicant',
		}),
		applicantInfo() {
			return this.applicant;
		},
		getTime() {
			const endTime = localStorage.getItem('endTime');
			const timer = intervalToDuration({ start: 0, end: endTime * 1000 });
			return {
				minutes: timer.minutes.toString().padStart(2, '0'),
				seconds: timer.seconds.toString().padStart(2, '0'),
			};
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
.success {
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
.display {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 128px;
}
.display p {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 16.7273px;
	line-height: 20px;
	text-align: center;
	margin: 34px 0;
	color: #4f4f4f;
	width: 524px;
}
button {
	background: #7557d3;
	border-radius: 4px;
	padding: 10px 42px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	border: none;
	cursor: pointer;
	color: #ffffff;
}
</style>
