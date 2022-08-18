<template>
	<div class="questions">
		<div class="left-section">
			<UserMenu
				:linksData="links"
				:linkName="linkName"
				:linkIcon="linkIcon"
				:routerLink="routerLink"
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
						<h1>00<span>min</span>00<span>sec</span></h1>
					</div>
				</div>
			</div>
			<div class="questions-section">
				<h1 class="question-number">Question 1</h1>
				<p class="question-text">What is the purpose of HDR technology?</p>
				<div class="options">
					<div class="option-a">
						<label for="option-a"
							>A. To reduce the file size of images and videos.</label
						>
						<input type="radio" name="option-a" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import UserMenu from '../../components/UserMenu.vue';
export default {
	name: 'QuestionsView',
	components: { UserMenu },
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
					routerLink: '/',
				},
			],
		};
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
</style>
