import AuthService from "../service/auth";
import { removeToken, setToken } from "../JWT/tokenPersent";
import { gettersTypes } from "./types"

const state = {
  isLoading: false,
  user: null,
  errors: null,
  isLoggedIn : null,
};

const getters = {
  [gettersTypes.currentUser] : state =>{
    return state.user
  },
  [gettersTypes.isLoggedIn] : state =>{
    return Boolean(state.isLoggedIn)
  },
  [gettersTypes.isHiden] : state =>{
    return state.isLoggedIn === false
  }
}

const mutations = {
  registerStart(state) {
    state.isLoading = true;
    state.user = null;
    state.errors = null;
    state.isLoggedIn = false;
  },
  registerSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
    state.errors = null;
    state.isLoggedIn = true;
  },
  registerFailed(state, payload) {
    state.isLoading = false;
    state.errors = payload;
    state.isLoggedIn = false;
  },
  loginStart(state) {
    state.isLoading = true;
    state.user = null;
    state.errors = null;
    state.isLoggedIn = false;
  },
  loginSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
    state.errors = null;
    state.isLoggedIn = true;
  },
  loginFailed(state, payload) {
    state.isLoading = false;
    state.errors = payload;
    state.isLoggedIn = false;
  },
  getUserStart(state) {
    state.isLoading = true;
    state.user = null;
    state.isLoggedIn = false;
    state.errors = null;
  },
  getUserSuccess(state, payload) {
    state.isLoading = false;
    state.user = payload;
    state.isLoggedIn = true;
    state.errors = null;
  },
  getUserFailed(state, payload) {
    state.isLoading = false;
    state.isLoggedIn = false;
    state.errors = payload;
  },
  logOut(state) {
    state.user = null;
    state.isLoggedIn = false;
    removeToken("token");
  }
};

const actions = {
  register({ commit }, user) {
    commit("registerStart");
    return new Promise((resolve, reject) => {
      AuthService.register(user)
        .then((res) => {
          commit("registerSuccess", res.data.user);
          resolve(res.data.user);
          setToken("token", res?.data?.user?.token);
        })
        .catch((error) => {
          commit("registerFailed", error?.response?.data?.errors);
          reject(error?.response?.data?.errors);
        });
    });
  },
  login({commit},user){
    commit("loginStart");
    return new Promise((resolve, reject) => {
      AuthService.login(user)
        .then((res) => {
          commit("loginSuccess", res.data.user);
          resolve(res.data.user);
          setToken("token", res?.data?.user?.token);
        })
        .catch((error) => {
          commit("loginFailed", error?.response?.data?.errors);
          reject(error?.response?.data?.errors);
        });
    });
  },
  getUser({commit}){
    commit("getUserStart");
    return new Promise((resolve, reject) => {
      AuthService.getUSer()
        .then((res) => {
          commit("getUserSuccess", res.data.user);
          resolve(res.data.user);
        })
        .catch((error) => {
          commit("getUserFailed", error?.response?.data?.errors);
        });
    });
  },
  logOut({commit}){
    commit("logOut");
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
