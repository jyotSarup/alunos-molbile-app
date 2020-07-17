<template>
    <q-layout class="authBack">
        <q-page-container style=" padding-top:50%;">
            <q-header class="authHeader">
                <q-toolbar>
                    <q-toolbar-title class="title relative">
                        <div class="text-white title-position">
                            Sign In
                            <div class="text-caption subtitle">
                                If you can't login, please click here.
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
// .authBack {
//     background-color: white;
//     z-index: -2;
// }
.authHeader {
    z-index: -1;
    background-image: linear-gradient(180deg, #017eff, #01c0fb, #01e8f8);
    border-radius: 0px 0px 0px 90px;
    .q-layout__shadow {
        border-radius: 0px 0px 0px 120px;
    }
    .title {
        height: 66vw;
        font-size: 6.7vw;
        font-weight: bold;

        .title-position {
            position: absolute;
            top: 30%;
            left: 10%;
        }
        .subtitle {
            width: 100%;
            word-wrap: break-word;
            white-space: normal;
            font-size: 16px;
        }
    }
}
</style>
