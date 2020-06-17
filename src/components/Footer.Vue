<template>
    <q-footer bordered class="bg-white text-primary">
    
        <q-tabs
            no-caps
            active-color="primary"
            indicator-color="transparent"
            class="text-grey"
            v-model="tab"
            dense
            align="justify"
        >
            <q-tab name="feed" icon="calendar_today" label="Feed" />
            <q-tab name="homestay" icon="home" label="Homestay" />
            <q-tab name="help" icon="help_outline" label="Help" />
            <q-tab name="profile" icon="perm_identity" label="Profile" />
        </q-tabs>
    </q-footer>
</template>

<style></style>

<script>
export default {
    name: "Footer",
    data() {
        return {
            tab: "images"
        };
    }
};
</script>
