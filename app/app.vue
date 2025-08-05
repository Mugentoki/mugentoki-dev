<template>
  <div class="app-wrapper">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="css">
.app-wrapper {
  transition: background-color 0.3s ease-in-out;
  padding: var(--spacing-md)
}
</style>