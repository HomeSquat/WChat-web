<template>
  <div>
    <DragBox v-for="(appItem,index) in appList" :key="index" >
      <div slot="app" class="appBox" @dblclick="openApp(appItem.id)">
        <div :class="appItem.appIcon" class="appBox--icon weixin iconfont"></div>
        <p class="appBox--text">{{appItem.appName}}</p>
      </div>
    </DragBox>
  </div>
</template>

<script type="application/javascript">
import DragBox from "@/components/DragBox";
import { mapActions } from "vuex";
export default {
  name: "AppList",
  props: {},
  data() {
    return {
      appList: [
        {
          id: "wchat",
          appName: "微信",
          appIcon: "im-wechat"
        }
      ]
    };
  },
  created() {},
  computed: {},
  methods: {
    ...mapActions("App", {
      setOpenWChatLogin: "setOpenWChatLogin"
    }),
    openApp(appId){
      // this.$router.push(this.appId)
      if(appId === 'wchat'){
        this.setOpenWChatLogin(true)
      }
    }
  },
  components: {
    DragBox
  }
};
</script>

<style lang="stylus" scoped>
  .appBox
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    box-sizing: border-box
    width: 76px;
    max-height: 70px;
    padding: 4px
    border: 1px solid transparent
    &:hover
      border: 1px solid rgba(255, 255, 255, .7)
      background: rgba(255, 255, 255, .3)
    &--icon
      font-size: 45px
      &.weixin
        color: rgb(9, 187, 7)
    &--text
      letter-spacing: 3px
      font-size: 12px
      color: rgb(255, 255, 255)
</style>
