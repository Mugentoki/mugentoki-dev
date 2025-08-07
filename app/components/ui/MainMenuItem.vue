<template>
    <NuxtLink class="ui-main-menu-item" :to="to">
        <slot />
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
    to: string
}>();
</script>

<style lang="css">
.ui-main-menu-item {
    text-decoration: underline;
    cursor: pointer;
    font-size: var(--font-2xl);
    font-weight: var(--weight-thin);
    position: relative;
    z-index: 2;

    &:focus,
    &:hover {
        &:before {
            content: '';
            position: absolute;
            top: 55%;
            left: 50%;
            width: calc(100% + 124px);
            height: 8px;
            background-color: hsl(var(--color-ui-primary));
            transform: translate(-50%, -50%);
            z-index: -1;
            filter: url("#turbulence-filter")
                blur(5px);
        }
    }
}
</style>