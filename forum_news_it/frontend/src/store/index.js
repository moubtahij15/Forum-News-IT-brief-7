

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
        post: {

            data: {
                //  info: {},


            },

        }

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
        // get posts and his comments
        getAllPosts({ commit }) {
            let post = {};
            return axiosClient.post('/getAllPosts')
                .then(response => {
                    // response.data.forEach(obj => {
                    //     Object.entries(obj).forEach(([key, value]) => {
                    //         console.log(`${key} ${value}`);
                    //         if()

                    //     }); });                    
                    commit("setPosts", response.data);
                    return response.data
                });


        },
        getAllComments({ commit }) {
            return axiosClient.get('/getAllComments')
                .then(response => {
                    // response.data.forEach(obj => {
                    //     Object.entries(obj).forEach(([key, value]) => {
                    //         console.log(`${key} ${value}`);
                    //         if()

                    //     }); });                    
                    commit("setComments", response.data);
                    return response.data
                });



        },


    },
    mutations: {
        setPosts: (state, posts) => {
            state.post.data = posts;
            // state.post.comment= "fdfdddf";


        },
        setComments: (state, comments) => {
            
            for (let i = 0; i < state.post.data.length; i++) {
                state.post.data[i]['comments'] = [];
            }
            for (let i = 0; i < comments.length; i++) {
                let p = state.post.data.findIndex(x => x.id == comments[i].post_id)
            
                if (p != -1) {
                    let post = {};
                    
                    post = comments[i];
                    state.post.data[p]['comments'][(state.post.data[p]['comments'].length)] = post;
                  
                }
            }


        },
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
