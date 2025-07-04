<template>
    <button
        :id="id"
        class="transition-bg duration-500"
        :class="isRealmActive() ? 'bg-[var(--realm-primary-color)]': 'bg-transparent'"
        @mouseenter="setRealm(id)"
        @focus="setRealm(id)"
    >
        <div class="w-full h-full flex justify-center items-end pb-8">{{ title }}</div>
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