<template>
  <div class="friend">
    <div ref="wrapper" class="bottom">
      <ul class="friendList">
        <ul class="friendList--item">
          <p class="friendList--item__title">新的朋友</p>
          <li class="friendList--item__list">
            <img src="http://life.southmoney.com/tuwen/UploadFiles_6871/201804/20180423165906671.jpg">
            <div class="name">新的朋友</div>
          </li>
        </ul>
        <ul class="friendList--item">
          <p class="friendList--item__title">公众号</p>
          <li class="friendList--item__list">
            <img src="http://life.southmoney.com/tuwen/UploadFiles_6871/201804/20180423165906671.jpg">
            <div class="name">公众号</div>
          </li>
        </ul>
        <ul v-for="friendItem in friendList" :key="friendItem.firstLetter" class="friendList--item">
          <p class="friendList--item__title">{{friendItem.firstLetter}}</p>
          <li v-for="Item in friendItem.list" :key="Item.id" class="friendList--item__list">
            <img :src="Item.img">
            <div class="name">{{Item.name}}</div>
          </li>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script type="application/javascript">
import BScroll from "better-scroll";
import { mapActions } from "vuex";
export default {
  name: "FriendList",
  props: {},
  data() {
    return {
      friendList: [
        {
          firstLetter: "A",
          list: [
            {
              id: "0001",
              name: "阿杰",
              img:
                "http://img.zcool.cn/community/01814f583809bda801219c77bcdff1.jpg@2o.jpg"
            },
            {
              id: "0002",
              name: "阿七",
              img:
                "http://img.zcool.cn/community/015cb758e4c8fda801219c770b4bf4.png@1280w_1l_2o_100sh.png"
            },
            {
              id: "0003",
              name: "阿鑫",
              img:
                "http://img.zcool.cn/community/01b32c58380bc7a8012060c838f7b7.jpg@2o.jpg"
            },
            {
              id: "0004",
              name: "阿宇",
              img:
                "http://life.southmoney.com/tuwen/UploadFiles_6871/201804/20180423165901967.jpg"
            },
            {
              id: "0005",
              name: "阿骄的小蝴蝶",
              img:
                "http://img.zcool.cn/community/0181be594c95b7a8012193a330eaf5.jpg"
            }
          ]
        },
        {
          firstLetter: "B",
          list: [
            {
              id: "0006",
              name: "保国",
              img:
                "http://img.zcool.cn/community/01128658b436fea801219c77084fa3.jpg"
            },
            {
              id: "0007",
              name: "奔奔",
              img:
                "http://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/91ef76c6a7efce1bacf1a7c1ad51f3deb58f65e6.jpg"
            },
            {
              id: "0008",
              name: "北纬23°",
              img:
                "http://s9.rr.itc.cn/r/wapChange/20171_13_13/a0k2cj8983885396977.jpg"
            },
            {
              id: "0009",
              name: "碧竹",
              img:
                "http://d.ifengimg.com/w600/p0.ifengimg.com/pmop/2018/1028/D4AEE054372A2CD8A2CA0A04405CDDE358F89CAC_size93_w640_h640.jpeg"
            }
          ]
        },
        {
          firstLetter: "C",
          list: [
            {
              id: "0010",
              name: "财富",
              img:
                "http://p1.gexing.com/touxiang/20130406/1729/515feaebc1719_200x200_3.jpg?recache=20131108"
            },
            {
              id: "0011",
              name: "超超",
              img:
                "http://p2.qhimgs4.com/t012bf7dc629a2d7293.jpg"
            },
            {
              id: "0012",
              name: "陈冠",
              img:
                "http://p1.gexing.com/touxiang/20130110/1928/50eea5c6b848b_200x200_3.jpg?recache=20131108"
            },
            {
              id: "0013",
              name: "陈利华",
              img:
                "http://5b0988e595225.cdn.sohucs.com/images/20171025/15a0e688b9fe42d1acf2afcf493d0201.jpeg"
            },
            {
              id: "0014",
              name: "陈辉",
              img:
                "http://pic.51yuansu.com/pic3/cover/02/37/57/59c21e7185356_610.jpg"
            },
            {
              id: "0015",
              name: "陈琳",
              img:
                "http://img.zcool.cn/community/01ee0d5544f1380000019ae9895b3f.jpg@1280w_1l_2o_100sh.jpg"
            },
            {
              id: "0016",
              name: "陈妙",
              img:
                "http://5b0988e595225.cdn.sohucs.com/images/20171216/a72351d45dee4e6fa270985fb5394f1e.jpeg"
            },
            {
              id: "0017",
              name: "陈渊",
              img:
                "http://img0.imgtn.bdimg.com/it/u=156581925,3170808657&fm=26&gp=0.jpg"
            }
          ]
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.$nextTick(function() {
      this.$refs.wrapper.style.height = document.body.clientHeight - 63 + "px";
      this.friendListScroll = new BScroll(this.$refs.wrapper, {
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
    });
  },
  computed: {},
  methods: {
    ...mapActions("App", {
      setCurrentChat: "setCurrentChat"
    })
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
  .friend
    box-sizing: border-box
    width: 250px
    .bottom
      position: relative
      overflow: hidden
      .friendList
        &--item
          padding-top: 20px
          border-bottom: 1px solid rgb(216, 215, 216)
          &__title
            padding: 0 15px 2px
            font-size: 12px
            color: rgb(153, 153, 153)
          &__list
            display: flex
            align-items: center
            padding: 15px
            cursor: pointer
            img
              width: 36px
              height: 36px
              border-radius: 2px
            .name
              margin-left: 14px
              font-size: 14px
              color: rgb(0, 0, 0)
            &:hover
              background: rgb(216, 215, 216)
</style>
