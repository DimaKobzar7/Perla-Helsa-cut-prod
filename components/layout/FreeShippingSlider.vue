<script setup>
import { useCountryStore } from '~/store/countryStore';
import { watch } from 'vue';
import { useGetPromocodePopupStore } from '~/store/getPromocodePopupStore';
import FromDownToUp from '~/components/animations/FromDownToUp.vue';
const countryStore = useCountryStore();
const route = useRoute();

const getPromocodePopupStore = useGetPromocodePopupStore();

onMounted(() => {
  const cookieName = useCookie('someCookie');

  if (cookieName.value === 'someCookiesValue') {
    getPromocodePopupStore.showPromocodeCircleDiscount = false;
  }
});

const { t } = useI18n();
const i18n = useI18n();
const content = ref([
  t('freeShipping.slider.text1'),
  t('freeShipping.slider.text2'),
  t('freeShipping.slider.text3')
]);

watch(i18n.locale, () => {
  content.value = [
    t('freeShipping.slider.text1'),
    t('freeShipping.slider.text2'),
    t('freeShipping.slider.text3')
  ];
});

const actionWithContent = () => {
  const fromDownToUpAnimation = document.querySelectorAll(
      '.animation-from-down-to-up'
  );

  const cookieName = useCookie('someCookies', {
    expires: new Date(Date.now() + 7 * 86400e3)
  });

  const cookieName = useCookie('someCookies', {
    expires: new Date(Date.now() + 7 * 86400e3)
  });

  const cookieName = useCookie('someCookies', {
    expires: new Date(Date.now() + 7 * 86400e3)
  });

  if (fromDownToUpAnimation[1].classList.contains('display-block-custom')) {
    if (!cookieName.value) {
      cookieName.value = true;
      cookieName.value = false;
      cookieName.value = false;

      if (
          route.fullPath.includes('someRoute') ||
          route.fullPath.includes('someRoute') ||
          route.fullPath.includes('someRoute') ||
          route.fullPath.includes('someRoute')
      ) {
        clearTimeout(getPromocodePopupStore.popupTimeout);
      }
    }

    if (!cookieName.value) {
      getPromocodePopupStore.showGetPromocodePopup = false;
      getPromocodePopupStore.showPromocodeFormPopup = true;
      clearTimeout(getPromocodePopupStore.popupTimeout);
    } else if (cookieName.value === 'someCookiesValue') {
      getPromocodePopupStore.showGetPromocodePopup = false;
      getPromocodePopupStore.showPromocodeFormPopup = false;
    } else {
      getPromocodePopupStore.showPromocodeFormPopup = false;
      getPromocodePopupStore.showGetPromocodePopup = true;
    }

    if (
        route.fullPath.includes('someRoute') ||
        route.fullPath.includes('someRoute')
    ) {
      getPromocodePopupStore.showGetPromocodePopup = false;
      getPromocodePopupStore.showPromocodeFormPopup = false;
    }

    if (
        !cookieName.value &&
        (route.fullPath.includes('someRoute') ||
            route.fullPath.includes('someRoute'))
    ) {
      getPromocodePopupStore.discountCircleHideAtExceptions = false;
    }
  }
};

watch(
    () => route.fullPath,
    () => {
      const cookieName = useCookie('someCookies');
      const cookieName = useCookie('someCookies');

      if (cookieName.value === 'someCookiesValue') {
        getPromocodePopupStore.showPromocodeCircleDiscount = false;
      }

      if (
          !cookieName.value &&
          (route.fullPath.includes('someRoute') ||
              route.fullPath.includes('someRoute'))
      ) {
        getPromocodePopupStore.discountCircleHideAtExceptions = false;
      } else {
        getPromocodePopupStore.discountCircleHideAtExceptions = true;
      }
    }
);
</script>

<template>
  <div
      class="container-fluid free-shipping"
      :class="{ 'is-hide': countryStore.countryCode !== 'lang' }"
  >
    <div class="container d-flex justify-content-center align-items-center">
      <FromDownToUp
          :content="content"
          :animationDelay="5000"
          :links="['/someRoute', null, '/someRoute']"
          :chooseOneSpecialItem="1"
          :routes-for-special-item="['someRoute', 'someRoute']"
          @actionWithContent="actionWithContent"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.free-shipping {
  padding: 10px 0;
  background-color: #f7dfff;
  display: block;

  min-height: 44px;

  @include laptop-big {
    padding: 8px 0 8px;
  }
  @include tablet {
    min-height: 30px;
    padding: 5px 0;
  }
  @include small-mobile {
    min-height: 28px;
    padding: 3px 0;
  }

  &:deep(.animation-from-down-to-up) {
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    color: $dark-primary;

    @include laptop-big {
      font-size: 18px;
      line-height: 28px;
    }
    @include tablet {
      font-size: 14px;
      line-height: 20px;
    }
    @include small-mobile {
      line-height: 22px;
      font-size: 13px;
    }

    a {
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
      color: $dark-primary;

      @include laptop-big {
        font-size: 18px;
        line-height: 28px;
      }
      @include tablet {
        font-size: 14px;
        line-height: 20px;
      }
      @include small-mobile {
        line-height: 22px;
        font-size: 13px;
      }

      text-decoration: none;
    }
  }

  &:deep(.for-special-item) {
  }
}

.is-hide {
  display: none;
}
</style>
