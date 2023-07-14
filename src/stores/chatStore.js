import { defineStore } from "pinia";
//-------------------------------------> id
export const useChatStore = defineStore("chatStore", {
  state: () => {
    return { conversation: [] };
  },

  // getters: COMPUTADAS
  actions: {
    addMessage(message) {
      this.conversation.push(message);
    },
  },
});
