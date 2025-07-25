<template>
    <div class="ui-dialog-container">
        <slot />
        <Icon class="ui-dialog-container__corner top-left" name="pixelarticons:command" />
        <Icon class="ui-dialog-container__corner top-right" name="pixelarticons:command" />
        <Icon class="ui-dialog-container__corner bottom-left" name="pixelarticons:command" />
        <Icon class="ui-dialog-container__corner bottom-right" name="pixelarticons:command" />
    </div>
</template>

<style lang="css">
    .ui-dialog-container {
        border: 2px solid hsl(var(--color-border));
        border-radius: var(--rounded-md);
        padding: var(--spacing-md);
        background:
            linear-gradient(to top,     hsl(var(--color-background-dark)) -4px, transparent 10px) top,
            linear-gradient(to bottom,  hsl(var(--color-background-dark)) -4px, transparent 10px) bottom,
            linear-gradient(to left,    hsl(var(--color-background-dark)) -4px, transparent 10px) left,
            linear-gradient(to right,   hsl(var(--color-background-dark)) -4px, transparent 10px) right,
            hsl(var(--color-background) / 0.8);
        box-shadow: 0px 0px 4px 2px hsl(var(--color-background-dark));
        position: relative;
        overflow: hidden;
    }

    .ui-dialog-container__corner {
        position: absolute;
        color: hsl(var(--color-border));

        &.top-left {
            top: 0;
            left: 0;
            transform: translate(-33%, -33%);
        }

        &.top-right {
            top: 0;
            right: 0;
            transform: translate(33%, -33%);
        }

        &.bottom-left {
            bottom: 0;
            left: 0;
            transform: translate(-33%, 33%);
        }

        &.bottom-right {
            bottom: 0;
            right: 0;
            transform: translate(33%, 33%);
        }
    }
</style>