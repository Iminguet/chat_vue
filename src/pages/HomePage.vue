<template>
  <div class="general-wrapper">
    <div class="content-wrapper">
      <NavBar :titulo="'HOME'" />
      <div class="logo-wrapper">
        <div>
          <img src="../assets/LOGOTIPO.png" alt="company logo" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "src/components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  setup() {
    // ==== DATA ====
    // === METHODS ===

    // ==== MQTT ====
    // ==== COMPUTED ====
    // ==== OTHER HOOKS ====
    return {};
  },
};
</script>
<style lang="scss" scoped>
.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
