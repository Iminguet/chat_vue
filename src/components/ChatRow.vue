<template>
  <div class="main-wrap" :class="{ 'user-style': propId }">
    <div class="message-wrapper">
      <span class="author">{{ mensaje.autor }}</span>
      <span class="main-message"> {{ mensaje.contenido }} </span>
      <span class="time">{{ mensaje.hora }}</span>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    mensaje: Object,
  },
  setup() {
    // ==== DATA ====

    let propId = ref("6");
    // === METHODS ===
    // ==== MQTT ====
    // ==== COMPUTED ====
    // ==== OTHER HOOKS ====
    return { propId };
  },
};
</script>
<style lang="scss" scoped>
.main-wrap {
  .message-wrapper {
    display: grid;
    max-width: 90%;
    grid-template-rows: min-content auto min-content;
    background-color: $memberChat;
    border-radius: 10px;
    padding: 5px;
    .time {
      justify-self: end;
    }
  }
}
.user-style {
  display: grid;
  justify-items: end;
  .message-wrapper {
    background-color: $userChat;
  }
}
</style>
