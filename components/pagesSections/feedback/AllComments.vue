<script setup>
import AllCommentsItem from '~/components/pagesSections/feedback/AllCommentsItem.vue';
import Button from '~/components/ui/Button.vue';
import PopupModal from '~/components/ui/PopupModal.vue';
import FeedbackModal from '~/components/pagesSections/feedback/FeedbackModal.vue';
import useOutsideClick from '~/composables/useOutsideClick';
import ThankPopupReviews from '~/components/ui/ThankPopupReviews.vue';
import { useFeedbacksStore } from '~/store/feedbacksStore';
import { useSearchStore } from '~/store/searchStore';
import check from '~/assets/img/svg/feedback/check.svg';

const feedbacksStore = useFeedbacksStore();
const searchStore = useSearchStore();

const showSelect = ref(false);
const selectBody = ref(null);
const selectTitle = ref(null);
const commentedProductId = ref(null);
const showSelectModal = ref(false);

const { t } = useI18n();

feedbacksStore.comments = [];

feedbacksStore.pageCounter = 1;

feedbacksStore.getAllComments();

const DOMloaded = ref(false);

onMounted(() => {
	DOMloaded.value = true;
});

onUpdated(() => {
	if (DOMloaded.value) {
		const commentsWrap = document.querySelector('.all-comments__wrap');

		commentsWrap.classList.remove('max-height');

    const selectItem = document.querySelectorAll('.select__item');

		if (selectTitle.value.innerText === t('allReviews.filterSelect')) {
			selectItem[0].classList.add('select__svg-show');
		} else {
			selectItem[0].classList.remove('select__svg-show');
		}
	}
});

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

  const selectModal = function () {
    const selectCurrentItem = document.querySelector('.select__current-modal');
    const selectItem = document.querySelectorAll('.select__item-modal');

		selectCurrentItem.innerText = t('allReviews.select.noCategory');

		selectItem.forEach(item => {
			if (item.classList.contains('select__svg-show')) {
				item.classList.remove('select__svg-show');
			}

			selectItem[0].classList.add('select__svg-show');
		});
	};

	selectModal();

  const popupInner = document.querySelector(
		'.banner-popup.feedback .popup-modal__inner'
	);

	popupInner.addEventListener('click', event => {
		if (
			event.target.className !== 'select__header' &&
			event.target.className !== 'select__current-modal'
		) {
			showSelectModal.value = false;

			let selectItem = document.querySelectorAll('.select__item-modal');

			selectItem.forEach(item => {
				if (item.classList.contains('select__item-modal-show')) {
					item.classList.remove('select__item-modal-show');
				} else {
					item.classList.add('select__item-modal-show');
				}
			});
		} else {
      const selectItem = document.querySelectorAll('.select__item-modal');

			selectItem.forEach(item => {
				if (!item.classList.contains('select__item-modal-show')) {
					item.classList.add('select__item-modal-show');
				}
			});
		}
	});
};

const setSelect = () => {
	showSelect.value = !showSelect.value;

  const selectItem = document.querySelectorAll('.select__item');

	selectItem.forEach(item => {
		if (item.classList.contains('select__item-show')) {
			item.classList.remove('select__item-show');
		} else {
			item.classList.add('select__item-show');
		}

		item.addEventListener('click', () => {
      const productId = item.getAttribute('data-value');

			commentedProductId.value = productId;

			selectItem.forEach(item => {
				if (item.classList.contains('select__svg-show')) {
					item.classList.remove('select__svg-show');
				}
			});

      const text = item.innerText;

			selectTitle.value.innerText = text;

			if (text === selectTitle.value.innerText) {
				item.classList.add('select__svg-show');
			}
		});
	});
};

// PAGINATION
const downloadMoreComments = () => {
	if (!commentedProductId.value) {
		feedbacksStore.getAllComments();

		return;
	}

	if (commentedProductId.value !== 'secret') {
		feedbacksStore.pageCounter = 1;
		feedbacksStore.getProductCommentById(commentedProductId.value);
	} else {

		feedbacksStore.oneProductPageCounter = 1;
		feedbacksStore.getAllComments();
	}
};

watch(commentedProductId, () => {
	if (commentedProductId.value === 'secret') {
		feedbacksStore.pageCounter = 1;

		feedbacksStore.comments = [];

		feedbacksStore.getAllComments();
	} else {
		feedbacksStore.comments = [];

		feedbacksStore.oneProductPageCounter = 1;

		feedbacksStore.getProductCommentById(commentedProductId.value);
	}
});


useOutsideClick(selectBody, () => {
	showSelect.value = false;

  const selectItem = document.querySelectorAll('.select__item');

	selectItem.forEach(item => {
		if (item.classList.contains('select__item-show')) {
			item.classList.remove('select__item-show');
		}
	});
});


