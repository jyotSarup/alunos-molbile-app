<template>
    <div class="row q-pa-md q-gutter-md justify-center">
        <q-btn
            stack
            rounded
            color="white"
            class="cardButton"
            text-color="black"
            to="/help/add-critical-issue"
        >
            <q-icon
                center
                size="56px"
                :name="
                    isAdmin
                        ? 'img:../statics/icons/iconCriticalIssueHomestay.png'
                        : 'img:../statics/icons/iconCriticalIssue.png'
                "
            />
            <div class="buttonLabel">Add Critical Issue</div>
        </q-btn>

        <q-btn
            stack
            rounded
            color="white"
            class="cardButton"
            text-color="black"
            to="/help/contact-agency"
        >
            <q-icon
                center
                size="56px"
                :name="
                    isAdmin
                        ? 'img:../statics/icons/iconContactAgencyHomestay.png'
                        : 'img:../statics/icons/iconContactAgency.png'
                "
            />
            <div class="buttonLabel">Contact Agency</div>
        </q-btn>
        <q-btn
            stack
            rounded
            color="white"
            class="cardButton"
            text-color="black"
            to="/homestay/rules"
        >
            <q-icon
                center
                size="56px"
                :name="
                    isAdmin
                        ? 'img:../statics/icons/iconEmergencyCallHomestay.png'
                        : 'img:../statics/icons/iconEmergencyCall.png'
                "
            />
            <div class="buttonLabel">Emergency Call</div>
        </q-btn>
        <q-btn
            stack
            rounded
            color="white"
            class="cardButton"
            text-color="black"
            to="/faq"
        >
            <q-icon
                center
                size="56px"
                :name="
                    isAdmin
                        ? 'img:../statics/icons/iconFAQHomestay.png'
                        : 'img:../statics/icons/iconFAQ.png'
                "
            />
            <div class="buttonLabel">FAQs</div>
        </q-btn>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Help',
    created() {
        this.$emit('updateTitle', 'Help', 'You are not alone');
    },
    computed: {
        ...mapState({
            isAdmin: state => state.household.isAdmin
        })
    }
};
</script>

<style scoped>
.cardButton {
    width: 42vw;
    height: 42vw;
    font-size: 16px;
    box-shadow: 0 11px 10px lightgrey;
}
.buttonLabel {
    text-transform: capitalize;
    font-size: 18px;
    margin-top: 10px;
}
</style>
