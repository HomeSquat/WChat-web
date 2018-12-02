<template>
  <div @mouseup="resize" class="ChatBox">
    <split-pane :min-percent='30' :default-percent='70' split="horizontal">
      <template slot="paneL">
        <div ref="wrapper" class="messages">
          <ul class="content">
            <li v-for="i in 30" :key="i">...{{i}}</li>
          </ul>
        </div>
      </template>
      <template slot="paneR">
        <div class="edit">
          <div class="edit--tools">
            <div class="edit--tools__items">
              <div class="edit--tools__item iconfont im-biaoqing"></div>
              <div class="edit--tools__item iconfont im-wenjianjia"></div>
              <div class="edit--tools__item iconfont im-duihua"></div>
            </div>
            <!--<div class="edit&#45;&#45;history iconfont im-gengduo"></div>-->
          </div>
          <textarea name="" class="edit--textarea"></textarea>
          <div class="edit--bottom">
            <div class="edit--bottom__send-btn">发送(S)</div>
          </div>
        </div>
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
    return {
      isResize: false
    };
  },
  watch: {},
  created() {},
  mounted() {
    this.$nextTick(function() {
      const _this = this;
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
      const splitter_resizer = document.getElementsByClassName(
        "splitter-pane-resizer"
      )[0];
      splitter_resizer.addEventListener("mousedown", function() {
        _this.isResize = true;
      });
    });
  },
  computed: {},
  methods: {
    /**
     * 重置大小
     */
    resize() {
      if (this.isResize) {
        this.chatBoxScroll.refresh();
        this.isResize = false;
      }
    }
  },
  components: {
    splitPane
  }
};
</script>

<style lang="stylus" scoped>
  .ChatBox
    height: 100%
    .messages
      height: 100%
      padding: 0 30px
      background: rgb(245, 245, 245)
      overflow: hidden
    .edit
      display: flex
      flex-direction: column
      box-sizing: border-box
      height: 100%
      border-top: 1px solid rgb(231, 231, 231)
      &--tools
        display: flex
        justify-content: space-between
        align-items: center
        box-sizing: border-box
        height: 40px
        padding: 0 30px
        &__items
          display: flex
        .edit--tools__item,.edit--history
          width: 26px
          height: 26px
          margin-right: 5px
          text-align: center
          line-height: 26px
          font-size: 18px
          color: rgb(94, 94, 94)
          cursor: pointer
          &:hover
            color: rgb(26, 26, 26)
      &--textarea
        flex: 1
        box-sizing: border-box
        width: 100%
        padding: 0 30px
        border: none
        outline: none
        resize: none
      &--bottom
        display: flex
        justify-content: flex-end
        box-sizing: border-box
        width: 100%
        padding: 10px 30px
        &__send-btn
          box-sizing: border-box
          width: 68px
          height: 24px
          border: 1px solid rgb(229, 229, 229)
          background: rgb(245, 245, 245)
          text-align: center
          line-height: 24px
          font-size: 14px
          color: rgb(96, 96 ,96)
          cursor: pointer
          &:hover
            background: rgb(18, 150, 17)
            border-color: rgb(18, 150, 17)
            color: rgb(255, 255, 255)
    /deep/ .splitter-pane-resizer.horizontal
      opacity: 0
</style>
