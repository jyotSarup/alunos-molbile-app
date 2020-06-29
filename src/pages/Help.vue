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
    name: "Help",
    created() {
        this.$emit("updateTitle", "Help", "You are not alone");
    },
    components: { MenuCard },
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

<style scoped></style>
