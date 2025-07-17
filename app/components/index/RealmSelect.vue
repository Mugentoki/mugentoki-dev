<template>
    <button
        class="realm-select-button"
        @mouseenter="setRealm(realm)"
        @click="setRealm(realm)"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import { useRealmStore } from '~/stores/realm';

const realmStore = useRealmStore();

defineProps<{
    realm: string,
}>()

function setRealm(realm: string) {
    realmStore.setRealm(realm);
}
</script>

<style lang="css">
.realm-select-button {
    background-color: var(--color-button-background);
    color: var(--color-button-text);
    border: none;
    padding: 12px 24px;
    border-radius: 25px;
    cursor: pointer;
    transition: transform 0.2s, background-color 0.3s;
    position: relative;
    overflow: hidden;
    width: 100%;

    &:hover {
        transform: scale(1.1);

        &:after {
            width: 70%;
            height: 150px;
        }
    }

    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 0;
        height: 0;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        transition: width 0.4s, height 0.4s;
    }
}
</style>