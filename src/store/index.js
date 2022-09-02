import axios from 'axios';
import { createStore } from 'vuex';
// import axios from 'axios';

const store = createStore({
	state: {
		applicant: [],
		singleApplicant: [],
		allApplicants: [],
		allBatches: [],
		adminInfo: [],
		questions: [],
		questionsForAdmin: [],
		applicantInfo: [],
	},
	getters: {
		getApplicant: (state) => state.applicant,
		getSingleApplicant: (state) => state.singleApplicant,
		getAllApplicants: (state) => state.allApplicants,
		getAllBatches: (state) => state.allBatches,
		getAdminInfo: (state) => state.adminInfo,
		getQuestions: (state) => state.questions,
		getQuestionsForAdmin: (state) => state.questionsForAdmin,
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
		SET_ADMIN_INFO(state, payload) {
			state.adminInfo = payload;
		},
		SET_QUESTIONS(state, payload) {
			state.questions = payload;
		},
		SET_QUESTIONS_FOR_ADMIN(state, payload) {
			state.questionsForAdmin = payload;
		},
		setId(state, email) {
			state.applicantInfo = [];
			state.applicantInfo.push(email);
		},
	},
	actions: {
		async getApplicant({ commit }) {
			const token = localStorage.getItem('token');
			try {
				let response = await axios.get(
					'http://localhost:8081/api/v1/userInfo',
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
		async getSingleApplicant({ commit }, id) {
			const token = localStorage.getItem('admintoken');
			// const email = localStorage.getItem('userEmail');
			// const email = this.$store.getters.getApplicantInfo[0];
			try {
				let response = await axios.get(
					`http://localhost:8081/api/v1/applicant-info/${id}`,
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
					'http://localhost:8081/api/v1/admin/getApplicants',
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
					'http://localhost:8081/api/v1/admin-applications',
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
		async getAdminInfo({ commit }) {
			const token = localStorage.getItem('admintoken');
			try {
				let response = await axios.get(
					'http://localhost:8081/api/v1/admin/info',
					{
						headers: { token: token },
					}
				);
				commit('SET_ADMIN_INFO', response.data.data);
				return response;
			} catch (error) {
				console.log(error);
			}
		},
		async getQuestions({ commit }) {
			const token = localStorage.getItem('token');
			try {
				let response = await axios.get(
					'http://localhost:8081/api/v1/user/assessment-questions',
					{
						headers: { token: token },
					}
				);
				commit('SET_QUESTIONS', response.data.data);
				return response;
			} catch (error) {
				console.log(error);
			}
		},
		async getQuestionsForAdmin({ commit }) {
			const token = localStorage.getItem('admintoken');
			try {
				let response = await axios.get(
					'http://localhost:8081/api/v1/user/assessment-questions',
					{
						headers: { token: token },
					}
				);
				commit('SET_QUESTIONS_FOR_ADMIN', response.data.data);
				return response;
			} catch (error) {
				console.log(error);
			}
		},
	},
});

export default store;
