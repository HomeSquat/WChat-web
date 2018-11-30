<template>
  <div class="layout">
    <div class="layout-left">
      <leftMenu></leftMenu>
    </div>
    <div class="layout-right">
      <ChatList></ChatList>
      <split-pane :min-percent='30' :default-percent='70' split="horizontal" class="main">
        <template slot="paneL">
          B
        </template>
        <template slot="paneR">
          C
        </template>
      </split-pane>
    </div>
  </div>
</template>

<script type="application/javascript">
import splitPane from "vue-splitpane";
import leftMenu from "./components/LeftMenu";
import ChatList from "./components/ChatList"
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
    ChatList
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
        width: 100%
</style>
