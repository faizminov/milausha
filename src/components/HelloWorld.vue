<script setup>
defineProps({
  msg: String,
});
</script>

<template>
  <div class="greetings">
    <h2 class="green">{{ msg }}</h2>
    <h3>You’ve successfully created your first Vue project.</h3>
  </div>
</template>

<style scoped>
h2 {
  font-weight: 500;
  font-size: 1.2rem;
  color: #42b883; /* Vue Green */
}
h3 {
  font-size: 1rem;
  color: #888;
}
</style>
