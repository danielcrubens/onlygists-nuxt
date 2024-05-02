<template>
<NuxtLayout>
  <Toast/>
  <NuxtPage />
  </NuxtLayout>
</template>
<script setup lang="ts">
const colorMode = useColorMode()
colorMode.preference = 'light'
</script>