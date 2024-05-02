<template>
  <PublicProfile/>
</template>

<script setup lang="ts">
import PublicProfile from '@/modules/users/screens/PublicProfile/PublicProfile.vue'
useHead({
  title: 'Perfil publico | 🤩 onlygists',
})
definePageMeta({
  layout: 'checkout'
})
</script>