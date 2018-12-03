<template>
  <div class="welcome">
    <div class="icon iconfont im-wechat"></div>
  </div>
</template>

<script type="application/javascript">
export default {
  name: "welcome",
  props: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  components: {}
};
</script>

<style lang="stylus" scoped>
  .welcome
    position: relative
    width: 100%
    height: 100%
    background: rgb(255, 255, 255)
    .icon
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%,-50%)
      font-size: 60px
      color: rgb(235, 235, 235)
</style>
