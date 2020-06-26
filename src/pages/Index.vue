<template>
    <q-page class="flex flex-center">
        <div v-if="ping">Pong<br />{{ ping.pong }}</div>
        <div v-else>
            pong
        </div>
        <feed style="width : 90%"></feed>
    </q-page>
</template>

<script>
import gql from "graphql-tag";

export default {
    name: "PageIndex",
    data() {
        return {
            ping: null
        };
    },
    apollo: {
        ping: {
            query: gql`
                query {
                    ping {
                        pong
                    }
                }`
            }
        },
        components: {
        'feed' : require('./Feed.vue').default
    }
};
</script>
