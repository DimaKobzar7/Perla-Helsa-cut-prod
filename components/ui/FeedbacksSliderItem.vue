<script setup>
const props = defineProps({
  someSecretData1: {
		type: String
	},

  someSecretData3: {
		type: Number
	},

  someSecretData4: {
		type: String
	},

  someSecretData5: {
		type: String
	}
});

const commentTime = ref('');

onMounted(() => {

  const getAllTIme = props.createdAt.slice(0, 10).split('-').reverse().join('/');

  const getYear = getAllTIme.split('').splice(-2, 2).join('');

  const getTimeWithout = getAllTIme.slice(0, 6);

  const correctTime = getTimeWithout + getYear;

	commentTime.value = correctTime;
});


const colorGood = '#f5f352';
const colorStandard = 'rgba(29, 29, 27, 0.1)';
</script>

<template>
	<div class="feedback-comment">
		<div class="feedback-comment__wrapper">
			<div class="feedback-comment__rate">
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
							:fill="props.someSecretData3 >= ico ? colorGood : colorStandard"
						/>
					</svg>
				</div>
				<span class="feedback-comment__date">{{ commentTime }}</span>
			</div>
			<div class="feedback-comment__text-container">
				<div class="feedback-comment__text-inner">
					<p class="feedback-comment__text" v-html="someSecretData1"></p>
				</div>
				<h4 class="feedback-comment__name">{{ someSecretData5 }}</h4>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.feedback-comment {
	width: 100%;
	color: $dark-primary;

	&__rate {
		flex-shrink: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 16px;
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
		font-weight: 500;
		font-size: 14px;
		line-height: 18px;
		margin-top: 16px;
		margin-bottom: 0;

		color: $black;

		@include tablet {
			font-weight: 500;
			line-height: 25px;
		}

		@include small-mobile {
			font-size: 14px;
			line-height: 18px;
		}
	}

	&__text {
		margin-bottom: 0;

		font-weight: 400;
		font-size: 14px;
		line-height: 18px;

		overflow-wrap: anywhere;

		color: $black;

		overflow-wrap: anywhere;
		&-inner {
			align-self: flex-start;
		}
	}

	&__wrapper {
		background-color: $white;

		padding: 20px;

		border-radius: 15px;

		height: 100%;

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
	}

	&__date {
		font-weight: 400;
		font-size: 13px;
		line-height: 18px;

		color: $black;
	}
}
</style>
