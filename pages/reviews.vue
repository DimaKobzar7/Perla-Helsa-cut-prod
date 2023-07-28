<script setup>
import AllComments from '~/components/pagesSections/feedback/AllComments.vue';

import InstagramReviewsSlider from '~/components/ui/InstagramReviewsSlider.vue';
import { useI18n } from 'vue-i18n';
import { useFeedbacksStore } from '~/store/feedbacksStore';
import { watch } from 'vue';

const config = useRuntimeConfig().public;
const i18n = useI18n();

const feedbacksStore = useFeedbacksStore();

feedbacksStore.allCommentsForSwiperInsta();

onMounted(() => {
	if (i18n.locale.value === 'en') {
		i18n.locale.value = 'en';
		window.location.href = 'error';
	}
});

const addedNewSlidesWithComments = () => {
	if (feedbacksStore.instaComments.length < feedbacksStore.instaPageCounter) {

		return;
	}

	feedbacksStore.allCommentsForSwiperInsta();
};

definePageMeta({
	layout: 'someLayout',
	alias: ['/somePath', '/ua/somePath']
});
</script>

<template>
	<section class="feedback-page">
		<div class="feedback-page__img-container">
			<picture class="feedback-page__img">
				<source
					:srcset="`
						${config.images}/somePath.webp 1x,
						${config.images}/somePath.webp 2x`"
					media="(min-width: 1540px)"
					alt="feedbacks-banner-img"
				/>

				<source
					:srcset="`
						${config.images}/somePath.jpg 1x,
						${config.images}/somePath.jpg 2x`"
					media="(min-width: 1540px)"
					alt="feedbacks-banner-img"
				/>

				<source
					:srcset="`
						${config.images}/somePath.webp 1x,
						${config.images}/somePath.webp 2x`"
					media="(min-width: 992px)"
					alt="feedbacks-banner-img"
				/>

				<source
					:srcset="`
						${config.images}/somePath.jpg 1x,
						${config.images}/somePath.jpg 2x`"
					media="(min-width: 992px)"
					alt="feedbacks-banner-img"
				/>

				<source
					:srcset="`
						${config.images}/somePath.webp 1x,
						${config.images}/somePath.webp 2x`"
					media="(min-width: 576px)"
					alt="feedbacks-banner-img"
				/>

				<source
					:srcset="`
						${config.images}/somePath.jpg 1x,
						${config.images}/somePath.jpg 2x`"
					media="(min-width: 576px)"
					alt="feedbacks-banner-img"
				/>

				<source
					:srcset="`
						${config.images}/somePath.webp 1x,
						${config.images}/somePath.webp 2x`"
					alt="feedbacks-banner-img"
				/>
				<source
					:srcset="`
						${config.images}/somePath.jpg 1x,
						${config.images}/somePath.jpg 2x`"
					alt="feedbacks-banner-img"
				/>

				<img
					:src="`${config.images}/somePath.jpg`"
					alt="feedbacks-banner-img"
				/>
			</picture>
		</div>

		<div class="insta-box-wrapper">
			<div class="feedback-page__insta">
				<div class="container-lg">
					<h2 class="feedback-page__title">Відгуки наших клієнтів</h2>
				</div>
				<div>
					<client-only>
						<InstagramReviewsSlider
							@moreServerSlides="addedNewSlidesWithComments"
							:products-data="feedbacksStore.instaComments"
						/>
					</client-only>
				</div>
			</div>
		</div>
		<AllComments />
	</section>
</template>

<style lang="scss" scoped>
.feedback-page {
	padding-bottom: 120px;

	@include tablet {
		padding-bottom: 96px;
	}

	@include small-mobile {
		padding-bottom: 72px;
	}

	background-color: $gray-f9f;

	&__title {
		@extend %subtitle-h2;

		margin-bottom: 48px;

		@include laptop-big {
			margin-bottom: 40px;
		}

		@include tablet {
			padding-left: 24px;
		}

		@include small-mobile {
			margin-bottom: 24px;

			padding-left: 3px;
		}
	}

	&__insta {
		padding-top: 160px;

		@include laptop-big {
			padding-top: 120px;
		}

		@include tablet {
			padding-top: 96px;
		}

		@include small-mobile {
			padding-top: 72px;
		}
	}

	&__img {
		width: 100%;

		&-container {
			position: relative;

			display: flex;
			justify-content: center;
		}

		img {
			width: 100%;
		}
	}
}

.insta-box-wrapper {
	background: $gray-f9f;
}
</style>
