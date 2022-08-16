<template>
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
/* @font-face {
	font-family: 'Avenir';
	src: local('Avenir'), url(./fonts/avenir_roman_12.otf) format('truetype');
} */
@font-face {
	font-family: 'Avenir Roman';
	font-style: normal;
	font-weight: normal;
	src: local('Avenir Roman'), url('./fonts/avenir_roman_12.woff') format('woff');
}
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font: inherit;
}
</style>
