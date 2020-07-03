<template>
    <q-icon name="notifications_none">
        <q-badge color="red" floating>{{ notify }}</q-badge>
    </q-icon>
</template>

<script>
export default {
    name: "Notification",
    data() {
        return {
            notify: 4
        };
    }
};
</script>
<style lang="scss"></style>
