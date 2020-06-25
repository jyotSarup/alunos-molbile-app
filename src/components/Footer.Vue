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
            <!--q-fab
                v-model="fabCenter"
                vertical-actions-align="center"
                color="primary"
                glossy
                icon="add"
                direction="up"
                @click="show()"
            -->
            <q-btn  round color="primary" icon="add" @click="show()"></q-btn>
                <!--q-list bordered separator>
                    <q-item clickable v-ripple>
                        <q-item-section>Single line item</q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section>
                            <q-item-label>Item with caption</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item clickable v-ripple>
                        <q-item-section>
                            <q-item-label>Item with caption</q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list
                </q-fab>-->
            

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
    background: #1976d2;
    width: 500%;
    border-radius: 10px;
    box-shadow: 3px 3px 4px #efefef;
}
.q-fab {
    transform: translateY(-50%) !important;
    border: 3px solid white !important;
}
.q-btn {
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
                            label: "Drive",
                            img:
                                "https://cdn.quasar.dev/img/logo_drive_128px.png",
                            id: "drive",
                        },
                        {
                            label: "Keep",
                            img:
                                "https://cdn.quasar.dev/img/logo_keep_128px.png",
                            id: "keep"
                        },
                        {
                            label: "Google Hangouts",
                            img:
                                "https://cdn.quasar.dev/img/logo_hangouts_128px.png",
                            id: "calendar"
                        },
                        {
                            label: "Calendar",
                            img:
                                "https://cdn.quasar.dev/img/logo_calendar_128px.png",
                            id: "calendar"
                        },
                        {},
                        {
                            label: "Share",
                            icon: "share",
                            id: "share"
                        },
                        {
                            label: "Upload",
                            icon: "cloud_upload",
                            color: "primary",
                            id: "upload"
                        },
                        {},
                        {
                            label: "close",
                            icon : "cancel",
                            color: "primary"
                        },
                        
                    ]
                })
                .onOk(action => {
                    // console.log('Action chosen:', action.id)
                })
                .onCancel(() => {
                    console.log('Dismissed')
                })
                .onDismiss(() => {
                    // console.log('I am triggered on both OK and Cancel')
                });
        }
    }
};
</script>
