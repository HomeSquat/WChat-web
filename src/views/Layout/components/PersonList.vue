<template>
  <div class="person">
    <div class="top">
      <im-input :width="200" :radius="10">
        <!--<div slot="leftIcon" style="width: 30px;margin: 0;">123</div>-->
        <div slot="rightIcon" style="width: 30px;margin: 0;">123</div>
      </im-input>
    </div>
  </div>
</template>

<script type="application/javascript">
import Input from "@/components/Input";
export default {
  name: "PersonList",
  props: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  components: {
    "im-input": Input
  }
};
</script>

<style lang="stylus" scoped>
</style>
