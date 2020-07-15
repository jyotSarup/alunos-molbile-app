<template>
    <q-layout view=" LpR fFf">
        <q-page-container style=" padding-top:30%; padding-bottom: 120px">
            <q-header class="q-layout_generallayout">
                <q-toolbar class="title relative">
                    <q-toolbar-title>
                        <div>
                            <q-btn
                                flat
                                icon="keyboard_backspace"
                                class="back-position"
                                :to="backTo"
                            />
                        </div>

                        <div class="title-position">
                            {{ title }}
                            <div class="text-caption subtitle">
                                {{ subtitle }}
                            </div>
                        </div>
                        <div>
                            <Notification class="icon-position" />
                        </div>
                    </q-toolbar-title>
                </q-toolbar>
            </q-header>

            <router-view
                @updateTitle="updateTitle"
                style="text-align: center; position:relative"
            />
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
import Footer from '../components/Footer';
import Notification from '../components/Notification';
export default {
    name: 'GeneralLayout',
    components: { Footer, Notification },
    data() {
        return {
            title: '',
            subtitle: '',
            backTo: ''
        };
    },
    methods: {
        updateTitle(title, subtitle, backto) {
            this.title = title;
            this.subtitle = subtitle;
            this.backTo = backto;
        }
    }
};
</script>
<style lang="scss">
.q-layout_generallayout {
    background-color: white !important;
    color: black !important;
    background-image: unset;
    border-radius: 0px 0px 0px 50px;
    .q-layout__shadow {
        border-radius: 0px 0px 0px 30px;
    }
    .title {
        height: 116px;
        font-size: 26px;
        font-weight: bold;
        .back-position {
            position: absolute;
            top: 30%;
            left: 5%;
        }
        .title-position {
            position: absolute;
            top: 30%;
            left: 20%;
            font-size: 26px;
        }
        .icon-position {
            position: absolute;
            top: 40%;
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
