<template>
	<div>
		<div id="home" class="home h-770 sm:w-full">
			<div class="w-4/5 lg:w-11/12 mx-auto h-full flex flex-wrap justify-between">
				<div class="w-full my-24 md:mt-52 md:my-0 lg:mt-0 lg:w-1/2 h-full relative">
					<div class="h-full flex-col lg:flex justify-center text-left">
						<div class="w-full sm:w-3/4">
							<h2 class="text-white md:text-blue-600 font-bold leading-loose md:leading-loose text-xl md:text-2xl md:stroke-white">
								Hi, i'm Willy Aprada
							</h2>
							<h1 class="text-white md:text-black leading-tight md:leading-tight text-4xl md:text-5xl font-bold md:stroke-white">
								Building digital products, brands <br>
								<span class="text-white md:text-blue-600"><img src="../assets/images/ic_skill.png" class="inline-block" style="width: 7%"> experience.</span>
							</h1>
							<p class="text-sm md:text-lg text-white md:text-black leading-loose md:leading-loose mt-2 relative z-10">
								a <strong>Product Designer</strong> and <strong>Visual Developer</strong><br>
								I Specialize in UI/UX Design, Responsive Web Design,
								and Visual Development.
							</p>
						</div>

						<img src="../assets/images/img.png" class="absolute inline lg:hidden bottom-32 md:bottom-52 right-10 md:-right-9 sm:-right-6 w-5/6 sm:w-96">

						<CallToAction />
					</div>
				</div>

				<div class="w-full hidden lg:inline lg:w-1/3 relative h-100">
					<img src="../assets/images/img.png" class="absolute bottom-0 right-1 w-full">
				</div>
			</div>
		</div>

		<div class="w-11/12 my-32 sm:my-52">
			<img src="../assets/images/sponsor-icon.png" class="w-5/6 mx-auto">
		</div>

		<div id="aboutMe" class="w-4/5 mx-auto lg:w-11/12 mb-52">
			<div class="w-full grid md:flex">
				<div class="w-full lg:w-1/2 px-5 mb-12 md:mb-0">
					<img src="../assets/images/icon-image-section.png">
				</div>

				<div class="w-full lg:w-1/2 px-5 text-left flex flex-col justify-between">
					<div class="mb-12 lg:mb-0">
						<h1 class="text-2xl md:text-3xl mb-5">About Me</h1>
						<hr class="w-1/5 mb-5 bg-black border-black">

						<p class="font-light">
							I am Wili Aprada, a product designer from Jakarta
							and I have been working as a UI/UX designer for more than 1 years.
							Exploring minimalist designs and having good functionality is my hobby.
							Can spend hours every day exploring designs.

							<br><br>

							My last work experience was working at PT. Qupintar Media Digital as UI/UX Designer
							since 2020 I've been working freelance for the last 1 year,
							and now I look forward to collaborating with you!
						</p>
					</div>

					<button class="btn btn-blue-gradient py-3 px-2 w-full md:w-1/4">
						Resume
					</button>
				</div>
			</div>
		</div>

		<div id="portfolio" class="w-4/5 mx-auto lg:w-11/12 mb-52">
			<h1 class="text-2xl mb-5">Portfolio</h1>
			<h2 class="text-4xl text-blue-gradient font-bold">Selected Works</h2>

			<div class="grid sm:grid-cols-3 gap-4 mt-5">
				<div @click="openGallery(1)" class="cursor-pointer"><img src="../assets/images/thumbnail-1.png" alt=""></div>
				<div @click="openGallery(4)" class="cursor-pointer"><img src="../assets/images/thumbnail-2.png" alt=""></div>
				<div @click="openGallery(6)" class="cursor-pointer"><img src="../assets/images/thumbnail-3.png" alt=""></div>
				<div @click="openGallery(5)" class="cursor-pointer"><img src="../assets/images/thumbnail-4.png" alt=""></div>
				<div @click="openGallery(3)" class="cursor-pointer"><img src="../assets/images/thumbnail-5.png" alt=""></div>
				<div @click="openGallery(2)" class="cursor-pointer"><img src="../assets/images/thumbnail-6.png" alt=""></div>
			</div>
		</div>
		<ViewGallery :id="selectedPortfolioId" :is-open="isGalleryOpen" @close="isGalleryOpen = false" />

		<div id="contact" class="w-11/12 mx-auto pb-32 overflow-x-hidden">
			<div class="p-12 text-white text-left rounded bg-contact relative">
				<div class="w-full lg:w-2/3">
					<h5 class="text-2xl mb-5 font-bold">HIRE ME</h5>
					<h1 class="text-4xl font-bold mb-5">Stay Chill and Tell <br class="hidden md:inline"> Your Plan</h1>

					<form action="">
						<div class="w-full flex mb-5">
							<div class="w-1/2 mr-3">
								<input type="text" class="w-full py-3 px-3 rounded text-black" placeholder="Name">
							</div>
							<div class="w-1/2">
								<input type="text" class="w-full py-3 px-3 rounded text-black" placeholder="Email">
							</div>
						</div>
						
						<div class="w-full mb-5">
							<textarea name="" id="" cols="30" rows="10" class="w-full py-3 px-3 rounded text-black" placeholder="Message..."></textarea>
						</div>

						<div class="w-full text-right">
							<button class="btn btn-blue-gradient w-1/4 py-3 border border-white shadow-2xl">
								Send
							</button>
						</div>
					</form>
				</div>

				<div class="flex justify-between w-2/4 md:w-1/5 mb-72 lg:mb-16">
					<div><img src="../assets/images/instagram.png" alt="" class="w-2/4 shadow"></div>
					<div><img src="../assets/images/whatsapp.png" alt="" class="w-2/4 shadow"></div>
					<div><img src="../assets/images/linkedin.png" alt="" class="w-2/4 shadow"></div>
				</div>

				<div class="w-full text-center relative z-10">
					<p class="font-bold">wiliaprada.com &copy; 2021</p>
				</div>

				<div class="absolute w-3/5 sm:w-2/5 bottom-0 -right-9">
					<img src="../assets/images/wili-ngentot.png" class="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

import CallToAction from "../components/CallToAction";
import ViewGallery from "../components/ViewGallery";
export default {
	name: "Home",
	components: {
		ViewGallery,
		CallToAction

	},
	data() {
		return {
			isGalleryOpen: false,
			selectedPortfolioId: null
		}
	},
	methods: {
		openGallery(id) {
			this.isGalleryOpen = true
			this.selectedPortfolioId = id
		}
	}
};
</script>

<style scoped lang="scss">
	.home {
		width: 100%;
		margin-top: -25px;
		margin-bottom: 200px;
		background: url("../assets/images/bg-panel.png");
		background-repeat: no-repeat;
		background-position: right;
	}

	h2 {
		margin: 0
	}

	.bg-contact {
		background: url('../assets/images/bg-panel-2.png');
		background-size: cover;
	}
</style>

<style lang="postcss">
	.input-form {
		@apply bg-black w-full px-5 py-8 rounded;
	}

	.container {
		@apply w-4/5 md:w-10/12 mx-auto
	}

	.text-primary {
		font-weight: bold;
		color: #3E64FF;
	}
</style>
