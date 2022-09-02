<template>
	<div class="profile">
		<div class="header">
			<h1 class="profile-heading">Profile Setting</h1>
			<Button text="Edit" class="edit-btn" @click="edit" />
		</div>
		<hr />
		<div class="upload-section">
			<img :src="adminDetails.admin.profileImage" alt="" />
			<!-- <Button text="Upload new image" class="upload-btn" /> -->
			<label class="upload-btn" accept="image/*"
				><input type="file" ref="profileImage" />Upload new image</label
			>
			<Button text="x Remove" class="remove-btn" />
		</div>
		<form>
			<div class="section-1">
				<div class="name-section">
					<label for="name">Name</label><br />
					<input
						type="text"
						name="name"
						v-model="adminName"
						:readonly="isDisabled"
					/>
				</div>
				<div class="email-section">
					<label for="email">Email</label><br />
					<input
						type="email"
						name="email"
						v-model="adminEmail"
						:readonly="isDisabled"
					/>
				</div>
				<div class="phone-section">
					<label for="phone">Phone Number</label><br />
					<input
						type="phone"
						name="phone"
						v-model="adminPhoneNumber"
						:readonly="isDisabled"
					/>
				</div>
			</div>
			<div class="section-2">
				<div class="country-section">
					<label for="country">Country</label><br />
					<input
						type="text"
						name="country"
						v-model="adminCountry"
						:readonly="isDisabled"
					/>
				</div>
				<div class="address-section">
					<label for="address">Address</label><br />
					<input
						type="text"
						name="address"
						v-model="adminAddress"
						:readonly="isDisabled"
					/>
				</div>
			</div>
			<Button text="Save" class="save-btn" @click="save" type="button" />
		</form>
	</div>
</template>

<script>
import Button from './Button.vue';
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
export default {
	name: 'ProfileCOmponent',
	components: { Button },
	data() {
		return {
			isDisabled: true,
			profileImage: '',
			adminName: '',
			adminCountry: '',
			adminAddress: '',
			adminPhoneNumber: '',
			adminEmail: '',
		};
	},
	async created() {
		await this.getAdminInfo();
		this.adminName = `${this.adminDetails.admin.firstName} ${this.adminDetails.admin.lastName}`;
		this.adminCountry = this.adminDetails.admin.country;
		this.adminAddress = this.adminDetails.admin.address;
		this.adminEmail = this.adminDetails.admin.emailAddress;
		this.adminPhoneNumber = this.adminDetails.admin.phoneNumber;
	},
	computed: {
		...mapGetters({
			adminInfo: 'getAdminInfo',
		}),
		adminDetails() {
			return this.adminInfo;
		},
		fullName() {
			return (
				this.adminDetails.admin.firstName +
				' ' +
				this.adminDetails.admin.lastName
			);
		},
	},
	methods: {
		...mapActions({
			getAdminInfo: 'getAdminInfo',
		}),
		edit() {
			this.isDisabled = false;
		},
		save() {
			this.isDisabled = true;
			const token = localStorage.getItem('admintoken');
			const formData = new FormData();
			formData.append('profileImage', this.profileImage);
			axios
				.patch('http://localhost:8081/api/v1/admin/update-image', formData, {
					headers: { token: token },
				})
				.then((response) => console.log(response))
				.catch((error) => console.log(error));
			axios
				.patch(
					'http://localhost:8081/api/v1/admin/update-details',
					{
						firstName: this.adminName,
						emailAddress: this.adminEmail,
						country: this.adminCountry,
						address: this.adminAddress,
						phoneNumber: this.adminPhoneNumber,
					},
					{
						headers: { token: token },
					}
				)
				.then((response) => console.log(response))
				.catch((error) => console.log(error));
		},
		selectFileIm() {
			this.profileImage = this.$refs.profileImage.files[0];
		},
	},
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
	cursor: pointer;
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
.upload-section img {
	width: 54px;
	height: 54px;
	border-radius: 50%;
}

input[type='file'] {
	display: none;
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
	background: rgba(117, 87, 211, 0.04);
	width: 216px;
	height: 54px;
	border: none;
	outline: none;
	padding: 16px 0;
	padding-left: 18px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 23px;
	letter-spacing: -0.117188px;
	color: black;
}
.section-2 {
	margin-top: 40px;
	margin-bottom: 40px;
	display: flex;
	/* justify-content: space-between; */
}
.section-2 input {
	background: rgba(117, 87, 211, 0.04);
	width: 216px;
	height: 54px;
	border: none;
	outline: none;
	padding: 16px 0;
	padding-left: 18px;
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
	cursor: pointer;
}
</style>
