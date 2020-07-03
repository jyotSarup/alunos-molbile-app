import {
    LOGIN_ACTION,
    LOGOUT_ACTION,
    MUTATE_TOKEN,
    MUTATE_USER,
    MUTATE_HOUSEHOLD,
    REQUEST_LOGIN_ACTION, TOKEN_LOCAL_STORAGE,
} from "src/constants";
import LOGIN from '../../graphQL/mutations/Login.graphql';
import REQUEST_LOGIN from '../../graphQL/mutations/RequestLogin.graphql';
import {apolloClient} from "boot/apollo";
import {router} from "src/router";

export default {
    [REQUEST_LOGIN_ACTION]: async ({commit, dispatch}, email) => {
        const response = await apolloClient.mutate({
            mutation: REQUEST_LOGIN,
            variables: {
                email
            }
        });

        const token = response.data.temporaryMobileLogin;

        dispatch(LOGIN_ACTION, token);
    },
    [LOGIN_ACTION]: async ({commit}, loginToken) => {
        const response = await apolloClient.mutate({
            mutation: LOGIN,
            variables: {
                token: loginToken
            }
        });

        const data = response.data.loginAsHouseholdMember;
        window.localStorage.setItem(TOKEN_LOCAL_STORAGE, JSON.stringify(data.token));
        commit(MUTATE_TOKEN, data.token);
        commit(MUTATE_USER, data.member.user);
        commit(MUTATE_HOUSEHOLD, data.member.household)
    },
    [LOGOUT_ACTION]: ({commit}) => {
        window.localStorage.removeItem(TOKEN_LOCAL_STORAGE);
        commit(MUTATE_TOKEN, null);
        commit(MUTATE_USER, null);
        router.push({name: 'auth.login'});
    }
}

