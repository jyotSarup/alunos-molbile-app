<template>
    <q-layout view="hHh LpR fFf">
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title class="title relative">
                    <div class="text-white title-position">
                        Profile
                    </div>
                    <div class="text-white">
                        <q-icon name="notifications" class="icon-position" />
                    </div>
                </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-page-container>
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
    border-radius: 0px 0px 0px 90px;
    .q-layout__shadow {
        border-radius: 0px 0px 0px 120px;
    }
    .title {
        height: 120px;
        font-size: 24px;
        font-weight: bold;

        .title-position {
            position: absolute;
            top: 40%;
            left: 20%;
        }
        .icon-position {
            position: absolute;
            top: 40%;
            right: 8%;
        }
    }
}
</style>
