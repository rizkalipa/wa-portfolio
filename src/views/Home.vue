<template>
	<div>
		<div class="home">
			<div class="jumbotron-1">
				<div class="content">
					<h2 style="font-weight: bold; color: #3E64FF; line-height: 48px">Hi, i'm Willy Aprada</h2>
					<h1 style="font-size: 48px; line-height: 60px; font-weight: bold; letter-spacing: 0.3px; color: black">
						Building digital products, brands <br>
						<span style="font-weight: bold; color: #3E64FF"><img src="../assets/images/ic_skill.png" class="inline-block" style="width: 7%"> experience.</span>
					</h1>
					<p style="font-size: 18px; line-height: 40px">
						a <strong>Product Designer</strong> and <strong>Visual Developer</strong><br>
						I Specialize in UI/UX Design, Responsive Web Design,
						and Visual Development.
					</p>

					<CallToAction />
				</div>
			</div>

			<div class="jumbotron-2">
				<img src="../assets/images/img.png" class="img-profile">
			</div>
		</div>

		<div class="container sponsor">
			<img src="../assets/images/sponsor-icon.png" style="width: 85%">
		</div>

		<div class="w-10/12 mx-auto mb-56">
			<div class="w-full flex">
				<div class="w-1/2 px-5">
					<img src="../assets/images/icon-image-section.png" alt="">
				</div>

				<div class="w-1/2 px-5 text-left flex flex-col justify-between">
					<div>
						<h1 class="text-3xl mb-5">About Me</h1>
						<hr class="w-1/5 mb-5 bg-black border-black">

						<p class="font-light">
							I am Wili Aprada, a product designer from Jakarta
							and I have been working as a UI/UX designer for more than 1 years.
							Exploring minimalist designs and having good functionality is my hobby.
							Can spend hours every day exploring designs.

							<br><br>

							Currently I work for PT. Qupintar Media Digital as UI Designer since 2019
							I’ve been freelancing for the last 1 years, and right now
							I am looking forward to collaborate with you!
						</p>
					</div>

					<button class="btn btn-blue-gradient py-3 px-2 w-1/4">
						Resume
					</button>
				</div>
			</div>
		</div>

		<div class="w-10/12 mx-auto mb-56">
			<h1 class="text-2xl mb-5">Portfolio</h1>
			<h2 class="text-4xl text-blue-gradient font-bold">Selected Works</h2>

			<div class="flex flex-wrap mt-5">
				<div class="w-1/3 px-2 py-2 cursor-pointer"><img src="../assets/images/thumbnail-1.png" alt=""></div>
				<div class="w-1/3 px-2 py-2 cursor-pointer"><img src="../assets/images/thumbnail-2.png" alt=""></div>
				<div class="w-1/3 px-2 py-2 cursor-pointer"><img src="../assets/images/thumbnail-3.png" alt=""></div>
				<div class="w-1/3 px-2 py-2 cursor-pointer"><img src="../assets/images/thumbnail-4.png" alt=""></div>
				<div class="w-1/3 px-2 py-2 cursor-pointer"><img src="../assets/images/thumbnail-5.png" alt=""></div>
				<div class="w-1/3 px-2 py-2 cursor-pointer"><img src="../assets/images/thumbnail-6.png" alt=""></div>
			</div>
		</div>

		<div class="w-10/12 mx-auto mb-32">
			<div class="p-12 text-white text-left rounded bg-contact relative">
				<div class="w-2/3">
					<h5 class="text-2xl mb-5 font-bold">HIRE ME</h5>
					<h1 class="text-4xl font-bold mb-5">Stay Chill and Tell <br> Your Plan</h1>

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

				<div class="flex justify-between w-1/5 mb-16">
					<div><img src="../assets/images/instagram.png" alt="" class="w-2/4 shadow"></div>
					<div><img src="../assets/images/whatsapp.png" alt="" class="w-2/4 shadow"></div>
					<div><img src="../assets/images/linkedin.png" alt="" class="w-2/4 shadow"></div>
				</div>

				<div class="w-full text-center">
					wiliaprada.com &copy; 2021
				</div>

				<div class="absolute w-2/5 bottom-0 -right-9">
					<img src="../assets/images/wili-ngentot.png" class="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

import CallToAction from "../components/CallToAction";
export default {
	name: "Home",
	components: {
		CallToAction

	},
};
</script>

<style scoped lang="scss">
	.home {
		width: 100%;
		height: 779px;
		display: flex;
		margin-top: -10px;
		margin-bottom: 200px;
	}

	.jumbotron-1 {
		height: 779px;
		width: 50%;
		position: relative;
	}

	.content {
		width: 68%;
		height: 100%;
		text-align: left;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.jumbotron-2 {
		width: 50%;
		height: 779px;
		position: relative;
		z-index: -1;
		background-repeat: no-repeat;
		background: url('../assets/images/bg-panel.png');
	}

	h2 {
		margin: 0
	}

	.img-profile {
		width: 70%;
		bottom: 0;
		left: 120px;
		position: absolute;
	}

	.sponsor {
		margin-bottom: 200px;
	}

	.bg-contact {
		background: url('../assets/images/bg-panel-2.png');
		background-size: cover;
	}
</style>

<style>

</style>
