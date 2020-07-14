<template class="marginAuto">
    <div class="detailsContainer" v-if="householdDetails">
        <div style="padding:2em">
            <h6 style="margin-top: 0; margin-bottom:0 ">{{householdDetails.household.name}}</h6>

            <span>Address: </span>
            {{householdDetails.household.address}}
            </div>
        
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    data() {
       
    },
    computed: {
        ...mapState({
             householdDetails: state => state.household,
        }),}
};
</script>

<style>

.detailsContainer {
    border-radius: 20px;
    width:95%;
    margin:auto;
    background: white;
}
.marginAuto{
    margin:auto;
}
</style>
