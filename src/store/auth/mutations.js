import { MUTATE_TOKEN, MUTATE_USER, MUTATE_PROFILE } from 'src/constants';

export default {
    [MUTATE_TOKEN]: (state, token) => {
        state.token = token;
    },
    [MUTATE_USER]: (state, user) => {
        state.user = user;
        console.log(user);
    }
};
