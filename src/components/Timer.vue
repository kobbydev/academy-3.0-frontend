<template>
	<div class="timer">
		<h1 class="timer-heading">Timer Setting</h1>
		<hr />
		<p>Set Time</p>
		<div class="time-selection">
			<div class="minute-selection">
				<select name="batch" id="minute-select" v-model="minutes">
					<!-- <option value="">000</option> -->
					<option
						:value="minute"
						v-for="(minute, index) in getMinutes"
						:key="index"
					>
						{{ minute }}
					</option>
				</select>
				<p>min</p>
			</div>
			<div class="seconds-selection">
				<select name="batch" id="minute-select" v-model="seconds">
					<!-- <option value="">000</option> -->
					<option
						:value="seconds"
						v-for="(seconds, index) in getSeconds"
						:key="index"
					>
						{{ seconds }}
					</option>
				</select>
				<p>sec</p>
			</div>
		</div>
		<Button text="Save" class="save-btn" @click="save" />
	</div>
</template>

<script>
import Button from './Button.vue';
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';
export default {
	name: 'TimerComponent',
	components: { Button },
	data() {
		return {
			minutes: '',
			seconds: '',
		};
	},
	async created() {
		await this.getAdminInfo();
		this.minutes = Math.trunc(this.getAdminDetails.admin.timer / 60);
		this.seconds = this.getSecs;
		console.log(this.minutes);
		console.log(this.seconds);
		// console.log(this.getAdminDetails.admin);
	},
	computed: {
		...mapGetters({
			adminInfo: 'getAdminInfo',
		}),
		getSecs() {
			let sec = this.getAdminDetails.admin.timer % 60;
			if (sec < 10) {
				sec = sec.toString().padStart(3, '0');
			} else if (sec > 9) {
				sec = sec.toString().padStart(3, '0');
			} else {
				sec = this.getAdminDetails.admin.timer % 60;
			}
			return sec;
		},
		getAdminDetails() {
			return this.adminInfo;
		},
		getMinutes() {
			let minutesArray = [];
			for (let i = 0; i <= 60; i++) {
				if (i < 10) {
					i = i.toString().padStart(2, '0');
				}
				minutesArray.push(i);
			}
			return minutesArray;
		},
		getSeconds() {
			let secondsArray = [];
			for (let i = 0; i <= 60; i++) {
				i = i.toString().padStart(3, '0');
				secondsArray.push(i);
			}
			return secondsArray;
		},
	},
	methods: {
		...mapActions({
			getAdminInfo: 'getAdminInfo',
		}),
		save() {
			const token = localStorage.getItem('admintoken');
			const timerInSeconds = Number(this.minutes * 60) + Number(this.seconds);
			console.log(timerInSeconds);
			axios
				.put(
					'http://localhost:8081/api/v1/admin/update-timer',
					{ timer: timerInSeconds },
					{
						headers: { token: token },
					}
				)
				.then((response) => console.log(response))
				.catch((error) => console.log(error));
		},
	},
};
</script>

<style scoped>
.timer-heading {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: -0.4px;

	color: #4a4a4a;
	margin-bottom: 15px;
}
.timer p {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 17px;
	color: #2b3c4e;
	margin-top: 99px;
}
hr {
	background: #ffffff;
	border: 1px solid #f2f2f2;
}
select {
	-webkit-appearance: none;
	-moz-appearance: none;
	background-image: url('../assets/select-icon.svg');
	background-position: right;
	padding: 16px;
	padding-left: 0;
	background-size: auto;
	background-repeat: no-repeat;
	border: none;
	font-family: 'Lato';
	width: 120px;
	font-style: normal;
	font-weight: 300;
	font-size: 48px;
	line-height: 58px;
	outline: none;
	color: #2b3c4e;
	cursor: pointer;
	margin-right: 40px;
}
option {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 300;
	font-size: 28px;
}
select span {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 14px;
	text-align: center;
	color: #4f4f4f;
}
.save-btn {
	margin-top: 40px;
	background: #7557d3;
	border-radius: 3px;
	font-family: 'Karla';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;
	padding: 10px 47px;
	border: none;
	letter-spacing: -0.5px;
	color: #ffffff;
}
.time-selection {
	display: flex;
}
.minute-selection p,
.seconds-selection p {
	position: relative;
	left: -75px;
	bottom: 35px;
}
.minute-selection,
.seconds-selection {
	display: flex;
}
</style>
