<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable vue/require-v-for-key -->
<template>
  <div class="mainMusicContainer w-full relative overflow-y-scroll">
    <div class="PlayListContainer pl-7 pr-7">
      <music-list
        v-for="playListData in playListsData"
        :key="playListData.id"
        :title="playListData.category"
        :playLists="playListData.items"
        :showAll="true"
        :description="true"
      >
      </music-list>
    </div>
    <footer-section></footer-section>
  </div>
</template>
<script>
import MusicList from "@/components/MusicList.vue";
import FooterSection from "@/components/mainMusic/FooterSection.vue";
import helpers from "@/helpers/helper.js";
export default {
  name: "MainMusic",
  data() {
    return {
      playListsData: [],
      limit: 10,
      offset: 0,
    };
  },
  components: { MusicList, FooterSection },
  async created() {
    this.playListsData = await helpers.getPlayListsByCategories();
    console.log(this.playListsData);
  },
  methods: {
    async checkScroll(event) {
      if (
        event.target.scrollTop + event.target.clientHeight >=
        event.target.scrollHeight
      ) {
        const morePlayLists = await helpers.getMorePlayLists(
          this.limit,
          this.offset
        );
        this.playListsData.push(...morePlayLists);
      }
    },
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
  position: relative;
  height: 90%;
}
.PlayListContainer {
  max-width: 98%;
  padding-bottom: 100px;
}
.mainMusicContainer::-webkit-scrollbar {
  height: 100%;
  background: none;
  width: 13px;
}
.mainMusicContainer::-webkit-scrollbar-thumb {
  background: #5a5a5a;
}
</style>
