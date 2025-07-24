<template>
    <div class="page-home">
        <CommonUiContainer>
            <p>Hello test</p>
        </CommonUiContainer>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    layout: 'landing'
});
</script>

<style lang="css">
.page-home {
    min-height: calc(100dvh - 2 * var(--spacing-md));
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}
</style>