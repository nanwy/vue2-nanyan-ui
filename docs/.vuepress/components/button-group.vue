
  <template>
  <div id="app">
    <nan-button-group>
      <nan-button icon="nan-icon-arrow-left" type="secondary">上一页</nan-button>
      <nan-button type="secondary">
        下一页
        <i class="nan-icon-arrow-right nan-icon--right"></i>
      </nan-button>
    </nan-button-group>
    <nan-button-group>
      <nan-button type="secondary">1</nan-button>
      <nan-button type="secondary">2</nan-button>
      <nan-button type="secondary">3</nan-button>
      <nan-button type="secondary">4</nan-button>
    </nan-button-group>
  </div>
</template>



<script>
import NanButtonGroup from "@/components/ButtonGroup.vue";
import NanButton from "@/components/Button.vue";

export default {
  components: {
    NanButton,
    NanButtonGroup,
  },
};
</script>

<style>
</style>