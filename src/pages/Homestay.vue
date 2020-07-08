<template>
    <div class="row q-pa-md q-gutter-md justify-center">
        <template v-for="item of items">
            <MenuCard :item="item" :key="item" />
        </template>
    </div>
</template>

<script>
import MenuCard from '../components/MenuCard';
export default {
    name: 'Homestay',
    created() {
        this.$emit('updateTitle', 'Homestay', 'Your Home Sweet Home');
    },
    components: { MenuCard },
    data() {
        return {
            items: [
                {
                    label: 'My Homestay',
                    icon: 'img:../statics/icons/iconMyHomestay.png',
                    path: '/myhomestay'
                },
                {
                    label: 'Rules',
                    icon: 'img:../statics/icons/iconRules.png',
                    path: '/homestay/rules'
                },
                {
                    label: 'Feedback',
                    icon: 'img:../statics/icons/iconFeedback.png'
                },
                {
                    label: 'House Issues',
                    icon: 'img:../statics/icons/iconHouseIssues.png',
                    path: '/houseissues'
                },
                {
                    label: 'Announcement',
                    icon: 'img:../statics/icons/iconAnnouncements.png'
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
