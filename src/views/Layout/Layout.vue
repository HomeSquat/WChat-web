<template>
  <div class="layout">
    <div class="layout-left">
      <leftMenu></leftMenu>
    </div>
    <div class="layout-right">
      <div class="list">
        <Search></Search>
        <ChatList v-if="currentMenu===0"></ChatList>
        <FriendList v-if="currentMenu===1"></FriendList>
      </div>
      <div v-if="!isWelcome" class="main">
        <ChatMainTop></ChatMainTop>
        <ChatBox></ChatBox>
      </div>
      <Welcome v-else></Welcome>
    </div>
  </div>
</template>

<script type="application/javascript">
import Search from "./components/Search";
import leftMenu from "./components/LeftMenu";
import ChatList from "./components/ChatList";
import FriendList from "./components/FriendList";
import ChatMainTop from "./components/ChatMainTop";
import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome"
import { mapGetters } from "vuex";
export default {
  name: "layout",
  props: {},
  data() {
    return {};
  },
  created() {},
  computed: {
    ...mapGetters("App", {
      currentMenu: "currentMenu",
      isWelcome: "isWelcome"
    })
  },
  methods: {},
  components: {
    Search,
    leftMenu,
    ChatList,
    FriendList,
    ChatMainTop,
    ChatBox,
    Welcome
  }
};
</script>

<style lang="stylus" scoped>
  .layout
    display: flex
    height: 100%
    &-left
      width: 60px
      background-color: rgb(42, 41, 44)
      color: rgb(139, 139, 139)
    &-right
      display: flex
      width:100%
      .list
        background: rgb(233, 231, 231)
      .main
        display: flex
        flex-direction: column
        width: 100%
        .kanban
          height: 100%
</style>
