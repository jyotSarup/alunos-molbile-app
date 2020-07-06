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
                    icon: "img:../statics/icons/iconCriticalIssue.png",
                    path: "/help/add-critical-issue"
                },
                {
                    label: "Contact Agency",
                    icon: "img:../statics/icons/iconContactAgency.png",
                    path: "/help/contact-agency"
                },
                {
                    label: "Emergency Call",
                    icon: "img:../statics/icons/iconEmergencyCall.png",
                    path: ""
                },
                {
                    label: "FAQs",
                    icon: "img:../statics/icons/iconFAQ.png",
                    path: "/help/faqs"
                }
            ]
        };
    }
};
</script>

<style scoped></style>
