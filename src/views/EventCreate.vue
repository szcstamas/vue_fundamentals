<template>
  <div>Create an Event, {{ userName }}</div>
  <p>This event was created by {{ userName }}</p>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name;
    },
  },
};
</script>

<style lang="scss" scoped></style>
