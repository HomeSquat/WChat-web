<template>
  <div class="searchBox">
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
  </div>
</template>

<script type="application/javascript">
import Input from "@/components/Input";
export default {
  name: "Search",
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
      isActiveIndex: 5, // 当前选中的聊天item序号
      search: "", // 搜索框的值
    };
  },
  created() {},
  mounted() {
  },
  computed: {},
  methods: {
  },
  components: {
    "im-input": Input
  }
};
</script>

<style lang="stylus" scoped>
  .searchBox
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
</style>
