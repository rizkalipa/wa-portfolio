<template>
	<div class="navbar-container">
		<div class="navbar-logo">
			<img src="@/assets/images/wa-portfolio-logo.png" alt="">
		</div>
		
		<div class="navbar-menu">
			<a class="navbar-item" :class="{'active': home}" @click="navChange('home')" href="#home">Home</a>
			<a class="navbar-item" :class="{'active': about}" @click="navChange('about')" href="#aboutMe">About</a>
			<a class="navbar-item" :class="{'active': portfolio}" @click="navChange('portfolio')" href="#portfolio">Portfolio</a>
			<a class="navbar-item" :class="{'active': contact}" @click="navChange('cantact')" href="#contact">Contact</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Navbar",
	data() {
		return {
			url: location.href,
			home: true,
			about: false,
			portfolio: false,
			contact: false
		}
	},
	methods: {
		navChange(nav) {
			this.home = false
			this.about = false
			this.portfolio = false
			this.contact = false

			switch (nav) {
				case 'home': this.home = true;
					break;
				case 'about': this.about = true;
					break;
				case 'portfolio': this.portfolio = true;
					break;
				case 'contact': this.contact = true;
					break;
				default: this.home = true;
					break;
			}
		},
	}
}
</script>

<style scoped lang="scss">
	.navbar-container {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 41px 0;
		position: absolute;
		z-index: 30;
		top: 0;
		right: 0;
		left: 0;
	}

	.navbar-item {
		display: inline-block;
		font-weight: bold;
		padding: 5px 10px;
		margin: 0 30px;
		font-size: 18px;
		color: white;
		cursor: pointer;
	}

	.navbar-item:last-child {
		margin-left: 30px;
		margin-right: 0;
	}

	.active {
		position: relative;
	}

	.active::after {
		content: "";
		position: absolute;
		bottom: -2px;
		left: 0;
		right: 0;
		width: 54%;
		border-bottom: 1px solid white;
		margin: auto;
	}
</style>