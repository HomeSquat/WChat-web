<template>
  <div
      ref="inputBox"
      :style="boxStyle"
      class="input-box">
    <input
        ref="input"
        :type="type"
        :placeholder="placeholder"
        @input="handleInput"
        @focus="onFocus"
        @blur="onBlur"
        class="input">
    <span ref="leftIcon" class="left-icon" v-if="$slots.leftIcon">
      <slot name="leftIcon" class="icon"></slot>
    </span>
    <span ref="rightIcon" class="right-icon" v-if="$slots.rightIcon">
      <slot name="rightIcon" class="icon"></slot>
    </span>
    <div ref="clear" class="clear" :style="{visibility: isClear? 'visible':'hidden'}" @click="clearVal" v-if="clear">
      <div class="clear-btn" v-if="!$slots.clear">x</div>
      <slot name="clear"></slot>
    </div>
  </div>
</template>

<script type="application/javascript">
export default {
  name: "Input",
  props: {
    // 输入框类型
    type: {
      type: String,
      default: 'text'
    },
    // 是否有清除按钮
    clear: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请输入内容'
    },
    // 失去焦点时的样式
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
    // 获得焦点时的样式
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
      isFocus: false,
      isClear: false
    };
  },
  created() {
  },
  mounted(){
    if(this.$slots.clear || this.clear){
      const clearWidth = this.$refs.clear.offsetWidth;
      this.$refs.clear.style.right = clearWidth/4 + 'px';
      this.blurS = Object.assign({},this.blurS,{'padding-right': clearWidth*3/2+'px'})
    }
    if(this.$slots.leftIcon){
      const iconWidth = this.$refs.leftIcon.offsetWidth;
      this.$refs.leftIcon.style.left = iconWidth/4 + 'px';
      this.blurS = Object.assign({},this.blurS,{'padding-left': iconWidth*2+'px'})
    }else if(this.$slots.rightIcon){
      const iconWidth = this.$refs.rightIcon.offsetWidth;
      this.$refs.rightIcon.style.right = iconWidth/4 + 'px';
      this.blurS = Object.assign({},this.blurS,{'padding-right': iconWidth*2+'px'})
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
    },
    /**
     * 输入框输入时
     * @param event
     */
    handleInput(event){
      const val = event.target.value;
      if(val.length>0){
        this.isClear = true
      }else{
        this.isClear = false
      }
      this.$emit('input', val);
    },
    /**
     * 清空输入框
     */
    clearVal(){
      this.$refs.input.value = ''
      this.isClear = false
      this.$emit('input', this.$refs.input.value);
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
      background: transparent
    .left-icon
      display: inline-block
      position: absolute
      top: 50%
      transform: translate(0,-50%)
    .right-icon
      display: inline-block
      position: absolute
      top: 50%
      transform: translate(0,-50%)
    .clear
      display: inline-block
      position: absolute
      top: 50%
      transform: translate(0,-50%)
      color: rgb(148, 148, 148)
      cursor: pointer
      .clear-btn
        box-sizing: border-box
        width: 18px
        height: 18px
        border-radius: 50%
        background: rgb(207, 207, 207)
        text-align: center
        line-height: 18px
        font-size: 10px
        &:hover
          background: rgb(197, 197, 197)
</style>
