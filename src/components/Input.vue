<template>
  <div
      ref="inputBox"
      :style="boxStyle"
      class="input-box">
    <input
        :type="type"
        @focus="onFocus"
        @blur="onBlur"
        class="input">
    <span ref="leftIcon" class="left-icon" v-if="$slots.leftIcon">
      <slot name="leftIcon" class="icon"></slot>
    </span>
    <span ref="rightIcon" class="right-icon" v-if="$slots.rightIcon">
      <slot name="rightIcon" class="icon"></slot>
    </span>
  </div>
</template>

<script type="application/javascript">
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: 'text'
    },
    blurStyle: {
      type: Object,
      default(){
        return {
          width: '200px',
          height: '30px',
          padding: '4px 8px',
          border: "1px solid #ccc",
          'border-radius': '4px',
          background: '#fff'
        };
      }
    },
    focusStyle: {
      type: Object,
      default() {
        return {
          border: "1px solid #409EFF"
        };
      }
    },

  },
  data() {
    return {
      blurS: this.blurStyle,
      focusS: this.focusStyle,
      isFocus: false
    };
  },
  created() {
  },
  mounted(){
    if(this.$slots.leftIcon){
      const iconWidth = this.$refs.leftIcon.offsetWidth
      this.$refs.leftIcon.style.left = iconWidth/4 + 'px'
      this.blurS = Object.assign({},this.blurS,{'padding-left': iconWidth*3/2+'px'})
    }else if(this.$slots.rightIcon){
      const iconWidth = this.$refs.rightIcon.offsetWidth
      this.$refs.rightIcon.style.right = iconWidth/4 + 'px'
      this.blurS = Object.assign({},this.blurS,{'padding-right': iconWidth*3/2+'px'})
    }
  },
  computed: {
    boxStyle() {
      if (this.isFocus) {
        return Object.assign({},this.blurS,this.focusS)
      }else{
        return this.blurS;
      }
    }
  },
  methods: {
    /**
     * 输入框获得焦点
     */
    onFocus() {
      this.isFocus = true;
    },
    /**
     * 输入框失去焦点
     */
    onBlur() {
      this.isFocus = false;
    }
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
  .input-box
    position: relative
    box-sizing: border-box
    overflow: hidden
    .input
      box-sizing: border-box
      width: 100%
      height: 100%
      margin: 0
      border: none
      outline: none;
    .left-icon
      display: inline-block
      position: absolute
      top: 50%
      /*left: 5%*/
      transform: translate(0,-50%)
    .right-icon
      display: inline-block
      position: absolute
      top: 50%
      /*right: 5%*/
      transform: translate(0,-50%)
</style>
