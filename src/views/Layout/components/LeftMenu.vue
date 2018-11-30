<template>
  <div class="menu">
    <div class="menu--top">
      <div class="user">
        <img @click.stop="clickAvatar" src="http://5b0988e595225.cdn.sohucs.com/images/20170913/6703759e56444a02a7ac19a79e16e748.jpeg" class="user__avatar">
        <div ref="userInfo" v-show="userInfoShow" class="user__info">
          <div class="user__info_top">
            <div class="user__info_text">
              <p class="user__info_text--name">? 梦在深巷</p>
              <p class="user__info_text--number">微信号: zdj3120292992</p>
            </div>
            <img src="http://5b0988e595225.cdn.sohucs.com/images/20170913/6703759e56444a02a7ac19a79e16e748.jpeg" class="user__info_avatar">
          </div>
          <div class="user__info_bottom">
            <p class="user__info_area"><span class="user__info_area--label">地&nbsp;&nbsp;区</span><span>斯洛伐克</span></p>
            <div class="buttons">
              <span class="iconfont im-fenxiang"></span>
              <span class="iconfont im-duihua"></span>
            </div>
          </div>
        </div>
      </div>
      <ul class="menu--list">
        <li v-for="(menuItem,index) in itemList" :key="index" class="menu--listItem">
          <span :class="menuItem.icon" class="iconfont"></span>
        </li>
      </ul>
    </div>
    <div class="menu-more">
      <span class="iconfont im-liebiao"></span>
    </div>
  </div>
</template>

<script type="application/javascript">
export default {
  name: "LeftMenu",
  props: {},
  data() {
    return {
      itemList: [ // 菜单栏选项
        {
          type: "message",
          icon: "im-duihuaxiaoxi",
          isNew: false
        },
        {
          type: "contact",
          icon: "im-addressbook",
          isNew: true
        },
        {
          type: "collection",
          icon: "im-shoucang1",
          isNew: false
        }
      ],
      userInfoShow: false
    };
  },
  created() {
  },
  mounted(){
    this.globalClick(this._hideUserInfo);
  },
  computed: {
  },
  methods: {
    /**
     * 点击头像，显示用户详细信息
     * @param event
     */
    clickAvatar(event){
      this.$refs.userInfo.style.top = `${event.clientY}px`;
      this.$refs.userInfo.style.left = `${event.clientX}px`;
      this._showUserInfo();
    },
    /**
     * 显示用户详细信息
     * @private
     */
    _showUserInfo(){
      this.userInfoShow = true
    },
    /**
     * 隐藏用户详细信息
     * @private
     */
    _hideUserInfo(){
      this.userInfoShow = false
    }
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
  .menu
    display: flex
    flex-direction: column
    justify-content: space-between
    box-sizing: border-box
    height: 100%
    padding-top: 10px
    .user
      position: relative
      box-sizing: border-box
      width: 60px
      height: 60px
      padding: 10px
      &__avatar
        width: 40px
        height: 40px
        border-radius: 3px
        cursor: pointer
      &__info
        position: absolute
        z-index: 9
        box-sizing: border-box
        width: 300px
        height: 230px
        padding: 30px
        border-radius: 5px
        background-color: rgb(255, 255, 255)
        box-shadow: 0 0 15px -2px rgba(0, 0, 0, .3)
        .user__info_top
          display: flex
          justify-content: space-between
          align-items: center
          padding-bottom: 25px
          border-bottom: 1px solid rgb(244, 244, 244)
          .user__info_text
            &--name
              margin-bottom: 10px
              font-size: 18px
              color: rgb(0, 0, 0)
            &--number
              font-size: 14px
          .user__info_avatar
            width: 56px
            height: 56px
        .user__info_bottom
          padding-top: 20px
          .user__info_area
            font-size: 14px
            color: rgb(0, 0, 0)
            &--label
              margin-right: 20px
              color: rgb(153, 153, 153)
          .buttons
            display: flex
            justify-content: flex-end
            align-items: center
            margin-top: 35px
            .iconfont
              margin-left: 20px
              font-size: 28px
              cursor: pointer
              &:hover
                color: rgb(0, 0, 0)
    .menu--list
      display: flex
      flex-direction: column
      justify-content center
      align-items: center
      .menu--listItem
        width: 60px
        height: 60px
        text-align: center
        line-height: 60px
        color: rgb(139, 139, 139)
        cursor: pointer
        span
          font-size: 20px !important

    .menu-more
      width: 60px
      height: 60px
      text-align: center
      line-height: 60px
</style>
