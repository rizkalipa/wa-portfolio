<template>
	<div class="w-full flex overflow-hidden">
		<transition name="slide-up">
			<div v-if="isOpen && id" class="fixed overflow-y-auto w-full h-full bg-white bottom-0 rounded-xl z-30 shadow">
				<div class="grid-cols-2 md:flex justify-between items-center p-10">
					<div class="hidden md:inline-block w-1/3">
						<img src="@/assets/images/wa-portfolio-logo.png" alt="">
					</div>

					<div class="w-full text-left mb-5 md:mb-0">
						<p>{{ getSelectedData.name }}</p>
						<small>by {{ getSelectedData.author }}</small>
					</div>

					<div class="w-full flex flex-wrap">
						<div v-for="(item, index) in getSelectedData.images" class="w-24 h-20 mr-5 cursor-pointer" :key="index">
							<img @click="previewImage = item" :src="getImageUrl(item)" class="w-full h-full object-cover border-2 border-white hover:border-primary hover:shadow-primary">
						</div>
					</div>


					<div class="absolute top-10 right-8">
						<a @click.prevent="closeGallery" class="cursor-pointer"><i class="fa fa-times-circle text-2xl text-opacity-10"></i></a>
					</div>
				</div>
				<hr>

				<div class="w-full p-10">
					<transition name="fade">
						<img :src="getImageUrl(previewImage)" class="h-auto">
					</transition>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: "ViewGallery",
	props: {
		isOpen: {
			type: Boolean
		},
		id: {
			type: Number
		}
	},
	created() {
		this.staticImages = [
			{
				name: 'Indy Study Website and Mobile',
				author: 'Wili Aprada',
				images: [
					'a-1.png',
					'a-2.png',
					'a-3.png',
					'a-4.png',
				]
			},
			{
				name: 'Character Illustration Set',
				author: 'Wili Aprada',
				images: [
					'b-1.png',
					'b-2.png'
				]
			},
			{
				name: 'Hefa Store Website',
				author: 'Wili Aprada',
				images: [
					'c-1.png',
					'c-2.png',
					'c-3.png',
					'c-4.png',
				]
			},
			{
				name: 'Law Office Ari & Co. Lawyers Web',
				author: 'Wili Aprada',
				images: [
					'e-1.png',
					'e-2.png',
					'e-3.png',
					'e-4.png',
				]
			},
			{
				name: 'Business Icon Set',
				author: 'Wili Aprada',
				images: [
					'f-1.png',
					'f-2.png',
					'f-3.png',
				]
			},
			{
				name: 'PT. Qupintar Media Digital',
				author: 'Wili Aprada',
				images: [
					'd-1.png',
					'd-2.png',
				]
			},
		]
	},
	data() {
		return {
			staticImages: [],
			previewImage: 'a-1.png'
		}
	},
	methods: {
		getImageUrl(string) {
			return require('../assets/images/Portfolio/' + string)
		},
		closeGallery() {
			this.previewImage = ''
			this.$emit('close')
		}
	},
	computed: {
		getSelectedData() {
			return this.staticImages[this.id - 1]
		}
	},
	watch: {
		id() {
			let data = this.getSelectedData
			this.previewImage = data.images[0]
		}
	}
}
</script>

<style scoped lang="scss">

</style>