<template>
  <div class="app-wrapper">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup></script>

<style lang="css">
  html {
    background-color: var(--background-color);
  }

  html,
  body,
  #mugentoki,
  .app-wrapper,
  .layout.default
  .page {
    height: 100dvh;
    min-height: 100dvh;
    max-height: 100dvh;
    width: 100%;
    overflow: hidden;
  }
</style>