export const hasAuthError = (errors) => {
    if (!errors) {
        return false;
    }

    for (let i = 0; i < errors.length; i++) {
        if (errors[i].extensions.category === 'authentication') {
            return true;
        }
    }

    return false;
};
