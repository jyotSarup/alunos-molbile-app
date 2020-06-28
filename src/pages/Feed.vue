<template>
    <q-page class="feedContainer">
        <dailyTip> </dailyTip>
        <div >
            <infiniteScrollContainer></infiniteScrollContainer>
        </div>
    </q-page>
</template>

<script>
export default {
    name: "Tip",
    created() {
        this.$emit("updateTitle", "Hi Maria","It's a good day to have a good day");
    },
    components: {
        dailyTip: require("../components/DailyTip.vue").default,
        infiniteScrollContainer: require("../components/InfiniteScrollContainer")
            .default
    }
};
</script>

<style>
.feedContainer
{
    width:95%;
    margin:auto;
}
</style>
