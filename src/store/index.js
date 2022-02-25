import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import links from './links'

export default new Vuex.Store({
    modules: {
        links,
    },
})