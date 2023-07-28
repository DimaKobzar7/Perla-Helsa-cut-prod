import { defineStore } from 'pinia';
import { watch } from 'vue';

export const useAccountFeedbacksStore = defineStore(
	'accountFeedbacksStore',
	() => {
		const config = useRuntimeConfig().public;
		const i18n = useI18n();

		// all comments arr and page switcher
		const comments = ref([]);
		const pageCounter = ref(1);

		// allPurchasedGoods
		const purchasedGoods = ref([]);

		const showEmptyScreen = ref(false);

		const paginationTotal = ref(0);

		// for observer
		const breakpoint = ref(1);

		const showPreloader = ref(false);

		// show popup with comment
		const showCommentPopup = ref(false);

		// content of popup with comment
		const commentPopupText = ref('');
		const commentPopupRate = ref([]);
		const commentPopupCreatedAt = ref('');

		const getAllComments = async () => {
			showPreloader.value = true;
			try {
				if (
					paginationTotal.value === comments.value.length &&
					pageCounter.value !== 1
				) {
					return;
				}
				const { data } = await useAsyncData('allComments', () =>
					$fetch(
						`${config.laraDev}someRoutes?page=${pageCounter.value}&limit=6&lang=${i18n.locale.value}`,
						{
							headers: {
								accept: 'application/json'
							},
							referrerPolicy: 'strict-origin-when-cross-origin',
							body: null,
							method: 'GET',
							mode: 'cors',
							credentials: 'include'
						}
					)
				);

				if (data.value.dataset) {
					paginationTotal.value = data.value.dataset.pagination.total;

					comments.value.push(...data.value.dataset.items);
				}

				showPreloader.value = false;
			} catch (e) {
				console.log('error at getAllComments', e);
				showPreloader.value = false;
			}
		};

		const receivePurchasedGoods = async () => {
			try {
				setTimeout(async () => {
					const { data } = await useAsyncData('purchasedGoods', () =>
						$fetch(
							`${config.laraDev}someRoutes?page=1&limit=3&lang=${i18n.locale.value}`,
							{
								headers: {
									accept: 'application/json'
								},
								referrerPolicy: 'strict-origin-when-cross-origin',
								body: null,
								method: 'GET',
								mode: 'cors',
								credentials: 'include'
							}
						)
					);

					if (data.value.dataset) {
						purchasedGoods.value.push(...data.value.dataset.items);
					}
				});
			} catch (e) {
				console.log('error at receivePurchasedGoods', e);
			}
		};

		// OBSERVER
		const setIntersectionObserver = () => {
			if (
				paginationTotal.value === comments.value.length &&
				pageCounter.value !== 1
			) {
				return;
			}

			const sections = document.querySelectorAll('.product-reviews');

			const lastVisibleReview = sections[sections.length - 1];

			if (lastVisibleReview) {
				lastVisibleReview.classList.add(`lazy-breakpoint${breakpoint.value}`);
			}

			setTimeout(() => {
				const observer = new IntersectionObserver(function (entries, observer) {
					entries.forEach(async entry => {
						if (entry.isIntersecting) {
							pageCounter.value++;

							await getAllComments();

							breakpoint.value++;
							observer.unobserve(entry.target);
						}
					});
				});

				if (lastVisibleReview) {
					observer.observe(lastVisibleReview);
				}
			}, 0);
		};

		watch(i18n.locale, async () => {
			purchasedGoods.value = [];
			comments.value = [];
			pageCounter.value = 1;
			breakpoint.value = 1;
		});

		return {
			getAllComments,
			comments,
			receivePurchasedGoods,
			purchasedGoods,
			pageCounter,
			showEmptyScreen,
			breakpoint,
			setIntersectionObserver,

			showPreloader,

			showCommentPopup,
			commentPopupText,
			commentPopupRate,
			commentPopupCreatedAt
		};
	}
);
