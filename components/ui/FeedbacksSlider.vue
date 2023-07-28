<script setup>
import { Lazy, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/navigation';
import PopupModal from '~/components/ui/PopupModal.vue';
import FeedbackModal from '~/components/pagesSections/feedback/FeedbackModal.vue';
import Button from '~/components/ui/Button.vue';
import Preloader from './Preloader.vue';
import FeedbacksSliderItem from '~/components/ui/FeedbacksSliderItem.vue';
import ThankPopupReviews from '~/components/ui/ThankPopupReviews.vue';
import { useFeedbacksStore } from '~/store/feedbacksStore';
import { ref, watch } from 'vue';

const modules = [Lazy, Navigation];

const feedbacksStore = useFeedbacksStore();

const showSelectModal = ref(false);

const props = defineProps({
	oneProductId: {
		type: Number,
		required: true
	}
});

const addMoreSlidesWithComments = () => {
	if (
		feedbacksStore.swiperCommentsForOneProduct.length <
		feedbacksStore.pageCounterForOneProductSwiper
	) {
		return;
	}

	if (feedbacksStore.swiperCommentsForOneProduct.length > 4) {

		feedbacksStore.getAllCommentsForOneProductSwiper(props.oneProductId);
	}

};

// FOR MODAL BELOW
function closeModal() {
	feedbacksStore.showPopupWithForm = false;
}

const showModal = () => {
	feedbacksStore.showPopupWithForm = !feedbacksStore.showPopupWithForm;

	feedbacksStore.dataVariable = '';
	feedbacksStore.dataVariable = '';
	feedbacksStore.dataVariable = '';
	feedbacksStore.dataVariable = '';
	feedbacksStore.dataVariable = [];
	feedbacksStore.dataVariable = '5';
};

const emitOpenModalSelect = () => {
	showSelectModal.value = true;
};

const emitCloseModalSelect = () => {
	showSelectModal.value = false;
};

const currentRoute = ref(useRouter().currentRoute.value.href);

watch(useRouter().currentRoute, () => {
	currentRoute.value = useRouter().currentRoute.value.href;
});

const closeThankPopupReviews = () => {
	feedbacksStore.showThanksPopup = false;
};
</script>

<template>
	<Teleport to="body">
		<PopupModal
			class="banner-popup"
			@close="feedbacksStore.showPopupWithForm = false"
			:modal-active="feedbacksStore.showPopupWithForm"
		>
			<FeedbackModal
				@closeModal="closeModal"
				@closeSelect="emitCloseModalSelect"
				@openSelect="emitOpenModalSelect"
				:modalState="showSelectModal"
				:setSelect="false"
				:productId="props.oneProductId"
			/>
		</PopupModal>
	</Teleport>

	<ThankPopupReviews @close="closeThankPopupReviews" />
	<div class="container-wrapper">
		<div class="container__title container">
			<h2>
				{{
					feedbacksStore.swiperCommentsForOneProduct.length
						? $t('allReviews.reviewsSlider.title')
						: $t('allReviews.reviewsSlider.noComments')
				}}
			</h2>
			<Button class="buttons buttons__consultation" @click="showModal">{{
				$t('buttons.feedback')
			}}</Button>
		</div>
		<div
			class="container container-swiper feedback-swiper"
			v-if="feedbacksStore.swiperCommentsForOneProduct.length"
		>
			<div
				v-if="
					feedbacksStore.dataLoaded &&
					!feedbacksStore.swiperCommentsForOneProduct.length
				"
			>
				<Preloader />
			</div>

			<swiper
				v-else
				:modules="modules"
				navigation
				@reachEnd="addMoreSlidesWithComments"
				:breakpoints="{
					0: {
						spaceBetween: 12,
						slidesPerView: 'auto',
						centeredSlides: true
					},
					360: {
						spaceBetween: 12,
						slidesPerView: 1.3,
						centeredSlides: false
					},
					576: {
						spaceBetween: 12,
						centeredSlides: false,
						slidesPerView: 1.5
					},
					768: {
						spaceBetween: 24,
						centeredSlides: false,
						slidesPerView: 2.5
					},
					992: {
						spaceBetween: 30,
						centeredSlides: false,
						slidesPerView: 3
					},
					1200: {
						spaceBetween: 30,
						slidesPerView: 4
					},
					1540: {
						spaceBetween: 24,
						slidesPerView: 4
					}
				}"
			>
				<swiper-slide
					v-for="someSecretData of feedbacksStore.swiperCommentsForOneProduct"
				>
					<FeedbacksSliderItem
						:someSecretData1="someSecretData"
						:someSecretData2="someSecretData"
						:someSecretData3="someSecretData"
						:someSecretData4="someSecretData"
						:key="someSecretData"
					/>
				</swiper-slide>
			</swiper>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.banner {
	&-popup {
		:deep(.popup-modal) {
			overflow-y: auto;

			&.is-open {
				z-index: 1031;
			}

			.popup-modal__inner {
				transform: translate(-50%, -50%);
				left: 50%;
				top: 50%;

				overflow: auto;

				width: 636px;

				padding: 64px;

				border-radius: 15px;

				@include laptop-big {
					padding: 56px 40px;

					width: 539px;
				}

				@include tablet {
					padding: 40px 36px;

					width: 576px;
				}

				@include small-mobile {
					padding: 32px 15px;

					width: 384px;
				}

				@media (max-width: 389px) {
					padding: 24px 12px;

					width: 336px;
				}

				.inner__close-button {
					top: 24px;
					right: 24px;
					z-index: 200;

					width: 16px;
					height: 16px;

					@include small-mobile {
						top: 20px;
						right: 20px;
					}
				}
			}
		}
	}
}

