<template>
  <div class="layout">
    <div class="layout-left">
      <leftMenu></leftMenu>
    </div>
    <div class="layout-right">
      <split-pane :min-percent='10' :default-percent='20' split="vertical">
        <template slot="paneL">
          <PersonList></PersonList>
        </template>
        <template slot="paneR">
          <split-pane :min-percent='30' :default-percent='80' split="horizontal">
            <template slot="paneL">
              B
            </template>
            <template slot="paneR">
              C
            </template>
          </split-pane>
        </template>
      </split-pane>
    </div>
  </div>
</template>

<script type="application/javascript">
import splitPane from "vue-splitpane";
import leftMenu from "./components/LeftMenu";
import PersonList from "./components/PersonList"
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
    PersonList
  }
};
</script>

<style lang="stylus" scoped>
  .layout
    display: flex
    height: 100%
    &-left
      width: 50px
      background-color: rgb(42, 41, 44)
      color: rgb(139, 139, 139)
    &-right
      width:100%
</style>
