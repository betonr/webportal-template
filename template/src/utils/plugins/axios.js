'use strict'

import Vue from 'vue'
import axios from 'axios'
const _axios = axios.create({})

// Add a response interceptor
_axios.interceptors.request.use(
    function(config) {
        return config
    },
    function(error) {
        return Promise.reject(error)
    }
)

// Add a response interceptor
_axios.interceptors.response.use(
    function(response) {
        return response
    },
    function(error) {
        return Promise.reject(error)
    }
)

Plugin.install = function(Vue) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios
            }
        },
        $axios: {
            get() {
                return _axios
            }
        }
    });
}
Vue.use(Plugin)

export default Plugin
