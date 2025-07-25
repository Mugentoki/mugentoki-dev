<template>
    <div ref="contentcontainer" class="ui-content-container">
        <slot />
        <div class="ui-content-container__background"></div>
    </div>
</template>

<script setup lang="ts">
    // calculate ui-content-container height, if it's larger than 500px, add the "buckle" class
    const contentContainer = useTemplateRef<HTMLDivElement>('contentcontainer');
    onMounted(() => {
        if (contentContainer.value) {
            const height = contentContainer.value.offsetHeight;
            if (height > 500) {
                contentContainer.value.classList.add('buckle');
            }
        }
    });
</script>

<style lang="css">
    .ui-content-container {
        position: relative;
        padding: var(--spacing-md);
        color: hsl(var(--color-text-inverted));

        &.buckle:after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            background: linear-gradient(0deg, hsl(var(--color-background-page) / 0.2) 0%, 65%, hsl(var(--color-background-page) / 0.05) 97.5%, hsl(var(--color-background-page) / 0.25) 99%, transparent 100%);
            width: 100%;
            height: 50%;
            filter: url(#paperbuckling);
        }
    }

    .ui-content-container__background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        box-shadow: 2px 5px 10px hsl(var(--color-background-page)), 0 0 20px hsl(var(--color-background)) inset;
        background: #fffef0;
        filter: url(#oldpaper);
        background-image: var(--content-container-background-image);
    }
</style>