const user = {
  namespaced: true,
  state: {
    userInfo: {}, // 用户信息
  },
  getters: {
    userInfo: state => state.userInfo
  },
  mutations: {
  },
  actions: {
  }
};

export default user;
