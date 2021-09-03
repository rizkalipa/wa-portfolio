<template>
	<div>
		<div class="absolute w-full inline lg:hidden bottom-5 md:bottom-40 lg:bottom-12 bg-white px-7 py-6 cta-shadow z-10">
			<form action="">
				<div class="grid md:grid-cols-2 gap-3">
					<input type="text" placeholder="Email address" class="mr-3">

					<div class="grid grid-cols-3 gap-3">
						<button class="btn btn-blue-gradient col-span-2 w-full mr-3 py-3 px-5">Connect With Me</button>

						<button class="btn btn-outline-blue w-full">Contact</button>
					</div>
				</div>
			</form>
		</div>

		<div class="absolute hidden lg:inline w-cta bottom-5 md:bottom-40 lg:bottom-12 bg-white px-7 py-6 cta-shadow z-10">
			<form action="">
				<div class="grid md:grid-cols-2 gap-3">
					<input type="text" placeholder="Email address" class="mr-3">

					<div class="grid grid-cols-3 gap-3">
						<button class="btn btn-blue-gradient col-span-2 w-full mr-3 py-3 px-5">Connect With Me</button>

						<button class="btn btn-outline-blue w-full">Contact</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: "CallToAction"
}
</script>

<style scoped lang="scss">

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

<style lang="postcss">

</style>