<template>
	<div class="navbar-container">
		<div class="navbar-logo">
			<img src="@/assets/images/wa-portfolio-logo.png" alt="">
		</div>
		
		<div class="navbar-menu">
			<a class="navbar-item active" href="">Home</a>
			<a class="navbar-item" href="">About</a>
			<a class="navbar-item" href="">Case Study</a>
			<a class="navbar-item" href="">Contact</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Navbar"
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
		top: 0;
		right: 0;
		left: 0;
	}

	.navbar-menu {

	}

	.navbar-item {
		display: inline-block;
		text-decoration: none;
		font-weight: bold;
		padding: 5px 10px;
		margin: 0 30px;
		font-size: 18px;
		color: white;
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