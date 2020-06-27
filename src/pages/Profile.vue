<template>
    <q-card class="my-card cardstyle">
        <q-img :src="profileImg" class="image" :ratio="1" basic />
        <q-card-section class="cardsection">
            <div class="name">Mariam Jackson</div>
            <div class="tipQuote">Vancouver, BC</div>
            <div class="tipQuote">Vancouver, BC</div>
            <q-separator />

            <q-btn-group>
                <q-btn
                    push
                    label="Edit Profile"
                    class="btntab"
                    text-color="primary"
                    style="border-radius: 0 0 0 20px;"
                />

                <q-btn
                    push
                    label="Settings"
                    class="btntab"
                    text-color="primary"
                    style="border-radius: 0 0 20px 0;  border-left: 2px solid #eeeeee;"
                />
            </q-btn-group>
        </q-card-section>
    </q-card>
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
.my-card {
    width: 90%;
    text-align: center;
    position: absolute;
    top: 50%;
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
    .name {
        font-size: 12 !important;
        font-weight: bold !important;
    }
    .tipQuote {
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
}
</style>
