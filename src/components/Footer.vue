<template>
    <q-footer bordered class="bg-white text-primary">
        <q-tabs
            no-caps
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
                :class="feedIconClass"
            />
            <q-tab
                v-if="!isAdmin"
                icon="ti-home"
                label="Homestay"
                @click="openMyHomestay()"
                :class="homestayIconClass"
            />
            <q-tab
                v-if="isAdmin"
                name="manage"
                icon="build"
                label="Manage"
                @click="openMyHomestay()"
                :class="homestayIconClass"
            />
            <q-tab name="space" class="footerIcon" />

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
                                :name="
                                    isAdmin
                                        ? 'img:../statics/icons/iconQuickAnnouncementAdmin.png'
                                        : 'img:../statics/icons/iconQuickAnnouncement.png'
                                "
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
                                :name="
                                    isAdmin
                                        ? 'img:../statics/icons/iconQuickHouseIssueAdmin.png'
                                        : 'img:../statics/icons/iconQuickHouseIssue.png'
                                "
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
                icon="help_outline"
                label="Help"
                @click="openHelp"
                :class="helpIconClass"
            />
            <q-tab
                name="profile"
                icon="perm_identity"
                label="Profile"
                @click="openProfile"
                :class="profileIconClass"
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
    position: absolute;
    left: calc(50% - 28px);
}
.floatButtonAdmin {
    background-image: linear-gradient(180deg, #5887f9, #60c3ff);
    color: white;
    border-radius: 50%;
    box-shadow: 0 11px 10px lightgrey, 0 0px 0 12px #fff;
    border: none !important;
    position: absolute;
    left: calc(50% - 28px);
}
.footerBar {
    box-shadow: 0 -1px 36px #dbdada;
}
.footerIcon {
    width: 20%;
    padding: 0;
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
            fabCenter: false,
            homestayIconClass: "footerIcon",
            feedIconClass: "footerIcon",
            helpIconClass: "footerIcon",
            profileIconClass: "footerIcon",
        };
    },
    created() {
        console.log("created tab state", this.activeTab)
        switch(this.activeTab){
            case "feed":
                this.feedIconClass += " text-accent"
                break
            case "myHomestay":
                this.homestayIconClass += " text-accent"
                break
            case "help":
                this.helpIconClass += " text-accent"
                break
            case "profile":
                this.profileIconClass += " text-accent"
                break
        }
    },
    methods: {
        async openFeed() {
            await this.$store.dispatch('changeActiveTab', "feed").then(()=>{
            })
            this.$router.push({ name: 'feed' });
        },
        async openMyHomestay() {
            await this.$store.dispatch('changeActiveTab', "myHomestay").then(()=>{
            })
            this.$router.push({ name: 'homestay' });
        },
        async openHelp() {
            await this.$store.dispatch('changeActiveTab', "help").then(()=>{
            })
            this.$router.push({ name: 'help' });
        },
        async openProfile() {
            await this.$store.dispatch('changeActiveTab', "profile").then(()=>{
            })
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
            isAdmin: state => state.household.isAdmin,
            activeTab: state => state.activeTab.activeTab
        })
    }
};
</script>
