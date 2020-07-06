<template>
    <div class="picture">
        <canvas></canvas>
    </div>
</template>

<script>
export default {
    name: 'gallery'
};
</script>

<style lang="scss">
.picture {
    display: block;
    width: 100vw;
    height: 100vh;

    box-sizing: border-box;

    canvas {
        display: block;
        width: 100%;

        margin: 0 auto;
    }
}
</style>
