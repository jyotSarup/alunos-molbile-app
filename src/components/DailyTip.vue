<template>
    <q-card
        flat
        class="my-card-tip"
        style="background: white; border-radius:20px  ; "
    >
        <q-card-section>
            <div class="tipHeading">Tip of the day</div>
            <span class="tipQuote"
                >Its always nice to say 'Thank You' after having dinner with
                your family.</span
            >
        </q-card-section>
    </q-card>
</template>

<script>
export default {};
</script>

<style>
.my-card-tip {
    width: 100%;
    border: 1px solid #01e8f8;
}

.tipHeading {
    font-size: 12 !important;
    font-weight: bold !important;
}
.tipQuote {
    font-size: 9;
    color: darkgrey;
}
</style>
