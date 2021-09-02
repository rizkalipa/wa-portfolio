<template>
	<div class="flex justify-between items-center w-full">
		<div>
			<img src="@/assets/images/wa-portfolio-logo.png" alt="">
		</div>

		<div v-if="!isSidebarOpen">
			<a @click.prevent="isSidebarOpen = !isSidebarOpen" class="text-2xl cursor-pointer"><i class="fas fa-bars"></i></a>
		</div>

		<div v-if="isSidebarOpen" class="fixed z-20 right-12">
			<a @click.prevent="isSidebarOpen = !isSidebarOpen" class="cursor-pointer"><i class="fa fa-times-circle text-2xl text-opacity-10"></i></a>
		</div>

		<transition name="slide">
			<div v-if="isSidebarOpen" class="w-2/4 fixed bg-white top-0 bottom-0 left-0 z-20 shadow shadow-lg">
				<div class="">
					<div class="w-full text-center py-10">
						<img src="@/assets/images/wa-portfolio-logo.png" class="mx-auto">
					</div>

					<div class="grid gap-4">
						<a class="text-left px-10 py-3 hover:bg-blue-gradient flex justify-between" :class="{'active': home}" @click="navChange('home')" href="#home">Home <i class="fas fa-chevron-right text-xs ml-5"></i></a>
						<a class="text-left px-10 py-3 hover:bg-blue-gradient flex justify-between" :class="{'active': about}" @click="navChange('about')" href="#aboutMe">About <i class="fas fa-chevron-right text-xs ml-5"></i></a>
						<a class="text-left px-10 py-3 hover:bg-blue-gradient flex justify-between" :class="{'active': portfolio}" @click="navChange('portfolio')" href="#portfolio">Case Study <i class="fas fa-chevron-right text-xs ml-5"></i></a>
						<a class="text-left px-10 py-3 hover:bg-blue-gradient flex justify-between" :class="{'active': contact}" @click="navChange('cantact')" href="#contact">Contact <i class="fas fa-chevron-right text-xs ml-5"></i></a>
					</div>
				</div>
			</div>
		</transition>

	</div>
</template>

<script>
export default {
	name: "MobileNavbar",
	data() {
		return {
			url: location.href,
			home: true,
			about: false,
			portfolio: false,
			contact: false,
			isSidebarOpen: false
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

</style>