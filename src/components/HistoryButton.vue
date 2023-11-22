<template>
  <div class="w-8 h-8 bg-black rounded-full flex justify-center items-center">
    <a class="no-underline text-white" href="#">
      <img width="20px" height="20px" :src="srcImg" alt="history" />
    </a>
  </div>
</template>
<script>
export default {
  name: "HistoryButton",
  props: {
    srcImg: String,
  },
};
</script>
