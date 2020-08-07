<template>
  <div>
    <button
      class="btn"
      :class="[size? `btn-${size}`:'',outlineClass? `btn-${outlineClass}-${type}`:`btn-${type}`,{
        'is-round':round,
        'is-circle':circle
      }]"
    >
      <i :class="icon" v-if="icon && !loading"></i>
      <span v-if="$slots.default">
        <slot></slot>
      </span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
    loading: Boolean,
    type: {
      type: String,
      default: "primary",
    },
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
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/button";
.btn {
  // font-size: $font-size;
  // height: $button-height;
  vertical-align: middle;
}
</style>