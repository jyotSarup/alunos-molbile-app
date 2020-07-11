import { MUTATE_ISSUE } from 'src/constants';

export default {
    [MUTATE_ISSUE]: (state, issues) => {
        state.issues = issues;
        console.log('house issues: ', issues);
    }
};
