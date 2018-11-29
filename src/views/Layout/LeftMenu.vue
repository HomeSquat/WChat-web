<template>
  <div class="menu">
    <ul class="menu--list">
      <li v-for="(menuItem,index) in itemList" :key="index" class="menu--listItem">
        <span :class="menuItem.icon" class="iconfont"></span>
      </li>
    </ul>
  </div>
</template>

<script type="application/javascript">
export default {
  name: "LeftMenu",
  props: {},
  data() {
    return {
      itemList: [
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
      ]
    };
  },
  created() {},
  computed: {},
  methods: {},
  components: {}
};
</script>

<style lang="stylus" scoped>
  .menu--list
    display: flex
    flex-direction: column
    justify-content center
    align-items: center
    .menu--listItem
      width: 50px
      height: 50px
      text-align: center
      line-height: 50px
      font-size: 12px
      color: rgb(139, 139, 139)
      cursor: pointer
</style>
