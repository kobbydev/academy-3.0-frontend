<template>
	<div class="compose-assessment">
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
			<h1 class="heading">Compose Assessment</h1>
			<p class="question-number">15/30</p>
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
					></textarea>
				</div>
				<div class="options-section">
					<div class="options-a-b">
						<div class="options-a">
							<label for="option1" class="radio-labels">Option A</label><br />
							<label for="" class="radio-btn"
								><input type="radio" name="question-options" /> </label
							><br />
						</div>
						<div class="options-b">
							<label for="option1" class="radio-labels">Option B</label><br />
							<label for="" class="radio-btn"
								><input type="radio" name="question-options" /> </label
							><br />
						</div>
					</div>
					<div class="options-c-d">
						<div class="option-c">
							<label for="option1" class="radio-labels">Option C</label><br />
							<label for="" class="radio-btn"
								><input type="radio" name="question-options" /> </label
							><br />
						</div>
						<div class="option-d">
							<label for="option1" class="radio-labels">Option D</label><br />
							<label for="" class="radio-btn"
								><input type="radio" name="question-options" />
							</label>
						</div>
					</div>
				</div>
				<div class="buttons">
					<Button text="Previous" />
					<Button text="Next" /><br />
				</div>
				<Button text="Finish" type="submit" class="finish-btn" />
			</form>
		</div>
	</div>
</template>

<script>
import UserMenu from '../../components/UserMenu.vue';
import Button from '@/components/Button.vue';
export default {
	name: 'ComposeAssessment',
	components: { UserMenu, Button },
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
				{
					lId: 'logout',
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
