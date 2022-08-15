<template>
<router-link >"/assessment/questions"</router-link>
	<router-view />
</template>

<script>
export default {
	name: 'App',
	components: {},
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
} */
@font-face {
	font-family: 'Lato';
	src: local('Lato'), url(./fonts/Lato-Regular.ttf) format('truetype');
}
@font-face {
	font-family: 'Poppins';
	src: local('Poppins'), url(./fonts/Poppins-Regular.ttf) format('truetype');
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
