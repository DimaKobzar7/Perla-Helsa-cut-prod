<script setup>
import { ref } from 'vue';

const i18n = useI18n();
const route = useRoute();

const showArrowUpBtn = ref(false);
const scrollToShowButton = ref(1200);

const handleScroll = () => {
	if (
		route.path === '/someRoutes' ||
		route.path === `/${i18n.locale.value}/someRoutes`
	) {
		scrollToShowButton.value = 630;
	} else if (
		route.path === '/someRoutes' ||
		route.path === `/${i18n.locale.value}/someRoutes`
	) {
		scrollToShowButton.value = 1870;
	} else {
		scrollToShowButton.value = 1200;
	}

	if (window.scrollY < scrollToShowButton.value) {
		showArrowUpBtn.value = false;
	} else {
		showArrowUpBtn.value = true;
	}
};

const goUp = () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
};

onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
	<div
		class="arrow-up"
		:class="{ 'arrow-up--show': showArrowUpBtn }"
		@click="goUp"
	>
		<svg
			width="16"
			height="27"
			viewBox="0 0 16 27"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M8.70711 0.292892C8.31658 -0.0976314 7.68342 -0.0976315 7.29289 0.292892L0.928933 6.65685C0.538408 7.04738 0.538408 7.68054 0.928933 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 27L9 1L7 1L7 27L9 27Z"
				fill="black"
			/>
		</svg>
	</div>
</template>

<style lang="scss" scoped>
.arrow-up {
	position: fixed;
	bottom: 32px;
	left: 32px;
	z-index: -20;

	display: flex;
	align-items: center;
	justify-content: center;

	width: 56px;
	height: 56px;

	background-color: $pink-fd;
	border-radius: 10px;

	cursor: pointer;

	opacity: 0;

	transition: opacity 0.5s, background-color 0.5s;

	@include tablet {
		left: 36px;
		bottom: 36px;

		width: 64px;
		height: 64px;

		border-radius: 10px;
	}

	@include small-mobile {
		bottom: 20px;
		left: 15px;

		width: 56px;
		height: 56px;
	}

	&:hover {
		background-color: $pink-f3;
	}

	&:active {
		background-color: $pink-ee;
	}

	&--show {
		z-index: 199;

		opacity: 1;
	}

	svg {
		@include tablet {
			height: 26px;
		}
	}
}
</style>
