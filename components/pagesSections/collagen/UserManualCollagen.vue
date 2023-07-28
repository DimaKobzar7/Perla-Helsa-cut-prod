<script setup>
const showItems = ref(null);
const show = ref(false);

onMounted(() => {
	function handler(entries) {
		return entries.forEach(entry => {
			if (entry.isIntersecting) {
				show.value = true;
			}
		});
	}

	const observer = new IntersectionObserver(handler);

	observer.observe(showItems.value);
});
</script>

<template>
	<section id="collagenUserManualId" class="collagenUserManual">
		<div class="collagenUserManual__container">
			<div class="row collagenUserManual__mb">
				<div class="col-lg-4 col-xxl-4 offset-xxl-1">
					<h2
						class="collagenUserManual__title-usage"
						v-html="$t('collagen.userManual.LeftTitle')"
					></h2>
				</div>
				<div class="col-lg-3 col-xxl-3 offset-lg-1 offset-xxl-0">
					<p
						class="collagenUserManual__dosage"
						v-html="$t('collagen.userManual.instructionOuter1')"
					></p>
				</div>
				<div class="col-lg-4 col-xxl-3">
					<p
						class="collagenUserManual__advise"
						v-html="$t('collagen.userManual.instructionOuter2')"
					></p>
				</div>
			</div>
			<h2
				class="collagenUserManual__title-instruction"
				v-html="$t('collagen.userManual.CenterTitle')"
			></h2>
			<div ref="showItems" class="row collagenUserManual__gap">
				<div class="col-sm-10 col-lg-4 offset-sm-1 offset-lg-0">
					<Transition name="slide-left">
						<div v-if="show" class="collagenUserManual__item">
							<p v-html="$t('collagen.userManual.instructionInner1')"></p>
							<svg
								class="collagenUserManual__arrow"
								width="13"
								height="23"
								viewBox="0 0 13 23"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.399468 19.7259C-0.0695956 20.1949 -0.0695956 20.9587 0.399468 21.4277L1.12028 22.1485C1.34698 22.3752 1.64881 22.5 1.97121 22.5C2.29361 22.5 2.59588 22.3752 2.82214 22.1485L12.6126 12.3585C12.8402 12.1314 12.9645 11.8282 12.9636 11.504C12.9645 11.1812 12.8402 10.878 12.6126 10.6509L2.8132 0.851463C2.58694 0.624756 2.28466 0.5 1.96271 0.5C1.64032 0.5 1.33804 0.624756 1.11178 0.851463L0.390525 1.57228C0.163818 1.79898 0.0390625 2.10081 0.0390625 2.42366C0.0390625 2.74606 0.163818 3.04833 0.390525 3.27415L8.62037 11.5045L0.399468 19.7259Z"
									fill="#A7A8F7"
								/>
								<path
									d="M0.399468 19.7259C-0.0695956 20.1949 -0.0695956 20.9587 0.399468 21.4277L1.12028 22.1485C1.34698 22.3752 1.64881 22.5 1.97121 22.5C2.29361 22.5 2.59588 22.3752 2.82214 22.1485L12.6126 12.3585C12.8402 12.1314 12.9645 11.8282 12.9636 11.504C12.9645 11.1812 12.8402 10.878 12.6126 10.6509L2.8132 0.851463C2.58694 0.624756 2.28466 0.5 1.96271 0.5C1.64032 0.5 1.33804 0.624756 1.11178 0.851463L0.390525 1.57228C0.163818 1.79898 0.0390625 2.10081 0.0390625 2.42366C0.0390625 2.74606 0.163818 3.04833 0.390525 3.27415L8.62037 11.5045L0.399468 19.7259Z"
									stroke="none"
								/>
							</svg>
						</div>
					</Transition>
				</div>
				<div
					class="col-sm-10 col-lg-4 offset-sm-1 offset-lg-0 d-xxl-flex justify-content-xxl-center"
				>
					<Transition name="slide-center">
						<div v-if="show" class="collagenUserManual__item">
							<p v-html="$t('collagen.userManual.instructionInner2')"></p>
							<svg
								class="collagenUserManual__arrow"
								width="13"
								height="23"
								viewBox="0 0 13 23"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0.399468 19.7259C-0.0695956 20.1949 -0.0695956 20.9587 0.399468 21.4277L1.12028 22.1485C1.34698 22.3752 1.64881 22.5 1.97121 22.5C2.29361 22.5 2.59588 22.3752 2.82214 22.1485L12.6126 12.3585C12.8402 12.1314 12.9645 11.8282 12.9636 11.504C12.9645 11.1812 12.8402 10.878 12.6126 10.6509L2.8132 0.851463C2.58694 0.624756 2.28466 0.5 1.96271 0.5C1.64032 0.5 1.33804 0.624756 1.11178 0.851463L0.390525 1.57228C0.163818 1.79898 0.0390625 2.10081 0.0390625 2.42366C0.0390625 2.74606 0.163818 3.04833 0.390525 3.27415L8.62037 11.5045L0.399468 19.7259Z"
									fill="#A7A8F7"
								/>
								<path
									d="M0.399468 19.7259C-0.0695956 20.1949 -0.0695956 20.9587 0.399468 21.4277L1.12028 22.1485C1.34698 22.3752 1.64881 22.5 1.97121 22.5C2.29361 22.5 2.59588 22.3752 2.82214 22.1485L12.6126 12.3585C12.8402 12.1314 12.9645 11.8282 12.9636 11.504C12.9645 11.1812 12.8402 10.878 12.6126 10.6509L2.8132 0.851463C2.58694 0.624756 2.28466 0.5 1.96271 0.5C1.64032 0.5 1.33804 0.624756 1.11178 0.851463L0.390525 1.57228C0.163818 1.79898 0.0390625 2.10081 0.0390625 2.42366C0.0390625 2.74606 0.163818 3.04833 0.390525 3.27415L8.62037 11.5045L0.399468 19.7259Z"
									stroke="none"
								/>
							</svg>
						</div>
					</Transition>
				</div>
				<div
					class="col-sm-10 col-lg-4 offset-sm-1 offset-lg-0 d-xxl-flex justify-content-xxl-end"
				>
					<Transition name="slide-right">
						<div v-if="show" class="collagenUserManual__item">
							<p v-html="$t('collagen.userManual.instructionInner3')"></p>
						</div>
					</Transition>
				</div>
			</div>
			<p
				class="collagenUserManual__text"
				v-html="$t('collagen.userManual.text')"
			></p>
		</div>
	</section>
