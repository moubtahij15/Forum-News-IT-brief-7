

import { createStore } from "vuex";
import axios from "axios";
// import axiosClient from "../axios";
import axiosClient from "../axios";
import { useRouter } from 'vue-router';


import { UserAddIcon } from "@heroicons/vue/solid";
import router from "../router";




const store = createStore({
    state: {

        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },

    },
    getters: {},

    actions: {
        register({ commit }, user) {

            return axiosClient.post('/register', user)
                .then(response => {
                    commit("setUser", response);
                    return response
                });
        },
        login({ commit }, user) {

            return axiosClient.post('/login', user)
                .then(response => {
                    commit('setUser', response.data.utilisateur);
                    commit('setToken', response.data.token)
                    return response
                });
        },

        redirectTo({ commit }, payload) {
            // eslint-disable-next-line no-undef
            commit("redirectTo", payload.val);
        },

    },
    mutations: {
        setUser: (state, user) => {
            state.user.data = user;


        },
        setToken: (state, token) => {
            state.user.token = token;
            sessionStorage.setItem('TOKEN', token);
        },
        redirectTo(state, payload) {
            router.push({ name: payload });
        },

        logout: (state) => {

            state.user.data = {};
            state.user.token = null;
            sessionStorage.clear();
        },

    },
    modules: {},


})
export default store;
