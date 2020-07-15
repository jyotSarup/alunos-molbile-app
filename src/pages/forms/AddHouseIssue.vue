<template>
    <div class=" window-width row justify-center formWrapper">
        <q-form
            action="https://some-url.com"
            method="post"
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
        >
            <div class="inputFields">
                <q-input
                    autofocus
                    v-model="titleText"
                    label="Title"
                    label-color="positive"
                    hint="water tap does not work"
                    lazy-rules
                    :rules="[
                        val => (val && val.length > 0) || 'Please enter a title'
                    ]"
                />

                <q-select
                    v-model="issueSubject"
                    :options="issueTypes"
                    label="Subject"
                    label-color="positive"
                    lazy-rules
                    :rules="[
                        val =>
                            (val !== null && val !== '') ||
                            'Please select a subject'
                    ]"
                />

                <q-input
                    v-model="description"
                    outlined
                    label="Description"
                    lazy-rules
                    label-color="positive"
                    :rules="[
                        val =>
                            (val !== null && val !== '') ||
                            'Please write a description'
                    ]"
                    type="textarea"
                ></q-input>
                <div class="addmediadiv">
                    <small style="display:block; margin:1em ; color:#01C0FB">
                        Add Photo/Video
                    </small>

                    <q-btn
                        label="Add"
                        @click.prevent="updatePhotoClicked"
                        color="accent"
                        style="width: 30% ; border-radius:20px ; margin-left:0"
                    ></q-btn>

                    <q-avatar
                        square
                        size="50px"
                        class="image q-ma-sm"
                        v-for="(img, index) in imageUrl"
                        :key="index"
                    >
                        <img :src="img" />
                    </q-avatar>
                </div>
                <!--q-toggle
            v-model="accept"
            label="I accept the license and terms"
        ></q-toggle-->
            </div>
            <div style="margin:0; margin-top:1em">
                <q-btn
                    label="Generate Issue"
                    type="submit"
                    class="gradientButton"
                    style="width: 100% ; border-radius:20px ; margin-left:0"
                ></q-btn>
                <!-- <q-btn
                    label="Reset"
                    type="reset"
                    color="primary"
                    flat
                    class="q-ml-sm"
                    style="border:none !important"
                ></q-btn> -->
            </div>
            <div v-show="showdialog">
                <UpdateOptionDialog
                    :selectedPhoto="selectedPhoto"
                    :showdialog.sync="showdialog"
                    :loadPhoto="loadPhoto"
                    ref="uPhoto"
                />
            </div>
             <q-dialog v-model="dialog">
                    <q-card style="width: 300px">
                        <q-card-section>
                            <div class="text-h6" align="center"><q-icon name="done" size="42px"/></div>
                        </q-card-section>

                        <q-card-section class="q-pt-none" align="center">
                           Issue Generated Successfully
                        </q-card-section>

                        <q-card-actions
                            align="right"
                            class="bg-white text-teal"
                        >
                            <q-separator />
                            <q-btn
                                flat
                                label="Close"
                                @click="ToHouseIssue"
                                text-color="primary"
                                class="fullwidth"
                            />
                        </q-card-actions>
                    </q-card>
                </q-dialog>
        </q-form>
           
    </div>
</template>

<script>
import UpdateOptionDialog from '../../components/UpdatePhoto/UpdateOptions';
import { MUTATE_CREATEISSUE } from '../../constants';
import { GET_ISSUES } from '../../constants';
import { mapState } from 'vuex';
import { stat } from 'fs';
export default {
    name: 'AddHouseIssue',
    components: { UpdateOptionDialog },
    data() {
        return {
            dialog: false,
            issueTypes: ['Food', 'Plumbing', 'Rules'],
            description: '',
            issueSubject: '',
            titleText: '',
            showdialog: false,
            imageUrl: []
        };
    },
    created() {
        this.$emit('updateTitle', 'Add House Issue','', '/feed');
    },
    computed: {
        ...mapState({
            household: state => state.household,
            houseIssue: state => state.issue.issues,
        })
    },
    methods: {
        async ToHouseIssue() {
            const householdId = this.household.household.id;
            // await this.$store.dispatch(GET_ISSUES, householdId, 10, 1);
            await this.$router.replace({ name: "houseissues" });
        },
        async onSubmit() {
            const title = this.titleText
            const description = this.description
            const authorId = this.household.memberId
            
             try {    
                await this.$store.dispatch(
                    MUTATE_CREATEISSUE,
                    {authorId,
                    title,
                    description}
                );
                
                this.dialog = true
            } catch (error) {
                console.log(error);
            }
            
        },

        onReset() {
            this.titleText = null;
            this.issueSubject = null;
            this.description = null;
            this.imageUrl = [];
            this.$forceUpdate();
        },
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
                this.imageUrl.push(event.target.result);
            };
            reader.readAsDataURL(files[0]);
            this.showdialog = false;
            this.$forceUpdate();
            console.log('parent photo', this.imageUrl);
        }
    }
};
</script>

<style>
.formwrapper {
    margin-top: 0 !important;
}
.q-gutter-md {
    width: 100%;
    margin: auto;
    height: 70%;
    padding: 1em;
    margin: auto;
}

.inputFields {
    background: white;
    padding: 2em;
    margin: auto;
    border-radius: 20px;
}
.gradientButton {
    background-image: linear-gradient(180deg, #01c0fb 30%, #01e8f8 90%);
    color: white;
}
.addmediadiv {
    text-align: left;
}

</style>
