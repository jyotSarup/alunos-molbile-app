<template>
    <q-page>
        <q-btn @click="login">Login</q-btn>
        <code>{{ response }}</code>
    </q-page>
</template>

<script>
    import LoginByEmail from '../../graphQL/mutations/users/loginByEmail.graphql';

    export default {
        name: 'Login',
        data: () => ({
            response: null
        }),
        methods: {
            login() {
                this.$apollo.mutate({
                    mutation: LoginByEmail,
                    variables: {
                        email: 'walterbgneto@gmail.com',
                        password: '123456'
                    },
                    update: (store, response) => {
                        this.response = response.data.loginByEmail;
                    }
                });
            }
        },
    }
</script>
