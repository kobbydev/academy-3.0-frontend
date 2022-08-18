<template>
	<div class="profile">
		<div class="header">
			<h1 class="profile-heading">Profile Setting</h1>
			<Button text="Edit" class="edit-btn" />
		</div>
		<hr />
		<div class="upload-section">
			<img src="../assets/account.svg" alt="" />
			<Button text="Upload new image" class="upload-btn" />
			<Button text="x Remove" class="remove-btn" />
		</div>
		<form>
			<div class="section-1">
				<div class="name-section">
					<label for="name">Name</label><br />
					<input type="text" name="name" />
				</div>
				<div class="email-section">
					<label for="email">Email</label><br />
					<input type="email" name="email" />
				</div>
				<div class="phone-section">
					<label for="phone">Phone Number</label><br />
					<input type="phone" name="phone" />
				</div>
			</div>
			<div class="section-2">
				<div class="country-section">
					<label for="country">Country</label><br />
					<input type="text" name="country" />
				</div>
				<div class="address-section">
					<label for="address">Address</label><br />
					<input type="text" name="address" />
				</div>
			</div>
			<Button text="Save" class="save-btn" />
		</form>
	</div>
</template>

<script>
import Button from './Button.vue';
export default {
	name: 'ProfileCOmponent',
	components: { Button },
};
</script>

<style scoped>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.profile-heading {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: -0.4px;
	color: #4a4a4a;
}
.edit-btn {
	border: 1px solid #7557d3;
	border-radius: 3px;
	background: none;
	font-family: 'Karla';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;
	letter-spacing: -0.5px;
	color: #7557d3;
	padding: 10px 50px;
}
hr {
	margin-top: 12px;
	background: #ffffff;
	border: 1px solid #f2f2f2;
}
form {
	display: flex;
	flex-direction: column;
}
.upload-section {
	margin-top: 56px;
	margin-bottom: 44px;
	display: flex;
	align-items: center;
}
.upload-btn {
	border: none;
	background: none;
	padding: 10px 20px;
	cursor: pointer;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;
	letter-spacing: -0.117188px;
	text-decoration-line: underline;
	color: #333758;
	opacity: 0.5;
}
.remove-btn {
	border: none;
	background: none;
	padding: 10px 20px;
	cursor: pointer;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;
	letter-spacing: -0.117188px;
	color: #ff5722;
}
.section-1 {
	display: flex;
	justify-content: space-between;
}
label {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;
	letter-spacing: -0.117188px;
	color: #333758;
	opacity: 0.5;
	margin-bottom: 8px;
}
.section-1 input {
	background: #7557d3;
	opacity: 0.04;
	width: 216px;
	height: 54px;
	border: none;
	outline: none;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 23px;
	letter-spacing: -0.117188px;
	color: #333758;
}
.section-2 {
	margin-top: 40px;
	margin-bottom: 40px;
	display: flex;
	/* justify-content: space-between; */
}
.section-2 input {
	background: #7557d3;
	opacity: 0.04;
	width: 216px;
	height: 54px;
	border: none;
	outline: none;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 23px;
	letter-spacing: -0.117188px;
	color: #333758;
}
.address-section {
	margin-left: 50px;
}
.save-btn {
	margin: auto;
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
