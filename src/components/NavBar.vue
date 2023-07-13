<template>
  <div class="nav-bar">
    <div class="tittle-wrapper elements-styling">
      <span class="titulo">{{ titulo }}</span>
    </div>
    <div class="links-wrapper">
      <router-link to="/"
        ><span class="elements-styling link-style">Home</span></router-link
      >
      <router-link to="/chat"
        ><span class="elements-styling link-style">Chat</span></router-link
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    titulo: String,
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
.nav-bar {
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  background-color: #02394a;
  border-radius: 0 0 10px 10px;
  .elements-styling {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
  }

  .tittle-wrapper {
    justify-self: start;
    background-color: white;
    color: #02394a;
  }
  .links-wrapper {
    justify-self: end;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    .link-style {
      cursor: pointer;
      background-color: white;
      color: #02394a;
    }
  }
}
</style>
