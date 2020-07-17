<template>
    <div
        class="q-pa-md scroll"
        style=" padding: 0 ; padding-top: 4px; margin: 0 auto ; margin-top:16px;  border-radius:20px"
    >
        <q-pull-to-refresh style="width:100%">
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
            page: 2,
            limit: 10,
            items: [],
            total: 0,
            persistent: false
        };
    },

    async created() {
        try {
            await this.$store.dispatch(GET_FEED, {
                householdid: parseInt(this.household.household.id),
                limit: 10,
                page: 1
            });
            await this.feeds.feed.items.forEach(item => {
                this.items.push(item);
            });

            this.total = await this.feeds.feed.total;
            console.log('total in created', this.total);
            this.refresher(this.total);
        } catch (error) {
            console.log(error);
        }
    },

    // async mounted(){
    //     console.log("mounted");
    //     console.log("total", await this.total);
    //             try {
    //                 await this.$store.dispatch(GET_FEED, {
    //                     householdid: parseInt(this.household.household.id),
    //                     limit: this.total,
    //                     page: 1
    //                 });

    //                 console.log('onload feed', this.feeds.feed);
    //                 if (this.feeds.feed.items) {

    //                     this.items = this.feeds.feed.items;
    //                     this.total = this.feeds.feed.total;
    //                     this.page++;

    //                 }else{
    //                 }
    //             } catch (error) {
    //                 console.log(error);
    //             }

    // },
    methods: {
        async onLoad(index, done) {
            done();
        },
        async refresher(total, done) {
            console.log('total in refresher', total);
            try {
                await this.$store.dispatch(GET_FEED, {
                    householdid: parseInt(this.household.household.id),
                    limit: total,
                    page: 1
                });

                console.log('refresher feed', this.feeds.feed);
                if (this.feeds.feed.items) {
                    this.items = this.feeds.feed.items;
                    this.total = this.feeds.feed.total;
                }
            } catch (error) {
                console.log(error);
            }

            // let items = []
            // for (let i = 0; i < 7; i++) {
            //   items.push({})
            // }
            // this.items = this.items.concat(items)
            // done()
        },

        refresh(done) {
            // setTimeout(() => {
            //     if (this.items.length < 300) {
            //         this.items.push({}, {}, {}, {}, {}, {}, {});
            //         done();
            //     }
            // }, 1000);
        }
    }
};
</script>

<style></style>
