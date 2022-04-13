<template>
  <div class="row">
    <div class="col-2"></div>
    <div class="col-7">
      <div class="row">
        <div class="col-8">
          <!-- nova forma za post -->
          <form @submit.prevent="postNewImage" class="form-inline mb-5">
            <div class="form-group">
              <label for="imageUrl">Image URL</label>
              <input
                v-model="newImageUrl"
                type="text"
                class="form-control ml-2"
                placeholder="Enter the image URL"
                id="imageUrl"
              />
            </div>
            <div class="form-group">
              <label for="imageDescription">Description</label>
              <input
                v-model="newImageDescription"
                type="text"
                class="form-control ml-2"
                placeholder="Enter the image description"
                id="imageDescription"
              />
            </div>
            <button type="submit" class="btn btn-primary ml-2">
              Post image
            </button>
          </form>
          <!-- listanje kartica -->
          <instagram-card
            v-for="card in filteredCards"
            :key="card.id"
            :info="card"
          />
        </div>
        <div class="col-4">Sidebar</div>
      </div>

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
import { db } from "@/firebase.js";
import { collection, addDoc } from "firebase/firestore";

// let cards = [];

// cards = [
//   {
//     title: "Slika #1",
//     time: "few minutes ago",
//     url: "https://picsum.photos/id/1/400/400",
//   },
//   {
//     title: "Slika #2",
//     time: "1 hour ago",
//     url: "https://picsum.photos/id/2/400/400",
//   },
//   {
//     title: "Slika #3",
//     time: "few hours ago",
//     url: "https://picsum.photos/id/3/400/400",
//   },
// ];

export default {
  name: "home",
  data: function () {
    return {
      store,
      cards = [],
      newImageDescription: "",
      newImageUrl: "",
    };
  },
  methods: {
    async postNewImage() {
      const imageUrl = this.newImageUrl;
      const imageDescription = this.newImageDescription;
      try {
        const docRef = await addDoc(collection(db, "posts"), {
          url: imageUrl,
          desc: imageDescription,
          email: store.currentUser,
          posted_at: Date.now(),
        });
        console.log("Spremljeno", docRef);
        this.newImageDescription = "";
        this.newImageUrl = "";
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    },
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
