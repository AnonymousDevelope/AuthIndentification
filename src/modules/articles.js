import ArticleServices from "../service/articles";

const state = {
    data:null,
    isLoading:false,
    errors:null,
}

const mutations = {
    getArticleStart(state) {
        state.isLoading = true;
        state.data = null;
        state.errors = null;
    },
    getArticleSuccess(state, payload) {
        state.isLoading = false;
        state.data = payload;
        state.errors = null;
    },
    getArticleFailed(state, payload) {
        state.isLoading = false;
        state.errors = payload;
    }
}

const actions = {
    articles({commit}){
        return new Promise((resolve) => {
            commit("getArticleStart");
            ArticleServices.articles().then(response=>{
                commit("getArticleSuccess", response.data.articles);
                resolve(response.data.articles);
            }).catch(err=>{
                commit("getArticleFailed", err);
            })
        })
    }
}

export default {
    state,
    mutations,
    actions,
}