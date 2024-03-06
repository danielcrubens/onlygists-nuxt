<template>
  <MainContent>
    <template #header>
 <Header/>
 </template> 
 <template #content>
 <Hero/>
</template> 
</MainContent>
</template>

<script setup lang="ts">
import Hero from '@/modules/landing-page/components/Hero/Hero.vue'
import Header from '@/modules/landing-page/components/Header/Header.vue'
</script>

