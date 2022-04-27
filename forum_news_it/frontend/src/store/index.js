

import { createStore } from "vuex";
import axios from "axios";
// import axiosClient from "../axios";



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
            const headers = {
                // 'X-CSRF-TOKEN': ('meta[name="csrf-token"]').attr('content')
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json',
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),

                // 'Accept-Encoding': 'gzip, deflate, br',
                'Content-Type': 'application/json'
            };
            return axios.post('http://127.0.0.1:8000/api/register', user, {

                headers: headers
            }).then(response => {
                    // JSON responses are automatically parsed.
                    commit("setUser", response);
                    return response
                });
            // register({commit}, user) {
            //     return axiosClient.post('http://127.0.0.1:8000/api/register', user)
            //       .then((response) => {
            //         commit('setUser', response);
            //         return response;
            //       })
            //   },

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
