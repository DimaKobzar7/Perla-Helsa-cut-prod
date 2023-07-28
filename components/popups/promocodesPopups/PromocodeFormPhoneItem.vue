<script setup>
import { useGetPromocodePopupStore } from '~/store/getPromocodePopupStore';

import { reactive, ref } from 'vue';
import { useCountryStore } from '~/store/countryStore';

const getPromocodePopupStore = useGetPromocodePopupStore();
const countryStore = useCountryStore();
const config = useRuntimeConfig().public;

const userData = reactive({
  someData: '',
  someData: '',
  someData: ''
});


const emit = defineEmits(['promoCode']);

// VALIDATION
const beforePOSTvalidationForNameField = ref(false);
const beforePOSTvalidationForsomeDataField = ref(false);
const beforePOSTvalidationForPhoneField = ref(false);
const validationForsomeDataDataRepetition = ref(false);
const validationForsomeDataWrongData = ref(false);
const validationForPhoneDataRepetition = ref(false);
const validationForPhoneWrongData = ref(false);
const logInWithPhone = ref(false);
const logInWithMail = ref(false);
const showPromocode = async () => {
  let onlyNumbers = '';

  for (let i = 0; i < userData.someData.length; i++) {
    if (Number(userData.someData[i]) || userData.someData[i] === '0') {
      onlyNumbers += userData.someData[i];
    }
  }

  userData.someData = '';

  userData.someData = '+' + onlyNumbers;

  if (userData.someData === '+') {
    userData.someData = '';
  }

  if (!userData.someData.length) {
    beforePOSTvalidationForNameField.value = true;
  }

  if (!userData.someData.length) {
    beforePOSTvalidationForPhoneField.value = true;
  }

  if (!userData.someData.length) {
    beforePOSTvalidationForsomeDataField.value = true;
  }

  if (!userData.someData.length) {
    beforePOSTvalidationForPhoneField.value = false;
  }

  if (!userData.someData.length) {
    beforePOSTvalidationForsomeDataField.value = false;
  }

  if (
      !userData.someData.length &&
      !userData.someData.length &&
      !userData.someData.length
  ) {
    beforePOSTvalidationForsomeDataField.value = true;
    beforePOSTvalidationForPhoneField.value = true;
    beforePOSTvalidationForNameField.value = true;

    return;
  }

  if (!userData.someData.length) {
    return;
  }

  if (userData.someData.length && !userData.someData.length) {
    logInWithPhone.value = true;
    logInWithMail.value = false;
    beforePOSTvalidationForPhoneField.value = true;
  } else {
    beforePOSTvalidationForPhoneField.value = false;
  }

  if (userData.someData.length && !userData.someData.length) {
    logInWithPhone.value = false;
    logInWithMail.value = true;
    beforePOSTvalidationForsomeDataField.value = true;
  } else {
    beforePOSTvalidationForsomeDataField.value = false;
  }

  if (userData.someData.length && userData.someData.length) {
    logInWithMail.value = false;
  } else {
    logInWithPhone.value = false;
  }

  if (userData.someData.length && userData.someData.length) {
    logInWithPhone.value = false;
  } else {
    logInWithMail.value = false;
  }

  if (
      userData.someData.length &&
      userData.someData.length &&
      userData.someData.length
  ) {
    logInWithMail.value = true;
    logInWithPhone.value = true;
  }

  if (!logInWithPhone.value && !logInWithMail.value) {
    return;
  }

  getPromocodePopupStore.btnSubscribeDisabled = true;

  await $fetch(`${config.laraDev}someRoutes`, {
    method: 'POST',

    body: {
      someData1: userData.someData,

      someData2: userData.someData,

      someData3: userData.someData
    },

    headers: {
      accept: 'application/json'
    },

    referrerPolicy: 'strict-origin-when-cross-origin',

    mode: 'cors',

    credentials: 'include'
  })
      .then(async response => {
        if (response) {
          getPromocodePopupStore.showGetPromocodePopup = true;
          getPromocodePopupStore.showPromocodeFormPopup = false;

          emit('promoCode', response.data);
        }
      })
      .catch(error => {
        if (
            error.someMessage.includes(
                'The phone field contains an invalid number.'
            )
        ) {
          validationForPhoneWrongData.value = true;
        }

        if (
            error.someMessage.includes(
                'The someData must be a valid someData address.'
            )
        ) {
          validationForsomeDataWrongData.value = true;
        }

        if (
            error.someMessage.includes(
                'The someData has already been taken.'
            )
        ) {

          emit('promoCode', 'promoHasBeenUsed');
          getPromocodePopupStore.showGetPromocodePopup = true;
          getPromocodePopupStore.showPromocodeFormPopup = false;
        }

        if (
            error.someMessage.includes(
                'The phone has already been taken.'
            )
        ) {

          emit('promoCode', 'promoHasBeenUsed');
          getPromocodePopupStore.showGetPromocodePopup = true;
          getPromocodePopupStore.showPromocodeFormPopup = false;
        }
      })
      .finally(() => {
        getPromocodePopupStore.btnSubscribeDisabled = false;
      });
};

