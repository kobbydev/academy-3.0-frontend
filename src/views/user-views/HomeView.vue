<template>
	<div class="home">
		<nav>
			<figure class="logo">
				<img src="../../assets/Enyata-logo.svg" alt="" />
			</figure>
			<ul class="menu-links">
				<li class="menu"><a href="#" class="home-link">Home</a></li>
				<router-link to="/login">
					<li class="menu"><a href="#">Sign In</a></li>
				</router-link>
				<router-link to="/signup">
					<Button text="Register Now" class="menu-btn" />
				</router-link>
			</ul>
		</nav>
		<main>
			<div class="main-section">
				<div class="section-1">
					<h1>
						Ever had a Dream of Becoming a Software <span>Engineer?</span>
					</h1>
					<p>
						Join enyata academy today and bring your long awaiting dream to
						reality.
					</p>
					<router-link to="/signup">
						<Button text=" Register Now" class="hero-btn" />
					</router-link>
				</div>
				<figure class="section-2">
					<img src="../../assets/hero-image.svg" alt="" />
				</figure>
			</div>
		</main>
		<section>
			<div class="about-us-section">
				<div class="section-header">
					<hr />
					<h1>Why us?</h1>
				</div>
				<div class="cards">
					<Card
						v-for="(card, index) in cardsData"
						:key="index"
						:header="card.title"
						:body="card.body"
					/>
				</div>
			</div>
		</section>
		<footer>
			<p>Copyright © Enyata 2021</p>
		</footer>
	</div>
</template>

<script>
import Button from '../../components/Button.vue';
import Card from '../../components/Card.vue';
export default {
	name: 'HomeView',
	components: { Button, Card },
	data() {
		return {
			cardsData: [
				{
					title: 'Learn from the best',
					body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet.',
				},
				{
					title: '100% online classes',
					body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet.',
				},
				{
					title: 'Get paid while learning',
					body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet.',
				},
				{
					title: 'Work on real project',
					body: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation amet.',
				},
			],
		};
	},
};
</script>

<style scoped>
/* .home {
	display: flex;
	flex-direction: column;
	justify-content: center;
} */
nav {
	/* margin: 0 calc(100% - 1440px); */
	margin: auto;
	width: 1168px;
	margin-top: 46px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.home-link {
	color: rgba(117, 87, 211, 0.4);
}

.menu-links {
	display: flex;
	align-items: center;
}

li {
	list-style: none;
	margin-right: 40px;
}

a {
	text-decoration: none;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	color: rgba(33, 31, 38, 0.71);
}

.menu-btn {
	border: 1px solid rgba(117, 87, 211, 0.4);
	border-radius: 2px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	padding: 12px 20px;
	background: none;
	color: #7557d3;
	cursor: pointer;
}

main {
	margin: auto;
	width: 1168px;
	margin-top: 110px;
}

.main-section {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.main-section h1 {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-size: 40.9082px;
	line-height: 57px;
	letter-spacing: 0.035em;
	margin-bottom: 23px;
	color: #211f26;
}

.main-section p {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 20px;
	line-height: 30px;
	letter-spacing: 0.02em;
	margin-bottom: 32px;
	color: rgba(33, 31, 38, 0.71);
}

.hero-btn {
	background: #7557d3;
	border-radius: 2px;
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	border: none;
	color: #ffffff;
	padding: 12px 20px;
	cursor: pointer;
}

span {
	color: #7557d3;
}

section {
	margin: auto;
	width: 1168px;
	margin-top: 134px;
}

.section-header {
	display: flex;
	align-items: center;
}

.section-header hr {
	background: #fdc840;
	border-radius: 2px;
	border: none;
	width: 34px;
	height: 2px;
	margin-right: 16px;
}

.section-header h1 {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 140%;
	letter-spacing: 0.01em;
	color: #211f26;
}

.cards {
	display: flex;
	margin-top: 40px;
}

.card:nth-of-type(1),
.card:nth-of-type(3) {
	background: #7557d31a;
}

footer {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 170px;
	background: #7557d3;
}

footer p {
	font-family: 'Poppins';
	font-style: normal;
	font-weight: 400;
	font-size: 14px;
	line-height: 156%;
	letter-spacing: 0.01em;
	color: #ffffff;
}
</style>
