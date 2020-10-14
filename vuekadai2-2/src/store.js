import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        gender: '',
        birthDate: '',
        lifeInsurance: '',
        now: '',
        past: '',
        consult: ''
    },
    mutations: {
        gender(state, value) {
            state.gender = value;
        },
        birthDate(state, value) {
            state.birthDate = value;
        },
        lifeInsurance(state, value) {
            state.lifeInsurance = value;

        },
        now(state, value) {
            state.now = value;
        },
        past(state, value) {
            state.past = value;
        },
        consult(state, value) {
            state.consult = value;
        }
    }
});