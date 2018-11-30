const app = {
  namespaced: true,
  state: {
    currentChat: {
      id: 1,
      name: "",
      peopleNum: 1
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
