<template>
    <nav class="common-button-container" :aria-label="label">
        <slot />
    </nav>
</template>

<script setup lang="ts">
defineProps<{
    label: string
}>()
</script>

<style lang="css">
.common-button-container {
    display: flex;
    gap: var(--spacing-sm);
    justify-content: space-between;
    align-items: center;
}
</style>