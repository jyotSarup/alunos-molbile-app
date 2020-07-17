<template>
    <div class="row q-pa-md q-gutter-md justify-center">
        <q-btn
            v-if="!isAdmin"
            stack
            rounded
            color="white"
            class="cardButton"
            text-color="black"
            to="/myhomestay"
        >
            <q-icon
                center
                size="56px"
                name="img:../statics/icons/iconMyHomestay.png"
            />
            <div class="buttonLabel">My Homestay</div>
        </q-btn>

        <q-btn
            stack
            rounded
            color="white"
            class="cardButton"
            text-color="black"
            to="/houseissues"
        >
            <q-icon
                center
                size="56px"
                name="img:../statics/icons/iconHouseIssues.png"
            />
            <div class="buttonLabel">House Issues</div>
        </q-btn>
        <q-btn
            v-if="!isAdmin"
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
                name="img:../statics/icons/iconFeedback.png"
            />
            <div class="buttonLabel">Rules</div>
        </q-btn>
        <q-btn
            v-if="!isAdmin"
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
            <div class="buttonLabel">Feedback</div>
        </q-btn>
        <q-btn
            v-if="isAdmin"
            stack
            rounded
            color="white"
            class="cardButton"
            text-color="black"
            to="/Rooms"
        >
            <q-icon
                center
                size="56px"
                name="img:../statics/icons/iconRules.png"
            />
            <div class="buttonLabel">Rooms</div>
        </q-btn>
        <q-btn
            v-if="isAdmin"
            stack
            rounded
            color="white"
            class="cardButton"
            text-color="black"
            to="/Rooms"
        >
            <q-icon
                center
                size="56px"
                name="img:../statics/icons/iconRules.png"
            />
            <div class="buttonLabel">Rooms</div>
        </q-btn>
        <q-btn
            v-if="isAdmin"
            stack
            rounded
            color="white"
            class="cardButton"
            text-color="black"
            to="/Rooms"
        >
            <q-icon
                center
                size="56px"
                name="img:../statics/icons/iconRules.png"
            />
            <div class="buttonLabel">Rooms</div>
        </q-btn>
        <q-btn
            v-if="isAdmin"
            stack
            rounded
            color="white"
            class="cardButton"
            text-color="black"
            to="/Rooms"
        >
            <q-icon
                center
                size="56px"
                name="img:../statics/icons/iconRules.png"
            />
            <div class="buttonLabel">Rooms</div>
        </q-btn>
        <q-btn
            v-if="isAdmin"
            stack
            rounded
            color="white"
            class="cardButton"
            text-color="black"
            to="/Rooms"
        >
            <q-icon
                center
                size="56px"
                name="img:../statics/icons/iconRules.png"
            />
            <div class="buttonLabel">Tasks</div>
        </q-btn>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'Homestay',
    created() {
        this.$emit('updateTitle', 'Homestay', 'Your Home Sweet Home');
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
