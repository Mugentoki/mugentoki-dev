<template>
    <div class="layout-wrapper">
        <slot />
        <div class="layout-footer">
            <UiFooterLanguageSelect />
        </div>
    </div>
</template>

<script setup lang="ts">
import { UiFooterLanguageSelect } from '#components';

</script>

<style lang="css">
.layout-wrapper {
    min-height: calc(100dvh - 2 * var(--spacing-md));
    max-height: calc(100dvh - 2 * var(--spacing-md));
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
}

.layout-footer {
    width: 100%;
    display: flex;
    gap: var(--spacing-md);
    justify-content: flex-end;
    align-items: center;
    position: relative;
    z-index: 100;
}
</style>