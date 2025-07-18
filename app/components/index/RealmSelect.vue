<template>
    <button
        class="realm-select-button"
        @click="setRealm(realm)"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import { useRealmStore } from '~/stores/realm';

const realmStore = useRealmStore();

const { realm } = defineProps<{
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
    transition: background-color 0.3s;
    position: relative;
    overflow: hidden;
    width: 100%;

    &:hover {
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
        height: 150px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: var(--rounded-full);
        transform: translate(-50%, -50%);
        transition: width 0.4s, height 0.4s;
    }
}
</style>