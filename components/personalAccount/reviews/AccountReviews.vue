<script setup>
import { useAccountFeedbacksStore } from '~/store/accountReviews';

const props = defineProps({
	commentText: {
		type: String,
		required: true
	},
	moderation: {
		type: String,
		required: true
	},
	rate: {
		type: Number,
		required: true
	},
	createdAt: {
		type: String,
		required: true,
		default: ''
	},
	productTitle: {
		type: String,
		required: true,
		default: ''
	},
	productSubTitle: {
		type: String,
		required: true,
		default: ''
	},
	preview: {
		type: String,
		required: true,
		default: ''
	},
	slug: {
		type: String,
		required: true,
		default: ''
	}
});

const accountFeedbacksStore = useAccountFeedbacksStore();

const showReview = () => {
	const icoArray = ref([]);
	const commentTime = ref('');
	accountFeedbacksStore.showCommentPopup = true;

	for (let i = 0; i < 5; i++) {
		if (i < props.rate) {
			icoArray.value.push(true);
		} else {
			icoArray.value.push(false);
		}
	}

  const getAllTime = props.createdAt.slice(0, 10).split('-').reverse().join('/');

  const getYear = getAllTime.split('').splice(-2, 2).join('');

  const getTimeWithout = getAllTime.slice(0, 6);

	commentTime.value = getTimeWithout + getYear;

	accountFeedbacksStore.commentPopupText = props.commentText;
	accountFeedbacksStore.commentPopupRate = icoArray.value;
	accountFeedbacksStore.commentPopupCreatedAt = commentTime.value;
};
</script>

