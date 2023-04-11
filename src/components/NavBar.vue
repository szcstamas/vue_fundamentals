<template>
  <nav>
    <router-link :to="{ name: 'EventList' }">Events</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Contact' }">Contact</router-link> |
    <router-link :to="{ name: 'EventCreate' }">Create</router-link>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    event: Object,
    required: true,
  },
};
</script>

<style scoped>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
