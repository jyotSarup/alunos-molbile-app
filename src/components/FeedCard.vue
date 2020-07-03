<template>
    <div class="q-pa-md row items-start q-gutter-md" style=" padding:0 ; margin-bottom : 16px ; border:none;  ">
        <q-card class="my-feed-card"   >
            <q-card-section horizontal>
            <q-card-section class="col-5 flex flex-center">
                    <q-img
                        src="https://cdn.quasar.dev/img/parallax2.jpg"
                    />
                </q-card-section>
                <q-card-section class="q-pt-xs">
                    <div class="text-h5 q-mt-sm q-mb-xs">Title</div>
                    <div class="text-caption text-grey">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </div>
                </q-card-section>

                
            </q-card-section>

           

            <q-card-actions>
                <q-btn flat round icon="event" />
                <q-btn flat>
                    7:30PM
                </q-btn>
                <q-btn flat color="primary">
                    Reserve
                </q-btn>
            </q-card-actions>
             <q-separator />
        </q-card>
    </div>
</template>

<style scoped >
.q-card--bordered {
    border: none !important;
}

.my-feed-card {
    border-radius:20px;
}
</style>

<script>
export default {
    name: "FeedCard"
};
</script>
