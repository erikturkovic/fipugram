<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-7">
      <InstagramCard v-for="card in cards" :key="card" :info="card" />
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script>
import InstagramCard from "@/components/InstagramCard.vue";

let cards = [];

cards = [
  "https://picsum.photos/id/1/400/400",
  "https://picsum.photos/id/2/400/400",
  "https://picsum.photos/id/3/400/400",
  "https://picsum.photos/id/4/400/400",
];

export default {
  name: "home",
  data: function () {
    return {
      cards: cards,
    };
  },
  components: {
    InstagramCard,
  },
};
</script>
