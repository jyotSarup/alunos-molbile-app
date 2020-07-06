<template>
    <div>
        <div class="camera">
            <video
                autoplay
                class="feed"
                ref="video"
                v-if="onVideo"
                id="video"
            ></video>
            <canvas ref="canvas" id="canvas" class="feed"></canvas>
            <q-btn
                round
                class="snap"
                size="24px"
                @click="takePicture"
                v-if="onVideo"
            />
            <!-- <q-btn round class="snapSave" size="24px" v-else />
            <q-btn
                round
                class="snapCancel"
                size="24px"
                icone="cancel"
                v-if="!onVideo"
            >
            </q-btn> -->
        </div>

        <!-- <Gallery v-else /> -->
    </div>
    <!-- <div id="camera">
        <div>
            <video ref="video" id="video" width="100%" height="100%" autoplay />
        </div>
        <div>
            <button id="snap" @click="capture()">Snap Photo</button>
            <input type="file" accept="image/*" capture="camera" />
        </div>

        <canvas ref="canvas" id="canvas" width="100%" height="100%" />
    </div> -->
</template>
<script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>
<script>
import Gallery from './Gallery';
export default {
    name: 'camera',
    data() {
        return {
            onVideo: true,
            video: {},
            canvas: {},
            captures: []
        };
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            if (
                'mediaDevices' in navigator &&
                'getUserMedia' in navigator.mediaDevices
            ) {
                navigator.mediaDevices
                    .getUserMedia({ video: true })
                    .then(stream => {
                        const videoPlayer = document.querySelector('video');
                        videoPlayer.srcObject = stream;
                        videoPlayer.play();
                    });
            } else {
                console.log('Cannot get Media Devices');
            }
        },

        takePicture() {
            console.log('take picture');
            this.onVideo = false;
            let ratio =
                window.innerHeight > window.innerWidth ? 16 / 9 : 9 / 16;
            const picture = document.querySelector('canvas');

            const ctx = picture.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(
                document.querySelector('video'),
                0,
                0,
                picture.width,
                picture.height
            );
            // this.$forceUpdate();
        }
    }
};
</script>
<style lang="scss">
.camera {
    display: block;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    text-align: center;
    position: relative;

    .feed {
        z-index: -1;
        width: 100%;
        height: 100vh;
        display: block;
        margin: 0 auto;
        background-color: #2c3e50;
    }

    .snap {
        z-index: 100;
        position: absolute;
        top: 80%;
        left: 50%;
        transform: translateX(-50%);
        background-color: transparentize($color: white, $amount: 0.25);
        border: 5px solid #171717dc;
        outline: none;
    }

    // .snapCancel {
    //     position: absolute;
    //     top: 80%;
    //     left: 20%;
    //     background-color: transparentize($color: white, $amount: 0.25);
    //     border: 5px solid #171717dc;
    //     outline: none;

    //     .material-icons {
    //         width: 100%;
    //         height: 100%;
    //     }
    // }

    // .snapSave {
    //     position: absolute;
    //     top: 80%;
    //     right: 20%;
    //     background-color: transparentize($color: white, $amount: 0.25);
    //     border: 5px solid #171717dc;
    //     outline: none;
    // }
}
</style>
