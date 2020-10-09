import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        gender: 'gender',
        birthDate: 'birth',
        lifeInsurance: '',
        now: '',
        past: '',
        consult: ''
    },
});