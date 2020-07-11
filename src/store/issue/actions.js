import {
    MUTATE_CREATEISSUE,
    MUTATE_SOLVEISSUE,
    MUTATE_REMOVEISSUE,
    GET_ISSUES,
    MUTATE_ISSUE
} from 'src/constants';
import CREATEISSUE from '../../graphQL/mutations/createHouseIssue';
import GETISSUE from '../../graphQL/queries/issue';
import { apolloClient } from 'boot/apollo';

export default {
    [GET_ISSUES]: async ({ commit }, household_id, limit, page) => {
        const response = await apolloClient.query({
            query: GETISSUE,
            variables: {
                household_id,
                limit,
                page
            }
        });

        const data = response.data.issues;

        commit(MUTATE_ISSUE, data.items);
    }
};
