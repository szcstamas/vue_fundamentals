<template>
  <div>Create an Event, {{ user.id }}</div>
  <p>This event was created by {{ user.name }}</p>
  <p>There are {{ catLength }} categories</p>
  <p>{{ getEventById(2) }}</p>
  <ul>
    <li v-for="cat in categories" :key="cat">{{ cat }}</li>
  </ul>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    catLength() {
      return this.$store.getters.catLength;
    },
    ...mapGetters(["getEventById"]),
    ...mapState(["user", "categories"]),
  },
};
</script>

<style lang="scss" scoped></style>
