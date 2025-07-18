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
    height: 100%;
    padding: var(--spacing-md);
    text-align: center;
    position: absolute;
    overflow-y: auto;

    h1, h2 {
        font-size: var(--font-3xl);
    }
}
</style>