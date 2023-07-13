<template>
  <div
    class="main-wrap"
    :class="{ 'user-style': mensaje.autor !== 'Fernando' }"
  >
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
    // === METHODS ===
    // ==== MQTT ====
    // ==== COMPUTED ====
    // ==== OTHER HOOKS ====
    return {};
  },
};
</script>
<style lang="scss" scoped>
.main-wrap {
  height: min-content;
  margin-top: 5px;

  .message-wrapper {
    display: grid;
    max-width: 90%;
    grid-template-rows: min-content min-content min-content;
    background-color: $memberChat;
    border-radius: 10px;
    padding: 5px;
    white-space: normal;
    word-break: break-word;
    overflow-wrap: break-word;
    .author {
      font-weight: 600;
    }
    .time {
      justify-self: end;
      font-size: 70%;
    }
  }
}
.user-style {
  display: grid;
  justify-items: end;
  .message-wrapper {
    background-color: $userChat;
    height: auto;
  }
}
</style>