<template>
	<div class="product-reviews">
		<div class="product-reviews__container">
			<div class="product-reviews__wrap">
				<div class="product-reviews__img">
					<img v-if="preview" :src="preview" :alt="productTitle" />
					<svg
						v-else
						class="margin-bottom"
						width="111"
						height="85"
						viewBox="0 0 111 85"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M67 57H43V75H67V57Z" fill="white" />
						<path
							d="M67.2611 67.0284C96.2902 61.878 116.524 40.0344 108.872 25.4598C104.691 17.4603 94.2787 19.3232 94.2787 19.3232C94.2787 19.3232 96.3691 10.1547 86.7453 5.62527C77.1215 1.09583 69.1543 7.41513 69.1543 7.41513C69.1543 7.41513 65.6045 0.0365277 55.2708 0H55.1919C44.8581 0.0365277 41.3084 7.41513 41.3084 7.41513C41.3084 7.41513 33.3806 1.02278 23.7568 5.58874C14.133 10.1182 16.2234 19.2866 16.2234 19.2866C16.2234 19.2866 5.85024 17.4603 1.62997 25.4233C-6.02174 39.9979 14.1725 61.8414 43.241 66.9918C20.0493 67.905 3.52317 71.5578 3.52317 75.9046C3.52317 80.9089 26.636 85 55.1919 85H55.2708C83.8266 85 106.94 80.9089 106.94 75.9046C106.979 71.5578 90.4134 67.905 67.2611 67.0284ZM55.3497 73.4207C50.5378 73.4207 46.6725 70.6081 46.6725 67.1014C46.6725 63.5948 50.5772 60.7821 55.3497 60.7821C60.1616 60.7821 64.0269 63.5948 64.0269 67.1014C64.0269 70.6081 60.1616 73.4207 55.3497 73.4207Z"
							fill="#C8D4FF"
						/>
					</svg>
					<NuxtLink v-if="slug" :to="localePath(props.slug)"></NuxtLink>
				</div>
				<p class="product-reviews__text">
					{{ productTitle ? productTitle : '' }}
					<span>{{ productSubTitle ? productSubTitle : '' }}</span>
				</p>
			</div>

			<button @click="showReview" v-if="props.moderation === 'active'">
				{{ $t('acc-reviews.button.goToReview') }}
			</button>

			<p class="product-reviews__moderation" v-else>
				{{ $t('acc-reviews.button.reviewAtModeration') }}
			</p>
			<div class="product-reviews__content">
				<svg
					width="9"
					height="8"
					viewBox="0 0 9 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3.54293 0.650039C2.83274 1.5339 2.47765 2.30086 2.47765 2.95089C2.46456 3.24228 2.51392 3.53299 2.62187 3.8003C2.72983 4.06761 2.89346 4.30429 3.09996 4.49181C3.29788 4.66802 3.45589 4.89091 3.56188 5.14342C3.66788 5.39593 3.71905 5.67134 3.71147 5.94855C3.71991 6.2225 3.67632 6.4954 3.5834 6.75039C3.49049 7.00538 3.35022 7.23703 3.17127 7.43102C2.9981 7.618 2.79152 7.76482 2.56415 7.86252C2.33678 7.96021 2.09339 8.00672 1.84886 7.99922C1.59944 8.00545 1.35189 7.95138 1.12423 7.84095C0.89658 7.73052 0.694568 7.5665 0.532922 7.36087C0.160019 6.86213 -0.0286206 6.2314 0.00352404 5.5908C0.00352421 3.65004 0.965085 1.78644 2.8882 4.19364e-07L3.54293 0.650039ZM8.83259 0.65004C8.12673 1.5339 7.77379 2.30086 7.77379 2.9509C7.76015 3.24145 7.80839 3.53152 7.91479 3.79869C8.0212 4.06587 8.18292 4.30301 8.38746 4.49181C8.5845 4.66728 8.74198 4.88905 8.84794 5.14025C8.9539 5.39146 9.00556 5.6655 8.99897 5.94154C9.00741 6.21548 8.96382 6.48839 8.8709 6.74338C8.77799 6.99837 8.63772 7.23002 8.45877 7.424C8.28614 7.61225 8.07981 7.76037 7.85242 7.85928C7.62502 7.95819 7.38136 8.00581 7.13635 7.99922C6.88717 8.00297 6.64034 7.94658 6.41383 7.83413C6.18731 7.72169 5.98681 7.55602 5.8269 7.34918C5.45267 6.85516 5.26029 6.22895 5.2867 5.5908C5.2867 3.65004 6.25186 1.78644 8.18219 8.82179e-07L8.83259 0.65004Z"
						fill="#1D1D1B"
						fill-opacity="0.2"
					/>
				</svg>
				<p>
					{{
						props.commentText.length > 200
							? props.commentText.slice(0, 100) + '...'
							: props.commentText
					}}
				</p>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.product-reviews {
	padding: 24px 32px;

	background-color: $white;

	border-radius: 15px;

	@include tablet {
		padding: 24px;
	}

	@include small-mobile {
		padding: 24px 32px;
	}

	@media (max-width: 389px) {
		padding: 24px 17px;
	}

	&__container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-wrap: wrap;
	}

	&__wrap {
		display: flex;
		align-items: center;
		gap: 52px;
		flex-basis: 50%;

		@include laptop {
			gap: 30px;
		}

		@include tablet {
			gap: 12px;

			margin-bottom: 12px;
		}

		@include small-mobile {
			gap: 16px;
			flex-basis: auto;
		}

		@media (max-width: 389px) {
			margin-bottom: 8px;
		}
	}

	&__img {
		position: relative;

		flex-shrink: 0;
		width: 97px;

		@include tablet {
			width: 80px;
		}

		@include small-mobile {
			width: 97px;
		}

		img {
			width: 97px;
			height: 97px;

			@include tablet {
				width: 80px;
				height: 80px;
			}

			@include small-mobile {
				width: 97px;
				height: 97px;
			}
		}

		a {
			position: absolute;

			left: 0;
			top: 0;

			height: 100%;
			width: 100%;
			cursor: pointer;
		}
	}

	&__content {
		display: flex;
		max-width: 300px;
		margin-left: 148px;

		@include tablet {
			max-width: initial;
			margin-left: 0;
		}

		@include small-mobile {
			width: 100%;
			margin-bottom: 24px;
		}

		@media (max-width: 389px) {
			margin-bottom: 16px;
		}

		p {
			margin-bottom: 0;

			font-weight: 500;
			font-size: 16px;
			line-height: 24px;

			overflow-wrap: anywhere;

			@include tablet {
				min-width: 225px;

				font-size: 14px;
				line-height: 16px;
			}

			@include small-mobile {
				font-size: 16px;
				line-height: 21px;
			}

			@media (max-width: 389px) {
				font-size: 14px;
				line-height: 18px;
			}
		}

		svg {
			flex-shrink: 0;

			margin-right: 10px;

			@include tablet {
				margin-right: 3px;
			}

			@include small-mobile {
				margin-right: 8px;
			}
		}
	}

	&__text {
		margin-bottom: 0;

		display: flex;
		flex-direction: column;

		font-weight: 500;
		font-size: 20px;
		line-height: 28px;

		@include laptop-big {
			font-size: 18px;
			line-height: 22px;
		}

		@media (max-width: 400px) {
			flex-shrink: 1;
		}

		span {
			font-weight: 500;
			font-size: 16px;
			line-height: 24px;

			@include tablet {
				font-size: 14px;
				line-height: 16px;
			}

			@include small-mobile {
				font-size: 16px;
				line-height: 21px;
			}
		}
	}

	&__moderation {
		margin-bottom: 0;

		width: 306px;

		font-size: 20px;
		line-height: 28px;

		text-align: center;

		@include laptop-big {
			font-size: 18px;
			line-height: 23px;
		}

		@include laptop {
			width: 40%;
		}

		@include tablet {
			width: 232px;

			font-size: 20px;
			line-height: 25px;
		}

		@include mobile {
			width: 170px;
			margin-left: 12px;
		}

		@media (max-width: 670px) {
			width: 235px;
			margin-left: 0;
		}

		@media (max-width: 597px) {
			order: 1;
			width: 100%;
			margin-top: 8px;
		}

		@include small-mobile {
			font-size: 16px;
			line-height: 21px;
		}
	}

	button {
		display: flex;
		justify-content: center;
		align-items: center;

		font-weight: 500;
		font-size: 23px;
		line-height: 29px;
		color: $dark-primary;

		width: 100%;

		height: 56px;
		max-width: 306px;

		background-color: $white;
		border-radius: 40px;

		border: 1px solid $dark-primary;
		outline: 0;

		transition: color 0.3s, background-color 0.3s;

		&:hover {
			background-color: $black-005;
		}

		&:active {
			background-color: $black-01;
		}

		@include laptop-big {
			font-size: 18px;
			line-height: 23px;
		}

		@include laptop {
			max-width: 232px;
		}

		@include tablet {
			font-size: 20px;
			line-height: 25px;
		}

		@include mobile {
			max-width: 45%;
		}

		@media (max-width: 735px) {
			max-width: 38%;
		}

		@media (max-width: 670px) {
			max-width: 45%;
		}

		@include small-mobile {
			max-width: initial;
			height: 48px;

			order: 1;

			font-size: 18px;
			line-height: 22px;
		}
	}
}

.margin-bottom {
	@include tablet {
		margin-bottom: 8px;
	}
}
</style>
