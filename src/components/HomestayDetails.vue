<template class="marginAuto">
    <div class="detailsContainer" v-if="householdDetails">
        <div style="padding:2em">
            <h6 style="margin-top: 0; margin-bottom:0 ">
                {{ householdDetails.household.name }}
            </h6>
            <div> {{householdDetails.household.description}} </div>
            <span>Address: </span>
            {{ householdDetails.household.address }}
            <div> <span>Phone :</span> {{householdDetails.household.phone}}</div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    data() {},
    computed: {
        ...mapState({
            householdDetails: state => state.household
        })
    }
};
</script>

<style>
.detailsContainer {
    border-radius: 20px;
    width: 95%;
    margin: auto;
    background: white;
}
.marginAuto {
    margin: auto;
}
</style>
