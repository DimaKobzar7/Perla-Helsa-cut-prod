<script setup>
import PopupModal from '~/components/ui/PopupModal.vue';
import { usePromotionsStore } from '~/store/promotionsStore';
import { ref, watch } from 'vue';

const promotionsStore = usePromotionsStore();

onMounted(() => {
	if (promotionsStore.promotionModalSaw) {
		document.documentElement.classList.add('modal-open');
	}
});

const currentRoute = ref(useRouter().currentRoute.value.href);

const closeModal = () => {
	document.documentElement.classList.remove('modal-open');
	promotionsStore.promotionModalSaw = false;
};
</script>

<template>
	<Teleport to="body">
		<PopupModal
			class="promotion-popup"
			:class="{
				'collagen-bg': currentRoute.includes('/someRoute')
			}"
			@close="closeModal"
			:modal-active="promotionsStore.promotionModalSaw"
		>
			<slot></slot>
		</PopupModal>
	</Teleport>
</template>

<style lang="scss" scoped>
.promotion {
	&-popup {
		:deep(.popup-modal) {
			overflow-y: auto;
			z-index: 9999;

			.popup-modal__inner {
				top: 50%;
				left: 50%;

				width: 100%;

				max-width: 566px;

				transform: translate(-50%, -50%);

				@include laptop-big {
					max-width: 590px;
				}

				@include tablet {
					max-width: 564px;
				}

				@include small-mobile {
					max-width: 384px;
				}

				.inner__close-button {
					z-index: 200;
				}
			}

			.inner__close-button {
				width: 13px;
				height: 13px;

				filter: brightness(10);
			}
		}
	}
}

:deep(.course-text) {
	margin-bottom: 0;

	font-weight: 500;
	font-size: 16px;
	line-height: 24px;

	text-align: center;

	@include tablet {
		line-height: 22px;
	}

	@include small-mobile {
		font-size: 13px;
		line-height: 14px;
	}

	br {
		display: none;
	}

	strong {
		font-weight: 500;
	}
}

:deep(.discount) {
	margin-bottom: -47px;

	font-weight: 700;
	font-size: 65px;
	line-height: 65px;
	color: $white;

	text-align: center;

	@include laptop-big {
		margin-bottom: -41px;
	}

	@include tablet {
		margin-bottom: -28px;

		font-size: 53px;
		line-height: 53px;
	}

	@include small-mobile {
		margin-bottom: -17px;

		font-size: 40px;
		line-height: 40px;
	}
}

:deep(.promotion) {
	display: flex;
	flex-direction: column;
	overflow: hidden;

	padding: 65px 1px 64px;

	border-radius: 20px;

	@include laptop-big {
		padding: 64px 11px;
	}

	@include tablet {
		padding: 54px 1px 45px;
	}

	@include small-mobile {
		padding: 52px 1px 51px;
	}
}

:deep(.promotion__wrap) {
	position: relative;

	display: flex;

	margin-bottom: 40px;

	@include laptop-big {
		justify-content: space-between;
	}

	@include tablet {
		margin-bottom: 59px;
	}

	@include small-mobile {
		margin-bottom: 32px;
	}

	&:after {
		content: '';
		position: absolute;
		height: 100%;
		width: 1px;
		background: $white;
		right: 50%;
		top: 0;
	}
}

:deep(.promotion__text) {
	margin-bottom: 0;

	font-weight: 400;
	font-size: 16px;
	line-height: 20px;

	text-align: center;

	@include tablet {
		line-height: 22px;
	}

	@include small-mobile {
		font-size: 13px;
		line-height: 14px;
	}
}

:deep(.promotion__title) {
	margin-bottom: 40px;

	font-weight: 500;
	font-size: 36px;
	line-height: 40px;
	color: $white;

	text-align: center;

	@include laptop-big {
		font-size: 32px;
		line-height: 39px;
	}

	@include tablet {
		margin-bottom: 34px;

		font-size: 30px;
	}

	@include small-mobile {
		margin-bottom: 42px;

		font-size: 22px;
		line-height: 24px;
	}
}

.collagen-bg {
	:deep(.popup-modal__inner) {
		border-radius: 20px;
		background: radial-gradient(
				46.52% 9.76% at 50% 84%,
				rgba(255, 255, 255, 0.4) 0%,
				rgba(255, 255, 255, 0) 100%
			),
			linear-gradient(180deg, #ff70ac -12.96%, #ffdded 100%), #ffffff;

		@include tablet {
			background: radial-gradient(
					47.34% 8.28% at 50% 85.48%,
					rgba(255, 255, 255, 0.4) 0%,
					rgba(255, 255, 255, 0) 100%
				),
				linear-gradient(180deg, #ff70ac -12.96%, #ffdded 100%);
		}

		@include small-mobile {
			background: radial-gradient(
					47.85% 9.35% at 50% 84%,
					rgba(255, 255, 255, 0.4) 0%,
					rgba(255, 255, 255, 0) 100%
				),
				linear-gradient(180deg, #ff70ac -12.96%, #ffdded 100%);
		}
	}
}
</style>
