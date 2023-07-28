<script setup>
import { useFeedbacksStore } from '~/store/feedbacksStore';
import Button from '~/components/ui/Button.vue';
import useOutsideClick from '~/composables/useOutsideClick';
import { vMaska } from 'maska';
import check from '~/assets/img/svg/feedback/check.svg';
import { useCountryStore } from '~/store/countryStore';
import { computed, ref, watch } from 'vue';
import { useAccountFeedbacksStore } from '~/store/accountReviews';
import { useAuthStore } from '~/store/authStore';
import { useSearchStore } from '~/store/searchStore';

const feedbacksStore = useFeedbacksStore();
const accountFeedbacksStore = useAccountFeedbacksStore();
const authStore = useAuthStore();
const searchStore = useSearchStore();

const props = defineProps({
	modalState: {
		type: Boolean,
		required: true
	},
	setSelect: {
		type: Boolean,
		required: true
	},

	productId: {
		type: Number
	}
});

const emit = defineEmits(['closeModal', 'closeSelect', 'openSelect']);

const selectTitleModal = ref(null);

const selectBodyModal = ref(null);

const countryStore = useCountryStore();



// VALIDATION START
const beforePOSTvalidationForNameField = ref(false);
const beforePOSTvalidationForsomeDataField = ref(false);
const beforePOSTvalidationForPhoneField = ref(false);
const beforePOSTvalidationForContentField = ref(false);

const wasInputInMailField = ref(false);
const wasInputInsomeDataField = ref(false);
const wasInputInNameField = ref(false);

const isDefaultFiveStarsClass = ref(true);

const { t } = useI18n();

const sendDataToServer = () => {
	if (!wasInputInMailField.value) {
		if (secretData) {
			feedbacksStore.dataVariable =
          secretData;
		}
	}

	if (!wasInputInsomeDataField.value) {
		if (secretData) {
			feedbacksStore.dataVariable =
          secretData;
		}
	}

	if (!wasInputInNameField.value) {
		if (
        secretData ||
        secretData
		) {
			feedbacksStore.dataVariable = `secretData`;
		}
	}

	if (!props.setSelect) {
		feedbacksStore.dataVariable[0] = props.productId;
	}

	if (
		feedbacksStore.dataVariable.length === 0 &&
		feedbacksStore.dataVariable.length === 0
	) {
		beforePOSTvalidationForsomeDataField.value = true;
	} else {
		beforePOSTvalidationForsomeDataField.value = false;
	}

	if (
		feedbacksStore.dataVariable.length === 0 &&
		feedbacksStore.dataVariable.length === 0
	) {
		beforePOSTvalidationForPhoneField.value = true;
	} else {
		beforePOSTvalidationForPhoneField.value = false;
	}

	if (feedbacksStore.dataVariable.length === 0) {
		beforePOSTvalidationForNameField.value = true;
	} else {
		beforePOSTvalidationForNameField.value = false;
	}

	if (feedbacksStore.dataVariable.length === 0) {
		beforePOSTvalidationForContentField.value = true;
	} else {
		beforePOSTvalidationForContentField.value = false;
	}

	if (
		feedbacksStore.dataVariable.length === 0 ||
		feedbacksStore.dataVariable.length === 0
	) {
		return;
	}

	if (
		feedbacksStore.dataVariable.length === 0 &&
		feedbacksStore.dataVariable.length === 0
	) {
		return;
	}

	feedbacksStore.sendNewCommentToServer();

	accountFeedbacksStore.showEmptyScreen = false;
};

watch(feedbacksStore.newCommentCreated, () => {
	if (feedbacksStore.dataVariable.length) {
		beforePOSTvalidationForsomeDataField.value = false;
		wasInputInsomeDataField.value = true;
	} else {
		wasInputInsomeDataField.value = false;

		feedbacksStore.validationForPhoneWrongData = false;
	}

	if (feedbacksStore.dataVariable.length) {
		beforePOSTvalidationForPhoneField.value = false;
		wasInputInMailField.value = true;
	} else {
		wasInputInMailField.value = false;

		feedbacksStore.validationForsomeDataWrongData = false;
	}

	if (feedbacksStore.dataVariable.length) {
		wasInputInNameField.value = true;
	} else {
		wasInputInNameField.value = false;
	}
});

