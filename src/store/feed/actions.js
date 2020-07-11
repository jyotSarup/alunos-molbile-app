import {
    MUTATE_FEED,
    GET_FEED
} from "src/constants";
import GET_FEED_QUERY from '../../graphQL/queries/feed.graphql';
import {apolloClient} from "boot/apollo";
import {router} from "src/router";
import { resolveFieldValueOrError } from "graphql/execution/execute";

export default {
    [GET_FEED ]: async ({commit}, payload) => {
        const response = await apolloClient.query({
            query: GET_FEED_QUERY,
            variables: {
                household_id : payload.householdid,
                limit : payload.limit,
                page: payload.page
            }
        });
        await commit(MUTATE_FEED,response.data.feed)

    },
};

