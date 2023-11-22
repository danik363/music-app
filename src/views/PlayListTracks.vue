<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div
    class="flex w-full max-h-screen h-full mainMusicContainer pl-7 pr-7 relative"
  >
    <div class="listMusics flex flex-col w-full h-auto overflow-y-scroll">
      <div class="headerList flex w-full">
        <p class="text-white font-bold">Titulo</p>
        <p class="text-white font-bold">Album</p>
      </div>
      <a
        v-for="(item, index) in tracks"
        :key="item.track.id"
        class="musicRow flex items-center"
        :href="item.track.uri"
      >
        {{ index }}
        <img
          :src="item.track.album.images[0].url"
          :alt="item.track.name"
          width="60px"
          height="60px"
        />
        <div class="details">
          <p class="line-clamp-1 text-white font-bold">{{ item.track.name }}</p>
          <div class="artistsRow flex">
            <p
              class="line-clamp-2 text-white"
              v-for="artist in item.track.artists"
              :key="artist.id"
            >
              {{ artist.name }}
            </p>
          </div>
        </div>
        <div class="albumTitleContainer">
          <p class="albumTitle text-white">{{ item.track.album.name }}</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
import spotifyApi from "@/services/spotify-api.js";
export default {
  name: "PlayListTracks",
  data() {
    return {
      tracks: [],
    };
  },
  async created() {
    console.log(this.$route.params.playListId);
    if (this.$route && this.$route.params) {
      this.tracks = await spotifyApi.getTracksForPlayList(
        this.$route.params.playListId
      );
      this.tracks = this.tracks.items;
    }
  },
};
</script>
<style scoped>
.mainMusicContainer {
  background: rgb(33, 33, 33);
  background: linear-gradient(
    180deg,
    rgba(33, 33, 33, 1) 0%,
    rgba(25, 25, 25, 1) 47%,
    rgba(18, 18, 18, 1) 100%
  );
  height: 90%;
}
.musicRow {
  width: 100%;
  min-height: 100px;
  background: #03001c; /* fallback for old browsers */

  margin-bottom: 20px;
  border-radius: 10px;
  padding: 20px;
}
.musicRow .details {
  width: 60%;
  margin-left: 20px;
}
.musicRow .details .albumTitleContainer {
  width: 40%;
}
.artistsRow p::after {
  content: ", ";
}
.artistsRow p:last-child::after {
  content: " ";
}
.headerList {
  padding-bottom: 20px;
  position: sticky;
  top: 0;
  background: #212121;
  z-index: 100;
}
.headerList p {
  font-size: 1.2rem;
}
.headerList p:first-child {
  width: 20%;
  text-align: start;
  padding-left: 30px;
}
.headerList p:nth-child(2) {
  width: 47%;
  text-align: right;
  padding-left: 10px;
}

.listMusics::-webkit-scrollbar {
  height: 100%;
  background: none;
  width: 13px;
}
.listMusics::-webkit-scrollbar-thumb {
  background: #5a5a5a;
}
</style>
