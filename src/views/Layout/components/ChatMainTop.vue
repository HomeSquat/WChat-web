<template>
  <div class="chatMainTitle">
    <div class="chatMainTitle--name">{{currentChat.name}}<span v-show="currentChat.peopleNum>1" class="chatMainTitle--name__num">（{{currentChat.peopleNum}}）</span></div>
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
    height: 67px
    padding: 24px 30px 15px
    border-bottom: 1px solid rgb(231, 231, 231)
    background: rgb(245, 245, 245)
    &--name
      font-weight: 500
    &--more
      padding: 10px
      font-size: 20px
</style>
