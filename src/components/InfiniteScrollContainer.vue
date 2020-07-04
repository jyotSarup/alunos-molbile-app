<template>
    <div
        class="q-pa-md scroll"
        style=" padding: 0 ; padding-top: 16px; margin: auto ; margin-top:16px;  border-radius:20px"
    >
        <q-pull-to-refresh @refresh="refresh" style="width:100%">
            <q-infinite-scroll @load="onLoad" :offset="250">
                <div
                    v-for="(item, index) in items"
                    :key="index"
                    class="caption"
                >
                    <FeedCard></FeedCard>
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
import { mapActions, mapState } from "vuex";
import { GET_HOUSEHOLD_ACTIVITIES } from "../constants";
import store from '../store';
let household;

export default {
    name: "InfiniteScrollContainer",
    components: {
        FeedCard: require("./FeedCard.vue").default
    },
    data() {
        return {
            items: [{}, {}, {}, {}, {}, {}, {}]
            // items:[]
            // items: this.$store.state.activities
        };
    },
     beforeCreate() {
        household = this.$store.state.household
        try {
            this.$store.dispatch(
                GET_HOUSEHOLD_ACTIVITIES,
                parseInt(household.household.id)
            );
        } catch (error) {
            console.log(error);
        }
        // console.log(this.$store.state.activities)
        // this.items= this.$store.state.activities
        // console.log(household)
    },
    // created() {
    //     // try {
    //     //     this.$store.dispatch(
    //     //         GET_HOUSEHOLD_ACTIVITIES,
    //     //         parseInt(household.household.id)
    //     //     );
    //     // } catch (error) {
    //     //     console.log(error);
    //     // }
    //     // console.log(this.$store.state.activities)
    //     this.items= this.$store.state.activities
    // },
//     computed: {
//     ...mapState({
//         items : state => state.activities
//     }),
//   },
    methods: {
        onLoad(index, done) {
            // setTimeout(() => {
            //     if (this.items.length < 300) {
            //         this.items.push({}, {}, {}, {}, {}, {}, {});
            //         done();
            //     }
            // }, 2000);
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

<style>
</style>
