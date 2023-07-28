<script setup>
defineProps({
	videoPath: {
		type: String
	},

	posterTitle: {
		type: String
	},
	posterText: {
		type: String
	}
});

const video = ref(null);
const toggleButton = ref(null);
const visibilityChange = ref(false);
const progress = ref(null);
const btnSwitch = ref(true);

const showBtn = () => {
	if (visibilityChange.value) {
		btnSwitch.value = true;
	}
};

const hideBtn = () => {
	if (visibilityChange.value) {
		btnSwitch.value = false;
	}
};

const play = () => {
	video.value.play();
	visibilityChange.value = true;
};

const pause = () => {
	video.value.pause();
	visibilityChange.value = false;
};

function togglePlay() {
	video.value.paused || video.value.ended ? play() : pause();
}

function handleProgress() {
	const progressPercentage =
		(video.value.currentTime / video.value.duration) * 100;
	progress.value.value = progressPercentage;
}

function changeFrame(e) {
	const changeFrameTime =
		(e.offsetX / progress.value.offsetWidth) * video.value.duration;
	video.value.currentTime = changeFrameTime;
}
const config = useRuntimeConfig().public;
</script>

<template>
	<div id="videoMainId">
		<div class="video-player" @mouseleave="hideBtn" @mouseenter="showBtn">
			<video
				playsinline
				ref="video"
				class="video"
				@timeupdate="handleProgress"
				:poster="`${config.images}/someRoute.jpg`"
				autobuffer
			>
				<source :src="videoPath" type="video/mp4" />

				<p>Your browser doesn't support HTML5 video.</p>
			</video>

			<div class="video__progress">
				<progress
					class="video__progress-line"
					ref="progress"
					max="100"
					value=""
					@click="changeFrame"
				></progress>
			</div>
			<button
				@click="togglePlay"
				ref="toggleButton"
				class="video__controls-btns toggleButton"
				v-if="btnSwitch"
				title="Toggle Play"
			>
				<img
					class="video__controls-btns--play"
					src="~/someRoute.svg"
					alt="playBtn"
					v-if="!visibilityChange"
				/>
				<img
					class="video__controls-btns--pause"
					src="~/someRoute.svg"
					alt="pauseBtn"
					v-if="visibilityChange"
				/>
			</button>
			<div class="video__wrap">
				<h2 class="video__title">
					{{ !visibilityChange ? posterTitle : '' }}
				</h2>
				<p class="video__text" v-html="!visibilityChange ? posterText : ''"></p>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
#videoMainId {
	.video {
		display: block;
		width: 100%;

		object-fit: cover;

		@include desktop {
			height: 868px;
		}

		@include tablet {
			min-height: 368px;
		}

		@include small-mobile {
			min-height: 228px;
		}


		&[poster] {
			display: block;
			object-fit: cover;
			width: 100%;
		}

		&__wrap {
			position: absolute;
			z-index: 1;

			bottom: 140px;
			left: 50%;

			text-align: center;
			transform: translateX(-50%);

			@include desktop {
				bottom: 140px;
			}

			@include laptop-big {
				bottom: calc(9vw + -11px);
				min-width: 700px;
			}

			@include tablet {
				bottom: 78px;

				min-width: 500px;
			}

			@include small-mobile {
				bottom: 55px;

				min-width: 309px;
			}
		}

		&__title {
			color: $white;

			@include desktop {
				margin-bottom: 36px;

				font-weight: 700;
				font-size: 50px;
				line-height: 40px;
			}

			@include laptop-big {
				margin-bottom: 36px;

				font-weight: 500;
				font-size: 40px;
				line-height: 48px;
			}

			@include tablet {
				margin-bottom: 24px;
				line-height: 34px;
				font-size: 32px;
			}

			@include small-mobile {
				margin-bottom: 19px;
				font-size: 28px;
			}
		}

		&__text {
			margin: 0;
			font-style: italic;
			color: $white;

			br {
				display: none;
			}

			@include desktop {
				font-weight: 500;
				font-size: 32px;
				line-height: 40px;
			}

			@include laptop-big {
				font-weight: 500;
				font-size: 27px;
				line-height: 32px;
			}

			@include tablet {
				font-size: 18px;
				line-height: 26px;
			}

			@include small-mobile {
				font-size: 16px;
				line-height: 18px;

				br {
					display: block;
				}
			}
		}

		&-player {
			position: relative;
			overflow: hidden;
		}

		&__controls-btns {
			position: absolute;
			z-index: 1;

			display: flex;

			background-color: transparent;

			border: 0;
			outline: 0;

			cursor: pointer;

			transform: translate(-50%, -50%);

			@include desktop {
				top: 45%;
				left: 50%;
			}

			@include laptop-big {
				top: 45%;
				left: 50%;
			}

			@include tablet {
				top: auto;
				left: 5%;
				bottom: 11px;
			}

			@include small-mobile {
				bottom: 8px;
			}

			&--play {
				transition: transform 0.3s;

				&:hover {
					transform: scale(1.2);
				}

				@include desktop {
					width: 60px;
					height: 78px;
				}

				@include laptop-big {
					width: 60px;
					height: 78px;
				}

				@include tablet {
					width: 15px;
					height: 19px;
				}

				@include small-mobile {
					width: 14px;
					height: 17px;
				}
			}

			&--pause {
				transition: transform 0.3s;

				&:hover {
					transform: scale(1.2);
				}

				@include desktop {
					width: 78px;
					height: 78px;
				}

				@include laptop-big {
					width: 78px;
					height: 78px;
				}

				@include tablet {
					width: 19px;
					height: 19px;
				}

				@include small-mobile {
					width: 17px;
					height: 17px;
				}
			}
		}

		&__progress {
			position: absolute;
			display: flex;

			width: 100%;

			@include desktop {
				justify-content: center;
				bottom: 49px;
			}

			@include laptop-big {
				justify-content: center;
				bottom: 49px;
			}

			@include tablet {
				bottom: 28px;
				justify-content: flex-end;
			}

			@include small-mobile {
				bottom: 22px;
			}

			&-line {
				position: relative;
				z-index: 1;

				display: flex;

				height: 4px;

				background-color: $gray-ff;

				cursor: pointer;
				transition: height 0.3s;

				&:hover {
					height: 8px;
				}

				@include desktop {
					width: 1296px;
				}

				@include laptop-big {
					width: 84%;
					min-width: 1110px;
				}

				@include laptop {
					width: 93%;
					min-width: 660px;
				}

				@include tablet {
					width: 85%;
					min-width: 351px;

					margin-right: 36px;
				}

				@include small-mobile {
					width: 80%;
					margin-right: 15px;
				}

				@media (max-width: 414px) {
					min-width: 240px;
				}

				&[value] {
					appearance: none; /* Needed for Safari */
					border: none; /* Needed for Firefox */
					&::-webkit-progress-value {
						background-color: $yellow-ff;
					}

					&::-moz-progress-bar {
						background-color: $yellow-ff;
					}

					&::-webkit-progress-bar {
						background-color: $gray-ff;
					}
				}
			}
		}
	}
}
</style>
