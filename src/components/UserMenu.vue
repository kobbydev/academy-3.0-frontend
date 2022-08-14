<template>
	<div class="menu">
		<div class="profile">
			<div class="profile-picture">
				<img src="../assets/dashboard-icon.svg" alt="" />
			</div>
			<p class="user-name">{{ userName }}</p>
			<p class="user-email">{{ userEmail }}</p>
		</div>
		<div class="menu-links" v-for="(link, index) in linksData" :key="index">
			<div class="links">
				<img :src="link.linkIcon" alt="" />
				<router-link :to="link.routerLink">{{ link.linkName }}</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserMenu',
	props: [
		'profilePic',
		'userName',
		'userEmail',
		'linkName',
		'linkIcon',
		'routerLink',
		'linksData',
	],
};
</script>

<style scoped>
.profile {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #7557d3;
	height: 25vh;
}
.profile-picture {
	border-radius: 50%;
	width: 80px;
	height: 80px;
}
.menu-links {
	margin-top: 28px;
}
.links img {
	margin-right: 16px;
}
a {
	text-decoration: none;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	color: #2b3c4e;
}
.links {
	margin-left: 43px;
}
</style>