// VALIDATION END

// RATING
const icoArray = ref([false, false, false, false, false]);

const setRating = index => {
	icoArray.value = [false, false, false, false, false];

	icoArray.value.fill(true, index);

	feedbacksStore.dataVariable = String(
		Math.abs(index - icoArray.value.length)
	);

	isDefaultFiveStarsClass.value = false;
};

// SELECT

const modalSelectHeader = () => {
	if (!props.modalState) {
		emit('openSelect');
	} else {
		emit('closeSelect');
	}

  const selectItem = document.querySelectorAll('.select__item-modal');

	selectItem.forEach(item => {
		if (item.classList.contains('select__item-modal-show')) {
			item.classList.remove('select__item-modal-show');
		} else {
			item.classList.add('select__item-modal-show');
		}
	});

	selectItem.forEach(item => {
		item.addEventListener('click', () => {
      const productId = item.getAttribute('data-value');

			selectItem.forEach(item => {
				if (item.classList.contains('select__svg-show')) {
					item.classList.remove('select__svg-show');
				}
			});

      const text = item.innerText;

			selectTitleModal.value.innerText = text;

			if (text === selectTitleModal.value.innerText) {
				item.classList.add('select__svg-show');
			}

			if (productId === 'choose') {
				feedbacksStore.dataVariable = [];
			} else {
				feedbacksStore.dataVariable[0] = Number(productId);
			}
		});
	});
};

onMounted(() => {
  const selectItem = document.querySelectorAll('.select__item-modal');

	if (props.setSelect) {
		selectItem[0].classList.add('select__svg-show');
	}
});

useOutsideClick(selectBodyModal, () => {
	emit('closeSelect');

  const selectItem = document.querySelectorAll('.select__item-modal');

	selectItem.forEach(item => {
		if (item.classList.contains('select__item-modal-show')) {
			item.classList.remove('select__item-modal-show');
		}
	});

	beforePOSTvalidationForsomeDataField.value = false;
	beforePOSTvalidationForPhoneField.value = false;
	beforePOSTvalidationForNameField.value = false;
	beforePOSTvalidationForContentField.value = false;

	feedbacksStore.validationForsomeDataWrongData = false;
	feedbacksStore.validationForPhoneWrongData = false;

	wasInputInMailField.value = false;
	wasInputInsomeDataField.value = false;
	wasInputInNameField.value = false;
});

const closeModal = () => {
	emit('closeModal');

	icoArray.value = [false, false, false, false, false];

	beforePOSTvalidationForsomeDataField.value = false;
	beforePOSTvalidationForPhoneField.value = false;
	beforePOSTvalidationForNameField.value = false;
	beforePOSTvalidationForContentField.value = false;

	feedbacksStore.dataVariable = '';
	feedbacksStore.dataVariable = '5';
	feedbacksStore.dataVariable = '';
	feedbacksStore.dataVariable = '';
	feedbacksStore.dataVariable = '';

	feedbacksStore.showPopupWithForm = false;

	feedbacksStore.validationForsomeDataWrongData = false;
	feedbacksStore.validationForPhoneWrongData = false;

	isDefaultFiveStarsClass.value = true;
};

watch(
	() => feedbacksStore.showPopupWithForm,
	() => {
		if (feedbacksStore.showPopupWithForm) {
			isDefaultFiveStarsClass.value = true;
		} else {
			icoArray.value = [false, false, false, false, false];
			isDefaultFiveStarsClass.value = false;
		}
	}
);

