import AuthService from "../service/auth";

const state = {
    isLoading: false,
    user:null,
};

const mutations = {
    registerStart(state) {
        state.isLoading = true;
    },
    registerSuccess(state) {
        state.isLoading = false;
    },
    registerFailed(state) {
        state.isLoading = false;
    },
};

const actions = {
    register({commit}, user) {
        commit("registerStart")
        return new Promise((resolve,reject)=>{
            AuthService.register(user)
                .then((res) => {
                    commit('registerSuccess');
                    resolve(res);
                }).catch(error=>{
                    commit("registerFailed");
                    reject(error?.response?.data?.errors)
                })
        })
    },
};

export default {
    state,
    mutations,
    actions,
};
