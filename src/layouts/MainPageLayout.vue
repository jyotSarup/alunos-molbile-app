<template>
    <q-layout view=" LpR fFf">
        <q-page-container style=" padding-top:30%;">
            <q-header elevated>
                <q-toolbar>
                    <q-toolbar-title class="title relative">
                        <div class="text-white title-position">
                            {{ title }}
                            <div class="text-caption subtitle">
                                {{ subtitle }}
                            </div>
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

            <router-view @updateTitle="updateTitle" style=" margin-top:5%;" />
            <q-footer elevated>
                <q-toolbar class="glossy">
                    <q-toolbar-title
                        ><Footer style=""></Footer
                    ></q-toolbar-title>
                </q-toolbar>
            </q-footer>
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: "MainLayout",

    components: { Footer: require("../components/Footer.vue").default },
    data() {
        return {
            title: "",
            subtitle: ""
        };
    },
    methods: {
        updateTitle(title, subtitle) {
            this.title = title;
            this.subtitle = subtitle;
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
        height: 25vh;
        font-size: 24px;
        font-weight: bold;

        .title-position {
            position: absolute;
            top: 30%;
            left: 10%;
        }
        .icon-position {
            position: absolute;
            top: 30%;
            right: 8%;
        }
        .subtitle {
            width: 100%;
            word-wrap: break-word;
            white-space: normal;
        }
    }
}
</style>
