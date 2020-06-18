<template>
    <q-page class="flex flex-center">
        <div v-if="ping">Pong<br />{{ ping.pong }}</div>
        <div v-else>
            pong
        </div>
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
                }
            `
        }
    }
};
</script>
