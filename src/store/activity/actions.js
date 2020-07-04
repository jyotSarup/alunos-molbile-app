import {
    MUTATE_ACTIVITIES,
    GET_HOUSEHOLD_ACTIVITIES
} from "src/constants";
import LOGIN from '../../graphQL/mutations/Login.graphql';
import GET_HOUSEHOLD_ACTIVITIES_QUERY from '../../graphQL/queries/GetHouseholdActivities.graphql';
import {apolloClient} from "boot/apollo";
import {router} from "src/router";
import { resolveFieldValueOrError } from "graphql/execution/execute";

export default {
    [GET_HOUSEHOLD_ACTIVITIES]: async ({commit}, householdid) => {
        const response = await apolloClient.query({
            query: GET_HOUSEHOLD_ACTIVITIES_QUERY,
            variables: {
                household_id : householdid
            }
        });
        console.log(response.data.householdActivities.items)
        commit(MUTATE_ACTIVITIES,response.data.householdActivities.items)

    },
};


// export default GET_HOUSEHOLD_ACTIVITIES = {
//     async getHouseHoldActivities({ commit }, householdId) {
//     const response = await graphqlClient.query({
//       // It is important to not use the
//       // ES6 template syntax for variables
//       // directly inside the `gql` query,
//       // because this would make it impossible
//       // for Babel to optimize the code.
//       query: GET_HOUSEHOLD_ACTIVITIES_QUERY,
//       variables: { household_id: householdId },
//     });

//     console.log(response);
//     commit(MUTATE_ACTIVITIES,response.data)
// }
// }
//     [LOGIN_ACTION]: async ({commit}, loginToken) => {
//         const response = await apolloClient.mutate({
//             mutation: LOGIN,
//             variables: {
//                 token: loginToken
//             }
//         });

//         const data = response.data.loginAsHouseholdMember;
//         window.localStorage.setItem(TOKEN_LOCAL_STORAGE, JSON.stringify(data.token));
//         commit(MUTATE_TOKEN, data.token);
//         commit(MUTATE_USER, data.member.user);
//         commit(MUTATE_HOUSEHOLD, {
//             name: data.member.household.name,
//             type: data.member.household.type
//         });
//         commit(MUTATE_MEMBERS, data.member.household.members);
//     },
//     [LOGOUT_ACTION]: ({commit}) => {
//         window.localStorage.removeItem(TOKEN_LOCAL_STORAGE);
//         commit(MUTATE_TOKEN, null);
//         commit(MUTATE_USER, null);
//         router.push({name: 'auth.login'});
//     }
// }


