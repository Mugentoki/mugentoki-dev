<template>
    <button
        :id="id"
        class="transition-bg duration-500 py-4 lg:py-0 border-b border-realm-primary"
        :class="isRealmActive() ? 'bg-realm-primary': 'bg-realm-primary/10'"
        @mouseenter="setRealm(id)"
        @focus="setRealm(id)"
    >
        <div class="w-full h-full flex justify-center items-end">{{ title }}</div>
    </button>
</template>

<script setup lang="ts">
    import { useRealmStore } from '~/stores/realm';

    const realmStore = useRealmStore();

    const { id } = defineProps<{
        id: string,
        title: string,
    }>()

    const isRealmActive = () => {
        return realmStore.getActiveRealm === id;
    };

    const setRealm = (realm: string) => {
        realmStore.setActiveRealm(realm);
    };
</script>