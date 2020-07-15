<template>
    <q-layout>
        <q-page-container>
            <q-header class="authHeader">
                <q-toolbar>
                    <q-toolbar-title class="title relative">
                        <div class="text-white title-position">
                            Sign In
                            <div class="text-caption subtitle">
                                We will send you a link through your email to
                                sign in
                            </div>
                        </div>
                    </q-toolbar-title>
                </q-toolbar>
            </q-header>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: 'MainLayout'
};
</script>

<style lang="scss">
.authHeader {
    z-index: -1;
    background-image: linear-gradient(180deg, #017eff, #01c0fb, #01e8f8);
    border-radius: 0px 0px 0px 90px;
    .q-layout__shadow {
        border-radius: 0px 0px 0px 120px;
    }
    .title {
        height: 273px;
        font-size: 26px;
        font-weight: bold;
        .title-position {
            position: absolute;
            top: 30%;
            left: 10%;

            .subtitle {
                width: 80%;
                word-wrap: break-word;
                white-space: normal;
                font-size: 16px;
            }
        }
    }
}
</style>
