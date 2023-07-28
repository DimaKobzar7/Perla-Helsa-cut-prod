<script setup>
const config = useRuntimeConfig().public;
</script>

<template>
	<section
		id="fifty-fifty-beauty-age-firstId"
		class="fifty-fifty-beauty-age-first"
	>
		<div class="row align-items-center">
			<div class="col-lg-6">
				<div class="fifty-fifty-beauty-age-first__picture-container">
					<picture class="fifty-fifty-beauty-age-first__img">
						<source
							:srcset="`
								${config.images}/someField.webp 1x,
								${config.images}/someField.webp 2x`"
							media="(min-width: 1540px)"
							alt="fifty-fifty-beauty-age-first-img"
						/>

						<source
							:srcset="`
								${config.images}/someField.jpg 1x,
								${config.images}/someField.jpg 2x`"
							media="(min-width: 1540px)"
							alt="fifty-fifty-beauty-age-first-img"
						/>

						<source
							:srcset="`
								${config.images}/someField.webp 1x,
								${config.images}/someField.webp 2x`"
							media="(min-width: 992px)"
							alt="fifty-fifty-beauty-age-first-img"
						/>

						<source
							:srcset="`
								${config.images}/someField.jpg 1x,
								${config.images}/someField.jpg 2x`"
							media="(min-width: 992px)"
							alt="fifty-fifty-beauty-age-first-img"
						/>

						<source
							:srcset="`
								${config.images}/someField.webp 1x,
								${config.images}/someField.webp 2x`"
							media="(min-width: 576px)"
							alt="fifty-fifty-beauty-age-first-img"
						/>

						<source
							:srcset="`
								${config.images}/someField.jpg 1x,
								${config.images}/someField.jpg 2x`"
							media="(min-width: 576px)"
							alt="fifty-fifty-beauty-age-first-img"
						/>

						<source
							:srcset="`
								${config.images}/someField.webp 1x,
								${config.images}/someField.webp 2x`"
							alt="fifty-fifty-beauty-age-first-img"
						/>
						<source
							:srcset="`
								${config.images}/someField.jpg 1x,
								${config.images}/someField.jpg 2x`"
							alt="fifty-fifty-beauty-age-first-img"
						/>

						<img
							:src="`${config.images}/someField.jpg`"
							alt="fifty-fifty-beauty-age-first-img"
						/>
					</picture>
				</div>
			</div>
			<div class="col-lg-5 offset-lg-1">
				<div class="row">
					<div class="col-12 col-lg-9 col-xxl-8">
						<div class="fifty-fifty-beauty-age-first__container">
							<div class="fifty-fifty-beauty-age-first__wrap">
								<p
									class="fifty-fifty-beauty-age-first__text"
									v-html="$t('beautyAge.fiftyFifty.first.text1')"
								></p>

								<p
									class="fifty-fifty-beauty-age-first__text"
									v-html="$t('beautyAge.fiftyFifty.first.text2')"
								></p>

								<p
									class="fifty-fifty-beauty-age-first__text"
									v-html="$t('beautyAge.fiftyFifty.first.text3')"
								></p>
							</div>
							<div class="fifty-fifty-beauty-age-first__label">
								<p v-html="$t('beautyAge.fiftyFifty.first.label')"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
#fifty-fifty-beauty-age-firstId {
	overflow: hidden;

	.fifty-fifty-beauty-age-first {
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
				background: linear-gradient(
					180deg,
					rgba(227, 229, 255, 0.23) 0%,
					#e3e5ff 100%
				);

				width: 105%;
				height: 100%;
				z-index: -1;

				@include tablet {
					content: none;
				}
			}

			img {
				width: 100%;

				min-height: 600px;
				object-fit: cover;

				@include laptop-big {
					min-height: 670px;
				}

				@include tablet {
					min-height: auto;
				}
			}
		}

		&__container {
			position: relative;

			margin-left: -11px;

			@include tablet {
				margin-left: 0;

				padding: 56px 36px 96px 36px;
			}

			@include small-mobile {
				padding: 40px 15px 72px 15px;
			}

			&:after {
				@include tablet {
					content: '';
					position: absolute;
					left: 0;
					top: 0;
					z-index: -1;

					width: 105%;
					height: 100%;

					background: linear-gradient(
						180deg,
						rgba(227, 229, 255, 0.23) 0%,
						#e3e5ff 100%
					);
				}
			}
		}

		&__wrap {
			margin-bottom: 56px;

			@include tablet {
				margin-bottom: 40px;
				margin-right: 40px;
			}

			@include small-mobile {
				margin-bottom: 32px;
				margin-right: 0;
			}
		}

		&__text {
			margin-bottom: 0;

			font-weight: 400;
			font-size: 18px;
			line-height: 24px;

			color: $dark-primary;

			@include small-mobile {
				font-size: 16px;
				line-height: 21px;
			}

			&:not(:last-child) {
				margin-bottom: 24px;

				@include tablet {
					margin-bottom: 12px;
				}
			}

			&:nth-child(1) {
				@include small-mobile {
					margin-right: 37px;

					@media (max-width: 400px) {
						margin-right: 0;
					}
				}
			}
		}

		&__label {
			padding: 24px 40px;

			background-color: $violet-b7;

			border-radius: 15px;

			@include laptop-big {
				padding: 24px 32px;

				border-radius: 12px;
			}

			@include tablet {
				margin-bottom: 0;
				padding: 20px;

				border-radius: 10px;
			}

			@include small-mobile {
				padding: 16px 26px;

				border-radius: 8px;
			}

			p {
				margin-bottom: 0;

				font-weight: 500;
				font-size: 20px;
				line-height: 28px;

				color: $white;

				text-align: center;

				@include laptop-big {
					line-height: 25px;
				}

				@include tablet {
					margin: 0 auto;

					max-width: 490px;

					line-height: 26px;
				}

				@include small-mobile {
					max-width: 290px;

					font-size: 16px;
					line-height: 21px;
				}
			}
		}
	}
}
</style>
