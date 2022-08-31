<template>
	<div class="assessment">
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
						Click the button below to start assessment, you have limited time
						for this test
					</p>
				</div>
				<div class="timer">
					<h3>Timer</h3>
					<div class="second-timer">
						<h1>00<span>min</span>00<span>sec</span></h1>
					</div>
				</div>
			</div>

			<div class="counter">
				<img src="@/assets/counter.svg" alt="" />
				<p>
					We have 4 days left until the next assessment<br />Watch this space
				</p>
				<Button text="Take Assessment" />
			</div>
		</div>
	</div>
</template>

<script>
import UserMenu from '../../components/UserMenu.vue';
import Button from '@/components/Button.vue';
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
				{
					linkName: 'Logout',
					linkIcon: require('../../assets/logout-icon.svg'),
					routerLink: '/',
				},
			],
		};
	},
	computed:{
		_seconds:()=>1000,
		_minutes(){
			return this._seconds* 60;
		}
	},

	mounted() {
		this.showRemaining()
	},

	method: {
		showRemaining(){
			const timer = setInterval(()=>{
				const now = new Date(); 
				const end = new Date(2022, 8, 30, 10, 10);
				const distance = end.getTime() - now.getTime();

				if(distance<0){
					clearInterval(timer);
					return;
				}

				const minutes = Math.floor(distance/this._minutes);
				const seconds = Math.floor((distance%this._minutes)/this._seconds);
				  
				this.displayMinutes = minutes < 10 ? "0" + minutes : minutes;
				this.displayMinutes = seconds < 10 ? "0" + seconds : seconds;
			}, 1000)
		}
	}
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
</style>
