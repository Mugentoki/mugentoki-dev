<template>
    <div class="page-home">
        <UiDialogContainer>
            <p>Hello test</p>
        </UiDialogContainer>
        <UiContentContainer>
            <p>Content goes here</p>
        </UiContentContainer>
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