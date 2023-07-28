<script setup>
import { useGetPromocodePopupStore } from '~/store/getPromocodePopupStore';

const textCopied = ref(false);
const hideLabelCopied = ref(false);
const getPromocodePopupStore = useGetPromocodePopupStore();
const copyText = () => {
  textCopied.value = true;
  hideLabelCopied.value = true;

  const promocode = document.querySelector(
      '.get-promocode__promocode span'
  ).innerText;

  navigator.clipboard.writeText(promocode);

  setTimeout(() => {
    hideLabelCopied.value = false;
  }, 2000);
};

watch(
    () => getPromocodePopupStore.showGetPromocodePopup,
    () => {
      textCopied.value = false;
      hideLabelCopied.value = false;
    }
);

const promocode = ref(null);
function getCookie(name) {
  let matches = document.cookie.match(
      new RegExp(
          '(?:^|; )' +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
          '=([^;]*)'
      )
  );

  return matches ? decodeURIComponent(matches[1]) : undefined;
}

watch(
    () => getPromocodePopupStore.showGetPromocodePopup,
    () => {
      promocode.value = getCookie('someCookie');
    }
);

const closeModal = () => {
  getPromocodePopupStore.showGetPromocodePopup = false;
  getPromocodePopupStore.showPromocodeCircleDiscount = true;
  textCopied.value = false;
  hideLabelCopied.value = false;
};
</script>

<template>
  <div class="get-promocode">
    <div v-if="promocode !== 'someCookieValue'">
      <h2 class="get-promocode__title">
        {{ $t('popups.promocode.getPromocode.title') }}
      </h2>

      <p
          class="get-promocode__subTitle"
          v-html="$t('popups.promocode.getPromocode.subTitle')"
      ></p>

      <div class="get-promocode__promocode">
        <span>{{ promocode }}</span>
        <div
            class="get-promocode__textCopied"
            :class="{
						'hideText-animation': textCopied && hideLabelCopied
					}"
        >
          {{ $t('popups.promocode.getPromocode.hidedText') }}
        </div>
        <svg
            :class="{ 'd-none-custom': textCopied }"
            @click="copyText"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_8783_62667)">
            <path
                d="M18.1841 6.52171V3.26084C18.1841 1.91014 17.0617 0.815186 15.6772 0.815186H3.3429C1.95834 0.815186 0.835938 1.91014 0.835938 3.26084V15.2934C0.835938 16.6441 1.95834 17.7391 3.3429 17.7391H6.13731M8.34012 6.26084H20.6744C22.0589 6.26084 23.1813 7.35579 23.1813 8.70649V20.7391C23.1813 22.0898 22.0589 23.1848 20.6744 23.1848H8.34012C6.95556 23.1848 5.83315 22.0898 5.83315 20.7391V8.70649C5.83315 7.35579 6.95556 6.26084 8.34012 6.26084Z"
                stroke="#1D1D1B"
                stroke-opacity="0.6"
                stroke-width="2"
                stroke-miterlimit="10"
            />
          </g>
          <defs>
            <clipPath id="clip0_8783_62667">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
            :class="{ 'd-none-custom': !textCopied, 'cursor-off': textCopied }"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path
              d="M20.25 6.75073L9.75 17.2503L4.5 12.0007"
              stroke="#75C525"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
          />
        </svg>
      </div>

      <p class="get-promocode__warningText">
        {{ $t('popups.promocode.getPromocode.discountWarning') }}
      </p>
    </div>
    <div v-else>
      <h2 class="get-promocode__title mb-3-custom">
        {{ $t('popups.promocode.promoCodeReceived.title') }}
      </h2>

      <p
          class="get-promocode__subTitle get-promocode__subTitle--promoCodeReceived mb-3-custom"
          v-html="$t('popups.promocode.promoCodeReceived.subTitle')"
      ></p>
    </div>

    <button class="get-promocode__button" @click="closeModal">
      <NuxtLink :to="localePath(`/someRoute`)">{{
          $t('buttons.toCatalog')
        }}</NuxtLink>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.get-promocode {
  &__title {
    margin-bottom: 24px;

    font-weight: 500;
    font-size: 30px;
    line-height: 39px;

    color: $dark-primary-08;

    text-align: center;

    @include small-mobile {
      margin-bottom: 16px;

      font-size: 20px;
      line-height: 28px;
    }
  }

  &__subTitle {
    margin-bottom: 32px;

    font-weight: 500;
    font-size: 23px;
    line-height: 29px;
    color: $dark-primary-08;

    text-align: center;

    @include small-mobile {
      margin-bottom: 16px;

      font-size: 16px;
      line-height: 21px;
    }

    &--promoCodeReceived {
      @include small-mobile {
        font-size: 13px;
        line-height: 14px;
      }
    }
  }

  &__warningText {
    margin-bottom: 32px;

    font-size: 20px;
    line-height: 28px;

    color: $dark-primary-08;

    text-align: center;

    @include laptop-big {
      line-height: 30px;
    }

    @include tablet {
      font-size: 18px;
      line-height: 24px;
    }

    @include small-mobile {
      margin-bottom: 16px;

      font-size: 13px;
      line-height: 14px;
    }
  }

  &__textCopied {
    position: absolute;
    left: 50%;
    top: 0;

    padding: 4px 8px;

    font-weight: 400;
    font-size: 12px;
    line-height: 18px;

    color: $white;

    background: linear-gradient(
            0deg,
            rgba(29, 29, 27, 0.8),
            rgba(29, 29, 27, 0.8)
    ),
    #ffffff;

    border-radius: 4px;

    transform: translateX(-50%);

    text-transform: lowercase;

    opacity: 0;

    transition: all 0.3s;
  }

  &__promocode {
    position: relative;

    margin-bottom: 16px;
    padding: 20px 32px;

    text-align: center;

    background: $gray-05;
    border-radius: 12px;

    span {
      position: relative;

      font-weight: 500;
      font-size: 16px;
      line-height: 18px;

      color: $dark-primary-06;

      text-transform: uppercase;
      text-align: center;

      @include tablet {
        line-height: 24px;
      }

      @include small-mobile {
        line-height: 18px;
      }
    }

    svg {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);

      cursor: pointer;
    }

    &.disabled {
      pointer-events: none;
    }
  }

  &__button {
    width: 100%;
    color: $white;
    background-color: $green-75;

    border-radius: 60px;

    border: none;

    transition: background-color 0.3s;

    &:hover {
      background-color: $green-62;
    }

    &:active {
      background-color: $green-53;
    }

    a {
      display: block;
      padding: 15px 42px;
      width: 100%;
      color: $white;
      text-decoration: none;

      font-weight: 500;
      line-height: 26px;
      font-size: 23px;

      @include tablet {
        padding: 17px 42px;

        font-size: 18px;
        line-height: 22px;
      }

      @include small-mobile {
        padding: 13px 25px;

        font-size: 18px;
        line-height: 22px;
      }
    }
  }

  .d-none-custom {
    display: none;
  }

  .cursor-off {
    cursor: auto;
  }

  .hideText-animation {
    top: -30px;

    opacity: 1;

    transition: all 0.3s;
  }

  .mb-3-custom {
    @include small-mobile {
      margin-bottom: 24px;
    }
  }
}
</style>
