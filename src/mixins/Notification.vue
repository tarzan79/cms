<template>
  <div v-if="errors">
    <div v-for="error in errors" v-bind:key="error">
      <div class="error-form">
        <p>erreur: {{ error }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notif",
  props: ["errors"]
};
</script>

<style lang="scss" scoped>
.error-form p {
  color: red;
}
</style>
