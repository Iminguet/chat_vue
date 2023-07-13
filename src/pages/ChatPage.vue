<template>
  <div class="general-wrapper">
    <div class="content-wrapper">
      <NavBar :titulo="'Chat Page'" />

      <div class="chat-wrapper">
        <div class="chat-main"></div>
        <div class="text-input">
          <q-input
            rounded
            outlined
            bg-color="white"
            class="input-field"
            v-model="message"
            @input="adjustContainerHeight"
          />

          <div class="send-wrapper">
            <q-btn color="primary" class="send-button">SEND</q-btn>
          </div>
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
.chat-wrapper {
  margin-top: 5em;
  display: grid;
  background-color: #eaf7cf;
  grid-template-rows: max-content auto;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  .chat-main {
    min-height: 70vh;
    min-width: 50vh;
  }

  .text-input {
    display: grid;
    grid-template-columns: 1fr min-content;
    column-gap: 5px;
    padding: 5px;
    height: auto;

    .input-field {
      align-self: end;
    }
    .send-wrapper {
      height: 8vh;
      display: grid;
      .send-button {
        align-self: end;
      }
    }
  }
}
</style>
