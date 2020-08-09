<template>
  <div id="app">
    <nan-button icon="nan-icon-right" type="danger" size="small">危险按钮</nan-button>
    <nan-button icon="nan-icon-upload" type="warning" size="large" circle></nan-button>
    <nan-button icon="nan-icon-upload" type="warning" size="large">紧急按钮</nan-button>
    <nan-button :outline="true" type="light">
      <i class="nan-icon-download"></i>亮度
    </nan-button>
    <nan-button :outline="true" type="dark" size="large" round>
      暗黑按钮
      <i class="nan-icon-download"></i>
    </nan-button>
    <nan-button type="success" icon="nan-icon-left" round disabled>
      成功按钮
      <i class="nan-icon-download"></i>
    </nan-button>
    <nan-button :outline="true" type="info" disabled>
      info按钮
      <i class="nan-icon-female"></i>
    </nan-button>
    <nan-button :outline="true" :autofocus="true" type="secondary" :loading="true">加载中</nan-button>
  </div>
</template>

<script>
import NanButton from "@/components/Button.vue";

export default {
  components: {
    NanButton,
  },
};
</script>

<style>
</style>
