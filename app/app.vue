<template>
  <div class="app-wrapper">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useRealmStore } from '~/stores/realm';

const realmStore = useRealmStore();

useHead({
  htmlAttrs: {
    class: computed(() => realmStore.currentRealm || 'gintoki'),
  },
})
</script>

<style lang="css">
.app-wrapper {
  background-color: var(--color-background);
  transition: background-color 0.3s ease-in-out;
}
</style>