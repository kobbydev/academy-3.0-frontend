<template>
	<section class="whole-logInForm">
		<div class="container">
			<div
				:class="{ loggedIn: isShown, error: isErrorShown }"
				v-if="isShown || isErrorShown"
			>
				{{ message }}
				<i class="uil uil-exclamation-circle" v-if="isErrorShown"></i>
				<i class="uil uil-check-circle" v-if="isShown"></i>
			</div>
			<img src="@/assets/Enyata-logo.svg" alt="Enyata Logo" id="logo" />
			<h1>Applicant Log In</h1>
			<form action="#">
				<div class="label-inp">
					<label for="email">Email Address</label>
					<input type="email" name="email" v-model="userInfo.emailAddress" />
				</div>
				<div class="label-inp">
					<label for="password">Password</label>
					<input
						:type="[passToggle ? password : text]"
						name="password"
						id="pass"
						v-model="userInfo.password"
					/><span @click="change"
						><img
							src="@/assets/see-icon.svg"
							:class="[passToggle ? see1 : '']"
							alt="visibility icon" />
						<img
							src="@/assets/unsee-icon.svg"
							alt=""
							:class="[passToggle ? '' : unsee1]"
					/></span>
				</div>
			</form>
			<Button text="Sign In" @click="logIn"></Button>
			<div class="word">
				<h3>Don’t have an account yet? <a href="/signup">Sign Up</a></h3>
				<a href="/forgot-password" id="forgot">Forgot Password?</a>
			</div>
		</div>
	</section>
</template>

<script>
import Button from '@/components/Button.vue';
import axios from 'axios';
export default {
	name: 'LogInView',
	components: { Button },
	data() {
		return {
			userInfo: {
				emailAddress: '',
				password: '',
			},
			passToggle: true,
			see1: 'see1',
			unsee1: 'unsee1',
			password: 'password',
			text: 'text',
			emailAddress: '',
			message: '',
			isShown: false,
			isErrorShown: false,
		};
	},
	methods: {
		change() {
			this.passToggle = !this.passToggle;
		},
		logIn() {
			axios
				.post('http://localhost:8082/api/v1/user-login', this.userInfo)
				.then((response) => {
					localStorage.setItem('token', response.data.data.user.token);
					localStorage.setItem('userRole', response.data.data.user.role);
					console.log(response);
					// alert(response.data.message);
					this.message = 'Login Successful';
					this.isShown = true;
					setTimeout(() => {
						this.isShown = false;
						if (response.data.data.user.is_applied) {
							this.$router.push('/dashboard');
						} else {
							this.$router.push({ name: 'user-application' });
						}
					}, 2000);
					// if (response.data.data.user.is_applied) {
					// 	this.$router.push('/dashboard');
					// } else {
					// 	this.$router.push({ name: 'user-application' });
					// }
				})
				.catch((error) => {
					// alert('Email or Password wrong');
					this.message = 'Email or Password wrong';
					this.isErrorShown = true;
					setTimeout(() => {
						this.isErrorShown = false;
					}, 2000);
					console.log(error);
				});
		},
	},
};
</script>

<style scoped>
* {
	font-family: 'Lato';
}

.whole-logInForm {
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
}

.container {
	width: 26%;
	display: flex;
	flex-direction: column;
	align-items: center;
}

form {
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 22px;
	margin-top: 68px;
}

label {
	display: block;
	margin-bottom: 5px;
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #4f4f4f;
}

input {
	width: 100%;
	height: 48px;
	border: 1.5px solid #bdbdbd;
	border-radius: 4px;
	padding-left: 5px;
}

button {
	width: 100%;
	height: 48px;
	background: #7557d3;
	border-radius: 4px;
	border: none;
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	color: #ffffff;
	margin-top: 32px;
}

button:hover {
	cursor: pointer;
}

.word {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	/* gap: 71px; */
	justify-content: space-between;
	padding-top: 12px;
}

h3 {
	font-style: italic;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #4f4f4f;
}

.label-inp {
	position: relative;
}

h3 a {
	color: #1a2c56;
}

#forgot {
	height: 17px;
	font-style: italic;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #4f4f4f;
	text-decoration: none;
}

h1 {
	margin-top: 24px;
	font-style: italic;
	font-weight: 500;
	font-size: 24px;
	line-height: 29px;
	color: #2b3c4e;
}

#pass {
	padding-right: 35px;
}

span img {
	position: absolute;
	left: 92%;
	top: 40px;
	display: none;
}

.see1 {
	display: block;
}

.unsee1 {
	display: block;
}
.loggedIn,
.error {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	padding: 20px 20px;
	font-style: italic;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: green;
	background: rgb(171, 228, 171);
	border: none;
	/* border-radius: 10px; */
	margin-bottom: 20px;
	text-align: center;
}
.error {
	color: black;
	background: rgb(235, 146, 146);
}
</style>
