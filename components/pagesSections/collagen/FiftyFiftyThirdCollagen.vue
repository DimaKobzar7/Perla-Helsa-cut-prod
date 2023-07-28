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
	<section id="fifty-fifty-third-collagenId" class="fifty-fifty-third-collagen">
		<div class="row align-items-center">
			<div class="col-lg-6">
				<picture class="fifty-fifty-third-collagen__img">
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
					<div class="col-12 col-lg-9 col-xxl-8">
						<div class="fifty-fifty-third-collagen__container">
							<h2
								class="fifty-fifty-third-collagen__title"
								v-html="$t('collagen.fiftyFiftyThird.title')"
							></h2>
							<List>
								<ListItem
									:listContent="$t('collagen.fiftyFiftyThird.text1')"
									svgColor="#A7A8F7"
								/>

								<ListItem
									:listContent="$t('collagen.fiftyFiftyThird.text2')"
									svgColor="#A7A8F7"
								/>

								<ListItem
									:listContent="$t('collagen.fiftyFiftyThird.text3')"
									svgColor="#A7A8F7"
								/>

								<ListItem
									:listContent="$t('collagen.fiftyFiftyThird.text4')"
									svgColor="#A7A8F7"
								/>

								<ListItem
									:listContent="$t('collagen.fiftyFiftyThird.text5')"
									svgColor="#A7A8F7"
								/>

								<ListItem
									:listContent="$t('collagen.fiftyFiftyThird.text6')"
									svgColor="#A7A8F7"
								/>
							</List>
							<p class="fifty-fifty-third-collagen__text">
								<i v-html="$t('collagen.fiftyFiftyThird.text7')"></i>
							</p>
							<div class="fifty-fifty-third-collagen__wrap">
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
#fifty-fifty-third-collagenId {
	overflow: hidden;

	@include tablet {
		padding-bottom: 96px;
	}

	@include small-mobile {
		padding-bottom: 72px;
	}

	.fifty-fifty-third-collagen {
		&__container {
			@include tablet {
				padding: 0 36px;
			}

			@include small-mobile {
				padding: 0 15px;
			}

			.list {
				margin-bottom: 24px;

				@include tablet {
					margin-bottom: 16px;
				}

				@include small-mobile {
					margin-bottom: 12px;
				}

				&-item {
					&:nth-child(4) {
						@include small-mobile {
							margin-right: 60px;
						}
					}
				}
			}
		}

		&__img {
			display: block;

			margin-right: -12px;

			@include tablet {
				margin-bottom: 56px;
				margin-right: 0;
			}

			@include small-mobile {
				margin-bottom: 40px;
			}

			img {
				width: 100%;

				min-height: 770px;

				object-fit: cover;

				@include tablet {
					min-height: auto;
				}
			}
		}

		&__title {
			@extend %subtitle-h2;

			margin-bottom: 48px;

			@include laptop-big {
				margin-bottom: 40px;
			}

			@media (max-width: 790px) {
				margin-right: 116px;
			}

			@media (max-width: 767px) {
				margin-right: 0;
			}

			@include small-mobile {
				margin-bottom: 24px;
			}

			br {
				display: none;

				@include small-mobile {
					display: block;
				}
			}
		}

		&__text {
			margin-bottom: 32px;

			@include tablet {
				margin-bottom: 40px;
			}

			@include small-mobile {
				margin-bottom: 32px;
			}

			i {
				font-weight: 400;
				font-size: 18px;
				line-height: 23px;

				color: $dark-primary;

				@include tablet {
					font-weight: 500;
				}

				@include small-mobile {
					font-size: 16px;
					line-height: 23px;
				}
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

				@include tablet {
					max-width: 185px;
				}

				@include small-mobile {
					max-width: initial;
					padding: 15px 6px 14px 6px;
				}
			}

			.counter {
				margin-right: 48px;

				@include laptop-big {
					margin-right: 24px;
				}

				@include small-mobile {
					display: none;
				}
			}
		}
	}
}
</style>
