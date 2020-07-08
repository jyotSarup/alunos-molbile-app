import {
    LOGIN_ACTION,
    LOGOUT_ACTION,
    MUTATE_TOKEN,
    MUTATE_USER,
    MUTATE_HOUSEHOLD,
    MUTATE_ACTIVITIES,
    REQUEST_LOGIN_ACTION, TOKEN_LOCAL_STORAGE,

} from "src/constants";
import LOGIN from '../../graphQL/mutations/Login.graphql';
// import GET_HOUSEHOLD_ACTIVITIES from "../../graphQL/queries/GetHouseholdActivities.graphql";
import REQUEST_LOGIN from '../../graphQL/mutations/RequestLogin.graphql';
import {apolloClient} from "boot/apollo";
import {router} from "src/router";

export default {
   
}


