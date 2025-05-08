<template>
    <div class="page" :class="pageClass">
        <slot />
    </div>
</template>

<script setup lang="ts">
    // get current route name
    const route = useRoute();
    const pageClass = computed(() => {
        const routeName = route.name as string;
        return routeName.toLowerCase();
    });
</script>

<style lang="css">
    .page {
        grid-column-start: 1;
        grid-row-start: 1;
        position: relative;
        z-index: 1;

        @media screen and (min-width: 768px) {
            grid-column-start: 2;
            grid-row-start: 1;
        }
    }
</style>