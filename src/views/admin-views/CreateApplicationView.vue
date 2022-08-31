<template>
	<div class="create-application">
		<div class="left-section">
			<UserMenu class="user-menu" :linksData="links" :linkName="linkName" :linkIcon="linkIcon"
				:routerLink="routerLink" :lId="lId" />
		</div>
		<div class="right-section">
			<h1 class="heading">Create Application</h1>
			<form enctype="multipart/form-data">
				<div class="section-1">
					<label class="custom-file-upload">
						<input type="file" ref="file" @change="selectFile" />
						{{nameFile}}
					</label>
					<div class="link-input">
						<label for="link-input">Link</label> <br />
						<input type="text" name="link-input" id="link-input" v-model="link" />
					</div>
				</div>
				<div class="section-2">
					<div class="date-input">
						<label for="date-input">Application closure date</label><br />
						<input type="date" id="date-input" name="date-input" min="2022-08-14"
							v-model="dateOfApplication" />
					</div>
					<div class="batch-input">
						<label for="batch-id">Batch ID</label> <br />
						<input type="text" id="batch-id" name="batch-id" /><br />
						<p>Batch Id cannot be empty</p>
					</div>
				</div>
				<label for="instructions">Instructions</label><br />
				<textarea name="instructions" id="instructions" cols="30" rows="10"
					v-model="instructions"></textarea><br />
				<Button type="submit" text="Submit" @click.prevent="createAdminApplication" />
			</form>
		</div>
		<div class="message-box" v-if="isShown">
			<div class="background"></div>
			<div class="message">
				<p>Application was Created</p>
				<i class="uil uil-check-circle"></i>
			</div>
		</div>
	</div>
</template>

<script>
import UserMenu from '../../components/UserMenu.vue';
import Button from '@/components/Button.vue';
import axios from 'axios';
export default {
	name: 'CreateApplication',
	components: { UserMenu, Button },
	data() {
		return {
			isShown: false,
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
			],
			file: "",
			link: "",
			dateOfApplication: "",
			batchId: "",
			instructions: "",
			nameFile: "+ Choose File"
		};
	},
	methods: {
		async createAdminApplication() {
			const token = localStorage.getItem('token');
			const formData = new FormData();
			formData.append('applicationFile', this.file)
			formData.append('link', this.link),
			formData.append('dateOfApplication', this.dateOfApplication)
			formData.append('batchId', this.batchId)
			formData.append('instructions', this.instructions)

			try {
				const response = await axios.post('http://localhost:8082/api/v1/admin-create-application', formData,
					{
						headers: { token: token },
					})
				console.log(response)
			} catch (e) {
				console.log(e)
			}
		},
		selectFile() {
			this.file = this.$refs.file.files[0]
		},
	}, 
	watch:{
		// eslint-disable-next-line no-unused-vars
		file(newFile, oldFile){
			if(newFile){
				this.nameFile = this.file.name
			}
		}
	}
};
</script>

<style scoped>
.create-application {
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
	padding: 137px 97px 86px 75px;
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

.section-1,
.section-2 {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.section-1 {
	margin-bottom: 30px;
}

.section-2 {
	margin-bottom: 36px;
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

.section-1 input,
.section-2 input {
	border: 1.5px solid #2b3c4e;
	border-radius: 4px;
	padding: 5px;
	height: 41px;
	width: 456px;
}

#date-input {
	margin-right: 64px;
	font-family: 'Lato';
	font-style: italic;
	font-weight: 400;
	font-size: 10px;
	line-height: 12px;
	color: #cecece;
}

textarea {
	border: 1.5px solid #2b3c4e;
	border-radius: 4px;
	height: 144px;
	width: 100%;
}

form {
	display: flex;
	flex-direction: column;
}

button {
	background: #7557d3;
	border-radius: 4px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 16px;
	line-height: 19px;
	border: none;
	margin: auto;
	margin-top: 60px;
	color: #ffffff;
	padding: 16px 164px;
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
.background {
	width: 100vw;
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.3);
	display: flex;
	justify-content: center;
	z-index: 2;
	align-items: center;
}
.message {
	display: flex;
	flex-direction: column;
	padding: 79px 96px;
	background: #ffffff;
}
.message p {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 150%;
	margin-bottom: 48px;
	text-align: center;
	color: #4f4f4f;
	width: 267px;
}
</style>
