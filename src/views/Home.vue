<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-7">
      <InstagramCard
        v-for="card in filteredCards"
        :key="card.url"
        :info="card"
      />
    </div>
    <div class="col-3">Sidebar</div>
  </div>
</template>

<script>
import InstagramCard from "@/components/InstagramCard.vue";
import store from "@/store.js";

let cards = [];

cards = [
  {
    title: "Slika #1",
    time: "few minutes ago",
    url: "https://picsum.photos/id/1/400/400",
  },
  {
    title: "Slika #2",
    time: "1 hour ago",
    url: "https://picsum.photos/id/2/400/400",
  },
  {
    title: "Slika #3",
    time: "few hours ago",
    url: "https://picsum.photos/id/3/400/400",
  },
];

export default {
  name: "home",
  data: function () {
    return {
      store,
      cards,
    };
  },
  computed: {
    filteredCards() {
      let termin = this.store.searchTerm;
      return this.cards.filter((card)=> card.title.includes(termin));
    },
  },
  components: {
    InstagramCard,
  },
};
</script>
