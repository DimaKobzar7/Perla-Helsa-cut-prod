<script setup>
import VideoBlock from '~/components/pagesSections/mainPage/VideoBlock.vue';
import Button from '~/components/ui/Button.vue';
const localePath = useLocalePath();
</script>

<template>
	<section class="create">
		<VideoBlock
			:posterTitle="$t('videoDescription.title')"
			:posterText="$t('videoDescription.descriprion')"
			videoPath="https://back.perlahelsa.ua/storage/yii_files/create_and_help.mp4"
		/>
		<div id="videoDescription" class="video-description">
			<img
				class="video-description__bg video-description__bg--house"
				src="~/someRoute.svg"
				alt="house"
			/>
			<img
				class="video-description__bg video-description__bg--sun"
				src="~/someRoute.svg"
				alt="sun"
			/>
			<div class="video-description__container">
				<h2 class="video-description__title">
					{{ $t('videoDescription.title') }}
				</h2>
				<div class="row">
					<div class="col-sm-6 col-xxl-5">
						<div class="video-description__text-wrap mb-sm-0--custom">
							<p
								class="video-description__text"
								v-html="$t('videoDescription.firstCol.firstParagraph')"
							></p>
							<p
								class="video-description__text video-description__text--smHide"
								v-html="$t('videoDescription.firstCol.secondParagraph')"
							></p>
						</div>
					</div>
					<div class="col-sm-6 col-xxl-5 offset-lg-0 offset-xxl-2">
						<div class="video-description__text-wrap ms-md-2--custom">
							<p
								class="video-description__text video-description__text--smShow"
								v-html="$t('videoDescription.smText')"
							></p>
							<p
								class="video-description__text video-description__text--smHide"
								v-html="$t('videoDescription.secondCol.firstParagraph')"
							></p>
							<p
								class="video-description__text"
								v-html="$t('videoDescription.secondCol.secondParagraph')"
							></p>
						</div>
					</div>
				</div>
				<div class="video-description__btn-container">
					<Button class="buttons buttons__learn-more">
						<NuxtLink :to="localePath(`/someRoute`)">{{
							$t('buttons.learnMore')
						}}</NuxtLink>
					</Button>
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
#videoDescription {
	position: relative;
	padding: 120px 0 96px;

	overflow: hidden;

	@include laptop-big {
		padding: 120px 0;
	}

	@include tablet {
		padding: 60px 0;
	}

	@include small-mobile {
		padding-top: 40px;
		padding-bottom: 59px;
	}

	.video-description {
		&__container {
			margin: 0 auto;
			max-width: 1296px;

			@include laptop-big {
				max-width: 1182px;
				padding: 0 36px;
			}

			@include small-mobile {
				padding: 0 14px;
			}
		}

		&__btn-container {
			display: flex;
			justify-content: flex-end;

			@include small-mobile {
				justify-content: center;
			}
		}

		&__title {
			margin-bottom: 51px;

			font-weight: 500;
			font-size: 32px;
			line-height: 39px;

			color: $dark-primary;

			@include laptop-big {
				margin-bottom: 40px;
			}

			@include tablet {
				margin-bottom: 47px;

				font-size: 23px;
			}

			@include small-mobile {
				margin-bottom: 28px;

				font-size: 31px;
				line-height: 33px;
			}
		}

		&__text {
			margin: 0;

			font-weight: 400;
			font-size: 23px;
			line-height: 28px;

			color: $dark-primary;

			@include tablet {
				font-size: 18px;
				line-height: 25px;
			}

			@include small-mobile {
				font-size: 16px;
				line-height: 21px;
			}

			&:not(:last-child) {
				margin-bottom: 36px;

				@include small-mobile {
					margin-bottom: 28px;
				}
			}

			&--smHide {
				@include laptop-big {
					display: block;
				}

				@include small-mobile {
					display: none;
				}
			}

			&--smShow {
				display: none;

				@include small-mobile {
					display: block;
				}
			}

			&-wrap {
				margin-bottom: 55px;

				@include laptop-big {
					margin-bottom: 58px;
				}

				@include tablet {
					margin-bottom: 28px;
				}
			}
		}

		&__bg {
			position: absolute;
			z-index: -1;

			&--sun {
				bottom: 190px;
				left: -150px;
				height: 530px;

				@include laptop-big {
					bottom: 230px;
					left: -104px;
					height: 465px;
				}

				@include tablet {
					bottom: 285px;
					left: -45px;
					height: 230px;
				}

				@include small-mobile {
					bottom: 330px;
					left: -75px;
					height: 290px;
				}
			}

			&--house {
				right: 0;
				bottom: 140px;
				height: 330px;

				@include laptop-big {
					right: -35px;
					bottom: 155px;
					height: 305px;
				}

				@include tablet {
					right: -10px;
					bottom: 245px;
					height: 210px;
				}

				@include small-mobile {
					right: -10px;
					bottom: 155px;
					height: 195px;
				}
			}
		}

		&__link {
			position: relative;

			display: inline-block;
			padding-bottom: 8px;

			font-weight: 500;
			font-size: 23px;
			line-height: 18px;
			color: $dark-primary;

			text-decoration: none;

			@include laptop-big {
				line-height: 28px;
			}

			@include tablet {
				padding-bottom: 5px;
				font-size: 18px;
				line-height: 18px;
			}

			@include small-mobile {
				padding-bottom: 3px;
				font-size: 16px;
				line-height: 21px;
			}

			&:after {
				content: '';

				position: absolute;
				bottom: 0;
				left: 0;

				display: block;
				width: 0;
				height: 2px;

				background-color: $dark-primary;
				transition: width 0.3s;
			}

			&:hover {
				&:after {
					width: 100%;
				}
			}

			&:active {
				font-weight: 700;
			}
		}
	}
	//helpers
	.mb-sm-0--custom {
		@include small-mobile {
			margin-bottom: 0;
		}
	}

	.ms-md-2--custom {

		@include laptop-big {
			margin-left: 6px;
		}

		@include tablet {
			margin-left: 0;
		}
	}

	.br-fc-fp {
		&-xl {
			@include desktop {
				display: none;
			}

			@include tablet {
				display: none;
			}
		}

		&-sm {
			display: none;

			@include small-mobile {
				display: block;
			}
		}
	}
	.br-fc-sp {
		&-xl {
			@include desktop {
				display: none;
			}

			@include tablet {
				display: none;
			}
		}
		&-md {
			display: none;

			@include tablet {
				display: block;
			}

			@include small-mobile {
				display: none;
			}
		}
		&-sm {
			@include tablet {
				display: none;
			}

			@include small-mobile {
				display: block;
			}
		}
	}

	.br-sc-sp {
		&-md {
			display: none;

			@include tablet {
				display: block;
			}

			@include small-mobile {
				display: none;
			}
		}
		&-sm {
			display: none;

			@include small-mobile {
				display: block;
			}
		}
	}
}
</style>
