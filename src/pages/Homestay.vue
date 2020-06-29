<template>
    <div class="row q-pa-md q-gutter-md justify-center">
        <template v-for="item of items">
            <MenuCard :item="item" :key="item" />
        </template>
    </div>
</template>

<script>
import MenuCard from "../components/MenuCard";
export default {
    name: "Homestay",
    created() {
        this.$emit("updateTitle", "Homestay", "Your Home Sweet Home");
    },
    components: { MenuCard },
    data() {
        return {
            items: [
                {
                    label: "My Homestay",
                    icon: "people",
                    path: "/homestay/myhomestay"
                },
                {
                    label: "Rules",
                    icon: "gavel",
                    path: "/homestay/rules"
                },
                {
                    label: "Information",
                    icon: "info"
                },
                {
                    label: "Feedback",
                    icon: "feedback"
                },
                {
                    label: "House Issue",
                    icon: "build",
                    path: "/homestay/houseissues"
                },
                {
                    label: "Announcement",
                    icon: "announcement"
                }
            ]
        };
    }
};
</script>

<style scoped>
.cardButton {
    width: 42vw;
    height: 42vw;
    font-size: 16px;
}
</style>
