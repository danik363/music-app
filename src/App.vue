<template>
  <div id="app" class="w-screen h-screen overflow-hidden">
    <div class="flex flex-col w-full h-full">
      <navegation-bar></navegation-bar>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
export default {
  name: "App",
  data() {
    return {
      words: "",
    };
  },
  components: {
    "navegation-bar": NavigationBar,
  },
  methods: {
    search(words) {
      this.words = words;
      console.log(this.words);
    },
  },
};
</script>

<style></style>
