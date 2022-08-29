import axios from 'axios';
import { createStore } from 'vuex';
// import axios from 'axios';

const store = createStore({
	state: {
		applicant: [],
		singleApplicant: [],
		allApplicants: [],
		allBatches: [],
		applicantInfo: [],
	},
	getters: {
		getApplicant: (state) => state.applicant,
		getSingleApplicant: (state) => state.singleApplicant,
		getAllApplicants: (state) => state.allApplicants,
		getAllBatches: (state) => state.allBatches,
		getApplicantInfo: (state) => {
			return state.applicantInfo;
		},
	},
	mutations: {
		SET_APPLICANT(state, payload) {
			state.applicant = payload;
		},
		SET_SINGLE_APPLICANT(state, payload) {
			state.singleApplicant = payload;
		},
		SET_ALL_APPLICANTS(state, payload) {
			state.allApplicants = payload;
		},
		SET_ALL_BATCHES(state, payload) {
			state.allBatches = payload;
		},
		setEmail(state, email) {
			state.applicantInfo = [];
			state.applicantInfo.push(email);
		},
	},
	actions: {
		async getApplicant({ commit }) {
			const token = localStorage.getItem('token');
			try {
				let response = await axios.get(
					'http://localhost:8082/api/v1/userInfo',
					{
						headers: { token: token },
					}
				);
				commit('SET_APPLICANT', response.data.data);
				return response;
			} catch (error) {
				console.log(error);
			}
		},
		async getSingleApplicant({ commit }, email) {
			const token = localStorage.getItem('admintoken');
			// const email = localStorage.getItem('userEmail');
			// const email = this.$store.getters.getApplicantInfo[0];
			try {
				let response = await axios.get(
					`http://localhost:8081/api/v1/applicant-info/${email}`,
					{
						headers: { token: token },
					}
				);
				commit('SET_SINGLE_APPLICANT', response.data.data);
				return response;
			} catch (error) {
				console.log(error);
			}
		},
		async getAllApplicants({ commit }) {
			const token = localStorage.getItem('admintoken');
			try {
				let response = await axios.get(
					'http://localhost:8082/api/v1/admin/getApplicants',
					{
						headers: { token: token },
					}
				);
				commit('SET_ALL_APPLICANTS', response.data.data);
				return response;
			} catch (error) {
				console.log(error);
			}
		},
		async getAllBatches({ commit }) {
			const token = localStorage.getItem('admintoken');
			try {
				let response = await axios.get(
					'http://localhost:8082/api/v1/admin-applications',
					{
						headers: { token: token },
					}
				);
				commit('SET_ALL_BATCHES', response.data.data);
				return response;
			} catch (error) {
				console.log(error);
			}
		},
	},
});

export default store;
