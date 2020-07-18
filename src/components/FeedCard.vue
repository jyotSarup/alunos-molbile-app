<template>
    <div class="q-pa-md q-gutter-sm" style="padding: 0;">
        >
        <q-card class="my-feed-card">
            <q-card-section horizontal>
                <q-card-section class="col-2 flex ">
                    <q-icon
                        name="report_problem"
                        class="text-accent"
                        style="font-size: 32px; margin:0 auto"
                        v-if="feedItem.author.__typename == 'Issue'"
                    />
                    <q-icon
                        name="record_voice_over"
                        class="text-accent"
                        style="font-size: 32px; "
                        v-if="feedItem.author.__typename == 'Resident'"
                    />
                </q-card-section>
                <q-card-section class="col-10 flex ">
                    <div
                        class="full-width row no-wrap justify-between items-center content-center"
                        style="width=100%"
                    >
                        <span
                            v-if="feedItem.author.__typename == 'Issue'"
                            class="feedTitle"
                            >{{ feedItem.author.title }}</span
                        >
                        <span
                            v-if="feedItem.author.__typename == 'Resident'"
                            class="feedTitle"
                            >Post</span
                        >
                        <small
                            class="q-mt-sm q-mb-xs text-grey"
                            style=" float:right"
                            >{{feedItem.created_at.substring(0,10)}}</small
                        >
                    </div>

                    <div
                        class="text-caption text-grey full-width"
                        style=" margin-top:1em; padding-right:1em; "
                        v-if="feedItem.content.length > 40"
                    >
                        <span>{{ feedItem.content.substring(0,40) }}... </span>
                        <q-btn
                            flat
                            label="See More"
                            style="transform:translateX(-16px);"
                            :style="
                                isAdmin ? 'color: #5887F9' : 'color: #01c0fb'
                            "
                            align="left"
                            @click="persistent = true"
                            no-caps
                        ></q-btn>

                    </div>
                    <div
                        class="text-caption text-grey full-width"
                        style=" margin-top:1em; padding-right:1em; "
                        v-else
                    >
                        <span>{{ feedItem.content }} </span>
                        

                    </div>
                    <div>
                        
                    </div>
                    <q-dialog
                        v-model="persistent"
                        persistent
                        transition-show="scale"
                        transition-hide="scale"
                    >
                        <q-card class="bg-white text-grey" style="width: 300px">
                            <q-card-section align="center">
                                <q-icon
                                    name="report_problem"
                                    class="text-accent"
                                    style="font-size: 32px; margin:auto"
                                    v-if="feedItem.author.__typename == 'Issue'"
                                />
                                <q-icon
                                    name="record_voice_over"
                                    class="text-accent"
                                    style="font-size: 32px;"
                                    v-if="
                                        feedItem.author.__typename == 'Resident'
                                    "
                                />
                            </q-card-section>

                            <q-card-section class="q-pt-none">
                                <div class="full-width">
                                    {{ feedItem.content }}
                                </div>
                                <div v-if="feedItem.author.description"> 
                                    {{feedItem.author.description  }}
                                </div>
                                <div
                                    v-if="feedItem.author.__typename == 'Issue'"
                                >
                                    -{{
                                        feedItem.author.author.user.display_name
                                    }}
                                </div>
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
                </q-card-section>
            </q-card-section>
        </q-card>
    </div>
</template>

<style scoped>
.q-card--bordered {
    border: none !important;
}

.my-feed-card {
    border-radius: 28px;
    box-shadow: 0 11px 10px lightgrey;
}
.item_title {
    display: flex;
    justify-content: space-between;
}
.feedTitle {
    font-size: 14px;
}
</style>

<script>
import { mapState } from 'vuex';
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
    },
    computed: {
        ...mapState({
            isAdmin: state => state.household.isAdmin
        })
    }
};
</script>
