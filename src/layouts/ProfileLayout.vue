<template>
    <q-layout view=" LpR fFf">
        <q-page-container style=" padding-top:30%;">
            <q-header class="profileHeader" elevated>
                <q-toolbar>
                    <q-toolbar-title class="title relative">
                        <div class="text-white title-position">
                            {{ title }}
                            <div class="text-caption subtitle">
                                {{ subtitle }}
                            </div>
                        </div>
                        <div class="text-white">
                            <Notification class="icon-position" />
                        </div>
                    </q-toolbar-title>
                </q-toolbar>
            </q-header>

            <router-view
                @updateTitle="updateTitle"
                style=" margin-top:5rem; text-align: center; position:relative"
            />
            <q-footer elevated>
                <q-toolbar class="glossy">
                    <q-toolbar-title>
                        <Footer style=""></Footer>
                    </q-toolbar-title>
                </q-toolbar>
            </q-footer>
        </q-page-container>
    </q-layout>
</template>

<script>
import Footer from "../components/Footer.vue";
import Notification from "../components/Notification";
export default {
    name: "ProfileLayout",

    components: { Footer, Notification },
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
<style lang="scss" scoped>
.profileHeader {
    z-index: -1;
    background-image: "linear-gradient(180deg, #017eff 30%, #01e8f8 90%)";
    border-radius: 0px 0px 0px 90px;
    .q-layout__shadow {
        border-radius: 0px 0px 0px 120px;
    }
    .title {
        height: 16vh;
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
    .q-layout__shadow:after {
        box-shadow: none !important;
    }
}
</style>
