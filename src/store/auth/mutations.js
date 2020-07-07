import { MUTATE_TOKEN, MUTATE_USER } from 'src/constants';

export default {
    [MUTATE_TOKEN]: (state, token) => {
        state.token = token;
        console.log(token);
    },
    [MUTATE_USER]: (state, user) => {
        state.user = user;
        console.log(user);
    }
};
