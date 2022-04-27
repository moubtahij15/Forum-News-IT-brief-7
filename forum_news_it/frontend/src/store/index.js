

import { createStore } from "vuex";
import axios from "axios";
// import axiosClient from "../axios";
import axiosClient from "../axios";
import { UserAddIcon } from "@heroicons/vue/solid";




const store = createStore({
    state: {

        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        id_RDV: "apaaah",
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
                    commit("setUser", response);
                    return response
                });
        },
        
    },
    mutations: {
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token);
        }
    },
    modules: {},


})
export default store;
