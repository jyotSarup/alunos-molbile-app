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
                name="img:../statics/icons/iconCriticalIssue.png"
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
                name="img:../statics/icons/iconContactAgency.png"
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
                name="img:../statics/icons/iconEmergencyCall.png"
            />
            <div class="buttonLabel">Emergency Call</div>
        </q-btn>
        <q-btn
            stack
            rounded
            color="white"
            class="cardButton"
            text-color="black"
            to="/feedback"
        >
            <q-icon
                center
                size="56px"
                name="img:../statics/icons/iconRules.png"
            />
            <div class="buttonLabel">FAQs</div>
        </q-btn>
    </div>
</template>

<script>
export default {
    name: 'Help',
    created() {
        this.$emit('updateTitle', 'Help', 'You are not alone');
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
