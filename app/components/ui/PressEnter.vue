<template>
    <div class="ui-press-enter" :class="{ 'pressed': pressed }">
        <div v-if="$device.isDesktop" class="ui-press-enter__icon">
            <Icon name="uil:enter" size="2em" />
        </div>
        <div v-else class="ui-press-enter__icon">
            <Icon name="carbon:touch-1" />
        </div>
        <p v-if="$device.isDesktop">{{ $t('Press Enter or click anywhere to continue') }}</p>
        <p v-else>{{ $t('Tap anywhere to continue') }}</p>
    </div>
</template>

<script setup lang="ts">
const { pressed } = defineProps<{
    pressed?: boolean;
}>();
</script>

<style lang="css">
.ui-press-enter {
    display: flex;
    gap: var(--spacing-md);
    justify-content: center;
    align-items: center;

    p {
        margin: 0;
        font-size: var(--font-xl);
    }

    .ui-press-enter__icon {
        display: flex;
        padding: var(--spacing-sm);
        border-radius: var(--rounded-full);
        border: 1px solid hsl(var(--color-ui-primary));
        position: relative;
        z-index: 2;
        animation: breath 2s infinite;


    }

    &.pressed {
        .ui-press-enter__icon {
            &:before {
                content: '';
                position: absolute;
                z-index: 1;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: var(--rounded-full);
                border: 1px solid hsl(var(--color-ui-primary));
                animation: pulse 0.8s ease-in-out 1;
            }
        }
    }
}
</style>