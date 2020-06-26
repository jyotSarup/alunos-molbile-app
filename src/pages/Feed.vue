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
    components: {
        dailyTip: require("../components/DailyTip.vue").default,
        infiniteScrollContainer: require("../components/InfiniteScrollContainer")
            .default
    }
};
</script>

<style>
</style>
