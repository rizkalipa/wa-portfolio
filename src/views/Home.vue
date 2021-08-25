<template>
	<div>
		<div class="home">
			<div class="jumbotron-1">
				<div class="content">
					<h2 style="font-weight: bold; color: #3E64FF; line-height: 48px">Hi, i'm Willy Aprada</h2>
					<h1 style="font-size: 48px; line-height: 60px; font-weight: bold; letter-spacing: 0.3px; color: black">
						Building digital products, brands <br>
						<span style="font-weight: bold; color: #3E64FF"><img src="../assets/images/ic_skill.png" style="width: 7%"> experience.</span>
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

<style lang="scss">
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
		background: url('../assets/images/bg-panel.png');
	}

	p, h1, h2 {
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
</style>