.container-wrapper {
	padding: 160px 0;
	background-color: $gray-f9f;

	@include laptop-big {
		max-width: 100%;
		padding: 120px 0;
	}

	@include tablet {
		padding: 96px 0;
	}

	@include small-mobile {
		padding: 72px 0;
	}

	.buttons__consultation {
		max-width: 266px;

		padding: 13px;

		@include laptop-big {
			font-weight: 500;
			font-size: 18px;
			line-height: 23px;
		}

		@include tablet {
			margin-bottom: 0;
			height: max-content;
		}

		@include small-mobile {
			max-width: 345px;
			margin: 0 auto;
		}

		&:hover {
			background-color: $black-005;
		}

		&:active {
			background-color: $black-01;
		}
		&:after {
			content: none;
		}
	}
	.container__title {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		padding: 0;

		@include tablet {
			padding: 0 36px;
			max-width: 100%;
			align-items: center;
		}

		@include mobile {
			padding: 0 35px;
		}

		@include small-mobile {
			padding: 0 15px;
			flex-direction: column;
			align-items: flex-start;
		}

		h2 {
			margin-bottom: 0;

			font-weight: 500;
			font-size: 40px;

			@include laptop-big {
				font-size: 32px;
			}

			@include laptop {
				font-size: 32px;
				line-height: 37px;
				width: 400px;
			}

			@include mobile {
				margin: 0;
			}

			@include small-mobile {
				font-size: 23px;
				width: 290px;
				line-height: 25px;
				margin-bottom: 24px;
			}

			:deep(i) {
				font-size: 40px;

				@include mobile {
					font-size: 35px;
				}

				@include small-mobile {
					font-size: 26px;
				}
			}
		}
	}

	.container-swiper {
		padding: 38px 0 0 0;
		overflow: visible;

		:deep(.swiper-wrapper) {
			margin-bottom: 60px;
		}

		@include laptop-big {
			padding: 24px 0 0 0;
		}

		@media (max-width: 1135px) {
			@include tablet {
				max-width: 100%;
			}

			@include mobile {
				padding: 40px 0 0 0;
			}

			@include small-mobile {
				padding: 33px 0 0 0;
			}
		}

		&:deep(.swiper) {
			.swiper-wrapper {
				margin-bottom: 60px;
				@include small-mobile {
					&:before {
						display: none;
					}
				}
			}

			.swiper-slide {
				display: flex;
				flex-wrap: wrap;
				align-content: space-between;
				background: $white;
				border-radius: 15px;
				height: auto;

				&:last-child {
					@media (max-width: 1135px) {
						margin-right: 24px !important;
					}
					@include mobile {
						margin-right: 12px !important;
					}
				}

				&:first-child {
					@media (max-width: 1135px) {
						margin-left: 24px !important;
					}
					@include mobile {
						margin-left: 12px !important;
					}
					@include small-mobile {
						margin-left: 14px !important;
					}
					@media (max-width: 360px) {
						margin-left: 12px !important;
					}
				}

				.item__info {
					@include small-mobile {
						height: 224px;
						.buttons {
							height: 40px;
						}
					}
				}
			}

			.swiper-button-prev {
				color: $dark-primary;
				background: url('assets/img/svg/arrow-left.svg') no-repeat
					center/contain;
				top: unset;
				left: unset;
				right: 63px;
				bottom: 0;
				width: 22px;
				height: 44px;

				&::after {
					content: ' ';
				}

				@include tablet {
					display: none;
				}
			}

			.swiper-button-next {
				color: $dark-primary;
				background: url('assets/img/svg/arrow-right.svg') no-repeat
					center/contain;
				top: unset;
				left: unset;
				right: 0;
				bottom: 0;
				width: 22px;
				height: 44px;

				@include tablet {
					display: none;
				}

				&::after {
					content: ' ';
				}
			}
		}
	}
}

@keyframes underline {
	0% {
		width: 0;
	}
	100% {
		width: 100%;
	}
}
</style>