const someDataPlaceholder = computed(() => {
	if (secretData) {
		return secretData;
	} else {
		return t('acc-reviews.popup.sendReview.someData');
	}
});

const phonePlaceholder = computed(() => {
	if (secretData) {
		return secretData;
	} else {
		return t('acc-reviews.popup.sendReview.phone');
	}
});
</script>

<template>
	<div class="feedbackModal">
		<h2 class="feedbackModal__title">
			{{ $t('acc-reviews.popup.sendReview.title') }}
		</h2>

		<form method="post" class="feedbackModal__form">
			<div class="feedbackModal__ico-container">
				<svg
					v-for="(svg, i) in icoArray"
					:class="{
						'like-color': svg,
						defaultFiveStarsClass: isDefaultFiveStarsClass
					}"
					width="40"
					height="37"
					viewBox="0 0 40 37"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					@click="setRating(i)"
				>
					<path
						d="M20 0L26.3598 11.2464L39.0211 13.8197L30.2904 23.3436L31.7557 36.1803L20 30.82L8.2443 36.1803L9.70957 23.3436L0.97887 13.8197L13.6402 11.2464L20 0Z"
					/>
				</svg>
			</div>
			<span class="feedbackModal__text">{{
				$t('acc-reviews.popup.sendReview.mark')
			}}</span>
			<div class="feedbackModal__textField-container">
				<div class="feedbackModal__select-container" v-if="props.setSelect">
					<div class="select" @click="modalSelectHeader" ref="selectBodyModal">
						<div class="select__header">
							<span class="select__current-modal" ref="selectTitleModal">
								{{ $t('allReviews.select.noCategory') }}
							</span>

							<div
								class="select__icon"
								:class="{ 'select__icon-rotate': props.modalState }"
							>
								<img
									src="~/someRoute.svg"
									alt="arrow-icon"
								/>
							</div>
						</div>

						<div
							class="select__body"
							:class="{ 'select__body-show': props.modalState }"
						>
							<div class="select__item-modal" data-value="choose">
								{{ $t('allReviews.select.noCategory') }}
								<img class="select__svg" :src="check" alt="check" />
							</div>

							<div
								class="select__item-modal"
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

				<label
					><input
						class="feedbackModal__textField"
						:class="{
							'feedbackModal__textField--invalid':
								beforePOSTvalidationForsomeDataField ||
								feedbacksStore.validationForsomeDataWrongData
						}"
						type="someData"
						:placeholder="someDataPlaceholder"
						autocomplete="off"
						v-model="feedbacksStore.dataVariable"
					/>

					<span
						class="feedbackModal__invalid-text"
						:class="{
							'feedbackModal__invalid-text--show':
								beforePOSTvalidationForsomeDataField
						}"
						>{{ $t('acc-reviews.popup.validation.mailAndPhone') }}
					</span>
					<span
						class="feedbackModal__invalid-text"
						:class="{
							'feedbackModal__invalid-text--show':
								feedbacksStore.validationForsomeDataWrongData
						}"
					>
						{{ $t('validations.wrongsomeDataFormat') }}
					</span>
				</label>
				<label
					><input
						class="feedbackModal__textField"
						:class="{
							'feedbackModal__textField--invalid':
								beforePOSTvalidationForPhoneField ||
								feedbacksStore.validationForPhoneWrongData
						}"
						type="tel"
						:placeholder="phonePlaceholder"
						autocomplete="off"
						v-model="feedbacksStore.dataVariable"
						v-maska:[options]
					/><span
						class="feedbackModal__invalid-text"
						:class="{
							'feedbackModal__invalid-text--show':
								beforePOSTvalidationForPhoneField
						}"
						>{{ $t('acc-reviews.popup.validation.mailAndPhone') }}</span
					>
					<span
						class="feedbackModal__invalid-text"
						:class="{
							'feedbackModal__invalid-text--show':
								feedbacksStore.validationForPhoneWrongData
						}"
					>
						{{ $t('validations.wrongPhoneFormat') }}
					</span>
				</label>

				<label class="feedbackModal__textField-wrap"
					><input
						class="feedbackModal__textField"
						:class="{
							'feedbackModal__textField--invalid':
								beforePOSTvalidationForNameField
						}"
						type="text"
						:placeholder="
							asecretData ||
							secretData
								? secretData
								: $t('acc-reviews.popup.sendReview.name')
						"
						autocomplete="off"
						v-model="feedbacksStore.dataVariable"
					/><span
						class="feedbackModal__invalid-text"
						:class="{
							'feedbackModal__invalid-text--show':
								beforePOSTvalidationForNameField
						}"
						>{{ $t('acc-reviews.popup.validation.requiredToFill') }}</span
					>
				</label>

				<label>
					<textarea
						class="feedbackModal__textField"
						:class="{
							'feedbackModal__textField--invalid':
								beforePOSTvalidationForContentField
						}"
						:placeholder="$t('acc-reviews.popup.sendReview.reviewContent')"
						rows="4"
						v-model="feedbacksStore.dataVariable"
					>
					</textarea
					><span
						class="feedbackModal__invalid-text"
						:class="{
							'feedbackModal__invalid-text--show':
								beforePOSTvalidationForContentField
						}"
						>{{ $t('acc-reviews.popup.validation.requiredToFill') }}</span
					>
				</label>
			</div>

			<div class="feedbackModal__buttons-container">
				<Button
					class="buttons buttons__consultation order-sm-0 order-1"
					@click="closeModal"
				>
					{{ $t('acc-reviews.button.cancel') }}</Button
				>
				<Button class="buttons buttons__add" @click="sendDataToServer">{{
					$t('acc-reviews.button.post')
				}}</Button>
			</div>
		</form>
	</div>
