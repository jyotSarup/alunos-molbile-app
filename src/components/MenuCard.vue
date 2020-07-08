<template>
    <q-btn
        stack
        rounded
        color="white"
        class="cardButton"
        text-color="black"
        :to="item.path"
        :item="item"
        :key="item"
    >
        <q-icon center size="56px" :name="item.icon" />
        <div class="buttonLabel">{{ item.label }}</div>
    </q-btn>
</template>

<style scoped>
.cardButton {
    width: 42vw;
    height: 42vw;
    font-size: 16px;
    box-shadow: 0 11px 10px lightgrey;
}
.buttonLabel {
    text-transform: capitalize;
    font-size: 18px;
    margin-top: 10px;
}
</style>

<script>
export default {
    name: 'MenuCard',
    props: {
        item: {
            type: Object,
            required: true
        }
    }
};
</script>
