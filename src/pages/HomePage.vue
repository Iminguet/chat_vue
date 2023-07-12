<template>
  <div>Home Page</div>

  <router-link to="/chat">Ir a chat</router-link>
</template>
<script>
export default {
  setup() {
    // ==== DATA ====
    // === METHODS ===

    const irAChatPage = () => {};
    // ==== MQTT ====
    // ==== COMPUTED ====
    // ==== OTHER HOOKS ====
    return { irAChatPage };
  },
};
</script>
<style lang="scss" scoped></style>
