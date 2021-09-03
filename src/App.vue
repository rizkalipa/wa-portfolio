<template>
	<div id="app">
		<div class="w-4/5 md:w-11/12 mx-auto hidden md:inline-block relative">
			<Navbar />
		</div>

		<div class="bg-white w-full py-3 inline-block md:hidden">
			<div class="w-4/5 mx-auto">
				<MobileNavbar />
			</div>
		</div>

		<router-view />
	</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

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
		margin: 0;
	}
</style>

<style lang="postcss">
.custom-container {
	@apply w-4/5 md:w-10/12 mx-auto
}
</style>

<script>
import Navbar from "./components/Navbar";
import MobileNavbar from "./components/MobileNavbar";

export default {
	components: {MobileNavbar, Navbar}
}
</script>