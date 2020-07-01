import {MUTATE_HOUSEHOLD, MUTATE_MEMBERS} from "src/constants";

export default {
    [MUTATE_MEMBERS]: (state, members) => {
        state.members = members;
    },
    [MUTATE_HOUSEHOLD]: (state, household) => {
        state.user = household;
    }
}