watch(
    () => getPromocodePopupStore.showPromocodeFormPopup,
    () => {
      beforePOSTvalidationForNameField.value = false;
      beforePOSTvalidationForsomeDataField.value = false;
      beforePOSTvalidationForPhoneField.value = false;

      validationForPhoneWrongData.value = false;
      validationForsomeDataWrongData.value = false;
      validationForPhoneDataRepetition.value = false;
      validationForsomeDataDataRepetition.value = false;

      userData.someData = '';
      userData.someData = '';
      userData.someData = '';
    }
);

watch(userData, () => {
  if (userData.someData.length) {
    beforePOSTvalidationForNameField.value = false;
  }

  if (userData.someData.length) {
    beforePOSTvalidationForPhoneField.value = false;

    validationForPhoneWrongData.value = false;
    validationForPhoneDataRepetition.value = false;

    beforePOSTvalidationForsomeDataField.value = false;
  }

  if (userData.someData.length) {
    beforePOSTvalidationForsomeDataField.value = false;

    validationForsomeDataWrongData.value = false;
    validationForsomeDataDataRepetition.value = false;

    beforePOSTvalidationForPhoneField.value = false;
  }
});
</script>

<template>
  <div class="promocode-phone-item">
    <picture class="promocode-phone-item__block-img">
      <source
          :srcset="`
					${config.images}/someRoute.png 1x,
					${config.images}/someRoute.png 2x`"
          media="(min-width: 1540px)"
          alt="firstOrderPromocode"
      />
      <source
          :srcset="`
					${config.images}/someRoute.webp 1x,
					${config.images}/someRoute.webp 2x`"
          media="(min-width: 1540px)"
          alt="firstOrderPromocode"
      />
      <source
          :srcset="`
								${config.images}/someRoute.png 1x,
								${config.images}/someRoute.png 2x`"
          media="(min-width: 992px)"
          alt="firstOrderPromocode"
      />
      <source
          :srcset="`
								${config.images}/someRoute.webp 1x,
								${config.images}/someRoute.webp 2x`"
          media="(min-width: 992px)"
          alt="firstOrderPromocode"
      />
      <source
          :srcset="`
					${config.images}/someRoute.png 1x,
					${config.images}/someRoute.png 2x`"
          media="(min-width: 576px)"
          alt="firstOrderPromocode"
      />
      <source
          :srcset="`
					${config.images}/someRoute.webp 1x,
					${config.images}/someRoute.webp 2x`"
          media="(min-width: 576px)"
          alt="firstOrderPromocode"
      />
      <source
          :srcset="`
								${config.images}/someRoute.png 2x`"
          media="(min-width: 390px)"
          alt="firstOrderPromocode"
      />
      <source
          :srcset="`
								${config.images}/someRoute.webp 2x`"
          media="(min-width: 390px)"
          alt="firstOrderPromocode"
      />
      <source
          :srcset="`
								${config.images}/someRoute.png 2x`"
          alt="firstOrderPromocode"
      />
      <source
          :srcset="`
								${config.images}/someRoute.webp 2x`"
          alt="firstOrderPromocode"
      />
      <img
          :src="`${config.images}/someRoute.png`"
          alt="firstOrderPromocode"
      />
    </picture>
    <div class="promocode-phone-item__container">
      <h2 class="promocode-phone-item__title">
        {{ $t('popups.promocode.personalInfo.title') }}
      </h2>

      <p
          class="promocode-phone-item__text"
          v-html="$t('popups.promocode.personalInfo.subTitle')"
      ></p>

      <div class="promocode-wrapper">
        <div class="promocode-inner">
          <input
              v-model="userData.someData"
              class="input"
              :class="{
							'input--invalid': beforePOSTvalidationForNameField
						}"
              type="text"
              :placeholder="
							$t('popups.promocode.personalInfo.inputPlaceholderName')
						"
          />
          <span
              class="input__invalid-text"
              :class="{
							'input__invalid-text--show': beforePOSTvalidationForNameField
						}"
          >
						{{ $t('popups.validation.requiredToFill') }}
					</span>
        </div>

        <!--      PHONE-->
        <!--			<div class="promocode-inner">-->
        <!--				<input-->
        <!--					v-maska:[options]-->
        <!--					v-model="userData.someData"-->
        <!--					class="input"-->
        <!--					:class="{-->
        <!--						'input&#45;&#45;invalid':-->
        <!--							beforePOSTvalidationForPhoneField ||-->
        <!--							validationForPhoneDataRepetition ||-->
        <!--							validationForPhoneWrongData-->
        <!--					}"-->
        <!--					type="tel"-->
        <!--					:placeholder="-->
        <!--						$t('popups.promocode.personalInfo.inputPlaceholderPhone')-->
        <!--					"-->
        <!--				/>-->
        <!--				<span-->
        <!--					class="input__invalid-text"-->
        <!--					:class="{-->
        <!--						'input__invalid-text&#45;&#45;show': beforePOSTvalidationForPhoneField-->
        <!--					}"-->
        <!--					>{{ $t('popups.validation.requiredToFill') }}-->
        <!--				</span>-->
        <!--				<span-->
        <!--					class="input__invalid-text"-->
        <!--					:class="{-->
        <!--						'input__invalid-text&#45;&#45;show': validationForPhoneDataRepetition-->
        <!--					}"-->
        <!--					>{{ $t('popups.validation.dataRepetition.phone') }}-->
        <!--				</span>-->
        <!--				<span-->
        <!--					class="input__invalid-text"-->
        <!--					:class="{-->
        <!--						'input__invalid-text&#45;&#45;show': validationForPhoneWrongData-->
        <!--					}"-->
        <!--					>{{ $t('popups.validation.wrongData.phone') }}-->
        <!--				</span>-->
        <!--			</div>-->
        <!--      MAIL-->
        <div class="promocode-inner">
          <input
              v-model="userData.someData"
              class="input"
              :class="{
							'input--invalid':
								beforePOSTvalidationForsomeDataField ||
								validationForsomeDataDataRepetition ||
								validationForsomeDataWrongData
						}"
              type="someData"
              :placeholder="
							$t('popups.promocode.personalInfo.inputPlaceholderMail')
						"
          />
          <span
              class="input__invalid-text"
              :class="{
							'input__invalid-text--show': beforePOSTvalidationForsomeDataField
						}"
          >{{ $t('popups.validation.requiredToFill') }}
					</span>
          <span
              class="input__invalid-text"
              :class="{
							'input__invalid-text--show': validationForsomeDataDataRepetition
						}"
          >{{ $t('popups.validation.dataRepetition.mail') }}
					</span>
          <span
              class="input__invalid-text"
              :class="{
							'input__invalid-text--show': validationForsomeDataWrongData
						}"
          >{{ $t('popups.validation.wrongData.mail') }}
					</span>
        </div>
      </div>

      <button
          class="promocode-phone-item__button"
          :class="{ isDisabled: getPromocodePopupStore.btnSubscribeDisabled }"
          @click="showPromocode"
      >
        <NuxtLink>{{ $t('buttons.subscribe') }}</NuxtLink>
      </button>
      <p
          class="promocode-phone-item__privacy"
          v-html="$t('popups.promocode.personalInfo.link')"
      ></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.promocode-phone-item {
  &__container {
    padding: 0 64px 64px;

    @include tablet {
      padding: 0 36px 45px;
    }

    @include small-mobile {
      padding: 0 15px 24px;
    }

    @media (max-width: 389px) {
      padding: 0 12px 24px;
    }
  }

  &__block-img {
    img {
      @media (max-width: 389px) {
        width: 100%;
      }
    }
  }

  &__title {
    margin-bottom: 16px;

    font-weight: 700;
    font-size: 32px;
    line-height: 36px;

    color: $dark-primary-08;

    text-align: center;

    @include laptop-big {
      font-size: 30px;
      line-height: 34px;
    }

    @include tablet {
      margin-bottom: 24px;

      font-size: 30px;
      line-height: 39px;
    }

    @include small-mobile {
      margin-bottom: 16px;

      font-size: 22px;
      line-height: 26px;
    }
  }

  &__text {
    margin: 0 auto 16px;
    max-width: 350px;

    font-weight: 500;
    font-size: 18px;
    line-height: 24px;

    text-align: center;

    color: $dark-primary-08;

    @include tablet {
      margin-bottom: 32px;
      max-width: initial;

      font-size: 23px;
      line-height: 29px;
    }

    @include small-mobile {
      margin: 0 auto 16px;
      max-width: 300px;

      font-size: 13px;
      line-height: 14px;
    }
  }

  &__privacy {
    margin-bottom: 0;

    font-weight: 400;
    font-size: 13px;
    line-height: 14px;

    text-align: center;

    color: $dark-primary-08;

    @include tablet {
      font-size: 13px;
      line-height: 16px;
    }

    @include small-mobile {
      font-size: 12px;
      line-height: 14px;
    }

    &:deep(a) {
      color: $dark-primary-08;
    }
  }

  .promocode-wrapper {
    margin-bottom: 16px;

    @include tablet {
      margin-bottom: 32px;
    }

    @include small-mobile {
      margin-bottom: 16px;
    }
  }

  .promocode-inner {
    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  .input {
    width: 100%;

    font-weight: 500;
    font-size: 16px;
    line-height: 24px;

    color: $dark-primary;

    background: $gray-05;
    border-radius: 12px;
    padding: 12px 32px;

    outline: none;
    border: none;

    appearance: none;

    &::-webkit-contacts-auto-fill-button {
      visibility: hidden;
      position: absolute;
      right: 0;
    }

    &::placeholder {
      color: $dark-primary-04;
    }

    &__invalid-text {
      display: none;

      margin-top: 8px;

      font-weight: 400;
      font-size: 13px;
      line-height: 16px;

      color: $invalid;

      &--show {
        display: block;
      }
    }

    &--invalid {
      border: 1px solid $invalid;
    }

    &--wrongInput {
      border: 1px solid $invalid;
    }

    &.disabled {
      pointer-events: none;
    }
  }

  &__button {
    margin-bottom: 8px;

    width: 100%;

    color: $white;
    background-color: $pink-e9;

    transition: background-color 0.3s;

    border-radius: 60px;

    border: none;

    @include tablet {
      margin-bottom: 10px;
    }

    @include small-mobile {
      margin-bottom: 8px;
    }

    &:hover {
      background-color: $pink-e4;
    }

    &:active {
      background-color: $pink-b2;
    }

    a {
      display: block;
      width: 100%;
      color: $white;
      text-decoration: none;

      line-height: 28px;
      font-size: 23px;
      padding: 14px 42px;

      @include tablet {
        padding: 16px 25px;

        font-size: 18px;
        line-height: 24px;
      }

      @include small-mobile {
        padding: 13px 25px;

        font-size: 18px;
        line-height: 22px;
      }
    }
  }
}

.isDisabled {
  opacity: 0.5;

  pointer-events: none;
  cursor: auto;
}
</style>
