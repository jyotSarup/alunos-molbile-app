<template>
    <div class="my-card">
        <q-card class="cardstyle">
            <!-- <Camera /> -->
            <!-- <q-img :src="profileImg" class="image" :ratio="1" basic /> -->
            <q-avatar size="100px" class="image">
                <img :src="imageUrl" />
                <q-btn
                    class="editphotoStyle"
                    @click.prevent="updatePhotoClicked"
                >
                    <q-icon name="edit" />
                </q-btn>
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
                    <q-input
                        type="text"
                        :value="userInfo.user.profile.birthdate"
                    />
                </q-card-section>
            </q-card>
        </q-card>
        <q-card class="infoCard cardstyle">
            <q-card-section class="cardsection">
                <div class="title textPrimaryColor">About</div>
                <q-input
                    name="biography"
                    type="textarea"
                    v-model="userInfo.user.profile.biography"
                    outlined
                    clearable
                    :defaultValue="userInfo.user.profile.biography"
                    :shadow-text="textareaShadowText"
                    @keydown="processTextareaFill"
                    @focus="processTextareaFill"
                >
                </q-input>

                <div class="title textPrimaryColor">Food Preferences</div>
                <div
                    class="text"
                    v-for="(food_preference, index) in userInfo.user.profile
                        .food_preferences"
                    :key="index"
                >
                    <q-input type="text" :value="food_preference.food.name" />
                </div>

                <div class="title textPrimaryColor">Hobbies</div>
                <div
                    class="text"
                    v-for="(hobby, index) in userInfo.user.profile.hobbies"
                    :key="index"
                >
                    <q-input type="text" :value="hobby.description" />
                </div>
                <div class="title textPrimaryColor">Allergies</div>
                <div
                    class="text"
                    v-for="(allergy, index) in userInfo.user.profile.allergies"
                    :key="index"
                >
                    <q-input type="text" :value="allergy.description" />
                </div>
                <div class="title textPrimaryColor">Language</div>
                <q-input type="text" :label="userInfo.user.profile.language" />
            </q-card-section>
            <div v-show="showdialog">
                <UpdateOptionDialog
                    :selectedPhoto="selectedPhoto"
                    :showdialog.sync="showdialog"
                    :loadPhoto="loadPhoto"
                    ref="uPhoto"
                />
            </div>
        </q-card>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import UpdateOptionDialog from '../components/UpdatePhoto/UpdateOptions';
export default {
    name: 'EditProfile',
    components: { UpdateOptionDialog },
    // props: ["selectedPhoto"],
    created() {
        this.$emit('updateTitle', 'Edit Profile', '', '/profile');
    },
    data() {
        return {
            showdialog: false,
            imageUrl: '../statics/img/profile.jpg'
        };
    },
    methods: {
        updatePhotoClicked() {
            this.showdialog = true;
            this.$forceUpdate();
        },
        loadPhoto(event) {
            console.log('parent load photo triggered!');
            var reader,
                files = event.target.files;

            if (files.length === 0) {
                console.log('peak a photo');
            }

            reader = new FileReader();
            reader.onload = event => {
                this.imageUrl = event.target.result;
            };
            reader.readAsDataURL(files[0]);
            this.showdialog = false;
            this.$forceUpdate();
            console.log('parent photo', this.imageUrl);
        }
    },
    computed: {
        ...mapState({
            userInfo: state => state.auth
        })
    }
    // watch: {
    //     showdialog
    // }
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
.editphotoStyle {
    position: absolute;
    top: 69px !important;
    right: 11px !important;
    background-color: white;
    border-radius: 80px;
    width: 2rem;
    height: 2rem;
}
</style>
