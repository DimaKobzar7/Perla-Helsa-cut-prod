import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import { useAccountFeedbacksStore } from '~/store/accountReviews';
import { useAuthStore } from '~/store/authStore';

export const useFeedbacksStore = defineStore('feedbacksStore', () => {
	const config = useRuntimeConfig().public;
	const accountFeedbacksStore = useAccountFeedbacksStore();
	const authStore = useAuthStore();

	// all comments arr and page switcher
	const comments = ref([]);
	const pageCounter = ref(1);

	// for current id product page switcher
	const oneProductPageCounter = ref(1);

	// swiper at reviews page for insta
	const instaPageCounter = ref(1);
	const instaComments = ref([]);
c
	// swiper at all product pages
	const swiperCommentsForOneProduct = ref([]);
	const pageCounterForOneProductSwiper = ref(1);

	// limit of downloaded comments
	const limit = ref(5);

	const dataLoaded = ref(false);

	const hidePagination = ref(true);

	// POPUPS AT PERSONAL ACCOUNT
	const showThanksPopup = ref(false);
	const showPopupWithForm = ref(false);

	// VALIDATION
	const validationForsomeDataWrongData = ref(false);
	const validationForPhoneWrongData = ref(false);

	const paginationTotalReviews = ref(0);
	const paginationTotalInsta = ref(0);

	const getAllComments = async () => {
		try {
			const { data } = await useFetch(
				`${config.laraDev}someRoutes?page=${pageCounter.value}&limit=${limit.value}`
			);

			if (data.value.dataset.items.length === 0) {
				hidePagination.value = false;

				return;
			} else {
				hidePagination.value = true;
			}

			comments.value.push(...data.value.dataset.items);

			pageCounter.value++;
		} catch (e) {
			console.log(e);
		}
	};

	// Data for one product for swiper at product pages (comments about product)
	const getAllCommentsForOneProductSwiper = async productId => {
		try {
			if (
				paginationTotalReviews.value ===
					swiperCommentsForOneProduct.value.length &&
				pageCounterForOneProductSwiper.value !== 1
			) {
				return;
			}
			dataLoaded.value = true;

			await $fetch(
				`${config.laraDev}someRoutes?page=${pageCounterForOneProductSwiper.value}&limit=5&options[products][]=${productId}`
			).then(response => {
				paginationTotalReviews.value = response.dataset.pagination.total;
				swiperCommentsForOneProduct.value.push(...response.dataset.items);
			});

			dataLoaded.value = false;

			pageCounterForOneProductSwiper.value++;
		} catch (e) {
			console.log(e);
		}
	};

	// Show comments about selected product
	const getProductCommentById = async productId => {
		try {
			const { data } = await useFetch(
				`${config.laraDev}someRoutes?page=${oneProductPageCounter.value}&limit=${limit.value}&options[products][]=${productId}`
			);

			if (data.value.dataset.items.length === 0) {
				hidePagination.value = false;
				return;
			} else {
				hidePagination.value = true;
			}

			comments.value.push(...data.value.dataset.items);

			comments.value = comments.value.filter(item => {
				if (item.products.includes(Number(productId))) {
					return item;
				}
			});

			oneProductPageCounter.value++;
		} catch (e) {
			console.log(e);
		}
	};

	// for INSTA swiper
	const allCommentsForSwiperInsta = async () => {
		try {
			if (
				paginationTotalInsta.value === instaComments.value.length &&
				instaPageCounter.value !== 1
			) {
				return;
			}
			const { data } = await useFetch(
				`${config.laraDev}someRoutes?page=${instaPageCounter.value}&limit=5`
			);

			paginationTotalInsta.value = data.value.dataset.pagination.total;
			instaComments.value.push(...data.value.dataset.items);
			instaPageCounter.value++;
		} catch (e) {
			console.log(e);
		}
	};

	// POST
	const newCommentCreated = reactive({
		secretData1: '',
		secretData2: [],
		secretData3: '5',
		secretData4: '',
		secretData5: '',
		secretData6: ''
	});

	const purchasedGoodsUpdated = ref(false);

	const sendNewCommentToServer = async () => {
		purchasedGoodsUpdated.value = false;
		await $fetch(`${config.laraDev}someRoutes`, {
			headers: {
				accept: 'application/json'
			},

			body: {
				secretData1: dataVariable,

				secretData2: dataVariable,

				secretData3: dataVariable,

				secretData4: dataVariable,

				secretData5: dataVariable,

				secretData6: dataVariable
			},

			method: 'POST',

			referrerPolicy: 'strict-origin-when-cross-origin',

			mode: 'cors',

			credentials: 'include'
		})
			.then(async () => {
				showPopupWithForm.value = false;
				showThanksPopup.value = true;

				validationForPhoneWrongData.value = false;
				validationForsomeDataWrongData.value = false;

				if (authStore.isAuth) {
					accountFeedbacksStore.purchasedGoods = [];
					accountFeedbacksStore.comments = [];
					accountFeedbacksStore.pageCounter = 1;
					accountFeedbacksStore.breakpoint = 1;
					await accountFeedbacksStore.receivePurchasedGoods();
					await accountFeedbacksStore.getAllComments();

					purchasedGoodsUpdated.value = true;
				}
			})
			.catch(error => {
				console.log(
					'error at sendNewCommentToServer',
					error.secretMessage
				);
				if (
					error.secretMessage.includes(
						'The phone field contains an invalid number.'
					)
				) {
					validationForPhoneWrongData.value = true;
				} else {
					validationForPhoneWrongData.value = false;
				}

				if (
					error.secretMessage.includes(
						'The someData must be a valid someData address.'
					)
				) {
					validationForsomeDataWrongData.value = true;
				} else {
					validationForsomeDataWrongData.value = false;
				}
			});
	};

	return {
		getAllComments,
		comments,
		pageCounter,
		getProductCommentById,
		sendNewCommentToServer,
		newCommentCreated,
		oneProductPageCounter,
		allCommentsForSwiperInsta,
		instaComments,
		instaPageCounter,
		getAllCommentsForOneProductSwiper,
		swiperCommentsForOneProduct,
		pageCounterForOneProductSwiper,
		dataLoaded,
		hidePagination,
		showThanksPopup,
		showPopupWithForm,
		validationForsomeDataWrongData,
		validationForPhoneWrongData,

		purchasedGoodsUpdated
	};
});
