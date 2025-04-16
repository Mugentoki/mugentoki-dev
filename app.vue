<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>

<script setup></script>

<style lang="css">
  :root {
    --color-1: #070813;
    --color-2: #0b1f3a;
    --color-3: #76101e;
    --color-4: #ffbf00;
    --color-5: #c2dde4;

    --background-color: var(--color-1);
  }

  html {
    background-color: var(--background-color);
    color: var(--color-5);
  }

  a {
    color: var(--color-4);
  }
</style>