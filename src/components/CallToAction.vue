<template>
	<div class="cta-container">
		<form action="">
			<div class="input-container">
				<input type="text" placeholder="Email address">

				<button class="btn btn-blue-gradient">Connect With Me</button>

				<button class="btn btn-outline-blue">Contact</button>
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

	.btn {
		width: 55%;
		margin: 0 13px;
		border-radius: 4px;
		letter-spacing: 1px;
		font-size: 0.9em;
	}

	.btn-blue-gradient {
		border: 0;
		color: white;
		background: linear-gradient(90deg, rgba(77,97,196,1) 36%, rgba(61,172,237,1) 100%);
	}

	.btn-outline-blue {
		border: 1px solid #4D61C4;
		color: #4D61C4;
		background: transparent;
	}

	.btn:last-child {
		margin-left: 0;
		margin-right: 13px;
	}
</style>