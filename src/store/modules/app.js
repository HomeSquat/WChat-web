const app = {
  namespaced: true,
  state: {
    isWelcome: true,
    currentMenu: 0, // 0：聊天列表，1：好友列表，2：收藏
    currentChat: {
      id: 1,
      name: "",
      peopleNum: 1
    }
  },
  getters: {
    isWelcome:    state =>  state.isWelcome,
    currentChat:  state =>  state.currentChat,
    currentMenu:  state =>  state.currentMenu
  },
  mutations: {
    SET_CURRENTCHAT: (state, currentChat) => {
      state.currentChat = currentChat;
    },
    SET_CURRENTMENU: (state, currentMenu) => {
      state.currentMenu = currentMenu;
    },
    SET_ISWELCOME: (state, isWelcome) => {
      state.isWelcome = isWelcome
    }
  },
  actions: {
    /**
     * 设置当前聊天信息
     * @param commit
     * @param currentChat
     */
    setCurrentChat({ commit }, currentChat) {
      commit("SET_CURRENTCHAT", currentChat);
    },
    /**
     * 设置当前选择的菜单
     * @param commit
     * @param currentMenu
     */
    setCurrentMenu({ commit }, currentMenu) {
      commit("SET_CURRENTMENU", currentMenu);
    },
    /**
     * 设置是否是欢迎界面
     * @param commit
     * @param isWelcome
     */
    setIsWelcome({ commit }, isWelcome){
      commit("SET_ISWELCOME",isWelcome)
    }
  }
};

export default app;
