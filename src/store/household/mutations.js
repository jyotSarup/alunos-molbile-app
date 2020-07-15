import { MUTATE_HOUSEHOLD, MUTATE_MEMBERS, MUTATE_IS_ADMIN, MUTATE_MEMBER_ID } from "src/constants";

export default {
    [MUTATE_MEMBERS]: (state, members) => {
        state.members = members;
    },
    [MUTATE_HOUSEHOLD]: (state, household) => {
        state.household = household;
    },
    [MUTATE_IS_ADMIN]: (state, isAdmin) => {
        state.isAdmin = isAdmin;
    },
    [MUTATE_MEMBER_ID]: (state, memberId) => {
        state.memberId = memberId;
    }
};