const emitOpenModalSelect = () => {
	showSelectModal.value = true;
};

const emitCloseModalSelect = () => {
	showSelectModal.value = false;
};

const closeThankPopupReviews = () => {
	feedbacksStore.showThanksPopup = false;
};
</script>

<template>
	<Teleport to="body">
		<PopupModal
			class="banner-popup feedback"
			@close="feedbacksStore.showPopupWithForm = false"
			:modal-active="feedbacksStore.showPopupWithForm"
		>
			<FeedbackModal
				@closeModal="closeModal"
				@closeSelect="emitCloseModalSelect"
				@openSelect="emitOpenModalSelect"
				:modalState="showSelectModal"
				:setSelect="true"
			/>
		</PopupModal>
	</Teleport>

	<ThankPopupReviews @close="closeThankPopupReviews" />
	<div class="all-comments">
		<div class="container">
			<div class="all-comments__wrap-top">
				<Button @click="showModal" class="buttons buttons__consultation">{{
					$t('buttons.feedback')
				}}</Button>
				<div class="all-comments__select-container">
					<div class="select" @click="setSelect" ref="selectBody">
						<div class="select__header">
							<span class="select__current" ref="selectTitle">
								{{ $t('allReviews.filterSelect') }}
							</span>
							<div
								class="select__icon"
								:class="{ 'select__icon-rotate': showSelect }"
							>
								<img
									src="~/someRoute.svg"
									alt="arrow-icon"
								/>
							</div>
						</div>

						<div
							class="select__body"
							:class="{ 'select__body-show': showSelect }"
						>
							<div class="select__item" data-value="all">
								{{ $t('allReviews.filterSelect') }}
								<img class="select__svg" :src="check" alt="check" />
							</div>

							<div
								class="select__item"
								v-for="option of searchStore.responseProducts"
                :key="option.id"
								:data-value="option.id"
							>
								{{ option.superName }}
								<img class="select__svg" :src="check" alt="check" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="all-comments__wrap">

			<AllCommentsItem
				v-for="commentData of feedbacksStore.comments"
				:key="commentData.id"
				:secret="commentData.secret"
				:secret="commentData.secret"
				:secret="commentData.secret"
				:secret="commentData.secret"
			/>

		</div>
		<div class="container">
			<p
				class="pagination"
				@click="downloadMoreComments"
				v-if="feedbacksStore.hidePagination"
			>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M7.18542 4.70232C8.66546 3.71339 10.4055 3.18555 12.1855 3.18555C12.6826 3.18555 13.0855 3.58849 13.0855 4.08555C13.0855 4.5826 12.6826 4.98555 12.1855 4.98555C10.7615 4.98555 9.36948 5.40782 8.18544 6.19896C7.00141 6.99011 6.07857 8.1146 5.53362 9.43022C4.98867 10.7459 4.84608 12.1935 5.1239 13.5902C5.40171 14.9869 6.08744 16.2698 7.09438 17.2767C8.10132 18.2836 9.38424 18.9694 10.7809 19.2472C12.1776 19.525 13.6252 19.3824 14.9409 18.8375C16.2565 18.2925 17.381 17.3697 18.1721 16.1856C18.9633 15.0016 19.3855 13.6096 19.3855 12.1855C19.3855 11.6885 19.7885 11.2855 20.2855 11.2855C20.7826 11.2855 21.1855 11.6885 21.1855 12.1855C21.1855 13.9656 20.6577 15.7056 19.6688 17.1857C18.6798 18.6657 17.2742 19.8193 15.6297 20.5005C13.9852 21.1816 12.1756 21.3599 10.4297 21.0126C8.68391 20.6653 7.08026 19.8082 5.82159 18.5495C4.56292 17.2908 3.70575 15.6872 3.35848 13.9414C3.01122 12.1955 3.18945 10.3859 3.87064 8.74139C4.55182 7.09686 5.70538 5.69125 7.18542 4.70232Z"
						fill="black"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M16.4151 4.24168C17.9863 5.07822 19.2742 6.3619 20.1158 7.93038C20.3509 8.36836 20.1863 8.91394 19.7484 9.14896C19.3104 9.38399 18.7648 9.21946 18.5298 8.78147C17.8564 7.52669 16.8262 6.49975 15.5692 5.83051C14.3122 5.16128 12.885 4.87981 11.4681 5.02169C10.0511 5.16358 8.7081 5.72245 7.60878 6.62763C6.50947 7.53281 5.70326 8.74365 5.29211 10.107C4.88095 11.4704 4.88332 12.9251 5.29891 14.2871C5.7145 15.6492 6.52465 16.8574 7.62691 17.759C8.72916 18.6606 10.074 19.2151 11.4914 19.3523C12.9088 19.4896 14.3351 19.2035 15.5899 18.5302C16.0278 18.2951 16.5734 18.4597 16.8084 18.8976C17.0435 19.3356 16.8789 19.8812 16.441 20.1162C14.8725 20.9579 13.0896 21.3155 11.3179 21.1439C9.54616 20.9724 7.86509 20.2792 6.48727 19.1522C5.10945 18.0252 4.09676 16.515 3.57727 14.8124C3.05778 13.1099 3.05482 11.2915 3.56877 9.58733C4.08271 7.8831 5.09047 6.36955 6.46461 5.23807C7.83875 4.1066 9.51756 3.40801 11.2887 3.23065C13.0599 3.05329 14.8439 3.40513 16.4151 4.24168Z"
						fill="black"
					/>
					<path
						d="M21.1855 4.68555L19.6902 9.42909L14.6238 8.01032"
						stroke="black"
						stroke-width="1.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>

				<span>{{ $t('allReviews.loadMore') }}</span>
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.pagination {
	display: flex;
	align-items: center;
	justify-content: center;

	margin-top: 40px;
	margin-bottom: 0;

	cursor: pointer;

	svg {
		margin-right: 10px;
	}

	span {
		font-weight: 500;
		font-size: 16px;
		line-height: 24px;

		color: $dark-primary;
	}
}

