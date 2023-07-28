<script setup>
import FiftyFiftyFirstBeautyAge from '~/components/pagesSections/beautyAge/fiftyFifty/FiftyFiftyFirstBeautyAge.vue';
import FiftyFiftyThirdBeautyAge from '~/components/pagesSections/beautyAge/fiftyFifty/FiftyFiftyThirdBeautyAge.vue';
import FiftyFiftySecondBeautyAge from '~/components/pagesSections/beautyAge/fiftyFifty/FiftyFiftySecondBeautyAge.vue';
import ListOfBenefitsForHealthBeautyAge from '~/components/pagesSections/beautyAge/ListOfBenefitsForHealthBeautyAge.vue';
import { useI18n } from 'vue-i18n';
import { ref, watch } from 'vue';
import ProductsSliderBeautyAge from '~/components/pagesSections/beautyAge/ProductsSliderBeautyAge.vue';

const i18n = useI18n();
const config = useRuntimeConfig().public;

const seoData = ref('');
const productUrl = 'someProduct';

const getSeoData = async () => {
	const { data: resp } = await useFetch(
		`${config.laraDev}someRoutes/${productUrl}?lang=${i18n.locale.value}`
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
</script>

<template>
	<FiftyFiftyFirstBeautyAge />
	<ListOfBenefitsForHealthBeautyAge />
	<FiftyFiftySecondBeautyAge />
	<ProductsSliderBeautyAge />
	<FiftyFiftyThirdBeautyAge />
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
  background: linear-gradient(359deg, rgba(255, 178, 224, 0.5) 0%, rgba(255, 229, 245, 0.5) 83.33%, rgba(253, 241, 249, 0.5) 96.87%, rgba(255, 248, 252, 0.5) 100%);
}
</style>
