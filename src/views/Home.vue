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
  
];

export default {
  name: "home",
  data: function () {
    return {
      cards: [
 { title: 'jedan', time: 'an hour ago', url:
'https://picsum.photos/id/1/400/400' },
 { title: 'dva', time: '2 days ago', url:
'https://picsum.photos/id/2/400/400' },
 ]
    };
  },
  components: {
    InstagramCard,
  },
};
</script>
