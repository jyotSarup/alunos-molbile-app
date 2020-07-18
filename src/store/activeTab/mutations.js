import {MUTATE_ACTIVE_TAB} from "src/constants";

export default {
    [MUTATE_ACTIVE_TAB]: (state, activeTab) => {
        state.activeTab = activeTab;
        console.log("received tab state", activeTab)
    }
};
