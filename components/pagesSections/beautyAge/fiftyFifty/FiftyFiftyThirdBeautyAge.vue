<script setup>
import Counter from '~/components/ui/Counter.vue';
import Button from '~/components/ui/Button.vue';
import { useSearchStore } from '~/store/searchStore';

const searchStore = useSearchStore();
const config = useRuntimeConfig().public;
// Counter
const getCounter = newCounter => {
	searchStore.productsCounters[searchStore.productFetchData.id] = newCounter;
};
</script>

<template>
	<section
		id="fifty-fifty-beauty-age-thirdId"
		class="fifty-fifty-beauty-age-third"
	>
		<div class="row align-items-center">
			<div class="col-lg-6">
				<div class="fifty-fifty-beauty-age-third__picture-container">
					<picture class="fifty-fifty-beauty-age-third__img">
						<source
							:srcset="`
								${config.images}/someRoute.webp 1x,
								${config.images}/someRoute.webp 2x`"
							media="(min-width: 1540px)"
							alt="fifty-fifty-beauty-age-third-img"
						/>

						<source
							:srcset="`
								${config.images}/someRoute.jpg 1x,
								${config.images}/someRoute.jpg 2x`"
							media="(min-width: 1540px)"
							alt="fifty-fifty-beauty-age-third-img"
						/>

						<source
							:srcset="`
								${config.images}/someRoute.webp 1x,
								${config.images}/someRoute.webp 2x`"
							media="(min-width: 992px)"
							alt="fifty-fifty-beauty-age-third-img"
						/>

						<source
							:srcset="`
								${config.images}/someRoute.jpg 1x,
								${config.images}/someRoute.jpg 2x`"
							media="(min-width: 992px)"
							alt="fifty-fifty-beauty-age-third-img"
						/>

						<source
							:srcset="`
								${config.images}/someRoute.webp 1x,
								${config.images}/someRoute.webp 2x`"
							media="(min-width: 576px)"
							alt="fifty-fifty-beauty-age-third-img"
						/>

						<source
							:srcset="`
								${config.images}/someRoute.jpg 1x,
								${config.images}/someRoute.jpg 2x`"
							media="(min-width: 576px)"
							alt="fifty-fifty-beauty-age-third-img"
						/>

						<source
							:srcset="`
								${config.images}/someRoute.webp 1x,
								${config.images}/someRoute.webp 2x`"
							alt="fifty-fifty-beauty-age-third-img"
						/>
						<source
							:srcset="`
								${config.images}/someRoute.jpg 1x,
								${config.images}/someRoute.jpg 2x`"
							alt="fifty-fifty-beauty-age-third-img"
						/>

						<img
							:src="`${config.images}/someRoute.jpg`"
							alt="fifty-fifty-beauty-age-third-img"
						/>
					</picture>
					<h2
						class="fifty-fifty-beauty-age-third__title fifty-fifty-beauty-age-third__title--hide-lg"
						v-html="$t('beautyAge.fiftyFifty.third.title')"
					></h2>
				</div>
			</div>
			<div class="col-lg-5 offset-lg-1">
				<div class="row">
					<div class="col-12 col-lg-10 col-xxl-8">
						<h2
							class="fifty-fifty-beauty-age-third__title"
							v-html="$t('beautyAge.fiftyFifty.third.title')"
						></h2>
						<div class="fifty-fifty-beauty-age-third__inner">
							<div class="fifty-fifty-beauty-age-third__inner-container">
								<Counter
									@counted="getCounter"
									:is-active="searchStore.productFetchData.availability"
									:id-product="searchStore.productFetchData.id"
								/>
								<Button
									class="buttons buttons__add d-none d-sm-block"
									:id-product="searchStore.productFetchData.id"
									:counter="
										searchStore.productsCounters[
											searchStore.productFetchData.id
										]
									"
									v-if="
										searchStore.productFetchData.availability === 'someField'
									"
								>
									<NuxtLink>{{ $t('buttons.toCart') }}</NuxtLink>
								</Button>
								<Button
									class="buttons buttons__pre-order d-none d-sm-block"
									v-if="
										searchStore.productFetchData.availability === 'someField'
									"
									:id-product="searchStore.productFetchData.id"
									:counter="
										searchStore.productsCounters[
											searchStore.productFetchData.id
										]
									"
								>
									<NuxtLink>{{ $t('buttons.preorder') }}</NuxtLink>
								</Button>

								<Button
									class="buttons buttons__disabled d-none d-sm-block"
									:counter="
										searchStore.productsCounters[
											searchStore.productFetchData.id
										]
									"
									v-if="
										searchStore.productFetchData.availability ===
											'someField' ||
										searchStore.productFetchData.availability === 'someField'
									"
								>
									<NuxtLink>{{ $t('buttons.disabled') }}</NuxtLink>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
#fifty-fifty-beauty-age-thirdId {
	overflow: hidden;

	.fifty-fifty-beauty-age-third {
		&__img {
			position: relative;
			display: block;
			margin-right: -12px;

			@include tablet {
				margin-right: 0;
			}

			&:after {
				content: '';
				position: absolute;
				width: 105%;
				height: 100%;
				z-index: -1;

				background: linear-gradient(
						180deg,
						rgba(227, 229, 255, 0.23) 0%,
						#e3e5ff 100%
					),
					#ffffff;

				@include tablet {
					content: none;
				}
			}

			img {
				width: 100%;

				@media (max-width: 1440px) {
					min-height: 430px;
					object-fit: cover;
				}

				@include tablet {
					min-height: auto;
				}
			}
		}

		&__title {
			@extend %subtitle-h2;
			margin-bottom: 32px;
			margin-left: -12px;

			@include laptop-big {
				margin-right: 1px;
			}

			@include tablet {
				margin-left: 0;
				margin-right: 0;
				display: none;
			}

			&--hide-lg {
				position: absolute;
				bottom: 0;

				display: none;

				color: $white;

				@include tablet {
					display: block;

					margin-bottom: 56px;

					padding: 0 36px;
					z-index: 1;

					font-size: 40px;
					line-height: 48px;
					i {
						font-size: 43px;
					}
				}

				@include small-mobile {
					margin-bottom: 24px;
					margin-right: 28px;

					padding: 0 15px;
					font-size: 23px;
					line-height: 28px;

					i {
						font-size: 26px;
					}
				}

				@media (max-width: 400px) {
					margin-right: 0;
				}
			}
		}

		&__picture-container {
			position: relative;
		}

		&__inner {
			display: flex;
			align-items: center;
			flex-direction: column;

			margin-left: -12px;

			@include tablet {
				display: none;
				margin-left: 0;
			}

			&-container {
				display: flex;
				align-items: center;

				width: 100%;
			}

			.buttons {
				max-width: 201px;
				padding: 13px 6px;
				font-size: 23px;
				line-height: 29px;

				@include laptop-big {
					max-width: 175px;
					font-size: 18px;
					line-height: 23px;
				}
			}

			.counter {
				margin-right: 16px;
			}
		}
	}
}
</style>
