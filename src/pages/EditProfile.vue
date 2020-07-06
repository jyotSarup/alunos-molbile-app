<template>
    <div class="my-card">
        <q-card class="cardstyle">
            <!-- <Camera /> -->
            <!-- <q-img :src="profileImg" class="image" :ratio="1" basic /> -->
            <q-avatar size="100px" class="image">
                <img src="https://cdn.quasar.dev/img/avatar.png" />
            </q-avatar>
            <q-card class="infoCard">
                <q-card-section class="cardsection ">
                    <div class="title textPrimaryColor">First Name</div>
                    <q-input type="text" :value="userInfo.user.first_name" />
                    <div class="title textPrimaryColor">Last Name</div>
                    <q-input type="text" :value="userInfo.user.last_name" />
                    <div class="title textPrimaryColor">Email</div>
                    <q-input type="text" :value="userInfo.user.email" />
                    <div class="title textPrimaryColor">Display Name</div>
                    <q-input type="text" :value="userInfo.user.display_name" />
                    <div class="title textPrimaryColor">Date of Birth</div>
                    <q-input type="text" :value="dateofBirth" />
                </q-card-section>
            </q-card>
        </q-card>
        <q-card class="infoCard cardstyle">
            <q-card-section class="cardsection">
                <div class="title textPrimaryColor">About</div>
                <q-input
                    v-model="textareaModel"
                    type="textarea"
                    outlined
                    clearable
                    :label="lorem"
                    :shadow-text="textareaShadowText"
                    @keydown="processTextareaFill"
                    @focus="processTextareaFill"
                />

                <div class="title textPrimaryColor">Food Preferences</div>
                <q-input type="text" :label="firstName" />
                <div class="title textPrimaryColor">Favorite Places</div>
                <q-input type="text" :label="firstName" />
                <div class="title textPrimaryColor">Spare Time Activities</div>
                <q-input type="text" :label="firstName" />
                <div class="title textPrimaryColor">Social Links</div>
                <q-input type="text" :label="firstName" />
            </q-card-section>
        </q-card>
    </div>
</template>
<script>
import { mapState } from "vuex";
// import Camera from "../components/Camera";
export default {
    name: "EditProfile",
    // components: { Camera },
    created() {
        this.$emit("updateTitle", "Edit Profile", "", "/profile");
    },
    data() {
        return {
            firstName: "Mariam",
            lastName: "Jackson",
            email: "mariamjackson@gmail.com",
            dateofBirth: "19 July 1994",
            profileImg: "../statics/img/profile.jpg",
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
<style lang="scss">
.my-card {
    width: 90%;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: none !important;
    border: none;
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
        color: #01c0fb;
    }
    .text {
        font-size: 9;
        color: darkgrey;
    }

    .infoCard {
        margin-top: 5%;
        text-align: left;
        padding: 1rem 1.5rem 1.5rem 1.5rem;
    }
}
</style>
