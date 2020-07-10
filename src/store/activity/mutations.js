import {MUTATE_ACTIVITIES} from "src/constants";

export default {
    [MUTATE_ACTIVITIES]: (state, activities) => {
        state.activities = activities;
    }
}
