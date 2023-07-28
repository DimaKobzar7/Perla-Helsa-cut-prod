<script setup>
import PurchasedGoods from '~/components/personalAccount/reviews/PurchasedGoods.vue';
import AccountReviews from '~/components/personalAccount/reviews/AccountReviews.vue';

import Preloader from '~/components/ui/Preloader.vue';
import PopupModal from '~/components/ui/PopupModal.vue';
import ShowReviewContent from '~/components/personalAccount/reviews/popupsContent/ShowReviewContent.vue';
import ThankPopupReviews from '~/components/ui/ThankPopupReviews.vue';
import SendAccountReviewsModal from '~/components/personalAccount/reviews/popupsContent/SendAccountReviewsModal.vue';
import { useFeedbacksStore } from '~/store/feedbacksStore';
import { useAccountFeedbacksStore } from '~/store/accountReviews';

import { onMounted, ref, watch } from 'vue';

const accountFeedbacksStore = useAccountFeedbacksStore();

const feedbacksStore = useFeedbacksStore();

onBeforeMount(() => {
	if (
		!accountFeedbacksStore.purchasedGoods.length &&
		!accountFeedbacksStore.comments.length
	) {
		accountFeedbacksStore.showEmptyScreen = false;
	}
});

onMounted(async () => {
	if (!accountFeedbacksStore.purchasedGoods.length) {
		await accountFeedbacksStore.receivePurchasedGoods();
	}

	if (!accountFeedbacksStore.comments.length) {
		await accountFeedbacksStore.getAllComments();
	}

	if (
		!accountFeedbacksStore.purchasedGoods.length &&
		!accountFeedbacksStore.comments.length
	) {
		accountFeedbacksStore.showEmptyScreen = true;
	}

	accountFeedbacksStore.setIntersectionObserver();
});

if (
	!accountFeedbacksStore.purchasedGoods.length &&
	!accountFeedbacksStore.comments.length
) {
	accountFeedbacksStore.showEmptyScreen = true;
}

watch(
	() => accountFeedbacksStore.breakpoint,
	() => {
		accountFeedbacksStore.setIntersectionObserver();
	}
);

watch(
	() => feedbacksStore.purchasedGoodsUpdated,
	async () => {
		if (!accountFeedbacksStore.purchasedGoods.length) {
			accountFeedbacksStore.setIntersectionObserver();
		}
	}
);

const closeThankPopupReviews = () => {
	feedbacksStore.showThanksPopup = false;

	accountFeedbacksStore.showEmptyScreen = false;

	accountFeedbacksStore.setIntersectionObserver();
};

definePageMeta({
  layout: 'someLayout',
  alias: ['/somePath', '/ua/somePath']
});
</script>

