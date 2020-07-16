<template>
    <div id="q-app">
        <div class="q-pa-md q-gutter-sm" style="padding: 10px 0;">
            <q-card class="my-feed-card">
                <q-card-section horizontal>
                    <q-card-section class="col-3 flex flex-center">
                        <q-icon
                            name="report_problem"
                            class="text-accent"
                            style="font-size: 32px;"
                            v-if="feedItem.author.__typename == 'Issue'"
                        />
                        <q-icon
                            name="record_voice_over"
                            class="text-accent"
                            style="font-size: 32px;"
                            v-if="feedItem.author.__typename == 'Resident'"
                        />
                    </q-card-section>
                    <q-card-section class="q-pt-xs">
                        <div
                            v-if="feedItem.author.__typename == 'Issue'"
                            class="text-h6 q-mt-sm q-mb-xs"
                        >
                            Let's fix this
                        </div>
                        <div
                            v-if="feedItem.author.__typename == 'Resident'"
                            class="text-h6 q-mt-sm q-mb-xs"
                        >
                            Announcement
                        </div>
                        <div
                            class="text-caption text-grey"
                            style="line-height:1.2em; height:2.4em; overflow:hidden; margin:auto; margin-top:1em; padding-right:1em"
                        >
                            {{ feedItem.content }}
                        </div>
                        ...
                        <div>
                            <q-btn
                                align="right"
                                flat
                                label="See More..."
                                color="primary"
                                @click="persistent = true"
                                no-caps
                            ></q-btn>

                            <q-dialog
                                v-model="persistent"
                                persistent
                                transition-show="scale"
                                transition-hide="scale"
                            >
                                <q-card
                                    class="bg-white text-grey"
                                    style="width: 300px"
                                >
                                    <q-card-section align="center">
                                        <q-icon
                                            name="report_problem"
                                            class="text-accent"
                                            style="font-size: 32px; margin:auto"
                                            v-if="
                                                feedItem.author.__typename ==
                                                    'Issue'
                                            "
                                        />
                                        <q-icon
                                            name="record_voice_over"
                                            class="text-accent"
                                            style="font-size: 32px;"
                                            v-if="
                                                feedItem.author.__typename ==
                                                    'Resident'
                                            "
                                        />
                                    </q-card-section>

                                    <q-card-section class="q-pt-none">
                                        {{ feedItem.content }}
                                    </q-card-section>

                                    <q-card-actions
                                        align="right"
                                        class="bg-white text-teal"
                                    >
                                        <q-btn
                                            flat
                                            label="OK"
                                            class="text-primary"
                                            v-close-popup
                                        ></q-btn>
                                    </q-card-actions>
                                </q-card>
                            </q-dialog>
                        </div>
                    </q-card-section>
                </q-card-section>
            </q-card>
        </div>
    </div>
</template>

<style scoped>
.q-card--bordered {
    border: none !important;
}

.my-feed-card {
    border-radius: 20px;
    box-shadow: 0 11px 10px lightgrey;
}
</style>

<script>
export default {
    name: 'FeedCard',
    data() {
        return {
            persistent: false
        };
    },
    props: {
        feedItem: {
            type: Object,
            required: true
        }
    }
};
</script>
