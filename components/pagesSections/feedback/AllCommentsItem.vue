<script setup>
import Button from '~/components/ui/Button.vue';

const props = defineProps({
	id: {
		type: Number,
		required: true
	},

	content: {
		type: String,
		required: true
	},

	rating: {
		type: Number,
		required: true
	},

	createdAt: {
		type: String,
		required: true
	},

	name: {
		type: String,
		required: true
	}
});

const isDescriptionCommentsOpen = ref(false);
const maxHeightContent = ref(false);


const commentTime = ref('');
const colorGood = '#f5f352';
const colorStandard = 'rgba(29, 29, 27, 0.1)';

const toggleDescriptionBrand = () => {
	isDescriptionCommentsOpen.value = !isDescriptionCommentsOpen.value;

  const commentsWrap = document.querySelector('.all-comments__wrap');
	if (isDescriptionCommentsOpen.value) {
		commentsWrap.classList.add('max-height');
	}

	maxHeightContent.value = !maxHeightContent.value;
};

onMounted(() => {

  const getAllTIme = props.createdAt.slice(0, 10).split('-').reverse().join('/');

  const getYear = getAllTIme.split('').splice(-2, 2).join('');

  const getTimeWithout = getAllTIme.slice(0, 6);

	commentTime.value = getTimeWithout + getYear;
});
</script>

<template>
	<div class="feedback-comment">
		<div class="container">
			<div
				class="feedback-comment__wrapper"
				:class="{ 'max-height-initial': maxHeightContent }"
			>
				<div class="feedback-comment__rate">
					<h4 class="feedback-comment__name">{{ name }}</h4>
					<div class="feedback-comment__ico-wrap" ref="icoContainer">
						<svg
							v-for="ico in 5"
							width="40"
							height="37"
							viewBox="0 0 40 37"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M20 0L26.3598 11.2464L39.0211 13.8197L30.2904 23.3436L31.7557 36.1803L20 30.82L8.2443 36.1803L9.70957 23.3436L0.97887 13.8197L13.6402 11.2464L20 0Z"
								:fill="props.rating >= ico ? colorGood : colorStandard"
							/>
						</svg>
					</div>
				</div>
				<div class="feedback-comment__text-container">
					<div class="feedback-comment__text-inner">
						<p
							class="feedback-comment__text"
							:class="{ 'max-height-initial': maxHeightContent }"
							v-if="
								!isDescriptionCommentsOpen &&
								content.slice(0, 200).length >= 200
							"
							v-html="content.slice(0, 200) + '...'"
						></p>

						<p
							class="feedback-comment__text"
							:class="{ 'max-height-initial': maxHeightContent }"
							v-else
							v-html="content"
						></p>
					</div>

					<Button
						v-if="content.slice(0, 200).length >= 200"
						class="buttons buttons__learn-more"
						@click="toggleDescriptionBrand"
					>
						{{
							isDescriptionCommentsOpen
								? $t('buttons.close')
								: $t('buttons.open')
						}}
					</Button>
				</div>
				<span class="feedback-comment__date">{{ commentTime }}</span>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.feedback-comment {
	color: $dark-primary;

	.container {
		@include small-mobile {
			padding: 0 15px;
		}
	}

	&__rate {
		flex-shrink: 0;

		max-width: 152px;

		@include tablet {
			max-width: initial;
		}

		svg {
			display: inline-block;
			width: 20px;
			height: 20px;

			&:not(:last-child) {
				margin-right: 8px;
			}
		}
	}

	&__name {
		margin-bottom: 16px;

		font-weight: 700;
		font-size: 20px;
		line-height: 28px;

		color: $black;

		@include tablet {
			font-weight: 500;
			line-height: 25px;
		}

		@include small-mobile {
			margin-bottom: 12px;

			font-size: 14px;
			line-height: 18px;
		}
	}

	&__text {
		margin-bottom: 0;

		font-weight: 400;
		font-size: 18px;
		line-height: 24px;

		color: $black;

		overflow-wrap: anywhere;

		&-container {
			display: flex;
			flex-direction: column;
			align-items: flex-end;

			width: 100%;

			max-width: 946px;

			@include laptop-big {
				max-width: 792px;
			}
		}

		&-inner {
			align-self: flex-start;
		}
	}

	&__wrapper {
		display: flex;
		justify-content: space-between;
		gap: 17px;

		padding: 40px;

		background-color: $white;

		border-radius: 15px;


		@include laptop-big {
			padding: 40px 24px;
		}

		@include tablet {
			gap: 32px;
			flex-direction: column;

			padding: 32px 24px;
		}

		@include small-mobile {
			gap: 16px;

			padding: 32px 21px;
		}

		.buttons__learn-more {
			margin-top: 16px;

			font-weight: 500;
			font-size: 18px;
			line-height: 18px;

			color: $black;
		}
	}

	&__date {
		font-weight: 400;
		font-size: 13px;
		line-height: 18px;

		color: $black;
	}
}

.max-height-initial {
	max-height: initial;
}

.max-height-limit {
	max-height: 72px;
}
</style>
