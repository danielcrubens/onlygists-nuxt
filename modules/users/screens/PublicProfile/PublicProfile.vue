<template>
 <PublicHeadline/>
 <WidgetGroup>
  <WidgetCondensed :value="10" label="Gist  do total"/>
  <WidgetCondensed :value="5" label="Gist gratuitos"/>
  <WidgetCondensed :value="5" label="Gist pagos"/>
 </WidgetGroup>
</template>
<script setup lang="ts">
import PublicHeadline from '@/modules/users/components/PublicHeadline/PublicHeadline.vue'
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue'
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue'

</script>