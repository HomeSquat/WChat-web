<template>
  <div class="ChatBox">
    <split-pane :min-percent='30' :default-percent='70' split="horizontal">
      <template slot="paneL">
        <div ref="wrapper" class="kanban">
          <ul class="content">
            <li v-for="i in 30" :key="i">...{{i}}</li>
          </ul>
        </div>
      </template>
      <template slot="paneR">
        C
      </template>
    </split-pane>
  </div>
</template>

<script type="application/javascript">
import BScroll from "better-scroll";
import splitPane from "vue-splitpane";
export default {
  name: "ChatBox",
  props: {},
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(function() {
      const _this = this
      // this.$refs.wrapper.style.height = this.$refs.kanbanBox.offsetHeight + "px";
      _this.chatBoxScroll = new BScroll(_this.$refs.wrapper, {
        // click: true,
        tap: true,
        disableMouse: true,
        preventDefault: false,
        scrollbar: {
          fade: true,
          interactive: true // 1.8.0 新增
        },
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        }
      });
      document
        .getElementsByClassName("splitter-pane-resizer")[0]
        .addEventListener("mouseup", function() {
          _this.chatBoxScroll.refresh()
        });
    });
  },
  computed: {},
  methods: {},
  components: {
    splitPane
  }
};
</script>

<style lang="stylus" scoped>
  .ChatBox
    height: 100%
    .kanban
      height: 100%
      padding: 0 30px
      overflow: hidden
</style>
