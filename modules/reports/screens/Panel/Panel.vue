<template>
  <div>
Panel
  </div>
</template>

<script setup lang="ts">
import { myselfKey } from '@/modules/users/composables/useMyself/useMyself'
import type { MyselfContextProvider } from '@/modules/users/composables/useMyself/types'

const myself = inject(myselfKey) as MyselfContextProvider
console.log('user', user)

</script>

