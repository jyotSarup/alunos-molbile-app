import {
    MUTATE_CREATEISSUE,
    MUTATE_SOLVEISSUE,
    MUTATE_REMOVEISSUE,
    GET_ISSUES,
    MUTATE_ISSUE
} from 'src/constants';
import CREATEISSUE from '../../graphQL/mutations/createHouseIssue';
import SOLVEISSUE from '../../graphQL/mutations/solveHouseIssue';
import GETISSUE from '../../graphQL/queries/issue';
import { apolloClient } from 'boot/apollo';

export default {
    [MUTATE_CREATEISSUE]: async ({ commit, dispatch }, { authorId, title, description }) => {
        await apolloClient.mutate({
            mutation: CREATEISSUE,
            variables: {
                "input": {
                    "author_id": authorId,
                    "title": title,
                    "description": description
                }
            }
        });
    },
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
    },
    [MUTATE_SOLVEISSUE]: async ({ commit }, issueID) => {
        await apolloClient.mutate({
            mutation: SOLVEISSUE,
            variables: {
                "id": issueID
            }
        })

    }
};
