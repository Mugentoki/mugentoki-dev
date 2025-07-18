<template>
    <div class="realm-description"
    >
        <slot />
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="css">
.realm-description {
    width: 100%;
    min-height: 100%;
    padding: var(--spacing-md);
    text-align: center;

    h1 {
        font-size: var(--font-4xl);
    }
}
</style>