<template>
    <div>
        <!-- <q-item clickable v-ripple>
            <q-item-section side>
                <q-avatar round size="48px">
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label>Mary</q-item-label>
                <q-item-label caption>2 new messages</q-item-label>
            </q-item-section>
            <q-item-section side>
                3 min ago
            </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
            <q-item-section side>
                <q-avatar round size="48px">
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label>Mary</q-item-label>
                <q-item-label caption>2 new messages</q-item-label>
            </q-item-section>
            <q-item-section side>
                3 min ago
            </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
            <q-item-section side>
                <q-avatar round size="48px">
                    <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
            </q-item-section>
            <q-item-section>
                <q-item-label>Mary</q-item-label>
                <q-item-label caption>2 new messages</q-item-label>
            </q-item-section>
            <q-item-section side>
                3 min ago
            </q-item-section>
        </q-item> -->
        <HomestayDetails></HomestayDetails>
        <MemberList></MemberList>
    </div>
</template>

<script>
import HomestayDetails from "../components/HomestayDetails";
import MemberList from "../components/MemberList";
export default {
    name: "MyHomestay",
    components: { HomestayDetails, MemberList },
    created() {
        this.$emit("updateTitle", "My Homestay");
    }
};
</script>

<style scoped></style>