<template>
	<div class="account-reviews">
		<div
			class="account-reviews__wrap"
			:class="{
				noReviews:
					!accountFeedbacksStore.comments.length &&
					!accountFeedbacksStore.purchasedGoods.length &&
					accountFeedbacksStore.showEmptyScreen
			}"
		>
			<div class="account-reviews__inner">
				<nuxt-link :to="localePath('/somePath')">
					<img
						class="to-left"
						src="~/somePath/arrow.svg"
						alt="to left"
					/>
				</nuxt-link>
				<nuxt-link :to="localePath('/somePath')">
					<span class="account-reviews__title">
						{{ $t('acc-reviews.pageTitle') }}
					</span>
				</nuxt-link>
				<span class="account-reviews__title d-none-tab-custom">
					{{ $t('acc-reviews.pageTitle') }}
				</span>
			</div>
		</div>

		<div
			v-if="
				!accountFeedbacksStore.comments.length &&
				!accountFeedbacksStore.purchasedGoods.length &&
				accountFeedbacksStore.showEmptyScreen
			"
		>
			<div class="account-reviews__noReviews-wrap">
				<svg
					width="235"
					height="193"
					viewBox="0 0 235 193"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M143.044 152.194C204.78 140.499 247.811 90.9016 231.538 57.8088C222.647 39.645 200.502 43.875 200.502 43.875C200.502 43.875 204.948 23.0572 184.481 12.7727C164.014 2.48818 147.07 16.8367 147.07 16.8367C147.07 16.8367 139.521 0.0829394 117.544 0H117.46H117.376C95.3997 0.0829394 87.8504 16.8367 87.8504 16.8367C87.8504 16.8367 70.9904 2.3223 50.5235 12.6897C30.0566 22.9742 34.5023 43.792 34.5023 43.792C34.5023 43.792 12.4417 39.645 3.46644 57.7258C-12.8064 90.8187 30.1405 140.416 91.9606 152.111C42.6387 154.184 7.49272 162.478 7.49272 172.348C7.49272 183.711 56.6468 193 117.376 193H117.46H117.544C178.274 193 227.428 183.711 227.428 172.348C227.512 162.478 192.282 154.184 143.044 152.194ZM117.712 166.708C107.479 166.708 99.2582 160.322 99.2582 152.36C99.2582 144.398 107.562 138.011 117.712 138.011C127.945 138.011 136.166 144.398 136.166 152.36C136.166 160.322 127.945 166.708 117.712 166.708Z"
						fill="#F7DFFF"
						fill-opacity="0.5"
					/>
				</svg>
				<p class="account-reviews__text">
					{{ $t('acc-reviews.noReviews.text') }}
				</p>

				<button>
					<nuxt-link :to="localePath('/somePath')">
						{{ $t('acc-reviews.button.noReview') }}
					</nuxt-link>
				</button>
			</div>
		</div>

		<div
			class="account-reviews__content-wrap"
			v-if="
				accountFeedbacksStore.comments.length ||
				accountFeedbacksStore.purchasedGoods.length
			"
		>
			<PurchasedGoods
				v-for="item of accountFeedbacksStore.purchasedGoods"
				:productTitle="item.productContent.name"
				:productSubTitle="item.productContent.vitamins"
				:preview="item.productContent.preview"
				:productId="item.productId"
				:slug="item.productContent.slug"
			/>

			<AccountReviews
				v-for="item of accountFeedbacksStore.comments"
				:commentText="item.content.content"
				:moderation="item.status"
				:createdAt="item.createdAt"
				:rate="item.rating"
				:productTitle="item.productContent.name"
				:productSubTitle="item.productContent.vitamins"
				:preview="item.productContent.preview"
				:slug="item.productContent.slug"
			/>
		</div>

		<Teleport to="body">
			<PopupModal
				@close="accountFeedbacksStore.showCommentPopup = false"
				class="account-review-popup reviewContentPopup"
				:modal-active="accountFeedbacksStore.showCommentPopup"
			>
				<ShowReviewContent />
			</PopupModal>
		</Teleport>

		<Teleport to="body">
			<PopupModal
				class="account-review-popup sendAccountReviews"
				@close="feedbacksStore.showPopupWithForm = false"
				:modal-active="feedbacksStore.showPopupWithForm"
			>
				<SendAccountReviewsModal />
			</PopupModal>
		</Teleport>

		<ThankPopupReviews @close="closeThankPopupReviews" />
	</div>
</template>

