<template>
    <div class="event-card">
      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h4>{{ event.title }}</h4>
      <p>Created by {{ event.organizer.name }}</p>
    </div>
</template>

<script>
export default {
  name: "EventCard",
  props: {
    event: Object,
    required: true,
  },
};
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0px 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  text-decoration: none;
  color: #2c3e50;
}
</style>
