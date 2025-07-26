<template>
    <component :is="isMenu ? 'div' : 'nav'" class="ui-select">
        <component :is="isMenu ? 'menu' : 'ul'" class="ui-select__list">
            <slot />
        </component>
    </component>
</template>

<script setup lang="ts">
    const { isMenu = false } = defineProps<{
        isMenu?: boolean;
    }>();
</script>

<style lang="css">
.ui-select {}

.ui-select__list {
    li:not(:first-child) {
        padding-top: var(--spacing-xs);
    }
}
</style>