<template>
  <div class="w-full">
    <div class="header flex justify-between w-full">
      <h2 class="playlistTitle text-white font-semibold">
        {{ title }}
      </h2>
      <a
        class="playlistMore font-semibold no-underline hover:underline"
        v-show="showAll"
        >Mostrar todos</a
      >
    </div>
    <ul
      :class="[
        'cardMusicList flex flex-row w-full overflow-x-hidden',
        { cardMusicListOneRow: showAll },
      ]"
    >
      <music-card
        v-for="pl in playLists"
        :key="pl.name"
        :img="pl.images[0].url"
        :title="pl.name"
        :description="pl.owner.display_name"
        :uri="pl.uri"
        :play-list-id="pl.id"
      ></music-card>
    </ul>
  </div>
</template>
<script>
import MusicCard from "@/components/MusicCard.vue";
export default {
  name: "MusicList",
  components: {
    MusicCard,
  },
  props: {
    showAll: Boolean,
    title: String,
    playLists: [],
    description: Boolean,
  },
};
</script>
<style scoped>
.playlistTitle {
  font-size: 1.6rem;
}
.header .playlistMore {
  color: #b3b3b3;
}
.cardMusicList {
  flex-wrap: wrap;
  row-gap: 30px;
}
.cardMusicListOneRow {
  height: 285px;
  overflow: hidden;
  margin-bottom: 20px;
}
</style>
