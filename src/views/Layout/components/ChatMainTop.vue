<template>
  <div class="chatMainTitle">
    <div class="chatMainTitle--name">{{currentChat.name}}<span class="chatMainTitle--name__num">（61）</span></div>
    <div class="chatMainTitle--more iconfont im-gengduo"></div>
  </div>
</template>

<script type="application/javascript">
import { mapGetters } from "vuex";
export default {
  name: "ChatMainTop",
  props: {},
  data() {
    return {};
  },
  created() {
  },
  computed: {
    ...mapGetters('App',{
      currentChat: 'currentChat'
    })
  },
  methods: {},
  components: {}
};
</script>

<style lang="stylus" scoped>
  .chatMainTitle
    display: flex
    justify-content: space-between
    align-items: center
    box-sizing: border-box
    height: 63px
    padding: 24px 30px 15px
    background: rgb(245, 245, 245)
    &--name
      font-weight: 500
    &--more
      padding: 10px
      font-size: 20px
</style>
