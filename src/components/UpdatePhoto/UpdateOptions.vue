<template>
    <q-dialog v-model="showdialog">
        <q-card style="width: 300px">
            <q-card-actions align="right" class="bg-white text-teal">
                <q-btn
                    label="Take Photo"
                    text-color="primary"
                    class="fullwidth q-mb-sm"
                />
                <input
                    hidden
                    type="file"
                    name="file"
                    id="file"
                    text-color="primary"
                    class="fullwidth q-mb-sm"
                    @change="onFileSelected"
                />

                <label
                    for="file"
                    class="inputLabel fullwidth q-mb-sm"
                    id="filelabel"
                    >CHOOSE PHOTO</label
                >
                <img :src="selectedPhoto" />
                <q-separator />
                <q-btn
                    flat
                    label="Cancel"
                    v-close-popup
                    text-color="primary"
                    class="fullwidth"
                    @click="onClosedialog"
                />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>

<script>
export default {
    name: "updateoptions",
    props: ["selectedPhoto", "showdialog"],
    data() {
        return {};
    },
    methods: {
        onFileSelected(e) {
            console.log("Child load photo triggered!");
            this.$emit("loadPhoto", e);
            this.showdialog = false;
            this.$forceUpdate();
        },
        onClosedialog() {
            this.showdialog = false;
            this.$forceUpdate();
            console.log(this.showdialog);
        }
    }
};
</script>
<style lang="scss">
.inputLabel {
    font-size: 1.1em;
    font-weight: 410;
    color: #017eff;
    text-align: center;
    // display: inline-block;
}
</style>
