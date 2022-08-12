<template>
	<div class="card">
		<h1>{{ header }}</h1>
		<p>{{ body }}</p>
	</div>
</template>

<script>
export default {
	name: 'CardCoponent',
	props: ['header', 'body'],
};
</script>

<style scoped>
.card {
	padding: 24px;
	height: 202px;
}
.card h1 {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 500;
	font-size: 16px;
	line-height: 140%;
	letter-spacing: 0.01em;
	margin-bottom: 12px;
	color: #211f26;
}
.card p {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 156%;
	letter-spacing: 0.01em;
	color: rgba(33, 31, 38, 0.6);
}
</style>