</template>

<style lang="scss" scoped>
.select {
	margin: 0 auto;
	position: relative;
	width: 325px;

	@include small-mobile {
		width: 100%;
	}

	&__header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 10px 24px;

		border: 1px solid $grey-d9;
		border-radius: 40px;

		cursor: pointer;

		@media (max-width: 389px) {
			padding: 9px 24px;
		}
	}

	&__current-modal {
		font-weight: 500;
		font-size: 23px;
		line-height: 28px;

		color: $dark-primary;

		@include tablet {
			font-size: 22px;
			line-height: 30px;
		}

		@include small-mobile {
			font-size: 16px;
			line-height: 21px;
		}

		@media (max-width: 389px) {
			line-height: 20px;
		}
	}

	&__body {
		left: 0;
		position: absolute;
		right: 0;
		z-index: -1;

		display: flex;
		flex-direction: column;
		gap: 24px;

		height: 0;

		background-color: $white;
		border-radius: 15px;

		transition: all 0.3s;

		opacity: 0;

		overflow: hidden;

		@include small-mobile {
			gap: 16px;
		}

		&-show {
			z-index: 1;

			height: 280px;

			padding: 24px 0;

			opacity: 1;

			overflow: scroll;
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

	&__item-modal {
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

		position: relative;
		z-index: -1;

		display: flex;
		flex-shrink: 0;

		img {
			transition: all 0.3s;

			@include small-mobile {
				width: 22px;
			}
		}

		&-rotate {
			img {
				transition: all 0.3s;
				transform: rotate(180deg);
			}
		}
	}
}

.feedbackModal {
	&__title {
		margin-bottom: 40px;

		font-weight: 500;
		font-size: 40px;
		line-height: 48px;

		color: $black;

		text-align: center;

		@include laptop-big {
			font-size: 32px;
			line-height: 39px;
		}

		@include tablet {
			margin-bottom: 32px;
		}

		@include small-mobile {
			margin-bottom: 16px;

			font-size: 23px;
			line-height: 28px;
		}

		@media (max-width: 389px) {
			margin-bottom: 12px;

			font-size: 18px;
			line-height: 22px;
		}
	}

	&__text {
		margin-bottom: 40px;

		font-weight: 400;
		font-size: 13px;
		line-height: 13px;

		color: $dark-primary-04;

		@include laptop-big {
			margin-bottom: 24px;

			line-height: 18px;
		}

		@include tablet {
			line-height: 16px;
		}

		@include small-mobile {
			margin-bottom: 20px;

			line-height: 14px;
		}

		@media (max-width: 389px) {
			margin-bottom: 8px;
		}
	}

	&__textField {
		padding: 11px 32px;

		width: 100%;
		background: $dark-primary-005;
		border-radius: 12px;

		font-weight: 500;
		font-size: 16px;
		line-height: 24px;

		color: $dark-primary;
		outline: none;
		border: 1px solid transparent;

		resize: none;

		@media (max-width: 389px) {
			padding: 11px 16px;
		}

		&::-webkit-contacts-auto-fill-button {
			visibility: hidden;
			position: absolute;
			right: 0;
		}

		&--invalid {
			border: 1px solid $invalid;
		}

		&--wrongInput {
			border: 1px solid $invalid;
		}

		&-container {
			display: flex;
			flex-direction: column;
			gap: 24px;

			margin-bottom: 40px;

			width: 100%;

			@include tablet {
				margin-bottom: 32px;
			}

			@include small-mobile {
				gap: 12px;

				margin-bottom: 20px;
			}

			@media (max-width: 389px) {
				gap: 8px;

				margin-bottom: 16px;
			}

			textarea {
				@include small-mobile {
					display: flex;
					height: 85px;
				}

				@media (max-width: 389px) {
					height: 80px;
				}
			}
		}
	}

	&__invalid-text {
		display: none;

		margin-top: 8px;

		font-weight: 400;
		font-size: 13px;
		line-height: 16px;

		color: $invalid;

		&--show {
			display: block;
		}
	}

	&__form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__buttons {
		&-container {
			display: flex;
			gap: 24px;

			width: 100%;

			@include laptop-big {
				gap: 30px;
			}

			@include tablet {
				gap: 24px;
			}

			@include small-mobile {
				flex-direction: column;

				gap: 12px;
			}

			.buttons {
				padding: 12px;
				margin-bottom: 0;

				font-size: 23px;
				line-height: 29px;

				@include laptop-big {
					font-size: 18px;
					line-height: 23px;
				}

				@include tablet {
					font-size: 17px;
					line-height: 22px;
				}

				@include small-mobile {
					padding: 13px 12px;

					font-size: 18px;
				}
			}

			.buttons__consultation {
				@include small-mobile {
					padding: 12px;
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

	&__ico {
		&-container {
			display: flex;
			flex-direction: row-reverse;
			justify-content: center;
			align-items: center;

			margin-bottom: 4px;

			.like-color {
				fill: $yellow-f5;
			}

			.defaultFiveStarsClass {
				fill: $yellow-f5;
			}

			svg {
				width: 40px;
				height: 40px;

				cursor: pointer;

				transition: fill 0.3s;

				fill: $dark-primary-01;
				box-sizing: content-box;

				@media (max-width: 389px) {
					width: 32px;
					height: 32px;
				}

				&:not(:first-child) {
					padding-right: 16px;
				}

				&:last-child {
					fill: $yellow-f5;
				}

				&:hover,
				&:hover ~ svg {
					fill: $yellow-f5;
				}
			}
		}
	}

	&__select {
		padding: 12px 32px;

		width: 100%;

		font-weight: 500;
		font-size: 16px;
		line-height: 24px;

		color: $dark-primary;
		border: none;
		outline: none;

		cursor: pointer;

		background: $dark-primary-005;
		border-radius: 12px;

		@include laptop-big {
			padding: 14px 32px;

			font-size: 14px;
			line-height: 16px;
		}

		@include tablet {
			padding: 13px 32px;

			font-size: 16px;
		}
	}
}
</style>
