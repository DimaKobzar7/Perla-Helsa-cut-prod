<script setup>
const props = defineProps({
	descImg: {
		type: String,
		required: true
	},
	mobileImg: {
		type: String,
		required: true
	},
	alt: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	readTime: {
		type: String,
		required: true
	}
});
</script>

<template>
	<div class="topic-banner container-fluid">
		<picture>
			<source
				:srcset="props.descImg"
				media="(min-width: 576px)"
				:alt="props.alt"
			/>
			<img class="topic-banner-img" :src="props.mobileImg" :alt="props.alt" />
		</picture>
		<div class="text">
			<h1 class="topic-banner-title" v-html="props.title"></h1>
			<span class="topic-banner-read" v-html="props.readTime"></span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.topic-banner {
	position: relative;
	overflow: hidden;
	max-width: 1920px;
	height: 864px;
	padding: 0;
	top: 0;
	margin-bottom: 120px;

	@include laptop-big {
		margin-bottom: 100px;
		height: 648px;
	}

	@include tablet {
		margin-bottom: 96px;
		height: 560px;
	}

	@include small-mobile {
		margin-bottom: 72px;
		height: 480px;
	}

	&-img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		left: 0;
		top: 0;
	}

	&-title {
		font-weight: 500;
		font-size: 63px;
		line-height: 48px;
		width: 100%;

		@include laptop-big {
			font-size: 50px;
			line-height: 48px;
		}

		@include tablet {
			font-size: 40px;
			line-height: 39px;
		}
	}

	&-read {
		font-size: 23px;
		line-height: 28px;

		@include laptop-big {
			font-size: 23px;
			line-height: 28px;
		}

		@include tablet {
			font-size: 18px;
			line-height: 24px;
		}
	}

	.text {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;
		text-align: center;
		height: 100%;
		flex-wrap: wrap;
		color: $white;
		gap: 38px;

		@include laptop-big {
			gap: 24px;
		}

		@include tablet {
			gap: 16px;
		}

		@include small-mobile {
			gap: 8px;
		}
	}
}
</style>
