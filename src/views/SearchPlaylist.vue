<template>
  <div class="mainContainer w-full relative overflow-y-scroll">
    <div class="PlayListContainer flex flex-wrap pl-7 pr-7">
      <music-list
        :title="''"
        :show-all="false"
        :play-lists="playListData"
        :description="false"
      ></music-list>
    </div>
  </div>
</template>
<script>
import MusicList from "@/components/MusicList.vue";
import helper from "@/helpers/helper.js";
export default {
  name: "SearchPlaylist",
  data() {
    return {
      playListData: [],
    };
  },
  components: {
    MusicList,
  },
  async created() {
    this.playListData = await helper.getPlayLists(this.$route.params.words);
  },
  async beforeRouteUpdate(to) {
    console.log(to.params.words);
    if (to && to.params) {
      this.playListData = await helper.getPlayLists(to.params.words);
      console.log(this.playListData);
    }
  },
};
</script>
<style scoped>
.mainContainer {
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
.mainContainer::-webkit-scrollbar {
  height: 100%;
  background: none;
  width: 13px;
}
.mainContainer::-webkit-scrollbar-thumb {
  background: #5a5a5a;
}
</style>
