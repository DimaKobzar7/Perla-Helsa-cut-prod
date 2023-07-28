<script setup>
defineProps({
	timeToRead: {
		type: String,
		required: true
	},

	title: {
		type: String,
		required: true
	},

	text: {
		type: String,
		required: true
	},

	link: {
		type: String,
		required: true
	},

	poster: {
		type: String,
		required: true
	},

	mobilePoster: {
		type: String,
		required: true
	},

	alt: {
		type: String,
		required: true
	}
});
const localePath = useLocalePath();
</script>

<template>
	<section id="fifty-fifty-blog-right-imgId" class="fifty-fifty-blog-right-img">
		<div class="container">
			<div class="row align-items-center">
				<div class="col-lg-5">
					<div class="fifty-fifty-blog-right-img__wrap">
						<p class="fifty-fifty-blog-right-img__time" v-html="timeToRead"></p>

						<h2 class="fifty-fifty-blog-right-img__title">
							<span v-html="title"></span>
							<svg
								width="43"
								height="21"
								viewBox="0 0 43 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M28.9557 20.6842C28.3699 21.1053 27.3949 21.1053 26.7886 20.6842C26.2028 20.2773 26.2028 19.6001 26.7886 19.1942L37.7769 11.5622L1.51712 11.5622C0.671777 11.5613 8.6595e-07 11.0947 9.17279e-07 10.5075C9.68596e-07 9.92055 0.671777 9.43876 1.51712 9.43876L37.7769 9.43876L26.7886 1.82093C26.2028 1.39983 26.2028 0.721737 26.7886 0.315833C27.3949 -0.105274 28.3713 -0.105274 28.9557 0.315833L42.5453 9.75452C43.1516 10.1614 43.1516 10.8387 42.5453 11.2446L28.9557 20.6842Z"
									fill="#1D1D1B"
								/>
							</svg>
						</h2>
						<p class="fifty-fifty-blog-right-img__text" v-html="text"></p>
						<nuxt-link
							v-if="link"
							:to="localePath(`/someRoute/` + link)"
							class="fifty-fifty-blog-right-img__link"
						></nuxt-link>
					</div>
				</div>

				<div class="col-lg-6 offset-lg-1">
					<div class="fifty-fifty-blog-right-img__img-wrap">
						<picture>
							<source :srcset="poster" media="(min-width: 576px)" :alt="alt" />
							<img :src="mobilePoster" :alt="alt" />
						</picture>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
#fifty-fifty-blog-right-imgId {
	@include tablet {
		position: relative;

		padding: 0;
	}

	.container {
		@include laptop {
			padding: 0 36px;
			max-width: 100%;
		}

		@include tablet {
			padding: 0;
		}
	}

	.fifty-fifty-blog-right-img {
		&__wrap {
			position: relative;

			padding: 40px 0;

			margin-left: -12px;
			margin-right: 12px;

			@include laptop-big {
				margin-right: 18px;
			}

			@include laptop {
				margin-left: 0;
			}

			@include tablet {
				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				display: flex;
				flex-direction: column;
				justify-content: flex-end;

				margin-right: 0;
				margin-left: 0;
				padding: 32px 36px;

				height: 100%;

				background: linear-gradient(
					359.94deg,
					rgba(0, 0, 0, 0.5) 34.32%,
					rgba(0, 0, 0, 0) 49.98%
				);
			}

			@include small-mobile {
				padding: 15px;

				background: linear-gradient(
					359.94deg,
					rgba(0, 0, 0, 0.5) 42.32%,
					rgba(0, 0, 0, 0) 55.98%
				);
			}

			&:hover {
				h2 {
					svg {
						margin-left: 24px;
					}
				}
			}
		}

		&__img {
			&-wrap {
				margin-right: -17vw;
				margin-left: -12px;

				@media (max-width: 1800px) {
					margin-right: -14vw;
				}

				@media (max-width: 1700px) {
					margin-right: -12vw;
				}

				@media (max-width: 1600px) {
					margin-right: -10vw;
				}

				@include laptop-big {
					margin-right: -14vw;
				}

				@media (max-width: 1450px) {
					margin-right: -12vw;
				}

				@media (max-width: 1350px) {
					margin-right: -9vw;
				}

				@media (max-width: 1250px) {
					margin-right: -6vw;
				}

				@include laptop {
					margin-right: -4vw;
				}

				@include tablet {
					margin-left: 0;
					margin-right: 0;
				}

				img {
					width: 100%;

					@include laptop-big {
						min-height: 430px;
						object-fit: cover;
					}

					@include tablet {
						min-height: initial;
					}

					@include small-mobile {
						min-height: 320px;
						max-height: 320px;
					}
				}
			}
		}

		&__time {
			margin-bottom: 24px;

			font-weight: 700;
			font-size: 16px;
			line-height: 21px;

			color: $dark-primary;

			@include tablet {
				color: $white;
			}

			@include small-mobile {
				margin-bottom: 8px;
			}
		}

		&__title {
			@extend %subtitle-h2;

			margin-bottom: 24px;

			@include tablet {
				margin-bottom: 16px;

				color: $white;
			}

			@include small-mobile {
				margin-bottom: 8px;
			}

			svg {
				margin-left: 16px;

				transition: 0.3s margin-left;

				@include tablet {
					display: none;
				}
			}

			span {
				br {
					display: none;
				}
			}
		}

		&__text {
			margin-bottom: 0;

			font-weight: 400;
			font-size: 18px;
			line-height: 24px;

			@include tablet {
				color: $white;
			}

			@include small-mobile {
				font-size: 16px;
				line-height: 21px;
			}
		}

		&__link {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
		}
	}
}
</style>
