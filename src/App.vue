<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>
<style lang="scss">
.general-wrapper {
  background-color: #5b8e7d;
  height: 100vh;
  display: grid;
  padding: 0 1vw;
  .content-wrapper {
    display: grid;
    grid-template-rows: max-content min-content;
    justify-items: center;
    align-items: center;
  }
}
</style>
