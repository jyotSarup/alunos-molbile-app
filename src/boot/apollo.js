import Vue from 'vue';
import {ApolloClient} from 'apollo-client'
import {createUploadLink} from 'apollo-upload-client'
import {InMemoryCache} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo';
import {onError} from "apollo-link-error";
import {ApolloLink, from} from "apollo-link";
import {store} from '../store'
import {LOGOUT_ACTION, TOKEN_LOCAL_STORAGE} from "src/constants";
import {hasAuthError} from "src/utils/errorHandler";

Vue.use(VueApollo);

const httpLink = createUploadLink({
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
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'network-only',
        },
        query: {
            fetchPolicy: 'network-only',
        },
        $query: {
            fetchPolicy: 'network-only',
        }
    },
});

export default ({app}) => {
    app.apolloProvider = new VueApollo({
        defaultClient: apolloClient,
    })

}
