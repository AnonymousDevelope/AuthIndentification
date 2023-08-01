import AuthService from "../service/auth"

const state = {
    isLoading: false,
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
    }
};

const actions = {
    async register(context, user) {
        context.commit('registerStart');
        try {
            const res = await AuthService.register(user);
            await context.commit('registerSuccess');
            console.log(res);
        } catch (err) {
            await context.commit('registerFailed');
        }
    }
};

export default {
    actions,
    mutations,
    state,
};
