import {
    MUTATE_ACTIVE_TAB
} from "src/constants";

export default {
   changeActiveTab({commit}, activeTab){
       commit(MUTATE_ACTIVE_TAB,activeTab)
   }
}


