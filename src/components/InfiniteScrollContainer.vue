<template>
    <div
        class="q-pa-md scroll"
        style=" padding: 0 ; padding-top: 4px; margin: 0 auto ; margin-top:16px;  border-radius:20px"
    >
        <q-pull-to-refresh style="width:100%" @refresh="refresher">
            <q-infinite-scroll v-if="this.items" @load="onLoad" :offset="100">
                <FeedStart />

                <div
                    v-for="(item, index) in this.items"
                    :key="index"
                    class="caption"
                >
                    <FeedCard :feedItem="item"></FeedCard>
                </div>
                <template v-slot:loading>
                    <div class="row justify-center q-my-md">
                        <q-spinner-dots color="primary" size="40px" />
                    </div>
                </template>
            </q-infinite-scroll>
        </q-pull-to-refresh>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { GET_FEED } from '../constants';
import store from '../store';

export default {
    name: 'InfiniteScrollContainer',
    components: {
        FeedCard: require('./FeedCard.vue').default,
        FeedStart: require('./FeedStart.vue').default
    },
    computed: {
        ...mapState({
            household: state => state.household,
            feeds: state => state.feed
        })
    },
    data() {
        return {
            items: [],
            persistent: false,
            shortFeedContent: []
        };
    },

    async created() {
        try {
            this.refresher();
        } catch (error) {
            console.log(error);
        }
    },

   
    methods: {
        async onLoad(index, done) {
            done();
        },
        async refresher() {
            try {
                await this.$store.dispatch(GET_FEED, {
                    householdid: parseInt(this.household.household.id),
                    limit: 10000,
                    page: 1
                });

                console.log('refresher feed', this.feeds.feed);
                if (this.feeds.feed.items) {
                    this.items = this.feeds.feed.items;
                }
            } catch (error) {
                console.log(error);
            }
        },

        refresh(done) {
        }
    }
};
</script>

<style></style>
