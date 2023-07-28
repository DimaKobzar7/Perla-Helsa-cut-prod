<script setup>
import PopupModal from '~/components/ui/PopupModal.vue';
import OnePlusOnePopup from '~/components/popups/promotions/OnePlusOnePopup.vue';

const isModalOpen = ref(false);

const showPopupOnePlusOne = () => {
	isModalOpen.value = true;
};

const closeModal = () => {
	isModalOpen.value = false;
};
</script>

<template>
	<div class="container-fluid promotion-one-plus-one">
		<div class="container d-flex justify-content-center align-items-center">
			<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M4.88288 5.60559C6.20905 4.31555 8.69458 4.58329 10.8215 6.10863M4.88288 5.60559C3.54002 6.91186 3.83195 9.37836 5.45004 11.4635C4.04047 11.8449 2.69761 11.6582 1.84686 10.8307C0.312173 9.33779 0.921044 6.31958 3.2064 4.09648C5.49175 1.87339 8.59449 1.28111 10.1292 2.77399C10.9466 3.56911 11.1467 4.80236 10.8215 6.10863M4.88288 5.60559C3.54002 6.91186 3.8321 9.37821 5.45854 11.4634C5.69208 11.7636 5.95898 12.0557 6.24257 12.3396C8.52792 14.5627 11.6307 15.155 13.1653 13.6621C14.7 12.1692 14.0912 9.15103 11.8058 6.92794C11.4889 6.61963 11.1634 6.35203 10.8215 6.10863"
					stroke="#1D1D1B"
					stroke-width="0.7"
					stroke-miterlimit="10"
					stroke-linejoin="round"
				/>
				<path
					d="M13.4653 2.78174L13.482 2.83853C13.7238 3.65799 14.266 4.29896 14.9583 4.59104L15 4.60727C14.2743 4.89124 13.6988 5.56466 13.4569 6.4328L13.4402 6.37601C13.1984 5.55655 12.6562 4.91558 11.9639 4.6235L11.9222 4.60727C12.6479 4.31519 13.2234 3.64177 13.4653 2.78174Z"
					fill="#1D1D1B"
				/>
				<path
					d="M11.8807 0.48584L11.889 0.518294C12.0225 0.956422 12.3144 1.3053 12.6814 1.45946L12.7064 1.46757C12.3144 1.62173 12.0141 1.98683 11.8807 2.44119L11.8723 2.40873C11.7389 1.97872 11.4469 1.62984 11.08 1.47568L11.0549 1.46757C11.4469 1.31341 11.7472 0.948308 11.8807 0.48584Z"
					fill="#1D1D1B"
				/>
			</svg>

			<p @click="showPopupOnePlusOne">
				{{ $t('promotions.onePlusOne.text') }}
				<span>{{ $t('promotions.onePlusOne.link') }}</span>
			</p>

			<svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M4.88288 5.60559C6.20905 4.31555 8.69458 4.58329 10.8215 6.10863M4.88288 5.60559C3.54002 6.91186 3.83195 9.37836 5.45004 11.4635C4.04047 11.8449 2.69761 11.6582 1.84686 10.8307C0.312173 9.33779 0.921044 6.31958 3.2064 4.09648C5.49175 1.87339 8.59449 1.28111 10.1292 2.77399C10.9466 3.56911 11.1467 4.80236 10.8215 6.10863M4.88288 5.60559C3.54002 6.91186 3.8321 9.37821 5.45854 11.4634C5.69208 11.7636 5.95898 12.0557 6.24257 12.3396C8.52792 14.5627 11.6307 15.155 13.1653 13.6621C14.7 12.1692 14.0912 9.15103 11.8058 6.92794C11.4889 6.61963 11.1634 6.35203 10.8215 6.10863"
					stroke="#1D1D1B"
					stroke-width="0.7"
					stroke-miterlimit="10"
					stroke-linejoin="round"
				/>
				<path
					d="M13.4653 2.78174L13.482 2.83853C13.7238 3.65799 14.266 4.29896 14.9583 4.59104L15 4.60727C14.2743 4.89124 13.6988 5.56466 13.4569 6.4328L13.4402 6.37601C13.1984 5.55655 12.6562 4.91558 11.9639 4.6235L11.9222 4.60727C12.6479 4.31519 13.2234 3.64177 13.4653 2.78174Z"
					fill="#1D1D1B"
				/>
				<path
					d="M11.8807 0.48584L11.889 0.518294C12.0225 0.956422 12.3144 1.3053 12.6814 1.45946L12.7064 1.46757C12.3144 1.62173 12.0141 1.98683 11.8807 2.44119L11.8723 2.40873C11.7389 1.97872 11.4469 1.62984 11.08 1.47568L11.0549 1.46757C11.4469 1.31341 11.7472 0.948308 11.8807 0.48584Z"
					fill="#1D1D1B"
				/>
			</svg>
		</div>
	</div>
	<Teleport to="body">
		<PopupModal
			class="promotion-one-plus-one-popup"
			@close="isModalOpen = false"
			:modal-active="isModalOpen"
		>
			<OnePlusOnePopup @close="closeModal" />
		</PopupModal>
	</Teleport>
</template>

<style lang="scss" scoped>
.promotion-one-plus-one {
	padding: 10px 0;
	background-color: #f7dfff;

	@include tablet {
		padding: 5px 0;
	}

	@media (max-width: 413px) {
		padding: 4px 0;
	}

	p {
		font-weight: 500;
		font-size: 20px;
		line-height: 24px;

		color: $dark-primary;
		margin: 0 26px;

		@include laptop-big {
			margin: 0 24px;

			font-size: 18px;
			line-height: 23px;
		}
		@include tablet {
			margin: 0 12px;

			font-size: 14px;
			line-height: 16px;
		}
		@include small-mobile {
			line-height: 18px;
		}

		@media (max-width: 413px) {
			font-size: 13px;
			line-height: 14px;
		}

		span {
			position: relative;
			color: $dark-primary;
			text-decoration: none;

			cursor: pointer;

			&::after {
				content: '';
				position: absolute;
				bottom: 3px;
				left: 0;
				width: 100%;
				height: 1px;
				background-color: $dark-primary;

				@include tablet {
					bottom: 2px;
				}
			}
		}
	}

	svg {
		width: 22px;
		height: 22px;

		@include laptop-big {
			width: 20px;
			height: 20px;
		}
		@include tablet {
			width: 16px;
			height: 16px;
		}
		@include small-mobile {
			width: 14px;
			height: 14px;
		}
	}
}

.promotion-one-plus-one {
	&-popup {
		:deep(.popup-modal) {
			overflow-y: auto;
			z-index: 9999;

			.popup-modal__inner {
				transform: translate(-50%, -50%);
				left: 50%;
				top: 50%;
				width: 100%;
				max-width: 568px;
				max-height: 100vh;
				overflow: auto;

				@include tablet {
					max-width: 516px;

					border-radius: 15px;
				}

				@include small-mobile {
					max-width: 352px;
				}

				@media (max-width: 413px) {
					max-width: 336px;
				}

				.inner__close-button {
					z-index: 200;
				}

				.inner__close-button {
					width: 16px;
					height: 16px;
				}
			}
		}
	}
}
</style>
