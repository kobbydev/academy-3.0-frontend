<template>
	<div class="menu">
		<div class="profile">
			<div class="profile-picture">
				<img :src="profilePic" alt="" />
			</div>
			<p class="user-name">
				{{ userFirstName }} <span>{{ userLastName }}</span>
			</p>
			<p class="user-email">{{ userEmail }}</p>
		</div>
		<div class="menu-links">
			<div
				class="links"
				v-for="(link, index) in linksData"
				:key="index"
				:id="link.lId"
			>
				<router-link :to="link.routerLink"
					><img :src="link.linkIcon" alt="" /> {{ link.linkName }}</router-link
				>
			</div>
		</div>
		<div class="logout-btn" @click="logOut()">
			<figure class="footer-image">
				<img src="../assets/logout-icon.svg" alt="" />
			</figure>
			<span>Logout</span>
		</div>
	</div>
</template>

<script>
export default {
	name: 'UserMenu',
	props: [
		'profilePic',
		'userFirstName',
		'userLastName',
		'userEmail',
		'linkName',
		'linkIcon',
		'routerLink',
		'linksData',
		'lId',
		'logout',
	],
	methods: {
		logOut() {
			localStorage.removeItem('token');
			this.$router.push({ name: 'login' });
		},
	},
};
</script>

<style scoped>
.profile {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #7557d3;
	/* height: 25vh; */
	margin-bottom: 42px;
	/* padding: 75px 100px 38px 82px; */
	/* width: 292px; */
	height: 255px;
}
.profile-picture {
	border-radius: 50%;
	width: 80px;
	height: 80px;
	margin-bottom: 13px;
}
.profile-picture img {
	width: 80px;
	height: 80px;
	border-radius: 50%;
}
.links {
	margin-bottom: 28px;
}
.links img,
.logout-btn img {
	margin-right: 16px;
}
.logout-btn {
	display: flex;
	font-family: 'Lato';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	text-align: center;
	color: #2b3c4e;
	width: 100%;
	padding: 10px 23px;
	cursor: pointer;
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
	width: 100%;
	padding: 0px 23px;
	margin-top: 28px;
	margin-bottom: 28px;
}
.user-name {
	font-family: 'Lato';
	font-style: normal;
	font-weight: 700;
	font-size: 20px;
	line-height: 24px;
	letter-spacing: -0.02em;
	color: #ffffff;
	margin-bottom: 5px;
}
.user-email {
	font-family: 'Lato';
	font-style: italic;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	letter-spacing: -0.02em;
	color: #ffffff;
}
a.router-link-exact-active {
	border-left: 4px solid #7557d3;
	padding-left: 19px;
	font-weight: 700;
}
#logout {
	margin-top: 10vh;
}
</style>
