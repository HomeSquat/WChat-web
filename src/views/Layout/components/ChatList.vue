<template>
  <div class="chat">
    <div class="top">
      <im-input
          v-model="search"
          :blurStyle="blurStyle"
          :focusStyle="focusStyle"
          :placeholder="'搜索'"
          clear
          class="search">
        <span slot="leftIcon" class="search__icon iconfont im-sousuo"></span>
        <div slot="clear" class="search__clear">x</div>
      </im-input>
      <div class="addChatRoom iconfont im-jia"></div>
    </div>
    <div ref="wrapper" class="bottom">
      <ul class="chatList">
        <li v-for="(chatItem,index) in chatList" :key="index" class="chatList--item">
          <div class="chatList--item__img">
            <img :src="chatItem.img">
          </div>
          <div class="chatList--item__text">
            <p>{{chatItem.name}}</p>
            <p class="first-message">{{chatItem.firstMessage}}</p>
          </div>
          <span class="chatList--item__time">{{chatItem.time}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="application/javascript">
import Input from "@/components/Input";
import BScroll from 'better-scroll'
export default {
  name: "PersonList",
  props: {},
  data() {
    return {
      // 样式start
      blurStyle: {
        width: "190px",
        height: "26px",
        "border-radius": "3px",
        background: "rgb(219, 217, 216)"
      },
      focusStyle: {
        border: "1px solid rgb(218, 216, 215)",
        background: "#fff"
      },
      // 样式end
      search: "", // 搜索框的值
      chatList: [
        {
          img:
            "http://5b0988e595225.cdn.sohucs.com/images/20170913/6703759e56444a02a7ac19a79e16e748.jpeg",
          name: "技术部——复线",
          firstMessage: "[动画表情]",
          time: "昨天"
        },
        {
          img:
            "http://image.biaobaiju.com/uploads/20180918/15/1537256494-ZnSKMzEoBI.jpeg",
          name: "全国外卖红包群",
          firstMessage: "Yifan: [链接]",
          time: "10:57"
        },
        {
          img:
            "http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=9172e8049d2bd40756cadbbe13e0f424/34fae6cd7b899e5197e54c3848a7d933c8950db6.jpg",
          name: "家里蹲大学",
          firstMessage: "志哥: [图片]",
          time: "10:58"
        },
        {
          img:
              "http://pic.qqtn.com/up/2018-2/2018022813173822478.jpg",
          name: "美团",
          firstMessage: "您被没事选中了",
          time: "10:26"
        },
        {
          img:
              "http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=9172e8049d2bd40756cadbbe13e0f424/34fae6cd7b899e5197e54c3848a7d933c8950db6.jpg",
          name: "家里蹲大学",
          firstMessage: "志哥: [图片]",
          time: "10:58"
        },
        {
          img:
              "http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=9172e8049d2bd40756cadbbe13e0f424/34fae6cd7b899e5197e54c3848a7d933c8950db6.jpg",
          name: "家里蹲大学",
          firstMessage: "志哥: [图片]",
          time: "10:58"
        },
        {
          img:
              "http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=9172e8049d2bd40756cadbbe13e0f424/34fae6cd7b899e5197e54c3848a7d933c8950db6.jpg",
          name: "家里蹲大学",
          firstMessage: "志哥: [图片]",
          time: "10:58"
        },
        {
          img:
              "http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=9172e8049d2bd40756cadbbe13e0f424/34fae6cd7b899e5197e54c3848a7d933c8950db6.jpg",
          name: "家里蹲大学",
          firstMessage: "志哥: [图片]",
          time: "10:58"
        },
        {
          img:
              "http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=9172e8049d2bd40756cadbbe13e0f424/34fae6cd7b899e5197e54c3848a7d933c8950db6.jpg",
          name: "家里蹲大学",
          firstMessage: "志哥: [图片]",
          time: "10:58"
        },
        {
          img:
              "http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=9172e8049d2bd40756cadbbe13e0f424/34fae6cd7b899e5197e54c3848a7d933c8950db6.jpg",
          name: "家里蹲大学",
          firstMessage: "志哥: [图片]",
          time: "10:58"
        },
        {
          img:
              "http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=9172e8049d2bd40756cadbbe13e0f424/34fae6cd7b899e5197e54c3848a7d933c8950db6.jpg",
          name: "家里蹲大学",
          firstMessage: "志哥: [图片]",
          time: "10:58"
        },
        {
          img:
              "http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=9172e8049d2bd40756cadbbe13e0f424/34fae6cd7b899e5197e54c3848a7d933c8950db6.jpg",
          name: "家里蹲大学",
          firstMessage: "志哥: [图片]",
          time: "10:58"
        },
        {
          img:
              "http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=9172e8049d2bd40756cadbbe13e0f424/34fae6cd7b899e5197e54c3848a7d933c8950db6.jpg",
          name: "家里蹲大学",
          firstMessage: "志哥: [图片]",
          time: "10:58"
        },
      ]
    };
  },
  created() {},
  mounted(){
    this.$nextTick(function(){
      this.$refs.wrapper.style.height = document.body.clientHeight - 63 + "px";
      this.chatListScroll = new BScroll(this.$refs.wrapper,{
        click: true,
        scrollbar: {
          fade: true,
          interactive: true // 1.8.0 新增
        },
        mouseWheel: {
          speed: 20,
          invert: false,
          easeTime: 300
        }
      })
    })
  },
  computed: {},
  methods: {},
  components: {
    "im-input": Input
  }
};
</script>

<style lang="stylus" scoped>
  .chat
    box-sizing: border-box
    width: 250px
    background: rgb(233, 231, 231)
    .top
      display: flex
      padding: 27px 15px 10px
      align-items: center
      .search
        .search__icon
          font-size: 14px
        .search__clear
          width: 14px
          height: 14px
          border-radius: 50%
          background: rgb(197, 197, 197)
          text-align: center
          line-height: 14px
          font-size: 10px
      .addChatRoom
        width: 26px
        height: 26px
        margin-left: 10px
        border-radius: 3px
        background: rgb(219, 217, 216)
        text-align: center
        line-height: 26px
        font-size: 12px
        color: rgb(88, 88, 88)
        cursor: pointer
        &:hover
          background: rgb(209, 209, 209)
    .bottom
      position: relative
      overflow: hidden
      .chatList
        &--item
          display: flex
          position: relative
          padding: 15px
          font-size: 0
          cursor: pointer
          &:first-child
            background: rgb(227, 224, 222)
          &:hover
            background: rgb(216, 215, 216)
          &__img
            img
              width: 40px
              height: 40px
          &__text
            display: flex
            flex-direction: column
            justify-content: space-between
            padding: 5px 10px 0
            font-size: 14px
            font-weight: 600
            .first-message
              font-size: 12px
              font-weight: 200
              color: rgb(153, 153, 153)
          &__time
            position: absolute
            top: 20px
            right: 15px
            font-size: 12px
            color: rgb(185, 185, 185)
</style>
