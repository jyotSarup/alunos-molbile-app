<template>
<div>
    <q-page class="feedContainer">
        <dailyTip> </dailyTip>
        <div >
            <infiniteScrollContainer></infiniteScrollContainer>
        </div>
    </q-page>
    </div>
</template>

<script>
import DailyTip from '../components/DailyTip'
import InfiniteScrollContainer from '../components/InfiniteScrollContainer'
export default {
    name: "Tip",
    created() {
        this.$emit("updateTitle", "Hi Maria","It's a good day to have a good day");
    },
    components: {
        DailyTip,
        InfiniteScrollContainer
    }
};
</script>

<style>
.feedContainer
{
    width:95%;
    margin:auto;
    padding-top: 2em;
}
</style>
