<template>
  <div class="modal fade" id="exampleModal" ref="playerModal" @click.self="audioStop"
  @keyup.self="audioStop"
  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content bg-transparent border-0">
        <div class="bg-light episode-player ms-auto mb-2 d-flex">
          <button type="button" class="border-0 d-none d-md-block m-auto" @click="audioStop"
          data-bs-dismiss="modal" aria-label="Close">
            <i class="bi bi-x-lg fs-4 text-dark"></i>
          </button>
          <button type="button" class="border-0 d-block d-md-none m-auto" @click="audioStop"
          data-bs-dismiss="modal" aria-label="Close">
            <i class="bi bi-x-lg fs-5 text-dark"></i>
          </button>
        </div>
      <img :src="product.imageUrl" :alt="product.title" class="img-fluid mb-2">
      <audio :src="product.audition" ref="audio"></audio>
      <div class="d-flex">
        <!-- 停止 -->
        <div class="bg-white me-2 p-2" @click.stop="audioStop">
          <i class="bi bi-stop-fill fs-2 lh-1"></i>
        </div>
        <!-- 播放 -->
        <div class="bg-white me-2 p-2" @click.stop="audioPlay"
        v-if="isPlaying === false">
          <i class="bi bi-play-fill fs-2 lh-1"></i>
        </div>
        <!-- 暫停 -->
        <div class="bg-white me-2 p-2" @click.stop="audioPause"
        v-if="isPlaying === true">
          <i class="bi bi-pause-fill fs-2 lh-1"></i>
        </div>
        <!-- 時間軸 -->
        <div class="time-line flex-grow-1 me-2" ref="audioBar"
        @mousedown.stop="adjustAudioTime" @mouseup.stop="endAdjustAudioTime">
          <div class="time-filled"
          ref="timeLinePosition"></div>
        </div>
        <!-- 聲音大小 -->
        <div class="bg-white me-2 p-2 d-none d-md-block" @click.stop="volumeDown">
          <i class="bi bi-volume-down-fill fs-2 lh-1"></i>
        </div>
        <div class="bg-white p-2 d-none d-md-block" @click.stop="volumeUp">
          <i class="bi bi-volume-up-fill fs-2 lh-1"></i>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from '../../node_modules/bootstrap/js/dist/modal';

export default {
  data() {
    return {
      playerModal: '',
      episodeAudio: '',
      isPlaying: false,
      timeLinePosition: '',
    };
  },
  props: ['product'],
  methods: {
    openModal() {
      this.playerModal.show();
    },
    audioPlay() {
      this.isPlaying = true;
      this.episodeAudio.play();
    },
    audioPause() {
      this.isPlaying = false;
      this.episodeAudio.pause();
    },
    audioStop() {
      this.isPlaying = false;
      this.episodeAudio.pause();
      this.episodeAudio.currentTime = 0;
    },
    volumeUp() {
      this.episodeAudio.volume += 0.1;
    },
    volumeDown() {
      this.episodeAudio.volume -= 0.1;
    },
    timeProgress() {
      const episodeDuration = this.episodeAudio.duration;
      const currentPosition = this.episodeAudio.currentTime;
      const currentProgress = (currentPosition / episodeDuration) * 100;
      this.timeLinePosition.style.flexBasis = `${currentProgress}%`;
    },
    audioEventListener() {
      this.$refs.audio.addEventListener('timeupdate', this.timeProgress);
    },
    adjustAudioTime() {
      this.$refs.audioBar.addEventListener('mousedown', this.dragTimeBar);
      this.$refs.audioBar.addEventListener('mousemove', this.dragTimeBar);
    },
    endAdjustAudioTime() {
      this.$refs.audioBar.removeEventListener('mousemove', this.dragTimeBar);
    },
    dragTimeBar(e) {
      const videoDuration = this.episodeAudio.duration;
      const mouseX = e.offsetX;
      const progressBarWidth = this.$refs.audioBar.offsetWidth;
      const videoProgress = mouseX / progressBarWidth;
      const newPosition = videoDuration * videoProgress;
      this.episodeAudio.currentTime = newPosition;
    },
  },
  watch: {
    product() {
      this.episodeAudio = this.$refs.audio;
    },
  },
  mounted() {
    this.playerModal = new Modal(this.$refs.playerModal);
    this.audioEventListener();
    this.timeLinePosition = this.$refs.timeLinePosition;
  },
};
</script>

<style lang="scss" scoped>
  .episode-player {
    width: 40px;
    height: 40px;
  }
  .time-line {
    flex:10;
    position: relative;
    display:flex;
    flex-basis:100%;
    transition:height 0.3s;
    background:white;
    cursor:ew-resize;
  }
  .time-filled {
    width:50%;
    background:#be1e2d;
    flex:0;
    flex-basis:0%;
  }
</style>
