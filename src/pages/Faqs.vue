<template>
    <transition-group
        appear
        enter-active-class="animated fadeInRight"
        leave-active-class="animated fadeInLeft"
    >
        <div key="faqs-container" class="q-pa-md" style="max-width: 350px">
            <q-list key="faq-categories" bordered>
                <q-expansion-item
                    group="somegroup"
                    icon="explore"
                    label="First"
                    header-class="text-primary"
                >
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis
                            modi facere maiores architecto suscipit iste eveniet
                            doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-separator />

                <q-expansion-item
                    group="somegroup"
                    icon="perm_identity"
                    label="Second"
                    header-class="text-teal"
                >
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis
                            modi facere maiores architecto suscipit iste eveniet
                            doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-separator />

                <q-expansion-item
                    group="somegroup"
                    icon="shopping_cart"
                    label="Third"
                    header-class="text-purple"
                >
                    <q-card>
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis
                            modi facere maiores architecto suscipit iste eveniet
                            doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>

                <q-separator />

                <q-expansion-item
                    group="somegroup"
                    icon="bluetooth"
                    label="Fourth"
                    header-class="bg-teal text-white"
                    expand-icon-class="text-white"
                >
                    <q-card class="bg-teal-2">
                        <q-card-section>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Quidem, eius reprehenderit eos corrupti
                            commodi magni quaerat ex numquam, dolorum officiis
                            modi facere maiores architecto suscipit iste eveniet
                            doloribus ullam aliquid.
                        </q-card-section>
                    </q-card>
                </q-expansion-item>
            </q-list>
        </div>
    </transition-group>
</template>

<script>
export default {
    name: "Faqs"
};
</script>
