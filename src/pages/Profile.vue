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
    name: "Profile",
    created() {
        this.$emit("updateTitle", "Profile");
    },
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

.q-header {
    border-radius: 0px 0px 0px 90px;
    .q-layout__shadow {
        border-radius: 0px 0px 0px 120px;
    }
    .title {
        height: 120px;
        font-size: 24px;
        font-weight: bold;

        .title-position {
            position: absolute;
            top: 40%;
            left: 20%;
        }
        .icon-position {
            position: absolute;
            top: 40%;
            right: 8%;
        }
    }
}
</style>
