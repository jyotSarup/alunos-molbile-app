<template>
    <q-layout view="hHh LpR fFf">
        <q-header elevated>
            <q-toolbar>
                <q-toolbar-title class="title relative">
                    <div class="text-white title-position">
                        {{ title }}
                    </div>
                    <div class="text-white">
                        <q-icon
                            name="notifications_none"
                            class="icon-position"
                        />
                    </div>
                </q-toolbar-title>
            </q-toolbar>
        </q-header>
        <q-page-container>
            <router-view @updateTitle="updateTitle" />
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: "MainLayout",
    data() {
        return {
            title: ""
        };
    },
    methods: {
        updateTitle(value) {
            this.title = value;
        }
    }
};
</script>
<style lang="scss">
.q-header {
    z-index: -1;
    background-image: "linear-gradient(180deg, #017eff 30%, #01e8f8 90%)";
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
        }
        .icon-position {
            position: absolute;
            top: 40%;
            right: 8%;
        }
    }
}
</style>
