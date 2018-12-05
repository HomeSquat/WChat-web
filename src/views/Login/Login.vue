<template>
  <div class="login">
    <AppList class="appList"></AppList>
    <WChatLogin v-if="openWChatLogin" class="wchatLogin"></WChatLogin>
  </div>
</template>

<script type="application/javascript">
import AppList from "./components/AppList";
import WChatLogin from "./components/WChatLogin";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Login",
  props: {},
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapGetters("App", {
      openWChatLogin: "openWChatLogin"
    })
  },
  methods: {
    ...mapActions("App", {
      setOpenWChatLogin: "setOpenWChatLogin"
    })
  },
  components: {
    AppList,
    WChatLogin
  }
};
</script>

<style lang="stylus" scoped>
  .login
    width: 100%
    height: 100%
    background: url("./../../assets/images/bg.jpg") 0 0 /100% 100% no-repeat
    .appList
      width: 100%
      height: 100%
    .wchatLogin
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
</style>
