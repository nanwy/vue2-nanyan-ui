<template>
  <button
    class="nan-btn"
    :class="[size? `btn-${size}`:'',outlineClass? `btn-${outlineClass}-${type}`:`btn-${type}`,{
        'is-round':round,
        'is-circle':circle,
      }]"
    :autofocus="autofocus"
    :disabled="buttonDisabled || loading"
  >
    <i class="nan-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "NANButton",
  props: {
    icon: {
      type: String,
      default: "",
    },
    loading: Boolean,
    autofocus: Boolean,
    type: {
      type: String,
      default: "primary",
      validator(val) {
        return (
          [
            "dark",
            "secondary",
            "info",
            "primary",
            "light",
            "success",
            "danger",
            "warning",
          ].indexOf(val) !== -1
        );
      },
    },
    disabled: Boolean,
    size: {
      type: String,
      defult: "small",
    },
    outline: Boolean,
    round: Boolean,
    circle: Boolean,
  },
  mounted() {
    console.log(this.size);
  },
  computed: {
    outlineClass() {
      return this.outline ? "outline" : "";
    },
    btnSize() {
      return this.size;
    },
    buttonDisabled() {
      return this.disabled;
    },
  },
};
</script>

<style lang="scss" scoped>
// @import "../assets/scss/button";
.btn {
  // font-size: $font-size;
  // height: $button-height;
  // vertical-align: middle;
}
</style>