import Vue from 'vue';
import {ApolloClient} from 'apollo-client'
import {createHttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo';
import {onError} from "apollo-link-error";
import {ApolloLink, from} from "apollo-link";
import {store} from '../store'
import {LOGOUT_ACTION, TOKEN_LOCAL_STORAGE} from "src/constants";
import {hasAuthError} from "src/utils/errorHandler";

Vue.use(VueApollo);

const httpLink = createHttpLink({
    uri: 'http://api.alunos.ca/graphql', // @TODO use .env
});

const authMiddleware = new ApolloLink((operation, forward) => {
    let token = window.localStorage.getItem(TOKEN_LOCAL_STORAGE);
    const headers = {};

    if (token) {
        token = JSON.parse(token);
        headers['Authorization'] = `Bearer ${token.access_token}`;
    }

    operation.setContext({ headers });

    return forward(operation);
});

const logoutLink = onError(({graphQLErrors}) => {
    if (hasAuthError(graphQLErrors)) {
        store.dispatch(LOGOUT_ACTION);
    }
});

const cache = new InMemoryCache({
    addTypename: false,
});

export const apolloClient = new ApolloClient({
    link: from([
        authMiddleware,
        logoutLink,
        httpLink
    ]),
    cache,
});

export default ({app}) => {
    app.apolloProvider = new VueApollo({
        defaultClient: apolloClient,
        defaultOptions: {
            $query: {
                loadingKey: 'loading',
                fetchPolicy: 'no-cache',
            }
        },
    })

}
