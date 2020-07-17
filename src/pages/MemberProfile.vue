<template>
    <div class="my-profile-card" v-if="members">
        <div class="memberImg">
            <q-btn
                flat
                icon="keyboard_backspace"
                class="back-position"
                style="color: #ffffff"
                to="/myHomestay"
            />
        </div>
        <div class="memberContainer">
            <!-- <q-img :src="profileImg" class="image" :ratio="1" basic /> -->

            <div
                class="basicInfo"
                v-if="members[$route.params.memberIndex].user"
            >
                <div
                    class="memberName"
                    v-if="members[$route.params.memberIndex].user.profile"
                >
                    {{ members[$route.params.memberIndex].user.display_name }}
                </div>
                <div
                    class="text"
                    v-if="
                        members[$route.params.memberIndex].user.profile.country
                    "
                >
                    {{
                        members[$route.params.memberIndex].user.profile.country
                            .name
                    }}
                </div>
                <div
                    class="text"
                    v-if="members[$route.params.memberIndex].user.profile"
                >
                    DOB -
                    {{
                        members[$route.params.memberIndex].user.profile
                            .birthdate
                    }}
                </div>
                <br />
            </div>
            <div class="messageMember">
                <q-btn
                    label="MESSAGE"
                    color="accent"
                    style=" border-radius:20px ; margin-right:45px; font-size: 12px; font-weight: bold; padding:5px;"
                ></q-btn>
            </div>
        </div>
        <q-card class="infoCard cardstyle">
            <q-card-section class="cardsection">
                <div class="title">About</div>
                <div
                    class="text"
                    v-if="members[$route.params.memberIndex].user.profile"
                >
                    {{
                        members[$route.params.memberIndex].user.profile
                            .biography
                    }}
                </div>

                <div class="title">Allergies</div>
                <q-toolbar>
                    <div
                        class="text"
                        v-if="
                            members[$route.params.memberIndex].user.profile
                                .allergies
                        "
                    >
                        <div
                            class="text"
                            v-for="(allergy, index) in members[
                                $route.params.memberIndex
                            ].user.profile.allergies"
                            :key="index"
                        >
                            {{ allergy.description }}
                        </div>
                    </div>
                    <!-- <q-space />
                    <div class="text">instagram</div> -->
                </q-toolbar>
            </q-card-section>
        </q-card>
        <q-card class="infoCard cardstyle">
            <q-card-section class="cardsection">
                <div class="title">Likes</div>
                <q-toolbar>
                    <div class="text">Food</div>
                    <q-space />
                    <div
                        v-if="
                            members[$route.params.memberIndex].user.profile
                                .food_preferences
                        "
                    >
                        <div
                            class="text inlinediv"
                            v-for="(food_preference, index) in members[
                                $route.params.memberIndex
                            ].user.profile.food_preferences"
                            :key="index"
                        >
                            <div
                                class="text inlinediv"
                                v-if="
                                    members[$route.params.memberIndex].user
                                        .profile
                                "
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
                            v-for="(hobby, index) in members[
                                $route.params.memberIndex
                            ].user.profile.hobbies"
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
                        {{
                            members[$route.params.memberIndex].user.profile
                                .language
                        }}
                    </div>
                </q-toolbar>
            </q-card-section>
        </q-card>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'Profile',
    // async created() {
    //     this.$emit('updateTitle', '', '', '/myHomestay');
    // },
    computed: {
        ...mapState({
            members: state => state.household.members
        })
    }
};
</script>
<style lang="scss" scoped>
.my-profile-card {
    width: 100%;
    text-align: left !important;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: none !important;
    .cardsection {
        padding: 0 !important;
    }
    .cardstyle {
        border-radius: 40px;
        margin-bottom: 10px;
    }
    .image {
        width: 100px;
        margin-top: -15%;
    }
    .title {
        font-size: 12 !important;
        font-weight: bold !important;
        padding-top: 1.5rem;
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
        text-align: left;
        padding: 1rem 1.5rem 1.5rem 1.5rem;
        margin: 0 1rem 10px 1rem;
    }
    .inlinediv {
        display: inline;
    }
}

.memberImg {
    background-image: url('../assets/photo.png');
    height: 45vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.memberContainer {
    margin-top: -70px;
    display: flex;
    align-items: center;
    border-radius: 0px 80px 0px 0px;
    background-color: #f1f0f2;
    justify-content: space-between;
}
.basicInfo {
    padding: 1.5rem 1.5rem 0 1.5rem;
}
.memberName {
    font-size: 7vw;
    font-weight: bold;
}
</style>
