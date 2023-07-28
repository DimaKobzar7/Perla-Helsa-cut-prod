<script setup>
import CollagenSlider from '~/components/pagesSections/collagen/CollagenSlider.vue';
import CollagenIcoList from '~/components/pagesSections/collagen/CollagenIcoList.vue';
import BenefitsOfCollagen from '~/components/pagesSections/collagen/BenefitsOfCollagen.vue';
import UserManualCollagen from '~/components/pagesSections/collagen/UserManualCollagen.vue';
import FiftyFiftyFirstCollagen from '~/components/pagesSections/collagen/FiftyFiftyFirstCollagen.vue';
import FiftyFiftySecondCollagen from '~/components/pagesSections/collagen/FiftyFiftySecondCollagen.vue';
import FiftyFiftyThirdCollagen from '~/components/pagesSections/collagen/FiftyFiftyThirdCollagen.vue';

const i18n = useI18n();
const config = useRuntimeConfig().public;
const seoData = ref('');

// CONST HREF
const params = 'someProduct';

const getSeoData = async () => {
	const { data: resp } = await useFetch(
		`${config.laraDev}someRoutes/${params}?lang=${i18n.locale.value}`
	);
	seoData.value = resp.value.dataset;
};

await getSeoData();

watch(i18n.locale, () => {
	getSeoData();
});

watch(useRouter().currentRoute, () => {
	getSeoData();
});

definePageMeta({
	layout: 'someLayout',
	alias: ['/somePath', '/ua/somePath']
});

// lazy loading for all products pages
const feedbacksStore = useFeedbacksStore();
const feedbacksSlider = ref(null);

const route = useRoute();

const heightToDownloadReviews = ref(0);
const handleScroll = async () => {
  if (window.scrollY < 2000 && window.scrollY > 1000) {
    heightToDownloadReviews.value = Math.round(
        document.documentElement.getBoundingClientRect().height -
        document.documentElement.getBoundingClientRect().height / 2.5
    );
  }

  if (route.meta.layout === 'someLayout') {
    if (
        window.scrollY > heightToDownloadReviews.value &&
        heightToDownloadReviews.value > 0
    ) {

      window.removeEventListener('scroll', handleScroll);

      feedbacksStore.pageCounterForOneProductSwiper = 1;
      feedbacksStore.swiperCommentsForOneProduct = [];

      await feedbacksStore.getAllCommentsForOneProductSwiper(
          searchStore.productFetchData.id
      );
    }
  } else {
    window.removeEventListener('scroll', handleScroll);
  }
};

onMounted(async () => {
  window.addEventListener('scroll', await handleScroll, { passive: true });
});

onUnmounted(() => {

  window.removeEventListener('scroll', handleScroll);
});
</script>
<template>
	<CollagenIcoList />
	<FiftyFiftyFirstCollagen />
	<BenefitsOfCollagen />
	<FiftyFiftySecondCollagen />
	<UserManualCollagen />
	<CollagenSlider />
	<FiftyFiftyThirdCollagen />

	<div class="container-fluid insta-box-wrapper">
		<div class="insta-box container">
			<div class="row">
				<p
					class="insta-box__title col-xxl-9 col-xl-8 col-lg-9 col-sm-12 col-11"
					v-html="$t('squalene.instaTitle')"
				></p>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.insta-box-wrapper {
	background: linear-gradient(
		359deg,
		rgba(255, 178, 224, 0.5) 0%,
		rgba(255, 229, 245, 0.5) 83.33%,
		rgba(253, 241, 249, 0.5) 96.87%,
		rgba(255, 248, 252, 0.5) 100%
	);
}
</style>

