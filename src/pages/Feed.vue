<template>
    <div>
        <q-page class="feedContainer">
            <dailyTip> </dailyTip>
            <div>
                <infiniteScrollContainer></infiniteScrollContainer>
            </div>
        </q-page>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import DailyTip from '../components/DailyTip';
import InfiniteScrollContainer from '../components/InfiniteScrollContainer';
import { GET_HOUSEHOLD_ACTIVITIES } from '../constants';
import store from '../store';
let household;
export default {
    name: 'Tip',
    beforeCreate() {
        // household = this.$store.state.household
        // console.log(household)
    },
    created() {
        this.$emit(
            'updateTitle',
            'Hi Maria',
            "It's a good day to have a good day"
        );
        // console.log(household.household.id)
        // try {
        //     this.$store.dispatch(
        //         GET_HOUSEHOLD_ACTIVITIES,
        //         parseInt(household.household.id)
        //     );
        // } catch (error) {
        //     console.log(error);
        // }
    },
    components: {
        DailyTip,
        InfiniteScrollContainer
    }
};
</script>

<style>
.feedContainer {
    width: 94%;
    margin: auto;
    padding-top: 2em;
}
</style>
