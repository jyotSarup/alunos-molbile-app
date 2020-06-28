<template>
    <div class="my-card">
        <q-card class="cardstyle">
            <q-img :src="profileImg" class="image" :ratio="1" basic />
            <q-card class="infoCard">
                <q-card-section class="cardsection ">
                    <div class="title textPrimaryColor">First Name</div>
                    <q-input type="text" :label="firstName" />
                    <div class="title textPrimaryColor">Last Name</div>
                    <q-input type="text" :label="lastName" />
                    <div class="title textPrimaryColor">Email</div>
                    <q-input type="text" :label="email" />
                    <div class="title textPrimaryColor">Date of Birth</div>
                    <q-input type="text" :label="dateofBirth" />
                </q-card-section>
            </q-card>
        </q-card>
        <q-card class="infoCard cardstyle">
            <q-card-section class="cardsection">
                <div class="title textPrimaryColor">First Name</div>
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
export default {
    name: "EditProfile",
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

    .infoCard {
        margin-top: 5%;
        text-align: left;
        padding: 1rem 1.5rem 1.5rem 1.5rem;
    }
}
</style>
