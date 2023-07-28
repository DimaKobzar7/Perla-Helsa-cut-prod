<script setup>
const props = defineProps({
	text: {
		type: String,
		required: true
	},
	rate: {
		type: Number,
		required: true
	},

	progressLineColor: {
		type: String,
		required: true
	}
});

const progressBar = ref(null);
const progressMax = ref(0);
const setPogressRun = ref(null);

onMounted(() => {
	function handler(entries) {
		return entries.forEach(entry => {
			if (entry.isIntersecting) {
				setPogressRun.value = setInterval(() => {
					if (progressMax.value < props.rate) {
						progressMax.value++;
					}
				}, 20);
			}
		});
	}

  const observer = new IntersectionObserver(handler);

	observer.observe(progressBar.value);
});

onUpdated(() => {
	if (progressMax.value === props.rate) {
		clearInterval(setPogressRun);
	}
});
</script>

<template>
	<div id="progressBar" class="progressBar">
		<label class="progressBar__content progressBar__content--rate"
			>{{ progressMax }}%
		</label>
		<label class="progressBar__content progressBar__content--text">{{
			props.text
		}}</label>
		<progress
			ref="progressBar"
			class="progressBar__line"
			:value="progressMax"
			:style="{ '--progressLine-color': props.progressLineColor }"
			max="100"
		></progress>
	</div>
</template>

<style lang="scss">
:root {
	--progressLine-color: red;
}

#progressBar {
	position: relative;
	font-family: $onest;

	.progressBar {
		&__line {
			display: block;
			width: 100%;
			height: 60px;

			background-color: $gray-ff;

			border-radius: 10px;

			@include small-mobile {
				height: 36px;
			}

			&[value] {
				appearance: none; /* Needed for Safari */
				border: none; /* Needed for Firefox */
				&::-webkit-progress-value {
					background-color: rgb(var(--progressLine-color));
					border-radius: 10px 0 0 10px;
				}

				&::-moz-progress-bar {
					background-color: rgb(var(--progressLine-color));
					border-radius: 10px 0 0 10px;
				}

				&::-webkit-progress-bar {
					background-color: rgb(var(--progressLine-color), 0.3);
					border-radius: 10px;
				}
			}
		}

		&__content {
			position: absolute;
			top: 50%;

			font-weight: 500;
			font-size: 36px;
			line-height: 40px;

			color: $white;

			transform: translateY(-50%);

			@include tablet {
				font-size: 30px;
				line-height: 40px;
			}

			@include small-mobile {
				font-size: 18px;
				line-height: 22px;
			}

			&--text {
				left: 137px;

				@include tablet {
					left: 149px;
				}

				@include small-mobile {
					left: 93px;
				}
			}

			&--rate {
				left: 32px;

				@include tablet {
					left: 56px;
				}

				@include small-mobile {
					left: 32px;
				}
			}
		}
	}
}
</style>
