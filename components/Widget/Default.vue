<template>
  <div class="rounded-lg p-5 bg-white overflow-x-inherit">
    <div class="flex justify-between items-center" v-if="props.title">
      <div class="flex flex-col gap-1">
        <h3 class="font-[Inter] text-lg font-bold text-left text-gray-700">{{ props.title }}</h3>
        <p v-if="props.subTitle" class="font-[Inter] text-sm font-bold text-left text-gray-500">{{ props.title }}</p>
      </div>
      <slot name="header-actions"></slot>
    </div>
    <div class="py-2">
      <slot/>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string
  subTitle?: string
}>()
</script>
