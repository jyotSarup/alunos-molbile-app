<template>
    <q-page-container>
        <q-page class="relative login-style">
            <div class="text-h6 q-gutter-md q-pa-xl inline-block text-white">
                SIGN IN
            </div>

            <q-form @submit="login" class="login-form ">
                <q-card class="card-style">
                    <q-card-section>
                        <EmailInput v-model="email" class="q-mt-lg" />
                        <q-input label="Password" class="q-mt-lg" />

                        <q-checkbox
                            class="q-mt-xl"
                            v-model="customModel"
                            color="primary"
                            label="Remember me"
                            true-value="yes"
                            false-value="no"
                        />
                    </q-card-section>
                </q-card>
                <div class="text-subtitle1 text-grey-6 float-right q-mt-lg">
                    Forget Password?
                </div>
                <q-btn
                    unelevated
                    rounded
                    class="q-mt-lg q-pa-sm inline-block"
                    color="accent"
                    label="Login"
                />
                <!-- <q-btn @click="login">Login</q-btn> -->
                <code>{{ response }}</code>
            </q-form>
        </q-page>
    </q-page-container>
</template>

<script>
import LoginByEmail from "../../graphQL/mutations/users/loginByEmail.graphql";
import EmailInput from "components/input/EmailInput";

export default {
    name: "Login",
    data: () => ({
        response: null,
        customModel: "no",
        email: ""
    }),
    components: {
        EmailInput
    },
    methods: {
        login() {
            this.$apollo.mutate({
                mutation: LoginByEmail,
                variables: {
                    email: "walterbgneto@gmail.com",
                    password: "123456"
                },
                update: (store, response) => {
                    this.response = response.data.loginByEmail;
                }
            });
        }
    }
};
</script>

<style lang="scss">
.login-style {
    background-image: url("../../statics/img/login-bg.jpg");
    background-position: center;

    .inline-block {
        display: inline-block;
        width: 100%;
    }

    .login-form {
        display: inline-block;
        width: 85%;
        position: absolute;
        top: 15%;
        left: 50%;
        transform: translateX(-50%);

        .card-style {
            background: rgba($color: white, $alpha: 0.8);
            border-radius: 30px;
        }
    }
}
</style>
