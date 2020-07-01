import Vue from 'vue';
import {ApolloClient} from 'apollo-client'
import {createHttpLink} from 'apollo-link-http'
import {InMemoryCache} from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo';
import {onError} from "apollo-link-error";
import {ApolloLink, from} from "apollo-link";
import {store} from '../store'

Vue.use(VueApollo);

const httpLink = createHttpLink({
    // uri: process.env.GRAPHQL_URI,
    uri: 'http://alunos.ca/graphql-playground'
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
            )
        )
    if (networkError) console.log(`[Network error]: ${networkError}`)
})

export const client = new ApolloClient({
    link: httpLink,   
    cache: new InMemoryCache(), 
    connectToDevTools: true
})
// Access-Control-Allow-Origin

export const apolloProvider = new VueApollo({
    defaultClient: client
})

// export default ({app}) => {
//     app.apolloProvider = new VueApollo({
//         defaultClient: client,
//         defaultOptions: {
//             $query: {
//                 loadingKey: 'loading',
//                 fetchPolicy: 'no-cache',
//             }
//         },
//     })
// }