<script setup>
const config = useRuntimeConfig().public;
</script>

<template>
	<div class="banner" id="cod-six-pack">
		<div class="banner__wrap">
			<div class="banner__info">
				<div class="banner__discount">
					<span class="discount-percent">-25%</span>
					<span
						class="banner__header"
						v-html="$t('codSixPackBanner.benefit')"
					></span>
				</div>

				<p
					class="discount-text"
					v-html="$t('codSixPackBanner.discountText')"
				></p>

				<div class="banner__inner">
					<button class="banner__button">
						{{ $t('codSixPackBanner.button') }}
					</button>
					<p v-html="$t('codSixPackBanner.promotion')"></p>
				</div>
			</div>

			<div class="banner__product">
				<picture>
					<source
						:srcset="`
							${config.images}/someRoute.png 1x,
							${config.images}/someRoute.png 2x`"
						media="(min-width: 1540px)"
						alt="codSixPack"
					/>
					<source
						:srcset="`
							${config.images}/someRoute.webp 1x,
							${config.images}/someRoute.webp 2x`"
						media="(min-width: 1540px)"
						alt="codSixPack"
					/>
					<source
						:srcset="`
												${config.images}/someRoute.png 1x,
												${config.images}/someRoute.png 2x`"
						media="(min-width: 992px)"
						alt="codSixPack"
					/>
					<source
						:srcset="`
												${config.images}/someRoute.webp 1x,
												${config.images}/someRoute.webp 2x`"
						media="(min-width: 992px)"
						alt="codSixPack"
					/>
					<source
						:srcset="`
												${config.images}/someRoute.png 1x,
												${config.images}/someRoute.png 2x`"
						media="(min-width: 576px)"
						alt="codSixPack"
					/>
					<source
						:srcset="`
												${config.images}/someRoute.webp 1x,
												${config.images}/someRoute.webp 2x`"
						media="(min-width: 576px)"
						alt="codSixPack"
					/>
					<source
						:srcset="`
												${config.images}/someRoute.png 2x`"
						alt="codSixPack"
					/>
					<source
						:srcset="`
												${config.images}/someRoute.webp 2x`"
						alt="codSixPack"
					/>
					<img
						:src="`${config.images}/someRoute.png`"
						alt="codSixPack"
					/>
				</picture>

				<div class="banner__product-price">
					<span class="old-price">669₴</span>
					<span>498₴</span>
					<span class="quantity">за 1 уп.</span>
				</div>
			</div>
		</div>
		<NuxtLink
			id="cod-six-pack-link"
			class="banner__link"
			:to="localePath('/somePage')"
		></NuxtLink>
	</div>
</template>

<style lang="scss" scoped>
.banner {
	position: relative;

	width: 100%;
	height: 100%;

	display: flex;

	border-radius: 30px;

	background: radial-gradient(
		64.09% 113.56% at 50% 44.42%,
		#e4ee6c 16.98%,
		#a2bb24 100%
	);

	@include laptop-big {
		background: radial-gradient(
			64.09% 113.56% at 50% 44.42%,
			#e4ee6c 16.98%,
			#a2bb24 100%
		);
	}

	@include tablet {
		border-radius: 13px;

		background: radial-gradient(
			64.09% 113.56% at 50% 44.42%,
			#e4ee6c 16.98%,
			#a2bb24 100%
		);
	}

	@include small-mobile {
		border-radius: 15px;

		background: radial-gradient(
				65.61% 26.08% at 71.45% -0%,
				#b2d432 0%,
				rgba(178, 212, 50, 0.07) 100%
			),
			radial-gradient(
				64.09% 113.56% at 50% 44.42%,
				#e4ee6c 16.98%,
				#a2bb24 100%
			);
	}

	&__wrap {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: flex-end;

		position: relative;
		text-decoration: none;

		cursor: pointer;

		@include mobile {
			gap: 10px;
		}

		@include small-mobile {
			flex-direction: column-reverse;
			gap: 0;
		}
	}

	&__inner {
		display: flex;
		align-items: center;
		justify-content: space-between;

		gap: 24px;

		@include laptop-big {
			gap: 8px;
		}

		@include tablet {
			gap: 32px;
		}

		@include mobile {
			gap: 16px;
		}

		@include small-mobile {
			flex-direction: row-reverse;
			gap: 12px;
		}

		p {
			margin-bottom: 0;
			margin-right: 32px;

			font-size: 18px;
			line-height: 22px;

			color: $dark-primary;

			@include laptop-big {
				font-size: 16px;
				line-height: 19px;
			}

			@include tablet {
				font-size: 10px;
				line-height: 12px;
			}

			@include small-mobile {
				margin-right: 8px;

				font-size: 11px;
				line-height: 13px;
			}
		}
	}

	&__header {
		font-weight: 700;
		font-size: 30px;
		line-height: 35px;

		@include laptop-big {
			font-size: 28px;
			line-height: 32px;
		}

		@include laptop {
			font-size: 25px;
			line-height: 30px;
		}

		@include tablet {
			margin-right: 24px;

			font-size: 15px;
			line-height: 17px;
		}

		@include mobile {
			font-size: 14px;
			line-height: 14px;
		}

		@include small-mobile {
			font-size: 16px;
			line-height: 18px;
		}
	}

	&__link {
		position: absolute;

		width: 100%;
		height: 100%;
	}

	&__product {
		position: relative;

		display: flex;
		flex-direction: column;
		justify-content: center;

		@media (max-width: 413px) {
			height: 184px;
		}

		img {
			@media (max-width: 413px) {
				width: 100%;
			}
		}

		&-price {
			position: absolute;
			width: 105px;
			height: 78px;
			background: $yellow-fa;
			box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.2);
			border-radius: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			left: 5%;
			top: 30%;

			@include laptop-big {
				top: 28%;

				width: 97px;
				height: 70px;
			}

			@include tablet {
				top: 30%;
				left: 3%;
				width: 48px;
				height: 35px;
			}

			@include small-mobile {
				width: 65px;
				height: 48px;
				right: 4%;
				top: 20%;
				left: auto;
			}

			span {
				font-size: 28px;
				line-height: 31px;
				padding: 0;
				margin: 0;

				@include laptop-big {
					font-size: 26px;
					line-height: 32px;
				}

				@include tablet {
					font-size: 13px;
					line-height: 14px;
				}

				@include small-mobile {
					display: block;
					font-size: 17px;
					line-height: 19px;
				}

				&.old-price {
					font-size: 17px;
					line-height: 18px;
					color: $black-53;
					position: relative;

					@include laptop-big {
						font-size: 16px;
						line-height: 18px;
					}

					@include tablet {
						font-size: 8px;
						line-height: 8px;
					}

					@include small-mobile {
						font-size: 11px;
						line-height: 11px;
					}

					&:before {
						content: '';
						position: absolute;
						width: 100%;
						height: 1px;
						background: $black;
						transform: rotate(15deg);
						top: 7px;
						left: 0;
						@include tablet {
							top: 4px;
						}
						@include small-mobile {
							top: 5px;
						}
					}
				}
			}

			.quantity {
				font-size: 13px;
				line-height: 8px;
				color: $black-53;
				@include laptop-big {
					font-size: 11px;
					line-height: 8px;
				}
				@include tablet {
					font-size: 6px;
					line-height: 8px;
				}
				@include mobile {
					font-size: 8px;
					line-height: 11px;
				}
			}
		}
	}

	&__discount {
		display: flex;
		align-items: center;
		gap: 35px;

		margin-bottom: 25px;

		@include laptop-big {
			margin-bottom: 30px;
			gap: 32px;
		}

		@include tablet {
			margin-bottom: 12px;
			gap: 10px;
		}

		@include small-mobile {
			margin-bottom: 8px;

			gap: 12px;
		}
	}

	&__info {
		display: flex;
		flex-direction: column;
		justify-content: center;

		max-width: 636px;

		color: $white;

		@include laptop-big {
			max-width: 562px;
		}

		@include laptop {
			max-width: 425px;
		}

		@include tablet {
			max-width: 321px;
		}

		@include mobile {
			max-width: 290px;
		}
		@include small-mobile {
			max-width: initial;
			display: flex;
			justify-content: center;

			padding: 0 16px;
		}
	}

	&__button {
		display: flex;
		justify-content: center;
		align-items: center;

		max-width: 306px;
		width: 100%;
		padding: 12px 20px;

		font-weight: 500;
		font-size: 22px;
		line-height: 27px;

		color: $white;

		background: $dark-primary;

		border: none;

		border-radius: 70px;

		cursor: pointer;

		@include laptop-big {
			padding: 11px 20px;

			font-size: 23px;
			line-height: 28px;
		}

		@include laptop {
			max-width: 170px;
			padding: 10px 14px;

			font-size: 15px;
			line-height: 13px;
		}

		@include tablet {
			padding: 5px 14px;
			max-width: 120px;
			font-size: 9px;
			line-height: 11px;

			border-radius: 30px;
		}
		@include small-mobile {
			flex-shrink: 0;
			max-width: 219px;

			padding: 9px 16px;

			font-size: 16px;
			line-height: 21px;

			border-radius: 40px;
		}

		@media (max-width: 413px) {
			flex-shrink: 1;
		}
	}
}

.discount-percent {
	font-weight: 500;
	font-size: 120px;
	line-height: 120px;

	@include laptop-big {
		font-size: 106px;
		line-height: 106px;
	}

	@include laptop {
		font-size: 92px;
	}

	@include tablet {
		font-size: 55px;

		line-height: 55px;
	}

	@include small-mobile {
		font-size: 57px;
		line-height: 57px;
	}
}

.discount-text {
	margin-bottom: 82px;

	font-size: 24px;
	line-height: 28px;

	color: $dark-primary;

	@include laptop-big {
		margin-bottom: 58px;

		font-size: 20px;
		line-height: 24px;
	}

	@include tablet {
		margin-bottom: 44px;

		font-size: 13px;
		line-height: 15px;
	}

	@include small-mobile {
		margin-bottom: 24px;

		font-size: 14px;
		line-height: 16px;
	}
}
</style>