</template>

<style lang="scss">
#collagenUserManualId {
	margin: 160px 0;

	@include tablet {
		margin: 96px 0;
	}

	@include small-mobile {
		margin: 72px 0;
	}

	//transition start
	.slide-left-enter-active {
		transition: all 0.3s ease;
	}

	.slide-left-leave-active {
		transition: all 0.3s ease;
	}

	.slide-left-enter-from,
	.slide-left-leave-to {
		transform: translateX(-20px);
		opacity: 0;

		@include tablet {
			transform: translate(0px, -20px);
		}
	}

	.slide-center-enter-active {
		transition: all 0.3s ease 300ms;
	}

	.slide-center-leave-active {
		transition: all 0.3s ease 300ms;
	}

	.slide-center-enter-from,
	.slide-center-leave-to {
		transform: translateX(-20px);
		opacity: 0;

		@include tablet {
			transform: translate(0px, -20px);
		}
	}

	.slide-right-enter-active {
		transition: all 0.3s ease 500ms;
	}

	.slide-right-leave-active {
		transition: all 0.3s ease 500ms;
	}

	.slide-right-enter-from,
	.slide-right-leave-to {
		transform: translateX(-20px);
		opacity: 0;

		@include tablet {
			transform: translate(0px, -20px);
		}
	}
	//transition end

	.collagenUserManual {
		&__container {
			margin: 0 auto;
			padding: 0 36px;

			max-width: 1368px;

			@include laptop-big {
				max-width: 1182px;
			}

			@include small-mobile {
				padding: 0 15px;
			}
		}

		&__title-usage {
			margin-bottom: 0;

			font-weight: 500;
			font-size: 32px;
			line-height: 39px;

			color: $dark-primary;

			@include laptop-big {
				margin: 0;
				line-height: 39px;
			}

			@include tablet {
				margin-bottom: 60px;

				font-size: 40px;
				line-height: 48px;
			}

			@include small-mobile {
				margin-bottom: 24px;
				margin-right: -4px;

				font-size: 23px;
				line-height: 28px;
			}

			i {
				font-size: 35px;

				@include tablet {
					font-size: 43px;
					line-height: 48px;
				}

				@include small-mobile {
					font-size: 26px;
				}
			}
		}

		&__title-instruction {
			margin-bottom: 56px;

			font-weight: 500;
			font-size: 36px;
			line-height: 40px;

			text-align: center;

			color: $dark-primary;

			@include laptop-big {
				margin-bottom: 40px;

				font-size: 32px;
				line-height: 39px;
			}

			@include tablet {
				margin-bottom: 45px;

				font-size: 40px;
				line-height: 48px;
			}

			@include small-mobile {
				margin-bottom: 32px;

				font-size: 23px;
				line-height: 28px;
			}

			i {
				font-size: 39px;

				@include laptop-big {
					font-size: 35px;
				}

				@include tablet {
					font-size: 43px;
				}

				@include small-mobile {
					font-size: 26px;
				}
			}
		}

		&__gap {
			@include tablet {
				gap: 45px;
			}

			@include small-mobile {
				gap: 38px;
			}
		}

		&__mb {
			margin-bottom: 64px;

			@include laptop-big {
				margin-bottom: 56px;
			}

			@include tablet {
				margin-bottom: 96px;
			}

			@include small-mobile {
				margin-bottom: 72px;
			}
		}

		&__dosage {
			margin-bottom: 0;

			font-weight: 400;
			font-size: 18px;
			line-height: 24px;

			color: $dark-primary;

			@include laptop-big {
				margin-right: -22px;
			}

			@include tablet {
				margin-bottom: 12px;

				font-size: 22px;
				line-height: 30px;
			}

			@include small-mobile {
				margin-right: 0;

				font-size: 16px;
				line-height: 21px;
			}

			br {
				display: none;

				@media (max-width: 800px) {
					display: block;
				}
			}
		}

		&__advise {
			margin: 0 15px 0 0;

			font-weight: 400;
			font-size: 18px;
			line-height: 24px;

			color: $dark-primary;

			@include laptop-big {
				margin: 0 33px 0 30px;
			}

			@include tablet {
				margin: 0 27px 0 0;

				font-size: 22px;
				line-height: 30px;

				br {
					display: none;
				}
			}

			@include small-mobile {
				margin-right: 0;

				font-size: 16px;
				line-height: 21px;
			}
		}

		&__item {
			position: relative;


      display: flex;
      align-items: center;
      justify-content: center;

			width: 390px;
      height: 100%;

			padding: 24px 0 23px 0;

			background: linear-gradient(0deg, #c5c6fa, #c5c6fa),
				linear-gradient(270deg, #e3e5ff 0.52%, #a5a6f6 100%);

			border-radius: 15px;

			@include laptop-big {
				padding: 24px 0 22px 0;
				width: auto;
			}

			@include tablet {
				padding: 22px 0;
				border-radius: 10px;
			}

			@include small-mobile {
				padding: 28px 0;

				border-radius: 8px;
			}

			p {
				margin: 0;

				font-weight: 400;
				font-size: 23px;
				line-height: 28px;

				text-align: center;

				@include laptop-big {
					line-height: 29px;
				}

				@include tablet {
					font-size: 23px;
					line-height: 29px;
				}

				@include small-mobile {
					font-size: 18px;
					line-height: 22px;
				}

				b {
					font-weight: 500;

					@include tablet {
						font-weight: 700;
						font-size: 22px;
						line-height: 30px;
					}

					@include small-mobile {
						font-size: 18px;
						line-height: 22px;
					}
				}
			}
		}

		&__text {
			margin-top: 47px;
			margin-bottom: 0;

			font-weight: 400;
			font-size: 18px;
			line-height: 24px;

			color: $dark-primary;

			text-align: center;

			@include laptop-big {
				margin-top: 40px;

				line-height: 23px;
			}

			@include tablet {
				margin-top: 45px;

				line-height: 24px;
			}

			@include small-mobile {
				margin: 32px auto 0 auto;
				padding-right: 6px;

				font-size: 16px;
				line-height: 21px;

				text-align: center;
			}
		}

		&__arrow {
			position: absolute;

      top: 50%;
			right: -37px;

      transform: translateY(-50%);

			@include laptop-big {
				right: -20px;
			}

			@include tablet {
        right: 50%;
        transform: rotate(90deg) translate(-50%, -50%);
				top: auto;
				bottom: -40px;
			}

			@include small-mobile {
				bottom: -38px;
			}
		}
	}
}
</style>
