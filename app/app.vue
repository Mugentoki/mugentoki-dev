<template>
  <div class="app-wrapper">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <svg>
      <filter id="oldpaper">
        <feTurbulence x="0" y="0" baseFrequency="0.022" numOctaves="6" seed="1337"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="8"></feDisplacementMap>
      </filter>
    </svg>
      <svg>
      <filter id="paperbuckling">
        <feTurbulence x="0" y="0" baseFrequency="0.005" numOctaves="6" seed="1337"></feTurbulence>
        <feDisplacementMap in="SourceGraphic" scale="5"></feDisplacementMap>
      </filter>
    </svg>
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