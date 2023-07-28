<script setup>
import PopupModal from '~/components/ui/PopupModal.vue';
import GetPromocodeItem from '~/components/popups/promocodesPopups/GetPromocodeItem.vue';

import { useGetPromocodePopupStore } from '~/store/getPromocodePopupStore';

const getPromocodePopupStore = useGetPromocodePopupStore();

const closeGetPromocode = () => {
  getPromocodePopupStore.showGetPromocodePopup = false;
  getPromocodePopupStore.showPromocodeCircleDiscount = true;
};
</script>

<template>
  <Teleport to="body">
    <PopupModal
        class="promocode-popup"
        @close="closeGetPromocode"
        :modal-active="getPromocodePopupStore.showGetPromocodePopup"
    >
      <div class="promocode-modal">
        <GetPromocodeItem />
      </div>
    </PopupModal>
  </Teleport>
</template>

<style lang="scss" scoped>
.promocode {
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
        padding: 45px 64px;
        max-height: 100vh;
        overflow: auto;

        border-radius: 15px;

        background: linear-gradient(
                180deg,
                #fcffeb 0%,
                #faf1e0 18.64%,
                #ffb7cc 93.75%
        ),
        #fff;

        @include tablet {
          max-width: 576px;

          padding: 45px 36px;
        }

        @include small-mobile {
          max-width: 352px;

          padding: 40px 17px;
        }

        @media (max-width: 389px) {
          padding: 40px 12px;
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
