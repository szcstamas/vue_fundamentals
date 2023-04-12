<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import { mapState } from "vuex";

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  created() {
    this.$store.dispatch("fetchEvents");
  },
  computed: mapState(["events"]),
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
