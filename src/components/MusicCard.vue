<template>
  <div class="" @mouseover="mouseIn" @mouseleave="mouseOut">
    <router-link
      class="cardMusic flex flex-col justify-center w-min h-min p-4 rounded-lg flex-1 items-center"
      :to="{ name: 'playlistTracks', params: { playListId: playListId } }"
    >
      <div class="relative">
        <img
          class="cardMusicImage rounded-2xl"
          :src="img"
          alt="FotoPerfil"
          width="145px"
          height="145px"
        />
        <transition name="fade">
          <div v-show="showPlayButton" class="playButton">
            <img src="https://img.icons8.com/metro/26/play.png" alt="play" />
          </div>
        </transition>
      </div>

      <div class="h-24 overflow-hidden text-ellipsis mt-3 w-full">
        <p class="title font-bold mb-3 line-clamp-1">{{ title }}</p>
        <p class="description text-base font-normal line-clamp-2">
          {{ description }}
        </p>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "MusicCard",
  props: {
    img: String,
    title: String,
    description: String,
    uri: String,
    playListId: String,
  },
  data: () => {
    return {
      showPlayButton: false,
    };
  },
  methods: {
    mouseIn() {
      this.showPlayButton = true;
    },
    mouseOut() {
      this.showPlayButton = false;
    },
  },
};
</script>
<style scoped>
.cardMusicImage {
  max-width: 145px !important;
  height: 145px;
}
.cardMusic {
  background: #181818;
  max-width: 190px;
  margin-left: 20px;
  margin-right: 20px;
}
.cardMusic:hover {
  background: #282828;
}
.title {
  color: #fff;
  font-size: 1.06rem;
}
.description {
  color: #c2c2c2;
}
.playButton {
  background: #1ed760;
  border-radius: 30px;
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 8px;
  bottom: 8px;
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  bottom: -8px;
}
</style>