.select {
	position: relative;
	margin: 0 auto;
	width: 330px;

	@include small-mobile {
		width: 270px;
	}

	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 10px 24px;

		border: 1px solid #d9d9d9;
		border-radius: 40px;

		cursor: pointer;
	}

	&__current {
		font-weight: 500;
		font-size: 23px;
		line-height: 28px;

		color: $dark-primary;

		@include tablet {
			font-size: 22px;
			line-height: 30px;
		}

		@include small-mobile {
			font-size: 18px;
			line-height: 22px;
		}
	}

	&__body {
		position: absolute;
		right: 0;
		left: 0;
		z-index: -1;

		display: flex;
		flex-direction: column;
		gap: 24px;

		height: 0;

		background-color: $white;
		border-radius: 15px;

		overflow: hidden;

		transition: all 0.3s;

		@include small-mobile {
			gap: 16px;
		}

		&-show {
			z-index: 1;

			height: 280px;

			overflow: scroll;

			padding: 24px 0;
			overflow-x: hidden;

			@include small-mobile {
				height: 210px;

				padding: 16px 0;
			}
		}
	}

	&__svg {
		display: none;

		&-show img {
			display: block;
		}
	}

	&__item {
		display: flex;
		align-items: center;
		justify-content: space-between;

		height: 0;
		padding: 0 24px;

		font-weight: 500;
		font-size: 23px;
		line-height: 28px;

		cursor: pointer;

		transition:
			height 0.3s linear,
			background-color 0.3s;

		@include tablet {
			font-size: 22px;
			line-height: 30px;
		}

		@include small-mobile {
			padding: 0 16px;

			font-size: 18px;
			line-height: 22px;
		}

		&-show {
			height: 55px;

			@include tablet {
				height: 50px;
			}

			@include small-mobile {
				height: 40px;
			}
		}

		&:hover {
			background-color: $gray-f4f;

			width: 100%;
		}
	}

	&__icon {
		display: flex;
		flex-shrink: 0;

		img {
			transition: all 0.3s;
		}

		&-rotate {
			img {
				transition: all 0.3s;
				transform: rotate(180deg);
			}
		}
	}
}

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

.all-comments {
	&__num {
		display: inline-flex;
		align-items: center;
		justify-content: center;

		width: 40px;
		height: 40px;

		font-weight: 500;
		font-size: 16px;
		line-height: 24px;

		color: $dark-primary;

		flex-shrink: 0;
	}

	&__wrap {
		display: flex;
		flex-direction: column;
		gap: 24px;

		margin-top: 26px;

		@include laptop-big {
			margin-top: 30px;
		}

		@include tablet {
			margin-top: 65px;
		}

		@include small-mobile {
			gap: 12px;

			margin-top: 30px;
		}

		&--max-height {
			max-height: fit-content;
		}

		&-top {
			display: flex;
			justify-content: space-between;
			align-items: center;

			@include mobile {
				flex-direction: column;
				gap: 32px;
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
				}

				@include small-mobile {
					max-width: 100%;
				}

				&:hover {
					background-color: $black-005;
				}

				&:active {
					background-color: $black-01;
				}
			}
		}
	}
}

.max-height {
	height: fit-content;
}

.height-auto {
	height: auto;
}
</style>
