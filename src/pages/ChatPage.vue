<template>
  <div class="general-wrapper">
    <div class="content-wrapper">
      <NavBar :titulo="'Chat Page'" />

      <div class="chat-wrapper">
        <div class="chat-main">
          <span class="margin-top-row">
            <ChatRow
              v-for="speak in conversation"
              :key="speak"
              :mensaje="speak"
          /></span>
        </div>
        <div class="text-input">
          <q-input
            rounded
            outlined
            bg-color="white"
            class="input-field"
            v-model="mensage"
          />

          <div class="send-wrapper">
            <q-toggle
              color="primary"
              false-value="Fernando"
              true-value="Isra"
              v-model="personChating"
            />
            <q-btn color="primary" class="send-button" @click="sendMessage"
              >SEND</q-btn
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "src/components/NavBar.vue";

import { onMounted, ref } from "vue";
import ChatRow from "src/components/ChatRow.vue";

export default {
  components: {
    NavBar,
    ChatRow,
  },

  setup() {
    // ==== DATA ====
    let personChating = ref("Isra");
    const conversation = ref([]);
    const mensage = ref(undefined);
    // === METHODS ===

    const sendMessage = () => {
      conversation.value.push({
        autor: personChating.value,
        contenido: mensage.value,
        hora: getCurrentDate(),
      });
      mensage.value = "";
    };

    const getCurrentDate = () => {
      const now = new Date();
      const hora = now.getHours();
      const minutos = now.getMinutes();
      return `${hora}:${minutos < 10 ? "0" + minutos : minutos}`;
    };
    // ==== MQTT ====
    // ==== COMPUTED ====
    // ==== OTHER HOOKS ====
    onMounted(() => {
      if (conversation.value.length <= 0) {
        conversation.value.push({
          autor: "Fernando",
          contenido: "Buenas Isra",
          hora: getCurrentDate(),
        });
      }
    });

    return {
      conversation,
      personChating,
      mensage,
      //methods
      sendMessage,
      getCurrentDate,
    };
  },
};
</script>
<style lang="scss" scoped>
.chat-wrapper {
  margin-top: 5em;
  display: grid;
  background-color: $chatBackground;
  grid-template-rows: max-content auto;
  -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 10px;
  .chat-main {
    height: 70vh;
    width: 50vh;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    overflow: auto;
    .margin-top-row {
      align-self: start;
    }
  }
  .chat-main::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }

  .text-input {
    display: grid;
    grid-template-columns: 1fr min-content;
    column-gap: 5px;
    padding: 5px;

    .input-field {
      align-self: end;
      height: 85%;
    }
    .send-wrapper {
      height: auto;
      display: grid;
      .send-button {
        align-self: end;
      }
    }
  }
}
</style>
