<template>
    <div class="my-profile-card">
        <q-card class="cardstyle">
            <!-- <q-img :src="profileImg" class="image" :ratio="1" basic /> -->
            <q-avatar size="100px" class="image">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
            <q-card-section class="cardsection">
                <div class="title" v-if="userInfo.user.profile">
                    {{ userInfo.user.display_name }}
                </div>
                <div class="text" v-if="userInfo.user.profile.country">
                    {{ userInfo.user.profile.country.name }}
                </div>
                <div class="text" v-if="userInfo.user.profile">
                    DOB - {{ userInfo.user.profile.birthdate }}
                </div>
                <br />
                <q-separator />

                <q-btn
                    push
                    label="Edit Profile"
                    class="btntab"
                    text-color="positive"
                    style="border-radius: 0 0 0 20px;"
                    :to="editPath"
                    flat
                />

                <q-btn
                    push
                    label="Settings"
                    class="btntab"
                    text-color="positive"
                    style="border-radius: 0 0 20px 0;  border-left: 2px solid #eeeeee;"
                    :to="settingPath"
                    flat
                />
            </q-card-section>
        </q-card>
        <q-card class="infoCard cardstyle">
            <q-card-section class="cardsection">
                <div class="title">About</div>
                <div class="text" v-if="userInfo.user.profile">
                    {{ userInfo.user.profile.biography }}
                </div>

                <div class="title">Allergies</div>
                <q-toolbar>
                    <div class="text" v-if="userInfo.user.profile.allergies">
                        <div
                            class="text"
                            v-for="(allergy, index) in userInfo.user.profile
                                .allergies"
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
                    <div v-if="userInfo.user.profile.food_preferences">
                        <div
                            class="text inlinediv"
                            v-for="(food_preference, index) in userInfo.user
                                .profile.food_preferences"
                            :key="index"
                        >
                            <div
                                class="text inlinediv"
                                v-if="userInfo.user.profile"
                            >
                                {{ food_preference.food.name }} |
                            </div>
                        </div>
                    </div>
                </q-toolbar>

                <q-toolbar>
                    <div class="text">Spare time</div>
                    <q-space />
                    <div v-if="userInfo.user.profile">
                        <div
                            class="text"
                            v-for="(hobby, index) in userInfo.user.profile
                                .hobbies"
                            :key="index"
                        >
                            {{ hobby.description }}
                        </div>
                    </div>
                </q-toolbar>
                <q-toolbar>
                    <div class="text">Language</div>
                    <q-space />
                    <div class="text">{{ userInfo.user.profile.language }}</div>
                </q-toolbar>
            </q-card-section>
        </q-card>
        <q-btn
            rounded
            outline
            color="#334856"
            size="lg"
            label="Log out"
            style="margin:2rem 0 0 0; padding: 0 2rem"
            to="/auth"
        />
        <div class="version">Version 1.0.0.1</div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'Profile',
    created() {
        this.$emit('updateTitle', 'Profile', 'Say more about you!');
    },
    data() {
        return {
            editPath: '/editProfile',
            settingPath: '/profile/setting',
            profileImg: '../statics/img/profile.jpg',
            lorem:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        };
    },
    computed: {
        ...mapState({
            userInfo: state => state.auth
        })
    }
};
</script>
<style lang="scss" scoped>
.my-profile-card {
    width: 90%;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: none !important;
    .cardsection {
        padding: 0 !important;
        border-bottom: none;
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
