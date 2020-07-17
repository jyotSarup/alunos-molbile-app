<template>
    <div>
        <q-page class="feedContainer">
            <dailyTip v-if="!is_Admin"> </dailyTip>
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
            `Hi ${this.userInfo.user.display_name}`,
            "It's a good day to have a good day"
        );
    },
    components: {
        DailyTip,
        InfiniteScrollContainer
    },
    computed: {
        ...mapState({
            userInfo: state => state.auth,
            isAdmin: state => state.household.isAdmin
        })
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
