<template lang="pug">
.quick-start
    h1.text-center.heading.nio-h1.text-primary-darker Start Cleaning Up Your Data
    p.text-center.heading.nio-p.text-primary-dark We'll look for unused datasets and help you purge them.
    v-btn(primary :style="{left: '50%', transform:'translateX(-50%)'}" v-on:click="startCleanup") Start Cleanup
</template>

<script>
export default {
  methods: {
    startCleanup() {
      this.$router.push('/cleanup');
    }
  }
}
</script>

<style scoped>
.quick-start {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>