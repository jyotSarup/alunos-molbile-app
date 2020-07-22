<template>
    <div class="my-card">
        <q-card class="cardstyle">
            <!-- <Camera /> -->
            <!-- <q-img :src="profileImg" class="image" :ratio="1" basic /> -->
              <q-dialog v-model="dialog">
                    <q-card style="width: 300px">
                        <q-card-section>
                            <div class="text-h6" align="center"><q-icon name="done" size="42px"/></div>
                        </q-card-section>

                        <q-card-section class="q-pt-none" align="center">
                           Profile Updated Successfully
                        </q-card-section>

                        <q-card-actions
                            align="right"
                            class="bg-white text-teal"
                        >
                            <q-separator />
                            <q-btn
                                flat
                                label="Close"
                                v-close-popup
                                text-color="primary"
                                class="fullwidth"
                            />
                        </q-card-actions>
                    </q-card>
                </q-dialog>
            <q-avatar size="100px" class="image">
                <img :src="userInfo.user.avatar.url"  />
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
                    <q-input
                        v-if="userInfo.user.profile"
                        type="text"
                        v-model="userInfo.user.first_name"
                        ref="firstName"
                    />
                    <div class="title textPrimaryColor">Last Name</div>
                    <q-input
                        v-if="userInfo.user.profile"
                        type="text"
                        v-model="userInfo.user.last_name"
                        ref="lastName"
                    />
                    <div class="title textPrimaryColor">Email</div>
                    <q-input
                        v-if="userInfo.user.profile"
                        type="text"
                        v-model="userInfo.user.email"
                    />
                    <div class="title textPrimaryColor">Display Name</div>
                    <q-input
                        v-if="userInfo.user.profile"
                        type="text"
                        v-model="userInfo.user.display_name"
                        ref="displayName"
                    />
                    <div class="title textPrimaryColor">Date of Birth</div>
                    <q-input
                        v-if="userInfo.user.profile"
                        type="text"
                        v-model="userInfo.user.profile.birthdate"
                    />
                </q-card-section>
            </q-card>
        </q-card>
        <q-card class="infoCard cardstyle">
            <q-card-section class="cardsection">
                <div class="title textPrimaryColor">About</div>
                <div v-if="userInfo.user.profile">
                    <q-input
                        v-if="userInfo.user.profile"
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
                </div>

                <div class="title textPrimaryColor">Food Preferences</div>
                <div v-if="userInfo.user.profile">
                    <div
                        class="text"
                        v-for="(food_preference, index) in userInfo.user.profile
                            .food_preferences"
                        :key="index"
                    >
                        <q-input
                            type="text"
                            v-model="food_preference.food.name"
                        />
                    </div>
                </div>

                <div class="title textPrimaryColor">Hobbies</div>
                <div v-if="userInfo.user.profile">
                    <div
                        class="text"
                        v-for="(hobby, index) in userInfo.user.profile.hobbies"
                        :key="index"
                    >
                        <q-input type="text" v-model="hobby.description" />
                    </div>
                </div>
                <div class="title textPrimaryColor">Allergies</div>
                <div v-if="userInfo.user.profile">
                    <div
                        class="text"
                        v-for="(allergy, index) in userInfo.user.profile
                            .allergies"
                        :key="index"
                    >
                        <q-input type="text" v-model="allergy.description" />
                    </div>
                </div>
                <div class="title textPrimaryColor">Language</div>
                <q-input
                    v-if="userInfo.user.profile"
                    type="text"
                    v-model="userInfo.user.profile.language"
                />
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
import { UPDATEME } from '../constants';
import { EventBus } from "../services/event-bus.js";
export default {
    name: 'EditProfile',
    components: { UpdateOptionDialog },
    // props: ["selectedPhoto"],
    created() {
        this.$emit('updateTitle', 'Edit Profile', '', '/profile');
    },
     beforeMount() {
        EventBus.$on("saveProfile", this.saveProfile);
    },
    beforeDestroy() {
        EventBus.$off("saveProfile", this.saveProfile);
    },
    data() {
        return {
            dialog:false,
            showdialog: false,
            imageUrl: '../statics/img/profile.jpg',
            avatar:{}
        };
    },
    methods: {
        updatePhotoClicked() {
            this.showdialog = true;
            this.$forceUpdate();
        },
        async saveProfile(){
            let first_name = this.$refs.firstName.value;
            let last_name = this.$refs.lastName.value;
            let display_name = this.$refs.displayName.value;
            let avatar = this.avatar;
             
            console.log(first_name,last_name,display_name);
             try {
                await this.$store.dispatch(
                    UPDATEME,
                    {
                        first_name,
                        last_name,
                        display_name,
                        avatar
                    }
                );
                this.dialog = true
            } catch (error) {
                console.log(error);
            }
        },
        loadPhoto(event) {
            console.log('parent load photo triggered!');
            var reader,
                files = event.target.files;
            this.avatar = files[0];
          
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
        }),
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
