<template>
  <div class="events">
    <h1>Events for {{ user.name }}</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <div class="flex">
      <template v-if="page != 1">
        <router-link
          :to="{ name: 'EventList', query: { page: page - 1 } }"
          rel="prev"
          >Prev page</router-link
        >
        |
      </template>
      <router-link
        :to="{ name: 'EventList', query: { page: page + 1 } }"
        rel="next"
        >Next page</router-link
      >
    </div>
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
    this.$store
      .dispatch("fetchEvents", {
        perPage: 3,
        page: this.page,
      })
      .catch((error) => {
        this.$router.push({
          name: "ErrorDisplay",
          params: { error: error },
        });
      });
  },
  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState(["events", "user"]),
  },
};
</script>

<style lang="css" scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
.flex a {
  color: #272727;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  text-decoration: none;
}
</style>
