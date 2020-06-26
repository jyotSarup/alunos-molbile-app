<template>
    <div>
        <div class="row q-pa-md q-gutter-md justify-center">
            <q-btn
                v-for="item of items"
                :key="item.label"
                :icon="item.icon"
                :label="item.label"
                :to="item.path"
                stack
                color="info"
                class="cardButton"
                rounded
                no-caps
                text-color="dark"
            />
        </div>
    </div>
</template>

<script>
export default {
    name: "Homestay",
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
