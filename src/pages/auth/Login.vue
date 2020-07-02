<template>
    <q-page-container class="">
        <q-page class="login-style">
            <q-form @submit.prevent="login" class="login-form ">
                <q-card class="card-style">
                    <q-card-section>
                        <EmailInput v-model="email" class="q-mt-s q-mb-lg" />
                    </q-card-section>
                </q-card>
                <q-btn
                    unelevated
                    rounded
                    class="q-pa-sm inline-block"
                    color="primary"
                    label="Login"
                    type="submit"
                />
                <q-dialog v-model="dialog">
                    <q-card style="width: 300px">
                        <q-card-section>
                            <div class="text-h6"></div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            We have sent you an email with a link to login. If
                            you didn't get an email, try again.
                        </q-card-section>

                        <q-card-actions
                            align="right"
                            class="bg-white text-teal"
                        >
                            <q-separator />
                            <q-btn
                                flat
                                label="OK"
                                v-close-popup
                                text-color="primary"
                                class="fullwidth"
                            />
                        </q-card-actions>
                    </q-card>
                </q-dialog>
                <!-- <q-btn @click="login">Login</q-btn> -->
                <code>{{ response }}</code>
            </q-form>
        </q-page>
    </q-page-container>
</template>

<script>
import EmailInput from "components/input/EmailInput";
import {REQUEST_LOGIN_ACTION} from "../../constants";
import { Notify } from 'quasar'

export default {
    name: "Login",
    data: () => ({
        dialog: false,
        response: null,
        customModel: "no",
        email: ""
    }),
    components: {
        EmailInput
    },
    methods: {
        async login() {
            try {
                await this.$store.dispatch(REQUEST_LOGIN_ACTION, this.email);
                await this.$router.push({ name: 'feed' });
            } catch (error) {
                console.log(error);
            }
        }
    }
};
</script>

<style lang="scss">
.login-style {
    .inline-block {
        display: inline-block;
        width: 100%;
        margin-top: 50px;
    }

    .login-form {
        display: inline-block;
        width: 85%;
        position: absolute;
        top: -78%;
        left: 50%;
        transform: translateX(-50%);

        .card-style {
            background: white;
            border-radius: 30px;
        }
    }
}
</style>
