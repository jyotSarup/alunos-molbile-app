<template>
    <q-layout>
        <q-page-container>
            <q-header>
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
    name: "MainLayout"
};
</script>

<style lang="scss">
.q-header {
    z-index: -1;
    background-color: linear-gradient(
        to bottom,
        #017eff 30%,
        #01e8f8 90%
    ) !important;
    border-radius: 0px 0px 0px 90px;
    .q-layout__shadow {
        border-radius: 0px 0px 0px 120px;
    }
    .title {
        height: 38vh;
        font-size: 24px;
        font-weight: bold;
        .title-position {
            position: absolute;
            top: 30%;
            left: 10%;

            .subtitle {
                width: 80%;
                word-wrap: break-word;
                white-space: normal;
            }
        }
    }
}
</style>
