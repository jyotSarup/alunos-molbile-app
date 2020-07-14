<template>
    <div
        class="q-pa-md scroll"
        style=" padding: 0 ; padding-top: 4px; margin: auto ; margin-top:16px;  border-radius:20px"
    >
        <q-pull-to-refresh @refresh="refresh" style="width:100%">
            <q-infinite-scroll
                v-if="this.items"
                @load="onLoad"
                :offset="250"
            >
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
        FeedCard: require('./FeedCard.vue').default
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
            total: 0
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
            this.total = this.feeds.feed.total;
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        async onLoad(index, done) {
            
                done(true)
                // try {
                //     await this.$store.dispatch(GET_FEED, {
                //         householdid: parseInt(this.household.household.id),
                //         limit: 10,
                //         page: this.page
                //     });
                //     console.log('onload feed', this.feeds.feed);
                //     if (this.feeds.feed.items) {

                //         this.feeds.feed.items.forEach(item => {
                //             this.items.push(item);
                //         });
                //         this.total = this.feeds.feed.total;
                //         this.page++;
                //     }else{
                //         done(true)
                //     }
                // } catch (error) {
                //     console.log(error);
                // }
            
                
            
           
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
