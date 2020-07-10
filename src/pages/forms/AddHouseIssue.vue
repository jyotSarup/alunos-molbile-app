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

                <small style="display:block; margin:1em ; color:#01C0FB">
                    Add Photo/Video
                </small>

                <q-btn
                    label="Add"
                    type="submit"
                    color="accent"
                    style="width: 30% ; border-radius:20px ; margin-left:0"
                ></q-btn>
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
        </q-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: null,
            age: null,
            issueTypes: ['Food', 'Plumbing', 'Rules'],
            accept: false,
            description: '',
            issueSubject: '',
            titleText: ''
        };
    },
    created() {
        this.$emit('updateTitle', 'Add House Issue');
    },
    methods: {
        onSubmit() {
            if (this.accept !== true) {
                this.$q.notify({
                    color: 'red-5',
                    textColor: 'white',
                    icon: 'warning',
                    message: 'You need to accept the license and terms first'
                });
            } else {
                this.$q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: 'Submitted'
                });
            }
        },

        onReset() {
            this.name = null;
            this.age = null;
            this.accept = false;
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
</style>
