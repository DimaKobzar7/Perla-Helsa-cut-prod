<script setup>
import ListItem from '~/components/ui/ListItem.vue';
import List from '~/components/ui/List.vue';
import Counter from '~/components/ui/Counter.vue';
import Button from '~/components/ui/Button.vue';
import { useSearchStore } from "~/store/searchStore";

const searchStore = useSearchStore();
const config = useRuntimeConfig().public;
// Counter
const getCounter = newCounter => {
  searchStore.productsCounters[searchStore.productFetchData.id] = newCounter;
};
</script>

<template>
	<section
		id="fifty-fifty-second-collagenId"
		class="fifty-fifty-second-collagen"
	>
		<div class="row align-items-center">
			<div class="col-lg-6">
				<picture class="fifty-fifty-second-collagen__img">
					<source
						:srcset="`
							${config.images}/someRoute.webp 1x,
							${config.images}/someRoute.webp 2x`
						"
						media="(min-width: 1540px)"
						alt="fifty-fifty-img"
					/>

					<source
						:srcset="`
							${config.images}/someRoute.jpg 1x,
							${config.images}/someRoute.jpg 2x`
						"
						media="(min-width: 1540px)"
						alt="fifty-fifty-img"
					/>

					<source
						:srcset="`
							${config.images}/someRoute.webp 1x,
							${config.images}/someRoute.webp 2x`
						"
						media="(min-width: 992px)"
						alt="img"
					/>

					<source
						:srcset="`
							${config.images}/someRoute.jpg 1x,
							${config.images}/someRoute.jpg 2x`
						"
						media="(min-width: 992px)"
						alt="fifty-fifty-img"
					/>

					<source
						:srcset="`
							${config.images}/someRoute.webp 1x,
							${config.images}/someRoute.webp 2x`
						"
						media="(min-width: 576px)"
						alt="fifty-fifty-img"
					/>

					<source
						:srcset="`
							${config.images}/someRoute.jpg 1x,
							${config.images}/someRoute.jpg 2x`
						"
						media="(min-width: 576px)"
						alt="fifty-fifty-img"
					/>

					<source
						:srcset="`
							${config.images}/someRoute.webp 1x,
							${config.images}/someRoute.webp 2x`
						"
						alt="fifty-fifty-img"
					/>
					<source
						:srcset="`
							${config.images}/someRoute.jpg 1x,
							${config.images}/someRoute.jpg 2x`
						"
						alt="fifty-fifty-img"
					/>

					<img
						:src="`${config.images}/someRoute.jpg`"
						alt="fifty-fifty-img"
					/>
				</picture>
			</div>
			<div class="col-lg-5 offset-lg-1">
				<div class="row">
					<div class="col-lg-10 col-xxl-9">
						<div class="fifty-fifty-second-collagen__container">
							<h2
								class="fifty-fifty-second-collagen__title"
								v-html="$t('collagen.fiftyFiftySecond.title')"
							></h2>
							<List>
								<ListItem
									:listContent="$t('collagen.fiftyFiftySecond.text1')"
									svgColor="#FFFFFF"
								/>
								<ListItem
									:listContent="$t('collagen.fiftyFiftySecond.text2')"
									svgColor="#FFFFFF"
								/>
								<ListItem
									:listContent="$t('collagen.fiftyFiftySecond.text3')"
									svgColor="#FFFFFF"
								/>
							</List>
							<div class="fifty-fifty-second-collagen__wrap">
                <Counter
                  @counted="getCounter"
                  :is-active="searchStore.productFetchData.availability"
                  :id-product="searchStore.productFetchData.id"
                />
                <Button
                  class="buttons buttons__add d-none d-sm-block"
                  :id-product="searchStore.productFetchData.id"
                  :counter="searchStore.productsCounters[searchStore.productFetchData.id]"
				  v-if="searchStore.productFetchData.availability === 'someField'"
                >
                  <NuxtLink>{{ $t('buttons.toCart') }}</NuxtLink>
                </Button>

				<Button
					class="buttons buttons__pre-order d-none d-sm-block"
					v-if="searchStore.productFetchData.availability === 'someField'"
					:id-product="searchStore.productFetchData.id"
					:counter="searchStore.productsCounters[searchStore.productFetchData.id]"
				>
					<NuxtLink>{{ $t('buttons.preorder') }}</NuxtLink>
				</Button>

				<Button
					class="buttons buttons__disabled d-none d-sm-block"
					:counter="searchStore.productsCounters[searchStore.productFetchData.id]"
					v-if="
						searchStore.productFetchData.availability === 'someField' ||
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
#fifty-fifty-second-collagenId {
	overflow: hidden;

	.fifty-fifty-second-collagen {
		&__container {
			@include tablet {
				padding: 56px 36px 96px 36px;

				background: linear-gradient(
					303.68deg,
					rgba(255, 178, 224, 0.8) 0%,
					rgba(255, 229, 245, 0.8) 83.33%,
					rgba(253, 241, 249, 0.8) 96.88%,
					rgba(255, 248, 252, 0.8) 100%
				);
			}

			@include small-mobile {
				padding: 40px 15px 72px 15px;

				background: linear-gradient(
					332.9deg,
					rgba(255, 178, 224, 0.8) 1.54%,
					rgba(255, 229, 245, 0.8) 58.54%,
					rgba(253, 241, 249, 0.8) 67.8%,
					rgba(255, 248, 252, 0.8) 69.94%
				);
			}

			.list {
				margin-right: 34px;
				margin-bottom: 32px;

				@include tablet {
					margin-right: 11px;
					margin-bottom: 0;
				}

				@include small-mobile {
					margin-right: 0;
				}

				&-item {
					&:nth-child(1) {
						br {
							display: none;

							@media (max-width: 515px) {
								display: block;
							}
						}
					}

					&:nth-child(3) {
						margin-right: 24px;

						@include laptop-big {
							margin-right: 44px;
						}

						@include small-mobile {
							margin-right: 0;
						}
					}
				}
			}
		}

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
				z-index: -1;

				width: 104%;
				height: 100%;

				background: linear-gradient(
					292.99deg,
					rgba(255, 178, 224, 0.8) 1.24%,
					rgba(255, 229, 245, 0.8) 82.89%,
					rgba(253, 241, 249, 0.8) 96.16%,
					rgba(255, 248, 252, 0.8) 99.22%
				);

				@include laptop-big {
					background: linear-gradient(
						308.55deg,
						rgba(255, 178, 224, 0.8) 1.16%,
						rgba(255, 229, 245, 0.8) 83.53%,
						rgba(253, 241, 249, 0.8) 96.91%,
						rgba(255, 248, 252, 0.8) 100%
					);
				}

				@include tablet {
					content: none;
				}
			}

			img {
				width: 100%;

				min-height: 640px;

				object-fit: cover;

				@include tablet {
					min-height: auto;
				}
			}
		}

		&__title {
			@extend %subtitle-h2;
			margin-bottom: 48px;
			margin-right: 11px;

			@include laptop-big {
				margin-bottom: 40px;
				margin-right: 29px;
			}

			@include tablet {
				margin-right: 100px;
			}

			@include small-mobile {
				margin-right: 0;
				margin-bottom: 24px;
			}
		}

		&__wrap {
			display: flex;
			align-items: center;

			@include tablet {
				justify-content: center;
				display: none;
			}

			.buttons {
				max-width: 201px;
				padding: 14px 6px;

				@include laptop-big {
					max-width: 175px;
				}

			}

			.counter {
				margin-right: 48px;

				@include laptop-big {
					margin-right: 24px;
				}
			}
		}
	}
}
</style>
