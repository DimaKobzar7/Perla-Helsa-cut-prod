<script setup>
import PopupModal from '~/components/ui/PopupModal.vue';
import PromocodeFormPhoneItem from '~/components/popups/promocodesPopups/PromocodeFormPhoneItem.vue';
import GetPromocode from '~/components/popups/promocodesPopups/GetPromocode.vue';

import { useGetPromocodePopupStore } from '~/store/getPromocodePopupStore';
import { onMounted, ref, watch } from 'vue';

const getPromocodePopupStore = useGetPromocodePopupStore();

const route = useRoute();
const i18n = useI18n();

const changeDiscountBtnPosition = ref(false);
const scrollToShowButton = ref(1200);
const productPage = ref(false);
const notProductPage = ref(false);

const cookieName = useCookie('someCookie', {
  expires: new Date(Date.now() + 7 * 86400e3)
});

const cookieName = useCookie('someCookie', {
  expires: new Date(Date.now() + 7 * 86400e3)
});

const cookieName = useCookie('someCookie', {
  expires: new Date(Date.now() + 7 * 86400e3)
});

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  if (!cookieName.value) {
    cookieName.value = false;
    cookieName.value = false;
    cookieName.value = false;

    getPromocodePopupStore.popupTimeout = setTimeout(() => {
      getPromocodePopupStore.showPromocodeFormPopup = true;
      cookieName.value = true;
    }, 10000);
  } else {
    clearTimeout(getPromocodePopupStore.popupTimeout);
  }

  if (
      route.fullPath.includes('somePage') ||
      route.fullPath.includes('somePage') ||
      route.fullPath.includes('somePage') ||
      route.fullPath.includes('somePage')
  ) {
    clearTimeout(getPromocodePopupStore.popupTimeout);
  }

  if (cookieName.value) {
    clearTimeout(getPromocodePopupStore.popupTimeout);

    getPromocodePopupStore.showPromocodeCircleDiscount = true;
    getPromocodePopupStore.showPromocodeFormPopup = false;

    if (
        route.fullPath.includes('somePage') ||
        route.fullPath.includes('somePage') ||
        route.fullPath.includes('somePage')
    ) {
      getPromocodePopupStore.showPromocodeCircleDiscount = false;
    } else {
      getPromocodePopupStore.showPromocodeCircleDiscount = true;
    }
  }
});

watch(
    () => route.fullPath,
    () => {
      if (route.meta.layout !== 'someLayout') {
        productPage.value = false;
      }

      if (route.meta.layout === 'someLayout') {
        notProductPage.value = false;
      }

      if (
          route.fullPath.includes('somePage') ||
          route.fullPath.includes('somePage') ||
          route.fullPath.includes('somePage') ||
          route.fullPath.includes('somePage')
      ) {
        clearTimeout(getPromocodePopupStore.popupTimeout);

        getPromocodePopupStore.showPromocodeFormPopup = false;
      } else {
        if (!cookieName.value) {
          getPromocodePopupStore.popupTimeout = setTimeout(() => {
            getPromocodePopupStore.showPromocodeFormPopup = true;
            cookieName.value = true;
          }, 10000);
        }
      }

      if (cookieName.value) {
        clearTimeout(getPromocodePopupStore.popupTimeout);

        getPromocodePopupStore.showPromocodeCircleDiscount = true;
        getPromocodePopupStore.showPromocodeFormPopup = false;

        if (
            route.fullPath.includes('somePage') ||
            route.fullPath.includes('somePage') ||
            route.fullPath.includes('somePage')
        ) {
          getPromocodePopupStore.showPromocodeCircleDiscount = false;
        } else {
          getPromocodePopupStore.showPromocodeCircleDiscount = true;
        }
      }
    }
);

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  clearTimeout(getPromocodePopupStore.popupTimeout);
});

const showLastSeenPopup = () => {
  if (
      !getPromocodePopupStore.showPromocodeFormPopup &&
      !cookieName.value
  ) {
    getPromocodePopupStore.showPromocodeFormPopup = true;
  }

  if (
      !getPromocodePopupStore.showGetPromocodePopup &&
      cookieName.value
  ) {
    getPromocodePopupStore.showGetPromocodePopup = true;
  }

  getPromocodePopupStore.showPromocodeCircleDiscount = false;
};

const closePromocodeForm = () => {
  getPromocodePopupStore.showPromocodeFormPopup = false;
  getPromocodePopupStore.showPromocodeCircleDiscount = true;
};

const hideDiscountCircle = () => {
  cookieName.value = true;
};

