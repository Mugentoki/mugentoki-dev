<template>
    <div v-show="isRealmActive()" class="absolute w-full h-full flex flex-col justify-center items-center">
        <slot />
    </div>
</template>

<script setup lang="ts">
    import { useRealmStore } from '~/stores/realm';

    const realmStore = useRealmStore();

    const { realm } = defineProps<{
        realm: string,
    }>()

    const isRealmActive = () => {
        return realmStore.getActiveRealm === realm;
    };
</script>