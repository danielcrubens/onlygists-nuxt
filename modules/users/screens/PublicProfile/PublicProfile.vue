<template>
  <PublicHeadline />
  <WidgetGroup>
    <WidgetGroupLoader :loading="false" :amount="3">
      <WidgetCondensed :value="10" label="Gist  do total" />
      <WidgetCondensed :value="5" label="Gist gratuitos" />
      <WidgetCondensed :value="5" label="Gist pagos" />
    </WidgetGroupLoader>
  </WidgetGroup>
  <WidgetDefault title="Todos os gists">
    <GistCardGroup>
      <GistCardGroupLoader :loading="false">
        <GistCardItem @tap="handleNavigateToDetail"
        v-for="i in 10" key="n"
        id="123"
        title="useCurrentUser.ts"
        description="Hook para controlar a **store** do usuário"
        :price="10"
        lang="typescript" />
      </GistCardGroupLoader>
    </GistCardGroup>
  </WidgetDefault>
</template>

<script setup lang="ts">
import PublicHeadline from '@/modules/users/components/PublicHeadline/PublicHeadline.vue'
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue'
import WidgetGroupLoader from '@/modules/reports/components/Widget/Group/Loader.vue'
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue'
import GistCardGroup from '@/modules/gists/components/Card/Group/Group.vue'
import GistCardGroupLoader from '@/modules/gists/components/Card/Group/Loader.vue'
import GistCardItem from '@/modules/gists/components/Card/Item/Item.vue'
const handleNavigateToDetail = (id: string) => {
  const {username} = route.params
  router.push(`/${username}/gist/${id}`)
}
</script>