const handleScroll = () => {
  if (
      route.path === '/somePage' ||
      route.path === `/${i18n.locale.value}/somePage`
  ) {
    scrollToShowButton.value = 630;
  } else if (
      route.path === '/somePage' ||
      route.path === `/${i18n.locale.value}/somePage`
  ) {
    scrollToShowButton.value = 1870;
  } else {
    scrollToShowButton.value = 1200;
  }

  if (window.scrollY < scrollToShowButton.value) {
    changeDiscountBtnPosition.value = false;
    productPage.value = false;
    notProductPage.value = false;
  } else {
    changeDiscountBtnPosition.value = true;
  }
};

watch(changeDiscountBtnPosition, () => {
  if (changeDiscountBtnPosition.value && route.meta.layout !== 'someLayout') {
    notProductPage.value = true;
  } else if (
      changeDiscountBtnPosition.value &&
      route.meta.layout === 'someLayout'
  ) {
    productPage.value = true;
  }
});

watch(cookieName, () => {
  if (cookieName.value === 'someCookieValue') {
    cookieName.value = true;
  }
});

// emit for promocode
const emitPromoCode = emitPromoCode => {
  cookieName.value = emitPromoCode;
};
</script>

<template>
  <Teleport to="body">
    <PopupModal
        class="promocode-popup"
        :class="{
				promocode__atSearchProducts:
					getPromocodePopupStore.closePopupAtSearchProduct
			}"
        @close="closePromocodeForm"
        :modal-active="getPromocodePopupStore.showPromocodeFormPopup"
    >
      <PromocodeFormPhoneItem @promoCode="emitPromoCode" />
    </PopupModal>
  </Teleport>
  <GetPromocode />

  <div
      class="promocode__promotionCircle-position"
      :class="{
			promocode__productPage: productPage,
			promocode__notProductPage: notProductPage
		}"
      v-if="
			(getPromocodePopupStore.showPromocodeCircleDiscount &&
				!getPromocodePopupStore.showPromocodeFormPopup &&
				getPromocodePopupStore.discountCircleHideAtExceptions) ||
			(getPromocodePopupStore.showPromocodeCircleDiscount &&
				!getPromocodePopupStore.showGetPromocodePopup &&
				getPromocodePopupStore.discountCircleHideAtExceptions)
		"
  >
    <div
        v-if="!cookieName"
        class="promocode__promotionCircle"
        @click="showLastSeenPopup"
    >
      -10%
    </div>
    <svg
        v-if="!cookieName"
        @click="hideDiscountCircle"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="M17.9999 2L2 18M2.00009 2L18 18"
          stroke="#1D1D1B"
          stroke-width="2.3"
          stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.promocode {
  &__promotionCircle-position {
    position: fixed;
    bottom: 35px;
    left: 32px;
    z-index: 199;

    transition: bottom 0.6s;

    @include tablet {
      left: 38px;
      bottom: 25px;
    }

    @include small-mobile {
      left: 15px;
      bottom: 20px;

      transition: bottom 0.3s;
    }

    svg {
      position: absolute;
      top: -5px;
      right: -15px;
      z-index: 200;

      cursor: pointer;

      width: 13px;
      height: 13px;
    }
  }

  &__productPage {
    bottom: 130px;

    @include tablet {
      bottom: 150px;
    }

    @include small-mobile {
      bottom: 160px;

      transition: bottom 0.6s;
    }
  }

  &__notProductPage {
    bottom: 130px;

    @include tablet {
      bottom: 150px;
    }

    @include small-mobile {
      bottom: 100px;

      transition: bottom 0.6s;
    }
  }

  &__atSearchProducts {
    position: relative;

    z-index: 295;
  }

  &__promotionCircle {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 56px;
    height: 56px;

    font-weight: 500;
    font-size: 18px;
    line-height: 23px;

    color: $dark-primary;

    border-radius: 50%;

    background-color: $pink-fd;

    cursor: pointer;

    @include tablet {
      width: 64px;
      height: 64px;
    }

    @include small-mobile {
      width: 56px;
      height: 56px;
    }
  }

  &-popup {
    :deep(.popup-modal) {
      overflow-y: auto;
      z-index: 9999;
      .popup-modal__inner {
        transform: translate(-50%, -50%);
        left: 50%;
        top: 50%;
        width: 100%;
        max-width: 568px;
        max-height: 100vh;
        overflow: auto;
        border-radius: 15px;

        background: linear-gradient(
                180deg,
                #fcffeb 0%,
                #faf1e0 18.64%,
                #ffb7cc 93.75%
        );

        @include tablet {
          max-width: 576px;
        }

        @include small-mobile {
          max-width: 352px;
        }

        @media (max-width: 389px) {
          max-width: 336px;
        }

        .inner__close-button {
          width: 16px;
          height: 16px;

          top: 24px;
          right: 24px;

          z-index: 200;

          @include small-mobile {
            right: 16px;
            top: 16px;
          }
        }
      }
    }
  }
}
</style>
