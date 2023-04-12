<template>
  <div class="contact"><h1>Contact us</h1></div>
  <p>The number of categories: {{ getCatLength }}</p>
  <p>
    The first category is <strong>{{ getFirstCategoryFromArray }}</strong>
  </p>
  <input type="number" v-model.number="incrementBy" />
  <button @click="incrementCount">INCREMENT</button>
  <p>Count is {{ getCount }}</p>
  <ul>
    <li v-for="cat in categories">{{ cat }}</li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      incrementBy: 1,
    };
  },
  methods: {
    incrementCount() {
      this.$store.dispatch("updateCount", this.incrementBy);
    },
  },
  computed: {
    getCatLength() {
      return this.$store.getters.catLength;
    },
    getFirstCategoryFromArray() {
      return this.$store.getters.firstCategory;
    },
    getCount() {
      return this.$store.state.count;
    },
    ...mapState(["categories"]),
  },
};
</script>
