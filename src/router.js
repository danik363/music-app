import Vue from "vue";
import VueRouter from "vue-router";
import SearchMusic from "@/views/SearchMusic.vue";
import MainMusic from "@/views/MainMusic.vue";
import SearchPlaylists from "@/views/SearchPlaylist.vue";
import PlayListTracks from "@/views/PlayListTracks";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: MainMusic, name: "Home" },
  { path: "/searchMusic/:words", component: SearchMusic, name: "search-music" },
  {
    path: "/searchPlaylist/:words",
    component: SearchPlaylists,
    name: "search-playlist",
  },
  {
    path: "/searchArtist/:words",
    component: SearchMusic,
    name: "searchArtist",
  },
  {
    path: "/playList/tracks/:playListId",
    component: PlayListTracks,
    name: "playlistTracks",
  },
];
const router = new VueRouter({
  routes,
  mode: "history",
});
export default router;
