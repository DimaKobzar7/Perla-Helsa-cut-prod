<script setup>
const show = ref(false);

const someCookieName = useCookie('someCookies', {
	expires: new Date(Date.now() + 30 * 86400e3)
});

const someCookieName2 = useCookie('someCookies', {
	expires: new Date(Date.now() + 30 * 86400e3)
});

onMounted(() => {
	if (someCookieName.value || someCookieName2.value) {
		show.value = false;
	} else {
		show.value = true;
	}
});

watch(show, () => {
	if (someCookieName.value || someCookieName2.value) {
		show.value = false;
	} else {
		show.value = true;
	}
});

const someActionWithCookie = () => {
	show.value = false;
	someCookieName.value = 'someCookies';
};

const someActionWithCookie2 = () => {
	show.value = false;
	someCookieName2.value = 'someCookies';
};
</script>

<template>
	<div id="cookiesAgr" class="cookies" v-if="show">
		<div class="cookies__container-padding">
			<div class="cookies__wrap container">
				<p class="cookies__text">
					{{ $t('cookiesAgreement.text') }}
					<NuxtLink :to="localePath(`/someCookies`)" target="_blank">{{
						$t('cookiesAgreement.link')
					}}</NuxtLink>
				</p>

				<div class="cookies__inner">
					<button
						class="cookies__button cookies__button--accept"
						v-html="$t('buttons.cookiesAllow')"
						@click="someActionWithCookie"
					></button>

					<button
						class="cookies__button cookies__button--deny"
						v-html="$t('buttons.cookiesDeny')"
						@click="someActionWithCookie2"
					></button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
#cookiesAgr {
	position: fixed;
	bottom: 0;
	padding: 0;
	right: 0;
	left: 0;
	z-index: 200;

	background-color: $grey-fb;

	.cookies {
		&__container-padding {
			padding: 32px;

			@include laptop-big {
				padding: 24px;
			}

			@include tablet {
				padding: 20px;
			}

			@include small-mobile {
				padding: 16px 15px;
			}

			@media (max-width: 413px) {
				padding: 14px 12px;
			}
		}

		&__wrap {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 95px;

			margin: 0 auto;

			@include laptop-big {
				gap: 30px;
			}

			@include tablet {
				flex-direction: column;

				padding: 0;
				gap: 16px;
			}

			@include small-mobile {
				gap: 8px;
			}
		}

		&__inner {
			display: flex;
			justify-content: space-between;
			align-items: center;
			gap: 24px;

			width: 100%;

			@include laptop-big {
				gap: 30px;

				max-width: 540px;
			}

			@include tablet {
				gap: 24px;

				max-width: 576px;
			}

			@include small-mobile {
				gap: 16px;
			}
		}

		&__text {
			flex-shrink: 0;

			margin-bottom: 0;

			max-width: 677px;

			font-weight: 500;
			font-size: 16px;
			line-height: 24px;

			color: $dark-primary;

			@include laptop-big {
				max-width: 540px;

				font-size: 13px;

				line-height: 18px;
			}

			@include laptop {
				max-width: 500px;

				font-size: 14px;
			}

			@include tablet {
				max-width: 576px;

				line-height: 24px;
			}

			@include small-mobile {
				font-size: 11px;
				line-height: 14px;
			}

			@media (max-width: 413px) {
				font-size: 10px;
			}

			a {
				color: $blue-38;

				text-decoration: none;
			}
		}

		&__button {
			padding: 16px 20px;

			width: 100%;

			font-weight: 500;
			font-size: 16px;
			line-height: 16px;

			text-align: center;

			border: 1px solid $dark-primary;
			border-radius: 40px;

			appearance: none;
			outline: none;

			transition: 0.3s background-color;

			@include laptop-big {
				padding: 15px 20px;
			}

			@include tablet {
				max-width: initial;
				padding: 11px 20px;
			}

			@include small-mobile {
				padding: 7px 20px;
			}

			@media (max-width: 413px) {
				padding: 5px 20px;

				font-size: 14px;
			}

			&--accept {
				color: $white;
				background-color: $dark-primary;

				&:active {
				}

				&:hover {
					background-color: $grey-33;
				}
			}

			&--deny {
				color: $dark-primary;
				background-color: $white;

				&:hover {
					background-color: $black-005;
				}

				&:active {
					background-color: $black-01;
				}
			}
		}
	}
}
</style>
