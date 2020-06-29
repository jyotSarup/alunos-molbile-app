<template>
    <q-btn
        :item="item"
        :key="item"
        :icon="item.icon"
        :label="item.label"
        :to="item.path"
        stack
        class="cardButton"
        rounded
        no-caps
        text-color="dark"
    />
</template>

<style scoped>
.cardButton {
    width: 42vw;
    height: 42vw;
    font-size: 16px;
    background-color: white;
}
</style>

<script>
export default {
    name: "MenuCard",
    props: {
        item: {
            type: Object,
            required: true
        }
    }
};
</script>
