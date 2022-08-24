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
						<input
							type="radio"
							name="options"
							value="A. To reduce the file size of images and videos."
							id="option-a"
						/>
						<label for="option-a"
							>A. To reduce the file size of images and videos.</label
						>
					</div>
					<div class="option-b">
						<input
							type="radio"
							name="options"
							value="B. To speed up 3D rendering performance."
							id="option-b"
						/>
						<label for="option-b"
							>B. To speed up 3D rendering performance.</label
						>
					</div>
					<div class="option-c">
						<input
							type="radio"
							name="options"
							value="C. To support higher video resolutions."
							id="option-c"
						/>
						<label for="option-c"
							>C. To support higher video resolutions.</label
						>
					</div>
					<div class="option-d">
						<input
							type="radio"
							name="options"
							value="D. To display more colors in images and videos"
							id="option-d"
						/>
						<label for="option-d"
							>D. To display more colors in images and videos</label
						>
					</div>
				</div>
			</div>
			<div class="buttons">
				<Button text="Previous" class="previous-btn" />
				<Button text="Next" class="next-btn" />
			</div>
			<Button text="Finish" class="finish-btn" />
		</div>
	</div>
</template>

<script>
import UserMenu from '../../components/UserMenu.vue';
import Button from '@/components/Button.vue';
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
#option-b,
#option-c,
#option-d {
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
