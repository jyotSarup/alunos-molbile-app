<template>
    <q-footer bordered class="bg-white text-primary">
        <q-btn label="Save" class="savebtn" text-color="white" @click="saveProfile"/>
    </q-footer>
</template>
<script>
import { EventBus } from "../services/event-bus.js";
export default {
    name: "savefooter",
    data() {
        return {};
    },
    methods: {
        saveProfile() {
        EventBus.$emit("saveProfile")
      }
    }
};
</script>
<style lang="scss">
.savebtn {
    width: 100%;
    height: 9vh;
    background-image: linear-gradient(180deg, #01c0fb 30%, #01e8f8 90%);
}
</style>
