<template>
    <q-footer bordered class="bg-white text-primary">
        <q-tabs
            no-caps
            active-color="positive"
            indicator-color="transparent"
            class="text-grey footerBar"
            v-model="tab"
            dense
            align="justify"
            style="padding: 10px 0 5px 0;"
        >
            <q-tab
                name="feed"
                icon="calendar_today"
                label="Feed"
                @click="openFeed()"
            />
            <q-tab
                v-if="!isAdmin"
                name="homestay"
                icon="img:../statics/icons/icn_home.svg"
                label="Homestay"
                @click="openMyHomestay()"
            />
            <q-tab
                v-if="isAdmin"
                name="manage"
                icon="build"
                label="Manage"
                @click="openMyHomestay()"
            />

            <q-fab
                v-model="fabCenter"
                vertical-actions-align="center"
                :class="isAdmin ? 'floatButtonAdmin' : 'floatButton'"
                direction="up"
            >
                <!--q-btn class="floatingButton" round color="primary" icon="add" @click="show()"></q-btn-->
                <q-list bordered separator>
                    <q-item
                        clickable
                        v-ripple
                        class="bottom-list-item"
                        @click="addHouseAnnouncement"
                    >
                        <div style="justify-content: center; margin-right:20px">
                            <q-icon
                                name="img:../statics/icons/iconQuickAnnouncement.png"
                            />
                        </div>
                        <q-item-section>
                            <q-item-label>Add Post</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item
                        clickable
                        v-ripple
                        class="bottom-list-item"
                        @click="addHouseIssue"
                    >
                        <div style="justify-content: center; margin-right:20px">
                            <q-icon
                                name="img:../statics/icons/iconQuickHouseIssue.png"
                            />
                        </div>
                        <q-item-section style="font-size: 20px;">
                            Add House Issue</q-item-section
                        >
                    </q-item>
                </q-list>
            </q-fab>
            <q-tab
                name="help"
                icon="img:../statics/icons/iconFooterHelp.png"
                label="Help"
                @click="openHelp"
            />
            <q-tab
                name="profile"
                icon="perm_identity"
                label="Profile"
                @click="openProfile"
            />
        </q-tabs>
    </q-footer>
</template>

<style>
.q-tabs > div {
    overflow: visible !important;
}
.q-list {
    color: black;
    background-color: white;
    width: fit-content;
    border-radius: 10px;
    box-shadow: 100px -8px 90px 0px lightgray, -100px 6px 90px 0px lightgray,
        100px -150px 120px 0px lightgray, -100px -150px 120px 0px lightgray,
        100px -290px 150px 0px lightgray, -100px -290px 150px 0px lightgray;
    margin-left: -20px;
}
.bottom-list-item {
    padding: 1em 3em;
}
.q-fab {
    transform: translateY(-50%) !important;
    border: 3px solid white !important;
}
.floatingButton {
    transform: translateY(-50%) !important;
    border: 3px solid white !important;
}
.q-tab__content {
    padding: 4px 0;
}
div.q-bottom-sheet.q-bottom-sheet--list.q-card {
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}
.q-bottom-sheet__item {
    border-radius: 20px;
    box-shadow: 2px 3px 3px #eee;
    padding: 1em;
    margin: 1em;
}
.floatButton {
    background-image: linear-gradient(180deg, #01c0fb, #01e8f8);
    color: white;
    border-radius: 50%;
    box-shadow: 0 11px 10px lightgrey, 0 0px 0 12px #fff;
    border: none !important;
}
.floatButtonAdmin {
    background-image: linear-gradient(180deg, #5887f9, #60c3ff);
    color: white;
    border-radius: 50%;
    box-shadow: 0 11px 10px lightgrey, 0 0px 0 12px #fff;
    border: none !important;
}
.footerBar {
    box-shadow: 0 -1px 36px #dbdada;
}
</style>

<script>
import router from '../router';
import { mapState } from 'vuex';

export default {
    name: 'Footer',
    data() {
        return {
            tab: 'images',
            fabCenter: false
        };
    },
    methods: {
        show(grid) {
            this.$q
                .bottomSheet({
                    grid,
                    actions: [
                        {
                            label: 'Add House Issue',
                            img:
                                'https://cdn.quasar.dev/img/logo_keep_128px.png',
                            id: 'addHouseIssue'
                        },
                        {
                            label: 'Add Post',
                            img:
                                'https://cdn.quasar.dev/img/logo_keep_128px.png',
                            id: 'addAnnouncement'
                        },
                        {
                            label: 'Send Mail',
                            img:
                                'https://cdn.quasar.dev/img/logo_keep_128px.png',
                            id: 'sendMail'
                        },
                        {},
                        {
                            label: 'close',
                            icon: 'cancel',
                            color: 'primary'
                        }
                    ]
                })
                .onOk(action => {
                    if (action.id == 'addHouseIssue') {
                        this.$router.push('/add-house-issue');
                    }
                })
                .onCancel(() => {
                    console.log('Dismissed');
                })
                .onDismiss(() => {
                    // console.log('I am triggered on both OK and Cancel')
                });
        },
        openFeed() {
            this.$router.push({ name: 'feed' });
        },
        openMyHomestay() {
            this.$router.push({ name: 'homestay' });
        },
        openHelp() {
            this.$router.push({ name: 'help' });
        },
        openProfile() {
            this.$router.push('/profile');
        },
        addHouseAnnouncement() {
            this.$router.push('/add-announcement');
        },
        addHouseIssue() {
            this.$router.push('/add-house-issue');
        }
    },
    computed: {
        ...mapState({
            isAdmin: state => state.household.isAdmin
        })
    }
};
</script>
