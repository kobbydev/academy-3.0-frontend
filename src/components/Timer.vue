<template>
	<div class="timer">
		<h1 class="timer-heading">Timer Setting</h1>
		<hr />
		<p>Set Time</p>
		<div class="time-selection">
			<select name="batch" id="minute-select">
				<option value="">000 <span>min</span></option>
				<option value="batch-1">001 <span>min</span></option>
				<option value="batch-2">Entries - Batch 2</option>
			</select>
			<select name="batch" id="second-select">
				<option value="">000 <span>sec</span></option>
				<option value="batch-1">001 <span>sec</span></option>
				<option value="batch-2">Entries - Batch 2</option>
			</select>
		</div>
		<Button text="Save" class="save-btn" />
	</div>
</template>

<script>
import Button from './Button.vue';
export default {
	name: 'TimerComponent',
	components: { Button },
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
	width: 200px;
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
</style>
