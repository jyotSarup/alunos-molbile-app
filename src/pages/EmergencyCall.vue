<template>
    <transition-group
        appear
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeInLeft"
    >
        <div key="calls-container">
            <q-btn to="/help" label="Back" />
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
    </transition-group>
</template>

<script>
export default {
    name: "EmergencyCall",
    data() {
        return {
            items: [
                {
                    label: "Call Police",
                    icon: "info"
                },
                {
                    label: "Call Ambulance",
                    icon: "feedback"
                },
                {
                    label: "Call Fire Brigade",
                    icon: "info"
                },
                {
                    label: "Call a Cab",
                    icon: "car"
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
