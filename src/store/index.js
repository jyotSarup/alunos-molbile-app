import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth';
import household from './household';

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
export const store = new Vuex.Store({
    modules: {
        auth,
        household
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
})

export default function (/* { ssrContext } */) {
  return store
}
