<template>
	<div class="modal" @click="close">
		<div class="modal-content">
			<p>{{ text }}</p>
			<div class="buttons">
				<Button text="Yes" class="approve-btn" @click="decline" />
				<Button text="No" class="decline-btn" @click="close" />
			</div>
		</div>
	</div>
</template>

<script>
import Button from './Button.vue';
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';
export default {
	name: 'ChoiceModal',
	components: { Button },
	props: ['text'],
	computed: {
		...mapGetters({
			singleApplicant: 'getSingleApplicant',
		}),
	},
	methods: {
		...mapActions({
			getSingleApplicant: 'getSingleApplicant',
		}),
		close() {
			this.$emit('close');
		},
		decline() {
			const userId = this.singleApplicant._id;
			const token = localStorage.getItem('admintoken');
			// this.status.app_status = 'Approved';
			axios
				.patch(
					`http://localhost:8081/api/v1/admin/approve-application/${userId}`,
					{ app_status: 'Declined' },
					{
						headers: { token: token },
					}
				)
				.then((response) => {
					console.log(response);
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
};
</script>

<style scoped>
.modal {
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
.modal-content {
	background: #ffffff;
	/* position: absolute;
	right: 0;
	bottom: 0;
	top: 0;
	height: 100vh;
	z-index: 4;
	padding: 95px 58px 145px 48px;
	width: 600px; */
	display: flex;
	flex-direction: column;
	padding: 79px 96px;
}
.approve-btn {
	background: #7557d3;
	border-radius: 4px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	border: none;
	margin-right: 24px;
	color: #ffffff;
	padding: 14px 32px;
	cursor: pointer;
}
.buttons {
	margin: auto;
}
.decline-btn {
	background: white;
	border: none;
	border-radius: 4px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #4f4f4f;
	padding: 14px 36px;
	cursor: pointer;
}
.modal-content p {
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
