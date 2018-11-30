<template>
  <div class="layout">
    <div class="layout-left">
      <leftMenu></leftMenu>
    </div>
    <div class="layout-right">
      <ChatList></ChatList>
      <div class="main">
        <ChatMainTop></ChatMainTop>
        <split-pane :min-percent='30' :default-percent='70' split="horizontal" class="kanban">
          <template slot="paneL">
            b
          </template>
          <template slot="paneR">
            C
          </template>
        </split-pane>
      </div>

    </div>
  </div>
</template>

<script type="application/javascript">
import splitPane from "vue-splitpane";
import leftMenu from "./components/LeftMenu";
import ChatList from "./components/ChatList";
import ChatMainTop from "./components/ChatMainTop";
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
    splitPane,
    leftMenu,
    ChatList,
    ChatMainTop
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
