<template>
    <!-- <div>
        <div>
            {{ household.household.id }}
        </div>
        <div>
             {{ houseIssue.issue.total }}
        </div>
    </div> -->
    <div
        v-if="houseIssue"
        class="q-pa-md expansionListContainer"
        style="width:90%"
    >
        <HouseIssueItem
            v-for="(houseIssueDetail, index) in houseIssue"
            :key="index"
            :houseIssueDetail="houseIssueDetail"
        ></HouseIssueItem>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import { GET_ISSUES } from '../constants';
import HouseIssueItem from '../components/HouseIssueItem';
export default {
    name:"houseissues",
    components: {
        HouseIssueItem
    },
    data() {},
    created() {
        this.$emit('updateTitle', 'HouseIssues');
        this.init();
    },
    methods: {
        async init() {
            try {
                console.log(this.household.household.id);
                await this.$store.dispatch(
                    GET_ISSUES,
                    this.household.household.id,
                    10,
                    1
                );
                console.log(this.houseIssue);
            } catch (error) {
                console.log(error);
            }
        }
    },
    computed: {
        ...mapState({
            household: state => state.household,
            houseIssue: state => state.issue.issues
        })
    },
     beforeMount(){
        //  this.init()
     }
};
</script>

<style>
.expansionList {
    width: 100%;
    margin: auto;
    background: none;
    box-shadow: none;
}
.expansionListContainer {
    margin: auto;
    width: 95%;
    padding: 0;
}
</style>
