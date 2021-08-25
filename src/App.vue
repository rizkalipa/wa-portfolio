<template>
	<div id="app">
		<div class="container">
			<Navbar />
		</div>

		<router-view />
	</div>
</template>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');


	#app {
		font-family: Poppins, Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}

	.container {
		width: 85%;
		margin: auto;
		position: relative;
	}

	body {
		position: relative;
	}
</style>
<script>
import Navbar from "./components/Navbar";
export default {
	components: {Navbar}
}
</script>