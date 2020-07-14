import {
    LOGIN_ACTION,
    LOGOUT_ACTION,
    MUTATE_HOUSEHOLD,
    MUTATE_MEMBERS,
    MUTATE_TOKEN,
    MUTATE_USER,
    REQUEST_LOGIN_ACTION,
    TOKEN_LOCAL_STORAGE,
    MUTATE_IS_ADMIN
} from 'src/constants';
import LOGIN from '../../graphQL/mutations/Login.graphql';
import REQUEST_LOGIN from '../../graphQL/mutations/RequestLogin.graphql';
import { apolloClient } from 'boot/apollo';
import { router } from 'src/router';

export default {
    [REQUEST_LOGIN_ACTION]: async ({ commit, dispatch }, email) => {
        const response = await apolloClient.mutate({
            mutation: REQUEST_LOGIN,
            variables: {
                email
            }
        });

        const token = response.data.temporaryMobileLogin;

        await dispatch(LOGIN_ACTION, token);
    },
    [LOGIN_ACTION]: async ({ commit }, loginToken) => {
        const response = await apolloClient.mutate({
            mutation: LOGIN,
            variables: {
                token: loginToken
            }
        });
        const data = response.data.loginAsResident;

        window.localStorage.setItem(
            TOKEN_LOCAL_STORAGE,
            JSON.stringify(data.token)
        );
        commit(MUTATE_TOKEN, data.token);
        commit(MUTATE_HOUSEHOLD, data.member.household);

        commit(MUTATE_USER, data.member.user);
        commit(MUTATE_HOUSEHOLD, data.member.household);
        commit(MUTATE_MEMBERS, data.member.household.residents);

        console.log(data.member);
        commit(MUTATE_IS_ADMIN, data.member.is_admin);
    },
    [LOGOUT_ACTION]: ({ commit }) => {
        window.localStorage.removeItem(TOKEN_LOCAL_STORAGE);
        commit(MUTATE_TOKEN, null);
        commit(MUTATE_USER, null);
        router.push({ name: 'auth.login' });
    }
};
