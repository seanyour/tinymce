<template>
  <Editor
      v-model="content"
      :init="init"
  />
</template>

<script setup lang="ts">
import tinymce from "tinymce";
import Editor from "@tinymce/tinymce-vue";

import { ref} from "vue";
const content = ref('');
const init = ref({
  language_url: 'public/tinymce/langs/zh-Hans',
  language:'zh-Hans',
  plugins: 'lists link image table code help wordcount'
})
</script>

<style scoped>

</style>