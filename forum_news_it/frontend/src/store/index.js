

import { createStore } from "vuex";


const store = createStore({
    state: {

        user: {
            data: {},
            token: null,
        },
        id_RDV: "apaaah",
    },
    getters: {},
    actions: {},
    mutations: {
            logout: (state) =>{
                state.user.data={};
                state.user.token=null;
            },
    },
    modules: {}


})
export default store;
