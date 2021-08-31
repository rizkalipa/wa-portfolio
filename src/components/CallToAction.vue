<template>
	<div class="cta-container">
		<form action="">
			<div class="input-container">
				<input type="text" placeholder="Email address" class="mr-3">

				<button class="btn btn-blue-gradient mr-3">Connect With Me</button>

				<button class="btn btn-outline-blue w-1/3">Contact</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "CallToAction"
}
</script>

<style scoped>
	.cta-container {
		padding: 30px 20px;
		width: 670px;
		position: absolute;
		bottom: 65px;
		background-color: white;
		box-shadow: -15px 30px 60px 2px rgba(77, 97, 196, 0.2);
	}

	.input-container {
		display: flex;
	}

	input {
		width: 100%;
		padding: 12px;
		border: 1px solid #D6E4EC;
		color: #D6E4EC;
		border-radius: 4px;
		background: #FBFBFB;
	}

	input::placeholder {
		color: #AABBC6;
	}
</style>