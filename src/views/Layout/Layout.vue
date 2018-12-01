<template>
  <div class="layout">
    <div class="layout-left">
      <leftMenu></leftMenu>
    </div>
    <div class="layout-right">
      <div class="list">
        <ChatList></ChatList>
      </div>
      <div class="main">
        <ChatMainTop></ChatMainTop>
        <ChatBox></ChatBox>
      </div>
    </div>
  </div>
</template>

<script type="application/javascript">
import splitPane from "vue-splitpane";
import leftMenu from "./components/LeftMenu";
import ChatList from "./components/ChatList";
import ChatMainTop from "./components/ChatMainTop";
import ChatBox from "./components/ChatBox";
export default {
  name: "layout",
  props: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  components: {
    leftMenu,
    ChatList,
    ChatMainTop,
    ChatBox
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
      .main
        display: flex
        flex-direction: column
        width: 100%
        .kanban
          height: 100%
</style>
