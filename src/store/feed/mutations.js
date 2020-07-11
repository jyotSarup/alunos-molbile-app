import {MUTATE_FEED} from "src/constants";

export default {
    [MUTATE_FEED]: (state, feed) => {
        state.feed = feed ;
    }
}
