<template>
  <div>
    <DragBox>
      <div slot="app" class="wchatBox">
        <div @click="closeWChatLogin" class="wchatBox--close">X</div>
        <div class="wchatBox--logo iconfont im-wechat"></div>
        <div class="wchatBox--form">
          <im-input
              v-model="form.uname"
              :blurStyle="blurStyle"
              :focusStyle="focusStyle"
              :placeholder="'请输入用户名'"
              clear
              class="wchatBox--form__uname">
            <span slot="leftIcon" class="uname__icon iconfont im-yonghuming"></span>
            <div slot="clear" class="uname__clear">x</div>
          </im-input>
          <im-input
              v-model="form.password"
              :type="'password'"
              :blurStyle="blurStyle"
              :focusStyle="focusStyle"
              :placeholder="'请输入密码'"
              clear
              class="wchatBox--form__password">
            <span slot="leftIcon" class="uname__icon iconfont im-mima"></span>
            <div slot="clear" class="uname__clear">x</div>
          </im-input>
          <div @click="loginWChat" class="wchatBox--form__login">登录</div>
        </div>
      </div>
    </DragBox>
  </div>
</template>

<script type="application/javascript">
import Input from "@/components/Input";
import DragBox from "@/components/DragBox";
import { mapActions } from "vuex";
export default {
  name: "WChatLogin",
  props: {},
  data() {
    return {
      // 样式start
      blurStyle: {
        width: "100%",
        height: "30px",
        "margin-bottom": "20px",
        "border-radius": "2px",
        "border-bottom": "1px solid rgb(200, 200, 200)"
      },
      focusStyle: {
        "border-bottom": "1px solid rgb(9, 187, 7)"
      },
      // 样式end
      form: {
        uname: "",
        password: ""
      }
    };
  },
  created() {},
  computed: {},
  methods: {
    ...mapActions("App", {
      setOpenWChatLogin: "setOpenWChatLogin"
    }),
    /**
     * 关闭微信登录窗口
     */
    closeWChatLogin() {
      this.setOpenWChatLogin(false);
    },
    /**
     * TODO
     * 登录微信，等接口，假设登录成功
     */
    loginWChat() {
      this.$router.push({ name: "wchat" });
    }
  },
  components: {
    DragBox,
    "im-input": Input
  }
};
</script>

<style lang="stylus" scoped>
  .wchatBox
    box-sizing: border-box
    width: 300px
    height: 400px
    padding: 80px 50px
    border-radius: 5px
    background: rgb(255, 255, 255)
    &--close
      position: absolute
      top: 10px
      right: 10px
      width: 20px
      height: 20px
      border-radius: 50%
      background: rgb(227, 227, 227)
      text-align: center
      line-height: 20px
      font-size: 10px
      color: rgb(255, 255, 255)
      cursor: pointer
      &:hover
        background: rgb(200, 200, 200)
    &--form
      padding-top: 40px
      &__login
        width: 100%
        height: 40px
        margin-top: 40px
        border-radius: 5px
        background: rgb(9, 187, 7)
        text-align: center
        line-height: 40px
        font-size: 14px
        color: rgb(255, 255, 255)
        cursor: pointer
        &:hover
          background: rgb(6, 169, 4)
      &__uname,&__password
        .uname__icon
          font-size: 14px
        .uname__clear
          width: 14px
          height: 14px
          border-radius: 50%
          background: rgb(197, 197, 197)
          text-align: center
          line-height: 14px
          font-size: 10px
    &--logo
      text-align: center
      font-size: 60px
      color: rgb(9, 187, 7)
</style>
