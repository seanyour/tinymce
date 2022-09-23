<template>
  <Tinymce/>
</template>

<script setup lang="ts">

import Tinymce from "@/components/Tinymce.vue";
</script>

<style scoped>
/*隐藏 tinymce alert*/
body >>> .tox .tox-notifications-container .tox-notification {
  display: none;
}
</style>