<template>
  <div>Create an Event</div>
  <form>
    <label>Select a category</label>
    <select v-model="event.category">
      <option v-for="cat in categories" :key="cat">{{ cat }}</option>
    </select>
    <h3>Name & describe your event</h3>
    <div class="field">
      <label>Title</label>
      <input
        v-model="event.title"
        type="text"
        placeholder="Add an event title"
      />
    </div>
    <div class="field">
      <label>Description</label>
      <input
        v-model="event.description"
        type="text"
        placeholder="Add a description"
      />
    </div>
    <h3>Where is your event?</h3>
    <div class="field">
      <label>Location</label>
      <input
        v-model="event.location"
        type="text"
        placeholder="Add a location"
      />
    </div>
    <h3>When is your event?</h3>
    <div class="field">
      <label>Date</label>
      <datepicker v-model="event.date" placeholder="Select a date" />
    </div>
    <div class="field">
      <label>Select a time</label>
      <select v-model="event.time">
        <option v-for="time in times" :key="time">{{ time }}</option>
      </select>
    </div>
    <input type="submit" class="button -fill-gradient" value="Submit" />
  </form>
</template>

<script>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: {
    VueDatePicker,
  },
};
</script>

<style lang="scss" scoped>
.field {
  margin-bottom: 20px;
}
</style>
