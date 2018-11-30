const app = {
  namespaced: true,
  state: {
    currentChat: {
      name: "",
      id: 1
    }
  },
  getters: {
    currentChat: state => state.currentChat
  },
  mutations: {
    SET_CURRENTCHAT: (state, currentChat) => {
      state.currentChat = currentChat;
    }
  },
  actions: {
    setCurrentChat({ commit }, currentChat) {
      commit("SET_CURRENTCHAT", currentChat);
    }
  }
};

export default app;
