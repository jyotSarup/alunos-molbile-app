<template>
    <q-layout view=" LpR fFf">
        <q-page-container style=" padding-top:17%;">
            <q-header elevated :class="isAdmin ? 'adminHeader' : 'mainHeader'">
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

            <router-view @updateTitle="updateTitle" style=" margin-top:10%;" />
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
import { mapState } from 'vuex';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
export default {
    name: 'MainLayout',
    components: { Footer, Notification },
    data() {
        return {
            title: '',
            subtitle: ''
        };
    },
    methods: {
        updateTitle(title, subtitle) {
            this.title = title;
            this.subtitle = subtitle;
        }
    },
    computed: {
        ...mapState({
            isAdmin: state => state.household.isAdmin
        })
    }
};
</script>
<style lang="scss">
.mainHeader {
    z-index: -1;
    background-image: linear-gradient(180deg, #017eff, #01c0fb, #01e8f8);
    border-radius: 0px 0px 0px 90px;
    .q-layout__shadow {
        border-radius: 0px 0px 0px 120px;
    }
    .title {
        height: 208px;
        font-size: 30px;
        font-weight: bold;

        .title-position {
            position: absolute;
            top: 22%;
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
            font-size: 16px;
        }
    }
}
.adminHeader {
    z-index: -1;
    background-image: linear-gradient(180deg, #5887f9, #60c3ff);
}
</style>