<style lang="scss" scoped>
.account-reviews {
	@media (max-width: 389px) {
		margin: 0 2px;
	}

	&__noReviews-wrap {
		text-align: center;

		svg {
			margin-bottom: 24px;

			width: 235px;

			@include laptop-big {
				width: 192px;
				height: 158px;
			}

			@include tablet {
				width: 200px;
				height: 164px;
			}

			@include small-mobile {
				width: 192px;
				height: auto;
			}

			@media (max-width: 389px) {
				width: 162px;
			}
		}
	}

	&__wrap {
		display: flex;
		align-items: center;

		margin-bottom: 40px;

		@include laptop-big {
			margin-bottom: 31px;
		}

		@include tablet {
			margin-bottom: 24px;
			padding-bottom: 24px;

			border-bottom: 1px solid $dark-primary-03;
		}

		@include small-mobile {
			margin-bottom: 24px;
			padding-bottom: 24px;
		}

		a {
			display: none;
			text-decoration: none;

			@include tablet {
				display: flex;
			}
		}
	}

	&__inner {
		@include tablet {
			display: flex;
			align-items: center;
			gap: 40px;
		}

		@include small-mobile {
			gap: 24px;
		}
	}

	&__title {
		margin-bottom: 0;

		font-weight: 500;
		font-size: 23px;
		line-height: 29px;

		color: $black;

		@include laptop-big {
			font-size: 20px;
			line-height: 25px;
		}

		@include tablet {
			font-size: 23px;
			line-height: 29px;
		}

		@include small-mobile {
			line-height: 28px;
		}

		@media (max-width: 389px) {
			font-size: 18px;
			line-height: 22px;
		}
	}

	&__text {
		margin-bottom: 40px;

		font-weight: 500;
		font-size: 20px;
		line-height: 25px;

		color: $dark-primary-04;

		@include laptop-big {
			font-size: 18px;
			line-height: 23px;
		}

		@include tablet {
			margin-bottom: 32px;

			font-size: 18px;
			line-height: 22px;
		}

		@media (max-width: 389px) {
			font-size: 14px;
			line-height: 18px;
		}
	}

	&__content-wrap {
		position: relative;

		display: flex;
		flex-direction: column;
		padding-bottom: 80px;
		overflow: auto;

		max-height: calc(100vh - 326px);

		&::-webkit-scrollbar {
			display: none;
		}

		@include laptop-big {
			padding-bottom: 64px;

			max-height: calc(100vh - 287px);
		}

		gap: 12px;

		@include tablet {
			padding-bottom: 80px;

			max-height: calc(100vh - 182px);
		}

		@include small-mobile {
			max-height: calc(100vh - 93px);
			padding-bottom: 56px;
		}
	}

	button {
		max-width: 306px;
		width: 100%;

		background: $green-75;
		border-radius: 40px;

		border: 0;
		outline: 0;

		transition: color 0.3s, background-color 0.3s;

		@include tablet {
			max-width: 232px;
		}

		@include small-mobile {
			max-width: initial;
		}

		&:hover {
			background-color: $green-62;
		}

		&:active {
			background-color: $green-53;
		}

		a {
			display: flex;
			justify-content: center;
			align-items: center;

			font-weight: 500;
			font-size: 23px;
			line-height: 29px;
			color: $white;

			width: 100%;

			height: 56px;

			text-decoration: none;

			@include laptop-big {
				font-size: 18px;
				line-height: 23px;
			}

			@include tablet {
				font-size: 20px;
				line-height: 25px;
			}

			@include small-mobile {
				height: 48px;

				font-size: 18px;
				line-height: 22px;
			}
		}
	}
}

.noReviews {
	margin-bottom: 55px;

	@include laptop-big {
		margin-bottom: 48px;
	}

	@include tablet {
		padding-bottom: 24px;
		margin-bottom: 40px;
	}

	@include small-mobile {
		padding-bottom: 24px;
		margin-bottom: 24px;
	}
}

.account-review {
	&-popup {
		:deep(.popup-modal) {
			overflow-y: auto;
			z-index: 9999;
			.popup-modal__inner {
				transform: translate(-50%, -50%);
				left: 50%;
				top: 50%;
				width: 100%;
				max-width: 636px;
				max-height: 100vh;
				overflow: auto;
				border-radius: 15px;

				@include laptop-big {
					max-width: 540px;
				}

				@include tablet {
					max-width: 576px;
				}

				@include small-mobile {
					max-width: 384px;
				}

				@media (max-width: 389px) {
					max-width: 336px;
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

.d-none-tab-custom {
	@include tablet {
		display: none;
	}
}
</style>
