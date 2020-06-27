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
    name: "Help",
    created() {
        this.$emit("updateTitle", "Help", "It's a good day to have a good day");
    },
    data() {
        return {
            items: [
                {
                    label: "Add Critical Issue",
                    icon: "info",
                    path: "/help/add-critical-issue"
                },
                {
                    label: "Contact Agency",
                    icon: "feedback",
                    path: "/help/contact-agency"
                },
                {
                    label: "Emergency Call",
                    icon: "info",
                    path: "/help/emergency-call"
                },
                {
                    label: "FAQs",
                    icon: "info",
                    path: "/help/faqs"
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
