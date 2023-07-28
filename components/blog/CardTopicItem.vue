<script setup>
const props = defineProps({
	poster: {
		type: String,
		required: true
	},
	mobilePoster: {
		type: String,
		required: true
	},
	alt: {
		type: String,
		required: true
	},
	readTime: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	shortDescription: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	}
});
const localePath = useLocalePath();
</script>

<template>
	<div class="topic-item">
		<div class="topic-item-image">
			<picture>
				<source
					:srcset="props.poster"
					media="(min-width: 576px)"
					:alt="props.alt"
				/>
				<img :src="props.mobilePoster" :alt="props.alt" />
			</picture>
		</div>
		<p class="topic-item-read" v-html="props.readTime"></p>
		<h2 class="topic-item-title" v-html="props.title"></h2>
		<p class="topic-item-subtitle" v-html="props.shortDescription"></p>
		<nuxt-link
			v-if="props.url"
			:to="localePath(`/someRoute/` + props.url)"
			class="topic-item-link"
		></nuxt-link>
	</div>
</template>

<style lang="scss" scoped>
.topic-item {
	position: relative;
	width: min-content;

	&:hover {
		img {
			scale: 1.05;
		}
	}

	@include small-mobile {
		max-width: 216px;
	}

	&-image {
		overflow: hidden;
		width: 416px;
		margin-bottom: 32px;

		@include laptop-big {
			width: 350px;
		}

		@include tablet {
			margin-bottom: 24px;
			width: 396px;
		}

		@include small-mobile {
			width: 216px;
			margin-bottom: 16px;
		}

		img {
			width: 100%;
			height: 250px;
			object-fit: cover;
			transition: scale 0.3s;

			@include laptop-big {
				height: 230px;
			}

			@include small-mobile {
				height: 154px;
			}
		}
	}

	&-read {
		margin-bottom: 0;

		font-weight: 700;
		font-size: 16px;
		line-height: 21px;
		min-height: 40px;

		@include laptop-big {
			min-height: 44px;
		}
		@include small-mobile {
			min-height: 34px;
		}
	}

	&-title {
		margin-bottom: 10px;

		font-weight: 500;
		font-size: 23px;
		line-height: 28px;
		min-height: 55px;

		@include laptop-big {
			font-size: 20px;
			line-height: 25px;
		}

		@include tablet {
			font-size: 18px;
		}

		@include small-mobile {
			margin-bottom: 8px;

			line-height: 25px;
			min-height: 80px;
		}

		:deep(br) {
			display: none;
		}
	}

	&-subtitle {
		margin-bottom: 0;

		font-size: 18px;
		line-height: 24px;

		@include tablet {
			font-size: 16px;
		}
	}

	&-link {
		&:before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}
	}
}
</style>
