<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <h5>Organized by {{ event.organizer ? event.organizer.name : "" }}</h5>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
  <div v-else>
    <h1>The page you're looking for was not found. (404)</h1>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: ["id"],
  created() {
    this.$store.dispatch("fetchEvent", this.id).catch((error) => {
      this.$router.push({
        name: "ErrorDisplay",
        params: { error: error },
      });
    });
  },
  computed: mapState(["event"]),
};
</script>
