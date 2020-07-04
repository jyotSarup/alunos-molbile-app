<template>
    <q-icon name="notifications_none">
        <!-- <q-badge color="red" floating v-if="notify"></q-badge> -->
        <div class="badgeStyle" v-if="notify"></div>
    </q-icon>
</template>

<script>
export default {
    name: "Notification",
    data() {
        return {
            notify: "1"
        };
    }
};
</script>
<style lang="scss">
.badgeStyle {
    position: absolute;
    top: -1px !important;
    right: -0.1px !important;
    background-color: red;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 5px;
}
</style>
