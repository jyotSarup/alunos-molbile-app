<template>
    <div class="text-accent q-gutter-md" style="font-size: 2em">
        <!-- <div class="q-pa-md row items-start q-gutter-md"> -->
        <q-card class="my-card">
            <q-img
                :src="profileImg"
                style="width: 150px"
                :ratio="1"
                basic
                spinner-color="white"
                class="img"
            />

            <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div class="text-subtitle2">by John Doe</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                {{ lorem }}
            </q-card-section>
        </q-card>
    </div>
</template>
<script>
export default {
    name: "profile",
    data() {
        return {
            profileImg: "../statics/img/profile.jpg"
        };
    }
};
</script>
<style lang="scss">
.img {
    border-radius: 50px;
}
</style>
