<template>
    <q-footer bordered class="bg-white text-primary">
        <q-tabs
            no-caps
            active-color="primary"
            indicator-color="transparent"
            class="text-grey"
            v-model="tab"
            dense
            align="justify"
        >
            <q-tab name="feed" icon="calendar_today" label="Feed" />
            <q-tab name="homestay" icon="home" label="Homestay" />
            <q-fab
                v-model="fabCenter"
                vertical-actions-align="center"
                color="primary"
                glossy
                icon="add"
                direction="up"
                >

            <!--q-btn class="floatingButton" round color="primary" icon="add" @click="show()"></q-btn-->
                <q-list bordered separator>

                    <q-item clickable v-ripple class="bottom-list-item">
                    <div style="justify-content: center; margin-right:10px"><q-icon name="house"/></div>
                        <q-item-section style="font-size: 20px;"> Add House Issue</q-item-section>
                    </q-item>

                    <q-item clickable v-ripple class="bottom-list-item">
                    <div style="justify-content: center; margin-right:10px"><q-icon name="las la-bullhorn"/></div>
                        <q-item-section>
                            <q-item-label>Add Announcement</q-item-label>
                        </q-item-section>
                    </q-item>

                    
                </q-list>
                </q-fab>

            <q-tab name="help" icon="help_outline" label="Help" />
            <q-tab name="profile" icon="perm_identity" label="Profile" />
        </q-tabs>
    </q-footer>
</template>

<style>
.q-tabs > div {
    overflow: visible !important;
}
.q-list {
    color: white;
    background: linear-gradient(180deg, #017eff 40%, #01e8f8 95%);
    width: 600%;
    border-radius: 10px;
    box-shadow: 3px 3px 4px #efefef;
}   
.bottom-list-item {
    
    padding: 1em;
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
</style>

<script>
export default {
    name: "Footer",
    data() {
        return {
            tab: "images",
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
                            label: "Add House Issue",
                            img:
                                "https://cdn.quasar.dev/img/logo_keep_128px.png",
                            id: "addHouseIssue"
                        },
                        {
                            label: "Add Announcement",
                            img:
                                "https://cdn.quasar.dev/img/logo_keep_128px.png",
                            id: "addAnnouncement"
                        },
                        {
                            label: "Send Mail",
                            img:
                                "https://cdn.quasar.dev/img/logo_keep_128px.png",
                            id: "sendMail"
                        },
                        {},
                        {
                            label: "close",
                            icon: "cancel",
                            color: "primary"
                        }
                    ]
                })
                .onOk(action => {
                    if (action.id == "addHouseIssue") {
                        this.$router.push("/add-house-issue");
                    }
                })
                .onCancel(() => {
                    console.log("Dismissed");
                })
                .onDismiss(() => {
                    // console.log('I am triggered on both OK and Cancel')
                });
        }
    }
};
</script>