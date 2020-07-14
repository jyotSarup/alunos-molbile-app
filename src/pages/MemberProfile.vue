<template>
    <div class="my-profile-card" v-if="members">
        <q-card class="cardstyle">
            <!-- <q-img :src="profileImg" class="image" :ratio="1" basic /> -->
            <q-avatar size="100px" class="image">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
            <q-card-section class="cardsection" v-if="members[$route.params.memberIndex].user">
                <div class="title" v-if="members[$route.params.memberIndex].user.profile">
                    {{ members[$route.params.memberIndex].user.display_name }}
                </div>
                <div class="text" v-if="members[$route.params.memberIndex].user.profile.country">
                    {{ members[$route.params.memberIndex].user.profile.country.name }}
                </div>
                <div class="text" v-if="members[$route.params.memberIndex].user.profile">
                    DOB - {{ members[$route.params.memberIndex].user.profile.birthdate }}
                </div>
                <br />
                <q-separator />
            </q-card-section>
        </q-card>
        <q-card class="infoCard cardstyle">
            <q-card-section class="cardsection">
                <div class="title">About</div>
                <div class="text" v-if="members[$route.params.memberIndex].user.profile">
                    {{ members[$route.params.memberIndex].user.profile.biography }}
                </div>

                <div class="title">Allergies</div>
                <q-toolbar>
                    <div
                        class="text"
                        v-if="members[$route.params.memberIndex].user.profile.allergies"
                    >
                        <div
                            class="text"
                            v-for="(allergy, index) in members[$route.params.memberIndex].user
                                .profile.allergies"
                            :key="index"
                        >
                            {{ allergy.description }}
                        </div>
                    </div>
                    <!-- <q-space />
                    <div class="text">instagram</div> -->
                </q-toolbar>
                <div class="title">Likes</div>
                <q-toolbar>
                    <div class="text">Food</div>
                    <q-space />
                    <div v-if="members[$route.params.memberIndex].user.profile.food_preferences">
                        <div
                            class="text inlinediv"
                            v-for="(food_preference, index) in members[$route.params.memberIndex]
                                .user.profile.food_preferences"
                            :key="index"
                        >
                            <div
                                class="text inlinediv"
                                v-if="members[$route.params.memberIndex].user.profile"
                            >
                                {{ food_preference.food.name }} |
                            </div>
                        </div>
                    </div>
                </q-toolbar>

                <q-toolbar>
                    <div class="text">Spare time</div>
                    <q-space />
                    <div v-if="members[$route.params.memberIndex].user.profile">
                        <div
                            class="text"
                            v-for="(hobby, index) in members[$route.params.memberIndex].user
                                .profile.hobbies"
                            :key="index"
                        >
                            {{ hobby.description }}
                        </div>
                    </div>
                </q-toolbar>
                <q-toolbar>
                    <div class="text">Language</div>
                    <q-space />
                    <div class="text">
                        {{ members[$route.params.memberIndex].user.profile.language }}
                    </div>
                </q-toolbar>
            </q-card-section>
        </q-card>
        <div class="version">Version 1.0.0.1</div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'Profile',
    async created() {
        this.$emit('updateTitle', `${this.members[this.$route.params.memberIndex].user.display_name}'s Profile`);
    },
    computed: {
        ...mapState({
            members: state => state.household.members
        })
    }
};
</script>
<style lang="scss" scoped>
.my-profile-card {
    width: 90%;
    padding-top: 2em;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: none !important;
    .cardsection {
        padding: 0 !important;
    }
    .image {
        width: 100px;
        border-radius: 80px !important;
        margin-top: -15%;
    }
    .title {
        font-size: 12 !important;
        font-weight: bold !important;
        margin-top: 1rem;
    }
    .text {
        font-size: 9;
        color: darkgrey;
    }
    .btntab {
        text-decoration: none !important;
        text-transform: none;
        width: 50%;
        box-shadow: none !important;
        .q-btn__wrapper:before {
            border-bottom: none !important;
            box-shadow: none !important;
        }
    }
    .infoCard {
        margin-top: 5%;
        text-align: left;
        padding: 1rem 1.5rem 1.5rem 1.5rem;
    }
    .version {
        color: #017eff;
        margin: 1rem 0 2.5rem 0;
    }
    .inlinediv {
        display: inline;
    }
}
</style>
