<template>
     <div class="q-pa-md q-gutter-sm">
                <q-card class="my-feed-card">
                <q-card-section horizontal>
                    <q-card-section class="col-2 flex ">
                        <q-icon name="new_releases" class="text-accent" style="font-size: 32px; margin:auto"/>
                    </q-card-section>
                    <q-card-section class="col-10 flex ">
                        <div class="full-width row no-wrap justify-between items-center content-center" style="width=100%">
                            <span  class="feedTitle">Covid-19 Guidelines</span>
                            <small  class="q-mt-sm q-mb-xs text-grey" style=" float:right">2 months ago</small>
                        </div>
                        
                        <div class="text-caption text-grey full-width" style="line-height:1em; height:2em; overflow:hidden; margin-top:1em; padding-right:1em; ">
                            All the family members are requested to follow these guidelines to stay safe and healthy.
                                1. sanitize the space you use in common room
                                2. Wash your hands when you enter home
                                3. Wear masks when you leave home
                                4. Dispose masks and gloves after you finish using them.
                                5. Clean your own utensils on time
                            Let us take care of each other and stay safe.
                        </div>
                        <span class="full-width">...</span>
                        <div>
                        <q-btn
                        
                        flat
                        label="See More"
                        style="transform:translateX(-16px)"
                        color="primary"
                        align="left"
                        @click="persistent = true"
                        no-caps
                    ></q-btn>
                    </div>
                    <q-dialog
                        v-model="persistent"
                        persistent
                        transition-show="scale"
                        transition-hide="scale"
                    >
                        <q-card class="bg-white text-grey" style="width: 300px">
                            <q-card-section align="center">
                                <q-icon name="new_releases" class="text-accent" style="font-size: 32px; margin:auto"/>    
                            </q-card-section>

                            <q-card-section class="q-pt-none">
                                All the family members are requested to follow these guidelines to stay safe and healthy.<br/>
                                1. sanitize the space you use in common room<br/>
                                2. Wash your hands when you enter home<br/>
                                3. Wear masks when you leave home<br/>
                                4. Dispose masks and gloves after you finish using them.<br/>
                                5. Clean your own utensils on time<br/>
                            Let us take care of each other and stay safe.
                            </q-card-section>

                            <q-card-actions
                                align="right"
                                class="bg-white text-teal"
                            >
                                <q-btn flat label="OK" class="text-primary" v-close-popup></q-btn>
                            </q-card-actions>
                        </q-card>
                    </q-dialog>
                    
                    </q-card-section>
                </q-card-section>
            </q-card>
        </div>

</template>

<script>
export default {
    data() {
        return {
            persistent: false
        };
    },
}
</script>

<style scoped>
    .q-card--bordered {
    border: none !important;
}

.my-feed-card {
    border-radius: 28px;
    box-shadow: 0 11px 10px lightgrey;
}
.item_title {
    display: flex;
    justify-content: space-between;
}
 .feedTitle {
            font-size: 14px;
    }
</style>