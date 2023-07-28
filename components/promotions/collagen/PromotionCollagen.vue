<script setup>
const config = useRuntimeConfig().public;

const props = defineProps({
	verySecretData: {
		type: Array,
		required: true
	}
});
</script>

<template>
	<div class="promotion">
		<h3 class="promotion__title">
			{{ $t('promotions.collagen.title1') }}
		</h3>
		<div class="promotion__wrap">
			<div class="promotion__block left">
				<div class="discount">-15%</div>
				<picture class="promotion__block-img">
					<source
						:srcset="`
					${config.images}/someRoute.png 1x,
					${config.images}/someRoute.png 2x`"
						media="(min-width: 1540px)"
						alt="collagen-left"
					/>
					<source
						:srcset="`
					${config.images}/someRoute.webp 1x,
          ${config.images}/someRoute.webp 2x`"
						media="(min-width: 1540px)"
						alt="collagen-left"
					/>
					<source
						:srcset="`
					${config.images}/someRoute.png 1x,
					${config.images}/someRoute.png 2x`"
						media="(min-width: 992px)"
						alt="collagen-left"
					/>
					<source
						:srcset="`
					${config.images}/someRoute.webp 1x,
					${config.images}/someRoute.webp 2x`"
						media="(min-width: 992px)"
						alt="collagen-left"
					/>
					<source
						:srcset="`
					${config.images}/someRoute.png 1x,
					${config.images}/someRoute.png 2x`"
						media="(min-width: 576px)"
						alt="collagen-left"
					/>
					<source
						:srcset="`
					${config.images}/someRoute.webp 1x,
					${config.images}/someRoute.webp 2x`"
						media="(min-width: 576px)"
						alt="collagen-left"
					/>
					<source
						:srcset="`
								${config.images}/someRoute.png 2x`"
						alt="collagen-left"
					/>
					<source
						:srcset="`
								${config.images}/someRoute.webp 2x`"
						alt="collagen-left"
					/>
					<img
						:src="`${config.images}/someRoute.png`"
						alt="collagen-left"
					/>
				</picture>
				<p class="course-text" v-html="props.verySecretData[1].verySecretDataDescription"></p>
			</div>
			<div class="promotion__block right">
				<div class="discount">-25%</div>
				<picture class="promotion__block-img">
					<source
						:srcset="`
					${config.images}/someRoute.png 1x,
					${config.images}/someRoute.png 2x`"
						media="(min-width: 1540px)"
						alt="collagen-right"
					/>
					<source
						:srcset="`
					${config.images}/someRoute.webp 1x,
          ${config.images}/someRoute.webp 2x`"
						media="(min-width: 1540px)"
						alt="collagen-right"
					/>
					<source
						:srcset="`
					${config.images}/someRoute.png 1x,
					${config.images}/someRoute.png 2x`"
						media="(min-width: 992px)"
						alt="collagen-right"
					/>

					<source
						:srcset="`
					${config.images}/someRoute.webp 1x,
					${config.images}/someRoute.webp 2x`"
						media="(min-width: 992px)"
						alt="collagen-right"
					/>

					<source
						:srcset="`
					${config.images}/someRoute.png 1x,
					${config.images}/someRoute.png 2x`"
						media="(min-width: 576px)"
						alt="collagen-right"
					/>
					<source
						:srcset="`
					${config.images}/someRoute.webp 1x,
					${config.images}/someRoute.webp 2x`"
						media="(min-width: 576px)"
						alt="collagen-right"
					/>
					<source
						:srcset="`
								${config.images}/someRoute.png 2x`"
						alt="collagen-right"
					/>
					<source
						:srcset="`
								${config.images}/someRoute.webp 2x`"
						alt="collagen-right"
					/>
					<img
						:src="`${config.images}/someRoute.png`"
						alt="collagen-right"
					/>
				</picture>
				<p class="course-text" v-html="props.verySecretData[0].verySecretDataDescription"></p>
			</div>
		</div>

		<p class="promotion__text" v-html="$t('promotions.collagen.text1')"></p>
	</div>
</template>

<style lang="scss" scoped>
.promotion {
	&__block {
		&-img {
			display: block;

			margin-bottom: 23px;

			@include laptop-big {
				margin-bottom: 17px;
			}

			@include tablet {
				margin-bottom: 10px;
			}

			@include small-mobile {
				margin-bottom: 8px;
			}
		}

		&.left {
			img {
			}
		}

		&.right {
			@include tablet {
				margin-left: -15px;
			}

			@include small-mobile {
				margin-left: 0;
			}
			img {
			}
		}
	}
}
</style>
