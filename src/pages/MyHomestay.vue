<template>
    <div>
        <HomestayDetails></HomestayDetails>
        <MemberList></MemberList>
    </div>
</template>

<script>
import HomestayDetails from '../components/HomestayDetails';
import MemberList from '../components/MemberList';
export default {
    name: 'MyHomestay',
    components: { HomestayDetails, MemberList },
    created() {
        this.$emit('updateTitle', 'My Homestay', '', '/homestay');
    }
};
</script>

<style scoped></style>
