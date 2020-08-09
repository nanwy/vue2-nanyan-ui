<template>
  <div id="app">
    <nan-button icon="nan-icon-right" type="danger" size="small">危险按钮</nan-button>
    <nan-button icon="nan-icon-upload" type="warning" size="large" circle></nan-button>
    <nan-button icon="nan-icon-upload" type="warning" size="large">紧急按钮</nan-button>
    <nan-button :outline="true" type="light">
      <i class="nan-icon-download2"></i>亮度
    </nan-button>
    <nan-button :outline="true" type="dark" size="large" round>
      暗黑按钮
      <i class="nan-icon-download2"></i>
    </nan-button>
    <nan-button type="success" icon="nan-icon-left" round>
      成功按钮
      <i class="nan-icon-download2"></i>
    </nan-button>
    <nan-button :outline="true" type="info">
      info按钮
      <i class="nan-icon-download2"></i>
    </nan-button>
    <nan-button :outline="true" type="seondary">
      info按钮
      <i class="nan-icon-download2"></i>
    </nan-button>
  </div>
</template>

<script>
import NanButton from "../../../src/components/Button.vue";

export default {
  components: {
    NanButton,
  },
};
</script>

<style>
</style>
