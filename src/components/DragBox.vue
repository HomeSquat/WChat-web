<template>
  <div
      draggable="true"
      class="dragBox">
    <slot name="app"></slot>
  </div>
</template>

<script type="application/javascript">
export default {
  name: "DragBox",
  props: {
    left: {
      type: Number,
      default: 0
    },
    top: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: document.body.clientWidth
    },
    height: {
      type: Number,
      default: document.body.clientHeight
    }
  },
  data() {
    return {
      initial: {
        X: 0,
        Y: 0
      }
    };
  },
  created() {},
  computed: {},
  methods: {
  },
  components: {}
};
</script>

<style lang="stylus" scoped>
  .dragBox
    display: inline-block
</style>
