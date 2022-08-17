<template>
	<div class="modal">
		<div class="modal-content">
			<p>{{ text }}</p>
			<div class="buttons">
				<Button text="Approve" class="approve-btn" />
				<Button text="Decline" class="decline-btn" />
			</div>
		</div>
	</div>
</template>

<script>
import Button from './Button.vue';
export default {
	name: 'ChoiceModal',
	components: { Button },
	props: ['text'],
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
}
.buttons {
	margin: auto;
}
.decline-btn {
	background: white;
	border: 1px solid #cecece;
	border-radius: 4px;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 19px;
	color: #4f4f4f;
	padding: 14px 36px;
}
</style>
