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
        <li v-for="(menuItem,index) in itemList" :key="index" :class="{isActive: isActiveIndex===index}" @click="selectItem(index)" class="menu--listItem">
          <span :class="[isActiveIndex===index? menuItem.activeIcon : menuItem.icon]" class="iconfont"></span>
        </li>
      </ul>
    </div>
    <div class="menu-more">
      <span @click.stop="moreShow = !moreShow" class="iconfont im-liebiao"></span>
      <ul v-show="moreShow" class="menu-more--list">
        <li class="menu-more--list__item">意见反馈</li>
        <li class="menu-more--list__item">设置</li>
      </ul>
    </div>
  </div>
</template>

<script type="application/javascript">
import { mapActions } from "vuex";
export default {
  name: "LeftMenu",
  props: {},
  data() {
    return {
      itemList: [
        // 菜单栏选项
        {
          type: "message",
          icon: "im-duihuaxiaoxi",
          activeIcon: "im-duihuaxinxitianchong",
          isNew: false
        },
        {
          type: "contact",
          icon: "im-addressbook",
          activeIcon: "im-addressbook_fill",
          isNew: true
        },
        {
          type: "collection",
          icon: "im-shoucang1",
          activeIcon: "im-shoucang",
          isNew: false
        }
      ],
      userInfoShow: false,
      moreShow: false,
      isActiveIndex: 0
    };
  },
  created() {},
  mounted() {
    this.globalClick(this._global);
  },
  computed: {},
  methods: {
    ...mapActions("App", {
      setCurrentMenu: "setCurrentMenu"
    }),
    /**
     * 点击头像，显示用户详细信息
     * @param event
     */
    clickAvatar(event) {
      this.$refs.userInfo.style.top = `${event.clientY}px`;
      this.$refs.userInfo.style.left = `${event.clientX}px`;
      this._showUserInfo();
    },
    /**
     * 切换菜单栏
     * @param index
     */
    selectItem(index) {
      this.isActiveIndex = index;
      this.setCurrentMenu(index);
    },
    /**
     * 隐藏更多列表
     * @private
     */
    _hideMore(){
      this.moreShow = false;
    },
    /**
     * 显示用户详细信息
     * @private
     */
    _showUserInfo() {
      this.userInfoShow = true;
    },
    /**
     * 隐藏用户详细信息
     * @private
     */
    _hideUserInfo() {
      this.userInfoShow = false;
    },
    _global(){
      this._hideMore()
      this._hideUserInfo()
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
        &.isActive
          color: rgb(18, 150, 17) !important
        &:hover
          color: rgb(209, 209, 209)
        span
          font-size: 20px !important
    .menu-more
      position: relative
      cursor: pointer
      span
        display: inline-block
        width: 60px
        height: 60px
        text-align: center
        line-height: 60px
      &:hover
        color: rgb(209, 209, 209)
      &--list
        position: absolute
        left: 60px
        bottom: 30px
        z-index: 9
        width: 170px
        &__item
          padding: 20px 15px
          background: rgb(46, 45, 42)
          text-align: left
          line-height: 14px
          font-size: 14px
          color: rgb(140, 140, 140)
          &:hover
            background: rgb(48, 48, 48)
</style>
