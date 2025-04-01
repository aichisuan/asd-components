<template>
  <div>
    <Button type="primary" @click="hanldeShowImgPreview">show ImgPreview</Button>
    <ImgPreview
      v-model:visible="showImgPreview"
      :imgsData="imgsData"
      :showIndex="0"
      :options="{ clickMaskClose: true, closeIcon: true, download: true }" 
    />
  </div>
</template>

<script setup>
import { ImgPreview } from 'asd-components';
import { ref, reactive } from 'vue';
import { Button } from 'asd-components';

const showImgPreview = ref(false);

const imgsData = reactive([
  'https://img2.baidu.com/it/u=1565288163,4104186569&fm=253&app=138&f=JPEG?w=675&h=949',
  'https://pic.rmb.bdstatic.com/bjh/240625/fe48c9d6737e8830397fdcfad14c88711180.jpeg',
  'https://q3.itc.cn/images01/20240330/c2c562ebbbb246ffb9a6a8f5ec124e58.jpeg',
  'https://img2.baidu.com/it/u=3514207101,3530803158&fm=253&fmt=auto&app=138&f=JPEG?w=665&h=665'
])

const hanldeShowImgPreview = () => {
  showImgPreview.value = true;
};

</script>