<template>
    <div v-show="isRealmActive()" class="absolute w-full h-full bg-orange-700">
        <img class="w-full h-full object-cover" :src="src" :alt="alt" />
    </div>
</template>

<script setup lang="ts">
    import { useRealmStore } from '~/stores/realm';

    const realmStore = useRealmStore();

    const { realm } = defineProps<{
        realm: string,
        src: string,
        alt: string,
    }>()

    const isRealmActive = () => {
        return realmStore.getActiveRealm === realm;
    };
</script>