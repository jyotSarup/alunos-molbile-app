<template>
    <div class="memberListContainer" v-if="members">
        <div>
        <h6 style="margin:1em; padding-top:1em">House Members List</h6>
        <span style="margin:1em; margin-right:0 ">{{members.length}}</span> 
        <span v-if="members.length==1"> member </span>
        <span v-else> members</span>
        </div>
        <q-card

            v-for="(member, index) in members"
            :key="index"
            class="memberListItem"
        >
            <q-card-section>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
            </q-card-section>
            <q-card-section class="memberName">
                <div>{{member.user.display_name}}</div>
                <div>{{member.user.email}}</div>
            </q-card-section>

            <q-card-section class="memberDetailsIcon">
                <q-icon name="keyboard_arrow_right" />
            </q-card-section>
            <q-separator/>
        </q-card>
        
        
    </div>
</template>

<script>
import {mapActions, mapState} from 'vuex';
export default {
    data() {
        return {
            // members: [
            //     { name: "jyot", dob: "21-sep-1993" },
            //     { name: "jyot", dob: "22-sep-1993" },
            //     { name: "jyot", dob: "23-sep-1993" },
            //     { name: "jyot", dob: "24-sep-1993" },
            //     { name: "jyot", dob: "25-sep-1993" },
            //     { name: "jyot", dob: "26-sep-1993" }
            // ]
        };
    },
    computed: {
        ...mapState({
            members: state => state.members
        }),}
};
</script>

<style>
.q-card.memberListItem {
    display: flex !important;
    border: none !important;
    box-shadow: none;
    background:none;
    border-radius: none !important;
}
.memberDetailsIcon {
    align-self: center;
    margin: auto;
}
.memberName {
    flex: 0 0 70%;
}
.memberListContainer {
    border-radius: 20px;
    width:95%;
    margin:auto;
    background: white;
}
</style>
